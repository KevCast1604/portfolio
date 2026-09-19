import React, { useMemo } from "react";
import { Github, ArrowUpRight, ExternalLink, ArrowRight, FolderGit2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

const RAW_PROJECTS = [
  {
    id: 4,
    index: "01",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini API", "Supabase", "Creem"],
    github: null,
    live: "https://forge.starvco.com",
    image: "/images/forge.jpg",
    isFlagship: true,
  },
  {
    id: 6,
    index: "02",
    tech: ["Python", "FastAPI", "React", "TypeScript", "SQLite", "Telegram API"],
    github: "https://github.com/KevCast1604/AutoMonitor",
    live: null,
    image: "/images/automonitor-0.jpg",
  },
  {
    id: 2,
    index: "03",
    tech: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS", "Data Vis"],
    github: "https://github.com/KevCast1604/Growlythics",
    live: null,
    image: "/images/grow-6.png",
  },
  {
    id: 1,
    index: "04",
    tech: ["React", "Spring Boot", "Java", "MySQL", "OpenWeather API"],
    github: "https://github.com/KevCast1604/WeatherInsight",
    live: null,
    image: "/images/weather.jpg",
  },
  {
    id: 5,
    index: "05",
    tech: ["Vue.js", "Firebase", "NoSQL", "Financial Algorithms"],
    github: "https://github.com/KevCast1604/FondoVivienda",
    live: "https://mivivienda-application.web.app/",
    image: "/images/fondovivienda-9.png",
  },
  {
    id: 3,
    index: "06",
    tech: ["React", "Vite", "Tailwind CSS", "Vercel"],
    github: "https://github.com/KevCast1604/Freelancer-Landing",
    live: "https://marketing-freelancer-landing.vercel.app/",
    image: "/images/freelancer.jpg",
  },
];

const Projects = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const projT = t("projects");

  const projects = useMemo(() => {
    return RAW_PROJECTS.map((item) => {
      const translated = projT.items?.[item.id] || {};
      return {
        ...item,
        title: translated.title || "Project",
        category: translated.category || "ENGINEERING",
        description: translated.description || "",
      };
    });
  }, [projT]);

  const flagship = projects[0];
  const secondaryProjects = projects.slice(1);

  return (
    <section
      id="projects"
      className="relative bg-[#fafaf9] dark:bg-[#08080a] text-neutral-900 dark:text-neutral-100 transition-colors duration-500 py-28 sm:py-36 lg:py-44 border-t border-neutral-200/70 dark:border-neutral-800/60 overflow-hidden"
    >
      {/* Structural Hairline Grid Decor */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-0 left-6 sm:left-12 lg:left-24 bottom-0 w-px bg-neutral-200/50 dark:bg-neutral-800/40" />
        <div className="absolute top-0 right-6 sm:right-12 lg:right-24 bottom-0 w-px bg-neutral-200/50 dark:bg-neutral-800/40 hidden sm:block" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        
        {/* Section Header Meta */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-12 sm:pb-16 border-b border-neutral-200/80 dark:border-neutral-800/80">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500 block mb-2">
              {projT.meta}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-950 dark:text-neutral-50">
              {projT.title}
            </h2>
          </div>
          <p className="font-mono text-xs tracking-wider uppercase text-neutral-500 dark:text-neutral-400 max-w-sm">
            {projT.tagline}
          </p>
        </div>

        {/* FLAGSHIP SPOTLIGHT (Asymmetric Editorial Presentation, No Generic Card) */}
        <div className="py-14 sm:py-20 border-b border-neutral-200/80 dark:border-neutral-800/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Media Viewport */}
            <div
              onClick={() => navigate(`/projects/${flagship.id}`)}
              className="lg:col-span-7 group cursor-pointer relative"
            >
              <div className="relative overflow-hidden aspect-[16/10] bg-neutral-200 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800">
                <img
                  src={flagship.image}
                  alt={flagship.title}
                  className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-neutral-950/80 text-neutral-200 backdrop-blur-sm font-mono text-[10px] tracking-widest uppercase">
                  {projT.flagshipBadge} // {flagship.title}
                </div>
                <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-neutral-950/80 text-neutral-200 backdrop-blur-sm font-mono text-[10px] tracking-widest uppercase flex items-center gap-1.5">
                  <span>{projT.inspectArtifact}</span>
                  <ArrowUpRight size={12} />
                </div>
              </div>

              {/* Offset Accent Border */}
              <div className="absolute -bottom-2 -right-2 w-full h-full border border-neutral-400/40 dark:border-neutral-700/50 pointer-events-none -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </div>

            {/* Content Column */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 block mb-3">
                  [{flagship.index}] — {flagship.category}
                </span>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-neutral-950 dark:text-neutral-50 mb-4">
                  {flagship.title}
                </h3>

                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal mb-8">
                  {flagship.description}
                </p>

                {/* Tech Monospace Ledger */}
                <div className="space-y-2 mb-10">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 dark:text-neutral-500 block">
                    {projT.componentsHeader}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {flagship.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs px-2.5 py-1 text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions Dock */}
              <div className="flex items-center gap-4 pt-6 border-t border-neutral-200/80 dark:border-neutral-800/80">
                <button
                  onClick={() => navigate(`/projects/${flagship.id}`)}
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-mono uppercase tracking-wider bg-neutral-950 text-neutral-50 hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-950 dark:hover:bg-neutral-200 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.98] cursor-pointer"
                >
                  <span>{projT.inspectCaseStudy}</span>
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                {flagship.live && (
                  <a
                    href={flagship.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live Demo"
                    className="p-3 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white border border-neutral-300 dark:border-neutral-700 transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* ASYMMETRIC CATALOG (The Other 5 Projects, No Generic Cards) */}
        <div className="pt-12 sm:pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {secondaryProjects.map((proj) => (
              <article
                key={proj.id}
                className="group flex flex-col justify-between border-b border-neutral-200/80 dark:border-neutral-800/80 pb-10 transition-colors duration-300"
              >
                <div>
                  {/* Viewport Frame */}
                  <div
                    onClick={() => navigate(`/projects/${proj.id}`)}
                    className="relative overflow-hidden aspect-[16/10] bg-neutral-200 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 cursor-pointer mb-6"
                  >
                    {proj.image ? (
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-neutral-400">
                        <FolderGit2 size={40} />
                      </div>
                    )}
                    
                    <div className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-neutral-950/80 text-neutral-300 font-mono text-[9px] tracking-widest uppercase">
                      REF // {proj.index}
                    </div>
                  </div>

                  {/* Metadata */}
                  <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 dark:text-neutral-500 block mb-2">
                    {proj.category}
                  </span>

                  <div className="flex items-center justify-between gap-3 mb-3">
                    <h4
                      onClick={() => navigate(`/projects/${proj.id}`)}
                      className="text-lg sm:text-xl font-medium tracking-tight text-neutral-950 dark:text-neutral-50 group-hover:text-black dark:group-hover:text-white cursor-pointer transition-colors"
                    >
                      {proj.title}
                    </h4>

                    {/* Source & Live Links */}
                    <div className="flex items-center gap-2">
                      {proj.github && (
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${proj.title} GitHub`}
                          className="p-1 text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                        >
                          <Github size={15} />
                        </a>
                      )}
                      {proj.live && (
                        <a
                          href={proj.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${proj.title} Live`}
                          className="p-1 text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                        >
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-3 mb-6 font-normal">
                    {proj.description}
                  </p>
                </div>

                <div>
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] px-2 py-0.5 text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Show more trigger */}
                  <button
                    onClick={() => navigate(`/projects/${proj.id}`)}
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-neutral-900 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-colors cursor-pointer group/btn"
                  >
                    <span>{projT.readDetails}</span>
                    <ArrowRight size={13} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Section Footer Call to Action */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-neutral-200/80 dark:border-neutral-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-wider text-neutral-900 dark:text-neutral-100 hover:underline transition-all"
          >
            <span>{projT.ctaTalk}</span>
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
