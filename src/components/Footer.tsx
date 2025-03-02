
import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              <span className="text-primary">Ride</span>Swift
            </h3>
            <p className="text-neutral-400 mb-6">
              Experience the perfect blend of comfort, reliability, and style with our premium taxi service. Available 24/7 for your convenience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center transition-colors hover:bg-primary">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center transition-colors hover:bg-primary">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center transition-colors hover:bg-primary">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center transition-colors hover:bg-primary">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-neutral-400 hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-neutral-400 hover:text-primary transition-colors">Services</a>
              </li>
              <li>
                <a href="#fleet" className="text-neutral-400 hover:text-primary transition-colors">Our Fleet</a>
              </li>
              <li>
                <a href="#about" className="text-neutral-400 hover:text-primary transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" className="text-neutral-400 hover:text-primary transition-colors">Contact</a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-primary transition-colors">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-neutral-400">
                  1234 Street Name, City Name, United States
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-primary mr-3 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-neutral-400 hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-primary mr-3 flex-shrink-0" />
                <a href="mailto:info@rideswift.com" className="text-neutral-400 hover:text-white transition-colors">
                  info@rideswift.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Subscribe</h4>
            <p className="text-neutral-400 mb-4">
              Subscribe to our newsletter to receive updates and special offers.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-primary text-white rounded-lg font-medium transition-colors hover:bg-primary/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-500 text-sm">
          <p>&copy; {new Date().getFullYear()} RideSwift. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
