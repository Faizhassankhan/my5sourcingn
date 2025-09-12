import React from 'react';
import { GALLERY_IMAGES } from '../constants';
import type { GalleryImage } from '../types';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Product Gallery</h2>
          <p className="text-gray-400 mt-2">A glimpse into the quality garments we source.</p>
          <div className="mt-4 w-24 h-1 bg-amber-400 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((image: GalleryImage) => (
            <div key={image.id} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 flex items-center justify-center">
                <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-lg font-bold">{image.alt}</h3>
                  <p className="text-sm font-bold text-amber-400">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
