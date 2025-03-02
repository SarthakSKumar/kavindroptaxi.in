
import { useEffect } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100, // Offset for header
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Add intersection observer for scroll animations
    const sections = document.querySelectorAll('section:not(:first-child)');
    const animatedElements = document.querySelectorAll('.scroll-animate');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    // Observe all sections except hero
    sections.forEach(section => {
      section.querySelectorAll('h2, p, .grid > div').forEach(element => {
        element.classList.add('scroll-animate');
        observer.observe(element);
      });
    });
    
    // Observe any elements with scroll-animate class
    animatedElements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
      
      // Clean up the observer
      if (observer) {
        sections.forEach(section => {
          section.querySelectorAll('.scroll-animate').forEach(element => {
            observer.unobserve(element);
          });
        });
        
        animatedElements.forEach(element => {
          observer.unobserve(element);
        });
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 text-sm font-semibold bg-yellow-50 text-primary rounded-full mb-3">
                Our Services
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Premium Transportation <span className="text-primary">Services</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer a range of premium transportation services to meet your needs, 
                whether you're traveling for business or pleasure.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Airport Transfers",
                  description: "Reliable and comfortable rides to and from the airport, with flight tracking and waiting time included.",
                  icon: "✈️"
                },
                {
                  title: "City Tours",
                  description: "Explore the city with our knowledgeable drivers who will show you the best attractions and hidden gems.",
                  icon: "🏙️"
                },
                {
                  title: "Business Travel",
                  description: "Professional and punctual service for all your business transportation needs.",
                  icon: "💼"
                },
                {
                  title: "Special Events",
                  description: "Make a statement with our premium vehicles for weddings, parties, and other special occasions.",
                  icon: "🎉"
                },
                {
                  title: "Hourly Hire",
                  description: "Book a driver by the hour for meetings, shopping, or a night out in the city.",
                  icon: "⏱️"
                },
                {
                  title: "Long Distance",
                  description: "Comfortable and convenient transportation for longer journeys between cities.",
                  icon: "🛣️"
                }
              ].map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover-lift subtle-shadow"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5 text-xl">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Fleet Section */}
        <section id="fleet" className="py-20 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 text-sm font-semibold bg-yellow-50 text-primary rounded-full mb-3">
                Our Fleet
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Choose Your Perfect <span className="text-primary">Ride</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From standard to luxury, we have a vehicle to suit every need and preference.
                All our vehicles are meticulously maintained for your safety and comfort.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "Standard Sedan",
                  description: "Comfortable and affordable option for up to 4 passengers.",
                  price: "From $25",
                  image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGF4aXxlbnwwfHwwfHx8MA%3D%3D"
                },
                {
                  name: "Premium Sedan",
                  description: "Extra comfort with premium features for up to 4 passengers.",
                  price: "From $35",
                  image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGx1eHVyeSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D"
                },
                {
                  name: "SUV",
                  description: "Spacious vehicle perfect for groups of up to 6 passengers.",
                  price: "From $45",
                  image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3V2fGVufDB8fDB8fHww"
                },
                {
                  name: "Luxury",
                  description: "Travel in style with our top-of-the-line luxury vehicles.",
                  price: "From $65",
                  image: "https://images.unsplash.com/photo-1549925862-990918991bcd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bHV4dXJ5JTIwY2FyfGVufDB8fDB8fHww"
                }
              ].map((vehicle, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-semibold">{vehicle.name}</h3>
                      <p className="text-white/80">{vehicle.price}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 mb-4">{vehicle.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-1">
                        {Array(5).fill(0).map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="text-xs text-gray-500 ml-1">4.9</span>
                      </div>
                      <a 
                        href="#contact" 
                        className="text-primary text-sm font-medium hover:underline"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-3 py-1 text-sm font-semibold bg-yellow-50 text-primary rounded-full mb-3">
                  About Us
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  The <span className="text-primary">Premium</span> Taxi Experience
                </h2>
                <p className="text-gray-600 mb-6">
                  Founded in 2010, RideSwift has been providing exceptional transportation services
                  to thousands of satisfied customers. Our mission is to make your journey as comfortable
                  and stress-free as possible.
                </p>
                <p className="text-gray-600 mb-8">
                  What sets us apart is our commitment to quality. From our professional drivers to our
                  meticulously maintained vehicles, we ensure every aspect of your ride meets the highest
                  standards of excellence.
                </p>
                
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">10+</div>
                    <p className="text-gray-600 text-sm">Years of Experience</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">50+</div>
                    <p className="text-gray-600 text-sm">Premium Vehicles</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">15k+</div>
                    <p className="text-gray-600 text-sm">Happy Customers</p>
                  </div>
                </div>
                
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-white font-medium transition-all hover:shadow-lg hover:shadow-primary/20 hover:bg-primary/90"
                >
                  Contact Us
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
              
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1621955964441-c173e01c6b9a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGF4aSUyMGRyaXZlcnxlbnwwfHwwfHx8MA%3D%3D" 
                    alt="Taxi driver" 
                    className="w-full h-auto" 
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg w-48">
                  <div className="flex items-center mb-2">
                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-3"></div>
                    <div>
                      <div className="text-sm font-semibold">John Doe</div>
                      <div className="text-xs text-gray-500">Professional Driver</div>
                    </div>
                  </div>
                  <div className="flex">
                    {Array(5).fill(0).map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 text-sm font-semibold bg-yellow-50 text-primary rounded-full mb-3">
                Contact Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get In <span className="text-primary">Touch</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Have a question or ready to book? Reach out to us using any of the methods below.
                Our customer service team is available 24/7 to assist you.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold mb-6">Send Us A Message</h3>
                <form className="space-y-5">
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      placeholder="Subject"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary text-white rounded-lg font-medium transition-colors hover:bg-primary/90"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              
              <div>
                <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
                  <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-5">
                    <div className="flex">
                      <MapPin size={20} className="text-primary mr-4 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900 mb-1">Address</p>
                        <p className="text-gray-600">
                          1234 Street Name, City Name, United States
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <Phone size={20} className="text-primary mr-4 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900 mb-1">Phone</p>
                        <p className="text-gray-600">
                          <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                            +1 (234) 567-890
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <Mail size={20} className="text-primary mr-4 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900 mb-1">Email</p>
                        <p className="text-gray-600">
                          <a href="mailto:info@rideswift.com" className="hover:text-primary transition-colors">
                            info@rideswift.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <h3 className="text-xl font-semibold mb-6">Business Hours</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday:</span>
                      <span className="font-medium">24 Hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday:</span>
                      <span className="font-medium">24 Hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday:</span>
                      <span className="font-medium">24 Hours</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <a 
                      href="tel:+1234567890" 
                      className="flex items-center justify-center w-full px-6 py-3 bg-primary/10 text-primary rounded-lg font-medium transition-colors hover:bg-primary/20"
                    >
                      <Phone size={18} className="mr-2" />
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
