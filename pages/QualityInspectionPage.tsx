
import React from 'react';
import { QUALITY_INSPECTION_CONTENT } from '../constants';
import type { QualityStep } from '../types';

const QualityInspectionPage: React.FC = () => {
  return (
    <section id="quality-inspection-page" className="py-20 bg-gray-900 pt-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Commitment to Quality</h1>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            Our multi-stage quality inspection process ensures that every garment we source meets the highest standards of excellence and your exact specifications.
          </p>
          <div className="mt-6 w-32 h-1 bg-amber-400 mx-auto"></div>
        </div>

        <div className="space-y-16">
          {QUALITY_INSPECTION_CONTENT.map((step: QualityStep, index: number) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="md:w-1/2">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="rounded-lg shadow-2xl w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-amber-400/50 hover:shadow-2xl" 
                />
              </div>
              <div className="md:w-1/2">
                <span className="text-amber-400 font-bold text-sm tracking-widest">STEP {index + 1}</span>
                <h2 className="text-3xl font-bold text-white mt-2 mb-4">{step.title}</h2>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityInspectionPage;
