'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export type Offer = {
  id: number
  title: string
  description: string
  highlights: string[]
  price: {
    duration: string
    amount: string
  }[]
}


const ServiceCards = () => {

    const router = useRouter()

  const handleSelect = (data: Offer) => { 
    router.push(`/reservation?data=${encodeURIComponent(JSON.stringify(data))}`)
  }

  const services = [
    {
      id: 1,
      title: "Moment Intime",
      description: "Expérience sensuelle complète alliant tendresse et passion",
      highlights: [
        "✨ Moments complices ou intenses (GFE / PSE)",
        "🔁 Plusieurs instants plaisir / heure (Extraball)",
        "👠 Sorties privées – Club, Sauna",
        "💆‍♀️ Massages relaxants et sensuels",
        "🎭 Fantasmes – Jeux de rôles, strip discret",
        "💞 Préliminaires variés, douceur ou passion",
        "🖤 Sensualité & fétichismes sur demande",
        "🔥 Expériences personnalisées & raffinées",
        "🍑 Découvertes – Toys, duo, sensations fortes",
        "🔞 Plaisirs spécifiques avec respect & hygiène",
      ],
      price: [
        { duration: "1 heure", amount: "150€" },
        { duration: "1 heure 30", amount: "250€" },
        { duration: "2 heures", amount: "300€" },
        { duration: "3 heures", amount: "400€" },
        { duration: "4 heures", amount: "550€" },
        { duration: "Une nuit", amount: "1000€" },
        { duration: "Journée entière", amount: "1200€" },
        { duration: "Week-end", amount: "1500€" },
      ]
    },
  ]

  return (
    <div className="grid md:grid-cols-2 gap-8 py-8">
      {services.map((service, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -5 }}
          className="card bg-gray-900 shadow-lg hover:shadow-xl transition-all border border-base-300"
        >
          <div className="card-body">
            <div className="flex justify-between items-start">
              <h3 className="card-title text-pink-600 text-2xl">{service.title}</h3>
            </div>

            <p className="text-base-content/50 mb-4">{service.description}</p>

            <div className="space-y-3 mb-6">
              {service.highlights.map((item, i) => (
                <div key={i} className="flex items-start">
                  <svg className="w-5 h-5 text-pink-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-gray-800/60 rounded-box p-4">
              <h4 className="font-bold text-pink-600 mb-2">Options disponibles :</h4>
              <ul className="space-y-2">
                {service.price.map((option, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span>{option.duration}</span>
                    <span className="font-bold">{option.amount}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-actions justify-end mt-6">
              <button onClick={() => handleSelect(service)} className="btn btn-primary bg-pink-600 hover:bg-pink-700 border-none">
                Réserver
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default ServiceCards