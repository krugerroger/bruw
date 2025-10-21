'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content py-10 border-t border-base-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          {/* Mentions légales et copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link 
              href="/mentions-legales" 
              className="hover:text-pink-600 transition-colors text-sm"
            >
              Mentions légales - Brunella est une travailleuse indépendante
            </Link>
            <p className="text-sm">
              © 2023 - 2025 Brunella – Tous droits réservés
            </p>
          </div>

          {/* Icônes symboliques */}
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="tooltip" 
              data-tip="Confidentialité absolue"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="tooltip" 
              data-tip="Basée en France"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" className="h-5 w-8">
                <path fill="#fff" d="M0 0h640v480H0z"/>
                <path fill="#002654" d="M0 0h213.3v480H0z"/>
                <path fill="#ce1126" d="M426.7 0H640v480H426.7z"/>
              </svg>
            </motion.div>
          </div>
        </motion.div>

        {/* Séparateur */}
        <div className="divider my-6"></div>

        {/* Navigation secondaire */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 text-sm"
        >
          <Link href="/" className="hover:text-pink-600 transition-colors">Accueil</Link>
          <Link href="#prestations" className="hover:text-pink-600 transition-colors">Prestations</Link>
          <Link href="#gallery" className="hover:text-pink-600 transition-colors">Galerie</Link>
          <Link href="#about" className="hover:text-pink-600 transition-colors">À propos</Link>
          <Link href="#contact" className="hover:text-pink-600 transition-colors">Contact</Link>
          <Link href="#faq" className="hover:text-pink-600 transition-colors">FAQ</Link>
        </motion.div>
      </div>
    </footer>
  )
}