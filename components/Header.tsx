import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import type { NavLink } from '../types';

interface HeaderProps {
  currentRoute: string;
}

const Header: React.FC<HeaderProps> = ({ currentRoute }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);
  
  const isParentActive = (link: NavLink): boolean => {
    if (link.href === currentRoute) return true;
    if (link.children) {
      return link.children.some(child => child.href === currentRoute);
    }
    return false;
  };

  const mobileNavLinks = NAV_LINKS.flatMap(link => 
    link.children ? link.children : [link]
  );

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    window.location.hash = href;
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-gray-900 shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          <a href="#/home" className="text-2xl font-bold text-white tracking-wider" aria-label="Go to Home">
            My<span className="text-amber-400">5</span>sourcing
          </a>
          <nav className="hidden md:flex space-x-4 lg:space-x-6" aria-label="Main Navigation">
            {NAV_LINKS.map((link: NavLink) => (
              <div key={link.label} className="relative group">
                <a 
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-gray-300 font-bold transition-colors duration-300 relative flex items-center gap-1.5 py-2 cursor-pointer text-base md:text-lg ${isParentActive(link) ? 'text-amber-400' : 'hover:text-amber-400'}`}
                  aria-label={link.label}
                  tabIndex={0}
                >
                  {link.label}
                  {link.children && (
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 transition-transform duration-300 transform ${isParentActive(link) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </a>

                {link.children && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-56 bg-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 invisible group-hover:visible z-10 transform translate-y-2 group-hover:translate-y-0">
                    <div className="py-2">
                      {link.children.map(childLink => (
                        <a
                          key={childLink.label}
                          href={childLink.href}
                          onClick={(e) => handleNavClick(e, childLink.href)}
                          className={`block w-full text-left px-4 py-2 text-sm md:text-base font-bold transition-colors duration-200 cursor-pointer ${currentRoute === childLink.href ? 'text-amber-400 bg-gray-700' : 'text-gray-300 hover:text-amber-400 hover:bg-gray-700'}`}
                          aria-label={childLink.label}
                          tabIndex={0}
                        >
                          {childLink.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(true)} aria-label="Open menu" className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-gray-900 bg-opacity-95 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
        aria-modal="true"
        role="dialog"
      >
        <div className="flex justify-end p-6">
           <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu" className="text-white focus:outline-none">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
             </svg>
           </button>
        </div>
  <nav className="flex flex-col items-center justify-center h-full -mt-16 space-y-6" aria-label="Mobile Navigation">
          {mobileNavLinks.map((link: NavLink) => (
            <a 
              key={link.label} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-2xl sm:text-3xl font-medium transition-colors duration-300 py-2 px-4 rounded ${currentRoute === link.href ? 'text-amber-400' : 'text-gray-300 hover:text-amber-400'}`}
              aria-label={link.label}
              tabIndex={0}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;