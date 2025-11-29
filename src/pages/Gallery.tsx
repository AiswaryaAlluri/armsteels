import { useState } from "react";
import { X } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState<number>(9); // LOAD MORE COUNT

  const categories = ["All", "Cuplock", "H Frame","Jack Pipe","Scaffolding Systems","Ledger Pipe"];

  // ---------- AUTO-GENERATED IMAGE LIST ----------
  const rootImages = Array.from({ length: 50 }).map((_, i) => ({
    url: `/${i + 1}.jpg`,
    category: "All",
    title: `Material ${i + 1}`,
  }));

  const cuplockImages = Array.from({ length: 9 }).map((_, i) => ({
    url: `/cuplock/${i + 1}.jpg`,
    category: "Cuplock",
    title: `Cuplock ${i + 1}`,
  }));

  const hFrameImages = Array.from({ length: 3 }).map((_, i) => ({
    url: `/hframe/${i + 1}.jpg`,
    category: "H Frame",
    title: `H Frame ${i + 1}`,
  }));

  const jackPipeImages = Array.from({ length: 1 }).map((_, i) => ({
    url: `/jackpipe/${i + 1}.jpg`,
    category: "Jack Pipe",
    title: `Jack Pipe ${i + 1}`,
  }));

  const ledgerPipeImages = Array.from({ length: 1 }).map((_, i) => ({
    url: `/ledger-pipe/${i + 3}.jpg`,
    category: "Ledger Pipe",
    title: `Ledger Pipe ${i + 1}`,
  }));

  const scaffoldingSystemImages = Array.from({ length: 1 }).map((_, i) => ({
    url: `/scaffolding/${i + 1}.jpg`,
    category: "Scaffolding Systems",
    title: `Scaffolding System ${i + 1}`,
  }));

  const images = [...rootImages, ...cuplockImages, ...hFrameImages, ...jackPipeImages,...ledgerPipeImages,...scaffoldingSystemImages];

  // Filter by category
  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  // Slice according to visible count
  const visibleImages = filteredImages.slice(0, visibleCount);

  // When category changes → reset visibleCount
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setVisibleCount(9); // Reset
  };

  return (
    <div id="gallery" className=" bg-slate-50">
      <section className="py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">
              Our Gallery
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore our variety of scaffolding materials and product collections.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-2 rounded-lg font-medium transition duration-200 ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image.url)}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  loading="lazy"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-semibold text-lg">
                      {image.title}
                    </h3>
                    <p className="text-blue-300 text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < filteredImages.length && (
            <div className="mt-10 text-center">
              <button
                onClick={() => setVisibleCount(visibleCount + 9)}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition"
              >
                Load More
              </button>
            </div>
          )}

          {/* Lightbox */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-blue-400 transition"
              >
                <X size={40} />
              </button>
              <img
                src={selectedImage}
                alt="Full view"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-slate-600 mb-6">
              Want more details about our scaffolding products?
            </p>
            <a
              href="#contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition shadow-md hover:shadow-lg"
            >
              Contact Us Today
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
