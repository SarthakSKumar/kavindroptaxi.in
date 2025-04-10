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
      "/dzire.webp",
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
      "https://www.team-bhp.com/forum/attachments/official-new-car-reviews/2696890d1734033882-2024-honda-amaze-review-2024_honda_amaze_exterior_01.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/8/87/Suzuki_Ciaz_2015_in_Punta_del_Este.JPG",
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
      "/xylo.png",
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
      "/marazzo.avif",
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
      "/rumion.jpg",
    description: "A practical and comfortable MUV with excellent performance.",
    features: [
      "7 passengers",
      "4 luggage",
      "Spacious interiors",
      "Reliable engine performance",
    ],
  },
];
