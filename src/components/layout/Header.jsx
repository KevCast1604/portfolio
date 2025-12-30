import React, { useEffect, useMemo, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const navRef = useRef(null);
  const mobilePanelRef = useRef(null);

  const navItems = useMemo(() => ["About", "Experience", "Skills", "Projects", "Contact"], []);
  const sections = useMemo(() => ["about", "experience",  "skills", "projects", "contact"], []);

  // 1) Scroll state (throttled with rAF)
  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 2) Active section via IntersectionObserver (más estable que getBoundingClientRect en cada scroll)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Tomamos la sección con mayor "intersectionRatio"
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      {
        // Ajusta el "punto" de activación para compensar el header fijo
        root: null,
        rootMargin: "-80px 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  // 3) Cerrar menú con Escape + click fuera + bloquear scroll del body
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
      // click fuera del panel y fuera del botón
      const panel = mobilePanelRef.current;
      const nav = navRef.current;

      if (!panel || !nav) return;
      const target = e.target;

      const clickedInsidePanel = panel.contains(target);
      const clickedInsideNav = nav.contains(target);

      if (!clickedInsidePanel && clickedInsideNav) {
        // Click dentro del header pero fuera del panel: no cierres (evita cerrar al tocar el botón)
        return;
      }

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

  const handleNavClick = (e, item) => {
    e.preventDefault();

    const id = item.toLowerCase();
    const element = document.getElementById(id);

    if (element) {
      const headerOffset = 80; // altura del header fijo
      const y = element.getBoundingClientRect().top + window.scrollY - headerOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }

    setIsOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed left-0 top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-xl shadow-cyan-500/10 border-b border-gray-800/60"
          : "bg-gray-900/80 backdrop-blur-sm"
      }`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              // si no existe #hero, vuelve arriba sin romper UX
              const el = document.getElementById("hero");
              if (!el) return;
              e.preventDefault();
              el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-transform duration-300 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 rounded-md"
            aria-label="Go to top"
          >
            {"<Hello World!/>"}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => {
              const id = item.toLowerCase();
              const isActive = activeSection === id;

              return (
                <a
                  key={item}
                  href={`#${id}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md
                    ${
                      isActive
                        ? "text-cyan-300"
                        : "text-gray-300 hover:text-cyan-300"
                    }
                    hover:bg-gray-800/40
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60
                  `}
                  style={{
                    animation: `fadeInDown 0.45s ease-out ${index * 0.08}s backwards`,
                  }}
                >
                  {item}
                  <span
                    className={`absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-transform duration-300 origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden text-gray-300 hover:text-cyan-300 transition-transform duration-200 hover:rotate-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 rounded-md p-2"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay + panel */}
      <div
        className={`md:hidden transition-all duration-200 ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        {/* overlay */}
        <div
          className={`fixed inset-0 bg-black/40 backdrop-blur-[1px] transition-opacity duration-200 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* panel */}
        <div
          id="mobile-menu"
          ref={mobilePanelRef}
          role="dialog"
          aria-modal="true"
          className={`absolute left-0 right-0 bg-gray-900/98 backdrop-blur-md border-t border-gray-800
            transition-all duration-200 origin-top
            ${isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-95"}
          `}
        >
          <div className="py-2">
            {navItems.map((item, index) => {
              const id = item.toLowerCase();
              const isActive = activeSection === id;

              return (
                <a
                  key={item}
                  href={`#${id}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`block px-4 py-3 text-gray-300 transition-all duration-200 border-l-4
                    ${
                      isActive
                        ? "border-cyan-400 bg-gray-800/40 text-cyan-300"
                        : "border-transparent hover:border-cyan-400/50 hover:bg-gray-800/30 hover:text-cyan-300"
                    }
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60
                  `}
                  style={{
                    animation: isOpen
                      ? `slideInLeft 0.25s ease-out ${index * 0.05}s backwards`
                      : "none",
                  }}
                >
                  {item}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-12px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Header;
