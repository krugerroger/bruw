"use client"
import { motion } from 'framer-motion';
import { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Comment puis-je réserver un rendez-vous ?",
      answer: "Contactez moi via l'un de mes réseaux professionnels(Telegram ou Whatsapp) dans la section «Contact». C’est simple et rapide !"
    },
    {
      question: "Quels sont vos modes de paiement ?",
      answer: "Nous acceptons les cartes Mastercard, PayPal, recharge TRANSCASH, PCS, Néosurf ainsi que les virements bancaires. Tous les paiements sont sécurisés."
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

  return (
    <section id="faq" className="">
        <div className="container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
                >
            <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4 font-serif">Questions fréquentes</h2>
            <div className="w-20 h-1 bg-pink-500 mx-auto mb-8"></div>
            
            <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div 
                key={index} 
                className="border border-base-300 rounded-lg overflow-hidden transition-all"
                >
                <button
                    className={`w-full px-6 py-4 text-left font-sans font-medium flex justify-between items-center ${activeIndex === index ? 'bg-base-200' : ''}`}
                    onClick={() => toggleAccordion(index)}
                >
                    <span className="text-lg">{faq.question}</span>
                    <svg
                    className={`w-5 h-5 transition-transform ${activeIndex === index ? 'transform rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                
                <div
                    className={`px-6 overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-40 pb-4' : 'max-h-0'}`}
                >
                    <p className="text-base-600 font-sans">{faq.answer}</p>
                </div>
                </div>
            ))}
            </div>

            <div className="mt-12 text-center">
            <p className="font-sans text-base-500 mb-4">
                Vous ne trouvez pas la réponse à votre question ?
            </p>
            <button className="btn btn-primary font-sans">
                Contactez notre équipe
            </button>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;