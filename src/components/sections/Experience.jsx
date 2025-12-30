import React from "react";
import { Briefcase, Calendar, MapPin, Sparkles } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Software Developer Internship",
    company: "NHL Decoraciones Comercial",
    type: "Internship",
    start: "Nov. 2025",
    end: "Present",
    location: "Remote",
    highlights: [
      "Refactoring useless code to improve performance in the app.",
      "Design Endpoints with PHP and Laravel in the Backend",
      "Create views and components using a modern stack (Next.js + TailwindCSS).",
    ],
    stack: ["Next.js", "TailwindCSS", "PHP", "Laravel", "MySQL"]
  }
];

const TypeBadge = ({ type }) => {
  const styles = {
    "Full-time": "bg-blue-500/15 text-blue-200 border-blue-400/20",
    "Part-time": "bg-cyan-500/15 text-cyan-200 border-cyan-400/20",
    Freelance: "bg-cyan-500/15 text-cyan-200 border-cyan-400/20",
    Internship: "bg-blue-500/15 text-blue-200 border-blue-400/20",
    Project: "bg-slate-500/15 text-slate-200 border-slate-400/20",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs border backdrop-blur ${
        styles[type]
      }`}
    >
      <Sparkles className="w-3.5 h-3.5" />
      {type}
    </span>
  );
};

const Chip = ({ label }) => (
  <span className="px-3 py-1 rounded-full text-xs border border-gray-700 bg-gray-900/40 text-gray-200">
    {label}
  </span>
);

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-0 overflow-hidden
     bg-gradient-to-bfrom-gray-900/80 via-gray-950 
    to-gray-950">
      
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Experience
          </h2>
          <div className="h-1 w-40 bg-gradient-to-r from-cyan-400 to-blue-700 mx-auto mt-4" />
          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Real builds, real outcomes.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] rounded-full
            bg-gradient-to-b from-cyan-400/50 via-blue-500/40 to-transparent" />
          <div className="space-y-10">
            {EXPERIENCES.map((exp, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <div key={`${exp.company}-${idx}`} className="relative">
                  {/* Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-6">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-700 shadow-[0_0_24px_rgba(34,211,238,0.35)]" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className={isLeft ? "hidden sm:block" : ""} />

                    <article
                      className={`rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900/60 to-gray-950/40 backdrop-blur-xl shadow-lg p-6 sm:p-7 hover:border-cyan-500/40 transition-colors ${
                        isLeft ? "sm:col-start-2" : "sm:col-start-1"
                      } sm:mx-2`}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <h3 className="text-white text-xl font-semibold">
                            {exp.role}
                          </h3>
                          <p className="text-gray-300 mt-1">{exp.company}</p>
                        </div>

                        <TypeBadge type={exp.type} />
                      </div>

                      <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-400">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-cyan-300" />
                          {exp.start} — {exp.end}
                        </span>
                        {exp.location && (
                          <span className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-blue-300" />
                            {exp.location}
                          </span>
                        )}
                      </div>

                      <ul className="mt-5 space-y-2 text-gray-300">
                        {exp.highlights.map((h) => (
                          <li key={h} className="flex gap-3 items-start">
                            <span className="mt-[0.6rem] h-1.5 w-1.5 rounded-full bg-cyan-400 flex-none shrink-0" />
                            <span className="leading-relaxed">{h}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {exp.stack.map((s) => (
                          <Chip key={s} label={s} />
                        ))}
                      </div>

                      <div className="mt-6 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <Briefcase className="w-4 h-4" />
                          Impact-focused work
                        </div>
                      </div>
                    </article>

                    <div className={!isLeft ? "hidden sm:block" : ""} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
