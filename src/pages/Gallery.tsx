import { useState } from 'react';
import { X } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Acrow Span', 'Props', 'H Frames', 'Centering Sheets', 'Factory', 'On-site'];

  const images = [
    {
      url: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Acrow Span',
      title: 'Acrow Span System',
    },
    {
      url: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Props',
      title: 'Adjustable Props',
    },
    {
      url: 'https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'H Frames',
      title: 'H Frame Scaffolding',
    },
    {
      url: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Centering Sheets',
      title: 'Quality Centering Sheets',
    },
    {
      url: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Factory',
      title: 'Manufacturing Facility',
    },
    {
      url: 'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'On-site',
      title: 'Site Installation',
    },
    {
      url: 'https://images.pexels.com/photos/273209/pexels-photo-273209.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'On-site',
      title: 'Construction Project',
    },
    {
      url: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Factory',
      title: 'Production Line',
    },
    {
      url: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Props',
      title: 'Steel Props Collection',
    },
  ];

  const filteredImages = selectedCategory === 'All'
    ? images
    : images.filter((img) => img.category === selectedCategory);

  return (
    <div id="gallery" className="pt-20 bg-slate-50">
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">
              Our Gallery
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore our range of high-quality scaffolding materials and completed projects
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image.url)}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                    <p className="text-blue-300 text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {selectedImage && (
            <div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-blue-400 transition-colors"
              >
                <X size={40} />
              </button>
              <img
                src={selectedImage}
                alt="Full size"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}

          <div className="mt-16 text-center">
            <p className="text-slate-600 mb-6">
              Need more information about our products?
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
