
import React from 'react';
import { SERVICES } from '../constants';
import type { Service } from '../types';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Expertise</h2>
          <p className="text-gray-400 mt-2">End-to-end solutions for your fashion brand.</p>
          <div className="mt-4 w-24 h-1 bg-amber-400 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service: Service, index: number) => (
            <div 
              key={index} 
              className="bg-gray-800 p-8 rounded-lg text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10"
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
