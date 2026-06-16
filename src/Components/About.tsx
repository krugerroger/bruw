'use client'

import { CONTACTS } from '@/constants/contacts'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 20
      }
    }
  }

  return (
    <section id="about" className="py-24 bg-[#0a0a0a] text-white overflow-hidden relative">
      
      {/* Ornement décoratif de fond */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row gap-16 items-center lg:items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          {/* Image de profil */}
          <motion.div 
            variants={item}
            className="w-full lg:w-2/5 flex justify-center lg:justify-end lg:sticky lg:top-32"
          >
            <div className="relative group">
              {/* Halo doré subtil derrière l'image */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-amber-500/20 to-transparent rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border border-neutral-800 shadow-2xl">
                <Image
                  src="/bru_about.jpg" // Remplacez par votre image
                  alt="Brunella - Portrait"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </motion.div>

          {/* Texte de présentation */}
          <motion.div 
            variants={container}
            className="w-full lg:w-3/5 space-y-8"
          >
            <motion.div variants={item}>
              <span className="text-xs uppercase tracking-[0.3em] text-amber-500/80 block mb-3">Découvrir</span>
              <h2 className="text-4xl md:text-5xl font-light text-white font-serif mb-6">
                À Propos de <span className="text-amber-500 italic">Brunella</span>
              </h2>
              <div className="w-16 h-px bg-amber-500/40"></div>
            </motion.div>

            {/* Grille de caractéristiques */}
            <motion.div variants={item} className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
              {[
                { label: "Âge", value: "28 ans" },
                { label: "Taille", value: "1m70" },
                { label: "Silhouette", value: "52kg" },
                { label: "Cheveux", value: "Brun" }
              ].map((stat, idx) => (
                <div key={idx} className="border border-neutral-900 bg-neutral-950/50 p-4 rounded-xl text-center hover:border-amber-500/30 transition-colors duration-300">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-amber-500/70 mb-1">{stat.label}</p>
                  <p className="text-lg text-white font-serif">{stat.value}</p>
                </div>
              ))}
            </motion.div>

            {/* Paragraphes de description */}
            <motion.div variants={item} className="space-y-6 text-neutral-400 font-light leading-relaxed text-sm md:text-base">
              <p className="text-neutral-200 text-lg">
                🌸 Bienvenue dans l’univers de Brunella Moreau
              </p>
              <p>
                <span className="text-amber-500/80">Appartement climatisé – Boissons fraîches à disposition ❄︎👾</span><br/>
                Au cœur vibrant de la ville, je vous reçois dans un écrin discret et raffiné, pensé pour éveiller vos sens et vous offrir une expérience unique, placée sous le signe du bien-être, de la douceur et de la volupté.
              </p>
              <p>
                Je m’appelle Brunella Moreau 👩‍🦰❤️, femme française au charme envoûtant, fière de mes origines et de mes courbes voluptueuses. Ma peau douce comme la soie et mon regard profond vous invitent à un voyage entre plaisir, complicité et abandon, où chaque instant devient une parenthèse d’évasion et de sensualité. 🫦🥵❤️
              </p>
              <p>
                Dans mon cocon chaleureux, chaque rencontre est une expérience authentique : une alliance subtile entre tendresse, passion et écoute. Mes mains parlent le langage du désir, mon corps exprime une énergie douce et magnétique, prête à se mêler à vos envies les plus secrètes. 😇👅
              </p>
              <p>
                Rien n’est laissé au hasard : climatisation, douche, boissons fraîches et stationnement facile devant la résidence… Tout est pensé pour que vous arriviez serein et puissiez profiter pleinement de ce moment suspendu. 🥰
              </p>
              <p>
                Laissez-vous guider, détendez-vous… et goûtez à l’intensité d’un instant où le temps s’arrête, dans les bras d’une femme attentionnée, sensuelle et généreuse. ❤️☺️
              </p>
            </motion.div>

            {/* Informations pratiques et Contact */}
            <motion.div variants={item} className="mt-10 p-6 border border-neutral-900 rounded-2xl bg-neutral-950/30">
              <h3 className="text-amber-500 text-sm uppercase tracking-widest mb-4">✨ Informations pratiques</h3>
              <ul className="space-y-3 text-sm text-neutral-300 font-light mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-0.5">📍</span> 
                  <span><strong className="text-white font-medium">Lieu :</strong> Résidence discrète et facilement accessible, stationnement devant l’immeuble.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-0.5">💦</span> 
                  <span><strong className="text-white font-medium">Confort :</strong> Climatisation, douche à disposition, boissons fraîches offertes.</span>
                </li>
              </ul>

              <h3 className="text-amber-500 text-sm uppercase tracking-widest mb-4">📬 Me contacter</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-neutral-300 font-light mb-6">
                <a href={CONTACTS.telegramLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                  <span className="text-lg">📱</span> Telegram : {CONTACTS.telegram}
                </a>
                <a href={`mailto:${CONTACTS.email}`} className="flex items-center gap-2 hover:text-amber-400 transition-colors sm:col-span-2">
                  <span className="text-lg">📧</span> E-mail : {CONTACTS.email}
                </a>
                <a href={CONTACTS.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                  <span className="text-lg">💬</span> WhatsApp : {CONTACTS.phoneNumber}
                </a>
              </div>

              <div className="pt-6 border-t border-neutral-900 text-center">
                <p className="text-neutral-400 text-sm italic font-light mb-2">💋 À très bientôt</p>
                <p className="text-neutral-500 text-xs">
                  J’ai hâte de vous accueillir pour un moment de détente, de partage et de sensualité, où plaisir rime avec élégance et complicité.<br/><br/>
                  <span className="text-amber-500/70">Brunella — votre parenthèse de douceur et de volupté. 🌹</span>
                </p>
              </div>
            </motion.div>

          </motion.div>
        </motion.div>

        {/* Section supplémentaire - Langues et centres d’intérêt */}
        <motion.div 
          className="mt-24 pt-16 border-t border-neutral-900 grid md:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Langues */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-amber-500/80 mb-6 flex items-center gap-4">
              Langues parlées
              <span className="h-px flex-1 bg-neutral-900"></span>
            </h3>
            <div className="flex flex-wrap gap-3">
              {['Français', 'Anglais', 'Italien', 'Espagnol'].map((lang, i) => (
                <span key={i} className="px-5 py-2 border border-neutral-800 rounded-full text-sm font-light text-neutral-300 hover:border-amber-500/40 hover:text-amber-400 transition-colors duration-300 cursor-default">
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Passions */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-amber-500/80 mb-6 flex items-center gap-4">
              Passions
              <span className="h-px flex-1 bg-neutral-900"></span>
            </h3>
            <div className="flex flex-wrap gap-3">
              {['Voyages', 'Gastronomie', 'Art moderne', 'Vins rares', 'Littérature', 'Mode'].map((passion, i) => (
                <span key={i} className="px-5 py-2 bg-neutral-950 border border-neutral-900 rounded-full text-sm font-light text-neutral-400 hover:bg-neutral-900 transition-colors duration-300 cursor-default">
                  {passion}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}