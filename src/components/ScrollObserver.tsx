
import { useEffect, useState, ReactNode } from 'react';

interface ScrollObserverProps {
  children: ReactNode;
}

const ScrollObserver = ({ children }: ScrollObserverProps) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Toggle class when element is in viewport
        if (entry.isIntersecting) {
          entry.target.classList.add('in-viewport');
        }
      });
    }, { threshold: 0.1 });
    
    // Observe all sections
    document.querySelectorAll('.scroll-section').forEach(section => {
      observer.observe(section);
    });
    
    // Cleanup
    return () => {
      document.querySelectorAll('.scroll-section').forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchorElement = target.closest('a[href^="#"]') as HTMLAnchorElement;
      
      if (anchorElement) {
        e.preventDefault();
        const targetId = anchorElement.getAttribute('href');
        
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return <>{children}</>;
};

export default ScrollObserver;
