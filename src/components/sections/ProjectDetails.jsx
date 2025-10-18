import React, { useState } from "react";
import { Github, ExternalLink, ArrowLeft, X } from "lucide-react";
import Footer from "../layout/Footer";

const ProjectDetails = ({ projectId, onBack }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Datos del proyecto (en producción vendrían de props o API)
  const projectData = {
    1: {
      title: "WeatherInsights",
      description:
        "Full-stack Application providing real-time weather data and forecasts from South American Cities.",
      longDescription: `WeatherInsights is a full-stack project that provides users with real-time weather data and 
      forecasts for cities across South America, like Lima, La Paz, Asunción, Montevideo, Brasilia and more.
      The application show the current weather conditions, comparative forecasts charts, and historical data visualizations.`,
      tech: [
        "React",
        "TailwindCSS",
        "Java",
        "SpringBoot",
        "MySQL",
        "OpenWeather API",
      ],
      features: [
        "Weather data from OpenWeather API",
        "Weather is updated every 10 minutes",
        "Detailed weather forecasts (humidity, temperature, etc.)",
        "Comparative forecast charts",
        "Integration of backend using CORS",
        "Historial weather data visualizations",
        "Recharts library for data visualization",
        "Created with modern tech stack",
      ],
      github: "https://github.com/KevCast1604/WeatherInsight",
      images: [
        "images/weatherinsights-3.png",
        "images/weatherinsights-4.png",
        "images/weatherinsights-5.png",
        "images/weatherinsights-6.png",
        "images/weatherinsights-7.png",
        "images/weatherinsights-8.png",
        "images/weatherinsights-9.png",
        "images/weatherinsights-10.png",
        "images/weatherinsights-1.png",
      ],
    },
    2: {
      title: "Growlytics (In Progress)",
      description:
        "A personal finance simulator that helps users track expenses, plan budgets, and forecast savings using interactive charts and scenarios.",
      longDescription: `Growlytics it's a web application that help you to planify your finances (incomes,
      bills, inversions and more). With Growlytics you can create budgets, track your expenses,
      and visualize your financial health through interactive charts and scenarios. The app is built with
      React for the frontend and Firebase for backend services, ensuring a seamless and responsive user experience.`,
      tech: [
        "Next.js",
        "TailwindCSS",
        "Typescript",
        "HTML5",
        "Firebase",
        "Authentication",
      ],
      features: [
        "Panel to enter your monthly income, fixed and variable expenses",
        "Put finance goals and track your progress",
        "Simulate a projected savings over time",
        "Different scenarios (optimist, conservative, realistic)",
        "Interactive graphics with Recharts",
        "Complete and intuitive dashboard",
        "Download your data as CSV/PDF files",
      ],
      github: "https://github.com/tuusuario/ecommerce",
      images: [
        "https://via.placeholder.com/800x600/1f2937/06b6d4?text=Homepage",
        "https://via.placeholder.com/800x600/1f2937/06b6d4?text=Product+Page",
        "https://via.placeholder.com/800x600/1f2937/06b6d4?text=Cart",
        "https://via.placeholder.com/800x600/1f2937/06b6d4?text=Checkout",
        "https://via.placeholder.com/800x600/1f2937/06b6d4?text=Admin+Panel",
      ],
    },
    3: {
      title: "Freelancer Project (Marketing Landing Page)",
      description: `I sumulated a responsive landing page for a freelance senior business consultat using modern web technologies 
      to showcase services and portfolio. The page is completly responsive and adaptative to different screen sizes. It's built with React and styled with TailwindCSS 
      to ensure a sleek and professional look. It was deployed in Vercel`,
      longDescription: `This project is a responsive landing page designed for a freelance senior business consultant.
      The landing page features several sections including About, Hero, Testimonials, Contact, and Services.
      It includes a navigation bar with smooth scrolling and is fully responsive to ensure optimal viewing on all devices.
      The design is modern and clean, with animations on each section to enhance user engagement.
      The contact section includes a functional form with validation and error messages to facilitate communication.
      Additionally, the page is optimized for SEO to improve visibility in search engine results.`,
      tech: ["React", "TailwindCSS", "HTML5", "Vercel"],
      features: [
        "About, Hero, Testimonials, Contact and Services sections",
        "Navigation bar with smooth scrolling",
        "Navbar completly responsive",
        "Modern and clean design",
        "Animations on each section",
        "Contact section with form (functional)",
        "Form validation with error messages",
        "Optimización SEO",
      ],
      github: "https://github.com/KevCast1604/Freelancer-Landing",
      live: "https://marketing-freelancer-landing.vercel.app/",
      images: [
        "images/freelancer-1.png",
        "images/freelancer-2.png",
        "images/freelancer-3.png",
        "images/freelancer-4.png",
        "images/freelancer-5.png",
        "images/freelancer-6.png",
        "images/freelancer-7.png",
        "images/freelancer-8.png",
        "images/freelancer-9.png",
      ],
    },
    4: {
      title: "Portfolio",
      description:
        "It's my portfolio created with TailwindCSS and React to show my projects and skills.",
      longDescription: `It's my personal portfolio to show my projects and skills that I have been developing over time.
      The portfolio is built with React and styled with TailwindCSS to ensure a modern and responsive design. It includes sections for my bio, 
      skills, projects, and contact information.`,
      tech: ["React", "TailwindCSS", "Vite"],
      features: [
        "Modern and responsive design",
        "Trending technologies like React and TailwindCSS",
        "Easy navigation through sections",
        "Contact form for inquiries",
        "Project showcase with detailed descriptions",
        "Smooth animations and transitions",
        "Downloadable CV/Resume (PDF)",
      ],
      github: "https://github.com/tuusuario/ecommerce",
      images: [
        "https://via.placeholder.com/800x600/1f2937/06b6d4?text=Homepage",
        "https://via.placeholder.com/800x600/1f2937/06b6d4?text=Product+Page",
        "https://via.placeholder.com/800x600/1f2937/06b6d4?text=Cart",
        "https://via.placeholder.com/800x600/1f2937/06b6d4?text=Checkout",
        "https://via.placeholder.com/800x600/1f2937/06b6d4?text=Admin+Panel",
      ],
    },
  };

  const project = projectData[projectId] || projectData[1];

  return (
    <div className="min-h-screen bg-gray-900 px-4">
      <div className="py-20 max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onBack}
          className=" cursor-pointer flex items-center gap-2 text-gray-400 hover:text-cyan-400 duration-300 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Come back</span>
        </button>

        {/* Project Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-blue-500 mb-6"></div>
          <p className="text-xl text-gray-400 mb-6">{project.description}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-3 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-800 text-cyan-400 rounded-lg border border-gray-700 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors border border-gray-700"
            >
              <Github size={20} />
              <span>See Github Repository</span>
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex cursor-pointer items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors"
              >
                <ExternalLink size={20} />
                <span>See Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Project Description */}
        <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Description</h2>
          <p className="text-gray-400 leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        {/* Features */}
        <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Main Features</h2>
          <ul className="grid md:grid-cols-2 gap-3">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-400">
                <span className="text-cyan-400 mt-1">▹</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Gallery */}
        <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6">Galery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.images.map((image, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(image)}
                className=" relative aspect-video bg-gray-900 rounded-lg overflow-hidden cursor-pointer hover:opacity-75 transition-opacity border border-gray-700"
              >
                <img
                  src={image}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className=" absolute top-4 right-4 text-white hover:text-cyan-400 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X
              size={32}
              className="text-cyan-600 bg-gray-600 border rounded-3xl cursor-pointer"
            />
          </button>
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      <Footer/>
    </div>
    
  );

};

export default ProjectDetails;
