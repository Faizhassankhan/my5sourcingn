import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
      <div data-aos="fade-down">
        <Hero />
      </div>
      <div data-aos="fade-up">
        <Services />
      </div>
      <div data-aos="zoom-in">
        <Gallery />
      </div>
      {/* Testimonials Section */}
      <section className="bg-gray-900 py-16" data-aos="fade-up">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <p className="text-gray-300 italic mb-4">“My5sourcing delivered exactly what we needed, on time and with great quality. Highly recommended!”</p>
              <span className="block text-amber-400 font-bold">Ayesha S., Fashion Brand Owner</span>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <p className="text-gray-300 italic mb-4">“Professional, reliable, and transparent. Our go-to partner for sourcing.”</p>
              <span className="block text-amber-400 font-bold">Omar R., Retail Manager</span>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio/Brands Section */}
      <section className="bg-gray-900 py-12" data-aos="fade-up">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Trusted By</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <span className="bg-gray-800 px-6 py-3 rounded-lg text-white font-semibold shadow">BrandOne</span>
            <span className="bg-gray-800 px-6 py-3 rounded-lg text-white font-semibold shadow">FashionPro</span>
            <span className="bg-gray-800 px-6 py-3 rounded-lg text-white font-semibold shadow">RetailX</span>
            <span className="bg-gray-800 px-6 py-3 rounded-lg text-white font-semibold shadow">StyleHub</span>
          </div>
        </div>
      </section>

      <div data-aos="fade-up">
        <Contact />
      </div>
    </>
  );
};

export default HomePage;
