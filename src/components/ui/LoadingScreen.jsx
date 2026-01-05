import React, { useEffect, useState, useRef } from "react";

export default function LoadingScreen({
  show = true,
  text = "Loading...",
  duration = 1200, 
  onDone,     
}) {
  const [visible, setVisible] = useState(show);
  const [closing, setClosing] = useState(false);
  const [progress, setProgress] = useState(0);
  const onDoneRef = useRef(onDone);

  useEffect(() => {
    onDoneRef.current = onDone;
  }, [onDone]);

  // Cuando show cambia a true, reinicia todo
  useEffect(() => {
    if (show) {
      setVisible(true);
      setClosing(false);
      setProgress(0);
    } else {
      // Si show pasa a false (por lógica externa), forzamos el cierre
      setClosing(true);
      const t = setTimeout(() => {
        setVisible(false);
      }, 350);
      return () => clearTimeout(t);
    }
  }, [show]);

  // Simula progreso "llenándose" (suave y con pequeño easing)
  useEffect(() => {
    if (!show) return;

    const start = performance.now();
    let raf = 0;
    let timer = 0;

    const tick = (now) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);

      // easing suave (easeOutCubic)
      const eased = 1 - Math.pow(1 - t, 3);

      // porcentaje 0..100
      setProgress(Math.floor(eased * 100));

      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        // al terminar, inicia cierre suave
        setClosing(true);

        // espera a que termine el fade-out y luego notifica/desmonta
        timer = setTimeout(() => {
          setVisible(false);
          if (typeof onDoneRef.current === "function") onDoneRef.current();
        }, 350); // igual al duration del fade
      }
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, [show, duration]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden transition-opacity duration-350 ${
        closing ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-950 to-gray-950" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/3 w-[34rem] h-[34rem] bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 right-1/3 w-[34rem] h-[34rem] bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md px-6 text-center">
        <p className="text-white text-2xl font-semibold tracking-wide">
          {text}
        </p>
        {/* Progress bar */}
        <div className="mt-8">
          <div className="h-2 w-full rounded-full bg-gray-800/60 border border-gray-700 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-700 transition-[width] duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-3 text-xs text-gray-400">
            {progress}%
          </div>
        </div>
      </div>
    </div>
  );
}
