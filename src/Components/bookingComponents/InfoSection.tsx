"use client";

import { CONTACTS } from "@/constants/contacts";
import { ExternalLink } from "lucide-react";
import React from "react";
import { useTranslations } from "next-intl";

function InfoSection() {
  const t = useTranslations("InfoSection");

  return (
    <div className="space-y-6">
      <p className="text-gray-300">{t("description")}</p>
      <div className="bg-[#121212]/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        {/* En-tête de section épuré */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-4">
          <h2 className="text-xl font-light text-white tracking-wide flex items-center gap-3">
            <span className="w-6 h-[1px] bg-amber-500"></span>
            {t("header.title")}
          </h2>
          <p className="text-xs text-gray-400 font-light tracking-wider uppercase">
            {t("header.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* ── CARTE 1 : RECHARGE.FR ── */}
          <a
            href="https://www.recharge.fr/carte-transcash"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between bg-white/[0.02] hover:bg-white/[0.06] rounded-2xl border border-white/5 hover:border-amber-500/30 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden p-5"
          >
            <div>
              {/* Conteneur d'image premium */}
              <div className="w-full h-36 mb-4 overflow-hidden rounded-xl bg-black/40 border border-white/5 relative">
                <img
                  src="https://www.recharge.fr/_next/image?url=https%3A%2F%2Frecharge-prd.asset.akeneo.cloud%2Fproduct_assets%2Fmedia%2FTranscash.png&w=640&q=75"
                  alt="Aperçu de Recharge.fr"
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>

              <h3 className="text-lg font-medium text-white tracking-wide mb-2">
                {t("cards.recharge.title")}
              </h3>
              <p className="text-gray-400 text-xs font-light leading-relaxed mb-6">
                {t("cards.recharge.description")}
              </p>
            </div>

            <div className="flex items-center justify-between text-xs font-medium tracking-wider uppercase text-amber-400 group-hover:text-amber-300 transition-colors pt-2 border-t border-white/5">
              <span>{t("cards.recharge.action")}</span>
              <ExternalLink className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

          {/* ── CARTE 2 : TRANSCASH RECHARGE ── */}
          <a
            href="https://www.transcash-recharge.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between bg-white/[0.02] hover:bg-white/[0.06] rounded-2xl border border-white/5 hover:border-amber-500/30 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden p-5"
          >
            <div>
              <div className="w-full h-36 mb-4 overflow-hidden rounded-xl bg-black/40 border border-white/5 relative">
                <img
                  src="https://www.transcash-recharge.com/sites/uploads/2021/10/Banniere-visuel-coupons_TCRECHARGEnoMSTRD_939x676.png"
                  alt="Aperçu de Transcash Recharge"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>

              <h3 className="text-lg font-medium text-white tracking-wide mb-2">
                {t("cards.transcash.title")}
              </h3>
              <p className="text-gray-400 text-xs font-light leading-relaxed mb-6">
                {t("cards.transcash.description")}
              </p>
            </div>

            <div className="flex items-center justify-between text-xs font-medium tracking-wider uppercase text-amber-400 group-hover:text-amber-300 transition-colors pt-2 border-t border-white/5">
              <span>{t("cards.transcash.action")}</span>
              <ExternalLink className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

          {/* ── CARTE 3 : CARTE DIRECTE ── */}
          <a
            href="https://cartedirecte.fr/cartes-de-paiement/transcash"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between bg-white/[0.02] hover:bg-white/[0.06] rounded-2xl border border-white/5 hover:border-amber-500/30 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden p-5"
          >
            <div>
              <div className="w-full h-36 mb-4 overflow-hidden rounded-xl bg-black/40 border border-white/5 relative">
                <img
                  src="https://cartedirecte.fr/cdn-cgi/imagedelivery/Pk8Ky-xDyeK8TLUvfplArQ/cartes-de-paiement-transcash-banner-1659618230.pngv2-staging-1737042874.0467/public?w=1280"
                  alt="Aperçu de Carte Directe"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>

              <h3 className="text-lg font-medium text-white tracking-wide mb-2">
                {t("cards.carteDirecte.title")}
              </h3>
              <p className="text-gray-400 text-xs font-light leading-relaxed mb-6">
                {t("cards.carteDirecte.description")}
              </p>
            </div>

            <div className="flex items-center justify-between text-xs font-medium tracking-wider uppercase text-amber-400 group-hover:text-amber-300 transition-colors pt-2 border-t border-white/5">
              <span>{t("cards.carteDirecte.action")}</span>
              <ExternalLink className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>
        </div>
      </div>

      <div className="space-y-8 p-6 sm:p-8 bg-[#0e0e0e]/40 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl">
        {/* Section Conciergerie / Contact */}
        <div className="space-y-4">
          <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-rose-400/80">
            {t("assistance.tagline")}
          </h3>
          <p className="text-sm font-light text-gray-300 leading-relaxed max-w-xl">
            {t("assistance.description")}
          </p>

          {/* Boutons de contact discrets et élégants */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={CONTACTS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-light bg-[#25D366]/5 hover:bg-[#25D366]/10 border border-[#25D366]/20 hover:border-[#25D366]/40 text-[#25D366] rounded-full transition-all duration-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
              {t("assistance.whatsapp")}
            </a>
            <a
              href={CONTACTS.telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-light bg-[#0088CC]/5 hover:bg-[#0088CC]/10 border border-[#0088CC]/20 hover:border-[#0088CC]/40 text-[#0088CC] rounded-full transition-all duration-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#0088CC]" />
              {t("assistance.telegram", { handle: CONTACTS.telegram })}
            </a>
          </div>
        </div>

        {/* Section Informations de Réservation */}
        <div className="pt-6 border-t border-white/5 space-y-4">
          <h2 className="text-sm font-medium uppercase tracking-[0.15em] text-white/90">
            {t("confirmation.title")}
          </h2>

          {/* Liste stylisée façon grille de conciergerie */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex gap-3 items-start">
              <span className="text-rose-400/60 text-xs mt-0.5">
                {t("confirmation.step1.num")}
              </span>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                <strong className="text-gray-200 font-normal">
                  {t("confirmation.step1.bold")}
                </strong>
                {t("confirmation.step1.text")}
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-rose-400/60 text-xs mt-0.5">
                {t("confirmation.step2.num")}
              </span>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                {t("confirmation.step2.textBefore")}
                <strong className="text-gray-200 font-normal">
                  {t("confirmation.step2.bold")}
                </strong>
                {t("confirmation.step2.textAfter")}
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-rose-400/60 text-xs mt-0.5">
                {t("confirmation.step3.num")}
              </span>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                {t("confirmation.step3.textBefore")}
                <strong className="text-gray-200 font-normal">
                  {t("confirmation.step3.bold")}
                </strong>
                {t("confirmation.step3.textAfter")}
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-rose-400/60 text-xs mt-0.5">
                {t("confirmation.step4.num")}
              </span>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                {t("confirmation.step4.textBefore")}
                <strong className="text-gray-200 font-normal">
                  {t("confirmation.step4.bold")}
                </strong>
                {t("confirmation.step4.textAfter")}
              </p>
            </div>
          </div>
        </div>

        {/* Signature / Citation Haute Couture */}
        <div className="pt-8 border-t border-white/5 text-center space-y-2">
          <p className="font-serif italic text-xl text-white/70 tracking-wide selection:bg-rose-500/30">
            {t("quote")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
