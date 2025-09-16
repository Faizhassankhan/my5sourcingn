import React, { useState, useEffect } from 'react';

const heroImages = [
  '/images/Homepage 1.jpeg',
  '/images/Homepage 2.jpeg',
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % heroImages.length);
    }, 7000); // Change image every 7 seconds for a smoother, slower effect

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
  <section id="home" className="relative h-screen flex items-center justify-center text-center text-white font-sans">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('${image}')`,
            opacity: index === currentImageIndex ? 1 : 0,
            transform: `scale(${index === currentImageIndex ? 1.1 : 1})`,
            transition: 'opacity 1.5s ease-in-out, transform 7s ease-in-out',
          }}
        />
      ))}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      <div className="relative z-10 p-6 max-w-4xl mx-auto">
        <h1 
          className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Fashion Sourcing Made Simple
        </h1>
        <h2 
          className="text-2xl md:text-3xl font-bold mb-6 text-amber-400"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Your Vision, Delivered With Excellence
        </h2>
        <p className="text-lg md:text-xl mb-8 text-gray-300" data-aos="fade-up" data-aos-delay="500">
          We connect your brand with the world’s finest manufacturers—quality, speed, and reliability from concept to delivery.
        </p>
      </div>
    </section>
  );
};

export default Hero;
