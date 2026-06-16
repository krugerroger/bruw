'use client'

import { CONTACTS } from '@/constants/contacts'
import { motion } from 'framer-motion'

export default function Contact() {

  // Animations fluides et discrètes (Style entrée feutrée)
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] // Ease-out quart pour fluidité premium
      }
    }
  }

  return (
    // Fond noir profond pour le luxe, texte clair
    <section id="contact" className="py-28 bg-[#0a0a0a] text-white relative overflow-hidden border-t border-neutral-900">
      
      {/* Élément décoratif subtil en arrière-plan (Lueur ambrée lointaine) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* En-tête de section style "Haute Joaillerie" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-24 flex flex-col items-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-amber-400/70 block mb-4">Entrer en relation</span>
          <h2 className="text-4xl md:text-5xl font-light font-serif mb-6 tracking-wide text-white">Contact & Réservation</h2>
          <div className="w-16 h-[1px] bg-amber-400/30 mx-auto mb-8"></div>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto font-light leading-relaxed">
            Pour toute demande d'entrevue exclusive ou information complémentaire, je vous invite à privilégier les canaux sécurisés ci-dessous.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Bloc Principal de Contact */}
          <motion.div 
            variants={item}
            className="w-full space-y-10"
          >
            {/* Carte de Réservation stylisée (Pas de shadow lourde, bordure fine or/neutre) */}
            <div id="reserver" className="group relative border border-neutral-800 bg-black p-10 md:p-12 transition-colors duration-500 hover:border-amber-400/30">
              
              {/* Ligne dorée décorative animée au survol */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <h3 className="text-2xl font-serif font-light text-white tracking-wide">Demande d'Instant</h3>
                <span className="text-xs uppercase tracking-[0.2em] text-amber-400/80 px-4 py-1.5 border border-amber-400/20 rounded-full">Discrétion Absolue</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-10">
                {/* Info Téléphone */}
                <div className="flex items-start gap-5 p-6 border border-neutral-900 bg-neutral-950">
                  <div className="text-amber-400 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-neutral-200 uppercase text-sm tracking-wider mb-1">Ligne Privée</p>
                    <p className="text-sm text-neutral-500 font-light leading-relaxed">
                      Ligne directe communiquée après validation de la demande.
                    </p>
                  </div>
                </div>

                {/* Info Réseaux */}
                <div className="flex flex-col gap-6">
                  <h4 className="font-medium text-neutral-300 text-sm uppercase tracking-wider mb-2">Conciergerie Digitale :</h4>
                  
                  {/* WhatsApp minimaliste */}
                  <a 
                    href={CONTACTS.whatsapp} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-3 text-neutral-400 hover:text-white transition-colors duration-300 text-sm pb-2 border-b border-neutral-900 hover:border-neutral-700"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                      className="w-5 h-5 text-neutral-700 group-hover/link:text-[#25D366] transition-colors"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.18-1.24-6.169-3.495-8.418"/>
                    </svg>
                    <span>Contacter via <span className="font-semibold text-neutral-300">WhatsApp</span></span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                  </a>
                  
                  {/* Telegram minimaliste */}
                  <a 
                    href={CONTACTS.telegramLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-3 text-neutral-400 hover:text-white transition-colors duration-300 text-sm pb-2 border-b border-neutral-900 hover:border-neutral-700"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                      className="w-5 h-5 text-neutral-700 group-hover/link:text-[#0088CC] transition-colors"
                    >
                      <path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z" />
                    </svg>
                    <span>Contacter via <span className="font-semibold text-neutral-300">Telegram</span></span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                  </a>
                  {/* Telegram minimaliste */}
                  <a 
                    href={CONTACTS.canalTelegram} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-3 text-neutral-400 hover:text-white transition-colors duration-300 text-sm pb-2 border-b border-neutral-900 hover:border-neutral-700"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                      className="w-5 h-5 text-neutral-700 group-hover/link:text-[#0088CC] transition-colors"
                    >
                      <path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z" />
                    </svg>
                    <span>Rejoindre le canal <span className="font-semibold text-neutral-300">Telegram</span></span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                  </a>
                  {/* Email minimaliste */}
<a 
  href={`mailto:${CONTACTS.email}`} 
  target="_blank"
  rel="noopener noreferrer"
  className="group/link flex items-center gap-3 text-neutral-400 hover:text-white transition-colors duration-300 text-sm pb-2 border-b border-neutral-900 hover:border-neutral-700"
>
  {/* Nouvelle icône Email épurée */}
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="w-5 h-5 text-neutral-600 group-hover/link:text-rose-400 transition-colors duration-300"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>

  <span>Envoyer un <span className="font-semibold text-neutral-300">Email</span></span>
  
  {/* Flèche de droite avec un léger effet de glissement au survol */}
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-4 w-4 ml-auto opacity-50 transition-transform duration-300 group-hover/link:translate-x-1" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    strokeWidth="2"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
</a>
                  
                  {/* Instagram minimaliste
                  <a 
                    href="https://www.instagram.com/brunella_5626?igsh=M2s0d3V3MDdjaGxr" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-3 text-neutral-400 hover:text-white transition-colors duration-300 text-sm pb-2 border-b border-neutral-900 hover:border-neutral-700"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                      className="w-5 h-5 text-neutral-700 group-hover/link:text-[#c13584] transition-colors"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                    </svg>
                    <span>Suivre sur <span className="font-semibold text-neutral-300">Instagram</span></span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                  </a> */}
                </div>
              </div>
            </div>

            {/* Disclaimer Style Luxe */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="border-t border-neutral-900 bg-black p-8 text-neutral-500"
            >
              <div className="flex items-start gap-4 max-w-2xl mx-auto">
                <div className="p-2 border border-amber-400/20 bg-amber-400/5 text-amber-400 mt-0.5 flex-shrink-0 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <h5 className="text-sm font-semibold uppercase tracking-wider text-amber-400/90">Engagement de Confidentialité</h5>
                  <p className="text-sm font-light leading-relaxed">
                    Plateforme strictement réservée aux adultes majeurs. Chaque demande fait l'objet d'un traitement protocolaire garantissant une discrétion absolue. Aucune information ne sera jamais cédée ou partagée avec des tiers.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
