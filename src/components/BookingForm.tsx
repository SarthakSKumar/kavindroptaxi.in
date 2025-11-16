/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { CalendarIcon, User, Phone, Car } from 'lucide-react';
import LocationSearch, { LocationResult } from './LocationSearch';
import { cn } from '@/lib/utils';
import { bookingConfirmationFields } from '@/constants/form';
import { FleetInfo, fleet } from '@/constants/fleet';

const BookingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    pickup: null as LocationResult | null,
    destination: null as LocationResult | null,
    date: '',
    time: '',
    selectedVehicle: null as FleetInfo | null,
  });
  const [distanceText, setDistanceText] = useState<string | null>(null);
  const [distanceMeters, setDistanceMeters] = useState<number | null>(null);
  const [isVehicleDropdownOpen, setIsVehicleDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (field: string, value: any) => {
    // If pickup/destination, value is LocationResult | null
    if (field === 'pickup' || field === 'destination') {
      setFormData({ ...formData, [field]: value });
    } else {
      setFormData({ ...formData, [field]: value });
    }
  };

  const isStepOneValid = () => {
    return (
      !!formData.name &&
      !!formData.mobile &&
      !!formData.pickup &&
      !!formData.destination &&
      !!formData.date &&
      !!formData.time &&
      !!formData.selectedVehicle
    );
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

  const handleConfirmBooking = async () => {
    setLoading(true);
    setError(null);
    try {
      // Calculate estimated fare
      const distanceKm = distanceMeters ? distanceMeters / 1000 : 0;
      const ratePerKm = formData.selectedVehicle?.singleTrip ?? 0;
      const driverAllowance = 400;
      const estimatedFare = Math.round(distanceKm * ratePerKm + driverAllowance);

      // Prepare payload with location strings and distance info
      const payload = {
        name: formData.name,
        mobile: formData.mobile,
        pickup: formData.pickup?.address ?? '',
        destination: formData.destination?.address ?? '',
        date: formData.date,
        time: formData.time,
        selectedVehicle: formData.selectedVehicle?.name ?? '',
        vehicleCapacity: formData.selectedVehicle?.capacity ?? '',
        distanceKm: distanceText ?? 'N/A',
        distanceMeters: distanceMeters ?? 0,
        ratePerKm: ratePerKm,
        driverAllowance: driverAllowance,
        estimatedFare: estimatedFare,
      };

      const response = await fetch(import.meta.env.VITE_GOOGLE_APPS_SCRIPT_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response && response.status >= 400 && response.status < 600) {
        throw new Error("Failed to submit booking. Please try again.");
      }

      setCurrentStep(3); // Show confirmation screen
    } catch (err) {
      console.error("Booking submission failed:", err);
      setError("Failed to submit booking. Please try again.");
    } finally {
      setLoading(false);
    }
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

  // compute driving distance using OSRM (Open Source Routing Machine) when both locations are selected
  useEffect(() => {
    const computeDistance = async () => {
      if (!formData.pickup || !formData.destination) {
        setDistanceText(null);
        setDistanceMeters(null);
        return;
      }

      try {
        // OSRM API format: lng,lat (note: longitude first!)
        const fromCoords = `${formData.pickup.lng},${formData.pickup.lat}`;
        const toCoords = `${formData.destination.lng},${formData.destination.lat}`;

        const response = await fetch(
          `https://router.project-osrm.org/route/v1/driving/${fromCoords};${toCoords}?overview=false`,
          {
            headers: {
              'User-Agent': 'KavindropTaxi/1.0',
            },
          }
        );

        const data = await response.json();

        if (data.code === 'Ok' && data.routes && data.routes.length > 0) {
          const route = data.routes[0];
          const distanceMetersValue = route.distance; // OSRM returns distance in meters
          const distanceKm = (distanceMetersValue / 1000).toFixed(1);

          setDistanceText(`${distanceKm} km`);
          setDistanceMeters(distanceMetersValue);
        } else {
          console.error('OSRM routing failed:', data.code || 'No route found');
          setDistanceText(null);
          setDistanceMeters(null);
        }
      } catch (err) {
        console.error('Error computing route distance:', err);
        setDistanceText(null);
        setDistanceMeters(null);
      }
    };

    computeDistance();
  }, [formData.pickup, formData.destination]);

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-[450px]">
      <div className="bg-primary p-3 px-6 border-b border-neutral-100">
        <h2 className="text-2xl font-semibold text-neutral-800 ">Quick Booking</h2>
      </div>

      <div className="py-4 px-6">
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">
            {error}
          </div>
        )}
        {currentStep === 1 && (
          <div className="space-y-3">
            {/* Personal Details */}
            <div className="flex items-center w-full p-3 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-all">
              <User className="text-neutral-500 w-5 h-5 mr-2" />
              <input
                type="text"
                name="name"
                aria-label="Name"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-lg"
              />
            </div>

            {/* Mobile Number */}
            <div className="flex items-center w-full p-3 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-all">
              <Phone className="text-neutral-500 w-5 h-5 mr-2" />
              <span className="text-neutral-600 font-medium pr-1 text-lg">+91</span>
              <input
                type="tel"
                name="mobile"
                aria-label='Mobile Number'
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
              defaultValue={formData.pickup?.address ?? ''}
              className='mb-4 text-lg'
            />

            <LocationSearch
              placeholder="Enter destination"
              onChange={(value) => handleInputChange('destination', value)}
              defaultValue={formData.destination?.address ?? ''}
              className='mb-4 text-lg'
            />

            {/* Date and Time */}
            <div className="grid grid-cols-2 gap-4">
              {/* Date Picker */}
              <div className="flex items-center w-full px-4 py-3 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-all">
                <CalendarIcon className="text-neutral-500 w-5 h-5 mr-2" />
                <input
                  type="date"
                  name="date"
                  aria-label='Date'
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
                  aria-label='Time'
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
              <Car className="text-neutral-500 w-5 h-5 mr-2" />
              <select
                aria-label='Vehicle Select'
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

            {distanceText && (
              <div className="text-sm text-neutral-600 mt-2">Estimated distance: <span className="font-medium">{distanceText}</span></div>
            )}

            <button
              onClick={handleContinue}
              disabled={!isStepOneValid() || loading}
              type="button"
              id="continue"
              aria-label="Continue to Booking Confirmation"
              className={cn(
                "w-full py-3 rounded-full font-medium transition-colors mt-4",
                isStepOneValid() && !loading
                  ? "bg-primary text-neutral-800 hover:bg-primary/90"
                  : "bg-neutral-200 text-neutral-500 cursor-not-allowed"
              )}
            >
              {loading ? "Loading..." : "Book Now"}
            </button>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-4">
            {/* Booking Details */}
            <div className="bg-neutral-50 p-4 rounded-lg space-y-3">
              {(() => {
                const displayFormData: any = {
                  ...formData,
                  pickup: formData.pickup?.address ?? '',
                  destination: formData.destination?.address ?? '',
                  selectedVehicle: formData.selectedVehicle,
                };

                return bookingConfirmationFields.map((field) => (
                  <div key={field.key} className="flex justify-between">
                    <span className="text-neutral-500">{field.label}</span>
                    <span
                      className={cn(
                        "font-medium",
                        field.isTruncated && " truncate max-w-[150px] overflow-hidden whitespace-nowrap"
                      )}
                    >
                      {field.value(displayFormData)}
                    </span>
                  </div>
                ));
              })()}
            </div>

            {/* Trip Summary */}
            {distanceText && distanceMeters && formData.selectedVehicle && (
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-4 rounded-lg border border-primary/20">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-600">Total Distance</span>
                    <span className="font-semibold text-neutral-800">{distanceText}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-600">Rate Per Km</span>
                    <span className="font-semibold text-neutral-800">₹{formData.selectedVehicle.singleTrip}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-600">Driver Allowance</span>
                    <span className="font-semibold text-neutral-800">₹400.00</span>
                  </div>

                  <div className="border-t border-primary/20 my-2 pt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-neutral-800">Estimated Fare</span>
                      <span className="text-xl font-bold text-primary">
                        ₹{Math.round((distanceMeters / 1000) * formData.selectedVehicle.singleTrip + 400)}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-500 mt-2 italic">
                    Note: Excludes additional km, toll, and hill station charges.
                  </p>
                </div>
              </div>
            )}

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
                disabled={loading}
                type="button"
                id="confirm"
                aria-label="Confirm Booking"
                className={cn(
                  "flex-1 py-3 rounded-full font-medium transition-colors",
                  loading
                    ? "bg-neutral-200 text-neutral-500 cursor-not-allowed"
                    : "bg-primary text-neutral-800 hover:bg-primary/90"
                )}
              >
                {loading ? "Submitting..." : "Confirm Booking"}
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
                  pickup: null,
                  destination: null,
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