export type Destination = {
  from: string;
  to: string;
  distance: string;
  duration: string;
  price: number;
  image: string;
};
export const destinations: Destination[] = [
  {
    from: "Chennai",
    to: "Bangalore",
    distance: "346.7 km",
    duration: "5 hr 52 min",
    price: 4461,
    image: "/bangalore.jpg",
  },
  {
    from: "Chennai",
    to: "Pondicherry",
    distance: "150.7 km",
    duration: "3 hr 10 min",
    price: 2112,
    image: "/pondi.jpg",
  },
  {
    from: "Chennai",
    to: "Madurai",
    distance: "462.3 km",
    duration: "7 hr 50 min",
    price: 5856,
    image: "/madurai.jpg",
  },
  {
    from: "Chennai",
    to: "Trichy",
    distance: "331.8 km",
    duration: "5 hr 30 min",
    price: 4284,
    image: "/trichy.jpg",
  },
  {
    from: "Chennai",
    to: "Coimbatore",
    distance: "505.5 km",
    duration: "8 hr 50 min",
    price: 6372,
    image: "/coimbatore.jpg",
  },
  {
    from: "Coimbatore",
    to: "Bangalore",
    distance: "363.5 km",
    duration: "6 hr 24 min",
    price: 5025,
    image: "/hero2.jpg",
  },
  {
    from: "Chennai",
    to: "Salem",
    distance: "344.5 km",
    duration: "6 hr 24 min",
    price: 4778,
    image: "/salem.jpg",
  },
  {
    from: "Chennai",
    to: "Erode",
    distance: "406.7 km",
    duration: "7 hr 8 min",
    price: 5587,
    image: "/erode.jpg",
  },
  {
    from: "Coimbatore",
    to: "Ooty",
    distance: "86.8 km",
    duration: "2 hr 45 min",
    price: 1990,
    image: "/ooty.jpg",
  },
];
