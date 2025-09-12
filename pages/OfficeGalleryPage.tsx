import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { OFFICE_GALLERY_IMAGES } from '../constants';
import type { GalleryImage } from '../types';

const OfficeGalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [selectedImage]);

  // Define grid span classes for a more dynamic "masonry" layout
  const gridSpans = [
    // Removed custom grid spans for uniform grid
  ];

  return (
    <>
  <section id="office-gallery-page" className="py-28 bg-gray-900 pt-40 min-h-screen font-sans" data-aos="fade-up">
  <div className="container mx-auto px-8">
          <div className="text-center mb-20">
            <h1 className="text-6xl font-extrabold text-white mb-2 tracking-tight font-sans" style={{letterSpacing: '-2px'}}>Our Workspace</h1>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">A look inside our collaborative and modern office environment where ideas come to life.</p>
            <div className="mt-6 w-24 h-1 bg-amber-400 mx-auto" data-aos="zoom-in" data-aos-delay="400"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {OFFICE_GALLERY_IMAGES.map((image: GalleryImage, index: number) => (
              <div 
                key={image.id} 
                className="group relative overflow-hidden rounded-xl cursor-pointer shadow-lg bg-gray-800"
                onClick={() => setSelectedImage(image)}
                role="button"
                aria-label={`View image: ${image.alt}`}
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedImage(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover rounded-xl transition-all duration-500 ease-in-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 ease-in-out"></div>
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6 text-white text-left opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-xl font-bold">{image.alt}</h3>
                  <p className="text-sm font-semibold text-amber-400 mt-1">View Details</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-screen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[999] p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
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
          <div className="relative max-w-4xl max-h-[90vh] w-full animate-zoom-in" onClick={e => e.stopPropagation()}>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
             <div className="absolute -bottom-12 left-0 right-0 text-center p-4">
              <h2 id="image-modal-title" className="text-white text-lg font-semibold">{selectedImage.alt}</h2>
            </div>
          </div>
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white text-5xl font-light hover:text-amber-400 transition-colors duration-300"
            aria-label="Close image viewer"
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
};

export default OfficeGalleryPage;
