const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Hi, I'm <span className="text-cyan-400">Alex Rivera</span>
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-8">
          Full Stack Developer | Problem Solver | Tech Enthusiast
        </p>
        
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
          I craft elegant solutions to complex problems. Specialized in building scalable web applications with modern technologies.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a href="#contact" className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors duration-200 font-semibold">
            Get In Touch
          </a>
          <a href="#projects" className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200 font-semibold border border-gray-700">
            View My Work
          </a>
        </div>

        <div className="flex gap-6 justify-center">
          <a href="https://github.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <Github size={28} />
          </a>
          <a href="https://linkedin.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <Linkedin size={28} />
          </a>
          <a href="mailto:contact@example.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <Mail size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;