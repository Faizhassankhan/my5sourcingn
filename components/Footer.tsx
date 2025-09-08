
import React from 'react';
import { NAV_LINKS } from '../constants';
import type { NavLink } from '../types';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 py-8">
      <div className="container mx-auto px-6 text-center">
        <a href="#/home" className="text-xl font-bold text-white tracking-wider mb-4 inline-block">
          My<span className="text-amber-400">5</span>sourcing
        </a>
        <div className="flex justify-center space-x-6 mb-4">
          {NAV_LINKS.map((link: NavLink) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-sm hover:text-amber-400 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} My5sourcing. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
