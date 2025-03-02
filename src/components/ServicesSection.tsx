
import { Check } from "lucide-react";

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-gray-50 scroll-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience unparalleled comfort and reliability with our comprehensive range of premium taxi services tailored to meet your every need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-8 shadow-md hover-lift">
            <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Airport Transfers</h3>
            <p className="text-gray-600 mb-6">
              Timely and comfortable transportation to and from airports with flight tracking and waiting time included.
            </p>
            <ul className="space-y-2">
              {["Flight tracking", "Meet & greet service", "60 minutes waiting time", "Fixed prices"].map((item, i) => (
                <li key={i} className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-8 shadow-md hover-lift">
            <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Business Travel</h3>
            <p className="text-gray-600 mb-6">
              Professional and discreet service for executives and business professionals with premium vehicles.
            </p>
            <ul className="space-y-2">
              {["Professional chauffeurs", "Corporate accounts", "Invoice options", "Wi-Fi equipped vehicles"].map((item, i) => (
                <li key={i} className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl p-8 shadow-md hover-lift">
            <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">City Tours</h3>
            <p className="text-gray-600 mb-6">
              Explore the city with our knowledgeable drivers who provide insights into local attractions and hidden gems.
            </p>
            <ul className="space-y-2">
              {["Customizable routes", "Knowledgeable drivers", "Hourly booking options", "Multi-language service"].map((item, i) => (
                <li key={i} className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
