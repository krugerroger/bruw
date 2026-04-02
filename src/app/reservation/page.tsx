'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, CheckCircle, ChevronRight, ChevronLeft, Upload, User, Mail, Clock, ArrowBigDown, Sparkles } from 'lucide-react'

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

const Offers: Offer = {
  title: 'Rendez-vous galant',
  price: [
    { duration: 'Rendez-vous galant 30 minutes', amount: '50€' },
    { duration: 'Rendez-vous galant 1 heure', amount: '150€' },
    { duration: 'Rendez-vous galant 1 heure 30', amount: '240€' },
    { duration: 'Rendez-vous galant 2h00', amount: '300€' },
    { duration: 'Rendez-vous galant 3h00', amount: '400€' },
    { duration: 'Après-midi détente et bien-être 4h00', amount: '550€' },
    { duration: 'Soirée délice (de 20h00 à minuit) 4h00', amount: '720€' },
    { duration: 'Soirée torride (de 20h00 à 1h00) 5h00', amount: '720€' },
    { duration: 'Nuit complète (de 20h00 à 8h00) 12h', amount: '800€' },
  ],
}

const STEPS = [
  { id: 1, label: 'Forfait', icon: Sparkles },
  { id: 2, label: 'Vos infos', icon: User },
  { id: 3, label: 'Confirmation', icon: CheckCircle },
]

