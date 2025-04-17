import { useState, useEffect } from 'react';
import { CalendarIcon, User, Phone, Car } from 'lucide-react';
import LocationSearch from './LocationSearch';
import { cn } from '@/lib/utils';
import { bookingConfirmationFields } from '@/constants/form';
import { FleetInfo, fleet } from '@/constants/fleet';

const BookingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    pickup: '',
    destination: '',
    date: '',
    time: '',
    selectedVehicle: null as FleetInfo | null,
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

  const getMinTime = () => {
    const today = new Date().toISOString().split('T')[0];
    return formData.date === today
      ? new Date().toTimeString().slice(0, 5)
      : '00:00';
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
        <h2 className="text-xl font-semibold text-neutral-800 ">Quick Booking</h2>
      </div>

      <div className="py-4 px-6">
        {currentStep === 1 && (
          <div className="space-y-3">
            {/* Personal Details */}
            <div className="flex items-center w-full p-3 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-all">
              <User className="text-neutral-400 w-5 h-5 mr-2" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-lg"
              />
            </div>

            {/* Mobile Number */}
            <div className="flex items-center w-full p-3 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-all">
              <Phone className="text-neutral-400 w-5 h-5 mr-2" />
              <span className="text-neutral-600 font-medium pr-1 text-lg">+91</span>
              <input
                type="tel"
                name="mobile"
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
                className="flex-1 bg-transparent border-none outline-none pl-2 text-lg"
              />
            </div>

            {/* Location Fields */}
            <LocationSearch
              placeholder="Enter pickup location"
              onChange={(value) => handleInputChange('pickup', value)}
              defaultValue={formData.pickup}
              className='mb-4 text-lg'
            />

            <LocationSearch
              placeholder="Enter destination"
              onChange={(value) => handleInputChange('destination', value)}
              defaultValue={formData.destination}
              className='mb-4 text-lg'
            />

            {/* Date and Time */}
            <div className="grid grid-cols-2 gap-4">
              {/* Date Picker */}
              <div className="flex items-center w-full px-4 py-3 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-all">
                <CalendarIcon className="text-neutral-400 w-5 h-5 mr-2" />
                <input
                  type="date"
                  name="date"
                  inputMode="numeric"
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="flex-1 bg-transparent border-none outline-none placeholder-neutral-200"
                />
              </div>

              {/* Time Picker */}
              <div className="flex items-center w-full px-4 py-3 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-all">
                <input
                  type="time"
                  name="time"
                  inputMode="numeric"
                  value={formData.time}
                  onChange={(e) => handleInputChange('time', e.target.value)}
                  min={getMinTime()}
                  className="flex-1 bg-transparent border-none outline-none"
                />
              </div>
            </div>
            {/* Vehicle Selection */}
            <div className="flex items-center w-full p-3 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-all">
              <Car className="text-neutral-400 w-5 h-5 mr-2" />
              <select
                aria-labelledby='Vehicle Select'
                value={formData.selectedVehicle?.id || ''}
                onChange={(e) => {
                  const vehicle = fleet.find(v => v.id === Number(e.target.value));
                  setFormData(prev => ({
                    ...prev,
                    selectedVehicle: vehicle || null
                  }));
                }}
                className="flex-1 bg-transparent border-none outline-none cursor-pointer"
              >
                <option value="" className="text-sm">Select Vehicle Type</option>
                {fleet.map((vehicle) => (
                  <option key={vehicle.id} value={vehicle.id} className="text-sm">
                    {vehicle.name} ({vehicle.capacity} Seats)
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleContinue}
              disabled={!isStepOneValid()}
              type="button"
              id="continue"
              aria-label="Continue to Booking Confirmation"
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
              {bookingConfirmationFields.map((field) => (
                <div key={field.key} className="flex justify-between">
                  <span className="text-neutral-500">{field.label}</span>
                  <span
                    className={cn(
                      "font-medium",
                      field.isTruncated && " truncate max-w-[150px] overflow-hidden whitespace-nowrap"
                    )}
                  >
                    {field.value(formData)}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                id="back"
                aria-label="Go Back to Booking Details"
                onClick={() => setCurrentStep(1)}
                className="flex-1 py-3 rounded-full font-medium border border-neutral-200 hover:bg-neutral-50 transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleConfirmBooking}
                type="button"
                id="confirm"
                aria-label="Confirm Booking"
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
              type="button"
              id="book-another-ride"
              aria-label="Book Another Ride"
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