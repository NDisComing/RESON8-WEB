import React from 'react';
import { Instagram, Facebook, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-900 border-t border-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold tracking-widest mb-2">RESON8</h3>
            <p className="text-gray-500 text-sm tracking-wide">Tuning Hearts to God's Frequency</p>
          </div>

          {/* Links */}
          <div className="flex gap-8">
            <a href="#" className="p-3 bg-gray-50 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 group">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 bg-gray-50 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 group">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 bg-gray-50 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 group">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="mailto:hello@reson8.com" className="p-3 bg-gray-50 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 group">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 text-center text-xs text-gray-400 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Reson8 Ministry. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;