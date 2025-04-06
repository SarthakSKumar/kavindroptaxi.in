import React from "react";
import { Check } from "lucide-react";

import { fleet, FleetInfo } from "@/constants/fleet";

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
          {fleet.map((vehicle: FleetInfo, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover-lift h-[390px]">
              <div className="h-[160px] w-full overflow-hidden flex justify-center items-center bg-neutral-200">
                <img src={vehicle.image} alt={vehicle.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">{vehicle.name}</h3>
                </div>
                <p className="text-neutral-600 text-sm mb-4">{vehicle.description}</p>
                <div className="flex items-center mb-2">
                  <span className="text-sm font-medium mr-1">Capacity:</span>
                  <div className="flex items-center">
                    {[...Array(vehicle.capacity)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 text-neutral-500"
                      >
                        <path d="M3.75 2.25a.75.75 0 000 1.5h12.5a.75.75 0 000-1.5H3.75z" />
                        <path
                          fillRule="evenodd"
                          d="M2 6a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm0 5a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm0 5a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-neutral-600 text-sm mb-2">
                  Single Trip: <span className="font-semibold">₹{vehicle.singleTrip} per km</span>
                </p>
                <p className="text-neutral-600 text-sm mb-2">
                  Round Trip: <span className="font-semibold">₹{vehicle.roundTrip} per km</span>
                </p>
                <p className="text-xs text-neutral-300">Additional driver charges applicable.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
