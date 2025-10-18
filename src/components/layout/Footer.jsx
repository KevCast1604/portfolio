import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const [copied, setCopied] = React.useState(false);

  const copyEmail = () => {
    const email = "kevin.castaneda.llanos@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand/Name Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">
              Kevin Alexander Castañeda Llanos
            </h3>
            <p className="text-gray-400 text-sm">Software Engineer</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com/KevCast1604"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/kevin-alexander-casta%C3%B1eda-llanos-712368307/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <button
              onClick={copyEmail}
              className="cursor-pointer text-gray-400 hover:text-white transition-colors duration-300 relative group"
              aria-label="Copy Email"
            >
              <Mail className="w-6 h-6" />
              {copied && (
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-cyan-500 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                  Copy to Clipboard!
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Kevin Alexander Castañeda Llanos. Built with Next.js &
            Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
