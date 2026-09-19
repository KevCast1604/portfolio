import React, { useState } from "react";
import { Github, Linkedin, ArrowUp, ArrowUpRight, Copy, Check, Globe } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const footerT = t("footer");
  const navT = t("nav");

  const copyEmail = () => {
    const email = "kevin.castaneda.llanos@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const y = element.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#fafaf9] dark:bg-[#08080a] text-neutral-900 dark:text-neutral-100 transition-colors duration-500 border-t border-neutral-200/80 dark:border-neutral-800/80 overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-16">
      
      {/* Structural Hairline Grid Decor */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-0 left-6 sm:left-12 lg:left-24 bottom-0 w-px bg-neutral-200/50 dark:bg-neutral-800/40" />
        <div className="absolute top-0 right-6 sm:right-12 lg:right-24 bottom-0 w-px bg-neutral-200/50 dark:bg-neutral-800/40 hidden sm:block" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        
        {/* Main Editorial Colophon (Asymmetric Two-Column Spread) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 sm:pb-20 border-b border-neutral-200/80 dark:border-neutral-800/80">
          
          {/* Left Column: Identity, Status & Mission */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-neutral-950 dark:text-neutral-50 mb-3">
                {footerT.title}
              </h3>

              <p className="font-mono text-xs tracking-wider uppercase text-neutral-500 dark:text-neutral-400 mb-6">
                {footerT.subtitle}
              </p>

              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-md font-normal">
                {footerT.bio}
              </p>
            </div>

            {/* Direct Channel / Copy Action & Language Toggle */}
            <div className="mt-8 pt-6 border-t border-neutral-200/60 dark:border-neutral-800/60 flex flex-wrap items-center gap-4">
              <button
                onClick={copyEmail}
                className="group relative inline-flex items-center gap-2.5 px-4 py-2.5 font-mono text-xs uppercase tracking-wider bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 transition-colors duration-200 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald-500" />
                    <span className="text-emerald-500 font-semibold">{footerT.emailCopied}</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} className="text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors" />
                    <span>kevin.castaneda.llanos@gmail.com</span>
                  </>
                )}
              </button>

              <button
                onClick={toggleLanguage}
                className="inline-flex items-center gap-2 px-3 py-2.5 font-mono text-xs uppercase tracking-wider border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:border-neutral-900 dark:hover:border-neutral-100 transition-colors cursor-pointer"
                aria-label="Toggle language"
              >
                <Globe size={13} className="opacity-60" />
                <span className={language === "en" ? "font-bold text-black dark:text-white" : "opacity-50"}>EN</span>
                <span className="opacity-30">/</span>
                <span className={language === "es" ? "font-bold text-black dark:text-white" : "opacity-50"}>ES</span>
              </button>
            </div>
          </div>

          {/* Right Column: Site Navigation & Social Dock */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Quick Directory */}
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500 block mb-4">
                {footerT.directoryHeader}
              </span>
              <ul className="space-y-2.5 font-mono text-xs uppercase tracking-wider">
                {[
                  { name: navT.about, id: "about" },
                  { name: navT.experience, id: "experience" },
                  { name: navT.skills, id: "skills" },
                  { name: navT.projects, id: "projects" },
                  { name: navT.contact, id: "contact" },
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors duration-200 cursor-pointer text-left"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social & Connect Rail */}
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500 block mb-4">
                {footerT.linksHeader}
              </span>

              <div className="space-y-3 font-mono text-xs">
                <a
                  href="https://github.com/KevCast1604"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-2 border-b border-neutral-200/60 dark:border-neutral-800/60 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Github size={15} />
                    <span>GITHUB // @KevCast1604</span>
                  </div>
                  <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/kevin-alexander-casta%C3%B1eda-llanos-712368307/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-2 border-b border-neutral-200/60 dark:border-neutral-800/60 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin size={15} />
                    <span>LINKEDIN // KEVIN CASTAÑEDA</span>
                  </div>
                  <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Return to Apex */}
        <div className="pt-8 sm:pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-500">
          <div>
            <span>© {new Date().getFullYear()} {footerT.copyright}</span>
          </div>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
          >
            <span>{footerT.returnTop}</span>
            <ArrowUp size={13} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
