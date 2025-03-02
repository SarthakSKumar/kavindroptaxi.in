
const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gray-50 scroll-section">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="bg-gray-300 rounded-lg w-full h-96 md:h-[500px]"></div>
              <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-lg shadow-lg">
                <div className="text-black text-center">
                  <div className="text-4xl font-bold">15+</div>
                  <div className="font-medium">Years of Experience</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Our Premium Taxi Service</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2008, our premium taxi service has been providing exceptional transportation solutions to clients worldwide. We take pride in our professional chauffeurs, luxury vehicles, and unwavering commitment to customer satisfaction.
            </p>
            <p className="text-gray-600 mb-6">
              Our mission is to deliver safe, reliable, and comfortable transportation that exceeds our clients' expectations. Whether you're traveling for business or pleasure, our service is designed to enhance your journey.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="text-primary text-3xl font-bold mb-2">5000+</div>
                <div className="text-gray-800 font-medium">Happy Clients</div>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="text-primary text-3xl font-bold mb-2">100%</div>
                <div className="text-gray-800 font-medium">Client Satisfaction</div>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="text-primary text-3xl font-bold mb-2">50+</div>
                <div className="text-gray-800 font-medium">Luxury Vehicles</div>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="text-primary text-3xl font-bold mb-2">24/7</div>
                <div className="text-gray-800 font-medium">Customer Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
