
import { useState } from 'react';
import { CalendarIcon, Clock, Users } from 'lucide-react';
import LocationSearch from './LocationSearch';
import VehicleSelection from './VehicleSelection';
import RideSummary from './RideSummary';
import { cn } from '@/lib/utils';

// Define the vehicle types
export type VehicleType = {
  id: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
  image: string;
  estimatedTime: string;
};

const vehicles: VehicleType[] = [
  {
    id: 'standard',
    name: 'Standard',
    description: 'Comfortable and affordable',
    price: 25,
    capacity: 4,
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGF4aXxlbnwwfHwwfHx8MA%3D%3D',
    estimatedTime: '15 min',
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Extra comfort and space',
    price: 35,
    capacity: 4,
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGx1eHVyeSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D',
    estimatedTime: '12 min',
  },
  {
    id: 'suv',
    name: 'SUV',
    description: 'Perfect for groups',
    price: 45,
    capacity: 6,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3V2fGVufDB8fDB8fHww',
    estimatedTime: '18 min',
  },
  {
    id: 'luxury',
    name: 'Luxury',
    description: 'Travel in style',
    price: 65,
    capacity: 3,
    image: 'https://images.unsplash.com/photo-1549925862-990918991bcd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bHV4dXJ5JTIwY2FyfGVufDB8fDB8fHww',
    estimatedTime: '10 min',
  }
];

const BookingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [passengers, setPassengers] = useState('1');
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleType | null>(null);
  const [isBookingComplete, setIsBookingComplete] = useState(false);

  const handleContinue = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleBookNow = () => {
    // In a real app, this would submit the booking to an API
    console.log('Booking submitted:', {
      pickup,
      destination,
      date,
      time,
      passengers,
      vehicle: selectedVehicle
    });
    setIsBookingComplete(true);
  };

  const resetForm = () => {
    setCurrentStep(1);
    setIsBookingComplete(false);
    setSelectedVehicle(null);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-neutral-100">
      {/* Form header */}
      <div className="bg-neutral-50 p-6 border-b border-neutral-100">
        <h2 className="text-xl font-semibold text-neutral-800">Book Your Ride</h2>
        {!isBookingComplete && (
          <div className="flex items-center mt-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors",
                    currentStep === step
                      ? "bg-primary text-white"
                      : currentStep > step
                        ? "bg-green-100 text-green-700"
                        : "bg-neutral-100 text-neutral-500"
                  )}
                >
                  {currentStep > step ? '✓' : step}
                </div>
                {step < 3 && (
                  <div
                    className={cn(
                      "h-1 w-12 mx-2 transition-colors",
                      currentStep > step ? "bg-primary" : "bg-neutral-200"
                    )}
                  ></div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Form body */}
      <div className="p-6">
        {isBookingComplete ? (
          <div className="flex flex-col items-center justify-center py-8 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-neutral-800 mb-2">Booking Confirmed!</h3>
            <p className="text-neutral-600 text-center mb-6">
              Your taxi will arrive at {pickup} on {date} at {time}.
            </p>
            <button
              onClick={resetForm}
              className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Book Another Ride
            </button>
          </div>
        ) : (
          <>
            {/* Step 1: Location and basic details */}
            <div className={cn("transition-all duration-300", currentStep === 1 ? "block" : "hidden")}>
              <div className="space-y-4">
                <LocationSearch
                  placeholder="Enter pickup location"
                  onChange={setPickup}
                  defaultValue={pickup}
                />

                <LocationSearch
                  placeholder="Enter destination"
                  onChange={setDestination}
                  defaultValue={destination}
                />

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <div className="flex items-center w-full px-4 py-3 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-all bg-white">
                      <CalendarIcon size={18} className="text-neutral-400 mr-2 flex-shrink-0" />
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="flex-1 bg-transparent border-none outline-none text-neutral-800 placeholder:text-neutral-400"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <div className="flex items-center w-full px-4 py-3 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-all bg-white">
                      <Clock size={18} className="text-neutral-400 mr-2 flex-shrink-0" />
                      <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="flex-1 bg-transparent border-none outline-none text-neutral-800 placeholder:text-neutral-400"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex items-center w-full px-4 py-3 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-all bg-white">
                    <Users size={18} className="text-neutral-400 mr-2 flex-shrink-0" />
                    <select
                      value={passengers}
                      onChange={(e) => setPassengers(e.target.value)}
                      className="flex-1 bg-transparent border-none outline-none text-neutral-800 appearance-none cursor-pointer"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num}>{num} Passenger{num !== 1 ? 's' : ''}</option>
                      ))}
                    </select>
                    <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Vehicle selection */}
            <div className={cn("transition-all duration-300", currentStep === 2 ? "block" : "hidden")}>
              <VehicleSelection
                vehicles={vehicles}
                selectedVehicle={selectedVehicle}
                onSelect={setSelectedVehicle}
              />
            </div>

            {/* Step 3: Summary and confirmation */}
            <div className={cn("transition-all duration-300", currentStep === 3 ? "block" : "hidden")}>
              <RideSummary
                pickup={pickup}
                destination={destination}
                date={date}
                time={time}
                passengers={parseInt(passengers)}
                vehicle={selectedVehicle}
              />
            </div>

            {/* Form navigation */}
            <div className="mt-6 flex justify-between">
              {currentStep > 1 && (
                <button
                  onClick={handleBack}
                  className="px-5 py-2 border border-neutral-300 rounded-full text-neutral-700 font-medium hover:bg-neutral-50 transition-colors"
                >
                  Back
                </button>
              )}
              <div className="flex-1"></div>
              {currentStep < 3 ? (
                <button
                  onClick={handleContinue}
                  disabled={
                    (currentStep === 1 && (!pickup || !destination || !date || !time)) ||
                    (currentStep === 2 && !selectedVehicle)
                  }
                  className={cn(
                    "px-5 py-2 rounded-full font-medium transition-colors",
                    ((currentStep === 1 && (!pickup || !destination || !date || !time)) ||
                      (currentStep === 2 && !selectedVehicle))
                      ? "bg-neutral-200 text-neutral-500 cursor-not-allowed"
                      : "bg-primary text-white hover:bg-primary/90"
                  )}
                >
                  Continue
                </button>
              ) : (
                <button
                  onClick={handleBookNow}
                  className="px-6 py-2 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                  Confirm Booking
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BookingForm;
