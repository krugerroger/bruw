"use client";

import ServiceCards from "./ServiceCards";
import { Clock, Lightbulb, Ticket } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Pricing() {
  const t = useTranslations("Pricing");

  const optionsList = [
    t("options.items.0"),
    t("options.items.1"),
    t("options.items.2"),
    t("options.items.3"),
    t("options.items.4"),
  ];

  const paymentMethods = [
    { icon: Ticket, text: t("booking.payments.transcash") },
    { icon: Lightbulb, text: t("booking.payments.wire") },
    { icon: Clock, text: t("booking.payments.paypal") },
    { icon: Ticket, text: t("booking.payments.wero") },
  ];

  return (
    // Fond sombre Premium
    <section
      id="prestations"
      className="py-24 bg-[#0a0a0a] text-neutral-200 overflow-hidden"
    >
      <div className="container mx-auto px-3 max-w-7xl">
        {/* En-tête de section style "Haute Joaillerie" */}
        <div className="text-center mb-20 flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.3em] text-amber-400/80 block mb-3">
            {t("header.tagline")}
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 font-serif tracking-wide">
            {t("header.title")}
          </h2>
          <div className="w-16 h-px bg-amber-400"></div>
        </div>

        {/* Grille principale des cartes ServiceCards */}
        <div className="mb-12">
          <ServiceCards />
        </div>

        {/* Grille d'informations professionnelles & Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {/* Carte 1: Options Premium */}
          <div className="group bg-neutral-900 border border-neutral-800 p-10 rounded-2xl shadow-2xl transition-all duration-500 hover:border-amber-400/30 hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-white tracking-wide">
                {t("options.title")}
              </h3>
            </div>

            <ul className="space-y-4 text-neutral-300 font-light">
              {optionsList.map((option, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-amber-400/70 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span>{option}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Carte 2: Incall / Réception */}
          <div className="group bg-neutral-900 border border-neutral-800 p-10 rounded-2xl shadow-2xl transition-all duration-500 hover:border-amber-400/30 hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-white tracking-wide">
                {t("incall.title")}
              </h3>
            </div>

            <div className="space-y-6 text-neutral-300 font-light">
              <div className="border-l-2 border-amber-400/30 pl-6 py-1">
                <p className="text-amber-400 font-medium mb-1">
                  {t("incall.schedule.label")}
                </p>
                <p>{t("incall.schedule.description")}</p>
              </div>
              <div className="border-l-2 border-neutral-700 pl-6 py-1 hover:border-amber-400/30 transition-colors">
                <p className="text-neutral-400 font-medium mb-1 group-hover:text-amber-400">
                  {t("incall.refreshments.label")}
                </p>
                <p className="text-sm">
                  {t("incall.refreshments.description")}
                </p>
              </div>
              <div className="border-l-2 border-neutral-700 pl-6 py-1 hover:border-amber-400/30 transition-colors">
                <p className="text-neutral-400 font-medium mb-1 group-hover:text-amber-400">
                  {t("incall.hygiene.label")}
                </p>
                <p className="text-sm leading-relaxed">
                  {t("incall.hygiene.description")}
                </p>
              </div>
            </div>
          </div>

          {/* Carte 3: Accompagnement Extérieur */}
          <div className="group bg-neutral-900 border border-neutral-800 p-10 rounded-2xl shadow-2xl transition-all duration-500 hover:border-amber-400/30 hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-white tracking-wide">
                {t("outcall.title")}
              </h3>
            </div>

            <div className="space-y-5 text-neutral-300 font-light leading-relaxed">
              <div className="flex justify-between items-baseline bg-neutral-800/50 p-5 rounded-lg border border-neutral-700 group-hover:border-amber-400/20">
                <span className="font-semibold text-lg text-white">
                  {t("outcall.rate.duration")}
                </span>
                <span className="text-2xl font-serif text-amber-400">
                  {t("outcall.rate.price")}
                </span>
              </div>
              <p className="text-neutral-400 text-sm italic">
                {t("outcall.rate.note")}
              </p>
              <p>{t("outcall.description")}</p>
            </div>
          </div>

          {/* Carte 4: Modalités de Réservation & Paiement */}
          <div className="group bg-neutral-900 border border-neutral-800 p-10 rounded-2xl shadow-2xl transition-all duration-500 hover:border-amber-400/30 hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-white tracking-wide">
                {t("booking.title")}
              </h3>
            </div>

            <div className="space-y-6 text-neutral-300 font-light">
              <div className="bg-amber-400/5 border border-amber-400/20 p-5 rounded-lg text-sm leading-relaxed">
                <p className="font-medium text-amber-400 mb-2">
                  {t("booking.guarantee.label")}
                </p>
                {t("booking.guarantee.description")}
              </div>

              <div className="space-y-3">
                <p className="font-medium text-neutral-300">
                  {t("booking.payments.label")}
                </p>
                <div className="flex flex-wrap gap-3">
                  {paymentMethods.map((pay, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-2 text-sm bg-neutral-800 px-4 py-2 rounded-full border border-neutral-700"
                    >
                      <pay.icon className="w-4 h-4 text-amber-400" />
                      <span>{pay.text}</span>
                    </span>
                  ))}
                </div>
                <p className="text-xs text-neutral-500 mt-2">
                  {t("booking.payments.cashNote")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Note de bas de page & Politique d'annulation */}
        <div className="text-center max-w-3xl mx-auto border-t border-neutral-900 pt-10">
          <p className="text-xs text-neutral-600 mb-5 tracking-wide">
            {t("footer.disclaimer")}
          </p>
          <div className="inline-flex items-center gap-3 bg-neutral-900 px-6 py-3 rounded-full text-sm text-neutral-400 border border-neutral-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-amber-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{t("footer.cancellation")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
