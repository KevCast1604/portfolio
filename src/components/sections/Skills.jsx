import React from "react";
import { Layout, Server, Database } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout size={28} />,
      skills: ["Vue", "React", "TailwindCSS", "HTML", "CSS", "JS/TS"],
    },
    {
      title: "Backend",
      icon: <Server size={28} />,
      skills: ["Python", "Java", "SpringBoot", "FastAPI"],
    },
    {
      title: "Database",
      icon: <Database size={28} />,
      skills: ["MySQL", "PostgreSQL", "SQL Server", "Firebase"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Technical Skills
        </h2>
        <div className="h-1 w-20 bg-cyan-400 mx-auto mb-12"></div>

        {/* Skills Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-cyan-400">{category.icon}</span>
                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-900 text-cyan-400 rounded-md border border-gray-700 hover:border-cyan-400 hover:bg-gray-700 transition-all duration-200 font-medium text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
