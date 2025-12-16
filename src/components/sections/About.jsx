import React from "react";
import { Code2, Database, Rocket, ArrowRight } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-5 h-5" />,
      title: "Clean Frontend",
      desc: "Interfaces claras, responsive y pensadas para el usuario.",
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Solid Backend",
      desc: "APIs, autenticación, bases de datos y arquitectura escalable.",
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "Real Products",
      desc: "Proyectos completos, con lógica real y enfoque en negocio.",
    },
  ];

  return (
    <section id="about" className=" relative py-24 px-4 bg-gradient-to-bfrom-gray-900/80 via-gray-950 
    to-gray-950">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About Me
          </h2>
          <div className="h-1 w-20 bg-cyan-400 mx-auto mt-4" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I don’t just write code — I build solutions that make sense.
          </p>
        </div>

        {/* Main Card */}
        <div className="relative rounded-2xl border border-gray-800 bg-gray-900/40 backdrop-blur-md overflow-hidden">
          {/* Decorative glow */}
          <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 bg-cyan-500/10 blur-3xl rounded-full" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full" />

          <div className="relative p-6 md:p-10 grid md:grid-cols-[220px_1fr] gap-10 items-center">
            {/* Profile image */}
            <div className="flex justify-center md:justify-start">
              <div className="w-44 h-44 rounded-2xl bg-gray-800 border border-gray-700 overflow-hidden shadow-xl">
                <img
                  src="images/profile.jpg"
                  alt="Kevin Castañeda"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content */}
            <div className="text-center md:text-left">
              <span className="inline-block text-sm text-cyan-300 bg-cyan-500/10 border border-cyan-400/30 px-4 py-1.5 rounded-full mb-4">
                Full Stack Developer · Software Engineering Student
              </span>

              <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                Hi, I’m Kevin. I enjoy turning ideas into reliable web applications.
              </h3>

              <p className="text-gray-300 mt-4 leading-relaxed max-w-2xl">
                I’m a Full Stack Developer with a strong interest in backend
                architecture and scalable systems. I like working on projects
                where technology solves real problems and where details matter.
              </p>

              <p className="text-gray-400 mt-3 leading-relaxed max-w-2xl">
                I’ve built complete applications covering authentication,
                databases, APIs and modern UIs. I’m always learning, improving
                my stack and pushing my projects closer to production-level
                quality.
              </p>

              {/* Highlights */}
              <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {highlights.map((h) => (
                  <div
                    key={h.title}
                    className="rounded-xl border border-gray-800 bg-gray-950/40 p-5 hover:border-cyan-400/50 transition-colors"
                  >
                    <div className="flex items-center gap-3 text-cyan-300">
                      <span className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-400/20">
                        {h.icon}
                      </span>
                      <p className="text-white font-semibold">{h.title}</p>
                    </div>
                    <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                      {h.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-10 flex justify-center md:justify-start">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition-colors"
                >
                  View My Projects
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
