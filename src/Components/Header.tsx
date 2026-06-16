'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Effet pour rendre le fond plus opaque au scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Raccourcissement visuel optionnel de certains titres très longs pour le desktop
  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Prestations & Tarifs', href: '/tarifs' },
    { name: 'Pratiques', href: '/pratiques' },
    { name: 'Galerie', href: '/galerie' },
    { name: 'À propos', href: '/about' },
    { name: 'Témoignages', href: '/temoignages' }, // Raccourci de 'Commentaires/Témoignages' pour l'élégance
    { name: 'Conditions & FAQ', href: '/conditions' }, // Raccourci
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-neutral-900 py-3' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        
        {/* Logo Section */}
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
              loading="lazy"
            />
          </div>
          <span className="text-xl md:text-2xl font-bold font-serif tracking-[0.2em] text-amber-600 group-hover:text-amber-400 transition-colors duration-500 uppercase">
            BRUNELLA
          </span>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden xl:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className="text-[10px] uppercase tracking-[0.15em] text-neutral-400 hover:text-amber-400 transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Ligne de séparation subtile */}
          <div className="w-[1px] h-6 bg-neutral-800"></div>

          {/* Bouton Réserver Desktop (Style Luxe Outlined) */}
          <Link
            href="/reservation"
            className="group relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden border border-amber-400/50 bg-transparent text-amber-400 rounded-sm transition-all duration-300 hover:border-amber-400"
          >
            <span className="absolute inset-0 w-full h-full bg-amber-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            <span className="relative text-[10px] uppercase tracking-[0.2em] font-medium group-hover:text-amber-300">
              Réserver
            </span>
          </Link>
        </nav>

        {/* Bouton Menu Mobile (Hamburger Élégant) */}
        <button 
          className="xl:hidden flex flex-col justify-center items-center w-8 h-8 z-50 text-neutral-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`bg-current h-px w-6 block transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[5px]' : '-translate-y-1'}`}></span>
          <span className={`bg-current h-px block transition-all duration-300 ${isMobileMenuOpen ? 'w-0 opacity-0' : 'w-6 my-1'}`}></span>
          <span className={`bg-current h-px w-6 block transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[5px]' : 'translate-y-1'}`}></span>
        </button>
      </div>

      {/* Menu Mobile Plein Écran (Overlay) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] min-h-screen pt-20 px-6 flex flex-col xl:hidden"
          >
            <ul className="flex flex-col gap-4 items-center text-center">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link 
                    href={link.href} 
                    className="text-lg font-serif tracking-widest text-neutral-300 hover:text-amber-400 transition-colors uppercase block py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
              
              <motion.div 
                className="w-12 h-px bg-neutral-800 my-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              ></motion.div>

              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="w-full max-w-xs"
              >
                <Link
                  href="/reservation"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center px-8 py-4 border border-amber-400 bg-amber-400/5 text-amber-400 text-xs uppercase tracking-[0.2em] hover:bg-amber-400 hover:text-black transition-all duration-300"
                >
                  Demander une réservation
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}