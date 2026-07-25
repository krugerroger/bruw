"use client";

import { useTranslations } from "next-intl";

export default function Conditions() {
  const t = useTranslations("Conditions");

  const servicesList = [
    t("services.items.0"),
    t("services.items.1"),
    t("services.items.2"),
    t("services.items.3"),
    t("services.items.4"),
    t("services.items.5"),
    t("services.items.6"),
    t("services.items.7"),
    t("services.items.8"),
    t("services.items.9"),
  ];

  const advantages = [
    {
      title: t("payment.advantages.0.title"),
      desc: t("payment.advantages.0.desc"),
    },
    {
      title: t("payment.advantages.1.title"),
      desc: t("payment.advantages.1.desc"),
    },
    {
      title: t("payment.advantages.2.title"),
      desc: t("payment.advantages.2.desc"),
    },
    {
      title: t("payment.advantages.3.title"),
      desc: t("payment.advantages.3.desc"),
    },
    {
      title: t("payment.advantages.4.title"),
      desc: t("payment.advantages.4.desc"),
    },
  ];

  const paymentMethods = [
    t("payment.methods.0"),
    t("payment.methods.1"),
    t("payment.methods.2"),
    t("payment.methods.3"),
  ];

  return (
    <section
      id="conditions"
      className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden"
    >
      {/* Halo de fond subtil */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        {/* ================= SECTION SERVICES ================= */}
        <div className="border border-neutral-900 bg-neutral-950/40 rounded-2xl p-8 md:p-10 mb-20 backdrop-blur-sm">
          <span className="text-xs uppercase tracking-[0.3em] text-amber-500/80 block text-center mb-3">
            {t("services.tagline")}
          </span>
          <h2 className="text-3xl font-light text-center font-serif text-white mb-8">
            {t("services.title")}
          </h2>
          <div className="w-12 h-px bg-amber-500/30 mx-auto mb-8"></div>

          <p className="text-neutral-300 font-light leading-relaxed text-center max-w-3xl mx-auto text-base md:text-lg">
            {t.rich("services.description", {
              amber: (chunks) => (
                <span className="text-amber-400 font-normal">{chunks}</span>
              ),
            })}
          </p>

          {/* Table de pilules minimalistes */}
          <div className="flex flex-wrap gap-2.5 mt-10 justify-center max-w-3xl mx-auto">
            {servicesList.map((service, index) => (
              <span
                key={index}
                className="bg-neutral-950 border border-neutral-900 text-neutral-400 px-4 py-2 rounded-full text-xs font-light tracking-wide cursor-default hover:border-amber-500/30 hover:text-amber-400 transition-colors duration-300"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* ================= MODE DE PAIEMENT ================= */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-amber-500/80 block mb-3">
            {t("payment.tagline")}
          </span>
          <h1 className="text-4xl md:text-5xl font-light font-serif text-white mb-6">
            {t("payment.title")}
          </h1>
          <div className="w-16 h-px bg-amber-500/40 mx-auto mb-6"></div>
          <p className="text-neutral-400 font-light leading-relaxed text-sm md:text-base max-w-2xl mx-auto">
            {t.rich("payment.subtitle", {
              amber: (chunks) => (
                <span className="text-amber-400 font-medium">{chunks}</span>
              ),
            })}
          </p>
        </div>

        {/* Liste des Avantages */}
        <div className="space-y-4">
          {advantages.map((itemBox, idx) => (
            <div
              key={idx}
              className="border border-neutral-900 bg-neutral-950/30 rounded-xl p-6 md:p-8 hover:border-neutral-800/80 transition-all duration-300 group"
            >
              <div className="flex items-start gap-6">
                <span className="text-3xl font-serif font-light text-amber-500/40 group-hover:text-amber-500 transition-colors duration-300 select-none">
                  {`0${idx + 1}`}
                </span>
                <div>
                  <h3 className="text-lg font-serif font-light text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                    {itemBox.title}
                  </h3>
                  <p className="text-neutral-400 font-light text-sm md:text-base leading-relaxed">
                    {itemBox.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Méthodes de paiement miniatures */}
        <div className="text-center mt-10 mb-24">
          <p className="text-neutral-500 text-xs uppercase tracking-widest mb-4">
            {t("payment.methodsLabel")}
          </p>
          <div className="flex justify-center items-center gap-3 flex-wrap">
            {paymentMethods.map((method, idx) => (
              <span
                key={idx}
                className="bg-neutral-950 border border-neutral-900 px-4 py-2 rounded-lg text-neutral-300 font-serif font-light text-xs tracking-wider"
              >
                {method}
              </span>
            ))}
          </div>
        </div>

        {/* ================= CONFIDENTIALITÉ & SÉCURITÉ ================= */}
        <div className="mt-20 pt-16 border-t border-neutral-900">
          <h2 className="text-3xl font-light font-serif text-white mb-10 text-center">
            {t("confidentiality.title")}
          </h2>

          <div className="space-y-4">
            <div className="border border-neutral-900 bg-neutral-950/30 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="font-serif text-amber-500/50 text-xl">09</span>
                <div>
                  <h3 className="text-base font-serif font-light text-neutral-200 mb-2">
                    {t("confidentiality.modificationsTitle")}
                  </h3>
                  <p className="text-neutral-400 font-light text-sm leading-relaxed">
                    {t("confidentiality.modificationsDesc")}
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-neutral-900 bg-neutral-950/30 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="font-serif text-amber-500/50 text-xl">10</span>
                <div>
                  <h3 className="text-base font-serif font-light text-neutral-200 mb-2">
                    {t("confidentiality.contactTitle")}
                  </h3>
                  <p className="text-neutral-400 font-light text-sm leading-relaxed">
                    {t("confidentiality.contactDesc")}{" "}
                    <a
                      href="mailto:moreaubrunella12@gmail.com"
                      className="text-amber-500 hover:text-amber-400 underline transition-colors font-normal"
                    >
                      moreaubrunella12@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= QUESTIONS FRÉQUENTES (FAQ) ================= */}
        <div className="mt-24">
          <h2 className="text-3xl font-light font-serif text-white mb-12 text-center">
            {t("faq.title")}
          </h2>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <div className="border border-neutral-900 bg-neutral-950/20 rounded-xl p-6 md:p-8">
              <h3 className="text-lg font-serif font-light text-amber-500/90 mb-3 flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-amber-500/60 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
                {t("faq.q1Title")}
              </h3>
              <p className="text-neutral-400 font-light text-sm md:text-base leading-relaxed pl-8">
                {t("faq.q1Desc")}
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="border border-neutral-900 bg-neutral-950/20 rounded-xl p-6 md:p-8">
              <h3 className="text-lg font-serif font-light text-amber-500/90 mb-3 flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-amber-500/60 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
                {t("faq.q2Title")}
              </h3>
              <p className="text-neutral-400 font-light text-sm md:text-base leading-relaxed pl-8">
                {t("faq.q2Desc")}
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="border border-neutral-900 bg-neutral-950/20 rounded-xl p-6 md:p-8">
              <h3 className="text-lg font-serif font-light text-amber-500/90 mb-3 flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-amber-500/60 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                {t("faq.q3Title")}
              </h3>
              <p className="text-neutral-400 font-light text-sm md:text-base leading-relaxed pl-8">
                {t("faq.q3Desc")}
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="border border-neutral-900 bg-neutral-950/20 rounded-xl p-6 md:p-8">
              <h3 className="text-lg font-serif font-light text-amber-500/90 mb-3 flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-amber-500/60 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {t("faq.q4Title")}
              </h3>
              <p className="text-neutral-400 font-light text-sm md:text-base leading-relaxed pl-8">
                {t("faq.q4Desc")}
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="border border-neutral-900 bg-neutral-950/20 rounded-xl p-6 md:p-8">
              <h3 className="text-lg font-serif font-light text-amber-500/90 mb-3 flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-amber-500/60 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                {t("faq.q5Title")}
              </h3>
              <div className="text-neutral-400 font-light text-sm md:text-base leading-relaxed pl-8 space-y-4">
                <p>
                  {t.rich("faq.q5Desc", {
                    amber: (chunks) => (
                      <span className="text-amber-500 font-normal">
                        {chunks}
                      </span>
                    ),
                  })}
                </p>
                <div className="bg-neutral-950 p-4 rounded-lg border-l-2 border-amber-500/40 text-xs text-neutral-500 italic max-w-2xl">
                  {t("faq.q5Disclaimer")}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion / Note d'accueil finale */}
        <div className="text-center mt-20 p-8 border border-neutral-900 bg-neutral-950/30 rounded-2xl">
          <p className="text-neutral-400 font-serif italic text-lg mb-2">
            {t("footer.thankYou")}
          </p>
          <p className="text-sm font-light text-amber-500/85 tracking-wide">
            {t("footer.note")}
          </p>
        </div>
      </div>
    </section>
  );
}
