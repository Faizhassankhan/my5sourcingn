
import React from 'react';
import { NAV_LINKS } from '../constants';
import type { NavLink } from '../types';

const Footer: React.FC = () => {
  return (
  <footer className="bg-black text-gray-400 py-10 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row md:justify-between items-center text-center md:text-left gap-8 md:gap-6">
  <div className="mb-8 md:mb-0 w-full md:w-auto">
          <a href="#/home" className="text-2xl font-bold text-white tracking-wider mb-2 inline-block">
            My<span className="text-amber-400">5</span>sourcing
          </a>
          <p className="text-sm mt-2 max-w-xs">Your trusted partner for global fashion sourcing. Secure, reliable, and quality-driven.</p>
          <div className="flex items-center mt-4 space-x-2">
            <span className="inline-block bg-green-600 text-white text-xs px-2 py-1 rounded">Secure Site</span>
            <span className="inline-block bg-amber-400 text-black text-xs px-2 py-1 rounded">Verified Supplier</span>
          </div>
        </div>
  <div className="mb-8 md:mb-0 w-full md:w-auto">
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <nav aria-label="Footer Navigation">
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {NAV_LINKS.map((link: NavLink) => (
                <React.Fragment key={link.label}>
                  {/* Only show parent links if they do not have children */}
                  {!link.children && (
                    <a 
                      href={link.href}
                      className="text-sm hover:text-amber-400 transition-colors duration-300"
                      aria-label={link.label}
                    >
                      {link.label}
                    </a>
                  )}
                  {/* Show child links for Services and Gallery */}
                  {link.children && link.children.map(child => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="text-sm hover:text-amber-400 transition-colors duration-300 ml-2"
                      aria-label={child.label}
                    >
                      {child.label}
                    </a>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </nav>
        </div>
  <div className="w-full md:w-auto">
          <h3 className="text-lg font-semibold text-white mb-2">Contact</h3>
          <p className="text-sm">info@my5sourcing.com</p>
          <p className="text-sm">+92 300 1234567</p>
          <p className="text-sm">Karachi, Pakistan</p>
        </div>
      </div>
  <div className="mt-8 text-center text-xs text-gray-500 px-2">
        &copy; {new Date().getFullYear()} My5sourcing. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
