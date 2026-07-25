"use client";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTranslations } from "next-intl";

const FAQSection = () => {
  const t = useTranslations("Home.FAQ");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: t("questions.q1.question"),
      answer: t("questions.q1.answer"),
    },
    {
      question: t("questions.q2.question"),
      answer: t("questions.q2.answer"),
    },
    {
      question: t("questions.q3.question"),
      answer: t("questions.q3.answer"),
    },
    {
      question: t("questions.q4.question"),
      answer: t("questions.q4.answer"),
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    // Fond noir profond, padding généreux, bordure subtile
    <section
      id="faq"
      className="py-28 bg-[#0a0a0a] text-white relative overflow-hidden border-t border-neutral-900"
    >
      {/* Élément décoratif subtil en arrière-plan (Lueur ambrée lointaine) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"></div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        {/* En-tête de section style luxe */}
        <div className="text-center mb-24 flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.3em] text-amber-400/70 block mb-4">
            {t("header.tagline")}
          </span>
          <h2 className="text-4xl md:text-5xl font-light font-serif mb-6 tracking-wide text-white">
            {t("header.title")}
          </h2>
          <div className="w-16 h-[1px] bg-amber-400/30 mx-auto mb-8"></div>
        </div>

        {/* Liste FAQ style épuré */}
        <div className="space-y-0 border-t border-neutral-800">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="border-b border-neutral-800 transition-all duration-300"
              >
                <button
                  className="w-full py-7 text-left flex justify-between items-center group focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  {/* Titre de la question : Serif, élégant, change de couleur au hover/active */}
                  <span
                    className={`text-lg md:text-xl font-serif font-light tracking-wide transition-colors duration-300 pr-8 ${isOpen ? "text-amber-400" : "text-neutral-100 group-hover:text-amber-300"}`}
                  >
                    {faq.question}
                  </span>

                  {/* Icône Chevron Or, fine, tourne doucement */}
                  <svg
                    className={`w-5 h-5 text-amber-400 transition-transform duration-500 ease-[0.16, 1, 0.3, 1] flex-shrink-0 ${isOpen ? "transform rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>

                {/* Contenu de la réponse avec animation Framer Motion soyeuse */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <div key="content" className="overflow-hidden">
                      {/* Texte réponse : Sans-serif, léger, lecture fluide */}
                      <p className="pb-8 pt-1 text-neutral-300 font-sans font-light leading-relaxed max-w-3xl">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Section CTA style Luxe */}
        <div className="mt-24 text-center border-t border-neutral-900 pt-16">
          <p className="font-sans text-neutral-400 font-light mb-8 max-w-md mx-auto leading-relaxed">
            {t("cta.description")}
          </p>

          {/* Bouton style Premium */}
          <button className="group relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden border border-amber-400/50 bg-transparent text-amber-400 rounded-full transition-all duration-300 hover:border-amber-400">
            {/* Lueur d'arrière-plan animée au hover */}
            <span className="absolute inset-0 w-full h-full bg-amber-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-sm"></span>

            <span className="relative font-sans text-sm uppercase tracking-[0.2em] font-medium group-hover:text-amber-300">
              {t("cta.button")}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
