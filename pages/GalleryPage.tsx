
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GALLERY_IMAGES } from '../constants';
import type { GalleryImage } from '../types';

const GalleryPage: React.FC = () => {
  const [filter, setFilter] = useState('All');
  useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);
  const categories = ['All', ...Array.from(new Set(GALLERY_IMAGES.map(img => img.category)))];

  const filteredImages = filter === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(image => image.category === filter);

  return (
  <section id="gallery-page" className="py-28 bg-gray-900 pt-40 font-sans" data-aos="fade-up">
  <div className="container mx-auto px-8">
  <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white" data-aos="fade-down">Product Gallery</h1>
          <p className="text-gray-300 mt-2" data-aos="fade-up" data-aos-delay="200">Explore the range of high-quality garments we source.</p>
          <div className="mt-4 w-24 h-1 bg-amber-400 mx-auto" data-aos="zoom-in" data-aos-delay="400"></div>
        </div>
        
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
                filter === category
                  ? 'bg-amber-400 text-gray-900'
                  : 'bg-gray-800 text-gray-300 hover:bg-amber-400 hover:text-gray-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredImages.map((image: GalleryImage) => (
            <div key={image.id} className="group relative overflow-hidden rounded-lg shadow-lg aspect-w-1 aspect-h-1 bg-gray-800">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-500 flex items-end p-4">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-lg font-semibold">{image.alt}</h3>
                  <p className="text-sm font-semibold text-amber-400">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
