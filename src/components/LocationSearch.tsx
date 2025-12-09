import { useState, useRef, useEffect } from "react";
import { MapPin, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type LocationResult = {
  address: string;
  lat: number;
  lng: number;
  placeId: string;
};

interface LocationSearchProps {
  placeholder: string;
  defaultValue?: string;
  onChange: (value: LocationResult | null) => void;
  className?: string;
}

interface NominatimResult {
  place_id: number;
  display_name: string;
  lat: string;
  lon: string;
}

interface PhotonFeature {
  geometry: {
    coordinates: [number, number]; // [lng, lat]
  };
  properties: {
    osm_id?: number;
    name?: string;
    street?: string;
    housenumber?: string;
    city?: string;
    district?: string;
    state?: string;
    country?: string;
    postcode?: string;
  };
}

// Format Photon result into a readable address
const formatPhotonResult = (feature: PhotonFeature): string => {
  const props = feature.properties;
  const parts: string[] = [];
  
  if (props.name) parts.push(props.name);
  if (props.street) {
    const street = props.housenumber ? `${props.housenumber} ${props.street}` : props.street;
    if (!parts.includes(street)) parts.push(street);
  }
  if (props.district && !parts.includes(props.district)) parts.push(props.district);
  if (props.city && !parts.includes(props.city)) parts.push(props.city);
  if (props.state && !parts.includes(props.state)) parts.push(props.state);
  if (props.country && !parts.includes(props.country)) parts.push(props.country);
  
  return parts.join(', ') || 'Unknown location';
};

const LocationSearch = ({ placeholder, defaultValue = "", onChange, className }: LocationSearchProps) => {
  const [value, setValue] = useState(defaultValue);
  const [suggestions, setSuggestions] = useState<NominatimResult[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const selectedPlaceIdRef = useRef<string | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);
  const debounceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const fetchSuggestions = async (query: string) => {
    if (!query.trim()) {
      setSuggestions([]);
      setIsLoading(false);
      return;
    }

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    abortControllerRef.current = new AbortController();
    setIsLoading(true);

    try {
      // Use Photon API (Komoot) - CORS-friendly geocoding based on OpenStreetMap data
      const response = await fetch(
        `https://photon.komoot.io/api/?q=${encodeURIComponent(query)}&limit=5&lang=en`,
        {
          signal: abortControllerRef.current.signal,
        }
      );
      const data = await response.json();
      
      // Transform Photon response to match our NominatimResult format
      const results: NominatimResult[] = data.features?.map((feature: PhotonFeature) => ({
        place_id: feature.properties.osm_id || Math.random(),
        display_name: formatPhotonResult(feature),
        lat: feature.geometry.coordinates[1].toString(),
        lon: feature.geometry.coordinates[0].toString(),
      })) || [];
      
      setSuggestions(results);
    } catch (error: unknown) {
      if (error instanceof Error && error.name !== 'AbortError') {
        console.error("Error fetching location data:", error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    selectedPlaceIdRef.current = null;
    onChange(null);

    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    if (newValue.trim()) {
      setIsLoading(true);
      debounceTimerRef.current = setTimeout(() => {
        fetchSuggestions(newValue);
      }, 400);
    } else {
      setSuggestions([]);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  const handleSuggestionClick = (suggestion: NominatimResult) => {
    const address = suggestion.display_name;
    const lat = parseFloat(suggestion.lat);
    const lng = parseFloat(suggestion.lon);
    const placeId = suggestion.place_id.toString();

    selectedPlaceIdRef.current = placeId;
    setValue(address);
    setSuggestions([]);
    setIsLoading(false);

    onChange({ address, lat, lng, placeId });
  };

  const handleClearInput = () => {
    setValue("");
    selectedPlaceIdRef.current = null;
    onChange(null);
    setSuggestions([]);
    setIsLoading(false);
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
      if (!selectedPlaceIdRef.current) {
        setValue("");
        onChange(null);
        setSuggestions([]);
      }
    }, 150);
  };

  return (
    <div className={cn("relative", className)}>
      <div className="flex items-center w-full px-4 py-3 rounded-lg border transition-all duration-200 bg-white border-neutral-200 hover:border-neutral-300">
        <MapPin size={18} className="text-neutral-500 mr-2 flex-shrink-0" />
        <input
          type="text"
          name="location"
          aria-label="Location"
          value={value}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
          placeholder={placeholder}
          className="flex-1 bg-transparent border-none outline-none text-neutral-800 placeholder:text-neutral-500"
        />
        {isLoading && (
          <div className="flex-shrink-0 mr-2">
            <div className="w-4 h-4 border-2 border-neutral-300 border-t-neutral-600 rounded-full animate-spin"></div>
          </div>
        )}
        {value && !isLoading && (
          <button
            onClick={handleClearInput}
            type="button"
            aria-label="Clear input"

            className="flex-shrink-0 text-neutral-500 hover:text-neutral-600 transition-colors"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Suggestions dropdown */}
      {isFocused && (suggestions.length > 0 || isLoading) && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-neutral-200 rounded-lg shadow-lg overflow-hidden">
          {isLoading && suggestions.length === 0 ? (
            <div className="px-4 py-3 text-center text-neutral-500 text-sm">
              Searching...
            </div>
          ) : (
            <ul className="py-1 max-h-60 overflow-auto">
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion.place_id}
                  className="px-4 py-2 hover:bg-neutral-50 cursor-pointer transition-colors flex items-center"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  <MapPin size={16} className="text-neutral-500 mr-2 flex-shrink-0" />
                  <span className="text-neutral-700 text-sm">{suggestion.display_name}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default LocationSearch;