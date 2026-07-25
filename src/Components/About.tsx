"use client";

import { CONTACTS } from "@/constants/contacts";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");

  const stats = [
    { label: t("stats.ageLabel"), value: t("stats.ageValue") },
    { label: t("stats.heightLabel"), value: t("stats.heightValue") },
    { label: t("stats.weightLabel"), value: t("stats.weightValue") },
    { label: t("stats.hairLabel"), value: t("stats.hairValue") },
  ];

  const languages = [
    t("languages.items.0"),
    t("languages.items.1"),
    t("languages.items.2"),
    t("languages.items.3"),
  ];

  const passions = [
    t("passions.items.0"),
    t("passions.items.1"),
    t("passions.items.2"),
    t("passions.items.3"),
    t("passions.items.4"),
    t("passions.items.5"),
  ];

  return (
    <section
      id="about"
      className="py-24 bg-[#0a0a0a] text-white overflow-hidden relative"
    >
      {/* Ornement décoratif de fond */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start">
          {/* Image de profil */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end lg:sticky lg:top-32">
            <div className="relative group">
              {/* Halo doré subtil derrière l'image */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-amber-500/20 to-transparent rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border border-neutral-800 shadow-2xl">
                <Image
                  src="/bru_about.jpg"
                  alt="Brunella - Portrait"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Texte de présentation */}
          <div className="w-full lg:w-3/5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-amber-500/80 block mb-3">
                {t("tagline")}
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-white font-serif mb-6">
                {t("titlePrefix")}
                <span className="text-amber-500 italic">
                  {t("titleHighlight")}
                </span>
              </h2>
              <div className="w-16 h-px bg-amber-500/40"></div>
            </div>

            {/* Grille de caractéristiques */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="border border-neutral-900 bg-neutral-950/50 p-4 rounded-xl text-center hover:border-amber-500/30 transition-colors duration-300"
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-amber-500/70 mb-1">
                    {stat.label}
                  </p>
                  <p className="text-lg text-white font-serif">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Paragraphes de description */}
            <div className="space-y-6 text-neutral-400 font-light leading-relaxed text-sm md:text-base">
              <p className="text-neutral-200 text-lg">
                {t("description.welcome")}
              </p>
              <p>
                <span className="text-amber-500/80">
                  {t("description.amenitiesHeader")}
                </span>
                <br />
                {t("description.p1")}
              </p>
              <p>{t("description.p2")}</p>
              <p>{t("description.p3")}</p>
              <p>{t("description.p4")}</p>
              <p>{t("description.p5")}</p>
            </div>

            {/* Informations pratiques et Contact */}
            <div className="mt-10 p-6 border border-neutral-900 rounded-2xl bg-neutral-950/30">
              <h3 className="text-amber-500 text-sm uppercase tracking-widest mb-4">
                {t("practicalInfo.title")}
              </h3>
              <ul className="space-y-3 text-sm text-neutral-300 font-light mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-0.5">📍</span>
                  <span>
                    <strong className="text-white font-medium">
                      {t("practicalInfo.locationLabel")}
                    </strong>{" "}
                    {t("practicalInfo.locationValue")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-0.5">💦</span>
                  <span>
                    <strong className="text-white font-medium">
                      {t("practicalInfo.comfortLabel")}
                    </strong>{" "}
                    {t("practicalInfo.comfortValue")}
                  </span>
                </li>
              </ul>

              <h3 className="text-amber-500 text-sm uppercase tracking-widest mb-4">
                {t("contact.title")}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-neutral-300 font-light mb-6">
                <a
                  href={CONTACTS.telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-amber-400 transition-colors"
                >
                  <span className="text-lg">📱</span>{" "}
                  {t("contact.telegramLabel")} {CONTACTS.telegram}
                </a>
                <a
                  href={`mailto:${CONTACTS.email}`}
                  className="flex items-center gap-2 hover:text-amber-400 transition-colors sm:col-span-2"
                >
                  <span className="text-lg">📧</span> {t("contact.emailLabel")}{" "}
                  {CONTACTS.email}
                </a>
                <a
                  href={CONTACTS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-amber-400 transition-colors"
                >
                  <span className="text-lg">💬</span>{" "}
                  {t("contact.whatsappLabel")} {CONTACTS.phoneNumber}
                </a>
              </div>

              <div className="pt-6 border-t border-neutral-900 text-center">
                <p className="text-neutral-400 text-sm italic font-light mb-2">
                  {t("footer.closing")}
                </p>
                <p className="text-neutral-500 text-xs">
                  {t("footer.message")}
                  <br />
                  <br />
                  <span className="text-amber-500/70">
                    {t("footer.signature")}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section supplémentaire - Langues et centres d’intérêt */}
        <div className="mt-24 pt-16 border-t border-neutral-900 grid md:grid-cols-2 gap-12">
          {/* Langues */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-amber-500/80 mb-6 flex items-center gap-4">
              {t("languages.title")}
              <span className="h-px flex-1 bg-neutral-900"></span>
            </h3>
            <div className="flex flex-wrap gap-3">
              {languages.map((lang, i) => (
                <span
                  key={i}
                  className="px-5 py-2 border border-neutral-800 rounded-full text-sm font-light text-neutral-300 hover:border-amber-500/40 hover:text-amber-400 transition-colors duration-300 cursor-default"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Passions */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-amber-500/80 mb-6 flex items-center gap-4">
              {t("passions.title")}
              <span className="h-px flex-1 bg-neutral-900"></span>
            </h3>
            <div className="flex flex-wrap gap-3">
              {passions.map((passion, i) => (
                <span
                  key={i}
                  className="px-5 py-2 bg-neutral-950 border border-neutral-900 rounded-full text-sm font-light text-neutral-400 hover:bg-neutral-900 transition-colors duration-300 cursor-default"
                >
                  {passion}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
