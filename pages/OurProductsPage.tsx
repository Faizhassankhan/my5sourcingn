import React, { useEffect, useState, Suspense } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { OUR_PRODUCT_IMAGES, SERVICES } from '../constants';

// Lazily load the 3D showcase component for better performance.
// This splits the component into a separate chunk, which is loaded only when needed.
const DenimShowcase = React.lazy(() => import('../components/DenimShowcase'));

const ShowcaseLoader = () => (
  <div className="h-screen w-full flex items-center justify-center bg-gray-900" style={{ minHeight: '500px' }}>
    <p className="text-amber-400 text-lg animate-pulse">Loading 3D Showcase...</p>
  </div>
);

const PRODUCT_FEATURES = [
  { icon: <span className="text-amber-400 text-3xl">🌟</span>, title: 'High Quality' },
  { icon: <span className="text-amber-400 text-3xl">🚚</span>, title: 'Fast Delivery' },
  { icon: <span className="text-amber-400 text-3xl">🌱</span>, title: 'Eco-Friendly' },
];

const TESTIMONIALS = [
  {
    name: 'Ayesha S.',
    role: 'Fashion Brand Owner',
    text: '“My5sourcing delivered exactly what we needed, on time and with great quality. Highly recommended!”',
  },
  {
    name: 'Omar R.',
    role: 'Retail Manager',
    text: '“Professional, reliable, and transparent. Our go-to partner for sourcing.”',
  },
];

const OurProductsPage: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-gray-900 text-gray-200 font-sans">
      {/* Hero Section */}
      <section className="relative py-20 text-center bg-gray-900" data-aos="fade-down">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-400/10 to-gray-900"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Our Products</h1>
          <p className="text-lg text-gray-300 mb-6">Explore our premium range of products tailored to your needs.</p>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {OUR_PRODUCT_IMAGES.map((product) => (
              <div
                key={product.id}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-amber-400/30 transition-shadow duration-300 group flex flex-col items-center cursor-pointer"
                onClick={() => setSelectedImage(product)}
                role="button"
                aria-label={`View image: ${product.alt}`}
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedImage(product)}
              >
                <img
                  src={product.src}
                  alt={product.alt}
                  className="w-full h-48 object-cover rounded mb-4 transform transition-transform duration-500 group-hover:scale-105"
                />
                <h3 className="text-xl font-bold text-amber-400 mb-2">{product.alt}</h3>
                <p className="text-gray-300 text-center mb-4">{product.category}</p>
                <button className="bg-amber-400 text-gray-900 font-bold py-2 px-6 rounded-full shadow hover:bg-amber-500 transition-all duration-300 transform hover:scale-105" style={{pointerEvents: 'none'}}>
                  View
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Denim Showcase Section */}
      <Suspense fallback={<ShowcaseLoader />}>
        <DenimShowcase />
      </Suspense>

      {/* Feature Highlights */}
      <section className="py-16 bg-gray-800" data-aos="fade-up">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Us?</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {PRODUCT_FEATURES.map((feature, idx) => (
              <div key={idx} className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center w-64">
                {feature.icon}
                <h3 className="text-lg font-semibold text-white mt-4">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-900 py-16" data-aos="fade-up">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((testimonial, idx) => (
              <div key={idx} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <p className="text-gray-300 italic mb-4">{testimonial.text}</p>
                <span className="block text-amber-400 font-bold">
                  {testimonial.name}, {testimonial.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call-to-Action */}
      <section className="py-16 bg-gradient-to-r from-amber-400/20 to-gray-900 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Order?</h2>
        <p className="text-lg text-gray-300 mb-6">Contact us today to get started with our premium products.</p>
        <a
          href="#/contact"
          className="px-6 py-3 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold rounded-full shadow transition duration-300 inline-block"
        >
          Contact Us
        </a>
      </section>

      {/* Full-screen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[999] p-4 sm:p-8 animate-fade-in"
          onClick={() => { setSelectedImage(null); }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="image-modal-title"
        >
          <style>{`
            @keyframes fade-in {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            .animate-fade-in {
              animation: fade-in 0.3s ease-out;
            }
            @keyframes zoom-in {
              from { transform: scale(0.8); opacity: 0; }
              to { transform: scale(1); opacity: 1; }
            }
            .animate-zoom-in {
              animation: zoom-in 0.3s ease-out;
            }
          `}</style>
          {/* Image Container */}
          <div 
            className="relative bg-gray-800 rounded-xl shadow-2xl shadow-amber-500/10 overflow-hidden border border-gray-700 animate-zoom-in" 
            onClick={e => e.stopPropagation()}
          >
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="block max-h-[90vh] max-w-[90vw]"
            />
            
            {/* Controls and Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
              <div className="flex justify-start items-end">
                {/* Title */}
                <div className="pointer-events-auto">
                  <h2 id="image-modal-title" className="text-white text-lg md:text-xl font-bold drop-shadow-lg">{selectedImage.alt}</h2>
                  <p className="text-gray-300 text-sm">{selectedImage.category}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurProductsPage;
