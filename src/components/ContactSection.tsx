import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding scroll-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Have questions or ready to book? Reach out to our team for 24/7 assistance with bookings, inquiries, or custom transportation solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      aria-label="Full Name"
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      aria-label="Email Address"
                      name="email"
                      id="email"
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      placeholder="name@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    aria-label="Subject"
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    placeholder="Booking inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  id="submit"
                  aria-label="Submit Form"
                  type="submit"
                  className="w-full py-3 px-4 bg-primary text-black font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">

                {/* Location 1 */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <span className="text-lg font-medium">Thiruvannamalai Office</span>
                    <p className="text-neutral-600 mt-1 text-sm">
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=17/13+Lakshmi+puram+Gandhi+Nagar+Thiruvannamalai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        17/13 Lakshmi puram<br />
                        Gandhi Nagar<br />
                        Thiruvannamalai
                      </a>
                    </p>
                  </div>
                </div>

                {/* Location 2 */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <span className="text-lg font-medium">Arani Office</span>
                    <p className="text-neutral-600 mt-1 text-sm">
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=2/107+Pillayarkoovil+Street+Nadukuppam+Village+and+Post+Arani+Tiruvannamalai+District+606903"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        2/107 Pillayarkoovil Street<br />
                        Nadukuppam Village & Post<br />
                        Arani, Tiruvannamalai District 606903
                      </a>
                    </p>
                  </div>
                </div>

                {/* Location 3 */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <span className="text-lg font-medium">Bangalore Office</span>
                    <p className="text-neutral-600 mt-1 text-sm">
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Site+No+44%2645,+VRP+Woods+Layout,+1st+Cross,+Kithagnur,+K+R+Puram,+Bangalore+560036"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        Site No 44 & 45, VRP Woods Layout<br />
                        1st Cross, Kithagnur, K R Puram<br />
                        Bangalore - 560036
                      </a>
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <span className="text-lg font-medium">Phone Numbers</span>
                    <p className="text-neutral-600 mt-1">
                      <a href="tel:+919994680220" className="text-neutral-600 hover:text-gray-800 text-sm" aria-label="Call Us">
                        +91 9994680220
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <span className="text-lg font-medium block">Email</span>
                    <a href="mailto:kavindroptaxi.in@gmail.com" className="text-neutral-600 mt-1 text-sm">
                      kavindroptaxi.in@gmail.com
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
