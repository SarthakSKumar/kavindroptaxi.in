
import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <a
              href="/"
              className="text-2xl font-semibold tracking-tight text-foreground transition-opacity hover:opacity-90"
            >
              <img src="/Logo.webp" className="w-44"
                fetchPriority="high"
              />
            </a>
            <p className="text-neutral-400 my-8">
              Experience the perfect blend of comfort, reliability, and style with our premium taxi service. Available 24/7 for your convenience.
            </p>
            {/* <div className="flex space-x-4">
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
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-neutral-400 hover:text-primary transition-colors">Home</a>
              </li>
              {/* <li>
                <a href="#services" className="text-neutral-400 hover:text-primary transition-colors">Services</a>
              </li> */}
              <li>
                <a href="#fleet" className="text-neutral-400 hover:text-primary transition-colors">Our Fleet</a>
              </li>
              <li>
                <a href="#about" className="text-neutral-400 hover:text-primary transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" className="text-neutral-400 hover:text-primary transition-colors">Contact</a>
              </li>
              {/* <li>
                <a href="#" className="text-neutral-400 hover:text-primary transition-colors">Terms & Conditions</a>
              </li> */}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-neutral-400">
                  2/97 Pillayar Kovil Street Nadukkuppam post and village Arani Taluk
                  Tiruvannamalai district 606903
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-primary mr-3 flex-shrink-0" />
                <a href="tel:+919994680220" className="text-neutral-400 hover:text-white transition-colors">
                  +91 9994680220
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-primary mr-3 flex-shrink-0" />
                <a href="mailto:kavindroptaxi.in@gmail.com" className="text-neutral-400 hover:text-white transition-colors">
                  kavindroptaxi.in@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-500 text-sm">
          <div>
            <p>&copy; {new Date().getFullYear()} Kavin Drop Taxi. All rights reserved.</p>
            <p className="text-xs text-neutral-700 mt-2">
              Developed and Maintained by <a href="https://sarthakskumar.com" className="underline hover:text-primary/50" target="_blank" rel="noopener noreferrer">Sarthak S Kumar</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