export default function BookingForm() {
  const [offer, setOffer] = useState<Offer | null>(Offers)
  const [isLoading, setIsLoading] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [filePreview, setFilePreview] = useState<string | null>(null)

  const [selectedPackage, setSelectedPackage] = useState<BookingFormProps['selectedPackage']>({
    title: Offers.title,
    duration: Offers.price[0].duration,
    price: Offers.price[0].amount,
  })

  const [formData, setFormData] = useState<BookingFormProps['formData']>({
    name: '',
    email: '',
    appointmentDate: null,
    paymentProof: null,
    additionalMessage: '',
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const data = params.get('data')
      if (data) {
        try {
          const parsed = JSON.parse(data)
          setOffer(parsed)
        } catch (err) {
          console.error('Erreur de parsing :', err)
        }
      }
    }
  }, [])

  const validate = (step: number) => {
    const newErrors: Record<string, string> = {}
    if (step === 1) {
      if (!selectedPackage.duration) newErrors.package = 'Veuillez sélectionner un forfait'
    }
    if (step === 2) {
      if (!formData.name.trim()) newErrors.name = 'Le nom est requis'
      if (!formData.email.trim()) newErrors.email = "L'email est requis"
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email invalide'
      if (!formData.appointmentDate) newErrors.appointmentDate = 'Veuillez choisir une date'
      if (!formData.paymentProof) newErrors.paymentProof = 'Le justificatif est requis'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validate(currentStep)) setCurrentStep((s) => s + 1)
  }

  const handleBack = () => setCurrentStep((s) => s - 1)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    if (event.target instanceof HTMLInputElement && event.target.type === 'file') {
      const files = event.target.files
      const file = files ? files[0] : null
      setFormData((prev) => ({ ...prev, [name]: file }))
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.onload = (e) => setFilePreview(e.target?.result as string)
        reader.readAsDataURL(file)
      } else {
        setFilePreview(null)
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
      if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handlePackageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = Number(e.target.value)
    if (offer) {
      setSelectedPackage({
        title: offer.title,
        duration: offer.price[selectedIndex].duration,
        price: offer.price[selectedIndex].amount,
      })
    }
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      const selectedDate = new Date(e.target.value)
      if (selectedDate >= new Date()) {
        setFormData((prev) => ({ ...prev, appointmentDate: selectedDate }))
        setErrors((prev) => ({ ...prev, appointmentDate: '' }))
      } else {
        setErrors((prev) => ({ ...prev, appointmentDate: 'Veuillez sélectionner une date future' }))
      }
    } else {
      setFormData((prev) => ({ ...prev, appointmentDate: null }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const formDataToSend = new FormData()
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('appointmentDate', formData.appointmentDate?.toISOString() || '')
      if (formData.paymentProof) formDataToSend.append('paymentProof', formData.paymentProof)
      formDataToSend.append('additionalMessage', formData.additionalMessage)
      formDataToSend.append('packageTitle', selectedPackage.title)
      formDataToSend.append('packageDuration', selectedPackage.duration)
      formDataToSend.append('packagePrice', selectedPackage.price)

      const response = await fetch('/api/upload', { method: 'POST', body: formDataToSend })
      const result = await response.json()
      if (response.ok) {
        setSubmitted(true)
      } else {
        console.error('Erreur:', result.error)
      }
    } catch (err) {
      console.error('Erreur:', err)
    } finally {
      setIsLoading(false)
    }
  }

  const formatDate = (date: Date | null) => {
    if (!date) return '—'
    return date.toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <section id="reservation" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* Sidebar image */}
          <div className="hidden lg:block lg:w-1/3 sticky top-20">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/bru_hero.jpg"
                alt="Brunella Moreau - Moments privilégiés"
                sizes="(min-width: 640px) 32rem, 90vw"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-xl font-light">Des moments uniques</p>
                <p className="text-sm opacity-80">sur mesure</p>
              </div>
            </div>

            {/* Package summary card visible on step 2+ */}
            {currentStep >= 2 && !submitted && (
              <div className="mt-6 bg-pink-950/30 border border-pink-800/40 rounded-xl p-5 text-sm space-y-2">
                <p className="text-pink-400 font-semibold uppercase tracking-wider text-xs mb-3">Votre sélection</p>
                <p className="font-medium text-white">{selectedPackage.duration}</p>
                <p className="text-3xl font-bold text-pink-500">{selectedPackage.price}</p>
              </div>
            )}
          </div>

          {/* Main form area */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-2">Réserver un rendez-vous</h2>
            <div className="w-20 h-1 bg-pink-500 mb-8" />

            {/* ── SUCCESS STATE ── */}
            {submitted ? (
              <div className="card bg-base-200 shadow-lg overflow-hidden">
                {/* Top accent bar */}
                <div className="h-2 bg-gradient-to-r from-pink-500 to-rose-600" />
                <div className="p-8 flex flex-col items-center text-center gap-6">
                  {/* Animated checkmark */}
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-green-500/10 flex items-center justify-center animate-pulse">
                      <CheckCircle className="w-12 h-12 text-green-400" strokeWidth={1.5} />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Demande envoyée avec succès !</h3>
                    <p className="text-gray-400 max-w-sm">
                      Je vous confirmerai votre rendez-vous sous <strong className="text-white">24h</strong> par WhatsApp, Telegram ou email.
                    </p>
                  </div>

                  {/* Booking summary */}
                  <div className="w-full bg-gray-800/60 rounded-xl p-6 text-left space-y-4 border border-gray-700">
                    <p className="text-pink-400 font-semibold uppercase tracking-wider text-xs">Récapitulatif</p>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-gray-400">Nom</p>
                        <p className="font-medium text-white">{formData.name}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Email</p>
                        <p className="font-medium text-white">{formData.email}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-gray-400">Date souhaitée</p>
                        <p className="font-medium text-white capitalize">{formatDate(formData.appointmentDate)}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Forfait</p>
                        <p className="font-medium text-white">{selectedPackage.duration}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Tarif</p>
                        <p className="font-bold text-pink-400 text-xl">{selectedPackage.price}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 w-full">
                    <a
                      href="https://wa.me/33780967872"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn flex-1 bg-[#25D366] hover:bg-[#1ebe5d] border-none text-white"
                    >
                      Me contacter sur WhatsApp
                    </a>
                    <a
                      href="https://t.me/moreau_brunella"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn flex-1 bg-[#0088CC] hover:bg-[#0077b5] border-none text-white"
                    >
                      Me contacter sur Telegram
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <>
                {/* ── STEPPER ── */}
                <div className="flex items-center mb-8">
                  {STEPS.map((step, i) => {
                    const Icon = step.icon
                    const isActive = currentStep === step.id
                    const isDone = currentStep > step.id
                    return (
                      <div key={step.id} className="flex items-center flex-1 last:flex-none">
                        <div className="flex flex-col items-center gap-1">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border-2
                              ${isDone ? 'bg-pink-600 border-pink-600 text-white' : ''}
                              ${isActive ? 'bg-transparent border-pink-500 text-pink-500 shadow-[0_0_12px_rgba(236,72,153,0.4)]' : ''}
                              ${!isActive && !isDone ? 'bg-transparent border-gray-600 text-gray-500' : ''}
                            `}
                          >
                            {isDone ? <CheckCircle className="w-5 h-5" /> : <Icon className="w-4 h-4" />}
                          </div>
                          <span
                            className={`text-xs font-medium transition-colors
                              ${isActive ? 'text-pink-400' : isDone ? 'text-pink-600' : 'text-gray-500'}
                            `}
                          >
                            {step.label}
                          </span>
                        </div>
                        {i < STEPS.length - 1 && (
                          <div
                            className={`flex-1 h-0.5 mx-2 mb-4 transition-all duration-500
                              ${currentStep > step.id ? 'bg-pink-600' : 'bg-gray-700'}
                            `}
                          />
                        )}
                      </div>
                    )
                  })}
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">

                  {/* ── STEP 1 : PACKAGE SELECTION ── */}
                  {currentStep === 1 && (
                    <div className="card bg-base-200 shadow-sm animate-in fade-in slide-in-from-right-4 duration-300">
                      <div className="card-body gap-4">
                        <h3 className="text-xl font-semibold text-pink-400">Choisissez votre forfait</h3>

                        {offer && (
                          <>
                            <div className="form-control">
                              <label className="label">
                                <span className="label-text text-gray-300">Durée & tarif</span>
                              </label>
                              <select
                                name="selectedPackage"
                                onChange={handlePackageChange}
                                className="select select-bordered bg-gray-700/60 border-gray-600 text-white"
                              >
                                {offer.price.map((option, index) => (
                                  <option key={index} value={index}>
                                    {option.duration} — {option.amount}
                                  </option>
                                ))}
                              </select>
                              {errors.package && <p className="text-error text-sm mt-1">{errors.package}</p>}
                            </div>

                            {/* Selected package preview card */}
                            <div className="bg-gradient-to-br from-pink-950/50 to-rose-950/30 border border-pink-800/40 rounded-xl p-5 mt-2">
                              <p className="text-pink-400 uppercase tracking-widest text-xs font-semibold mb-3">Votre sélection</p>
                              <p className="text-lg font-medium text-white mb-1">{selectedPackage.duration}</p>
                              <p className="text-4xl font-bold text-pink-500">{selectedPackage.price}</p>
                            </div>

                            <Link href="/tarifs" className="link link-primary text-sm">
                              Voir tous les tarifs détaillés →
                            </Link>
                          </>
                        )}

                        <div className="flex justify-end pt-2">
                          <button type="button" onClick={handleNext} className="btn bg-pink-600 hover:bg-pink-700 border-none text-white gap-2">
                            Continuer <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ── STEP 2 : PERSONAL INFO ── */}
                  {currentStep === 2 && (
                    <div className="card bg-base-200 shadow-sm animate-in fade-in slide-in-from-right-4 duration-300">
                      <div className="card-body gap-5">
                        <h3 className="text-xl font-semibold text-pink-400">Vos informations</h3>

                        {/* Name */}
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text flex items-center gap-2">
                              <User className="w-4 h-4 text-pink-500" /> Nom & Prénom
                            </span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Votre nom complet"
                            className={`input input-bordered bg-gray-700/50 ${errors.name ? 'input-error' : ''}`}
                            required
                          />
                          {errors.name && <p className="text-error text-sm mt-1">{errors.name}</p>}
                        </div>

                        {/* Email */}
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text flex items-center gap-2">
                              <Mail className="w-4 h-4 text-pink-500" /> Email
                            </span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="votre@email.com"
                            className={`input input-bordered bg-gray-700/50 ${errors.email ? 'input-error' : ''}`}
                            required
                          />
                          {errors.email && <p className="text-error text-sm mt-1">{errors.email}</p>}
                        </div>

                        {/* Date */}
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-pink-500" /> Date & heure souhaitée
                            </span>
                          </label>
                          <input
                            type="datetime-local"
                            name="appointmentDate"
                            value={formData.appointmentDate ? formData.appointmentDate.toISOString().slice(0, 16) : ''}
                            onChange={handleDateChange}
                            min={new Date().toISOString().slice(0, 16)}
                            className={`input input-bordered bg-gray-700/50 ${errors.appointmentDate ? 'input-error' : ''}`}
                            required
                          />
                          {errors.appointmentDate
                            ? <p className="text-error text-sm mt-1">{errors.appointmentDate}</p>
                            : <p className="text-xs text-gray-500 mt-1">Disponible de 9h à 20h</p>
                          }
                        </div>

                        {/* Payment proof */}
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text flex items-center gap-2">
                              <Upload className="w-4 h-4 text-pink-500" /> Justificatif de réservation
                            </span>
                          </label>

                          {/* Custom file drop zone */}
                          <label
                            className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-xl cursor-pointer transition-colors
                              ${errors.paymentProof ? 'border-error bg-error/5' : 'border-gray-600 bg-gray-700/30 hover:border-pink-500 hover:bg-pink-950/20'}
                            `}
                          >
                            {filePreview ? (
                              <img src={filePreview} alt="Preview" className="h-full object-contain rounded-xl p-1" />
                            ) : formData.paymentProof ? (
                              <div className="flex flex-col items-center gap-2 text-sm">
                                <CheckCircle className="w-8 h-8 text-green-400" />
                                <span className="text-green-400 font-medium">{formData.paymentProof.name}</span>
                              </div>
                            ) : (
                              <div className="flex flex-col items-center gap-2 text-gray-400">
                                <Upload className="w-8 h-8" />
                                <span className="text-sm">Photo de la recharge Transcash</span>
                                <span className="text-xs">Cliquez ou déposez votre fichier ici</span>
                              </div>
                            )}
                            <input type="file" name="paymentProof" onChange={handleChange} className="hidden" required />
                          </label>
                          {errors.paymentProof && <p className="text-error text-sm mt-1">{errors.paymentProof}</p>}

                          <p className="text-sm text-gray-400 mt-2">
                            Pour un virement instantané, contactez-moi sur{' '}
                            <span className="font-semibold text-[#25D366]">WhatsApp +33780967872</span>
                          </p>
                        </div>

                        {/* Optional message */}
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Informations supplémentaires <span className="text-gray-500">(optionnel)</span></span>
                          </label>
                          <textarea
                            name="additionalMessage"
                            value={formData.additionalMessage}
                            onChange={handleChange}
                            className="textarea textarea-bordered h-24 bg-gray-700/50"
                            placeholder="Tenue particulière, lieu spécifique, demande spéciale…"
                          />
                        </div>

                        <div className="flex justify-between pt-2">
                          <button type="button" onClick={handleBack} className="btn btn-ghost gap-2">
                            <ChevronLeft className="w-4 h-4" /> Retour
                          </button>
                          <button type="button" onClick={handleNext} className="btn bg-pink-600 hover:bg-pink-700 border-none text-white gap-2">
                            Vérifier ma réservation <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ── STEP 3 : SUMMARY + CONFIRM ── */}
                  {currentStep === 3 && (
                    <div className="card bg-base-200 shadow-sm animate-in fade-in slide-in-from-right-4 duration-300">
                      <div className="card-body gap-5">
                        <h3 className="text-xl font-semibold text-pink-400">Récapitulatif & confirmation</h3>
                        <p className="text-sm text-gray-400">Vérifiez vos informations avant de valider.</p>

                        <div className="bg-gray-800/60 rounded-xl divide-y divide-gray-700/60 overflow-hidden">
                          <SummaryRow icon={<Sparkles className="w-4 h-4 text-pink-500" />} label="Forfait" value={selectedPackage.duration} />
                          <SummaryRow icon={<span className="text-pink-500 font-bold text-sm">€</span>} label="Tarif" value={<span className="text-pink-400 font-bold text-xl">{selectedPackage.price}</span>} />
                          <SummaryRow icon={<User className="w-4 h-4 text-pink-500" />} label="Nom" value={formData.name} />
                          <SummaryRow icon={<Mail className="w-4 h-4 text-pink-500" />} label="Email" value={formData.email} />
                          <SummaryRow
                            icon={<Calendar className="w-4 h-4 text-pink-500" />}
                            label="Date"
                            value={<span className="capitalize">{formatDate(formData.appointmentDate)}</span>}
                          />
                          {formData.paymentProof && (
                            <SummaryRow
                              icon={<CheckCircle className="w-4 h-4 text-green-400" />}
                              label="Justificatif"
                              value={<span className="text-green-400">{formData.paymentProof.name}</span>}
                            />
                          )}
                          {formData.additionalMessage && (
                            <SummaryRow
                              icon={<Clock className="w-4 h-4 text-pink-500" />}
                              label="Message"
                              value={formData.additionalMessage}
                            />
                          )}
                        </div>

                        <div className="bg-pink-950/30 border border-pink-800/30 rounded-xl p-4 text-sm text-pink-200">
                          ✨ Votre réservation sera confirmée sous <strong>24h</strong> par WhatsApp, Telegram ou email. Un rappel vous sera envoyé la veille du rendez-vous.
                        </div>

                        <div className="flex justify-between pt-2">
                          <button type="button" onClick={handleBack} className="btn btn-ghost gap-2">
                            <ChevronLeft className="w-4 h-4" /> Modifier
                          </button>
                          <button
                            type="submit"
                            disabled={isLoading}
                            className="btn bg-pink-600 hover:bg-pink-700 border-none text-white gap-2 min-w-40"
                          >
                            {isLoading ? (
                              <>
                                <span className="loading loading-spinner loading-sm" />
                                Envoi en cours…
                              </>
                            ) : (
                              <>
                                <CheckCircle className="w-4 h-4" /> Confirmer
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </form>
              </>
            )}
          </div>
        </div>

        {/* ── INFO SECTION ── */}
        <div className="divider mt-12" />

        <div className="space-y-6">
          <p className="text-gray-300">
            Vous pouvez effectuer le règlement de votre recharge Transcash en ligne via deux plateformes dédiées. Sélectionnez le montant correspondant au tarif choisi, achetez la recharge, puis joignez la photo dans le formulaire de réservation.
          </p>

          <div className="space-y-4 p-4 bg-gray-700/50 rounded-lg shadow-md">
            <h2 className="font-semibold flex items-center gap-2">
              Deux plateformes d'achat de recharge <ArrowBigDown size={28} color="#ee1794" />
            </h2>
            <div className="relative w-full h-[140px] overflow-hidden rounded-lg border border-gray-200">
              <iframe
                src="https://cdn.iframe.ly/api/iframe?app=1&url=https%3A%2F%2Fwww.transcash-recharge.com&key=f465d843feece6bc76328fed1045d15e"
                className="absolute top-0 left-0 w-full h-full border-0"
                title="Transcash Recharge"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="relative w-full h-[140px] overflow-hidden rounded-lg border border-gray-200">
              <iframe
                src="https://cdn.iframe.ly/api/iframe?app=1&url=https%3A%2F%2Fcartedirecte.fr&key=f465d843feece6bc76328fed1045d15e"
                className="absolute top-0 left-0 w-full h-full border-0"
                title="Carte Directe"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <script async src="https://cdn.iframe.ly/embed.js" />
          </div>

          <p>
            Contactez-moi sur{' '}
            <span className="font-semibold text-[#25D366]">WhatsApp +33780967872</span> ou sur Telegram{' '}
            <a href="https://t.me/moreau_brunella" className="text-[#0088CC] hover:underline">
              @moreau_brunella
            </a>{' '}
            pour toute information.
          </p>

          <div>
            <h2 className="font-semibold mb-2">Confirmation et rappel</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
              <li>Confirmation immédiate après réservation (WhatsApp, Telegram ou email)</li>
              <li>Rappel envoyé 24h avant le rendez-vous</li>
              <li>Facture détaillée envoyée après réservation</li>
              <li>Réservation confirmée uniquement après réception de la facture</li>
            </ul>
          </div>

          <p className="italic text-pink-400 text-center text-lg">
            Le meilleur moyen de résister à la tentation est d'y céder.
          </p>
        </div>
      </div>
    </section>
  )
}

// ── Helper component ──
function SummaryRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: React.ReactNode
}) {
  return (
    <div className="flex items-center gap-3 px-4 py-3">
      <div className="w-5 flex-shrink-0">{icon}</div>
      <p className="text-gray-400 text-sm w-24 flex-shrink-0">{label}</p>
      <p className="text-white text-sm flex-1">{value}</p>
    </div>
  )
}