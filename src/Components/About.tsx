'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
        stiffness: 100
      }
    }
  }

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col lg:flex-row gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          {/* Image de profil */}
          <motion.div 
            variants={item}
            className="w-full lg:w-1/3 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-pink-200 shadow-lg">
              <Image
                src="/bru_about.jpg" // Remplacez par votre image
                alt="Brunella - Portrait"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Texte de présentation */}
          <motion.div 
            variants={container}
            className="w-full lg:w-2/3 space-y-6"
          >
            <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold text-pink-600 font-serif">
              À Propos de Brunella
            </motion.h2>

            <motion.div variants={item} className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-base-200 p-3 rounded-box text-center">
                  <p className="text-sm text-base-content/70">Âge</p>
                  <p className="font-bold">28 ans</p>
                </div>
                <div className="bg-base-200 p-3 rounded-box text-center">
                  <p className="text-sm text-base-content/70">Taille</p>
                  <p className="font-bold">1m65</p>
                </div>
                <div className="bg-base-200 p-3 rounded-box text-center">
                  <p className="text-sm text-base-content/70">Silhouette</p>
                  <p className="font-bold">47kg</p>
                </div>
                <div className="bg-base-200 p-3 rounded-box text-center">
                  <p className="text-sm text-base-content/70">Cheveux</p>
                  <p className="font-bold">Brun</p>
                </div>
              </div>

              <motion.p variants={item} className="">
                🌸 Bienvenue dans l’univers de Brunella Moreau

Appartement climatisé – Boissons fraîches à disposition ❄︎👾

Au cœur vibrant de la ville, je vous reçois dans un écrin discret et raffiné, pensé pour éveiller vos sens et vous offrir une expérience unique, placée sous le signe du bien-être, de la douceur et de la volupté.              </motion.p>

              <motion.p variants={item} className="">
               Je m’appelle Brunella Moreau👩‍🦰❤️, femme française au charme envoûtant, fière de mes origines et de mes courbes voluptueuses. Ma peau douce comme la soie et mon regard profond vous invitent à un voyage entre plaisir, complicité et abandon, où chaque instant devient une parenthèse d’évasion et de sensualité.🫦🥵❤️              
              </motion.p>

              <motion.p variants={item} className="">
                Dans mon cocon chaleureux, chaque rencontre est une expérience authentique : une alliance subtile entre tendresse, passion et écoute. Mes mains parlent le langage du désir, mon corps exprime une énergie douce et magnétique, prête à se mêler à vos envies les plus secrètes.😇👅
              </motion.p>
              <motion.p variants={item} className="">
                Rien n’est laissé au hasard : climatisation, douche, boissons fraîches et stationnement facile devant la résidence… Tout est pensé pour que vous arriviez serein et puissiez profiter pleinement de ce moment suspendu.🥰
              </motion.p>

              <motion.p variants={item} className="">
                Laissez-vous guider, détendez-vous… et goûtez à l’intensité d’un instant où le temps s’arrête, dans les bras d’une femme attentionnée, sensuelle et généreuse.❤️☺️.              
              </motion.p>

              <motion.p variants={item} className="">
                ✨ Informations pratiques

📍 Lieu : Résidence discrète et facilement accessible, stationnement devant l’immeuble.
💦 Confort : Climatisation, douche à disposition, boissons fraîches offertes.

📬 Me contacter

📱 Telegram : @moreau_brunella
📸 Instagram : @brunella_5626
📧 E-mail : moreaubrunella12@gmail.com


💋 À très bientôt

J’ai hâte de vous accueillir pour un moment de détente, de partage et de sensualité, où plaisir rime avec élégance et complicité.

Brunella — votre parenthèse de douceur et de volupté. 🌹
              </motion.p>
              </motion.div>
          </motion.div>
        </motion.div>

        {/* Section supplémentaire - Langues et centres d’intérêt */}
        <motion.div 
          className="mt-16 grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="card bg-base-200 shadow-sm">
            <div className="card-body">
              <h3 className="card-title text-pink-600">Langues parlées</h3>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="badge badge-lg badge-secondary font-semibold px-2">Français</span>
                <span className="badge badge-lg badge-secondary font-semibold px-2">Anglais</span>
                <span className="badge badge-lg badge-secondary font-semibold px-2">Italien</span>
                <span className="badge badge-lg badge-secondary font-semibold px-2">Espagnol</span>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-sm">
            <div className="card-body">
              <h3 className="card-title text-pink-600">Passions</h3>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="badge badge-lg">Voyages</span>
                <span className="badge badge-lg">Gastronomie</span>
                <span className="badge badge-lg">Art moderne</span>
                <span className="badge badge-lg">Vins rares</span>
                <span className="badge badge-lg">Littérature</span>
                <span className="badge badge-lg">Mode</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}