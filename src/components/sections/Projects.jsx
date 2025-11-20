import React from "react";
import { Github, ExternalLink, FolderGit2, ArrowRight } from "lucide-react";

const Projects = ({ onViewProject }) => {
  const projects = [
    {
      id: 1,
      title: "WeatherInsights",
      description:
        "Full-stack Application providing real-time weather data and forecasts from South American Cities.",
      tech: [
        "React",
        "TailwindCSS",
        "Java",
        "SpringBoot",
        "MySQL",
        "OpenWeather API",
      ],
      github: "https://github.com/KevCast1604/WeatherInsight",
      image: "/images/weather.jpg",
    },
    {
      id: 2,
      title: "Growlytics",
      description:
        "A personal finance simulator that helps users track expenses, plan budgets, and forecast savings using interactive charts and scenarios.",
      tech: [
        "HTML5",
        "TypeScript",
        "Next.js",
        "Firebase",
        "TailwindCSS",
        "Authentication",
      ],
      image: "/images/grow-6.png",
      github: "https://github.com/KevCast1604/Growlythics",
    },
    {
      id: 3,
      title: "Freelancer Landing Page",
      description:
        "I developed a responsive landing page for a freelance developer using modern web technologies to showcase services and portfolio.",
      tech: ["TailwindCSS", "React", "Vite", "Vercel"],
      github: "https://github.com/KevCast1604/Freelancer-Landing",
      live: "https://marketing-freelancer-landing.vercel.app/",
      image: "/images/freelancer.jpg",
    },
    {
      id: 4,
      title: "Portfolio",
      description:
        "It's my portfolio created with TailwindCSS and React to show my projects and skills.",
      tech: ["React", "TailwindCSS", "Vite", "Vercel"],
      github: "#",
      live: "#",
      image: "/images/portfolio-project.png",
    },
    // {
    //   id: 5,
    //   title: 'Weather Dashboard',
    //   description: 'Real-time weather application with forecast and location-based data.',
    //   tech: ['Vue', 'OpenWeather API', 'Chart.js'],
    //   github: '#',
    //   live: '#'
    // },
    // {
    //   id: 6,
    //   title: 'Blog CMS',
    //   description: 'Content management system for blogs with markdown support and SEO optimization.',
    //   tech: ['React', 'Java', 'PostgreSQL'],
    //   github: '#',
    //   live: '#'
    // }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Featured Projects
        </h2>
        <div className="h-1 w-20 bg-cyan-400 mx-auto mb-12"></div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-cyan-400 transition-all duration-300"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <FolderGit2 size={64} className="text-cyan-400" />
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 text-cyan-400 rounded-full text-xs border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 items-center">
                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>

                  {/* View More Button */}
                  <button
                    onClick={() => onViewProject(project.id)}
                    className="cursor-pointer ml-auto flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-semibold rounded-md transition-colors duration-200"
                  >
                    Show More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
