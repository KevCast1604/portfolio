import React from "react";
import { Briefcase, Calendar, MapPin, Sparkles, Terminal, Cpu, Database } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Founder - AI System Engineer",
    company: "Starv",
    type: "Freelance",
    start: "Oct. 2025",
    end: "Present",
    location: "Remote",
    icon: <Sparkles className="w-5 h-5" />,
    highlights: [
      "Developing AI-powered solutions for various clients.",
      "Researching and implementing cutting-edge AI technologies.",
      "Creating products with GenAI, RAG Systems and Agentic AI.",
    ],
    stack: ["Python", "FastAPI", "Next", "TailwindCSS", "Typescript", "Gemini", "RAG", "GenAI", "PostgreSQL"]
  },
  {
    role: "Software Developer Internship",
    company: "NHL Decoraciones Comercial",
    type: "Internship",
    start: "Nov. 2025",
    end: "March. 2026",
    location: "Remote",
    icon: <Terminal className="w-5 h-5" />,
    highlights: [
      "Refactoring legacy code to optimize performance and maintainability.",
      "Architecting robust API Endpoints using PHP and Laravel.",
      "Developing responsive UI components with Next.js and TailwindCSS.",
    ],
    stack: ["Next.js", "TailwindCSS", "PHP", "Laravel", "MySQL"]
  },
  {
    role: "Full Stack Developer Internship",
    company: "Antarcold",
    type: "Internship",
    start: "March. 2026",
    end: "Present",
    location: "Remote",
    icon: <Cpu className="w-5 h-5" />,
    highlights: [
      "Building inventory management modules using Python and Django.",
      "Designing real-time stock dashboards with Bootstrap and JQuery.",
      "Achieved 95% project completion through agile methodologies.",
    ],
    stack: ["Python", "Django", "PostgreSQL", "Bootstrap", "JQuery"]
  }
];

const TypeBadge = ({ type }) => {
  const styles = {
    "Full-time": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    "Part-time": "bg-blue-500/10 text-blue-400 border-blue-500/20",
    Freelance: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    Internship: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    Project: "bg-slate-500/10 text-slate-400 border-white/10",
  };

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] uppercase tracking-wider font-bold border backdrop-blur-md ${styles[type] || styles.Project}`}>
      <Sparkles className="w-3 h-3" />
      {type}
    </span>
  );
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 px-4 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-cyan-600/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-20 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3 mb-4">
             <div className="h-px w-8 bg-cyan-500/50" />
             <span className="text-cyan-400 uppercase tracking-[0.2em] text-xs font-bold">Career Path</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Professional <span className="text-gray-500">Experience</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Main Vertical Line */}
          <div className="absolute left-0 sm:left-8 top-2 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/20 to-transparent" />

          <div className="space-y-16">
            {EXPERIENCES.map((exp, idx) => (
              <div key={`${exp.company}-${idx}`} className="relative pl-8 sm:pl-20 group">
                
                {/* Timeline Node */}
                <div className="absolute left-[-12px] sm:left-[20px] top-0 transition-transform duration-500 group-hover:scale-110">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-xl bg-[#030712] border-2 border-gray-800 flex items-center justify-center z-20 relative group-hover:border-cyan-500 transition-colors">
                    <div className="text-gray-500 group-hover:text-cyan-400 transition-colors">
                       {exp.icon || <Briefcase size={16} />}
                    </div>
                  </div>
                  {/* Outer Glow */}
                  <div className="absolute inset-0 bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content Card */}
                <article className="relative">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-white text-xl sm:text-2xl font-bold group-hover:text-cyan-400 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-400 mt-1 font-medium">
                        <span className="text-gray-200">{exp.company}</span>
                        <span className="text-gray-700">•</span>
                        <span className="flex items-center gap-1.5 text-xs">
                          <MapPin size={12} className="text-cyan-500/70" /> {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-2">
                       <TypeBadge type={exp.type} />
                       <span className="flex items-center gap-2 text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/5">
                         <Calendar size={12} /> {exp.start} — {exp.end}
                       </span>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl glass border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
                    <ul className="space-y-4 text-gray-400 text-sm sm:text-base leading-relaxed">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex gap-3 items-start group/li">
                          <div className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-500/50 group-hover/li:bg-cyan-400 group-hover/li:scale-125 transition-all" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Stack Chips */}
                    <div className="mt-8 flex flex-wrap gap-2">
                      {exp.stack.map((s) => (
                        <span key={s} className="px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-gray-900 border border-gray-800 text-gray-500 hover:border-cyan-500/50 hover:text-cyan-300 transition-all cursor-default">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .glass {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </section>
  );
}
