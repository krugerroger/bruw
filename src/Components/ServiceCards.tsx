'use client'
import { services } from '@/constants/services'
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


  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 py-8">
      {services.map((service, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -5 }}
          className="card bg-black shadow-lg hover:shadow-xl transition-all border border-base-300"
        >
          <div className="card-body p-4 md:p-6">
            <div className="flex justify-between items-start">
              <h3 className="card-title text-amber-600 text-xl md:text-2xl">{service.title}</h3>
            </div>

            <p className="text-base-content/50 mb-4 text-sm md:text-base">{service.description}</p>

            <div className="space-y-3 mb-6">
              {service.highlights.map((item, i) => (
                <div key={i} className="flex items-start">
                  <svg className="w-5 h-5 text-amber-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>

           <div className="bg-stone-900/80 rounded-box p-3 md:p-4">
            <h4 className="font-bold text-amber-600 mb-6 text-base md:text-lg">Options disponibles :</h4>
            <ul className="space-y-3">
              {service.price.map((option, idx) => (
                <li key={idx} className="bg-gray-800/40 rounded-lg p-3 hover:bg-gray-700/60 transition-colors">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1 md:gap-0">
                    <div className="grid grid-cols-2 mb-3">
                      <div className="text-amber-500 font-bold text-base flex flex-col md:text-lg">
                        <span className="text-amber-400 text-sm md:text-base">{option.duration}</span>
                        <span className="text-amber-400 text-sm md:text-base">{option.time} - </span>
                      </div>
                      <div className="font-semibold text-sm text-end md:text-lg text-white">
                        &nbsp;{option.prestation}
                      </div>
                    </div>
                    <div className="text-gray-300 md:text-right text-sm md:text-base max-w-xs mt-1 md:mt-0" dangerouslySetInnerHTML={{ __html: option.details }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>

            <div className="card-actions justify-end mt-6">
              <button onClick={() => handleSelect(service)} className="btn btn-primary bg-amber-600 hover:bg-amber-700 border-none w-full md:w-auto">
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