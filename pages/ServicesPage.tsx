
import React from 'react';
import { SERVICES } from '../constants';
import type { Service } from '../types';

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Our Services</h1>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            We provide comprehensive, end-to-end solutions for fashion brands, from initial concept to final delivery. Our expertise ensures quality, efficiency, and reliability at every step of the supply chain.
          </p>
          <div className="mt-6 w-32 h-1 bg-amber-400 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {SERVICES.map((service: Service, index: number) => (
            <div 
              key={index} 
              className="flex items-start space-x-6 bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                {service.icon}
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
