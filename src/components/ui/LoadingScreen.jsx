import React, { useEffect, useState, useRef } from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function LoadingScreen({
  show = true,
  duration = 1000,
  onDone,
}) {
  const { t } = useLanguage();
  const commonT = t("common") || {};

  const [visible, setVisible] = useState(show);
  const [closing, setClosing] = useState(false);
  const [progress, setProgress] = useState(0);
  const onDoneRef = useRef(onDone);

  useEffect(() => {
    onDoneRef.current = onDone;
  }, [onDone]);

  // Handle visibility state changes
  useEffect(() => {
    if (show) {
      setVisible(true);
      setClosing(false);
      setProgress(0);
    } else {
      setClosing(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [show]);

  // Smooth progress calculation using easeOutCubic
  useEffect(() => {
    if (!show) return;

    const start = performance.now();
    let raf = 0;
    let timer = 0;

    const tick = (now) => {
      const elapsed = now - start;
      const progressFraction = Math.min(elapsed / duration, 1);

      // easeOutCubic
      const eased = 1 - Math.pow(1 - progressFraction, 3);
      setProgress(Math.floor(eased * 100));

      if (progressFraction < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setClosing(true);
        timer = setTimeout(() => {
          setVisible(false);
          if (typeof onDoneRef.current === "function") {
            onDoneRef.current();
          }
        }, 300);
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
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#08080a] text-neutral-100 select-none transition-opacity duration-300 ease-out ${
        closing ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Cargando portafolio"
    >
      <div className="flex flex-col items-center gap-6 w-full max-w-xs px-6">
        {/* Name Identity */}
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-300">
            Kevin Castañeda
          </span>
        </div>

        {/* Minimal Hairline Progress Bar */}
        <div className="w-44 sm:w-56 h-[1px] bg-neutral-800 relative overflow-hidden">
          <div
            className="h-full bg-neutral-200 transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status Label & Percentage */}
        <div className="flex items-center justify-between w-44 sm:w-56 font-mono text-[11px] text-neutral-500 uppercase tracking-wider">
          <span>{commonT.loading || "Loading"}</span>
          <span className="tabular-nums">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
