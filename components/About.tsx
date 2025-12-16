import React from 'react';
import { ABOUT_TEXT_EN, ABOUT_TEXT_ZH } from '../constants';

// REPLACE THIS URL WITH YOUR OWN IMAGE
const ABOUT_IMAGE_URL = "https://picsum.photos/id/433/800/600";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="relative">
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-2">
                About
                <br />
                Us
              </h2>
              <div className="w-20 h-1 bg-black mt-4"></div>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed text-justify">
              <p className="font-sc text-base md:text-lg whitespace-pre-line">
                {ABOUT_TEXT_ZH}
              </p>
              <div className="h-px w-full bg-gray-200 my-6"></div>
              <p className="font-sans text-sm md:text-base italic opacity-80">
                {ABOUT_TEXT_EN}
              </p>
            </div>
          </div>

          {/* Image Content */}
          <div className="order-1 lg:order-2 relative">
             <div className="relative rounded-sm overflow-hidden shadow-2xl">
                 <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent pointer-events-none"></div>
                <img 
                    src={ABOUT_IMAGE_URL}
                    alt="Reson8 Team" 
                    className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
             </div>
             {/* Decorative element */}
             <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-gray-200 hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;