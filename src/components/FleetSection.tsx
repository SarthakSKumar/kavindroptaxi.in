
import { Check } from "lucide-react";

const FleetSection = () => {
  return (
    <section id="fleet" className="section-padding scroll-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Fleet</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Choose from our range of meticulously maintained luxury vehicles, each offering exceptional comfort and style for your journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Car 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover-lift">
            <div className="h-48 bg-neutral-200">
              {/* Car Image */}
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Economy Sedan</h3>
                <span className="text-primary font-medium">from $25</span>
              </div>
              <p className="text-neutral-600 mb-6">
                Perfect for city travel and short distances with comfort and efficiency.
              </p>
              <ul className="space-y-2 mb-6">
                {["4 passengers", "2 luggage", "Air conditioning", "USB charging"].map((item, i) => (
                  <li key={i} className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-2 px-4 bg-primary text-black font-medium rounded-lg hover:bg-primary/90 transition-colors">
                Book Now
              </button>
            </div>
          </div>

          {/* Car 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover-lift">
            <div className="h-48 bg-neutral-200">
              {/* Car Image */}
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Business SUV</h3>
                <span className="text-primary font-medium">from $40</span>
              </div>
              <p className="text-neutral-600 mb-6">
                Spacious and comfortable for business travel or family trips with extra luggage.
              </p>
              <ul className="space-y-2 mb-6">
                {["6 passengers", "4 luggage", "Premium interior", "Wi-Fi equipped"].map((item, i) => (
                  <li key={i} className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-2 px-4 bg-primary text-black font-medium rounded-lg hover:bg-primary/90 transition-colors">
                Book Now
              </button>
            </div>
          </div>

          {/* Car 3 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover-lift">
            <div className="h-48 bg-neutral-200">
              {/* Car Image */}
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Luxury Sedan</h3>
                <span className="text-primary font-medium">from $60</span>
              </div>
              <p className="text-neutral-600 mb-6">
                Premium luxury experience with professional chauffeur and top-tier amenities.
              </p>
              <ul className="space-y-2 mb-6">
                {["3 passengers", "3 luggage", "Premium amenities", "Professional chauffeur"].map((item, i) => (
                  <li key={i} className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-2 px-4 bg-primary text-black font-medium rounded-lg hover:bg-primary/90 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
