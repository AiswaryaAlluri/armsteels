import {
  Phone,
  MessageSquare,
  Package,
  Shield,
  Clock,
  Award,
} from "lucide-react";

export default function Home() {
  const products = [
    {
      name: "Acrow Span",
      description:
        "Heavy-duty adjustable steel props for versatile construction support",
      icon: Package,
    },
    {
      name: "Adjustable Props",
      description:
        "High-quality telescopic props for reliable temporary support",
      icon: Package,
    },
    {
      name: "Centering Sheets",
      description:
        "Durable shuttering sheets for concrete formwork applications",
      icon: Package,
    },
    {
      name: "H Frames",
      description: "Robust H-frame scaffolding for secure working platforms",
      icon: Package,
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Quality Assured",
      description: "All materials manufactured to highest industry standards",
    },
    {
      icon: Clock,
      title: "Anytime Stock",
      description: "Reliable availability with immediate delivery options",
    },
    {
      icon: Award,
      title: "Trusted Supplier",
      description: "Years of experience serving construction projects",
    },
  ];

  return (
    <div id="home" className="pt-20">
      <section className="relative bg-gradient-to-br from-slate-600 via-slate-700 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/8.jpg')] bg-no-repeat bg-cover bg-center opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              ARM <span className="text-blue-400">Steels</span> Pvt. Ltd.
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-blue-200 mb-4 font-light">
              Reliable Scaffolding & Construction Support Systems
            </p>
            <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
              Quality Materials with Anytime Stock Availability
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:9849911178"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto justify-center"
              >
                <Phone size={24} />
                <span>Call Now: 98499 11178</span>
              </a>
              <a
                href="#contact"
                className="bg-white hover:bg-slate-100 text-slate-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto justify-center"
              >
                <MessageSquare size={24} />
                <span>Get a Quote</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Why Choose ARM Steels?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Your trusted partner for construction materials and scaffolding
              solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-slate-200"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <feature.icon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Our Products
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive range of scaffolding and construction support
              materials
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 border-2 border-slate-200 hover:border-blue-400"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-600 rounded-lg mb-4">
                  <product.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {product.name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#services"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Contact us today for immediate stock availability and expert
            consultation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9849911178"
              className="bg-white hover:bg-slate-100 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 inline-flex items-center justify-center space-x-3"
            >
              <Phone size={24} />
              <span>98499 11178</span>
            </a>
            <a
              href="tel:9849911169"
              className="bg-blue-700 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 inline-flex items-center justify-center space-x-3"
            >
              <Phone size={24} />
              <span>98499 11169</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
