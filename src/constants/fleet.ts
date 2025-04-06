export interface FleetInfo {
  id: number;
  name: string;
  capacity: number;
  singleTrip: number;
  roundTrip: number;
  image: string;
  description: string;
  features: string[];
}

export const fleet: FleetInfo[] = [
  {
    id: 1,
    name: "Toyota Etios",
    capacity: 4,
    singleTrip: 14,
    roundTrip: 13,
    image:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20171208103441_Toyota-Etios-front.jpg&w=700&c=1",
    description:
      "A reliable and comfortable sedan, perfect for city and highway travel.",
    features: [
      "4 passengers",
      "2 luggage",
      "Air conditioning",
      "Fuel efficient",
    ],
  },
  {
    id: 2,
    name: "Maruti Suzuki Swift Dzire",
    capacity: 4,
    singleTrip: 14,
    roundTrip: 13,
    image:
      "https://i.ndtvimg.com/i/2017-06/maruti-suzuki-dzire-styling_827x510_81498479945.jpg",
    description: "A smooth sedan ride with great mileage and comfort.",
    features: ["4 passengers", "2 luggage", "Compact design", "USB charging"],
  },
  {
    id: 3,
    name: "Honda Amaze",
    capacity: 4,
    singleTrip: 14,
    roundTrip: 13,
    image:
      "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fc.ndtvimg.com%2F2021-08%2Fk9k5jqa_honda-amaze-facelift-2021-_650x400_25_August_21.jpg&w=3840&q=75",
    description:
      "A stylish and fuel-efficient sedan offering a comfortable ride.",
    features: [
      "4 passengers",
      "2 luggage",
      "Spacious cabin",
      "ABS braking system",
    ],
  },
  {
    id: 4,
    name: "Maruti Suzuki Ciaz",
    capacity: 4,
    singleTrip: 14,
    roundTrip: 13,
    image:
      "https://images.cardekho.com/images/expert-review/Maruti-Suzuki-Ciaz/04.jpg",
    description: "A premium sedan with luxury interiors and advanced features.",
    features: [
      "4 passengers",
      "3 luggage",
      "Premium interior",
      "Touchscreen infotainment",
    ],
  },
  {
    id: 5,
    name: "Toyota Innova",
    capacity: 7,
    singleTrip: 20,
    roundTrip: 18,
    image:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20111217093444_5.jpg&w=700&c=1",
    description: "A spacious and powerful SUV ideal for long-distance travel.",
    features: ["7 passengers", "5 luggage", "Comfort seating", "Rear AC vents"],
  },
  {
    id: 6,
    name: "Toyota Innova Crysta",
    capacity: 7,
    singleTrip: 22,
    roundTrip: 21,
    image:
      "https://www.team-bhp.com/sites/default/files/styles/check_extra_large_for_review/public/1.75Ltoyotainnovarystaaimg.jpg",
    description:
      "A premium version of the Innova, with added luxury and comfort.",
    features: [
      "7 passengers",
      "5 luggage",
      "Leather seats",
      "Enhanced safety features",
    ],
  },
  {
    id: 7,
    name: "Mahindra Xylo",
    capacity: 7,
    singleTrip: 19,
    roundTrip: 17,
    image:
      "https://www.motorbeam.com/wp-content/uploads/2009/01/mahindra_xylo_india-1200x993.jpg",
    description: "A multi-utility vehicle with ample space and durability.",
    features: [
      "7 passengers",
      "4 luggage",
      "Spacious interiors",
      "High ground clearance",
    ],
  },
  {
    id: 8,
    name: "Mahindra Marazzo",
    capacity: 7,
    singleTrip: 19,
    roundTrip: 17,
    image:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20181116033915_Marazzo-front-static.jpg&w=700&c=1",
    description: "A stylish and comfortable MUV with modern features.",
    features: [
      "7 passengers",
      "4 luggage",
      "Climate control",
      "Enhanced suspension",
    ],
  },
  {
    id: 9,
    name: "Maruti Suzuki Ertiga",
    capacity: 7,
    singleTrip: 19,
    roundTrip: 17,
    image: "https://i.ytimg.com/vi/pEcguEAAlAE/maxresdefault.jpg",
    description: "A budget-friendly and efficient MUV for family trips.",
    features: [
      "7 passengers",
      "4 luggage",
      "Fuel efficient",
      "Smartplay infotainment system",
    ],
  },
  {
    id: 10,
    name: "Toyota Rumion",
    capacity: 7,
    singleTrip: 19,
    roundTrip: 17,
    image:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/105799/rumion-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80",
    description: "A practical and comfortable MUV with excellent performance.",
    features: [
      "7 passengers",
      "4 luggage",
      "Spacious interiors",
      "Reliable engine performance",
    ],
  },
];
