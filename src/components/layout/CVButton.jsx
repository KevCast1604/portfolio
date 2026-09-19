import React from "react";
import { FileUser, ArrowDownToLine } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const CVButton = () => {
  const { t } = useLanguage();
  const commonT = t("common") || {};

  return (
    <div className="fixed bottom-6 right-6 z-[9999] sm:bottom-10 sm:right-10 leading-none">
      <a
        href="/CV_EN.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={commonT.cvAria || "Download Curriculum Vitae (PDF)"}
        className="group relative flex items-center justify-center h-13 sm:h-14 w-13 sm:w-14 hover:w-46 sm:hover:w-50 bg-neutral-950 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-950 border border-neutral-800 dark:border-neutral-300 shadow-2xl shadow-neutral-950/40 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
      >
        <div className="flex items-center justify-center w-full px-4 relative z-10">
          <div className="relative flex items-center justify-center min-w-[22px]">
            <FileUser
              className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              size={20}
            />
            {/* Micro active status beacon */}
            <span className="absolute -bottom-1 -right-1 flex h-2 w-2">
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>
          </div>

          <div className="overflow-hidden flex items-center">
            <span className="whitespace-nowrap ml-0 opacity-0 w-0 group-hover:ml-3 group-hover:opacity-100 group-hover:w-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] font-mono uppercase tracking-wider text-[11px] font-semibold flex items-center gap-1.5">
              <span>{commonT.cvLabel || "CV // RESUME"}</span>
              <ArrowDownToLine
                size={12}
                className="opacity-70 group-hover:translate-y-0.5 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
            </span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CVButton;
