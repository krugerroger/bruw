'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HomePresentation() {
  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-8">
            Pour tout savoir sur Béatrice
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8">
            Escort Girl Indépendante
          </h2>

          <div className="bg-base-200 rounded-box p-8 md:p-10 shadow-lg mb-10">
            <motion.p 
              className="text-lg md:text-xl leading-relaxed mb-6 text-justify"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Je m’appelle Béatrice, Française d’origine Américaine. Après une première carrière dans le cinéma adulte, j’ai choisi de me réinventer pour devenir Escort Girl indépendante et masseuse professionnelle, afin d’offrir une expérience unique, raffinée et inoubliable.
            </motion.p>

            <motion.p 
              className="text-lg md:text-xl leading-relaxed mb-6 text-justify"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Aujourd’hui, j’incarne l’élégance et la sensualité d’une Courtisane VIP moderne : attentive, cultivée et passionnée, je propose des moments d’exception où séduction, complicité et plaisir se rencontrent harmonieusement.
            </motion.p>

            <motion.p 
              className="text-lg md:text-xl leading-relaxed text-justify"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              Âgée de 28 ans, je suis une Escort Girl de luxe internationale et Call Girl indépendante basée en France, disponible aussi bien pour des rendez-vous privés que pour des déplacements, en France comme à l’étranger.
            </motion.p>
            <motion.p 
              className="text-lg md:text-xl leading-relaxed text-justify"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              Je ne pratique cette activité que par choix et par plaisir, ce qui fait de chaque rencontre une expérience authentique, sincère et haut de gamme.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            <Link 
              href="/about" 
              className="btn btn-primary bg-pink-600 hover:bg-pink-700 border-none text-white px-8 py-3 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
            >
              En savoir plus
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}