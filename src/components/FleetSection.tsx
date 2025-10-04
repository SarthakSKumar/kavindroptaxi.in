import { fleet, FleetInfo } from "@/constants/fleet";
import { User2Icon } from "lucide-react";

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
                  <span className="text-sm  mr-1 text-neutral-600">Capacity:</span>
                  <div className=" text-neutral-600 flex items-center font-semibold">
                    {vehicle.capacity} <User2Icon className="w-4 h-4 text-neutral-800 " />
                  </div>
                </div>
                <p className="text-neutral-600 text-sm mb-2">
                  Single Trip: <span className="font-semibold">₹{vehicle.singleTrip} per km</span>
                </p>
                <p className="text-neutral-600 text-sm mb-2">
                  Round Trip: <span className="font-semibold">₹{vehicle.roundTrip} per km</span>
                </p>
                <p className="text-xs text-neutral-500">Excluding driver charges (bata) of ₹400</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
