import React, { useEffect, useMemo, useRef, useState } from "react";
import { Menu, X, ArrowUpRight, CornerDownRight, Github, Linkedin, Globe } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { language, toggleLanguage, t } = useLanguage();
  const navT = t("nav");
  const heroT = t("hero");

  const navItems = useMemo(
    () => [
      { id: "about", label: navT.about || "About", index: "01" },
      { id: "experience", label: navT.experience || "Experience", index: "02" },
      { id: "skills", label: navT.skills || "Skills", index: "03" },
      { id: "projects", label: navT.projects || "Projects", index: "04" },
      { id: "contact", label: navT.contact || "Contact", index: "05" },
    ],
    [navT]
  );

  const navRef = useRef(null);
  const mobilePanelRef = useRef(null);

  const sectionIds = useMemo(() => ["hero", ...navItems.map((item) => item.id)], [navItems]);

  // 1) Throttled scroll state detection
  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 30);
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 2) IntersectionObserver for active section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-90px 0px -55% 0px",
        threshold: [0.15, 0.35, 0.65],
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  // 3) Accessibility: Escape to close + outside click handling
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    const onPointerDown = (e) => {
      const panel = mobilePanelRef.current;
      const nav = navRef.current;
      if (!panel || !nav) return;

      const target = e.target;
      if (!panel.contains(target) && !nav.contains(target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isOpen]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);

    if (element) {
      const headerOffset = 80;
      const y = element.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    setIsOpen(false);
  };

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? "bg-[#fafaf9]/90 dark:bg-[#08080a]/90 backdrop-blur-md border-b border-neutral-200/80 dark:border-neutral-800/80 py-3.5"
          : "bg-transparent py-5 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <div className="flex items-center justify-between">
          {/* Identity Monogram */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "hero")}
            className="group flex items-center gap-3 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400"
            aria-label="Kevin Castañeda — Return to apex"
          >
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-mono text-xs sm:text-[13px] font-semibold tracking-wider text-neutral-950 dark:text-neutral-50 uppercase group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                Kevin Castañeda
              </span>
            </div>
          </a>

          {/* Desktop Navigation (Editorial Ledger Index) */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`group relative px-3 py-2 text-xs font-mono uppercase tracking-wider transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 ${
                    isActive
                      ? "text-neutral-950 dark:text-neutral-50 font-medium"
                      : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
                  }`}
                >
                  <span className="text-[10px] text-neutral-400 dark:text-neutral-500 mr-1.5 transition-colors duration-300 group-hover:text-neutral-700 dark:group-hover:text-neutral-300">
                    {item.index}
                  </span>
                  <span>{item.label}</span>

                  {/* Architectural Hairline Indicator */}
                  <span
                    className={`absolute bottom-0 left-3 right-3 h-px bg-neutral-950 dark:bg-neutral-100 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isActive
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0 group-hover:opacity-30 group-hover:scale-x-75"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Actions & Language Switcher */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 font-mono text-xs uppercase tracking-wider border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:border-neutral-900 dark:hover:border-neutral-100 transition-colors cursor-pointer"
              aria-label="Toggle language"
            >
              <Globe size={12} className="opacity-60" />
              <span className={language === "en" ? "font-bold text-black dark:text-white" : "opacity-40"}>EN</span>
              <span className="opacity-25">/</span>
              <span className={language === "es" ? "font-bold text-black dark:text-white" : "opacity-40"}>ES</span>
            </button>

            {/* Primary Action Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="group inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-950 hover:text-neutral-50 dark:hover:bg-neutral-100 dark:hover:text-neutral-950 hover:border-neutral-950 dark:hover:border-neutral-100 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.98] focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400"
            >
              <span>{heroT.ctaContact || "Contact"}</span>
              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* Mobile Menu Toggle & Mobile Language */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleLanguage}
              className="p-2 text-neutral-700 dark:text-neutral-300 font-mono text-xs uppercase"
              aria-label="Toggle language"
            >
              <span className={language === "en" ? "font-bold" : "opacity-40"}>EN</span>/
              <span className={language === "es" ? "font-bold" : "opacity-40"}>ES</span>
            </button>

            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="p-2 -mr-2 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-neutral-50 transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400"
              aria-label="Toggle navigation drawer"
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`md:hidden fixed inset-0 top-18 sm:top-20 z-40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 top-18 sm:top-20 bg-neutral-950/40 dark:bg-black/60 backdrop-blur-xs"
          onClick={() => setIsOpen(false)}
        />

        {/* Panel (Architectural Ledger Spread) */}
        <div
          id="mobile-nav"
          ref={mobilePanelRef}
          role="dialog"
          aria-modal="true"
          className={`relative bg-[#fafaf9] dark:bg-[#08080a] border-b border-neutral-200/80 dark:border-neutral-800/80 shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-12 py-7">
            <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 dark:text-neutral-500 pb-3 border-b border-neutral-200/60 dark:border-neutral-800/60">
              {navT.indexTitle || "Navigation Index"}
            </div>

            <div className="divide-y divide-neutral-200/60 dark:divide-neutral-800/60">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`flex items-center justify-between py-4 text-xs font-mono uppercase tracking-wider transition-colors duration-200 ${
                      isActive
                        ? "text-neutral-950 dark:text-neutral-50 font-medium"
                        : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-neutral-400 dark:text-neutral-500">{item.index}</span>
                      <span>{item.label}</span>
                    </div>
                    <CornerDownRight
                      size={14}
                      className={`transition-all duration-300 ${
                        isActive
                          ? "opacity-100 text-neutral-950 dark:text-neutral-50 translate-x-0"
                          : "opacity-0 -translate-x-1"
                      }`}
                    />
                  </a>
                );
              })}
            </div>

            {/* Mobile Footer Meta */}
            <div className="mt-8 pt-6 border-t border-neutral-200/60 dark:border-neutral-800/60 flex items-center justify-between text-neutral-500 dark:text-neutral-400">
              <span className="font-mono text-[11px] uppercase tracking-wider">
                {navT.channelTitle || "TRANSMISSION CHANNEL"}
              </span>

              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/KevCast1604"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  <Github size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/kevin-alexander-casta%C3%B1eda-llanos-712368307/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
