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
        "✨ GFE : Girl Friend Experience",
        "🔁 PSE : Porn Star Experience",
        "👠 Extraball : Plusieurs rapports en 1h",
        "💆‍♀️ Accompagnement : Club échangiste / Sauna libertin",
        "🎭 Massages érotiques : Naturiste, BodyBody Thaï, Duo à 4 mains, Lingam, Couple",
        "💞 Show et fantasmes : Webcam, Strip-tease, Effeuillage burlesque, Jeux de rôles, Scénarios HOT, Paroles coquines",
        "🖤 Plaisirs charnels : Longs préliminaires, Kamasutra & 69 (péché mignon pour la levrette), French Kiss",
        "🔥 Fétichisme & domination : BDSM (Maîtresse Domina, initiation soft/hard), Facesitting, Fétish pieds",
        "🍑 Expériences intenses : Handjob, Douce ou sauvage (Ange ou Démon), Branlette (classique & espagnole), Fellation nature ou protégée, Finition corporelle (hors visage)",
        "🔞 Explorations sensuelles : Sex toys (pour moi & pour vous), Travail anal / Massage prostatique, Trio HOT (Couple ou HFF), Conversation excitante (mots crus & fessées)",
        "🔞 Plaisirs spécifiques : Anal (sur moi ou sur vous), Cunnilingus & Anulingus (sur moi), Fist (vaginal uniquement), Douche dorée (donneuse)",
        "🔞 Explorations sensuelles : Sex toys (pour moi & pour vous), Travail anal / Massage prostatique, Trio HOT (Couple ou HFF), Conversation excitante (mots crus & fessées)",
      ],
      price: [
        { prestation: "1 rapports + massage", duration: "Rendez-vous galant 30 minutes : " ,amount: "50€", details:"En journée : 50€ / Après 19h00 : 70€. Nous faisons connaissance autour d’un verre, douche et moment de sensualité"},
        { prestation: "2 rapports + massage", duration: "Rendez-vous galant 1 heure : " ,amount: "150€", details:"En journée : 150€ / Après 19h00 : 170€. Nous faisons connaissance autour d’un verre, douche et moment de sensualité"},
        { prestation: "3 rapports + massage", duration: "Rendez-vous galant 1 heure 30 : ",amount: "240€", details: "En journée : 240€ / Après 19h00: 250€. Nous faisons connaissance autour d’un verre, douche et moment de sensualité" },
        { prestation: "3 à 4 rapports + massage", duration: "Rendez-vous galant 2h00 :",amount: "300€", details: "En journée : 300€ / Après 19h00 : 320€. Nous faisons connaissance autour d’un verre, douche et moment de sensualité" },
        { prestation: "4 rapports + massage", duration: "Rendez-vous galant 3h00 : ",amount: "400€", details: "En journée : 400€ / après 19h00: 420€. Nous faisons connaissance autour d’un verre, douche et moment de sensualité" },
        { prestation: " 550€ (avant 19h)", duration: "Après-midi détente et bien-être 4h00 :",amount: "550€", details: "Nous profitons d’une après-midi en institut de soin (spa, hammam, massage…), ou autour d’un verre, déjeuner, puis nous rejoignons votre chambre, pour finir en apothéose…" },
        { prestation: "670€ 2h Dîner + 2h charnel", duration: "Soirée délice (de 20h00 à minuit) 4h00 : ",amount: "720€", details: "Une soirée sensuelle en tête à tête pour un éveil des sens charnel…" },
        { prestation: "720€ 2h Dîner + 3h charnel", duration: "Soirée torride (de 20h00 à 1h00) 5h00 : ",amount: "", details: "Le rendez-vous galant que je préfère, autour d’un bon dîner chez moi ou à votre hôtel, suivi d’une soirée endiablée…" },
        { prestation: "800€ dîner + nuit torride + petit déjeuner", duration: "Nuit complète (de 20h00 à 8h00) 12h :",amount: "800€", details: "Nous nous rencontrons autour d’un dîner au restaurant à votre hôtel avant de rejoindre votre chambre pour un moment torride. Pas de nuit blanche : sommeil de 5h minimum et merci de prévoir notre ou mon petit déjeuner" },
      ]
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
      {services.map((service, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -5 }}
          className="card bg-gray-900 shadow-lg hover:shadow-xl transition-all border border-base-300"
        >
          <div className="card-body p-4 md:p-6">
            <div className="flex justify-between items-start">
              <h3 className="card-title text-pink-600 text-xl md:text-2xl">{service.title}</h3>
            </div>

            <p className="text-base-content/50 mb-4 text-sm md:text-base">{service.description}</p>

            <div className="space-y-3 mb-6">
              {service.highlights.map((item, i) => (
                <div key={i} className="flex items-start">
                  <svg className="w-5 h-5 text-pink-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>

           <div className="bg-gray-800/60 rounded-box p-3 md:p-4">
            <h4 className="font-bold text-pink-600 mb-3 md:mb-4 text-base md:text-lg">Options disponibles :</h4>
            <ul className="space-y-3">
              {service.price.map((option, idx) => (
                <li key={idx} className="bg-gray-700/40 rounded-lg p-2 md:p-3 hover:bg-gray-700/60 transition-colors">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1 md:gap-0">
                    <div className="flex">
                      <span className="text-pink-500 font-bold text-base md:text-lg">{option.duration}</span>
                      <span className="font-semibold text-base md:text-lg text-white">&nbsp;{option.prestation}</span>
                    </div>
                    <div className="text-gray-300 md:text-right text-sm md:text-base max-w-xs mt-1 md:mt-0">
                      {option.details}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

            <div className="card-actions justify-end mt-6">
              <button onClick={() => handleSelect(service)} className="btn btn-primary bg-pink-600 hover:bg-pink-700 border-none w-full md:w-auto">
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