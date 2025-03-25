import React, { useState, useEffect } from 'react';
import { Menu, PhoneCall, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigationItems = [
  { label: 'Home', href: '#' },
  { label: 'Drop Cities', href: '#cities' },
  // { label: 'Our Services', href: '#services' },
  { label: 'Our Fleet', href: '#fleet' },
  { label: 'About Us', href: '#about' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-1 px-6 lg:px-12',
        isScrolled ? 'bg-white  shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a
          href="/"
          className="text-2xl font-semibold tracking-tight text-foreground transition-opacity hover:opacity-90"
        >
          <img src="/Logo.png" className="w-40" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn("text-base font-medium text-foreground/90 hover:underline hover:underline-offset-4 decoration-4 decoration-primary transition-all duration-200", isScrolled ? "text-foreground" : "text-white")}
            >
              {item.label}
            </a>
          ))}
          <a href="tel:9994680220" className="flex flex-row items-center gap-1.5 font-semibold px-5 py-2.5 rounded-full bg-primary text-black  transition-all hover:shadow-lg hover:shadow-primary/20 hover:bg-primary/90">
            <PhoneCall className="w-5 h-5"/> +91 9994680220
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
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={toggleMobileMenu}
              className={
                item.label === 'Book Now'
                  ? "w-full text-center text-lg font-medium px-4 py-3 rounded-full bg-primary text-white transition-all hover:bg-primary/90"
                  : "text-lg font-medium text-foreground transition-colors hover:text-primary"
              }
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
