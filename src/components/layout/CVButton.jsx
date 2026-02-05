import React from 'react';
import { FileDown } from 'lucide-react';

const CVButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[9999] sm:bottom-10 sm:right-10 leading-none">
      <a
        href="/CV_EN.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-full shadow-[0_10px_40px_rgba(34,211,238,0.3)] border border-white/20 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:w-48 active:scale-95 translate-z-0"
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="flex items-center justify-center w-full px-5 relative z-10">
          <FileDown 
            className="min-w-[24px] transition-transform duration-500 group-hover:rotate-12" 
            size={24} 
          />
          <div className="overflow-hidden flex items-center">
            <span className="whitespace-nowrap ml-0 opacity-0 w-0 group-hover:ml-3 group-hover:opacity-100 group-hover:w-auto transition-all duration-500 font-bold tracking-wider uppercase text-[10px]">
              Download CV
            </span>
          </div>
        </div>

        {/* Shine Animation */}
        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/20 opacity-40 group-hover:animate-shine" />
      </a>
    </div>
  );
};

export default CVButton;
