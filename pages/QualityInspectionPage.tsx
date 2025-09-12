import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { QUALITY_INSPECTION_CONTENT } from '../constants';
import type { QualityStep } from '../types';

const QualityInspectionPage: React.FC = () => {
  useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);
  return (
  <section id="quality-inspection-page" className="py-28 bg-gray-900 pt-40 font-sans" data-aos="fade-up">
  <div className="container mx-auto px-8">
  <div className="text-center mb-20">
          <h1 className="text-6xl font-extrabold text-white mb-2 tracking-tight font-sans" style={{letterSpacing: '-2px'}}>Commitment to Quality</h1>
          <p className="text-gray-300 mt-4 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Our multi-stage quality inspection process ensures that every garment we source meets the highest standards of excellence and your exact specifications.
          </p>
          <div className="mt-6 w-32 h-1 bg-amber-400 mx-auto" data-aos="zoom-in" data-aos-delay="400"></div>
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
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityInspectionPage;
