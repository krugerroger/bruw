"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";// Ou votre helper de routing next-intl
import { ChevronDown, Globe } from "lucide-react";
import { LOCALES, LocaleOption } from "@/constants/locales";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Trouve la langue actuelle
  const currentLocale = LOCALES.find((l) => l.code === locale) || LOCALES[0];

  // Fermer le menu si on clique à l'extérieur
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (newLocale: string) => {
    setIsOpen(false);
    // Met à jour l'URL avec la nouvelle locale tout en gardant le même chemin
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Bouton Principal */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-2 text-sm font-medium text-white transition-all focus:outline-none focus:ring-1 focus:ring-amber-500/50"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span className="text-base leading-none">{currentLocale.flag}</span>
        <span className="uppercase tracking-wider text-xs font-semibold">
          {currentLocale.code}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Menu Déroulant */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 rounded-2xl bg-[#121212] border border-white/10 shadow-2xl backdrop-blur-xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-3 py-1.5 border-b border-white/5 mb-1 flex items-center gap-2 text-xs text-gray-400 uppercase tracking-wider font-light">
            <Globe className="w-3.5 h-3.5 text-amber-500" />
            <span>Langue / Language</span>
          </div>

          <div className="space-y-0.5 px-1">
            {LOCALES.map((item: LocaleOption) => {
              const isActive = item.code === locale;
              return (
                <button
                  key={item.code}
                  onClick={() => handleLanguageChange(item.code)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm transition-all ${
                    isActive
                      ? "bg-amber-500/10 text-amber-400 font-medium"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">{item.flag}</span>
                    <span>{item.label}</span>
                  </div>
                  <span className="text-xs uppercase text-gray-500 font-mono">
                    {item.code}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
