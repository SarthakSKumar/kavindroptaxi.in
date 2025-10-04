
import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Company Info */}
          <div>
            <a
              href="/"
              className="text-2xl font-semibold tracking-tight text-foreground transition-opacity hover:opacity-90"
            >
              <img
                src="/logo-main.webp"
                className="w-32 sm:w-40"
                alt="Kavin Drop Taxi"
                fetchPriority="high"
              />
            </a>
            <p className="text-neutral-500 my-8">
              Experience the perfect blend of comfort, reliability, and style with our premium taxi service. Available 24/7 for your convenience.
            </p>
            {/* <div className="flex space-x-4">
              <a href="#"
                aria-label="Facebook"
               className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center transition-colors hover:bg-primary">
                <Facebook size={16} />
              </a>
              <a href="#"
                aria-label="Twitter"
               className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center transition-colors hover:bg-primary">
                <Twitter size={16} />
              </a>
              <a href="#"
                aria-label="Instagram"
               className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center transition-colors hover:bg-primary">
                <Instagram size={16} />
              </a>
              <a href="#"
                aria-label="LinkedIn"
               className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center transition-colors hover:bg-primary">
                <Linkedin size={16}
                />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h1 className="text-lg font-semibold mb-2 pb-3">Quick Links</h1>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-neutral-500 hover:text-primary transition-colors" aria-label="Home">Home</a>
              </li>
              {/* <li>
                <a href="#services" className="text-neutral-500 hover:text-primary transition-colors">Services</a>
              </li> */}
              <li>
                <a href="#fleet" className="text-neutral-500 hover:text-primary transition-colors" aria-label="Our Fleet" >Our Fleet</a>
              </li>
              <li>
                <a href="#about" className="text-neutral-500 hover:text-primary transition-colors" aria-label="About Us">About Us</a>
              </li>
              <li>
                <a href="#contact" className="text-neutral-500 hover:text-primary transition-colors" aria-label="Contact">Contact</a>
              </li>
              {/* <li>
                <a href="#" className="text-neutral-500 hover:text-primary transition-colors">Terms & Conditions</a>
              </li> */}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h1 className="text-lg font-semibold mb-2 pb-3">Contact Us</h1>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-neutral-500">
                  2/97, Pillayar Kovil Street, Nadukkuppam post and village, Arani Taluk,
                  Tiruvannamalai
                  606903
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-primary mr-3 flex-shrink-0" />
                <a href="tel:+919994680220" className="text-neutral-500 hover:text-white transition-colors" aria-label="Contact Us">
                  +91 9994680220
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-primary mr-3 flex-shrink-0" />
                <a href="mailto:kavindroptaxis@gmail.com" className="text-neutral-500 hover:text-white transition-colors" aria-label="Email Us">
                  kavindroptaxis@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-500 text-sm">
          <div>
            <p>&copy; {new Date().getFullYear()} Kavin Drop Taxi. All rights reserved.</p>
            {/* <p className="text-xs text-neutral-500 mt-2">
              Developed and Maintained by <a href="https://sarthakskumar.com" className="underline hover:text-primary/50" target="_blank" rel="noopener noreferrer">Sarthak S Kumar</a>
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
