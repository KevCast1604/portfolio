import React, { useMemo } from "react";
import { Github, ExternalLink, FolderGit2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Projects = () => {

  const navigate = useNavigate();
  const projects = useMemo(
    () => [
      {
        id: 1,
        title: "WeatherInsights",
        description:
          "Full-stack application providing real-time weather data and forecasts from South American cities.",
        tech: ["React", "TailwindCSS", "Java", "Spring Boot", "MySQL", "OpenWeather API"],
        github: "https://github.com/KevCast1604/WeatherInsight",
        image: "/images/weather.jpg",
      },
      {
        id: 2,
        title: "Growlythics",
        description:
          "A personal finance simulator that helps users track expenses, plan budgets, and forecast savings using interactive charts and scenarios.",
        tech: ["Next.js", "TypeScript", "Firebase", "TailwindCSS", "Authentication"],
        image: "/images/grow-6.png",
        github: "https://github.com/KevCast1604/Growlythics",
      },
      {
        id: 3,
        title: "Freelancer Landing Page",
        description:
          "Responsive landing page for a freelance developer to showcase services and portfolio.",
        tech: ["React", "TailwindCSS", "Vite", "Vercel"],
        github: "https://github.com/KevCast1604/Freelancer-Landing",
        live: "https://marketing-freelancer-landing.vercel.app/",
        image: "/images/freelancer.jpg",
      },
      {
        id: 4,
        title: "Starv AI (In Progress)",
        description: "A End to End SaaS created for small business using GenAI that helps you to generate different types of content to improve sales.",
        tech: ["Next.js", "TypeScript", "TailwindCSS", "Gemini API", "Supabase", "Prompt Engineering", "Stripe"],
        github: "#",
        live: "#",
        image: "",
      },
      {
        id: 5,
        title: "FondoVivienda",
        description: "University project to help real-estate companies manage housing installments.",
        tech: ["Vue.js", "CSS", "Firebase", "Authentication", "NoSQL", "Advanced Finances"],
        github: "https://github.com/KevCast1604/FondoVivienda",
        live: "https://mivivienda-application.web.app/",
        image: "/images/fondovivienda-9.png",
      },
      {
        id: 6,
        title: "AutoMonitor",
        description: "An Telegram Bot that helps to see changes in a public API url of products.",
        tech: ["TailwindCSS", "React", "Typescript", "Python", "FastAPI", "SQLite", "Telegram", "Automation"],
        github: "https://github.com/KevCast1604/AutoMonitor",
        image: "/images/automonitor-0.jpg",
      },
    ],
    []
  );

  return (
    <section id="projects" className="relative py-24 px-4 bg-gradient-to-bfrom-gray-900/80 via-gray-950 
    to-gray-950 overflow-hidden">
      {/* Transition / decoration */}
      
      <div className="relative max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-cyan-400 mx-auto mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A selection of projects where I combined UI, backend logic, and real-world features.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="
                group rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/40 backdrop-blur-md
                hover:border-cyan-400/50 transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10
              "
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                {project.image ? (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />
                  </>
                ) : (
                  <div className="h-full w-full flex items-center justify-center">
                    <FolderGit2 size={64} className="text-cyan-400" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>

                  {/* Quick links (icon buttons) */}
                  <div className="flex gap-2 shrink-0">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center justify-center w-9 h-9 rounded-full
                        border border-gray-800 bg-gray-950/30 text-gray-300
                        hover:text-cyan-300 hover:border-cyan-400/40 transition-colors
                      "
                      aria-label="GitHub Repository"
                    >
                      <Github size={18} />
                    </a>

                    {project.live && project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex items-center justify-center w-9 h-9 rounded-full
                          border border-gray-800 bg-gray-950/30 text-gray-300
                          hover:text-cyan-300 hover:border-cyan-400/40 transition-colors
                        "
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-400 mt-3 mb-5 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-3 py-1 rounded-full text-xs font-medium
                        bg-gray-950/40 border border-gray-800 text-gray-200
                        hover:border-cyan-400/40 hover:text-cyan-200 transition-colors
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={() => navigate(`/projects/${project.id}`)}
                  className="
                    cursor-pointer w-full flex items-center justify-center gap-2
                    px-4 py-2.5 rounded-xl font-semibold text-sm
                    bg-cyan-500 hover:bg-cyan-600 text-white
                    transition-colors
                  "
                >
                  Show More
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom hint */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors font-semibold"
          >
            Want to build something together? Let’s talk →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
