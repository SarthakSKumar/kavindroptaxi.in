import { Clock, MapPin } from 'lucide-react';
import { destinations } from '@/constants/destinations';

const PopularDestinationSection = () => {
    return (
        <section id="popular" className="section-padding scroll-section bg-neutral-50 px-4">
            <div className="mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Popular Drop Taxi destinations ⚡
                    </h2>
                    <p className="text-neutral-600 max-w-2xl mx-auto">
                        Book your taxi service to these popular destinations and enjoy comfortable, hassle-free journeys.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {destinations.map((dest) => (
                        <div
                            key={`${dest.from}-${dest.to}`}
                            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden border border-neutral-200 flex"
                        >
                            <div className="p-6 flex-1">
                                <div className="flex flex-col h-full justify-between">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1">
                                            {dest.from} to {dest.to}
                                        </h3>
                                        <p className="text-sm text-neutral-500 mb-4">
                                            Book your {dest.from} to {dest.to} and enjoy a comfortable journey
                                        </p>
                                        <div className="flex items-center gap-6 text-sm text-neutral-600">
                                            <div className="flex items-center gap-1.5 font-semibold">
                                                <MapPin className="w-4 h-4" />
                                                <span>{dest.distance}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 font-semibold">
                                                <Clock className="w-4 h-4" />
                                                <span>{dest.duration}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex items-center justify-between">

                                        <button
                                            className="py-2 px-4 bg-primary text-neutral-800 rounded-full text-sm font-medium hover:bg-yellow-200 transition-colors duration-200"
                                            onClick={() => window.open("https://wa.me/919994680220?text=Hello, I would like to enquire about your services.", "_blank")}>
                                            Enquire
                                        </button>

                                    </div>
                                </div>
                            </div>
                            <div className="w-32 relative">
                                <img
                                    src={dest.image}
                                    alt={`${dest.from} to ${dest.to}`}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularDestinationSection;
