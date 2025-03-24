
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
          <div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>

              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      placeholder="your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">Email Address</label>
                    <input
                      type="email"
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

                <button type="submit" className="w-full py-3 px-4 bg-primary text-black font-medium rounded-lg hover:bg-primary/90 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Our Location</h4>
                    <p className="text-neutral-600 mt-1">
                    2/97 Pillayar Kovil Street Nadukkuppam post 
                     <br />
                     and village Arani Taluk
                     <br />
                     Tiruvannamalai district 606903 
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Phone Numbers</h4>
                    <p className="text-neutral-600 mt-1">
                      Bookings: +91 9994680220 <br />

                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Email Addresses</h4>
                    <p className="text-neutral-600 mt-1">
                      Bookings: kavindroptaxi.in@gmail.com<br />
            
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Business Hours</h3>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Monday - Friday:</span>
                  <span className="font-medium">24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Saturday:</span>
                  <span className="font-medium">24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Sunday:</span>
                  <span className="font-medium">24 hours</span>
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
