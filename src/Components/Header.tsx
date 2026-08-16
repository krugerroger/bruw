"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations("Header");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Structure de données dynamique avec traductions
  const navLinks = [
    { name: t("nav.home"), href: "/", isMainDesktop: true },
    { name: t("nav.rates"), href: "/tarifs", isMainDesktop: true },
    { name: t("nav.practices"), href: "/pratiques", isMainDesktop: true },
    { name: t("nav.massages"), href: "/massages", isMainDesktop: false },
    { name: t("nav.gallery"), href: "/galerie", isMainDesktop: true },
    { name: t("nav.about"), href: "/about", isMainDesktop: true },
    { name: t("nav.testimonials"), href: "/temoignages", isMainDesktop: false },
    { name: t("nav.partners"), href: "/partenaires", isMainDesktop: false },
    { name: t("nav.faq"), href: "/conditions", isMainDesktop: false },
    { name: t("nav.contact"), href: "/contact", isMainDesktop: false },
  ];

  // Filtrage des liens pour le desktop
  const desktopLinks = navLinks.filter((link) => link.isMainDesktop);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "fixed bg-[#0a0a0a]/95 backdrop-blur-md border-neutral-900 py-3"
          : "relative bg-black border-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="relative w-8 h-8 md:w-10 md:h-10 overflow-hidden border border-neutral-800 rounded-sm group-hover:border-amber-400/50 transition-colors duration-500">
            <Image
              src="/logo.jpeg"
              alt="Brunella Logo"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-xl md:text-2xl font-bold font-serif tracking-[0.2em] text-amber-600 group-hover:text-amber-400 uppercase">
            BRUNELLA
          </span>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden xl:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {desktopLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[10px] uppercase tracking-[0.15em] text-neutral-400 hover:text-amber-400 transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}

            {/* Bouton Menu pour accéder au reste */}
            <li>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-[10px] uppercase tracking-[0.15em] text-neutral-400 hover:text-amber-400 transition-colors duration-300"
              >
                {t("nav.menuMore")}
              </button>
            </li>
          </ul>
          <div className="w-[1px] h-6 bg-neutral-800"></div>
          <Link
            href="/reservation"
            className="group relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden border border-amber-400/50 text-amber-400 rounded-sm hover:border-amber-400 transition-all duration-300"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium">
              {t("actions.book")}
            </span>
          </Link>
          <LanguageSwitcher />
        </nav>

        {/* Bouton Hamburger Mobile */}
        {/* Toggle mobile */}
        <div className="flex items-center gap-2 xl:hidden">
          <LanguageSwitcher />
          <button
            className="flex flex-col justify-center items-center w-10 h-10 z-50 text-neutral-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`bg-current h-px w-6 block transition-all duration-300 ${
                isMobileMenuOpen
                  ? "rotate-45 translate-y-[5.5px]"
                  : "-translate-y-1"
              }`}
            />
            <span
              className={`bg-current h-px block transition-all duration-300 ${
                isMobileMenuOpen ? "w-0 opacity-0" : "w-6 my-1"
              }`}
            />
            <span
              className={`bg-current h-px w-6 block transition-all duration-300 ${
                isMobileMenuOpen
                  ? "-rotate-45 -translate-y-[5.5px]"
                  : "translate-y-1"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Menu Overlay Mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] min-h-screen pt-20 px-6 flex flex-col justify-between pb-12"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-8 text-neutral-400 hover:text-amber-400 text-xs tracking-widest uppercase"
            >
              {t("actions.close")}
            </button>

            <ul className="flex flex-col gap-6 items-center text-center mt-10">
              <LanguageSwitcher />
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 }}
                >
                  <Link
                    href={link.href}
                    className="text-xl font-serif tracking-widest text-neutral-300 hover:text-amber-400 uppercase"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Actions mobile : Réservation & Langues */}
            <div className="flex flex-col items-center gap-6 mt-8">
              <Link
                href="/reservation"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full max-w-xs text-center px-6 py-3 border border-amber-400/50 text-amber-400 text-xs uppercase tracking-[0.2em] rounded-sm"
              >
                {t("actions.book")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
