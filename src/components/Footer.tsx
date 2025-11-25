import { Phone, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              ARM <span className="text-blue-400">Steels</span>
            </h3>
            <p className="text-slate-300 text-sm mb-4">
              Trusted manufacturer and supplier of high-quality scaffolding and construction support materials.
            </p>
            <div className="flex items-center space-x-2 text-slate-300">
              <MessageCircle size={20} className="text-blue-400" />
              <span className="text-sm">Anytime Stock Availability</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-slate-300">Cell: 98499 11178</p>
                  <p className="text-sm text-slate-300">Office: 98499 11169</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Locations</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-slate-200">Head Office</p>
                  <p className="text-sm text-slate-300">
                    1-4-523/7, Beside Lane United Weigh Bridge,
                    Bholakpur, Musheerabad, Hyderabad-20
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-slate-200">Factory</p>
                  <p className="text-sm text-slate-300">
                    Sy. No. 17 & 18, Narsampally Village,
                    Yadgarpalli (G.P.), Keesera (M), R.R. District
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} ARM Steels Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
