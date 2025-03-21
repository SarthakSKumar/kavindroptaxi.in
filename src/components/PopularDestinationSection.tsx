import { Clock, MapPin, Coins } from 'lucide-react';
import { cn } from '@/lib/utils'; 
import bangalore from '../../public/popular/bangalore.jpg';

type Destination = {
    from: string;
    to: string;
    distance: string;
    duration: string;
    price: number;
    image: string; // Add this field
};

const destinations: Destination[] = [
    {
        from: "Chennai",
        to: "Bangalore",
        distance: "346.7 km",
        duration: "5 hr 52 min",
        price: 4461,
        image: "/bangalore.jpg"
    },
    {
        from: "Chennai",
        to: "Pondicherry",
        distance: "150.7 km",
        duration: "3 hr 10 min",
        price: 2112,
        image: "/pondi.jpg"
    },
    {
        from: "Chennai",
        to: "Madurai",
        distance: "462.3 km",
        duration: "7 hr 50 min",
        price: 5856,
        image: "/madurai.jpg"
    },
    {
        from: "Chennai",
        to: "Trichy",
        distance: "331.8 km",
        duration: "5 hr 30 min",
        price: 4284,
        image: "/trichy.jpg"
    },
    {
        from: "Chennai",
        to: "Coimbatore",
        distance: "505.5 km",
        duration: "8 hr 50 min",
        price: 6372,
        image: "/coimbatore.jpg"
    },
    {
        from: "Coimbatore",
        to: "Bangalore",
        distance: "363.5 km",
        duration: "6 hr 24 min",
        price: 5025,
        image: "/hero2.jpg"
    },
    {
        from: "Chennai",
        to: "Salem",
        distance: "344.5 km",
        duration: "6 hr 24 min",
        price: 4778,
        image: "/salem.jpg"
    },
    {
        from: "Chennai",
        to: "Erode",
        distance: "406.7 km",
        duration: "7 hr 8 min",
        price: 5587,
        image: "/erode.jpg"
    },
    {
        from: "Coimbatore",
        to: "Ooty",
        distance: "86.8 km",
        duration: "2 hr 45 min",
        price: 1990,
        image: "/ooty.jpg"
    },
];

const PopularDestinationSection = () => {
    return (
        <section id="popular" className="section-padding scroll-section bg-neutral-50">
            <div className="mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Popular Drop Taxi destinations ⚡
                    </h2>
                    <p className="text-neutral-600 max-w-2xl mx-auto">
                        Book your one-way taxi service to these popular destinations and enjoy comfortable, hassle-free journeys.
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
                                            <div className="flex items-center gap-1.5">
                                                <MapPin className="w-4 h-4" />
                                                <span>{dest.distance}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Clock className="w-4 h-4" />
                                                <span>{dest.duration}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex items-center justify-between">
                                        {/* <div className="text-lg font-bold px-2 bg-primary">
                                            ₹{dest.price}
                                        </div> */}
                                        <button
                                        className="py-2 px-4 bg-primary text-neutral-800 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
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
