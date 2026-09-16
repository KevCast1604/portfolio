import React from "react";
import { ArrowUpRight, MapPin, Calendar, Terminal, Sparkles, Cpu, Layers } from "lucide-react";

const EXPERIENCES = [
  {
    index: "01",
    role: "Founder & AI Systems Engineer",
    company: "Starv",
    type: "Founder",
    period: "OCT. 2025 — PRESENT",
    location: "Remote",
    icon: Sparkles,
    highlights: [
      "Developing and architecting end-to-end AI-powered autonomous systems for client deployments.",
      "Researching, benchmarking, and integrating cutting-edge foundation models and evaluation harnesses.",
      "Designing production applications driven by Generative AI, RAG architectures, and multi-agent workflows.",
    ],
    stack: ["Python", "FastAPI", "Next.js", "Tailwind CSS", "TypeScript", "Gemini", "RAG", "Agentic AI", "PostgreSQL"],
  },
  {
    index: "02",
    role: "Software Developer Intern",
    company: "NHL Decoraciones Comercial",
    type: "Internship",
    period: "NOV. 2025 — MAR. 2026",
    location: "Remote",
    icon: Terminal,
    highlights: [
      "Refactoring legacy monolith codebases to optimize throughput, maintainability, and clean architecture.",
      "Architecting reliable, validated REST API endpoints utilizing PHP and Laravel.",
      "Developing high-performance, accessible client-side UI components with Next.js and Tailwind CSS.",
    ],
    stack: ["Next.js", "Tailwind CSS", "PHP", "Laravel", "MySQL"],
  },
  {
    index: "03",
    role: "Full Stack Developer Intern",
    company: "Antarcold",
    type: "Internship",
    period: "MAR. 2026 — PRESENT",
    location: "Remote",
    icon: Cpu,
    highlights: [
      "Engineering real-time inventory management and supply chain modules using Python and Django.",
      "Designing responsive stock monitoring dashboards with dynamic event updates.",
      "Delivered 95% project milestone velocity by adhering to strict agile sprint cycles.",
    ],
    stack: ["Python", "Django", "PostgreSQL", "Bootstrap", "jQuery"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
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
              [03 // TRACK RECORD & CHRONOLOGY]
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-950 dark:text-neutral-50">
              Experience.
            </h2>
          </div>
          <p className="font-mono text-xs tracking-wider uppercase text-neutral-500 dark:text-neutral-400 max-w-sm">
            Proven trajectory in software delivery, architecture, and agentic engineering.
          </p>
        </div>

        {/* Ledger Rows (Asymmetric Editorial, No Generic Cards) */}
        <div className="divide-y divide-neutral-200/80 dark:divide-neutral-800/80">
          {EXPERIENCES.map((exp) => {
            const IconComponent = exp.icon;
            return (
              <article
                key={`${exp.company}-${exp.index}`}
                className="group py-12 sm:py-16 transition-colors duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                  
                  {/* Left Meta Column: Chronology, Type, Organization */}
                  <div className="lg:col-span-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-neutral-400 dark:text-neutral-500 uppercase mb-3">
                        <span>[{exp.index}]</span>
                        <span>//</span>
                        <span className="text-neutral-700 dark:text-neutral-300 font-semibold">{exp.period}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-xl sm:text-2xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
                          {exp.company}
                        </span>
                      </div>

                      <div className="mt-3 flex flex-wrap items-center gap-2 font-mono text-xs text-neutral-500 dark:text-neutral-400">
                        <span className="inline-flex items-center gap-1">
                          <MapPin size={12} className="text-neutral-400" />
                          {exp.location}
                        </span>
                        <span>·</span>
                        <span className="px-2 py-0.5 border border-neutral-300 dark:border-neutral-700 text-[10px] uppercase tracking-wider text-neutral-600 dark:text-neutral-300">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Role Title, Highlights & Tech Ledger */}
                  <div className="lg:col-span-8">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-neutral-950 dark:text-neutral-50 group-hover:text-black dark:group-hover:text-white transition-colors">
                        {exp.role}
                      </h3>
                      <ArrowUpRight
                        size={18}
                        className="text-neutral-400 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>

                    {/* Bullet Highlights */}
                    <div className="mt-6 space-y-3">
                      {exp.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                          <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500 mt-1 select-none">
                            —
                          </span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Stack Tokens as a Monospace Minimalist Ledger */}
                    <div className="mt-8 pt-6 border-t border-neutral-200/50 dark:border-neutral-800/50">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 dark:text-neutral-500 block mb-3">
                        TECH STACK / ARTIFACTS
                      </span>
                      <div className="flex flex-wrap gap-x-3 gap-y-2">
                        {exp.stack.map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-xs px-2.5 py-1 text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 transition-colors duration-200 hover:border-neutral-400 dark:hover:border-neutral-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>
              </article>
            );
          })}
        </div>

        {/* Section Footer Coordinates */}
        <div className="pt-12 border-t border-neutral-200/80 dark:border-neutral-800/80 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-600">
          <span>ARCHIVE RECORD: 2025—PRESENT</span>
        </div>

      </div>
    </section>
  );
}
