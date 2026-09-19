import React, { memo } from "react";
import {
  Code2,
  Server,
  Database,
  Cpu,
  ArrowUpRight,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const DOMAIN_ICONS = {
  "01": <Code2 size={16} />,
  "02": <Server size={16} />,
  "03": <Database size={16} />,
  "04": <Cpu size={16} />,
};

const Skills = memo(() => {
  const { t } = useLanguage();
  const skillsT = t("skills");

  const specializations = skillsT.specializations || [];
  const domains = skillsT.domains || [];

  return (
    <section
      id="skills"
      className="relative bg-[#fafaf9] dark:bg-[#08080a] text-neutral-900 dark:text-neutral-100 transition-colors duration-500 py-28 sm:py-36 lg:py-44 border-t border-neutral-200/70 dark:border-neutral-800/60 overflow-hidden"
    >
      {/* Structural Architectural Guide Lines */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-0 left-6 sm:left-12 lg:left-24 bottom-0 w-px bg-neutral-200/50 dark:bg-neutral-800/40" />
        <div className="absolute top-0 right-6 sm:right-12 lg:right-24 bottom-0 w-px bg-neutral-200/50 dark:bg-neutral-800/40 hidden sm:block" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        {/* Section Header Meta */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-12 sm:pb-16 border-b border-neutral-200/80 dark:border-neutral-800/80">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500 block mb-2">
              {skillsT.meta}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-950 dark:text-neutral-50">
              {skillsT.title}
            </h2>
          </div>
          <p className="font-mono text-xs tracking-wider uppercase text-neutral-500 dark:text-neutral-400 max-w-sm">
            {skillsT.tagline}
          </p>
        </div>

        {/* Active Vector / AI Specialization Strip (No Generic Cyan Cards) */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-neutral-100/70 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-neutral-800/80">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-900 dark:text-neutral-100 font-semibold block">
                  {skillsT.activeResearch}
                </span>
                <span className="font-mono text-[11px] text-neutral-500 dark:text-neutral-400">
                  {skillsT.activeResearchDesc}
                </span>
              </div>
            </div>

            {/* Specialization Tags Matrix */}
            <div className="flex flex-wrap items-center gap-2.5">
              {specializations.map((spec) => (
                <div
                  key={spec.label}
                  className="group inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#fafaf9] dark:bg-[#08080a] border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-100 transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                >
                  <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors">
                    [{spec.tag}]
                  </span>
                  <span className="font-mono text-xs text-neutral-800 dark:text-neutral-200 group-hover:text-black dark:group-hover:text-white transition-colors">
                    {spec.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Asymmetric Technical Matrix (Ledger System, No Repetitive Rounded Cards) */}
        <div className="mt-14 sm:mt-20 divide-y divide-neutral-200/80 dark:divide-neutral-800/80 border-y border-neutral-200/80 dark:border-neutral-800/80">
          {domains.map((domain) => (
            <div
              key={domain.domain}
              className="group py-10 sm:py-12 transition-colors duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
                {/* Domain Header & Narrative */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500">
                      {domain.index} /
                    </span>
                    <div className="p-1.5 bg-neutral-200/60 dark:bg-neutral-800/60 text-neutral-800 dark:text-neutral-200">
                      {DOMAIN_ICONS[domain.index] || <Code2 size={16} />}
                    </div>
                    <h3 className="font-mono text-base font-semibold tracking-tight text-neutral-950 dark:text-neutral-50 group-hover:text-black dark:group-hover:text-white transition-colors">
                      {domain.domain}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-normal pl-8 lg:pl-0">
                    {domain.description}
                  </p>
                </div>

                {/* Technology Ledger & Interactive Tokens */}
                <div className="lg:col-span-8">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {domain.technologies?.map((tech) => (
                      <div
                        key={tech.name}
                        className="group/tech relative flex flex-col justify-between p-3.5 bg-neutral-100/60 dark:bg-neutral-900/30 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-900/60 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono text-[10px] tracking-wider uppercase text-neutral-400 dark:text-neutral-500">
                            {tech.level}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700 group-hover/tech:bg-neutral-950 dark:group-hover/tech:bg-neutral-100 transition-colors" />
                        </div>
                        <span className="font-mono text-xs sm:text-sm font-medium text-neutral-900 dark:text-neutral-100 group-hover/tech:text-black dark:group-hover/tech:text-white transition-colors">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Action Anchor (Matches Hero & About) */}
        <div className="mt-14 sm:mt-18 pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="font-mono text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
            {skillsT.evidenceAction}
          </div>

          <a
            href="#projects"
            className="group inline-flex items-center gap-3 px-6 py-3.5 text-xs sm:text-sm font-mono uppercase tracking-wider bg-neutral-950 text-neutral-50 hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-950 dark:hover:bg-neutral-200 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.98]"
          >
            <span>{skillsT.ctaProjects}</span>
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
});

Skills.displayName = "Skills";

export default Skills;
