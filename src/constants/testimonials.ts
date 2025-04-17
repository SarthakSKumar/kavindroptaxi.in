export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  review: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Gautham",
    role: "Business Executive",
    image: "images/users/gautham.webp",
    rating: 5,
    review:
      "I rely on this service for all my business travel needs. The drivers are professional, the vehicles are immaculate, and they're always on time. Couldn't ask for more!",
  },
  {
    id: 2,
    name: "Omkar",
    role: "Frequent Traveler",
    image: "images/users/omkar.webp",
    rating: 5,
    review:
      "Their airport transfer service is fantastic. My flight was delayed by hours, but the driver tracked my flight and was waiting when I arrived. That's what I call great service!",
  },
  {
    id: 3,
    name: "Abhinav",
    role: "Tourism Manager",
    image: "images/users/abhinav.webp",
    rating: 5,
    review:
      "I regularly book their services for our VIP clients. The quality is consistent, the booking process is effortless, and the vehicles are top-notch. Highly recommended!",
  },
  {
    id: 4,
    name: "Priya Shah",
    role: "Wedding Planner",
    image: "images/users/priya.jpg",
    rating: 5,
    review:
      "Their fleet of luxury vehicles made our wedding arrangements perfect. The drivers were courteous and punctual. All our guests were impressed with the service!",
  },
  {
    id: 5,
    name: "Rajesh Kumar",
    role: "Corporate Manager",
    image: "images/users/rajesh.webp",
    rating: 5,
    review:
      "We use their services for all our corporate events. The booking system is efficient, and their team is very professional. A trusted partner for our transportation needs.",
  },
];
