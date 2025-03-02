
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';
import FleetSection from '@/components/FleetSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ScrollObserver from '@/components/ScrollObserver';

const Index = () => {
  useEffect(() => {
    // Apply initial animation classes
    document.querySelectorAll('.scroll-section').forEach((section, index) => {
      // Stagger the initial animations
      setTimeout(() => {
        section.classList.add('in-viewport');
      }, 100 * index);
    });
  }, []);

  return (
    <ScrollObserver>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <ServicesSection />
          <FleetSection />
          <TestimonialsSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ScrollObserver>
  );
};

export default Index;
