"use client"
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Comment puis-je réserver un rendez-vous ?",
      answer: "Contactez-moi via l'un de mes réseaux professionnels (Telegram ou Whatsapp) dans la section «Contact». C’est simple et rapide !"
    },
    {
      question: "Quels sont vos modes de paiement ?",
      answer: "Nous acceptons les cartes Mastercard, PayPal, recharge TRANSCASH ainsi que les virements bancaires. Tous les paiements sont sécurisés."
    },
    {
      question: "Puis-je annuler ma réservation ?",
      answer: "Oui, vous pouvez annuler à tout moment jusqu’à 24h avant le rendez-vous et vous faire rembourser votre acompte de réservation. Aucun frais caché."
    },
    {
      question: "Comment contacter le support ?",
      answer: "Remplissez le formulaire de contact dans la section «Contact». Notre équipe est disponible 24/7."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Variantes d'animation pour le contenu de la réponse (effet soft feutré)
  const answerVariants = {
    collapsed: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    },
    expanded: { 
      opacity: 1, 
      height: "auto",
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    // Fond noir profond, padding généreux, bordure subtile
    <section id="faq" className="py-28 bg-[#0a0a0a] text-white relative overflow-hidden border-t border-neutral-900">
      
      {/* Élément décoratif subtil en arrière-plan (Lueur ambrée lointaine) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"></div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        {/* En-tête de section style luxe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-24 flex flex-col items-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-amber-400/70 block mb-4">Conciergerie</span>
          <h2 className="text-4xl md:text-5xl font-light font-serif mb-6 tracking-wide text-white">Questions fréquentes</h2>
          <div className="w-16 h-[1px] bg-amber-400/30 mx-auto mb-8"></div>
        </motion.div>
        
        {/* Liste FAQ style épuré (pas de boxes, juste des lignes b-border) */}
        <div className="space-y-0 border-t border-neutral-800">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index} 
                className="border-b border-neutral-800 transition-all duration-300"
              >
                <button
                  className="w-full py-7 text-left flex justify-between items-center group focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  {/* Titre de la question : Serif, élégant, change de couleur au hover/active */}
                  <span className={`text-lg md:text-xl font-serif font-light tracking-wide transition-colors duration-300 pr-8 ${isOpen ? 'text-amber-400' : 'text-neutral-100 group-hover:text-amber-300'}`}>
                    {faq.question}
                  </span>
                  
                  {/* Icône Chevron Or, fine, tourne doucement */}
                  <svg
                    className={`w-5 h-5 text-amber-400 transition-transform duration-500 ease-[0.16, 1, 0.3, 1] flex-shrink-0 ${isOpen ? 'transform rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                
                {/* Contenu de la réponse avec animation Framer Motion soyeuse */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="expanded"
                      exit="collapsed"
                      variants={answerVariants}
                      className="overflow-hidden"
                    >
                      {/* Texte réponse : Sans-serif, léger, lecture fluide */}
                      <p className="pb-8 pt-1 text-neutral-300 font-sans font-light leading-relaxed max-w-3xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Section CTA style Luxe */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
            className="mt-24 text-center border-t border-neutral-900 pt-16"
        >
          <p className="font-sans text-neutral-400 font-light mb-8 max-w-md mx-auto leading-relaxed">
            Vous ne trouvez pas la réponse exacte à votre interrogation ? Notre service est à votre entière disposition.
          </p>
          
          {/* Bouton style Premium (Bordure fine Or, lueur au hover) */}
          <button className="group relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden border border-amber-400/50 bg-transparent text-amber-400 rounded-full transition-all duration-300 hover:border-amber-400">
             {/* Lueur d'arrière-plan animée au hover */}
             <span className="absolute inset-0 w-full h-full bg-amber-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-sm"></span>
             
             <span className="relative font-sans text-sm uppercase tracking-[0.2em] font-medium group-hover:text-amber-300">
                Contactez ma conciergerie
             </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;