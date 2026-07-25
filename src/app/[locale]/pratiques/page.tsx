"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function PracticesPage() {
  const t = useTranslations("Practices");

  // Récupération dynamique des tableaux d'éléments via les clés du dictionnaire
const getItems = (
  key: "whatIDo" | "whatIDontDo" | "whatIDontLike",
): string[] => {
  return t.raw(`${key}.items`) as string[];
};

  const sections = [
    {
      title: t("whatIDo.title"),
      items: getItems("whatIDo"),
      color: "text-amber-400",
      icon: "M5 13l4 4L19 7",
    },
    {
      title: t("whatIDontDo.title"),
      items: getItems("whatIDontDo"),
      color: "text-red-500",
      icon: "M6 18L18 6M6 6l12 12",
    },
    {
      title: t("whatIDontLike.title"),
      items: getItems("whatIDontLike"),
      color: "text-neutral-500",
      icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
    },
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] text-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
            {t("title")}
          </h1>
          <div className="w-24 h-[1px] bg-amber-500/50 mx-auto mb-8"></div>
          <p className="text-lg text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Sections de contenu */}
        {sections.map((section, idx) => (
          <div key={idx} className="mb-20">
            <h2
              className={`text-xs uppercase tracking-[0.3em] font-medium ${section.color} mb-10 text-center`}
            >
              {section.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {section.items.map((item, i) => (
                <div key={i} className="flex items-center group">
                  <svg
                    className={`w-4 h-4 ${section.color} mr-4 opacity-70 flex-shrink-0`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={section.icon}
                    />
                  </svg>
                  <span className="text-neutral-300 font-light group-hover:text-white transition-colors duration-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Call to Action */}
        <div className="text-center pt-12 border-t border-neutral-900">
          <p className="text-neutral-400 mb-8 font-light italic">
            {t("cta.quote")}
          </p>
          <Link href="/contact">
            <button className="px-10 py-3 border border-amber-500/30 text-amber-500 hover:bg-amber-500 hover:text-black uppercase tracking-[0.2em] text-sm transition-all duration-500">
              {t("cta.button")}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
