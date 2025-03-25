import { useState, useEffect } from 'react';
import BookingForm from './BookingForm';
import { cn } from '@/lib/utils';
import { MessageCircle, PhoneCall, CalendarCheck, Shield, Banknote } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden bg-cover bg-center flex flex-col items-center"
      style={{
        backgroundImage: 'url("/hero2.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      {/* Content container */}
      <div className="relative max-w-7xl z-10 w-full px-4 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">

          {/* Left Column - Text Content */}
          <div className={cn(
            "flex flex-col space-y-5 w-full transition-all duration-700 delay-100",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <span className="text-primary"> Fast and Reliable</span><br />
              One-Way Taxi Service for you
            </h1>
            
            <p className="text-lg text-white max-w-xl">
              Experience a smooth and secure one-way drop taxi service with our affordable and convenient cab booking options.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="tel: 9994680220" className="flex items-center gap-2.5 font-semibold px-5 py-2 rounded-full bg-primary text-black transition hover:shadow-lg hover:bg-primary/90">
                <PhoneCall className="w-5 h-5" /> +91 9994680220
              </a>
              <a
                href="https://wa.me/+919994680220"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white px-5 py-2 rounded-full bg-green-500 font-medium transition hover:shadow-lg hover:bg-green-600 flex items-center gap-2"
              >
                <img src="/whatsapp.svg" className="w-5 h-5" alt="WhatsApp Logo" />
                WhatsApp
              </a>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-primary/20 rounded-full">
                  <CalendarCheck className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm text-white">Easy Booking</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-primary/20 rounded-full">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm text-white">Safe Rides</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-primary/20 rounded-full">
                  <Banknote className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm text-white">Affordable Pricing</p>
              </div>
            </div>
          </div>

          {/* Booking Form (responsive) */}
          <div className={cn(
            "w-auto md:w-1/3 transition-all duration-700 delay-300",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            "md:px-0  scale-75 md:scale-100" // Adds px-5 padding on smaller screens
          )}>
            <BookingForm />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="  absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce ">
        <p className="text-sm text-white mb-2">Scroll to explore</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
