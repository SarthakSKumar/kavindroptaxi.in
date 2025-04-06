import { cn } from "@/lib/utils";
import { Check, CircleCheckBig } from "lucide-react";

const dropCities = [
    {
        "name": "Ariyalur",
        "src": "https://www.arnidroptaxi.in/assets/cities/ariyalur.jpeg"
    },
    {
        "name": "Chengalpattu",
        "src": "https://www.arnidroptaxi.in/assets/cities/chengalpattu.jpeg"
    },
    {
        "name": "Chennai",
        "src": "https://www.arnidroptaxi.in/assets/cities/chennai.jpeg"
    },
    {
        "name": "Coimbatore",
        "src": "https://images.ctfassets.net/hkv6akvsgg6u/iHGYg1mPmglkpSyoPv157/13fe19adbdc0e6f3f2c5a4c61740cc99/TmaUkl.jpeg"
    },
    {
        "name": "Cuddalore",
        "src": "https://www.arnidroptaxi.in/assets/cities/Cuddalore.jpeg"
    },
    {
        "name": "Dharmapuri",
        "src": "https://images.ctfassets.net/hkv6akvsgg6u/3nibmQ6hpact5qnGnkhzDh/cac1397801b7a01c686b2c654da49b0c/hogenakkal-mountain-rocks-132491760.jpeg"
    },
    {
        "name": "Dindigul",
        "src": "https://www.arnidroptaxi.in/assets/cities/Dindigul.jpeg"
    },
    {
        "name": "Kanchipuram",
        "src": "https://www.arnidroptaxi.in/assets/cities/Kanchipuram.jpeg"
    },
    {
        "name": "Kanyakumari",
        "src": "https://www.arnidroptaxi.in/assets/cities/Kanniyakumari.jpeg"
    },
    {
        "name": "Karur",
        "src": "https://www.arnidroptaxi.in/assets/cities/Karur.jpeg"
    },
    {
        "name": "Krishnagiri",
        "src": "https://www.arnidroptaxi.in/assets/cities/Krishnagiri.jpeg"
    },
    {
        "name": "Madurai",
        "src": "https://images.ctfassets.net/hkv6akvsgg6u/1CYLlX6zchayL2dokBDo2j/5b89e4845fa371a0119c6ea27afc5eaf/image__2_.jpg"
    },
    {
        "name": "Nagapattinam",
        "src": "https://www.arnidroptaxi.in/assets/cities/Nagapattinam.jpeg"
    },
    {
        "name": "Namakkal",
        "src": "https://www.arnidroptaxi.in/assets/cities/Namakkal.jpeg"
    },
    {
        "name": "Perambalur",
        "src": "https://www.arnidroptaxi.in/assets/cities/Perambalur.jpeg"
    },
    {
        "name": "Pudukkottai",
        "src": "https://www.arnidroptaxi.in/assets/cities/Pudukkottai.jpeg"
    },
    {
        "name": "Ramanathapuram",
        "src": "https://www.arnidroptaxi.in/assets/cities/Ramanathapuram.jpeg"
    },
    {
        "name": "Salem",
        "src": "https://images.ctfassets.net/hkv6akvsgg6u/1m2o5NFAAXLLBwTskqmi8r/b34b58b53d2debc0e74eec5cc95af2ce/salem__1_.jpeg"
    },
    {
        "name": "Sivaganga",
        "src": "https://www.arnidroptaxi.in/assets/cities/Sivaganga.jpeg"
    },
    {
        "name": "Thanjavur",
        "src": "https://www.arnidroptaxi.in/assets/cities/Thanjavur.jpeg"
    },
    {
        "name": "Theni",
        "src": "https://www.arnidroptaxi.in/assets/cities/Theni.jpeg"
    },
    {
        "name": "Nilgiris",
        "src": "https://www.arnidroptaxi.in/assets/cities/ooty.jpeg"
    },
    {
        "name": "Ooty",
        "src": "https://www.arnidroptaxi.in/assets/cities/ooty.jpeg"
    },
    {
        "name": "Thiruvallur",
        "src": "https://www.arnidroptaxi.in/assets/cities/Thiruvallur.jpeg"
    },
    {
        "name": "Thiruvarur",
        "src": "https://images.ctfassets.net/hkv6akvsgg6u/uXxjoVGR1rzOVkHdS5BGr/f5daaec48a3b3af5a7bf53ed0b221137/image__7_.jpg?"
    },
    {
        "name": "Thoothukkudi",
        "src": "https://www.arnidroptaxi.in/assets/cities/Thoothukkudi.jpeg"
    },
    {
        "name": "Trichy",
        "src": "https://images.ctfassets.net/hkv6akvsgg6u/7MJgZy1gRQ3p2HjYb8uBOz/3a0f6a1ab49fcfcaba593418d77d2eaf/image__4_.jpg"
    },
    {
        "name": "Tirunelveli",
        "src": "https://www.arnidroptaxi.in/assets/cities/Tirunelveli.jpeg"
    },
    {
        "name": "Tiruppur",
        "src": "https://www.arnidroptaxi.in/assets/cities/Tiruppur.jpeg"
    },
    {
        "name": "Tiruvannamalai",
        "src": "https://www.arnidroptaxi.in/assets/cities/Tiruvannamalai.jpeg"
    },
    {
        "name": "Vellore",
        "src": "https://www.arnidroptaxi.in/assets/cities/Vellore.jpeg"
    },
    {
        "name": "Viluppuram",
        "src": "https://www.arnidroptaxi.in/assets/cities/Viluppuram.jpeg"
    },
    {
        "name": "Virudhunagar",
        "src": "https://www.arnidroptaxi.in/assets/cities/Virudhunagar.jpeg"
    },
    {
        "name": "Bangalore",
        "src": "https://images.ctfassets.net/hkv6akvsgg6u/2lr4NASVtNHUE4rc58eG6m/bb8c831fbe079843d939c814ccb75817/pexels-photo-8529425.jpeg"
    },
    {
        "name": "Tirupati",
        "src": "https://images.ctfassets.net/hkv6akvsgg6u/5h1Fbiu0QCTXOfojuV1Ofw/2d034605d510bfca2c5fa60616e06c70/wp6076037.jpeg"
    },
    {
        "name": "Pondicherry",
        "src": "https://images.ctfassets.net/hkv6akvsgg6u/55uOjqGoGKyZwaYoHLeHM5/d5ca3c064c70c69c288c0859061fe7df/pondicherry-1061484_1280.jpeg"
    },
    {
        "name": "Ranipet",
        "src": "https://www.arnidroptaxi.in/assets/cities/ranipet.jpeg"
    },
    {
        "name": "Tenkasi",
        "src": "https://www.arnidroptaxi.in/assets/cities/tenkasi.jpeg"
    },
    {
        "name": "Thoothukudi",
        "src": "https://www.arnidroptaxi.in/assets/cities/thoothukudi.jpeg"
    },
    {
        "name": "Tirupathur",
        "src": "https://www.arnidroptaxi.in/assets/cities/tirupathur.jpeg"
    },
    {
        "name": "Tiruvallur",
        "src": "https://www.arnidroptaxi.in/assets/cities/tiruvallur.jpeg"
    },
    {
        "name": "Tiruvarur",
        "src": "https://www.arnidroptaxi.in/assets/cities/tiruvarur.jpeg"
    },
    {
        "name": "Erode",
        "src": "https://www.arnidroptaxi.in/assets/cities/Erode.webp"
    },
    {
        "name": "Kallakurichi",
        "src": "https://www.arnidroptaxi.in/assets/cities/Kallakurichi.jpeg"
    }
]

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
