
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 lg:px-12',
        isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="/" 
          className="text-2xl font-semibold tracking-tight text-foreground transition-opacity hover:opacity-90"
        >
          <span className="text-primary">Ride</span>Swift
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#" 
            className="text-sm font-medium text-foreground/90 transition-colors hover:text-primary"
          >
            Home
          </a>
          <a 
            href="#services" 
            className="text-sm font-medium text-foreground/90 transition-colors hover:text-primary"
          >
            Services
          </a>
          <a 
            href="#fleet" 
            className="text-sm font-medium text-foreground/90 transition-colors hover:text-primary"
          >
            Our Fleet
          </a>
          <a 
            href="#about" 
            className="text-sm font-medium text-foreground/90 transition-colors hover:text-primary"
          >
            About
          </a>
          <a 
            href="#contact" 
            className="text-sm font-medium px-4 py-2 rounded-full bg-primary text-white transition-all hover:shadow-md hover:bg-primary/90"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={toggleMobileMenu}
          className="p-2 md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          'fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out pt-20',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full',
          'md:hidden'
        )}
      >
        <nav className="flex flex-col items-center space-y-8 p-8">
          <a 
            href="#" 
            className="text-lg font-medium text-foreground transition-colors hover:text-primary"
            onClick={toggleMobileMenu}
          >
            Home
          </a>
          <a 
            href="#services" 
            className="text-lg font-medium text-foreground transition-colors hover:text-primary"
            onClick={toggleMobileMenu}
          >
            Services
          </a>
          <a 
            href="#fleet" 
            className="text-lg font-medium text-foreground transition-colors hover:text-primary"
            onClick={toggleMobileMenu}
          >
            Our Fleet
          </a>
          <a 
            href="#about" 
            className="text-lg font-medium text-foreground transition-colors hover:text-primary"
            onClick={toggleMobileMenu}
          >
            About
          </a>
          <a 
            href="#contact" 
            className="w-full text-center text-lg font-medium px-4 py-3 rounded-full bg-primary text-white transition-all hover:bg-primary/90"
            onClick={toggleMobileMenu}
          >
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
