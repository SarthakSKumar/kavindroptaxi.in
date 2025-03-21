
const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-neutral-50 scroll-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued clients have to say about their experience with our premium taxi service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-xl p-8 shadow-md hover-lift">
            <div className="flex items-center mb-6">
              <div className="mr-4">
                <div className="w-12 h-12 rounded-full bg-neutral-200"></div>
              </div>
              <div>
                <h4 className="font-semibold">Gautham</h4>
                <p className="text-neutral-500 text-sm">Business Executive</p>
              </div>
            </div>
            <div className="text-amber-500 flex mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-neutral-600">
              "I rely on this service for all my business travel needs. The drivers are professional, the vehicles are immaculate, and they're always on time. Couldn't ask for more!"
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-xl p-8 shadow-md hover-lift">
            <div className="flex items-center mb-6">
              <div className="mr-4">
                <div className="w-12 h-12 rounded-full bg-neutral-200"></div>
              </div>
              <div>
                <h4 className="font-semibold">Omkar</h4>
                <p className="text-neutral-500 text-sm">Frequent Traveler</p>
              </div>
            </div>
            <div className="text-amber-500 flex mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-neutral-600">
              "Their airport transfer service is fantastic. My flight was delayed by hours, but the driver tracked my flight and was waiting when I arrived. That's what I call great service!"
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-xl p-8 shadow-md hover-lift">
            <div className="flex items-center mb-6">
              <div className="mr-4">
                <div className="w-12 h-12 rounded-full bg-neutral-200"></div>
              </div>
              <div>
                <h4 className="font-semibold">	Abhinav</h4>
                <p className="text-neutral-500 text-sm">Tourism Manager</p>
              </div>
            </div>
            <div className="text-amber-500 flex mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-neutral-600">
              "I regularly book their services for our VIP clients. The quality is consistent, the booking process is effortless, and the vehicles are top-notch. Highly recommended!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
