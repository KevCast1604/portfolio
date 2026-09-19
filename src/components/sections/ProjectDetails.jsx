import React, { useState, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import { Github, ExternalLink, ArrowLeft, ArrowRight, X, CornerDownRight } from "lucide-react";
import Footer from "../layout/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

const STATIC_PROJECTS = {
  1: {
    tech: ["React", "Tailwind CSS", "Java", "Spring Boot", "MySQL", "OpenWeather API", "Recharts"],
    github: "https://github.com/KevCast1604/WeatherInsight",
    live: null,
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
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Authentication", "Recharts"],
    github: "https://github.com/KevCast1604/Growlythics",
    live: null,
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
    tech: ["React", "Vite", "Tailwind CSS", "HTML5", "Vercel"],
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
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini API", "Supabase", "Prompt Engineering", "Creem"],
    github: null,
    live: "https://forge.starvco.com",
    images: [
      "/images/forge-1.jpg",
      "/images/forge-2.jpg",
      "/images/forge-3.jpg",
      "/images/forge-4.jpg",
      "/images/forge-5.jpg",
      "/images/forge-6.jpg",
      "/images/forge-7.jpg",
      "/images/forge-8.jpg",
      "/images/forge-9.jpg",
    ],
  },
  5: {
    tech: ["Vue.js", "CSS3", "Firebase", "Authentication", "NoSQL", "Financial Algorithms"],
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
    tech: ["Python", "FastAPI", "React", "TypeScript", "Tailwind CSS", "SQLite", "Telegram API"],
    github: "https://github.com/KevCast1604/AutoMonitor",
    live: null,
    images: [
      "/images/automonitor-1.jpg",
      "/images/automonitor-2.jpg",
      "/images/automonitor-3.jpg",
      "/images/automonitor-4.jpg",
      "/images/automonitor-5.jpg",
      "/images/automonitor-6.jpeg",
    ],
  },
};

const ProjectDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { t } = useLanguage();
  const detailsT = useMemo(() => t("projectDetails") || {}, [t]);

  // ========= Smart Back Navigation =========
  const handleBack = () => {
    if (window.history.length > 1) navigate(-1);
    else navigate("/");
  };

  const projectId = Number(id) || 1;
  const staticProject = STATIC_PROJECTS[projectId] || STATIC_PROJECTS[1];

  const project = useMemo(() => {
    const localizedData = detailsT.items?.[projectId] || detailsT.items?.[1] || {};
    return {
      ...staticProject,
      title: localizedData.title || "Project",
      category: localizedData.category || "ENGINEERING & SYSTEMS",
      description: localizedData.description || "",
      longDescription: localizedData.longDescription || "",
      features: localizedData.features || [],
    };
  }, [staticProject, detailsT, projectId]);

  // ========= Gallery modal state =========
  const [selectedIndex, setSelectedIndex] = useState(null);
  const openImage = (index) => setSelectedIndex(index);

  const totalImages = project.images?.length || 0;

  const closeImage = React.useCallback(() => setSelectedIndex(null), []);

  const prevImage = React.useCallback(() => {
    setSelectedIndex((i) =>
      i === null ? null : (i - 1 + totalImages) % totalImages
    );
  }, [totalImages]);

  const nextImage = React.useCallback(() => {
    setSelectedIndex((i) =>
      i === null ? null : (i + 1) % totalImages
    );
  }, [totalImages]);

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
  }, [selectedIndex, closeImage, prevImage, nextImage]);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  const isValidUrl = (url) => url && url !== "#";

  return (
    <div className="min-h-screen bg-[#fafaf9] dark:bg-[#08080a] text-neutral-900 dark:text-neutral-100 transition-colors duration-500">
      {/* Structural Hairline Grid Decor */}
      <div className="fixed inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-0 left-6 sm:left-12 lg:left-24 bottom-0 w-px bg-neutral-200/50 dark:bg-neutral-800/40" />
        <div className="absolute top-0 right-6 sm:right-12 lg:right-24 bottom-0 w-px bg-neutral-200/50 dark:bg-neutral-800/40 hidden sm:block" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 pt-28 pb-20 sm:pt-36 sm:pb-28">
        {/* Back to Archive & Status Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 sm:pb-12 border-b border-neutral-200/80 dark:border-neutral-800/80">
          <button
            onClick={handleBack}
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft size={14} className="transition-transform duration-300 group-hover:-translate-x-1" />
            <span>{detailsT.backToArchive || "Back to Project Archive"}</span>
          </button>

          <div className="font-mono text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-widest flex items-center gap-2">
            <span>
              {detailsT.caseStudyRef || "CASE_STUDY // REF:"} 00{projectId || 1}
            </span>
            <span>·</span>
            <span className="text-neutral-700 dark:text-neutral-300">{project.category}</span>
          </div>
        </div>

        {/* Project Title & Executive Synopsis */}
        <div className="py-12 sm:py-16 border-b border-neutral-200/80 dark:border-neutral-800/80">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-neutral-950 dark:text-neutral-50 leading-[1.05] mb-6">
            {project.title}
          </h1>

          <p className="text-base sm:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl font-normal mb-10">
            {project.description}
          </p>

          {/* Action Triggers & System Ledger */}
          <div className="flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-neutral-200/60 dark:border-neutral-800/60">
            {/* Direct Links */}
            <div className="flex flex-wrap items-center gap-4">
              {isValidUrl(project.live) && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-mono uppercase tracking-wider bg-neutral-950 text-neutral-50 hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-950 dark:hover:bg-neutral-200 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.98]"
                >
                  <span>{detailsT.launchLive || "Launch Live System"}</span>
                  <ExternalLink size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}

              {isValidUrl(project.github) && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-5 py-3.5 text-xs font-mono uppercase tracking-wider border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                >
                  <Github size={15} />
                  <span>{detailsT.inspectSource || "Inspect Source"}</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Technical Architecture & Specs Split */}
        <div className="py-14 sm:py-20 border-b border-neutral-200/80 dark:border-neutral-800/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left Column: Long Narrative & System Architecture */}
            <div className="lg:col-span-6">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500 block mb-3">
                {detailsT.overviewMeta || "[01 // SYSTEM ARCHITECTURE & MOTIVATION]"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-neutral-950 dark:text-neutral-50 mb-6">
                {detailsT.overviewTitle || "Operational Overview."}
              </h2>
              <div className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-4 font-normal">
                {project.longDescription.split("\n\n").map((para, i) => (
                  <p key={i}>{para.trim()}</p>
                ))}
              </div>

              {/* Technologies Applied */}
              <div className="mt-10 pt-8 border-t border-neutral-200/60 dark:border-neutral-800/60">
                <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 dark:text-neutral-500 block mb-3">
                  {detailsT.dependenciesHeader || "CORE INFRASTRUCTURE & DEPENDENCIES"}
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs px-2.5 py-1 text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Checklist & System Features */}
            <div className="lg:col-span-6">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500 block mb-3">
                {detailsT.specsMeta || "[02 // TECHNICAL CAPABILITIES & AUDIT]"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-neutral-950 dark:text-neutral-50 mb-6">
                {detailsT.specsTitle || "Core Specifications."}
              </h2>

              <div className="divide-y divide-neutral-200/70 dark:divide-neutral-800/70 border-t border-b border-neutral-200/70 dark:border-neutral-800/70">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="group py-3.5 flex items-start justify-between gap-4 transition-colors"
                  >
                    <div className="flex items-start gap-3.5">
                      <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500 mt-0.5 select-none">
                        {(idx + 1).toString().padStart(2, "0")}
                      </span>
                      <span className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                        {feature}
                      </span>
                    </div>
                    <CornerDownRight size={13} className="text-neutral-400 group-hover:text-neutral-800 dark:group-hover:text-neutral-200 transition-colors shrink-0 mt-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Visual Documentation / Gallery Viewport */}
        <div className="py-14 sm:py-20">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-10 pb-6 border-b border-neutral-200/80 dark:border-neutral-800/80">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500 block mb-2">
                {detailsT.galleryMeta || "[03 // VISUAL TELEMETRY & CAPTURES]"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-neutral-950 dark:text-neutral-50">
                {detailsT.galleryTitle || "System Interface Gallery."}
              </h2>
            </div>
            <p className="font-mono text-xs uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
              {detailsT.galleryIndexedPrefix || "INDEXED:"} {project.images.length}{" "}
              {detailsT.galleryIndexedSuffix || "ARTIFACTS — CLICK TO EXPAND"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.images.map((image, idx) => (
              <div
                key={idx}
                onClick={() => openImage(idx)}
                className="group relative cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-[16/10] bg-neutral-200 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800">
                  <img
                    src={image}
                    alt={`${project.title} telemetry capture ${idx + 1}`}
                    className="w-full h-full object-cover grayscale-0 [@media(hover:hover)]:grayscale contrast-105 [@media(hover:hover)]:group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-neutral-950/80 text-neutral-300 font-mono text-[9px] tracking-widest uppercase">
                    {detailsT.fig || "FIG."} {(idx + 1).toString().padStart(2, "0")}
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 bg-neutral-950/80 text-neutral-300 font-mono text-[9px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    {detailsT.expand || "EXPAND"}
                  </div>
                </div>

                {/* Offset accent hairline */}
                <div className="absolute -bottom-1.5 -right-1.5 w-full h-full border border-neutral-400/30 dark:border-neutral-700/40 pointer-events-none -z-10 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Fullscreen Minimalist Lightbox Modal */}
      {selectedIndex !== null &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] bg-neutral-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={closeImage}
            role="dialog"
            aria-modal="true"
          >
            {/* Top Toolbar */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-[10000] font-mono text-xs text-neutral-400">
              <div>
                <span>{project.title.toUpperCase()}</span> //{" "}
                <span>
                  {detailsT.fig || "FIG."} {(selectedIndex + 1).toString().padStart(2, "0")}{" "}
                  {detailsT.of || "OF"} {project.images.length.toString().padStart(2, "0")}
                </span>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeImage();
                }}
                className="p-2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            {/* Left Prev Trigger */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 text-neutral-400 hover:text-white hover:bg-neutral-800/50 transition-colors z-[10000] cursor-pointer"
              aria-label="Previous image"
            >
              <ArrowLeft size={28} />
            </button>

            {/* Right Next Trigger */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 text-neutral-400 hover:text-white hover:bg-neutral-800/50 transition-colors z-[10000] cursor-pointer"
              aria-label="Next image"
            >
              <ArrowRight size={28} />
            </button>

            {/* Image Preview Container */}
            <div
              className="relative max-w-6xl w-full flex items-center justify-center p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={project.images[selectedIndex]}
                alt={`Telemetry preview ${selectedIndex + 1}`}
                className="max-w-full max-h-[82vh] object-contain border border-neutral-800 shadow-2xl"
                draggable={false}
              />
            </div>
          </div>,
          document.body
        )}

      <Footer />
    </div>
  );
};

export default ProjectDetails;
