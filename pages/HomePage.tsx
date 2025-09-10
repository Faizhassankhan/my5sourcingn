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
      <div data-aos="fade-up">
        <Contact />
      </div>
    </>
  );
};

export default HomePage;
