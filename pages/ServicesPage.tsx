import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SERVICES } from '../constants';
import type { Service } from '../types';

const ServicesPage: React.FC = () => {
  useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);
  return (
  <div className="pt-40 pb-28 bg-gray-900 font-sans" data-aos="fade-up">
  <div className="container mx-auto px-8">
  <div className="text-center mb-20">
          <h1 className="text-6xl font-extrabold text-white mb-2 tracking-tight font-sans" style={{letterSpacing: '-2px'}}>Our Services</h1>
          <p className="text-gray-300 mt-4 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            We provide comprehensive, end-to-end solutions for fashion brands, from initial concept to final delivery. Our expertise ensures quality, efficiency, and reliability at every step of the supply chain.
          </p>
          <div className="mt-6 w-32 h-1 bg-amber-400 mx-auto" data-aos="zoom-in" data-aos-delay="400"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {SERVICES.map((service: Service, index: number) => (
            <div 
              key={index} 
              className="flex items-start space-x-6 bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700"
            >
              <div className="flex-shrink-0">
                {service.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
