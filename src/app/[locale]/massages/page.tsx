"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  Sparkles,
  Wind,
  Leaf,
  Activity,
  Heart,
  UserCheck,
  CheckCircle2,
  Clock,
  CreditCard,
  ChevronDown,
  Quote,
  ArrowUpRight,
} from "lucide-react";
import { faqData, massages } from "@/constants/massages";

export default function MassagePage() {
  const t = useTranslations("MassagePage");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    {
      icon: Leaf,
      title: t("philosophy.features.bioOils.title"),
      desc: t("philosophy.features.bioOils.desc"),
    },
    {
      icon: Wind,
      title: t("philosophy.features.serenity.title"),
      desc: t("philosophy.features.serenity.desc"),
    },
    {
      icon: Activity,
      title: t("philosophy.features.tailored.title"),
      desc: t("philosophy.features.tailored.desc"),
    },
    {
      icon: Heart,
      title: t("philosophy.features.holistic.title"),
      desc: t("philosophy.features.holistic.desc"),
    },
  ];

  const steps = [
    {
      num: t("experience.steps.welcome.num"),
      title: t("experience.steps.welcome.title"),
      desc: t("experience.steps.welcome.desc"),
    },
    {
      num: t("experience.steps.prep.num"),
      title: t("experience.steps.prep.title"),
      desc: t("experience.steps.prep.desc"),
    },
    {
      num: t("experience.steps.care.num"),
      title: t("experience.steps.care.title"),
      desc: t("experience.steps.care.desc"),
    },
    {
      num: t("experience.steps.awakening.num"),
      title: t("experience.steps.awakening.title"),
      desc: t("experience.steps.awakening.desc"),
    },
  ];

  const testimonials = [
    {
      author: t("testimonials.items.sophie.author"),
      service: t("testimonials.items.sophie.service"),
      quote: t("testimonials.items.sophie.quote"),
    },
    {
      author: t("testimonials.items.marc.author"),
      service: t("testimonials.items.marc.service"),
      quote: t("testimonials.items.marc.quote"),
    },
    {
      author: t("testimonials.items.eleonore.author"),
      service: t("testimonials.items.eleonore.service"),
      quote: t("testimonials.items.eleonore.quote"),
    },
    {
      author: t("testimonials.items.julien.author"),
      service: t("testimonials.items.julien.service"),
      quote: t("testimonials.items.julien.quote"),
    },
  ];

  return (
    <div className="min-h-screen bg-[#070708] text-zinc-400 font-sans selection:bg-amber-500/20 antialiased overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          <div className="flex items-center gap-2 text-amber-500 bg-amber-500/5 px-4 py-2 rounded-full border border-amber-500/10 font-mono text-[10px] uppercase tracking-[0.4em] mb-8 shadow-sm backdrop-blur-sm">
            <Sparkles size={12} /> {t("hero.tagline")}
          </div>
          <h1 className="text-5xl md:text-7xl text-zinc-100 font-serif font-light uppercase tracking-tighter max-w-4xl leading-[0.9] mb-8">
            {t("hero.title.part1")}{" "}
            <span className="text-amber-500 italic font-normal">
              {t("hero.title.highlight")}
            </span>{" "}
            {t("hero.title.part2")}
          </h1>
          <p className="text-zinc-500 font-serif italic text-xl max-w-2xl leading-relaxed mb-12">
            {t("hero.subtitle")}
          </p>
          <Link
            href="/reservation"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-zinc-100 text-zinc-950 uppercase tracking-[0.2em] text-xs font-mono font-bold hover:bg-amber-500 hover:text-zinc-950 transition-all duration-500 rounded-full shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_-10px_rgba(245,158,11,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50"
          >
            {t("hero.cta")}
            <ArrowUpRight
              size={16}
              strokeWidth={2}
              className="group-hover:rotate-45 transition-transform duration-500"
            />
          </Link>
        </div>
      </section>

      {/* LIGNE DE SÉPARATION DÉCORATIVE */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent my-12" />
      </div>

      {/* 2. PRÉSENTATION & APPROCHE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] font-mono font-bold text-amber-500 flex items-center gap-4">
                <span className="w-8 h-px bg-amber-500/50"></span>
                {t("philosophy.tagline")}
              </span>
              <h2 className="text-4xl md:text-5xl text-zinc-100 font-serif font-light uppercase tracking-tight leading-tight">
                {t("philosophy.title.part1")}
                <span className="block text-zinc-500 italic mt-2">
                  {t("philosophy.title.highlight")}
                </span>
              </h2>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-zinc-400 font-light">
              <p>{t("philosophy.paragraph1")}</p>
              <p>{t("philosophy.paragraph2")}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group p-6 bg-zinc-900/20 hover:bg-zinc-900/40 border border-zinc-800/50 hover:border-amber-500/30 rounded-2xl flex flex-col gap-4 transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform duration-500">
                  <feature.icon size={16} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-zinc-200 text-xs font-mono font-bold uppercase tracking-widest mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-[11px] text-zinc-500 font-mono">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CARTE DES MASSAGES */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
        <div className="text-center space-y-4">
          <span className="text-[10px] uppercase tracking-[0.3em] font-mono font-bold text-amber-500 block">
            {t("treatments.tagline")}
          </span>
          <h2 className="text-4xl text-zinc-100 font-serif font-light uppercase tracking-tight">
            {t("treatments.title")}
          </h2>
        </div>

        <div className="space-y-12">
          {massages.map((massage) => {
            const Icon = massage.icon;
            return (
              <div
                key={massage.id}
                className="group bg-zinc-900/10 border border-zinc-800/50 rounded-[2rem] overflow-hidden hover:border-amber-500/20 hover:bg-zinc-900/30 transition-all duration-700 shadow-lg grid grid-cols-1 lg:grid-cols-12 items-stretch"
              >
                {/* Visuel Abstrait */}
                <div className="lg:col-span-4 relative overflow-hidden bg-zinc-950/50 flex flex-col items-center justify-center p-12 min-h-[300px] border-b lg:border-b-0 lg:border-r border-zinc-800/50">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-950/0 to-zinc-950/0 opacity-50 group-hover:from-amber-500/10 transition-colors duration-1000" />
                  <Icon
                    size={56}
                    strokeWidth={1}
                    children
                    className="text-zinc-800 group-hover:text-amber-500/40 transition-colors duration-700 relative z-10 mb-6 group-hover:scale-110"
                  />
                  <h3 className="text-zinc-700 font-serif italic text-3xl relative z-10 text-center opacity-40 select-none">
                    {massage.name.split(" ")[1] || massage.name.split(" ")[0]}
                  </h3>
                </div>

                {/* Contenu Texte */}
                <div className="lg:col-span-8 p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 mb-8">
                      <h3 className="text-2xl md:text-3xl text-zinc-100 font-serif font-light uppercase tracking-tight">
                        {massage.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="flex items-center gap-2 px-4 py-2 bg-zinc-950 rounded-full text-[10px] font-mono uppercase tracking-widest text-zinc-400 border border-zinc-800">
                          <Clock size={12} className="text-amber-500" />{" "}
                          {massage.duration}
                        </span>
                        <span className="flex items-center gap-2 px-4 py-2 bg-zinc-950 rounded-full text-[10px] font-mono uppercase tracking-widest text-zinc-400 border border-zinc-800">
                          <CreditCard size={12} className="text-amber-500" />{" "}
                          {massage.price}
                        </span>
                      </div>
                    </div>

                    <p className="text-zinc-400 text-base leading-relaxed mb-8 font-light max-w-3xl">
                      {massage.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                      <div className="space-y-3">
                        <span className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-mono text-zinc-500">
                          <UserCheck size={14} className="text-zinc-600" />{" "}
                          {t("treatments.forWho")}
                        </span>
                        <p className="text-sm text-zinc-300 italic font-serif">
                          "{massage.recommendedFor}"
                        </p>
                      </div>

                      <div className="space-y-3">
                        <span className="text-[10px] uppercase tracking-widest font-mono text-zinc-500">
                          {t("treatments.benefits")}
                        </span>
                        <ul className="space-y-2">
                          {massage.benefits.map((benefit, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-sm text-zinc-300"
                            >
                              <CheckCircle2
                                size={14}
                                className="text-amber-500 mt-0.5 shrink-0"
                              />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-zinc-800/50 mt-auto flex justify-end">
                    <Link
                      href="/reservation"
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 hover:text-amber-500 transition-colors group/link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 rounded"
                    >
                      {t("treatments.bookCare")}
                      <ArrowUpRight
                        size={16}
                        className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. LE DÉROULEMENT D'UNE SÉANCE */}
      <section className="py-32 bg-zinc-950 border-y border-zinc-900/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 mb-20">
            <span className="text-[10px] uppercase tracking-[0.3em] font-mono font-bold text-amber-500 block">
              {t("experience.tagline")}
            </span>
            <h2 className="text-4xl text-zinc-100 font-serif font-light uppercase tracking-tight">
              {t("experience.title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

            {steps.map((step, idx) => (
              <div key={idx} className="relative pt-4 group">
                <div className="w-20 h-20 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-2xl font-serif text-zinc-600 group-hover:text-amber-500 group-hover:border-amber-500/50 transition-all duration-500 mb-8 mx-auto md:mx-0 shadow-xl relative z-10">
                  {step.num}
                </div>
                <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-zinc-100 mb-3 text-center md:text-left">
                  {step.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed text-center md:text-left font-light">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LES BIENFAITS GÉNÉRAUX */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-4xl text-zinc-100 font-serif font-light uppercase tracking-tight leading-tight">
              {t("healthImpact.title")}
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed font-light">
              {t("healthImpact.description")}
            </p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            <div className="p-8 bg-zinc-900/20 border border-zinc-800/50 rounded-3xl hover:bg-zinc-900/40 transition-colors">
              <Activity
                size={24}
                className="text-amber-500 mb-6"
                strokeWidth={1.5}
              />
              <h3 className="text-xs uppercase tracking-widest font-mono font-bold text-zinc-200 mb-3">
                {t("healthImpact.physiological.title")}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed font-light">
                {t("healthImpact.physiological.desc")}
              </p>
            </div>
            <div className="p-8 bg-zinc-900/20 border border-zinc-800/50 rounded-3xl hover:bg-zinc-900/40 transition-colors">
              <Wind
                size={24}
                className="text-amber-500 mb-6"
                strokeWidth={1.5}
              />
              <h3 className="text-xs uppercase tracking-widest font-mono font-bold text-zinc-200 mb-3">
                {t("healthImpact.psychological.title")}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed font-light">
                {t("healthImpact.psychological.desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TÉMOIGNAGES */}
      <section className="py-24 bg-zinc-950/50 border-t border-zinc-900/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] font-mono font-bold text-amber-500 block">
                {t("testimonials.tagline")}
              </span>
              <h2 className="text-4xl text-zinc-100 font-serif font-light uppercase tracking-tight">
                {t("testimonials.title")}
              </h2>
            </div>
            <div className="hidden md:flex gap-2">
              <div className="w-12 h-px bg-zinc-700" />
              <div className="w-4 h-px bg-zinc-800" />
            </div>
          </div>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-4 sm:px-6 lg:px-8 pb-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="shrink-0 w-[calc((100vw-80rem)/2)] hidden xl:block" />

          {testimonials.map((testi, idx) => (
            <div
              key={idx}
              className="snap-center shrink-0 w-[85vw] md:w-[450px] p-10 bg-zinc-900/30 border border-zinc-800/50 rounded-[2rem] relative group hover:bg-zinc-900/50 transition-colors"
            >
              <Quote
                size={32}
                className="text-amber-500/20 absolute top-8 right-8 group-hover:text-amber-500/40 transition-colors"
              />
              <p className="text-base text-zinc-400 italic leading-relaxed mb-8 font-serif">
                "{testi.quote}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 font-mono text-xs">
                  {testi.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-zinc-200 text-xs font-mono uppercase tracking-widest font-bold">
                    {testi.author}
                  </h4>
                  <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">
                    {testi.service}
                  </span>
                </div>
              </div>
            </div>
          ))}

          <div className="shrink-0 w-4 lg:w-[calc((100vw-80rem)/2)]" />
        </div>
      </section>

      {/* 7. FAQ MASSAGES */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl text-zinc-100 font-serif font-light uppercase tracking-tight">
            {t("faq.title")}
          </h2>
        </div>

        <div className="space-y-4">
          {faqData.map((item, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={i}
                className={`group bg-zinc-900/20 border rounded-2xl overflow-hidden transition-all duration-500 ${
                  isOpen
                    ? "border-amber-500/30 bg-zinc-900/40"
                    : "border-zinc-800/50 hover:border-zinc-700"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full flex justify-between items-center p-6 md:p-8 text-left transition-colors relative z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 rounded-2xl"
                >
                  <span
                    className={`font-serif italic text-lg md:text-xl transition-colors duration-300 pr-4 ${
                      isOpen
                        ? "text-amber-500"
                        : "text-zinc-200 group-hover:text-zinc-100"
                    }`}
                  >
                    {item.q}
                  </span>
                  <div
                    className={`shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 ${
                      isOpen
                        ? "rotate-180 text-amber-500 border-amber-500/30 bg-amber-500/5"
                        : "border-zinc-800 text-zinc-500 group-hover:text-zinc-300 group-hover:border-zinc-600"
                    }`}
                  >
                    <ChevronDown size={18} strokeWidth={1.5} />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 md:px-8 pb-8">
                      <div className="h-px w-full bg-zinc-800/50 mb-6" />
                      <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. CALL TO ACTION FINAL */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="rounded-[3rem] bg-zinc-900/40 border border-zinc-800/50 p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent opacity-50" />

          <div className="relative z-10 space-y-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-6xl text-zinc-100 font-serif font-light uppercase tracking-tighter">
              {t("cta.titlePart1")}{" "}
              <span className="text-amber-500 italic font-normal block mt-2">
                {t("cta.titleHighlight")}
              </span>
            </h2>
            <p className="text-zinc-400 font-light text-base md:text-lg leading-relaxed">
              {t("cta.description")}
            </p>
            <div className="flex justify-center pt-6">
              <Link
                href="/reservation"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-zinc-100 text-zinc-950 uppercase tracking-[0.2em] text-xs font-mono font-bold hover:bg-amber-500 hover:text-zinc-950 transition-all duration-500 rounded-full shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_-10px_rgba(245,158,11,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50"
              >
                {t("cta.button")}
                <ArrowUpRight
                  size={16}
                  strokeWidth={2}
                  className="group-hover:rotate-45 transition-transform duration-500"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
