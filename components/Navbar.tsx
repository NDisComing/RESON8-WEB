import React, { useState, useEffect } from 'react';
import { Menu, X, Waves } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Split nav items for left/right layout
  const midPoint = Math.ceil(NAV_ITEMS.length / 2);
  const leftItems = NAV_ITEMS.slice(0, midPoint);
  const rightItems = NAV_ITEMS.slice(midPoint);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger the transition a bit later (100px) for a smoother handoff from Hero
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 relative flex justify-between items-center">
        
        {/* Mobile Menu Button (Left aligned on mobile) */}
        <button
          className="md:hidden z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-black' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-black' : 'text-white'} />
          )}
        </button>

        {/* Mobile Logo Center */}
        <a 
          href="#" 
          className={`md:hidden absolute left-1/2 -translate-x-1/2 font-serif font-bold text-xl tracking-widest flex items-center gap-1 transition-colors duration-300 ${
             isScrolled ? 'text-black' : 'text-white'
          }`}
        >
          RES<Waves className="w-4 h-4" />N8
        </a>

        {/* Desktop Layout: [Left Links] [Center Logo] [Right Links] */}
        
        {/* Left Links */}
        <div className="hidden md:flex flex-1 justify-end pr-12 space-x-12">
          {leftItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-xs font-medium tracking-[0.2em] uppercase hover:opacity-60 transition-all duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white/90'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Center Logo Container */}
        <div className="hidden md:flex justify-center items-center w-40">
           <a 
            href="#" 
            className={`font-serif font-bold text-2xl tracking-widest flex items-center gap-2 transform transition-all duration-700 ease-out ${
              isScrolled 
                ? 'opacity-100 translate-y-0 text-black' 
                : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
          >
            RES<Waves className="w-5 h-5" />N8
          </a>
        </div>

        {/* Right Links */}
        <div className="hidden md:flex flex-1 justify-start pl-12 space-x-12">
          {rightItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-xs font-medium tracking-[0.2em] uppercase hover:opacity-60 transition-all duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white/90'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`absolute top-0 left-0 w-full bg-white h-screen flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ease-in-out md:hidden ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-900 text-xl font-serif font-medium tracking-widest uppercase"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
      </div>
    </nav>
  );
};

export default Navbar;