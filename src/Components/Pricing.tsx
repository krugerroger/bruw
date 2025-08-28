'use client'

import { motion } from 'framer-motion'
import ServiceCards from './ServiceCards'

const options = [
  "Déplacement international (+50% du tarif horaire)",
  "Tenues haute couture (supplément 100-300€)",
  "Location d’espaces privatifs (sur devis)",
  "Photographie professionnelle (option 200€/h)",
  "Activités spéciales (à convenir ensemble)"
]

export default function Pricing() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 100 }
    }
  }

  return (
    <section id="prestations" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="text-center mb-16"
        >
          <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold text-pink-600 mb-4 font-serif">
            Prestations & Tarifs
          </motion.h2>
          <motion.div variants={item} className="w-20 h-1 bg-pink-500 mx-auto mb-8"></motion.div>
        </motion.div>

        {/* Cartes des prestations */}
        <ServiceCards/>

        {/* Options supplémentaires */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-gray-900/20 rounded-box p-8 mb-12"
        >
          <h3 className="text-xl font-semibold mb-4 text-pink-600 font-mono">Options premium :</h3>
          <ul className="space-y-3">
            {options.map((option, i) => (
              <li key={i} className="flex items-start">
                <svg className="w-5 h-5 text-pink-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="font-medium">{option}</span>
              </li>
            ))}
          </ul>
        </motion.div>

       {/* Notes */}
     {/* Notes */}
{/* Notes */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 0.6 }}
  className="text-center max-w-2xl mx-auto"
>
  <div className="bg-base-200 text-base-content rounded-box p-6 space-y-4 shadow-md">
    {/* Note générale */}
    <p className="text-sm text-base-content/70">
      * Les tarifs sont indicatifs et peuvent varier selon la complexité de la prestation
    </p>

    {/* Encadré Réservation */}
    <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-lg">
      <div className="flex items-start gap-3">
        <div className="bg-primary/20 p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <h3 className="font-semibold mb-1">Réservation obligatoire</h3>
          <p className="text-sm text-base-content/70">
            La réservation de votre rendez-vous necessite le paiement entier de votre tarif, cela me permet de bloquer le créneau du rendez-vous uniquement pour vous et me préparer en avance à vous acceuillir dans les meilleurs conditions. Cette garantie témoigne de votre sérieux.
          </p>
        </div>
      </div>
    </div>

    {/* Section Paiement */}
    <div className="space-y-3">
      <h3 className="font-semibold text-lg border-b border-base-300 pb-2">
        Moyens de paiement acceptés
      </h3>

      <div className="flex flex-wrap gap-2 justify-center">
        <div className="badge badge-lg badge-primary gap-1 px-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
          coupon Transcash
        </div>
        <div className="badge badge-lg badge-primary gap-1 px-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
          Virement instantanée
        </div>
        <div className="badge badge-lg badge-primary gap-1 px-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
          Wero
        </div>
      </div>

      <div className="alert alert-warning py-2 px-4 text-sm bg-warning/20 text-warning-content border border-warning">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-5 w-5" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <span>Les espèces ne sont acceptées qu’à partir du deuxième rendez-vous</span>
      </div>
    </div>

    {/* Politique d'annulation */}
    <div className="pt-2 border-t border-base-300">
      <p className="text-sm text-base-content/60 flex items-center justify-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Annulation possible jusqu’à 24h avant le rendez-vous
      </p>
    </div>
  </div>
</motion.div>


      </div>
    </section>
  )
}