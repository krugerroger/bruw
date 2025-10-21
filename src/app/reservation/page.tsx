'use client'

import { HTMLInputTypeAttribute, useEffect, useState } from 'react'
import Image from 'next/image'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Link from 'next/link'

interface BookingFormProps {
    selectedPackage: {
        title: string
        duration: string
        price: string
    }
    formData: {
        name: string
        email: string
        appointmentDate: Date | null
        paymentProof: File | null
        additionalMessage: string
    }
}
interface PriceOption {
  duration: string
  amount: string
}

interface Offer {
  title: string
  price: PriceOption[]
}

export default function BookingForm() {
  const [offer, setOffer] = useState<Offer | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const data = params.get('data');
      if (data) {
        try {
          const parsed = JSON.parse(data);
          setOffer(parsed);
        } catch (err) {
          console.error("Erreur de parsing :", err);
        }
      }
    }
  }, []);

  const [selectedPackage, setSelectedPackage] = useState<BookingFormProps['selectedPackage']>({
    title: '',
    duration: '',
    price: ''
  })
  const [formData, setFormData] = useState<BookingFormProps['formData']>({
    name: '',
    email: '',
    appointmentDate: null,
    paymentProof: null,
    additionalMessage: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    // For file input, event.target.files exists
    if (
      event.target instanceof HTMLInputElement &&
      event.target.type === "file"
    ) {
      const files = event.target.files;
      setFormData((prev) => ({
        ...prev,
        [name]: files ? files[0] : null,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }

  const handleDateChange = (date: Date | null) => {
    setFormData(prev => ({
      ...prev,
      appointmentDate: date
    }))
  }

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  console.log('Form data:', formData)
  
  try {
    const formDataToSend = new FormData()
    formDataToSend.append('name', formData.name)
    formDataToSend.append('email', formData.email)
    formDataToSend.append('appointmentDate', formData.appointmentDate?.toISOString() || '')
    if (formData.paymentProof) {
      formDataToSend.append('paymentProof', formData.paymentProof)
    }
    formDataToSend.append('additionalMessage', formData.additionalMessage)
    formDataToSend.append('packageTitle', selectedPackage.title)
    formDataToSend.append('packageDuration', selectedPackage.duration)
    formDataToSend.append('packagePrice', selectedPackage.price)

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formDataToSend
    })

    const result = await response.json()

     const basin_response = await fetch("https://usebasin.com/f/1075a0a67158", {
        method: "POST",
        headers: {
          "Accept": "application/json",
        },
        body: formDataToSend
      })

      if (!basin_response.ok) {
        alert("❌ Erreur lors de l’envoi")
      }

    if (response.ok) {
      setSubmitted(true)
    } else {
      console.error('Erreur:', result.error)
      // Afficher un message d'erreur à l'utilisateur
    }
  } catch (err) {
    console.error('Erreur:', err)
    err instanceof Error && console.error('Message d’erreur:', err.message)
    // Afficher un message d'erreur à l'utilisateur
  }
}

const handlePackageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const selectedIndex = Number(e.target.value)
  if (offer) {
    setSelectedPackage({
      title: offer.title,
      duration: offer.price[selectedIndex].duration,
      price: offer.price[selectedIndex].amount
    })
  }
}

  return (
 <section id="reservation" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Photo discrète */}
          <div className="hidden lg:block lg:w-1/3 sticky top-20">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/bru_hero.jpg" // Remplacez par votre photo
                alt="Brunella Moreau - Moments privilégiés"
                sizes='(min-width: 640px) 32rem, 90vw'
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-xl font-light">Des moments uniques</p>
                <p className="text-sm opacity-80">sur mesure</p>
              </div>
            </div>
          </div>

          {/* Formulaire de réservation */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-2">Réserver un rendez-vous</h2>
            <div className="w-20 h-1 bg-pink-500 mb-8"></div>

            {submitted ? (
              <div className="alert alert-success shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Votre demande a bien été envoyée. Je vous confirmerai le rendez-vous sous 24h.</span>
              </div>
            ) : (
              <form
                encType="multipart/form-data"
                method="POST"
                action="https://usebasin.com/f/1075a0a67158"
                onSubmit={handleSubmit}
                className="space-y-1 card bg-base-200 shadow-sm">
                {/* Forfait sélectionné */}
               {offer && (
                 <div className="border p-3">
                  <h3 className="text-xl font-semibold text-indigo-500 mb-2">Choisissez un tarif</h3>
                  <div className=" justify-between items-center">
                    <div>
                      <p className="text-xl font-bold">{offer.title}</p>
                    </div>
                    <div className="bg-gray-800/60 rounded-box p-4">
                        <h4 className="font-bold text-pink-600 mb-2">Options disponibles :</h4>
                        {/* Sélection du forfait */}
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Choisir forfait souhaité</span>
                            </label>
                            <select
                                name="selectedPackage"
                                onChange={handlePackageChange}
                                className="select select-bordered border bg-pink-800"
                                defaultValue="2" // Default to 3h option
                            >
                                {offer.price.map((option, index) => (
                                <option key={index} value={index}>
                                    {option.duration} - {option.amount}
                                </option>
                                ))}
                            </select>
                            </div>
                        </div>
                  </div>
                  <Link href="/tarifs" className="link link-primary text-sm mt-2">
                    Modifier votre choix
                  </Link>
                </div>
               )}

                {/* Détails du forfait sélectionné */}
                <div className=" p-3 border">
                  <h3 className="text-lg font-semibold text-pink-600 mb-2">Votre sélection</h3>
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-medium">Durée :</p>
                    <p>{selectedPackage.duration}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="font-medium">Tarif :</p>
                    <p className="text-2xl font-bold">{selectedPackage.price}</p>
                  </div>
                </div>

                {/* Informations personnelles */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="form-control">
                    <label className="label w-full">
                      <span className="label-text">Nom & Prénom</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="input input-bordered bg-gray-500/40"
                      required
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label w-full">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input input-bordered bg-gray-500/40"
                    required
                  />
                </div>

                {/* Date et heure */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="form-control">
                    <label className="label w-full">
                      <span className="label-text">Date souhaitée</span>
                    </label>
                    <DatePicker
                      selected={formData.appointmentDate}
                      onChange={handleDateChange}
                      minDate={new Date()}
                      dateFormat="dd/MM/yyyy"
                      isClearable
                      showTimeSelect
                      showMonthDropdown
                      className="input input-bordered bg-gray-500/40 min-w-[320px]"
                      calendarClassName="border border-pink-600 rounded-lg"
                      placeholderText="Sélectionnez une date"
                      required
                    />
                  </div>
                </div>

                {/* Preuve de paiement */}
                <div className="form-control">
                  <label className="label w-full">
                    <span className="label-text">Justificatif de réservation</span>
                  </label>
                  <input
                    type="file"
                    name="paymentProof"
                    onChange={handleChange}
                    className="file-input file-input-bordered bg-gray-500/40"
                    accept="image/*,.pdf"
                    required
                  />
                  <label className="label">
                    <span className="label-text-alt text-sm">Photo de la recharge(Transcash, PCS, Néosurf)</span>
                  </label>
                  <div className="text-sm">
                    Pour réverser via virement instantanée ou par Wero, merci de me contacter par WhatsApp au <span className='font-semibold text-[#25D366]'>+33 6 37 24 43 87</span> pour obtenir les informations nécessaires.
                  </div>
                </div>

                {/* Message supplémentaire */}
                <div className="form-control">
                  <label className="label w-full">
                    <span className="label-text">Informations supplémentaires (optionnel)</span>
                  </label>
                  <textarea
                    name="additionalMessage"
                    value={formData.additionalMessage}
                    onChange={handleChange}
                    className="textarea textarea-bordered h-32  bg-gray-500/40"
                    placeholder="Tenue particulière, lieu spécifique, etc."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary bg-pink-600 hover:bg-pink-700 border-none w-full">
                  Confirmer la réservation
                </button>
              </form>
            )}
          </div>
        </div>
        <div className="divider"></div>
        <div>
            <p>Merci de me contacter par WhatsApp au <span className='font-semibold text-[#25D366]'>+33756985757</span> ou par Telegram à        
                <a 
                  href="https://t.me/moreaubrunella" 
                  className="text-[#0088CC] hover:bg-secondary hover:text-secondary-content px-6"
                  >@moreaubrunella</a> 
                  pour obtenir les informations nécessaires.
            </p>
        </div>
        <div>
            <h2>Confirmation et rappel</h2>
            <ul>
                <li> Envoie une confirmation immédiate après la réservation sur Whatsapp ou sur Telegram ou par email.</li>
                <li> Un rappel sera envoyé 24 heures avant le rendez-vous.</li>
                <li> Facturation : Envoie une facture détaillée après la réservation.</li>
                <li> La réservation sera considérée comme confirmée uniquement après réception de la facture.</li>
            </ul>
        </div>
        <div>
            <h2>Le meilleur moyen de résister à la tentation est d’y céder.</h2>
        </div>
      </div>
    </section>
  )
}