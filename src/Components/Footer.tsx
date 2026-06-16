'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    // Fond ultra-sombre pour ancrer la fin de page
    <footer className="bg-[#050505] text-neutral-400 py-16 border-t border-neutral-900 relative">
      
      {/* Lueur subtile dorée tout en haut du footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent"></div>

      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Navigation principale du Footer */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 md:gap-12 text-xs uppercase tracking-[0.15em] font-medium mb-12"
        >
          <Link href="/" className="hover:text-amber-400 transition-colors duration-300">Accueil</Link>
          <Link href="tarifs" className="hover:text-amber-400 transition-colors duration-300">Prestations</Link>
          <Link href="galerie" className="hover:text-amber-400 transition-colors duration-300">Galerie</Link>
          <Link href="about" className="hover:text-amber-400 transition-colors duration-300">À propos</Link>
          <Link href="conditions" className="hover:text-amber-400 transition-colors duration-300">FAQ</Link>
          <Link href="contact" className="hover:text-amber-400 transition-colors duration-300">Contact</Link>
        </motion.div>

        {/* Séparateur minimaliste */}
        <div className="w-full h-px bg-neutral-900 mb-8"></div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col-reverse md:flex-row justify-between items-center gap-8"
        >
          {/* Mentions légales et copyright (Aligné à gauche sur Desktop) */}
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <Link 
              href="/mentions-legales" 
              className="text-[11px] uppercase tracking-wider text-neutral-500 hover:text-amber-400 transition-colors duration-300"
            >
              Mentions légales - Brunella, Indépendante
            </Link>
            <p className="text-[10px] text-neutral-600 tracking-wider">
              © 2023 - 2025 Brunella. Tous droits réservés.
            </p>
          </div>

          {/* Icônes symboliques (Aligné à droite sur Desktop) */}
          <div className="flex items-center gap-6">
            
            {/* Icône de Confidentialité (Remplacement du tooltip DaisyUI par un groupe au survol) */}
            <div className="group relative flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-neutral-500 hover:text-amber-400 transition-colors duration-300 cursor-help"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </motion.div>
              {/* Tooltip Custom Luxe */}
              <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform duration-200 bg-neutral-900 border border-neutral-800 text-neutral-300 text-[10px] uppercase tracking-wider py-1.5 px-3 rounded whitespace-nowrap">
                Confidentialité absolue
              </span>
            </div>

            {/* Drapeau Français (Légèrement désaturé de base pour ne pas casser le thème, s'illumine au survol) */}
            <div className="group relative flex items-center justify-center">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="cursor-help opacity-70 hover:opacity-100 transition-opacity duration-300 filter  hover:grayscale-0"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" className="h-4 w-6 rounded-[2px] overflow-hidden">
                  <path fill="#fff" d="M0 0h640v480H0z"/>
                  <path fill="#002654" d="M0 0h213.3v480H0z"/>
                  <path fill="#ce1126" d="M426.7 0H640v480H426.7z"/>
                </svg>
              </motion.div>
              {/* Tooltip Custom Luxe */}
              <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform duration-200 bg-neutral-900 border border-neutral-800 text-neutral-300 text-[10px] uppercase tracking-wider py-1.5 px-3 rounded whitespace-nowrap">
                Basée en France
              </span>
            </div>

          </div>
        </motion.div>
      </div>
    </footer>
  )
}