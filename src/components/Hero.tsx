
import { useState, useEffect } from 'react';
import BookingForm from './BookingForm';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute top-3/4 -left-1/4 w-1/2 h-1/2 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      {/* Content container */}
      <div className="container relative max-w-7xl mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className={cn(
            "flex flex-col space-y-6 transition-all duration-700 delay-100",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold bg-blue-50 text-primary">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Premium Taxi Service
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Your Journey,<br />
              <span className="text-primary">Our Priority</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Experience the perfect blend of comfort, reliability, and style with our premium taxi service. Book your ride in seconds.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#booking" className="px-6 py-3 rounded-full bg-primary text-white font-medium transition-all hover:shadow-lg hover:shadow-primary/20 hover:bg-primary/90">
                Book Your Ride
              </a>
              <a href="#fleet" className="px-6 py-3 rounded-full bg-secondary text-foreground font-medium transition-all hover:bg-secondary/80">
                Explore Our Fleet
              </a>
            </div>
            <div className="flex items-center space-x-6 pt-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200"></div>
                ))}
              </div>
              <div>
                <div className="text-amber-500 flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  4.9 out of 5 from 3,000+ reviews
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Booking form */}
          <div className={cn(
            "transition-all duration-700 delay-300",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <BookingForm />
          </div>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse-soft">
        <p className="text-sm text-gray-400 mb-2">Scroll to explore</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
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
