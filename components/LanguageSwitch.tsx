"use client";

import { Globe } from "lucide-react";
import { useLanguage } from "./providers/LanguageProvider";

export default function LanguageSwitch() {
  const { lang, setLang } = useLanguage();
  const next = lang === "en" ? "fr" : "en";

  return (
    <button
      type="button"
      onClick={() => setLang(next)}
      aria-label={
        lang === "en" ? "Passer le site en français" : "Switch the site to English"
      }
      className="inline-flex h-10 items-center gap-1.5 rounded-full px-3 text-sm font-semibold text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white"
    >
      <Globe className="h-4 w-4" aria-hidden="true" />
      {lang.toUpperCase()}
    </button>
  );
}
