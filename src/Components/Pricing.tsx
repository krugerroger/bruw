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
    <section id="prestations" className="py-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="text-center mb-5"
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
          Paypal (INDISPONIBLE MOMENTANÉMENT)
        </div>
      </div>

     <div className="space-y-6 text-sm md:text-base">
  {/* Section Moyens de Paiement */}
  <div className="bg-gray-800/40 rounded-lg p-4">
    <h3 className="font-bold text-pink-600 text-lg mb-3">MOYENS DE PAIEMENT :</h3>
    <ul className="space-y-2 text-gray-300">
      <li className="flex items-start">
        <span className="text-pink-500 mr-2">•</span>
        <span>Espèces exclues lors du premier rendez-vous <span className="text-gray-400">(mais les suivants peuvent être réglés en espèces)</span></span>
      </li>
      <li className="flex items-start">
        <span className="text-pink-500 mr-2">•</span>
        <span>Coupon : Transcash, ou PCS MasterCard</span>
      </li>
      <li className="flex items-start">
        <span className="text-pink-500 mr-2">•</span>
        <span>PayPal (Indisponible Momentanément)</span>
      </li>
    </ul>
  </div>

  {/* Section Rencontre Extérieur */}
  <div className="bg-gray-800/40 rounded-lg p-4">
    <h3 className="font-bold text-pink-600 text-lg mb-3">
      RENCONTRE À L'EXTÉRIEUR : <span className="text-gray-400 text-base">(SANS INTIMITÉ)</span>
    </h3>
    <div className="space-y-3 text-gray-300">
      <div className="flex justify-between items-center bg-gray-700/30 p-3 rounded">
        <span className="font-semibold">1h : 150€</span>
        <span className="text-pink-500 text-sm">d'accompagnement extérieur</span>
      </div>
      <p className="leading-relaxed">
        Nous nous découvrons autour d'un verre, à la terrasse d'un bar où au restaurant, 
        lors d'un spectacle, ou en soirée… Je favorise une première rencontre avant un 
        accompagnement de longue durée : week-end, semaine, vacances.
      </p>
    </div>
  </div>

  {/* Section Tarif Incall */}
  <div className="bg-gray-800/40 rounded-lg p-4">
    <h3 className="font-bold text-pink-600 text-lg mb-3">TARIF INCALL : <span className="text-gray-400 text-base">(RÉCEPTION)</span></h3>
    <div className="space-y-4 text-gray-300">
      <div className="bg-gray-700/30 p-3 rounded">
        <p className="font-semibold text-pink-500 mb-2">Horaires de réception :</p>
        <p>Je reçois de 08h00 à 00h00 uniquement sur réservation de rendez-vous préalable SVP.</p>
        <p className="mt-1 text-gray-400">Pour un rendez-vous le jour même, merci de me prévenir au moins 30min avant svp.</p>
      </div>
      
      <div className="space-y-3">
        <p className="font-semibold text-pink-500">Cadre de la réception :</p>
        <p>En réception chez moi dans une belle villa, une boisson fraîche vous sera proposée dès votre arrivée :</p>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="bg-gray-700/50 px-3 py-1 rounded-full text-sm">Coca</span>
          <span className="bg-gray-700/50 px-3 py-1 rounded-full text-sm">Oasis</span>
          <span className="bg-gray-700/50 px-3 py-1 rounded-full text-sm">Jus de fruit</span>
          <span className="bg-gray-700/50 px-3 py-1 rounded-full text-sm">Café</span>
          <span className="bg-gray-700/50 px-3 py-1 rounded-full text-sm">Thé</span>
          <span className="bg-gray-700/50 px-3 py-1 rounded-full text-sm">Cappuccino</span>
          <span className="bg-gray-700/50 px-3 py-1 rounded-full text-sm">Latte macchiato</span>
          <span className="bg-gray-700/50 px-3 py-1 rounded-full text-sm">Alcool</span>
        </div>
      </div>

      <div className="bg-gray-700/30 p-3 rounded">
        <p className="font-semibold text-pink-500 mb-2">Hygiène et confort :</p>
        <p className="leading-relaxed">
          Je suis très attentive à mon hygiène qui sera irréprochable, une douche obligatoire 
          vous sera donc proposée dès votre arrivée : Serviettes, chaussons, produits divers 
          de toilette seront mis à votre disposition.
        </p>
      </div>
    </div>
  </div>
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