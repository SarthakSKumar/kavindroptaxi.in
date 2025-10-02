
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

import FleetSection from '@/components/FleetSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import DropCitiesSection from '@/components/DropCitiesSection';
import PopularDestinationSection from '@/components/PopularDestinationSection';

const Index = () => {
  useEffect(() => {
    // Make all sections visible initially to fix blank screen issue
    document.querySelectorAll('.scroll-section').forEach((section) => {
      section.classList.add('in-viewport');
    });
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="scroll-section">
          <DropCitiesSection />
        </div>
        <div className="scroll-section">
          <PopularDestinationSection />
        </div>
        <div className="scroll-section">
          <FleetSection />
        </div>
        <div className="scroll-section">
          <TestimonialsSection />
        </div>
        <div className="scroll-section">
          <AboutSection />
        </div>
        <div className="scroll-section">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
