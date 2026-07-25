"use client";

import { CONTACTS } from "@/constants/contacts";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Home.Contact");

  return (
    // Fond noir profond pour le luxe, texte clair
    <section
      id="contact"
      className="py-28 bg-[#0a0a0a] text-white relative overflow-hidden border-t border-neutral-900"
    >
      {/* Élément décoratif subtil en arrière-plan (Lueur ambrée lointaine) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        {/* En-tête de section style "Haute Joaillerie" */}
        <div className="text-center mb-24 flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.3em] text-amber-400/70 block mb-4">
            {t("header.tagline")}
          </span>
          <h2 className="text-4xl md:text-5xl font-light font-serif mb-6 tracking-wide text-white">
            {t("header.title")}
          </h2>
          <div className="w-16 h-[1px] bg-amber-400/30 mx-auto mb-8"></div>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto font-light leading-relaxed">
            {t("header.description")}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Bloc Principal de Contact */}
          <div className="w-full space-y-10">
            {/* Carte de Réservation stylisée */}
            <div
              id="reserver"
              className="group relative border border-neutral-800 bg-black p-10 md:p-12 transition-colors duration-500 hover:border-amber-400/30"
            >
              {/* Ligne dorée décorative animée au survol */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <h3 className="text-2xl font-serif font-light text-white tracking-wide">
                  {t("booking.title")}
                </h3>
                <span className="text-xs uppercase tracking-[0.2em] text-amber-400/80 px-4 py-1.5 border border-amber-400/20 rounded-full">
                  {t("booking.badge")}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                {/* Info Téléphone */}
                <div className="flex items-start gap-5 p-6 border border-neutral-900 bg-neutral-950">
                  <div className="text-amber-400 mt-1 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-neutral-200 uppercase text-sm tracking-wider mb-1">
                      {t("booking.phone.title")}
                    </p>
                    <p className="text-sm text-neutral-500 font-light leading-relaxed">
                      {t("booking.phone.description")}
                    </p>
                  </div>
                </div>

                {/* Info Réseaux */}
                <div className="flex flex-col gap-6">
                  <h4 className="font-medium text-neutral-300 text-sm uppercase tracking-wider mb-2">
                    {t("booking.concierge.title")}
                  </h4>

                  {/* WhatsApp minimaliste */}
                  <a
                    href={CONTACTS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-3 text-neutral-400 hover:text-white transition-colors duration-300 text-sm pb-2 border-b border-neutral-900 hover:border-neutral-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-neutral-700 group-hover/link:text-[#25D366] transition-colors"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.18-1.24-6.169-3.495-8.418" />
                    </svg>
                    <span>
                      {t("booking.concierge.whatsapp")}{" "}
                      <span className="font-semibold text-neutral-300">
                        WhatsApp
                      </span>
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-auto opacity-50"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>

                  {/* Telegram minimaliste */}
                  <a
                    href={CONTACTS.telegramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-3 text-neutral-400 hover:text-white transition-colors duration-300 text-sm pb-2 border-b border-neutral-900 hover:border-neutral-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-neutral-700 group-hover/link:text-[#0088CC] transition-colors"
                    >
                      <path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z" />
                    </svg>
                    <span>
                      {t("booking.concierge.telegram")}{" "}
                      <span className="font-semibold text-neutral-300">
                        Telegram
                      </span>
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-auto opacity-50"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>

                  {/* Canal Telegram minimaliste */}
                  <a
                    href={CONTACTS.canalTelegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-3 text-neutral-400 hover:text-white transition-colors duration-300 text-sm pb-2 border-b border-neutral-900 hover:border-neutral-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-neutral-700 group-hover/link:text-[#0088CC] transition-colors"
                    >
                      <path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z" />
                    </svg>
                    <span>
                      {t("booking.concierge.telegramChannel")}{" "}
                      <span className="font-semibold text-neutral-300">
                        Telegram
                      </span>
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-auto opacity-50"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>

                  {/* Email minimaliste */}
                  <a
                    href={`mailto:${CONTACTS.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-3 text-neutral-400 hover:text-white transition-colors duration-300 text-sm pb-2 border-b border-neutral-900 hover:border-neutral-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 text-neutral-600 group-hover/link:text-rose-400 transition-colors duration-300"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>

                    <span>
                      {t("booking.concierge.email")}{" "}
                      <span className="font-semibold text-neutral-300">
                        Email
                      </span>
                    </span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-auto opacity-50 transition-transform duration-300 group-hover/link:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Disclaimer Style Luxe */}
            <div className="border-t border-neutral-900 bg-black p-8 text-neutral-500">
              <div className="flex items-start gap-4 max-w-2xl mx-auto">
                <div className="p-2 border border-amber-400/20 bg-amber-400/5 text-amber-400 mt-0.5 flex-shrink-0 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <h5 className="text-sm font-semibold uppercase tracking-wider text-amber-400/90">
                    {t("disclaimer.title")}
                  </h5>
                  <p className="text-sm font-light leading-relaxed">
                    {t("disclaimer.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
