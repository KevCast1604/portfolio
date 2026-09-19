import React, { useState, useEffect } from "react";
import { Github, Linkedin, ArrowUpRight, Copy, Check, CornerDownRight, MoveDown, Globe } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();
  const heroT = t("hero");

  useEffect(() => {
    setMounted(true);
  }, []);

  const copyEmail = () => {
    const email = "kevin.castaneda.llanos@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    });
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const y = element.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between bg-[#fafaf9] dark:bg-[#08080a] text-neutral-900 dark:text-neutral-100 transition-colors duration-500 pt-28 pb-12 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20 overflow-hidden"
    >
      {/* Structural Architectural Grid Lines (Subtle & Asymmetric) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-0 left-6 sm:left-12 lg:left-24 bottom-0 w-px bg-neutral-200/70 dark:bg-neutral-800/60" />
        <div className="absolute top-0 right-6 sm:right-12 lg:right-24 bottom-0 w-px bg-neutral-200/70 dark:bg-neutral-800/60 hidden sm:block" />
        <div className="absolute top-28 sm:top-36 lg:top-40 left-0 right-0 h-px bg-neutral-200/70 dark:bg-neutral-800/60" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex-1 flex flex-col justify-center">
        {/* Top Editorial Meta Strip */}
        <div
          className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs tracking-wider uppercase font-mono text-neutral-500 dark:text-neutral-400 pb-8 sm:pb-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
        
        </div>

        {/* Main Asymmetric Typographical Statement */}
        <div className="mt-2 sm:mt-6 mb-12 sm:mb-16 lg:mb-20">
          <div
            className={`transition-all duration-700 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="text-xs sm:text-sm font-mono tracking-widest text-neutral-500 dark:text-neutral-400 uppercase mb-3 sm:mb-4 block">
              {heroT.tagline}
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.75rem] font-medium tracking-[-0.035em] leading-[0.98] text-neutral-950 dark:text-neutral-50">
              {heroT.headlineLine1} <br />
              <span className="italic font-serif font-normal text-neutral-600 dark:text-neutral-400">
                {heroT.headlineLine2}
              </span> <br />
              {heroT.headlineLine3}
            </h1>
          </div>
        </div>

        {/* Asymmetric Two-Column Division (Editorial Layout, No Generic Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-8 border-t border-neutral-200/80 dark:border-neutral-800/80">
          
          {/* Left Column: Technical Disciplines Index */}
          <div
            className={`lg:col-span-5 flex flex-col justify-between transition-all duration-700 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 block">
                {heroT.disciplinesHeader}
              </span>

              <div className="space-y-4">
                {heroT.disciplines?.map((discipline, idx) => (
                  <div
                    key={idx}
                    className="group border-b border-neutral-200/60 dark:border-neutral-800/60 pb-3.5 transition-colors duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-mono text-sm tracking-tight text-neutral-800 dark:text-neutral-200 group-hover:text-black dark:group-hover:text-white transition-colors">
                        {discipline.title}
                      </h3>
                      <CornerDownRight size={14} className="text-neutral-400 group-hover:translate-x-1 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                    </div>
                    <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400 font-sans leading-relaxed">
                      {discipline.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Statement, CTAs & Social Dock */}
          <div
            className={`lg:col-span-7 flex flex-col justify-between transition-all duration-700 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div>
              <p className="text-base sm:text-lg md:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-2xl font-normal">
                {heroT.bio}
              </p>
            </div>

            {/* CTAs & Direct Contact */}
            <div className="mt-8 sm:mt-10 pt-6 border-t border-neutral-200/50 dark:border-neutral-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              
              {/* Primary Actions */}
              <div className="flex flex-wrap items-center gap-3.5">
                <button
                  onClick={() => scrollTo("projects")}
                  className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-mono uppercase tracking-wider bg-neutral-950 text-neutral-50 hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-950 dark:hover:bg-neutral-200 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.98] cursor-pointer"
                >
                  <span>{heroT.ctaProjects}</span>
                  <ArrowUpRight size={15} className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <button
                  onClick={() => scrollTo("contact")}
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-mono uppercase tracking-wider border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.98] cursor-pointer"
                >
                  <span>{heroT.ctaContact}</span>
                </button>
              </div>

              {/* Minimalist Social & Copy Email */}
              <div className="flex items-center gap-4 text-neutral-500 dark:text-neutral-400">
                <a
                  href="https://github.com/KevCast1604"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors duration-200"
                >
                  <Github size={18} />
                </a>

                <a
                  href="https://www.linkedin.com/in/kevin-alexander-casta%C3%B1eda-llanos-712368307/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors duration-200"
                >
                  <Linkedin size={18} />
                </a>

                <button
                  onClick={copyEmail}
                  className="relative group inline-flex items-center gap-1.5 p-2 font-mono text-xs text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors duration-200 cursor-pointer"
                  aria-label="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check size={16} className="text-emerald-500" />
                      <span className="text-[11px] font-mono text-emerald-500 font-semibold">{heroT.emailCopied}</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      <span className="hidden sm:inline text-[11px] font-mono opacity-80 group-hover:opacity-100">EMAIL</span>
                    </>
                  )}
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
