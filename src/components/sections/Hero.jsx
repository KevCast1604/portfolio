import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const copyEmail = () => {
    const email = "kevin.castaneda.llanos@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-0">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main heading con animación de fade in */}
        <div className="my-8">
          <h1 
            className={`text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 transition-all md:mt-0 mt-24 duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-700 bg-clip-text text-transparent animate-gradient">
              Kevin Castañeda
            </span>
          </h1>
          <div 
            className={`h-1 w-32 sm:w-40 md:w-64 bg-gradient-to-r from-cyan-400 to-blue-700 mx-auto mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}></div>
        </div>

        {/* Subtitle con animación escalonada */}
        <div 
          className={`text-xl sm:text-xl md:text-2xl mb-8 flex flex-col md:flex-row gap-2 justify-center items-center transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-700 bg-clip-text text-transparent font-semibold hover:scale-110 transition-transform duration-300 animate-fadeIn">
            Full Stack Developer
          </span>
          <span className="bg-gradient-to-r from-blue-400 via-cyan-700 to-cyan-400 bg-clip-text text-transparent font-semibold hover:scale-110 transition-transform duration-300 animate-fadeIn delay-100">
            | Backend Specialist
          </span>
          <span className="bg-gradient-to-r from-blue-700 via-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold hover:scale-110 transition-transform duration-300 animate-fadeIn delay-200">
            | Frontend Enthusiast
          </span>
        </div>

        {/* Description */}
        <p 
          className={`text-lg text-gray-400 mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Born to craft elegant solutions from complex problems. Specialized in
          building scalable web applications with modern technologies.
        </p>

        {/* CTA Buttons con hover mejorado */}
        <div 
          className={`flex flex-wrap gap-4 justify-center mb-12 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="group px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg transition-all duration-300 font-semibold shadow-lg"
          >
            <span className="flex items-center gap-2">
              Get In Touch
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('projects');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="group px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-300 font-semibold border-2 border-gray-700 hover:border-cyan-500 hover:scale-105 transform"
          >
            <span className="flex items-center gap-2">
              View My Work
              <span className="group-hover:rotate-90 transition-transform duration-300">↗</span>
            </span>
          </a>
        </div>

        {/* Social Links con animaciones individuales */}
        <div 
          className={`flex gap-6 justify-center transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a
            href="https://github.com/KevCast1604"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-125 transform hover:-rotate-12"
            aria-label="GitHub"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/kevin-alexander-casta%C3%B1eda-llanos-712368307/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-125 transform hover:rotate-12"
            aria-label="LinkedIn"
          >
            <Linkedin size={28} />
          </a>
          <button
            onClick={copyEmail}
            className="cursor-pointer text-gray-400 hover:text-cyan-400 transition-all duration-300 relative group hover:scale-125 transform"
            aria-label="Copy Email"
          >
            <Mail className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
            {copied && (
              <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-cyan-500 text-white text-xs py-1 px-3 rounded-lg whitespace-nowrap animate-bounce shadow-lg">
                Copied! ✓
              </span>
            )}
          </button>
        </div>

        {/* Scroll indicator animado */}
        <div 
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1100 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="animate-bounce">
            <ArrowDown className="text-cyan-400 w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Estilos para animaciones personalizadas */}
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-1000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
