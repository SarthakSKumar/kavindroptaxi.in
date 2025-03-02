
import { useState, useEffect } from 'react';
import BookingForm from './BookingForm';
import { cn } from '@/lib/utils';
import { Whatsapp } from 'lucide-react';

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
      className="relative min-h-screen pt-24 pb-16 overflow-hidden bg-cover bg-center"
      style={{ 
        backgroundImage: 'url("/hero.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      
      {/* Content container */}
      <div className="container relative max-w-7xl mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className={cn(
            "flex flex-col space-y-6 transition-all duration-700 delay-100",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold bg-yellow-50 text-primary">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Premium Taxi Service
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Your Journey,<br />
              <span className="text-primary">Our Priority</span>
            </h1>
            <p className="text-lg text-gray-200 max-w-lg">
              Experience the perfect blend of comfort, reliability, and style with our premium taxi service. Book your ride in seconds.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="tel:9060880066" className="px-6 py-3 rounded-full bg-primary text-black font-medium transition-all hover:shadow-lg hover:shadow-primary/20 hover:bg-primary/90">
                Call 9060880066
              </a>
              <a 
                href="https://wa.me/919060880066" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-6 py-3 rounded-full bg-white text-black font-medium transition-all hover:shadow-lg hover:bg-white/90 flex items-center gap-2"
              >
                <Whatsapp className="h-5 w-5" />
                Whatsapp
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
                <p className="text-sm text-gray-300">
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

      {/* Scroll indicator with transition animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse-soft">
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
