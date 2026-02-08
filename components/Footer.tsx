
import React from 'react';
import { PERSONAL_INFO } from '../constants/data';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-lg font-heading font-bold tracking-tighter">
          Nihal<span className="text-blue-500">.</span>DR
        </div>
        
        <div className="text-white/30 text-sm">
          &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All systems functional.
        </div>
        
        <div className="hidden md:block w-[150px]"></div> {/* Spacer to maintain layout balance */}
      </div>
    </footer>
  );
};

export default Footer;
