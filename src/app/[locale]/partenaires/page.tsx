"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  Handshake,
  ExternalLink,
  Globe,
  Heart,
  ShieldCheck,
  Star,
  MapPin,
  Flame,
  ArrowUpRight,
  Sparkles,
  Link2,
} from "lucide-react";

export default function PartenairesClient() {
  const t = useTranslations("partners");

  const categories = [
    {
      titre: t("categories.france.title"),
      icon: MapPin,
      tagline: t("categories.france.tagline"),
      sites: [
        {
          nom: t("categories.france.sites.sexemodel.name"),
          url: "https://sexemodel.com",
          desc: t("categories.france.sites.sexemodel.desc"),
        },
        {
          nom: t("categories.france.sites.erosmix.name"),
          url: "https://erosmix.fr",
          desc: t("categories.france.sites.erosmix.desc"),
        },
        {
          nom: t("categories.france.sites.baiser1.name"),
          url: "https://1baiser.com",
          desc: t("categories.france.sites.baiser1.desc"),
        },
        {
          nom: t("categories.france.sites.ladys.name"),
          url: "https://ladys.one",
          desc: t("categories.france.sites.ladys.desc"),
        },
        {
          nom: t("categories.france.sites.escortsexe.name"),
          url: "https://escortsexe.net",
          desc: t("categories.france.sites.escortsexe.desc"),
        },
        {
          nom: t("categories.france.sites.annonce6.name"),
          url: "https://6annonce.net",
          desc: t("categories.france.sites.annonce6.desc"),
        },
        {
          nom: t("categories.france.sites.tescort.name"),
          url: "https://tescort.com",
          desc: t("categories.france.sites.tescort.desc"),
        },
        {
          nom: t("categories.france.sites.niamodel.name"),
          url: "https://niamodel.com",
          desc: t("categories.france.sites.niamodel.desc"),
        },
        {
          nom: t("categories.france.sites.escorte.name"),
          url: "https://escorte.com",
          desc: t("categories.france.sites.escorte.desc"),
        },
      ],
    },
    {
      titre: t("categories.libertine.title"),
      icon: Flame,
      tagline: t("categories.libertine.tagline"),
      sites: [
        {
          nom: t("categories.libertine.sites.jmdate.name"),
          url: "https://jm-date.com",
          desc: t("categories.libertine.sites.jmdate.desc"),
        },
        {
          nom: t("categories.libertine.sites.lovesita.name"),
          url: "https://lovesita.com",
          desc: t("categories.libertine.sites.lovesita.desc"),
        },
        {
          nom: t("categories.libertine.sites.vivasexe.name"),
          url: "https://vivasexe.com",
          desc: t("categories.libertine.sites.vivasexe.desc"),
        },
        {
          nom: t("categories.libertine.sites.renole.name"),
          url: "https://renole.com",
          desc: t("categories.libertine.sites.renole.desc"),
        },
      ],
    },
    {
      titre: t("categories.international.title"),
      icon: Globe,
      tagline: t("categories.international.tagline"),
      sites: [
        {
          nom: t("categories.international.sites.devozki.name"),
          url: "https://devozki.com",
          desc: t("categories.international.sites.devozki.desc"),
        },
        {
          nom: t("categories.international.sites.hunqz.name"),
          url: "https://hunqz.com",
          desc: t("categories.international.sites.hunqz.desc"),
        },
        {
          nom: t("categories.international.sites.escorts69.name"),
          url: "https://escorts69.fr",
          desc: t("categories.international.sites.escorts69.desc"),
        },
        {
          nom: t("categories.international.sites.fgirl.name"),
          url: "https://fgirl.ch",
          desc: t("categories.international.sites.fgirl.desc"),
        },
        {
          nom: t("categories.international.sites.escort46.name"),
          url: "https://escort46.fr",
          desc: t("categories.international.sites.escort46.desc"),
        },
        {
          nom: t("categories.international.sites.escortLuxembourg.name"),
          url: "https://escort-luxembourg.lu",
          desc: t("categories.international.sites.escortLuxembourg.desc"),
        },
        {
          nom: t("categories.international.sites.encantadoras.name"),
          url: "https://encantadoras.com",
          desc: t("categories.international.sites.encantadoras.desc"),
        },
        {
          nom: t("categories.international.sites.escortGalleries.name"),
          url: "https://escort-galleries.com",
          desc: t("categories.international.sites.escortGalleries.desc"),
        },
        {
          nom: t("categories.international.sites.topEscortBabes.name"),
          url: "https://topescortbabes.com",
          desc: t("categories.international.sites.topEscortBabes.desc"),
        },
        {
          nom: t("categories.international.sites.escortlistVip.name"),
          url: "https://escortlist.vip",
          desc: t("categories.international.sites.escortlistVip.desc"),
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#070708] text-zinc-400 font-sans selection:bg-amber-500/20 antialiased overflow-x-hidden">
      {/* HEADER SECTION HAUTE COUTURE */}
      <section className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        {/* Lueur d'arrière-plan */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          <div className="flex items-center gap-2 text-amber-500 bg-amber-500/5 px-4 py-2 rounded-full border border-amber-500/10 font-mono text-[10px] uppercase tracking-[0.4em] mb-8 shadow-sm backdrop-blur-sm">
            <Sparkles size={12} /> {t("trustLabel")}
          </div>
          <h1 className="text-4xl md:text-6xl text-zinc-100 font-serif font-light uppercase tracking-tighter max-w-4xl mx-auto leading-[1.1]">
            {t("title")}{" "}
            <span className="italic font-normal text-amber-500">
              {t("titleHighlight")}
            </span>{" "}
            {t("titleEnd")}
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-500 font-serif italic text-base md:text-lg leading-relaxed mt-6">
            &ldquo;{t("quote")}&rdquo;
          </p>
          <div className="mx-auto mt-10 h-px w-16 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
        </div>
      </section>

      {/* LIGNE DE SÉPARATION DÉCORATIVE */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent my-12" />
      </div>

      {/* CONTENU PRINCIPAL */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="space-y-28">
          {categories.map((cat, idx) => {
            const CategoryIcon = cat.icon;
            return (
              <section key={idx} className="space-y-8">
                {/* ENTÊTE DE CATÉGORIE */}
                <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-900 pb-5 gap-2">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-center text-amber-500 shadow-inner">
                      <CategoryIcon size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h2 className="text-sm uppercase tracking-[0.25em] text-zinc-100 font-mono font-bold">
                        {cat.titre}
                      </h2>
                      <p className="text-xs text-zinc-500 font-serif italic mt-0.5">
                        {cat.tagline}
                      </p>
                    </div>
                  </div>
                  <div className="text-[10px] font-mono text-zinc-600 tracking-wider">
                    {t("platformsReferenced", { count: cat.sites.length })}
                  </div>
                </div>

                {/* GRILLE D'AFFICHAGE DE CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {cat.sites.map((site, i) => (
                    <Link
                      href={site.url}
                      key={i}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative p-6 bg-zinc-900/20 hover:bg-zinc-900/40 border border-zinc-800/50 hover:border-amber-500/30 rounded-2xl transition-all duration-500 hover:-translate-y-1 shadow-md hover:shadow-xl hover:shadow-amber-500/5 flex flex-col justify-between min-h-[175px]"
                    >
                      <div>
                        {/* Barre supérieure interne à la card */}
                        <div className="mb-4 flex items-center justify-between">
                          <div className="w-9 h-9 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-amber-500 group-hover:bg-amber-500/5 group-hover:border-amber-500/20 transition-all duration-500">
                            <Link2 size={15} strokeWidth={1.5} />
                          </div>

                          {/* Badge indicateur discret */}
                          <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-[9px] font-mono tracking-wider uppercase text-zinc-400">
                            {t("visit")}{" "}
                            <ExternalLink size={9} className="text-amber-500" />
                          </div>
                        </div>

                        {/* Textes descriptifs */}
                        <div className="space-y-2">
                          <h3 className="text-base text-zinc-100 font-serif font-medium tracking-wide group-hover:text-amber-400 transition-colors duration-300 flex items-center gap-1.5">
                            {site.nom}
                          </h3>
                          <p className="text-xs text-zinc-500 font-normal leading-relaxed line-clamp-2 pl-0.5 group-hover:text-zinc-400 transition-colors duration-300">
                            {site.desc}
                          </p>
                        </div>
                      </div>

                      {/* Effet lumineux de bordure inférieure au survol */}
                      <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-amber-500/0 group-hover:via-amber-500/40 to-transparent transition-all duration-700" />
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* CARTE DE DEMANDE DE COLLABORATION (CTA) */}
        <section className="mt-40 rounded-3xl bg-gradient-to-b from-zinc-900/40 to-zinc-950/10 border border-zinc-800/50 p-8 md:p-14 text-center relative overflow-hidden backdrop-blur-sm max-w-4xl mx-auto shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent opacity-50 pointer-events-none" />

          <div className="relative z-10 space-y-6 max-w-xl mx-auto">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/5 border border-amber-500/10 flex items-center justify-center text-amber-500 mx-auto shadow-md">
              <Handshake size={20} strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl md:text-3xl text-zinc-100 font-serif font-light tracking-tight">
              {t("cta.title")}
            </h2>
            <p className="text-zinc-500 font-serif italic text-sm leading-relaxed">
              {t("cta.description")}
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-zinc-100 border border-zinc-100 text-zinc-950 uppercase tracking-[0.2em] text-[10px] font-mono font-bold hover:bg-amber-500 hover:border-amber-500 hover:text-zinc-950 transition-all duration-300 shadow-md rounded-xl active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50"
              >
                {t("cta.button")} <ArrowUpRight size={13} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
          <Heart
            size={180}
            className="absolute -bottom-16 -left-16 text-zinc-900/10 -rotate-12 pointer-events-none select-none"
          />
        </section>

        {/* BOÎTIERS DES BADGES DE CONFIANCE CRÉDIBLES (TRUST CHIPS) */}
        <div className="mt-28 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-zinc-900 pt-12 max-w-3xl mx-auto">
          <div className="flex items-center gap-3 bg-zinc-950/40 border border-zinc-900/60 rounded-xl px-4 py-3 shadow-sm hover:border-amber-500/20 transition-colors">
            <div className="p-1.5 rounded-lg bg-zinc-900 text-amber-500/80">
              <ShieldCheck size={16} />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
              {t("trustChips.verified")}
            </span>
          </div>
          <div className="flex items-center gap-3 bg-zinc-950/40 border border-zinc-900/60 rounded-xl px-4 py-3 shadow-sm hover:border-amber-500/20 transition-colors">
            <div className="p-1.5 rounded-lg bg-zinc-900 text-amber-500/80">
              <Star size={16} />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
              {t("trustChips.exclusive")}
            </span>
          </div>
          <div className="flex items-center gap-3 bg-zinc-950/40 border border-zinc-900/60 rounded-xl px-4 py-3 shadow-sm hover:border-amber-500/20 transition-colors">
            <div className="p-1.5 rounded-lg bg-zinc-900 text-amber-500/80">
              <Handshake size={16} />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
              {t("trustChips.reciprocal")}
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
