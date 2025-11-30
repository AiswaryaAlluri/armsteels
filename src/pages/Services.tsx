export default function Services() {
  const services = [
    {
      image: "/services/cuplock.webp",
      title: "Scaffolding Systems",
      description:
        "Strong, modular, and safe scaffolding systems for all construction needs.",
    },
    {
      image: "/hframe/1.jpg",
      title: "H Frame",
      description:
        "Heavy-duty H Frames with adjustable support for maximum stability.",
    },
    {
      image: "/cuplock/1.jpg",
      title: "Civil Clamps & Fasteners",
      description:
        "High-strength clamps ensuring safety and structural integrity.",
    },
    {
      image: "/ledger-pipe/3.jpg",
      title: "Ledger Pipes",
      description:
        "Best Ledger pipes for strong and efficient construction projects.",
    },
    {
      image: "/services/jack-pipe.webp",
      title: "Jack Pipes for Construction",
      description:
        "Reliable vertical support for scaffolding setups and structures.",
    },
    {
      image: "/services/centering-sheet.webp",
      title: "Centering Sheets",
      description:
        "Premium mild steel sheets for slab & beam casting applications.",
    },

    {
      image: "/services/u-jack-and-base-jack-.webp",
      title: "U Jack & Base Jack ",
      description:
        "Adjustable supports for perfect balance & structural strength.",
    },
    {
      image: "/services/columnbox.webp",
      title: "Column Box",
      description:
        "Robust formwork solutions for precise column shaping and support.",
    },
  ];

  return (
    <div id="services" className="bg-white">
      <section className="py-5 m:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">
              Our Services
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive scaffolding solutions designed for safety, strength,
              and reliability in every project.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-slate-200 hover:border-blue-400"
              >
                {/* Service Image */}
                <div className="w-full h-[300px] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <a
                    href="https://wa.me/+919849911178?text=I%20am%20interested%20in%20your%20scaffolding%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <p className="text-slate-600 mb-6 text-lg">
              Need more details about our scaffolding services?
            </p>
            <a
              href="#contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
