import { useState, useEffect } from 'react';
import { CalendarIcon, Clock, User, Phone, ChevronDown, Car } from 'lucide-react';
import LocationSearch from './LocationSearch';
import { cn } from '@/lib/utils';

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
    name: 'Toyota Innova single 20 RT 18',
    capacity: 7,
    image: '/vehicles/suv.jpg',
    description: 'Perfect for family road trips'
  },
  {
    id: 'suv2',
    name: 'Toyota Innova Crysta single 22 RT',
    capacity: 7,
    image: '/vehicles/suv.jpg',
    description: 'Perfect for family road trips'
  },
  {
    id: 'suv3',
    name: 'MUV single 19 RT 17',
    capacity: 7,
    image: '/vehicles/suv.jpg',
    description: 'Perfect for family road trips'
  },
  {
    id: 'suv4',
    name: 'Mahindra Xylo',
    capacity: 7,
    image: '/vehicles/suv.jpg',
    description: 'Perfect for family road trips'
  },  {
    id: 'suv5',
    name: 'Mahindra Marrazo',
    capacity: 7,
    image: '/vehicles/suv.jpg',
    description: 'Perfect for family road trips'
  },  {
    id: 'suv6',
    name: 'Maruti Suzuki Ertiga ',
    capacity: 7,
    image: '/vehicles/suv.jpg',
    description: 'Perfect for family road trips'
  },  {
    id: 'suv7',
    name: 'Toyota Rumion',
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
  },
  {
    id: 'sedan3',
    name: 'Honda Amaze',
    capacity: 4,
    image: '/vehicles/innova.jpg',
    description: 'Spacious premium family vehicle'
  },
  {
    id: 'sedan4',
    name: 'Maruti Suzuki Ciaz',
    capacity: 4,
    image: '/vehicles/innova.jpg',
    description: 'Spacious premium family vehicle'
  },
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
  const [isVehicleDropdownOpen, setIsVehicleDropdownOpen] = useState(false);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isVehicleDropdownOpen) {
        setIsVehicleDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isVehicleDropdownOpen]);

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
            <input
              type="tel"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={(e) => handleInputChange("mobile", e.target.value)}
              pattern="[6-9]{1}[0-9]{9}" // Ensures valid Indian number
              maxLength={10} // Limits input to 10 digits
              required
              className="flex-1 bg-transparent border-none outline-none"
            />
          </div>

            {/* <div className="flex items-center w-full p-3 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-all">
              <Phone className="text-neutral-400 w-5 h-5 mr-2" />
              <input
                type="tel"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={(e) => handleInputChange('mobile', e.target.value)}
                className="flex-1 bg-transparent border-none outline-none"
              />
            </div> */}

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
                  min={new Date().toISOString().split('T')[0]} // Restricts past dates
                  className="flex-1 bg-transparent border-none outline-none placeholder-neutral-200"
                />
              </div>

              {/* Time Picker */}
              <div className="flex items-center w-full px-4 py-3 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-all">
                <input
                  type="time"
                  value={formData.time}
                  onChange={(e) => handleInputChange('time', e.target.value)}
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
            <div className="bg-neutral-50 p-4 rounded-lg space-y-3">
              <div className="flex justify-between">
                <span className="text-neutral-500">Name</span>
                <span className="font-medium">{formData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Mobile</span>
                <span className="font-medium">{formData.mobile}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">From</span>
                <span className="font-medium">{formData.pickup}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">To</span>
                <span className="font-medium">{formData.destination}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Date</span>
                <span className="font-medium">{formData.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Time</span>
                <span className="font-medium">{formData.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Vehicle</span>
                <span className="font-medium">{formData.selectedVehicle?.name}</span>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setCurrentStep(1)}
                className="flex-1 py-3 rounded-full font-medium border border-neutral-200 hover:bg-neutral-50 transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleConfirmBooking}
                className="flex-1 py-3 rounded-full font-medium bg-primary text-neutral-800 hover:bg-primary/90 transition-colors"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Booking Confirmed!</h3>
            <p className="text-neutral-600">
              Thank you for choosing our service. Our executive will contact you shortly to confirm your booking details.
            </p>
            <button
              onClick={() => {
                setCurrentStep(1);
                setFormData({
                  name: '',
                  mobile: '',
                  pickup: '',
                  destination: '',
                  date: '',
                  time: '',
                  selectedVehicle: null,
                });
              }}
              className="w-full py-3 rounded-full font-medium bg-primary text-neutral-800 hover:bg-primary/90 transition-colors mt-4"
            >
              Book Another Ride
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingForm;
