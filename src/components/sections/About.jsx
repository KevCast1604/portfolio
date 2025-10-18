import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Foto de perfil */}
        <div className="flex-shrink-0 mb-8 md:mb-0">
          <div className="w-40 h-40 rounded-full bg-gray-800 border-4 border-cyan-400 overflow-hidden mx-auto shadow-lg">
            <img
              src="../../public/images/profile.jpg"
              alt="Kevin Castañeda"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* Texto descriptivo */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="h-1 w-20 bg-cyan-400 mb-8 md:mx-0 mx-auto"></div>
          <p className="text-xl text-gray-400 mb-6">
            Passionate Full Stack Developer & Software Engineer
          </p>
          <p className="text-lg text-gray-400 mb-2 max-w-2xl">
            Hi! I'm Kevin Castañeda, a developer who loves building scalable and
            elegant web applications. My journey in tech started with curiosity
            and grew into a passion for solving real-world problems using modern
            technologies.
          </p>
          <p className="text-lg text-gray-400 max-w-2xl">
            I enjoy working across the stack, from crafting beautiful interfaces
            to architecting robust backend systems. Always eager to learn and
            collaborate on exciting projects!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
