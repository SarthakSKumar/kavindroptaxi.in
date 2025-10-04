import { useState } from "react";
import { MapPin, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface LocationSearchProps {
  placeholder: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  className?: string;
}

const LocationSearch = ({ placeholder, defaultValue = "", onChange, className }: LocationSearchProps) => {
  const [value, setValue] = useState(defaultValue);
  const [suggestions, setSuggestions] = useState<{ display_name: string }[]>([]);
  const [isFocused, setIsFocused] = useState(false);

  const fetchSuggestions = async (query: string) => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&countrycodes=IN&q=${encodeURIComponent(query)}`
      );
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error("Error fetching location data:", error);
    }
  };


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange(newValue);
    fetchSuggestions(newValue);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setValue(suggestion);
    onChange(suggestion);
    setSuggestions([]);
  };

  const handleClearInput = () => {
    setValue("");
    onChange("");
    setSuggestions([]);
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
          onBlur={() => setTimeout(() => setIsFocused(false), 150)}
          placeholder={placeholder}
          className="flex-1 bg-transparent border-none outline-none text-neutral-800 placeholder:text-neutral-500"
        />
        {value && (
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
      {isFocused && suggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-neutral-200 rounded-lg shadow-lg overflow-hidden">
          <ul className="py-1 max-h-60 overflow-auto">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-neutral-50 cursor-pointer transition-colors flex items-center"
                onClick={() => handleSuggestionClick(suggestion.display_name)}
              >
                <MapPin size={16} className="text-neutral-500 mr-2 flex-shrink-0" />
                <span className="text-neutral-700">{suggestion.display_name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LocationSearch;