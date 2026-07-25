"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations("Header");
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreRef = useRef<HTMLLIElement>(null);

  // Liens de navigation
  const navLinks = [
    { name: t("nav.home"), href: "/", isMainDesktop: true },
    { name: t("nav.rates"), href: "/tarifs", isMainDesktop: true },
    { name: t("nav.practices"), href: "/pratiques", isMainDesktop: true },
    { name: t("nav.gallery"), href: "/galerie", isMainDesktop: true },
    { name: t("nav.about"), href: "/about", isMainDesktop: true },
    { name: t("nav.testimonials"), href: "/temoignages", isMainDesktop: false },
    { name: t("nav.faq"), href: "/conditions", isMainDesktop: false },
    { name: t("nav.contact"), href: "/contact", isMainDesktop: false },
  ];

  const desktopLinks = navLinks.filter((link) => link.isMainDesktop);
  const moreLinks = navLinks.filter((link) => !link.isMainDesktop);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le dropdown "Plus" si clic à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setIsMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Empêcher le scroll quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "fixed bg-[#0a0a0a]/95 backdrop-blur-xl border-neutral-900 shadow-lg shadow-black/10 py-3"
          : "relative bg-black border-transparent py-5"
      } border-b`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Logo amélioré */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          onClick={() => {
            setIsMobileMenuOpen(false);
            setIsMoreOpen(false);
          }}
        >
          <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-sm transition-all duration-500 group-hover:shadow-[0_0_15px_rgba(251,191,36,0.3)]">
            <div className="absolute inset-0 border border-neutral-800 group-hover:border-amber-400/60 transition-colors duration-500 rounded-sm z-10" />
            <Image
              src="/logo.jpeg"
              alt="Brunella Logo"
              fill
              className="object-cover scale-110 transition-transform duration-700 group-hover:scale-100"
            />
          </div>
          <span className="text-xl md:text-2xl font-bold font-serif tracking-[0.2em] text-amber-600 group-hover:text-amber-400 transition-colors duration-300">
            BRUNELLA
          </span>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden xl:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {desktopLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                      isActive
                        ? "text-amber-400"
                        : "text-neutral-400 hover:text-amber-400"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute -bottom-1.5 left-0 h-[1px] bg-amber-400 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}

            {/* Dropdown "Plus" */}
            <li className="relative" ref={moreRef}>
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                onMouseEnter={() => setIsMoreOpen(true)}
                className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 hover:text-amber-400 transition-colors duration-300 flex items-center gap-1"
              >
                {t("nav.menuMore")}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`transition-transform duration-300 ${
                    isMoreOpen ? "rotate-180" : ""
                  }`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              <AnimatePresence>
                {isMoreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -5, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -5, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    onMouseLeave={() => setIsMoreOpen(false)}
                    className="absolute right-0 mt-3 w-48 bg-[#0a0a0a]/95 backdrop-blur-xl border border-neutral-800 rounded-sm shadow-2xl py-2"
                  >
                    {moreLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMoreOpen(false)}
                        className={`block px-5 py-2.5 text-[10px] uppercase tracking-[0.15em] transition-colors duration-200 ${
                          pathname === link.href
                            ? "text-amber-400 bg-amber-400/5"
                            : "text-neutral-400 hover:text-amber-400 hover:bg-neutral-900/50"
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>

          {/* Séparateur */}
          <div className="w-[1px] h-5 bg-neutral-800" />

          {/* Bouton réservation avec effet de lumière */}
          <Link
            href="/reservation"
            className="group relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden border border-amber-400/50 text-amber-400 rounded-sm hover:border-amber-400 transition-all duration-300"
          >
            <span className="absolute inset-0 w-0 bg-amber-400/10 transition-all duration-300 group-hover:w-full" />
            <span className="relative text-[10px] uppercase tracking-[0.2em] font-medium">
              {t("actions.book")}
            </span>
          </Link>

          <LanguageSwitcher />
        </nav>

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

      {/* Overlay mobile amélioré */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col justify-between"
          >
            {/* Bouton fermer */}
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-8 text-neutral-400 hover:text-amber-400 text-xs tracking-[0.2em] uppercase"
            >
              {t("actions.close")}
            </motion.button>

            {/* Navigation */}
            <ul className="flex flex-col items-center gap-8 pt-28">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-2xl font-serif tracking-[0.15em] uppercase transition-colors duration-300 ${
                      pathname === link.href
                        ? "text-amber-400"
                        : "text-neutral-300 hover:text-amber-400"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Call-to-action mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col items-center gap-6 pb-12 px-6"
            >
              <Link
                href="/reservation"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full max-w-xs text-center px-8 py-3.5 border border-amber-400/60 text-amber-400 text-xs uppercase tracking-[0.2em] rounded-sm hover:bg-amber-400/10 transition-all duration-300"
              >
                {t("actions.book")}
              </Link>
              <p className="text-neutral-600 text-[10px] tracking-[0.3em] uppercase">
                © Brunella {new Date().getFullYear()}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
