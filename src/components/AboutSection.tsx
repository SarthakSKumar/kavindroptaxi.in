
const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-neutral-50 scroll-section">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="bg-neutral-300 rounded-lg w-full h-96 md:h-[500px]"></div>
              <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-lg shadow-lg">
                <div className="text-black text-center">
                  <div className="text-4xl font-bold">15+</div>
                  <div className="font-medium">Years of Experience</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About KavinDropTaxi</h2>
            <p className="text-neutral-600 mb-6">
            At Kavin Drop Taxi, we are dedicated to providing safe, reliable, and affordable one-way taxi services across Tamil Nadu and beyond. Whether you need a ride for business, leisure, or emergency travel, we ensure a seamless and comfortable journey with our well-maintained fleet and professional drivers.
            </p>
            <p className="text-neutral-600 mb-6">
            With a strong focus on quality service and customer trust, we continue to expand our reach, offering premium taxi services tailored to your travel needs. Whether you're heading to the airport, a business meeting, or a weekend getaway, we ensure a smooth, worry-free journey. Your comfort is our mission, and we strive to exceed expectations with every ride!
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="text-primary text-3xl font-bold mb-2">5000+</div>
                <div className="text-neutral-800 font-medium">Happy Clients</div>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="text-primary text-3xl font-bold mb-2">100%</div>
                <div className="text-neutral-800 font-medium">Client Satisfaction</div>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="text-primary text-3xl font-bold mb-2">50+</div>
                <div className="text-neutral-800 font-medium">Luxury Vehicles</div>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="text-primary text-3xl font-bold mb-2">24/7</div>
                <div className="text-neutral-800 font-medium">Customer Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
