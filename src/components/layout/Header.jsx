import React, { useEffect, useMemo, useRef, useState } from "react";
import { Menu, X, ArrowUpRight, CornerDownRight, Github, Linkedin } from "lucide-react";

const NAV_ITEMS = [
  { id: "about", label: "About", index: "01" },
  { id: "experience", label: "Experience", index: "02" },
  { id: "skills", label: "Skills", index: "03" },
  { id: "projects", label: "Projects", index: "04" },
  { id: "contact", label: "Contact", index: "05" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navRef = useRef(null);
  const mobilePanelRef = useRef(null);

  const sectionIds = useMemo(() => ["hero", ...NAV_ITEMS.map((item) => item.id)], []);

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

  // 2) Active section tracking via IntersectionObserver
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
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  // 3) Accessibility: Escape key, outside clicks & body scroll lock for mobile menu
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

      const clickedInsidePanel = panel.contains(target);
      const clickedInsideNav = nav.contains(target);

      if (!clickedInsidePanel && !clickedInsideNav) {
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

    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsOpen(false);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 76;
      const y = element.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }

    setIsOpen(false);
  };

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? "bg-[#fafaf9]/92 dark:bg-[#08080a]/92 backdrop-blur-md border-b border-neutral-200/80 dark:border-neutral-800/80 shadow-[0_1px_0_0_rgba(0,0,0,0.02)]"
          : "bg-[#fafaf9]/65 dark:bg-[#08080a]/65 backdrop-blur-xs border-b border-neutral-200/40 dark:border-neutral-800/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Brand Identity / Architectural Monogram */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "hero")}
            className="group flex items-center gap-3 select-none py-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400"
            aria-label="Kevin Castañeda — Return to top"
          >
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-mono text-xs sm:text-[13px] font-semibold tracking-wider text-neutral-950 dark:text-neutral-50 uppercase group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                Kevin Castañeda
              </span>
            </div>
            <span className="hidden md:inline-block font-mono text-[10px] tracking-widest uppercase text-neutral-400 dark:text-neutral-500 border-l border-neutral-200 dark:border-neutral-800 pl-3">
              LATAM / REMOTE
            </span>
          </a>

          {/* Desktop Navigation (Editorial Ledger Index) */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2"
            aria-label="Main Navigation"
          >
            {NAV_ITEMS.map((item) => {
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

          {/* Primary Action Button (Matches Hero CTA) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="group inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-950 hover:text-neutral-50 dark:hover:bg-neutral-100 dark:hover:text-neutral-950 hover:border-neutral-950 dark:hover:border-neutral-100 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.98] focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400"
            >
              <span>Initiate Contact</span>
              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden">
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
              Navigation Index
            </div>

            <div className="divide-y divide-neutral-200/60 dark:divide-neutral-800/60">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className="group flex items-center justify-between py-3.5 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500">
                        {item.index}
                      </span>
                      <span
                        className={`font-mono text-sm tracking-tight transition-colors duration-200 ${
                          isActive
                            ? "text-neutral-950 dark:text-neutral-50 font-semibold"
                            : "text-neutral-600 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white"
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>

                    <CornerDownRight
                      size={14}
                      className={`transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isActive
                          ? "text-neutral-950 dark:text-neutral-50 translate-x-0.5"
                          : "text-neutral-300 dark:text-neutral-600 group-hover:text-neutral-800 dark:group-hover:text-neutral-200 group-hover:translate-x-1"
                      }`}
                    />
                  </a>
                );
              })}
            </div>

            {/* Mobile Footer Meta & CTAs */}
            <div className="mt-6 pt-5 border-t border-neutral-200/80 dark:border-neutral-800/80 flex flex-col gap-4">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3 text-xs font-mono uppercase tracking-wider bg-neutral-950 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-950 transition-transform active:scale-[0.98]"
              >
                <span>Initiate Contact</span>
                <ArrowUpRight size={14} />
              </a>

              <div className="flex items-center justify-between text-neutral-400 dark:text-neutral-500 font-mono text-[11px] pt-1">
                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com/KevCast1604"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black dark:hover:text-white transition-colors p-1"
                    aria-label="GitHub profile"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kevin-alexander-casta%C3%B1eda-llanos-712368307/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black dark:hover:text-white transition-colors p-1"
                    aria-label="LinkedIn profile"
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
                <span className="tracking-widest">ID: KC_1604</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
