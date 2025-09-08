
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white">
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1920&h=1080&fit=crop')" }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      <div className="relative z-10 p-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          Your Vision, Sourced With Excellence
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-300">
          We are your trusted partner in fashion sourcing, connecting your brand with the world's finest manufacturers.
        </p>
        <a 
          href="#/contact" 
          className="bg-amber-400 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-amber-500 transition-all duration-300 transform hover:scale-105"
        >
          Get a Quote
        </a>
      </div>
    </section>
  );
};

export default Hero;
