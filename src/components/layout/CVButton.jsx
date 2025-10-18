import React from 'react';
import { Download } from 'lucide-react';

const CVButton = () => {
  return (
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 z-40 group
        /* Desktop */
        md:px-6 md:py-3 md:bg-gray-900 md:rounded-md md:border md:border-gray-700 
        md:hover:border-cyan-400 md:transition-all md:duration-300
        /* Mobile */
        md:shadow-none shadow-lg
        "
      aria-label="Download CV"
    >
      {/* Versión Desktop - Botón completo */}
      <div className="hidden md:flex items-center gap-2">
        <Download size={18} className="text-cyan-400" />
        <span className="font-medium text-cyan-400">Download CV</span>
      </div>
      
      {/* Versión Mobile - Solo icono flotante */}
      <div className="md:hidden w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 
        rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50
        hover:scale-110 active:scale-95 transition-transform duration-300">
        <Download size={24} className="text-white" />
      </div>
    </a>
  );
};

export default CVButton;