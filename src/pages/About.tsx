import { Building2, User, MapPin, Factory, Target, Award } from 'lucide-react';

export default function About() {
  return (
    <div id="about" className=" bg-white">
      <section className="py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">
              About ARM Steels Pvt. Ltd.
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Your trusted partner in construction materials and scaffolding solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Building2 className="text-blue-600" size={28} />
                </div>
                <h2 className="text-3xl font-bold text-slate-800">Our Company</h2>
              </div>
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                ARM Steels Pvt. Ltd. is a trusted manufacturer and supplier of high-quality scaffolding and construction support materials. With a commitment to reliability and anytime stock availability, we provide essential products that form the backbone of construction projects across the region.
              </p>
              <p className="text-slate-700 text-lg leading-relaxed">
                Our comprehensive range includes Acrow Spans, Adjustable Props, Centering Sheets, H Frames, Shuttering Plates, and complete scaffolding systems. We serve contractors, builders, and construction companies with the same dedication to quality and service excellence.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Core Values</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <Award className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Quality Assurance</h4>
                    <p className="text-blue-100">
                      All materials manufactured to the highest industry standards ensuring safety and reliability.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <Target className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Customer Focus</h4>
                    <p className="text-blue-100">
                      Dedicated to meeting customer requirements with prompt delivery and excellent support.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <Factory className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Manufacturing Excellence</h4>
                    <p className="text-blue-100">
                      State-of-the-art manufacturing facility ensuring consistent quality and supply.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 sm:p-12 mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <User className="text-blue-600" size={28} />
              </div>
              <h2 className="text-3xl font-bold text-slate-800">Leadership</h2>
            </div>
            <div className="bg-white rounded-xl p-6 border-l-4 border-blue-600">
              <h3 className="text-2xl font-semibold text-slate-800 mb-2">Azeez ur Rahman</h3>
              <p className="text-blue-600 font-medium text-lg">Director</p>
              <p className="text-slate-600 mt-4">
                Under experienced leadership, ARM Steels has grown to become a reliable name in the construction materials industry, known for quality products and dependable service.
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <MapPin className="text-blue-600" size={28} />
              </div>
              <h2 className="text-3xl font-bold text-slate-800">Our Locations</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 border-2 border-slate-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Building2 className="text-white" size={20} />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-800">Head Office</h3>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  1-4-523/7, Beside Lane United Weigh Bridge,<br />
                  Bholakpur, Musheerabad,<br />
                  Hyderabad-20,<br />
                  Telangana, India
                </p>
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <p className="text-slate-600 font-medium">Contact:</p>
                  <p className="text-blue-600 font-semibold text-lg mt-1">
                    98499 11169
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-slate-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Factory className="text-white" size={20} />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-800">Factory</h3>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Sy. No. 17 & 18, Narsampally Village,<br />
                  Yadgarpalli (G.P.), Keesera (M),<br />
                  R.R. District,<br />
                  Telangana State, India
                </p>
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <p className="text-slate-600 font-medium">Contact:</p>
                  <p className="text-blue-600 font-semibold text-lg mt-1">
                    98499 11178
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-8 sm:p-12 text-white text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Partner With Us
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Experience the reliability and quality that has made ARM Steels a trusted name in construction materials. Contact us today to discuss your requirements.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white hover:bg-slate-100 text-blue-900 px-8 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
