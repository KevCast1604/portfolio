import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["about", "skills", "projects", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    const element = document.getElementById(item.toLowerCase());
    
    if (element) {
      const offsetTop = element.offsetTop - 80; // Ajuste para el header fijo
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
    
    setIsOpen(false);
  };

  const navItems = ["About", "Skills", "Projects", "Contact"];

  return (
    <nav
      className={`fixed left-0 top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          ? "bg-gray-900/98 backdrop-blur-md shadow-xl shadow-cyan-500/10" 
          : "bg-gray-900/95 backdrop-blur-sm"
      }`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo con animación */}
          <a
            href="#"
            className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-all duration-300 hover:scale-110 transform"
          >
            {"<Hello World!/>"}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item)}
                className={`relative px-4 py-2 text-gray-300 font-medium transition-all duration-300 group ${
                  activeSection === item.toLowerCase() ? "text-cyan-400" : ""
                }`}
                style={{
                  animation: `fadeInDown 0.5s ease-out ${index * 0.1}s backwards`
                }}
              >
                {item}
                
                {/* Underline animado */}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transform origin-left transition-transform duration-300 ${
                  activeSection === item.toLowerCase() 
                    ? "scale-x-100" 
                    : "scale-x-0 group-hover:scale-x-100"
                }`}></span>
              </a>
            ))}
          </div>

          {/* Mobile menu button con animación */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:rotate-90 transform"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation con animación de slide */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gray-900/98 backdrop-blur-md border-t border-gray-800">
          {navItems.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, item)}
              className={`block px-4 py-3 text-gray-300 hover:bg-gray-800/50 hover:text-cyan-400 transition-all duration-300 border-l-4 ${
                activeSection === item.toLowerCase()
                  ? "border-cyan-400 bg-gray-800/30 text-cyan-400"
                  : "border-transparent hover:border-cyan-400/50"
              }`}
              style={{
                animation: isOpen ? `slideInLeft 0.3s ease-out ${index * 0.05}s backwards` : "none"
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Estilos para las animaciones */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Header;