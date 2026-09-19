import React from "react";
import { Code2, Database, Rocket, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  const aboutT = t("about");

  const icons = [<Code2 className="w-4 h-4" />, <Database className="w-4 h-4" />, <Rocket className="w-4 h-4" />];

  return (
    <section
      id="about"
      className="relative bg-[#fafaf9] dark:bg-[#08080a] text-neutral-900 dark:text-neutral-100 transition-colors duration-500 py-28 sm:py-36 lg:py-44 border-t border-neutral-200/70 dark:border-neutral-800/60 overflow-hidden"
    >
      {/* Structural Architectural Guide Lines */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-0 left-6 sm:left-12 lg:left-24 bottom-0 w-px bg-neutral-200/50 dark:bg-neutral-800/40" />
        <div className="absolute top-0 right-6 sm:right-12 lg:right-24 bottom-0 w-px bg-neutral-200/50 dark:bg-neutral-800/40 hidden sm:block" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        
        {/* Section Header Meta Indicator */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-12 sm:pb-16 border-b border-neutral-200/80 dark:border-neutral-800/80">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500 block mb-2">
              {aboutT.meta}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-950 dark:text-neutral-50">
              {aboutT.title}
            </h2>
          </div>
          <p className="font-mono text-xs tracking-wider uppercase text-neutral-500 dark:text-neutral-400 max-w-sm">
            {aboutT.tagline}
          </p>
        </div>

        {/* Editorial Asymmetric Spread (No Generic Floating Cards) */}
        <div className="mt-14 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Portrait & Identity Metadata */}
          <div className="lg:col-span-4 flex flex-col items-start">
            {/* Architectural Photo Frame */}
            <div className="relative w-full max-w-sm group">
              <div className="relative overflow-hidden aspect-[4/5] bg-neutral-200 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800">
                <img
                  src="/images/profile.jpg"
                  alt="Kevin Castañeda"
                  className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  loading="lazy"
                />
                
                {/* Tech Corner Coordinates */}
                <div className="absolute top-3 left-3 px-2 py-1 bg-neutral-950/80 text-neutral-300 backdrop-blur-sm font-mono text-[10px] tracking-widest uppercase">
                  ID: KC_1604
                </div>
                <div className="absolute bottom-3 right-3 px-2 py-1 bg-neutral-950/80 text-neutral-300 backdrop-blur-sm font-mono text-[10px] tracking-widest uppercase">
                  {aboutT.figure}
                </div>
              </div>

              {/* Offset Accent Hairline */}
              <div className="absolute -bottom-2 -right-2 w-full h-full border border-neutral-400/40 dark:border-neutral-700/50 pointer-events-none -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </div>

            {/* Profile Spec Rail */}
            <div className="w-full max-w-sm mt-8 pt-6 border-t border-neutral-200/80 dark:border-neutral-800/80 font-mono text-xs space-y-3">
              <div className="flex justify-between text-neutral-500 dark:text-neutral-400">
                <span className="uppercase tracking-wider">{aboutT.roleLabel}</span>
                <span className="text-neutral-900 dark:text-neutral-200 font-medium text-right">{aboutT.roleValue}</span>
              </div>
              <div className="flex justify-between text-neutral-500 dark:text-neutral-400">
                <span className="uppercase tracking-wider">{aboutT.eduLabel}</span>
                <span className="text-neutral-900 dark:text-neutral-200 font-medium text-right">{aboutT.eduValue}</span>
              </div>
              <div className="flex justify-between text-neutral-500 dark:text-neutral-400">
                <span className="uppercase tracking-wider">{aboutT.locLabel}</span>
                <span className="text-neutral-900 dark:text-neutral-200 font-medium text-right">{aboutT.locValue}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Structured Technical Highlights */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500 block mb-4">
                {aboutT.summaryHeader}
              </span>
              
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-neutral-950 dark:text-neutral-50 leading-[1.15]">
                {aboutT.headline}
              </h3>

              <div className="mt-8 space-y-5 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                <p>{aboutT.paragraph1}</p>
                <p>{aboutT.paragraph2}</p>
              </div>
            </div>

            {/* Structural Technical Highlights (Clean Index Rules, No Cards) */}
            <div className="mt-12 sm:mt-16 pt-8 border-t border-neutral-200/80 dark:border-neutral-800/80">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500 block mb-6">
                {aboutT.pillarsHeader}
              </span>

              <div className="divide-y divide-neutral-200/70 dark:divide-neutral-800/70">
                {aboutT.highlights?.map((h, i) => (
                  <div
                    key={h.title}
                    className="group py-6 first:pt-2 flex flex-col sm:flex-row sm:items-start justify-between gap-4 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-4 sm:w-1/3">
                      <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500">
                        {h.index}
                      </span>
                      <div className="p-2 bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 group-hover:border-neutral-400 dark:group-hover:border-neutral-600 transition-colors">
                        {icons[i] || <Code2 className="w-4 h-4" />}
                      </div>
                      <span className="font-mono text-sm font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:text-black dark:group-hover:text-white transition-colors">
                        {h.title}
                      </span>
                    </div>

                    <p className="sm:w-2/3 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed pl-8 sm:pl-0">
                      {h.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section Action Anchor */}
            <div className="mt-12 pt-8 border-t border-neutral-200/80 dark:border-neutral-800/80 flex items-center justify-between">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 px-6 py-3.5 text-xs sm:text-sm font-mono uppercase tracking-wider bg-neutral-950 text-neutral-50 hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-950 dark:hover:bg-neutral-200 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.98]"
              >
                <span>{aboutT.ctaProjects}</span>
                <ArrowUpRight size={15} className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
