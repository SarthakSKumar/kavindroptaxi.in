
import { CalendarIcon, Clock, Users, MapPin } from 'lucide-react';
import type { VehicleType } from './BookingForm';

interface RideSummaryProps {
  pickup: string;
  destination: string;
  date: string;
  time: string;
  passengers: number;
  vehicle: VehicleType | null;
}

const RideSummary = ({ pickup, destination, date, time, passengers, vehicle }: RideSummaryProps) => {
  if (!vehicle) return null;

  // Format date for display
  const formattedDate = date ? new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) : '';

  // Calculate estimated distance and total price (mock)
  const estimatedDistance = 12.5; // miles
  const baseFare = vehicle.price;
  const distanceFare = estimatedDistance * 1.2;
  const serviceFee = 3.5;
  const total = baseFare + distanceFare + serviceFee;

  return (
    <div className="animate-fade-in">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Ride Summary</h3>
      
      <div className="bg-gray-50 rounded-xl p-5 mb-6">
        <div className="flex items-start mb-4">
          <div className="mt-1 mr-3">
            <div className="w-4 h-4 rounded-full bg-primary"></div>
            <div className="w-0.5 h-12 bg-gray-300 mx-auto my-1"></div>
            <div className="w-4 h-4 rounded-full bg-gray-800"></div>
          </div>
          <div className="flex-1">
            <div className="mb-3">
              <p className="text-sm text-gray-500">Pickup Location</p>
              <p className="font-medium text-gray-900">{pickup}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Destination</p>
              <p className="font-medium text-gray-900">{destination}</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-200">
          <div className="flex items-center">
            <CalendarIcon size={16} className="text-gray-400 mr-2" />
            <div>
              <p className="text-sm text-gray-500">Date</p>
              <p className="font-medium text-gray-900">{formattedDate}</p>
            </div>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="text-gray-400 mr-2" />
            <div>
              <p className="text-sm text-gray-500">Time</p>
              <p className="font-medium text-gray-900">{time}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-xl p-5 mb-6">
        <div className="flex items-center mb-4">
          <img 
            src={vehicle.image} 
            alt={vehicle.name}
            className="w-16 h-16 object-cover rounded-lg mr-4" 
          />
          <div>
            <h4 className="font-semibold text-gray-900">{vehicle.name}</h4>
            <div className="flex items-center text-sm text-gray-600 mt-1">
              <Users size={14} className="mr-1" />
              <span>{vehicle.capacity} passengers</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Base fare</span>
            <span className="font-medium">${baseFare.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Distance ({estimatedDistance} miles)</span>
            <span className="font-medium">${distanceFare.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">Service fee</span>
            <span className="font-medium">${serviceFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg font-semibold border-t border-gray-300 pt-3">
            <span>Total</span>
            <span className="text-primary">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center text-sm text-gray-600 mb-2">
        <Clock size={16} className="mr-2 text-gray-400" />
        <span>Estimated arrival: {vehicle.estimatedTime}</span>
      </div>
      
      <div className="flex items-center text-sm text-gray-600">
        <MapPin size={16} className="mr-2 text-gray-400" />
        <span>Estimated distance: {estimatedDistance} miles</span>
      </div>
    </div>
  );
};

export default RideSummary;
