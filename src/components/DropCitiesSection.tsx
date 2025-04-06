import { dropCities } from "@/constants/dropCities";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const DropCitiesSection = () => {
    return (
        <section id="cities" className="section-padding scroll-section px-5">
            <div className="">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Drop Taxi Cities 🌟</h2>
                    <p className="text-neutral-600 max-w-2xl mx-auto">
                        Book your taxi to popular destinations and enjoy a smooth, hassle-free journey with comfort, reliability, and affordability.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {dropCities.map((city) => (
                        <div
                            key={city.name}
                            className={cn(
                                "p-2 rounded-lg bg-yellow-300 shadow-sm hover:shadow-md",
                                "transition-all duration-300 cursor-pointer text-neutral-700",
                                "hover:bg-neutral-800 hover:text-white"
                            )}
                        >
                            <img src={city.src} alt={`Kavin Drop Taxi | ${city.name}`} className="w-full h-20 object-cover rounded-lg mb-2" />
                            <div className="font-bold text-sm w-full text-center flex flex-row gap-3 items-center justify-center ">{city.name}
                                <Check className="text-white h-4 p-0.5 w-4 bg-blue-500 rounded-full" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DropCitiesSection;
