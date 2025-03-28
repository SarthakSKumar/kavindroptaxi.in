import { useState, useEffect } from 'react';
import { CalendarIcon, Clock, User, Phone, ChevronDown, Car } from 'lucide-react';
import LocationSearch from './LocationSearch';
import { cn } from '@/lib/utils';
import DatePicker from "react-datepicker";

export type VehicleType = {
  id: string;
  name: string;
  capacity: number;
  image: string;
  description: string;
};

const vehicles: VehicleType[] = [
  {
    id: 'suv1',
    name: 'Toyota Innova ',
    capacity: 7,
    image: '/vehicles/suv.jpg',
    description: 'Perfect for family road trips'
  },
  {
    id: 'suv2',
    name: 'Toyota Innova Crysta ',
    capacity: 7,
    image: '/vehicles/suv.jpg',
    description: 'Perfect for family road trips'
  },
  {
    id: 'sedan',
    name: 'Toyota Etios',
    capacity: 4,
    image: '/vehicles/sedan.jpg',
    description: 'Comfortable for small groups'
  },
  {
    id: 'sedan2',
    name: 'Etios',
    capacity: 4,
    image: '/hero2.jpg',
    description: 'Economic and fuel efficient'
  }
];

const BookingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    pickup: '',
    destination: '',
    date: '',
    time: '',
    selectedVehicle: null as VehicleType | null,
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const isStepOneValid = () => {
    return formData.name &&
      formData.mobile &&
      formData.pickup &&
      formData.destination &&
      formData.date &&
      formData.time &&
      formData.selectedVehicle;
  };

  const handleContinue = () => {
    if (isStepOneValid()) {
      setCurrentStep(2);
    }
  };

  const handleConfirmBooking = () => {
    setCurrentStep(3);
  };

  const getMinTime = () => {
    const today = new Date().toISOString().split('T')[0];
    return formData.date === today
      ? new Date().toTimeString().slice(0, 5)
      : '00:00';
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-[450px]">
      <div className="bg-primary p-3 px-6 border-b border-neutral-100">
        <h2 className="text-lg font-semibold text-neutral-800">Quick Booking</h2>
      </div>

      <div className="py-4 px-6">
        {currentStep === 1 && (
          <div className="space-y-3">
            {/* Personal Details */}
            <div className="flex items-center w-full p-3 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-all">
              <User className="text-neutral-400 w-5 h-5 mr-2" />
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="flex-1 bg-transparent border-none outline-none"
              />
            </div>

            {/* Mobile Number */}
            <div className="flex items-center w-full p-3 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-all">
              <Phone className="text-neutral-400 w-5 h-5 mr-2" />
              <span className="text-neutral-600 font-medium pr-1">+91</span>
              <input
                type="tel"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={(e) => {
                  const input = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                  if (input.length <= 10) {
                    handleInputChange("mobile", input);
                  }
                }}
                pattern="[6-9]{1}[0-9]{9}" // Ensures a valid Indian number
                maxLength={10} // Limits input to 10 digits
                required
                className="flex-1 bg-transparent border-none outline-none pl-2"
              />
            </div>

            {/* Location Fields */}
            <LocationSearch
              placeholder="Enter pickup location"
              onChange={(value) => handleInputChange('pickup', value)}
              defaultValue={formData.pickup}
            />

            <LocationSearch
              placeholder="Enter destination"
              onChange={(value) => handleInputChange('destination', value)}
              defaultValue={formData.destination}
            />

            {/* Date and Time */}
            <div className="grid grid-cols-2 gap-4">
              {/* Date Picker */}
              <div className="flex items-center w-full px-4 py-3 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-all">
                <CalendarIcon className="text-neutral-400 w-5 h-5 mr-2" />
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  min={new Date().toISOString().split('T')[0]} // Prevent past dates
                  className="flex-1 bg-transparent border-none outline-none placeholder-neutral-200"
                />
              </div>

              {/* Time Picker */}
              <div className="flex items-center w-full px-4 py-3 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-all">
                <Clock className="text-neutral-400 w-5 h-5 mr-2" />
                <input
                  type="time"
                  value={formData.time}
                  onChange={(e) => handleInputChange('time', e.target.value)}
                  min={getMinTime()} // Prevent past time selection for today
                  className="flex-1 bg-transparent border-none outline-none"
                />
              </div>
            </div>

            {/* Vehicle Selection */}
            <div className="flex items-center w-full p-3 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-all">
              <Car className="text-neutral-400 w-5 h-5 mr-2" />
              <select
                value={formData.selectedVehicle?.id || ''}
                onChange={(e) => {
                  const vehicle = vehicles.find(v => v.id === e.target.value);
                  setFormData(prev => ({
                    ...prev,
                    selectedVehicle: vehicle || null
                  }));
                }}
                className="flex-1 bg-transparent border-none outline-none cursor-pointer"
              >
                <option value="" className="text-sm">Select Vehicle Type</option>
                {vehicles.map((vehicle) => (
                  <option key={vehicle.id} value={vehicle.id} className="text-sm">
                    {vehicle.name} ({vehicle.capacity} seater)
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleContinue}
              disabled={!isStepOneValid()}
              className={cn(
                "w-full py-3 rounded-full font-medium transition-colors mt-4",
                isStepOneValid()
                  ? "bg-primary text-neutral-800 hover:bg-primary/90"
                  : "bg-neutral-200 text-neutral-500 cursor-not-allowed"
              )}
            >
              Book Now
            </button>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-4">
            <div className="bg-neutral-50 p-4 rounded-lg">
              <div className="flex justify-between">
                <span className="text-neutral-500">Name</span>
                <span className="font-medium">{formData.name}</span>
              </div>
            </div>

            <button
              onClick={handleConfirmBooking}
              className="w-full py-3 rounded-full font-medium bg-primary text-neutral-800 hover:bg-primary/90 transition-colors"
            >
              Confirm Booking
            </button>
          </div>
        )}

        {currentStep === 3 && (
          <div className="text-center">
            <h3 className="text-xl font-semibold">Booking Confirmed!</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingForm;
