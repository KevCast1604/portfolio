import React, { useState, useEffect, useMemo } from "react";
import { Github, ExternalLink, ArrowLeft, ArrowRight, X } from "lucide-react";
import Footer from "../layout/Footer";
import { useNavigate, useParams } from "react-router-dom";

const ProjectDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // ========= Back (smart) =========
  const handleBack = () => {
    if (window.history.length > 1) navigate(-1);
    else navigate("/");
  };

  // ========= Project data =========
  const projectData = useMemo(
    () => ({
      1: {
        title: "WeatherInsights",
        description:
          "Full-stack Application providing real-time weather data and forecasts from South American Cities.",
        longDescription: `WeatherInsights is a full-stack project that provides users with real-time weather data and 
      forecasts for cities across South America, like Lima, La Paz, Asunción, Montevideo, Brasilia and more.
      The application show the current weather conditions, comparative forecasts charts, and historical data visualizations.`,
        tech: ["React", "TailwindCSS", "Java", "SpringBoot", "MySQL", "OpenWeather API"],
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
          "/images/weatherinsights-3.png",
          "/images/weatherinsights-4.png",
          "/images/weatherinsights-5.png",
          "/images/weatherinsights-6.png",
          "/images/weatherinsights-7.png",
          "/images/weatherinsights-8.png",
          "/images/weatherinsights-9.png",
          "/images/weatherinsights-10.png",
          "/images/weatherinsights-1.png",
        ],
      },
      2: {
        title: "Growlythics",
        description:
          "A personal finance simulator that helps users track expenses, plan budgets, and forecast savings using interactive charts and scenarios.",
        longDescription: `Growlytics it's a web application that help you to planify your finances (incomes,
      bills, inversions and more). With Growlytics you can create budgets, track your expenses,
      and visualize your financial health through interactive charts and scenarios. The app is built with
      React for the frontend and Firebase for backend services, ensuring a seamless and responsive user experience.`,
        tech: ["Next.js", "TailwindCSS", "Typescript", "HTML5", "Firebase", "Authentication"],
        features: [
          "Panel to enter your monthly income, fixed and variable expenses",
          "Put finance goals and track your progress",
          "Simulate a projected savings over time",
          "Different scenarios (optimist, conservative, realistic)",
          "Interactive graphics with Recharts",
          "Complete and intuitive dashboard",
        ],
        github: "https://github.com/KevCast1604/Growlythics",
        images: [
          "/images/grow-1.png",
          "/images/grow-2.png",
          "/images/grow-3.png",
          "/images/grow-4.png",
          "/images/grow-5.png",
          "/images/grow-6.png",
          "/images/grow-7.png",
          "/images/grow-8.png",
          "/images/grow-9.png",
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
          "/images/freelancer-1.png",
          "/images/freelancer-2.png",
          "/images/freelancer-3.png",
          "/images/freelancer-4.png",
          "/images/freelancer-5.png",
          "/images/freelancer-6.png",
          "/images/freelancer-7.png",
          "/images/freelancer-8.png",
          "/images/freelancer-9.png",
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
        github: "https://github.com/KevCast1604/portfolio",
        images: [
          "/images/portfolio-project1.png",
          "/images/portfolio-project2.png",
          "/images/portfolio-project3.png",
          "/images/portfolio-project4.png",
        ],
      },
      5: {
        title: "FondoVivienda",
        description:
          "A university project to help estate companies in housing stallments.",
        longDescription: `FondoVivienda is a university project developed as a web application to simulate and manage mortgage payment plans under 
      Peru's "Nuevo Crédito MiVivienda" program. Designed for real estate companies, this tool enables sales agents to provide potential clients 
      with detailed and personalized credit simulations. The system implements the French amortization method and supports critical configurations 
      such as multi-currency transactions (PEN/USD), both effective and nominal interest rates with customizable capitalization, and the application 
      of total or partial grace periods. It also includes the option to apply for the "Techo Propio" housing bonus. Key features include mandatory 
      user authentication, management of client socio-economic data, and detailed real estate offerings.  
      The application performs essential financial calculations like Net Present Value (NPV) and Internal 
      Rate of Return (IRR) for the loans,  ensuring compliance with Peruvian financial transparency regulations.`,
        tech: ["Vue.js", "CSS3", "Firebase", "Authentication", "NoSQL"],
        features: [
          "User authentication (Login/Password)",
          "French amortization payment plan calculation",
          "Support for PEN and USD currencies",
          "Handles nominal and effective interest rates",
          "Configuration of total or partial grace periods",
          "Integration with 'Techo Propio' bonus",
          "Client and real estate offer management",
          "Calculation of NPV and IRR",
        ],
        github: "https://github.com/KevCast1604/FondoVivienda",
        live: "https://mivivienda-application.web.app/",
        images: [
          "/images/fondovivienda-1.png",
          "/images/fondovivienda-2.png",
          "/images/fondovivienda-3.png",
          "/images/fondovivienda-4.png",
          "/images/fondovivienda-5.png",
          "/images/fondovivienda-6.png",
          "/images/fondovivienda-7.png",
          "/images/fondovivienda-8.png",
          "/images/fondovivienda-9.png",
          "/images/fondovivienda-10.png",
          "/images/fondovivienda-11.png",
          "/images/fondovivienda-12.png",
          "/images/fondovivienda-13.png",
          "/images/fondovivienda-14.png",
          "/images/fondovivienda-15.png",
          "/images/fondovivienda-16.png",
          "/images/fondovivienda-17.png",
        ],
      },
      6: {
        title: "AutoMonitor",
        description:
          "An Telegram Bot that helps to see changes in a public API url of products.",
        longDescription: ` AutoMonitor is a telegram bot that can see changes in a publig API URL of products,
        It can send alerts in telegram with information of what products are removed or added, with their information
        (name of product, price). The FrontEnd show in a table, all the notifications, with information that was
        removed or added in a JSON raw. The backend was created using Python + FastAPI and SQLite for Local Storage, but in
        deployment, you can see PostgreSQL.`,
        tech: ["React", "TailwindCSS", "Typescript", "Python", "FastAPI", "SQLite", "Telegram", "Automation"],
        features: [
          "Automatic Notifications on Telegram",
          "UI with all the notifications sent in a table",
          "Detect changes every TEN seconds.",
          "API created using Swagger to see with more details the changes.",
          "Created with a modern tech stack and good practices in the structure of the files.",
          "Telegram Bot easy to use, writing only /start.",
        ],
        github: "https://github.com/KevCast1604/AutoMonitor",
        images: [
          "/images/automonitor-1.jpg",
          "/images/automonitor-2.jpg",
          "/images/automonitor-3.jpg",
          "/images/automonitor-4.jpg",
          "/images/automonitor-5.jpg",
          "/images/automonitor-6.jpeg",
        ],
      }
    }),
    []
  );

  // Support either router param or legacy prop style (if needed)
  const projectId = Number(id);
  const project = projectData[projectId] || projectData[1];

  // ========= Gallery modal state =========
  const [selectedIndex, setSelectedIndex] = useState(null);
  const openImage = (index) => setSelectedIndex(index);
  const closeImage = () => setSelectedIndex(null);

  const prevImage = () => {
    setSelectedIndex((i) =>
      i === null ? null : (i - 1 + project.images.length) % project.images.length
    );
  };

  const nextImage = () => {
    setSelectedIndex((i) =>
      i === null ? null : (i + 1) % project.images.length
    );
  };

  // Keyboard navigation + lock body scroll when modal open
  useEffect(() => {
    if (selectedIndex === null) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIndex, project.images.length]);

  // Scroll top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  const isValidUrl = (url) => url && url !== "#";

  return (
    <div className="min-h-screen bg-gray-900 px-4">
      <div className="py-20 max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="cursor-pointer flex items-center gap-2 text-gray-400 hover:text-cyan-400 duration-300 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to projects</span>
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
          <div className="flex flex-wrap gap-4">
            {isValidUrl(project.github) && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors border border-gray-700"
              >
                <Github size={20} />
                <span>GitHub Repository</span>
              </a>
            )}

            {isValidUrl(project.live) && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex cursor-pointer items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors"
              >
                <ExternalLink size={20} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Project Description */}
        <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Description</h2>
          <p className="text-gray-400 leading-relaxed">{project.longDescription}</p>
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
          <h2 className="text-2xl font-bold text-white mb-6">Gallery</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.images.map((image, idx) => (
              <button
                key={idx}
                onClick={() => openImage(idx)}
                className="
                  group relative aspect-video bg-gray-950/40 rounded-xl overflow-hidden
                  border border-gray-800 hover:border-cyan-400/40 transition-colors
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60
                "
                aria-label={`Open image ${idx + 1}`}
                type="button"
              >
                <img
                  src={image}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-2 left-2 text-xs text-gray-200 bg-black/40 px-2 py-1 rounded-md border border-white/10">
                  {idx + 1}/{project.images.length}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal with arrows + better close */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeImage}
          role="dialog"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeImage();
            }}
            className="
              absolute top-4 right-4 inline-flex items-center justify-center
              w-11 h-11 rounded-full border border-white/10 bg-white/5
              text-white hover:bg-white/10 transition-colors
              focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60
            "
            aria-label="Close"
            type="button"
          >
            <X size={22} />
          </button>

          {/* Left arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="
              absolute left-3 sm:left-6 top-1/2 -translate-y-1/2
              inline-flex items-center justify-center
              w-11 h-11 rounded-full border border-white/10 bg-white/5
              text-white hover:bg-white/10 transition-colors
              focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60
            "
            aria-label="Previous image"
            type="button"
          >
            <ArrowLeft size={22} />
          </button>

          {/* Right arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="
              absolute right-3 sm:right-6 top-1/2 -translate-y-1/2
              inline-flex items-center justify-center
              w-11 h-11 rounded-full border border-white/10 bg-white/5
              text-white hover:bg-white/10 transition-colors
              focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60
            "
            aria-label="Next image"
            type="button"
          >
            <ArrowRight size={22} />
          </button>

          {/* Image */}
          <div
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={project.images[selectedIndex]}
              alt="Preview"
              className="w-full max-h-[80vh] object-contain rounded-xl border border-white/10"
              draggable={false}
            />

            {/* Counter */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-sm text-gray-200 bg-black/40 px-3 py-1.5 rounded-full border border-white/10">
              {selectedIndex + 1} / {project.images.length}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProjectDetails;
