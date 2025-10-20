'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    name: "Pierre",
    text: "Une soirée parfaite, Brunella est une femme brillante autant par son esprit que par son élégance. Une conversation enrichissante et des moments de grande complicité.",
    rating: 5,
    date: "28/02/2025"
  },
  {
    id: 2,
    name: "Marc",
    text: "Discrète et attentionnée, Brunella sait créer une atmosphère unique où l’on se sent immédiatement en confiance. Je recommande sans hésitation.",
    rating: 5,
    date: "22/09/2025"
  },
  {
    id: 3,
    name: "Thomas",
    text: "Rarement rencontré une personne aussi raffinée. Notre dîner à Paris restera un souvenir mémorable. Professionnalisme et naturel parfaitement équilibrés.",
    rating: 4,
    date: "14/02/2024"
  },
  {
    id: 4,
    name: "Nicolas",
    text: "Un week-end exceptionnel. Brunella a su anticiper chaque détail pour rendre ces deux jours magiques. Une vraie connexion intellectuelle et sensuelle.",
    rating: 5,
    date: "02/05/2025"
  },
  {
    id: 5,
    name: "Alexandre",
    text: "Brunella possède un charme rare et une écoute sincère. Chaque instant passé ensemble est marqué par sa délicatesse et son intelligence.",
    rating: 5,
    date: "10/06/2024"
  },
  {
    id: 6,
    name: "Julien",
    text: "Sa présence illumine littéralement une soirée. Élégante, cultivée et toujours souriante, elle sait rendre chaque moment inoubliable.",
    rating: 5,
    date: "03/03/2024"
  },
  {
    id: 7,
    name: "David",
    text: "Au-delà de sa beauté, c’est sa capacité à créer une complicité authentique qui m’a marqué. On oublie le temps en sa compagnie.",
    rating: 4,
    date: "19/07/2025"
  },
  {
    id: 8,
    name: "François",
    text: "Brunella incarne la grâce et la modernité. Un dîner à ses côtés, c’est comme voyager dans un univers de raffinement et de charme.",
    rating: 5,
    date: "08/01/2025"
  }
]


export default function Testimonials() {
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
    hidden: { y: 30, opacity: 0 },
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
    <section id="testimonies" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4 font-serif">Ils me font confiance</h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto mb-8"></div>
          <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
            Des moments partagés, des souvenirs précieux. Voici ce que disent ceux qui ont apprécié ma compagnie.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={item}
              whileHover={{ y: -5 }}
              className="card shadow-lg hover:shadow-xl transition-all"
            >
              <div className="card-body">
                <div className="flex items-center mb-4">
                  <div className="avatar placeholder">
                    <div className="bg-pink-100 text-pink-600 rounded-full w-12">
                      <span className="text-xl">{testimonial.name.charAt(0)}</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-base-content/60">{testimonial.date}</p>
                  </div>
                </div>

                <div className="mb-1 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300 fill-current'}`}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>

                <blockquote className="italic text-base-content/90">
                  &quot;{testimonial.text}&quot;
                </blockquote>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-sm text-base-content/60">
            * Tous les témoignages proviennent de rencontres réelles. Les prénoms ont été modifiés pour préserver l’anonymat.
          </p>
        </motion.div>
      </div>
    </section>
  )
}