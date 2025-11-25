import { Box, Wrench, Layers, Grid3x3, Sheet, Settings } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Box,
      title: 'Acrow Span',
      description:
        'Heavy-duty adjustable steel props designed for versatile construction support. Provides reliable load-bearing capacity for various structural applications.',
      features: ['Adjustable height', 'High load capacity', 'Durable steel construction'],
    },
    {
      icon: Settings,
      title: 'Adjustable Props',
      description:
        'High-quality telescopic props offering reliable temporary support for slabs, beams, and formwork during construction.',
      features: ['Easy adjustment', 'Stable support', 'Multiple size options'],
    },
    {
      icon: Layers,
      title: 'Centering Sheets',
      description:
        'Premium quality shuttering sheets for concrete formwork applications. Ensures smooth finishes and efficient concrete casting.',
      features: ['Smooth surface', 'Reusable', 'Various thicknesses'],
    },
    {
      icon: Grid3x3,
      title: 'H Frames',
      description:
        'Robust H-frame scaffolding systems providing secure working platforms for construction projects of all scales.',
      features: ['Easy assembly', 'Safe working platform', 'Modular design'],
    },
    {
      icon: Sheet,
      title: 'Shuttering Plates',
      description:
        'High-grade shuttering plates for formwork systems. Designed for durability and repeated use across multiple projects.',
      features: ['Long-lasting', 'Weather resistant', 'Cost-effective'],
    },
    {
      icon: Wrench,
      title: 'Scaffolding Material',
      description:
        'Complete range of scaffolding materials including pipes, couplers, planks, and accessories for comprehensive scaffolding solutions.',
      features: ['Complete system', 'Quality assured', 'Immediate availability'],
    },
  ];

  return (
    <div id="services" className="pt-20 bg-slate-50">
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">
              Our Services & Products
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive scaffolding and construction support materials with anytime stock availability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-300 border-2 border-slate-200 hover:border-blue-500 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <service.icon className="text-blue-600 group-hover:text-white transition-colors duration-300" size={32} />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-8 sm:p-12 text-white text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              All Construction Support Equipment
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              We supply a complete range of construction support equipment tailored to your project needs. Contact us for custom requirements and bulk orders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9849911178"
                className="bg-white hover:bg-slate-100 text-blue-900 px-8 py-3 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center"
              >
                Call: 98499 11178
              </a>
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center border-2 border-white"
              >
                Request Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
