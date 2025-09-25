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
      "/etios.webp",
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
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thehindu.com%2Flife-and-style%2Fmotoring%2Fnew-maruti-dzire-tour-s-launched-in-india%2Farticle66496685.ece&psig=AOvVaw2tGPItiwwa_Rkt9lubFjVj&ust=1758877190520000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwi5ubaixvOPAxU-VXADHQSbHTwQjRx6BAgAEBo",
    description: "A smooth sedan ride with great mileage and comfort.",
    features: ["4 passengers", "2 luggage", "Compact design", "USB charging"],
  },
  {
    id: 5,
    name: "Toyota Innova",
    capacity: 7,
    singleTrip: 20,
    roundTrip: 19,
    image:
      "https://www.jcrcab.com/wp-content/uploads/2017/12/INNOVE.jpg",
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
    image: "https://imgd.aeplcdn.com/664x374/cw/ec/31432/Mahindra-Xylo-Exterior-109406.jpg?v=201711021421&q=80",
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
    image: "/marazzo.webp",
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
    image: "https://www.team-bhp.com/sites/default/files/styles/check_extra_large_for_review/public/IMG20220901WA0009.jpg",
    description: "A budget-friendly and efficient MUV for family trips.",
    features: [
      "7 passengers",
      "4 luggage",
      "Fuel efficient",
      "Smartplay infotainment system",
    ],
  },
];
