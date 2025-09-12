import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { OUR_PRODUCT_IMAGES, SERVICES } from '../constants';

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
  const [zoom, setZoom] = useState(1);

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
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[999] p-4 animate-fade-in"
          onClick={() => { setSelectedImage(null); setZoom(1); }}
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
          <div className="relative max-w-4xl w-full h-[70vh] max-h-[80vh] flex items-center justify-center animate-zoom-in" onClick={e => e.stopPropagation()}>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              style={{ transform: `scale(${zoom})`, transition: 'transform 0.2s' }}
              className="object-contain rounded-lg shadow-2xl w-full h-full"
            />
            <div className="absolute top-4 left-4 flex gap-2 z-20">
              <button onClick={() => setZoom(z => Math.max(0.5, z - 0.2))} className="bg-gray-800 text-white rounded-full p-2 shadow hover:bg-gray-700 transition" aria-label="Zoom Out">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M7 12h10"/></svg>
              </button>
              <button onClick={() => setZoom(z => Math.min(2, z + 0.2))} className="bg-gray-800 text-white rounded-full p-2 shadow hover:bg-gray-700 transition" aria-label="Zoom In">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 7v10M7 12h10"/></svg>
              </button>
            </div>
            <div className="absolute -bottom-12 left-0 right-0 text-center p-4">
              <h2 id="image-modal-title" className="text-white text-lg font-semibold">{selectedImage.alt}</h2>
            </div>
          </div>
          <button 
            onClick={() => { setSelectedImage(null); setZoom(1); }}
            className="absolute top-4 right-4 text-white text-5xl font-light hover:text-amber-400 transition-colors duration-300"
            aria-label="Close image viewer"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default OurProductsPage;
