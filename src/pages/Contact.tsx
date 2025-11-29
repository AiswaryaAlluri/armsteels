import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", phone: "", email: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div id="contact" className=" bg-slate-50">
      <section className="py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Get in touch with us for any inquiries about our products and
              services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-slate-200 hover:border-blue-400">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Phone className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                Call Us
              </h3>
              <p className="text-slate-600 mb-2">Cell</p>
              <a
                href="tel:9849911178"
                className="text-blue-600 font-semibold text-lg hover:text-blue-700 block mb-3"
              >
                98499 11178
              </a>
              <p className="text-slate-600 mb-2">Office</p>
              <a
                href="tel:9849911169"
                className="text-blue-600 font-semibold text-lg hover:text-blue-700 block"
              >
                98499 11169
              </a>
            </div>

            <div className="bg-white rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-slate-200 hover:border-blue-400">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Mail className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                Email Us
              </h3>
              <p className="text-slate-600 mb-4">Send us your requirements</p>
              <a
                href="mailto:armsteelspvtlimited@gmail.com"
                className="text-blue-600 font-semibold hover:text-blue-700"
              >
                armsteelspvtlimited@gmail.com
              </a>
            </div>

            <div className="bg-white rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-slate-200 hover:border-blue-400">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <MapPin className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                Visit Us
              </h3>
              <p className="text-slate-600 mb-2">Head Office</p>
              <p className="text-slate-700 text-sm">
                Bholakpur, Musheerabad,
                <br />
                Hyderabad-20
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                Send Us a Message
              </h2>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <CheckCircle className="text-green-500 mb-4" size={64} />
                  <h3 className="text-2xl font-semibold text-slate-800 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-slate-600 text-center">
                    We have received your message and will get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your requirements"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  Head Office Location
                </h3>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  1-4-523/7, Beside Lane United Weigh Bridge,
                  <br />
                  Bholakpur, Musheerabad,
                  <br />
                  Hyderabad-20,
                  <br />
                  Telangana, India
                </p>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps?q=17.5511703491211,78.6209945678711&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Head Office Location"
                  />
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  Factory Location
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Sy. No. 17 & 18, Narsampally Village,
                  <br />
                  Yadgarpalli (G.P.), Keesera (M),
                  <br />
                  R.R. District,
                  <br />
                  Telangana State, India
                </p>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps?q=17.4194278717041,78.49853515625&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Head Office Location"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-8 sm:p-12 text-white text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our team is available to help with your construction material
              requirements. Call us now for immediate stock availability and
              quotes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9849911178"
                className="bg-white hover:bg-slate-100 text-blue-900 px-8 py-3 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center"
              >
                <Phone className="mr-2" size={20} />
                Call: 98499 11178
              </a>
              <a
                href="https://wa.me/919849911178"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center"
              >
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
