import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/constants/testimonials';
import { cn } from '@/lib/utils';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  // Calculate number of slides needed for pairs
  const totalSlides = Math.ceil(testimonials.length / 2);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const testimonialPairs = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    testimonialPairs.push(testimonials.slice(i, i + 2));
  }

  useEffect(() => {
    if (!isAutoplay) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoplay]);

  return (
    <section className="section-padding bg-neutral-50 scroll-section overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued clients have to say about their experience with our premium taxi service.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={() => {
              setIsAutoplay(false);
              prevSlide();
            }}
            type="button"
            id="prev"
            aria-label="Previous Slide"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 p-2 rounded-full bg-white shadow-md hover:bg-neutral-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => {
              setIsAutoplay(false);
              nextSlide();
            }}
            type="button"
            id="next"
            aria-label="Next Slide"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 p-2 rounded-full bg-white shadow-md hover:bg-neutral-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonials Carousel */}
          <div className="relative overflow-hidden py-4 ">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonialPairs.map((pair, pairIndex) => (
                <div
                  key={pairIndex}
                  className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-6 px-4"
                >
                  {pair.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="bg-white rounded-xl p-8 shadow-md"
                    >
                      <div className="flex items-center mb-6">
                        <div className="mr-4">
                          <div className="w-12 h-12 rounded-full bg-neutral-200 overflow-hidden">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-neutral-500 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="text-amber-500 flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-neutral-600">{testimonial.review}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 gap-2">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                type="button"
                aria-label={`Slide ${index + 1}`}
                id={`dot-${index}`}
                key={index}
                onClick={() => {
                  setIsAutoplay(false);
                  setActiveIndex(index);
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === activeIndex
                    ? "bg-neutral-800 w-4"
                    : "bg-neutral-300"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
