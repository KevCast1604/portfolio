import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ArrowDown, ChevronRight, Terminal, Cpu, Database, Sparkles } from "lucide-react";

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

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#030712] py-20">
      {/* Background Decor - Pure CSS & SVG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.15]"></div>
        
        {/* Animated Orbs */}
        <div className="absolute top-[10%] left-[-5%] w-[40vw] h-[40vw] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[40vw] h-[40vw] bg-indigo-600/10 rounded-full blur-[100px] animate-pulse-slow delay-700"></div>
        
        {/* Central Radial Gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          <div className="flex flex-col items-center text-center">
            
            {/* Status Batch */}
            <div 
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs sm:text-sm font-medium mb-8 backdrop-blur-md transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Architecting the Future of Agentic AI
            </div>

            {/* Main Headline */}
            <h1 
              className={`text-[2.5rem] leading-[1.1] sm:text-6xl md:text-8xl font-black text-white tracking-tight mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              Building <br className="sm:hidden" />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Intelligent Systems
              </span>
            </h1>

            {/* Tags Container */}
            <div 
              className={`flex flex-wrap justify-center gap-2 sm:gap-4 mb-10 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              {[
                { label: 'Full Stack Developer', icon: <Terminal size={14} /> },
                { label: 'AI Systems Engineer', icon: <Cpu size={14} /> },
                { label: 'Agentic AI', icon: <Sparkles size={14} /> }
              ].map((tag, i) => (
                <div 
                  key={tag.label} 
                  className="flex items-center gap-2 px-4 py-2 rounded-xl glass border-white/5 text-gray-300 text-xs sm:text-sm font-medium hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300 cursor-default"
                >
                  {tag.icon}
                  {tag.label}
                </div>
              ))}
            </div>

            {/* Paragraph */}
            <p 
              className={`text-base sm:text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed px-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              Specialized in crafting autonomous agents and scalable architectures. 
              My work bridges the gap between <span className="text-white font-semibold">robust backend engineering</span> and 
              the cutting edge of <span className="text-white font-semibold text-glow">artificial intelligence</span>.
            </p>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <button
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto group relative px-8 py-4 bg-cyan-500 text-[#030712] rounded-2xl font-bold transition-all duration-300 hover:scale-[1.02] active:scale-95 overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.2)]"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                <span className="flex items-center justify-center gap-2 relative z-10">
                  Deploy a Conversation <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button
                onClick={() => scrollTo('projects')}
                className="w-full sm:w-auto px-8 py-4 glass text-white rounded-2xl font-bold transition-all duration-300 hover:bg-white/5 hover:scale-[1.02] active:scale-95 border-white/10"
              >
                Explore Agentic Projects
              </button>
            </div>

            {/* Social & Secondary Indicators */}
            <div 
              className={`flex flex-col items-center gap-8 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="flex items-center gap-8 translate-y-2">
                <a href="https://github.com/KevCast1604" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-all duration-300 hover:scale-110">
                  <Github size={22} />
                </a>
                <a href="https://www.linkedin.com/in/kevin-alexander-casta%C3%B1eda-llanos-712368307/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition-all duration-300 hover:scale-110">
                  <Linkedin size={22} />
                </a>
                <button onClick={copyEmail} className="relative group text-gray-500 hover:text-cyan-400 transition-all duration-300 hover:scale-110">
                  <Mail size={22} />
                  {copied && (
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-cyan-500 text-[#030712] text-xs font-bold py-1 px-3 rounded-md whitespace-nowrap animate-bounce">
                      Copied!
                    </span>
                  )}
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Floating System Status Icons (Decorative and Image-free) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[20%] left-[15%] animate-float delay-100 hidden md:block">
           <div className="p-4 rounded-2xl glass border-white/5"><Database className="text-cyan-500/50" /></div>
        </div>
        <div className="absolute bottom-[30%] right-[15%] animate-float delay-500 hidden md:block">
           <div className="p-4 rounded-2xl glass border-white/5"><Cpu className="text-indigo-500/50" /></div>
        </div>
      </div>

      {/* Minimal Scroll Scroll */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-px h-10 bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
        <ArrowDown size={14} className="text-cyan-500/50 animate-bounce" />
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 6s ease infinite;
        }
        @media (max-width: 320px) {
          h1 { font-size: 2.2rem !important; }
          .container { padding-left: 1rem; padding-right: 1rem; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
