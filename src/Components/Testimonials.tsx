'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
// J'assume que ce fichier existe et contient les données
import { testimonials } from '@/constants/testimonials'
import { ArrowUpRight, PenLine } from 'lucide-react'

export default function Testimonials() {
  // État pour le formulaire
  const [name, setName] = useState('')
  const [rating, setRating] = useState(5)
  const [hoverRating, setHoverRating] = useState(0)
  const [comment, setComment] = useState('')



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Logique de soumission ici (ex: API call)
    console.log({ name, rating, comment })
    // Reset form
    setName('')
    setRating(5)
    setComment('')
  }

  return (
    <section id="testimonies" className="py-32 bg-[#0a0a0a] text-white relative overflow-hidden">
      
      {/* Élément décoratif subtil en arrière-plan */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-amber-400/40 to-transparent"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* En-tête de section Premium */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24 flex flex-col items-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-amber-400/70 block mb-4">Livre d'Or</span>
          <h2 className="text-4xl md:text-5xl font-light font-serif mb-6 tracking-wide text-white">Ils me font confiance</h2>
          <div className="w-16 h-[1px] bg-amber-400/30 mx-auto mb-8"></div>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
            Des moments partagés, des souvenirs précieux. Quelques confidences de ceux qui ont apprécié ma compagnie.
          </p>
        </motion.div>

        {/* Grille de témoignages stylisés en cartes Premium */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="group relative border border-neutral-900 bg-neutral-950/50 p-10 transition-colors duration-500 hover:border-amber-400/30 overflow-hidden"
            >
              {/* Ligne dorée subtile au survol sur le bord supérieur */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Guillemet décoratif en filigrane */}
              <div className="absolute top-6 left-8 text-9xl font-serif text-neutral-900 select-none pointer-events-none opacity-50 group-hover:text-amber-900/10 transition-colors duration-500">
                "
              </div>

              <div className="relative z-10 flex flex-col h-full">
                {/* Étoiles (Or et minimalistes) */}
                <div className="mb-6 flex gap-1 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-neutral-800 fill-neutral-800'}`}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>

                {/* Citation stylisée */}
                <blockquote className="text-lg text-neutral-300 font-semibold leading-relaxed mb-8 flex-grow">
                  {testimonial.text}
                </blockquote>

                {/* Séparateur or subtil */}
                <div className="w-full h-px bg-neutral-900 mb-6 group-hover:bg-amber-400/20 transition-colors duration-500"></div>

                {/* Auteur et date (Style Joaillerie) */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-400/30 text-amber-400 font-serif text-lg bg-neutral-950 shadow-inner">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-medium tracking-wide text-neutral-200 uppercase text-xs">
                        {testimonial.name}
                      </h3>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                    {testimonial.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* NOUVELLE STRUCTURE DE FORMULAIRE EN 2 COLONNES ASYMÉTRIQUES */}
        <section className="mt-56 pt-24 border-t border-zinc-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Colonne gauche : Label d'intention */}
            <div className="lg:col-span-4 space-y-4">
              <div className="inline-block p-3 bg-zinc-950 border border-zinc-900 shadow-sm mb-2">
                <PenLine className="text-amber-500/70" size={20} strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl text-zinc-100 font-light uppercase tracking-tight">
                Laisser un commentaire<span className="text-amber-500">.</span>
              </h2>
              <p className="text-xs text-zinc-500 font-sans leading-relaxed tracking-wide">
                Votre retour est essentiel. Il permet d'ancrer nos moments partagés dans la continuité. Seul votre pseudonyme sera visible en ligne pour préserver le secret de votre démarche.
              </p>
            </div>

            {/* Colonne droite : Formulaire ultra-minimal épuré */}
            <form className="lg:col-span-8 grid gap-8 bg-zinc-950 p-8 md:p-12 border border-zinc-900 shadow-sm">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-1">
                  <label className="text-[8px] uppercase tracking-widest font-sans font-bold text-zinc-500">Identité / Pseudo</label>
                  <input 
                    type="text" 
                    placeholder="Ex: Marc-A." 
                    className="bg-transparent border-b border-zinc-900 focus:border-amber-600 text-zinc-200 outline-none py-3 text-sm font-sans italic transition-colors placeholder:text-zinc-700"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[8px] uppercase tracking-widest font-sans font-bold text-zinc-500">Adresse de contact confidentielle</label>
                  <input 
                    type="email" 
                    placeholder="Nom@domaine.com" 
                    className="bg-transparent border-b border-zinc-900 focus:border-amber-600 text-zinc-200 outline-none py-3 text-sm font-sans italic transition-colors placeholder:text-zinc-700"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[8px] uppercase tracking-widest font-sans font-bold text-zinc-500">Votre récit</label>
                <textarea 
                  rows={4} 
                  placeholder="Partager les sensations de notre entrevue..." 
                  className="bg-transparent border-b border-zinc-900 focus:border-amber-600 text-zinc-200 outline-none py-3 text-sm font-sans italic transition-colors resize-none placeholder:text-zinc-700"
                />
              </div>
              <div className="pt-4">
                <button type="button" className="group flex items-center gap-3 px-8 py-4 bg-zinc-900 text-stone-100 uppercase tracking-[0.3em] text-[10px] font-mono font-bold hover:bg-amber-600 transition-colors duration-300 shadow-sm border border-zinc-800 hover:border-transparent">
                  <span>Transmettre le message</span>
                  <ArrowUpRight size={12} className="text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </form>

          </div>
        </section>

        {/* Footer de la section (Disclaimer) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-center mt-32 border-t border-neutral-900 pt-16"
        >
          <p className="text-[11px] uppercase tracking-[0.1em] text-neutral-600 leading-relaxed max-w-sm mx-auto">
            * Tous les témoignages proviennent de rencontres authentiques. Les prénoms ont été modifiés par respect absolu de la confidentialité.<br />
            Les nouveaux commentaires sont soumis à modération avant publication.
          </p>
        </motion.div>
      </div>
    </section>
  )
}