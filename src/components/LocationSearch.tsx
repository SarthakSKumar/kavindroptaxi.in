
import { useState } from 'react';
import { Search, MapPin, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LocationSearchProps {
  placeholder: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  className?: string;
}

const LocationSearch = ({ placeholder, defaultValue = '', onChange, className }: LocationSearchProps) => {
  const [value, setValue] = useState(defaultValue);
  const [isFocused, setIsFocused] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Mock suggestions - in a real app, these would come from an API
  const mockSuggestions = [
    "Airport Terminal 1",
    "Airport Terminal 2",
    "Central Station",
    "Downtown",
    "Business District",
    "Convention Center",
    "Shopping Mall",
    "Marina Bay Hotel",
    "Grand Plaza"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange(newValue);
    
    // Simple mock suggestion filtering
    if (newValue.trim()) {
      const filtered = mockSuggestions.filter(
        suggestion => suggestion.toLowerCase().includes(newValue.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setValue(suggestion);
    onChange(suggestion);
    setSuggestions([]);
  };

  const handleClearInput = () => {
    setValue('');
    onChange('');
    setSuggestions([]);
  };

  return (
    <div className={cn("relative", className)}>
      <div 
        className={cn(
          "flex items-center w-full px-4 py-3 rounded-lg border transition-all duration-200 bg-white",
          isFocused ? "ring-2 ring-primary/20 border-primary/30" : "border-gray-200 hover:border-gray-300"
        )}
      >
        <MapPin size={18} className="text-gray-400 mr-2 flex-shrink-0" />
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            // Delay hiding suggestions to allow clicking on them
            setTimeout(() => setIsFocused(false), 150);
          }}
          placeholder={placeholder}
          className="flex-1 bg-transparent border-none outline-none text-gray-800 placeholder:text-gray-400"
        />
        {value && (
          <button 
            onClick={handleClearInput}
            className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Suggestions dropdown */}
      {isFocused && suggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden animate-scale-in origin-top">
          <ul className="py-1 max-h-60 overflow-auto">
            {suggestions.map((suggestion, index) => (
              <li 
                key={index}
                className="px-4 py-2 hover:bg-gray-50 cursor-pointer transition-colors flex items-center"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                <MapPin size={16} className="text-gray-400 mr-2 flex-shrink-0" />
                <span className="text-gray-700">{suggestion}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LocationSearch;
