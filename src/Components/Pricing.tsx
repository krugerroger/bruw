'use client'

import { motion } from 'framer-motion'
// J'assume que ServiceCards sera stylisé dynamiquement pour correspondre au nouveau thème
import ServiceCards from './ServiceCards'
import { Clock, Lightbulb, Ticket } from 'lucide-react';

const options = [
  "Déplacement international (+50% du tarif horaire)",
  "Tenues haute couture (supplément 100-300€)",
  "Location d’espaces privatifs (sur devis)",
  "Photographie professionnelle (option 200€/h)",
  "Activités spéciales (à convenir ensemble)"
]

export default function Pricing() {
  // Animations épurées (Ease-out quart)
  const easeOutQuart = [0.165, 0.84, 0.44, 1];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: easeOutQuart }
    }
  }

  return (
    // Fond sombre Premium
    <section id="prestations" className="py-24 bg-[#0a0a0a] text-neutral-200 overflow-hidden">
      <div className="container mx-auto px-3 max-w-7xl">
        
        {/* En-tête de section style "Haute Joaillerie" */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="text-center mb-20 flex flex-col items-center"
        >
          <motion.span variants={itemVariants} className="text-xs uppercase tracking-[0.3em] text-amber-400/80 block mb-3">
            L'Excellence sur mesure
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-light text-white mb-6 font-serif tracking-wide">
            Prestations & Honoraires
          </motion.h2>
          <motion.div variants={itemVariants} className="w-16 h-px bg-amber-400"></motion.div>
        </motion.div>

        {/* Grille principale des cartes ServiceCards (Doit être adaptée au thème sombre/or) */}
        <div className="mb-12">
          <ServiceCards />
        </div>

        {/* Grille d'informations professionnelles & Options */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20"
        >
          
          {/* Carte 1: Options Premium */}
          <motion.div 
            variants={itemVariants}
            className="group bg-neutral-900 border border-neutral-800 p-10 rounded-2xl shadow-2xl transition-all duration-500 hover:border-amber-400/30 hover:-translate-y-1"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-white tracking-wide">Expériences Exclusives</h3>
            </div>
            
            <ul className="space-y-4 text-neutral-300 font-light">
              {options.map((option, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-400/70 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>{option}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Carte 2: Incall / Réception */}
          <motion.div 
            variants={itemVariants}
            className="group bg-neutral-900 border border-neutral-800 p-10 rounded-2xl shadow-2xl transition-all duration-500 hover:border-amber-400/30 hover:-translate-y-1"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-white tracking-wide">Réception (Incall)</h3>
            </div>
            
            <div className="space-y-6 text-neutral-300 font-light">
              <div className="border-l-2 border-amber-400/30 pl-6 py-1">
                <p className="text-amber-400 font-medium mb-1">Horaires & Cadre :</p>
                <p>De 08h00 à 00h00, dans le cadre somptueux d'une villa privée. Service attentionné, discrétion totale.</p>
              </div>
              <div className="border-l-2 border-neutral-700 pl-6 py-1 hover:border-amber-400/30 transition-colors">
                <p className="text-neutral-400 font-medium mb-1 group-hover:text-amber-400">Rafraîchissements :</p>
                <p className="text-sm">Sélection de softs premium, boissons chaudes d'exception, alcools fins.</p>
              </div>
              <div className="border-l-2 border-neutral-700 pl-6 py-1 hover:border-amber-400/30 transition-colors">
                <p className="text-neutral-400 font-medium mb-1 group-hover:text-amber-400">Hygiène & Confort :</p>
                <p className="text-sm leading-relaxed">Irréprochable. Douche requise dès l'arrivée. Linge de maison de haute qualité et produits de toilette de marque à disposition.</p>
              </div>
            </div>
          </motion.div>

          {/* Carte 3: Accompagnement Extérieur */}
          <motion.div 
            variants={itemVariants}
            className="group bg-neutral-900 border border-neutral-800 p-10 rounded-2xl shadow-2xl transition-all duration-500 hover:border-amber-400/30 hover:-translate-y-1"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-white tracking-wide">Compagnie d'Élite (Outcall)</h3>
            </div>
            
            <div className="space-y-5 text-neutral-300 font-light leading-relaxed">
              <div className="flex justify-between items-baseline bg-neutral-800/50 p-5 rounded-lg border border-neutral-700 group-hover:border-amber-400/20">
                <span className="font-semibold text-lg text-white">1h d'accompagnement</span>
                <span className="text-2xl font-serif text-amber-400">150€</span>
              </div>
              <p className="text-neutral-400 text-sm italic">(Tarif hors intimité)</p>
              <p>
                Dîners d'affaires, soirées de gala, opéras, ou simples moments de complicité en terrasse. 
                Une première rencontre idéale avant d'envisager des accompagnements de longue durée (week-end, voyages).
              </p>
            </div>
          </motion.div>

          {/* Carte 4: Modalités de Réservation & Paiement */}
          <motion.div 
            variants={itemVariants}
            className="group bg-neutral-900 border border-neutral-800 p-10 rounded-2xl shadow-2xl transition-all duration-500 hover:border-amber-400/30 hover:-translate-y-1"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-white tracking-wide">Protocole de Réservation</h3>
            </div>
            
            <div className="space-y-6 text-neutral-300 font-light">
              <div className="bg-amber-400/5 border border-amber-400/20 p-5 rounded-lg text-sm leading-relaxed">
                <p className="font-medium text-amber-400 mb-2">Garantie de Sérieux :</p>
                Paiement intégral requis pour bloquer votre créneau exclusif. Cette procédure assure des conditions d'accueil optimales et témoigne de votre engagement réciproque.
              </div>

              <div className="space-y-3">
                <p className="font-medium text-neutral-300">Règlements acceptés :</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    {icon: Ticket, text: "Coupon Transcash"},
                    {icon: Lightbulb, text: "Virement Instantané"},
                    {icon: Clock, text: "PayPal"},
                    {icon: Ticket, text: "Wero"}
                  ].map((pay, i) => (
                    <span key={i} className={`flex items-center gap-2 text-sm bg-neutral-800 px-4 py-2 rounded-full border border-neutral-700 ${pay.strike ? 'opacity-50' : ''}`}>
                      <pay.icon className="w-4 h-4 text-amber-400" />
                      <span>{pay.text}</span>
                    </span>
                  ))}
                </div>
                <p className="text-xs text-neutral-500 mt-2">* Espèces exclues pour le premier rendez-vous.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Note de bas de page & Politique d'annulation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center max-w-3xl mx-auto border-t border-neutral-900 pt-10"
        >
          <p className="text-xs text-neutral-600 mb-5 tracking-wide">
            Note : Les honoraires sont présentés à titre indicatif et sont sujets à ajustement selon la complexité et la nature spécifique de la demande.
          </p>
          <div className="inline-flex items-center gap-3 bg-neutral-900 px-6 py-3 rounded-full text-sm text-neutral-400 border border-neutral-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Courtoisie d'annulation : Gratuite jusqu'à 24 heures avant l'engagement prévu.</span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}