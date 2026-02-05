import React, { memo } from "react";
import { Layout, Server, Database, Wrench, Sparkles } from "lucide-react";

const Skills = memo(() => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="w-6 h-6" />,
      skills: ["Vue", "React", "Next.js", "TailwindCSS", "JavaScript", "TypeScript"],
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      skills: ["Java", "Spring Boot", "Python", "FastAPI", "Django", "REST APIs", "JWT/Auth"],
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6" />,
      skills: ["SQL", "Firebase", "Supabase"],
    },
    {
      title: "Tooling",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Git/GitHub", "Docker", "Postman", "Vercel", "Google AI Studio"],
    },
  ];

  const focus = ["Python", "Django", "Prompt Engineering", "AI Agents"];

  return (
    <section id="skills" className="relative py-24 px-4 overflow-hidden bg-gradient-to-bfrom-gray-900/80 via-gray-950 
    to-gray-950">      {/* Transition / decoration */}

      <div className="relative max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Technical Skills
          </h2>
          <div className="h-1 w-20 bg-cyan-400 mx-auto mt-4 mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            My toolkit for building modern web applications — from UI to APIs and data.
          </p>
        </div>

        {/* Focus row */}
        <div className="mb-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <div className="inline-flex items-center gap-2 text-cyan-300 bg-cyan-500/10 border border-cyan-400/30 px-4 py-2 rounded-full">
            <Sparkles className="w-4 h-4" />
            Currently focusing on
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {focus.map((item) => (
              <span
                key={item}
                className="text-sm text-gray-200 border border-gray-800 bg-gray-950/40 px-3 py-1.5 rounded-full hover:border-cyan-400/50 transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="
                group rounded-2xl border border-gray-800 bg-gray-900/40 backdrop-blur-md
                p-6 hover:border-cyan-400/50 transition-colors
              "
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-cyan-300 p-2 rounded-xl bg-cyan-500/10 border border-cyan-400/20 group-hover:bg-cyan-500/15 transition-colors">
                  {category.icon}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {category.skills.length} items
                  </p>
                </div>
              </div>

              {/* Chips */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-3 py-1.5 rounded-full text-sm font-medium
                      bg-gray-950/40 border border-gray-800 text-gray-200
                      hover:border-cyan-400/50 hover:text-cyan-200 transition-colors
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom hint / CTA */}
        <div className="mt-12 text-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors font-semibold"
          >
            See these skills in action in my projects →
          </a>
        </div>
      </div>
    </section>
  );
});

export default Skills;
