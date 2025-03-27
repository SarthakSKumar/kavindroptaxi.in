import React from "react";
import { Check } from "lucide-react";

const cars = [
  {
    name: "Toyota Etios",
    image: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20171208103441_Toyota-Etios-front.jpg&w=700&c=1",
    description: "A reliable and comfortable sedan, perfect for city and highway travel.",
    features: ["4 passengers", "2 luggage", "Air conditioning", "Fuel efficient"],
    pricing: { SD: 14, RT: 13 },
  },
  {
    name: "Maruti Suzuki Swift Dzire",
    image: "https://i.ndtvimg.com/i/2017-06/maruti-suzuki-dzire-styling_827x510_81498479945.jpg",
    description: "A compact sedan with great mileage.",
    features: ["4 passengers", "2 luggage", "Compact design", "USB charging"],
    pricing: { SD: 14, RT: 13 },
  },
  {
    name: "Honda Amaze",
    image: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fc.ndtvimg.com%2F2021-08%2Fk9k5jqa_honda-amaze-facelift-2021-_650x400_25_August_21.jpg&w=3840&q=75",
    description: "A stylish and fuel-efficient sedan offering a comfortable ride.",
    features: ["4 passengers", "2 luggage", "Spacious cabin", "ABS braking system"],
    pricing: { SD: 14, RT: 13 },
  },
  {
    name: "Maruti Suzuki Ciaz",
    image: "https://images.cardekho.com/images/expert-review/Maruti-Suzuki-Ciaz/04.jpg",
    description: "A premium sedan with luxury interiors and advanced features.",
    features: ["4 passengers", "3 luggage", "Premium interior", "Touchscreen infotainment"],
    pricing: { SD: 14, RT: 13 },
  },
  {
    name: "Toyota Innova",
    image: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20111217093444_5.jpg&w=700&c=1",
    description: "A spacious and powerful SUV ideal for long-distance travel.",
    features: ["7 passengers", "5 luggage", "Comfort seating", "Rear AC vents"],
    pricing: { SD: 20, RT: 18 },
  },
  {
    name: "Toyota Innova Crysta",
    image: "https://www.team-bhp.com/sites/default/files/styles/check_extra_large_for_review/public/1.75Ltoyotainnovarystaaimg.jpg",
    description: "A premium version of the Innova, with added luxury and comfort.",
    features: ["7 passengers", "5 luggage", "Leather seats", "Enhanced safety features"],
    pricing: { SD: 22, RT: 21 },
  },
  {
    name: "Mahindra Xylo",
    image: "https://www.motorbeam.com/wp-content/uploads/2009/01/mahindra_xylo_india-1200x993.jpg",
    description: "A multi-utility vehicle with ample space and durability.",
    features: ["7 passengers", "4 luggage", "Spacious interiors", "High ground clearance"],
    pricing: { SD: 19, RT: 17 },
  },
  {
    name: "Mahindra Marazzo",
    image: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20181116033915_Marazzo-front-static.jpg&w=700&c=1",
    description: "A stylish and comfortable MUV with modern features.",
    features: ["7 passengers", "4 luggage", "Climate control", "Enhanced suspension"],
    pricing: { SD: 19, RT: 17 },
  },
  {
    name: "Maruti Suzuki Ertiga",
    image: "https://i.ytimg.com/vi/pEcguEAAlAE/maxresdefault.jpg",
    description: "A budget-friendly and efficient MUV for family trips.",
    features: ["7 passengers", "4 luggage", "Fuel efficient", "Smartplay infotainment system"],
    pricing: { SD: 19, RT: 17 },
  },
  {
    name: "Toyota Rumion",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/105799/rumion-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80",
    description: "A practical and comfortable MUV with excellent performance.",
    features: ["7 passengers", "4 luggage", "Spacious interiors", "Reliable engine performance"],
    pricing: { SD: 19, RT: 17 },
  }
];

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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover-lift h-[320px]">
              <div className="h-[160px] w-full overflow-hidden flex justify-center items-center bg-neutral-200">
                <img src={car.image} alt={car.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{car.name}</h3>
                <p className="text-neutral-600 text-sm mb-2">{car.description}</p>
                <p className="text-sm font-medium text-gray-800">Single Drop: <span className="text-black">₹{car.pricing.SD}/km</span></p>
                <p className="text-sm font-medium text-gray-800">Round Trip: <span className="text-black">₹{car.pricing.RT}/km</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
