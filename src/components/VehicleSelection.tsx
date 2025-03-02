
import { useEffect, useRef } from 'react';
import { Users, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { VehicleType } from './BookingForm';

interface VehicleSelectionProps {
  vehicles: VehicleType[];
  selectedVehicle: VehicleType | null;
  onSelect: (vehicle: VehicleType) => void;
}

const VehicleSelection = ({ vehicles, selectedVehicle, onSelect }: VehicleSelectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-scroll to selected vehicle
    if (selectedVehicle && containerRef.current) {
      const selectedElement = containerRef.current.querySelector(`[data-vehicle-id="${selectedVehicle.id}"]`);
      if (selectedElement) {
        selectedElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    }
  }, [selectedVehicle]);

  return (
    <div ref={containerRef} className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
      <h3 className="text-lg font-medium text-neutral-900 mb-3">Select a vehicle</h3>

      {vehicles.map((vehicle) => (
        <div
          key={vehicle.id}
          data-vehicle-id={vehicle.id}
          className={cn(
            "relative border rounded-xl overflow-hidden transition-all duration-300 cursor-pointer",
            selectedVehicle?.id === vehicle.id
              ? "border-primary ring-2 ring-primary/20"
              : "border-neutral-200 hover:border-neutral-300"
          )}
          onClick={() => onSelect(vehicle)}
        >
          <div className="flex flex-col sm:flex-row">
            {/* Vehicle image */}
            <div className="sm:w-1/3 h-40 sm:h-auto relative overflow-hidden">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-2 left-2 px-2 py-1 bg-white/90 rounded-md text-xs font-medium text-neutral-800">
                {vehicle.estimatedTime} away
              </div>
            </div>

            {/* Vehicle details */}
            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold text-neutral-900">{vehicle.name}</h4>
                  <div className="text-xl font-bold text-primary">${vehicle.price}</div>
                </div>
                <p className="text-neutral-500 text-sm mb-3">{vehicle.description}</p>

                <div className="flex items-center gap-4 text-sm text-neutral-600">
                  <div className="flex items-center">
                    <Users size={16} className="mr-1 text-neutral-400" />
                    <span>Up to {vehicle.capacity} passengers</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1 text-neutral-400" />
                    <span>{vehicle.estimatedTime}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-100 flex justify-between items-center">
                <div className="flex space-x-1">
                  {Array(5).fill(0).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-xs text-neutral-500 ml-1">4.9</span>
                </div>
                <button className="text-primary text-sm font-medium hover:underline">
                  View details
                </button>
              </div>
            </div>
          </div>

          {/* Selected indicator */}
          {selectedVehicle?.id === vehicle.id && (
            <div className="absolute top-3 right-3 bg-primary text-white p-1 rounded-full">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default VehicleSelection;
