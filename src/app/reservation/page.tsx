'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, CheckCircle, ChevronRight, ChevronLeft, Upload, User, Mail, Clock, ArrowBigDown, Sparkles, ChevronDown, ExternalLink } from 'lucide-react'

interface BookingFormProps {
  selectedPackage: {
    title: string
    duration: string
    price: string
    description?: string
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
  description?: string
}

interface Offer {
  title: string
  price: PriceOption[]
}

const Offers: Offer = {
  title: 'Rendez-vous galant',
  price: [
    { duration: '1 heure', amount: '150€ (jour) / 170€ (soir)', description: '2 rapports + massage' },
    { duration: '1 heure 30', amount: '240€ (jour) / 260€ (soir)', description: '3 rapports + massage' },
    { duration: '2 heures', amount: '300€ (jour) / 320€ (soir)', description: '3 à 4 rapports + massage' },
    { duration: '3 heures', amount: '400€ (jour) / 420€ (soir)', description: '4 rapports + massage' },
    { duration: 'Après-midi détente (4h, avant 19h)', amount: '550€', description: 'Spa, hammam, massage, verre/déjeuner + moment intime' },
    { duration: 'Soirée Délice (20h–00h, 4h)', amount: '670€', description: '2h dîner + 2h plaisir' },
    { duration: 'Soirée Torride (20h–01h, 5h)', amount: '720€', description: '2h dîner + 3h plaisir' },
    { duration: 'Nuit Complète (20h–08h, 12h)', amount: '800€', description: 'Dîner, nuit sensuelle (5h de sommeil min.), petit déjeuner à prévoir' },
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
    description: Offers.price[0].description,
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
        description: offer.price[selectedIndex].description,
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
    <section id="reservation" className="py-20 bg-base-100 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-start">

{/* Sidebar image */}
<div className="hidden lg:block lg:w-1/3 sticky top-20 space-y-6">
  <div className="relative h-[28rem] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
    <Image
      src="/bru_hero.jpg"
      alt="Brunella Moreau - Moments privilégiés"
      sizes="(min-width: 640px) 32rem, 90vw"
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-105"
    />
    {/* Dégradé de cinéma plus immersif */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
    
    <div className="absolute bottom-8 left-8 text-white space-y-1">
      <p className="text-2xl font-light tracking-wide">Des moments uniques</p>
      <p className="text-xs uppercase tracking-[0.2em] text-white/60 font-medium">sur mesure</p>
    </div>
  </div>

  {/* Package summary card visible on step 2+ */}
  {currentStep >= 2 && !submitted && (
<div className="relative bg-[#121212]/70 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl space-y-4 animate-in fade-in slide-in-from-top-4 duration-500 overflow-hidden">
  {/* Halo lumineux en arrière-plan */}
  <div className="absolute -top-16 -right-16 w-36 h-36 bg-gradient-to-br from-amber-500/20 to-transparent rounded-full blur-3xl pointer-events-none" />

  <div className="flex items-center justify-between border-b border-white/5 pb-3 relative z-10">
    <p className="text-amber-400 font-medium uppercase tracking-[0.15em] text-xs">
      Votre sélection
    </p>
    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_#f43f5e] animate-pulse"></span>
  </div>
  
  <div className="space-y-1 relative z-10">
    <p className="text-base font-light text-white/90">{selectedPackage.duration}</p>
    <p className="text-4xl font-bold text-amber-400">
      {selectedPackage.price}
    </p>
  </div>

  {selectedPackage.description && (
    <p className="text-xs text-gray-400 border-t border-white/5 pt-3 font-light leading-relaxed relative z-10">
      {selectedPackage.description}
    </p>
  )}
</div>
  )}
</div>

          {/* Main form area */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-500 mb-2">Réserver un rendez-vous</h2>
            <div className="w-20 h-1 bg-amber-500 mb-8" />

            {/* ── SUCCESS STATE ── */}
            {submitted ? (
              <div className="card bg-base-200 shadow-lg overflow-hidden">
                {/* Top accent bar */}
                <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600" />
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
                    <p className="text-amber-400 font-semibold uppercase tracking-wider text-xs">Récapitulatif</p>
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
                        <p className="font-bold text-amber-400 text-xl">{selectedPackage.price}</p>
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
                              ${isDone ? 'bg-amber-600 border-amber-600 text-white' : ''}
                              ${isActive ? 'bg-transparent border-amber-500 text-amber-500 shadow-[0_0_12px_rgba(236,72,153,0.4)]' : ''}
                              ${!isActive && !isDone ? 'bg-transparent border-gray-600 text-gray-500' : ''}
                            `}
                          >
                            {isDone ? <CheckCircle className="w-5 h-5" /> : <Icon className="w-4 h-4" />}
                          </div>
                          <span
                            className={`text-xs font-medium transition-colors
                              ${isActive ? 'text-amber-400' : isDone ? 'text-amber-600' : 'text-gray-500'}
                            `}
                          >
                            {step.label}
                          </span>
                        </div>
                        {i < STEPS.length - 1 && (
                          <div
                            className={`flex-1 h-0.5 mx-2 mb-4 transition-all duration-500
                              ${currentStep > step.id ? 'bg-amber-600' : 'bg-gray-700'}
                            `}
                          />
                        )}
                      </div>
                    )
                  })}
                </div>
                <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-2xl mx-auto">

                  {/* ── STEP 1 : PACKAGE SELECTION ── */}
                  {currentStep === 1 && (
                    <div className="bg-[#121212]/80 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl p-6 sm:p-8 animate-in fade-in slide-in-from-right-4 duration-500">
                      <div className="flex flex-col gap-6">
                        <h3 className="text-2xl font-light text-white flex items-center gap-3">
                          <span className="w-8 h-[1px] bg-amber-500"></span>
                          Votre Expérience
                        </h3>

                        {offer && (
                          <div className="space-y-6">
                            <div className="flex flex-col gap-2">
                              <label className="text-sm font-medium text-gray-400 tracking-wide uppercase">
                                Sélectionnez une formule
                              </label>
                              <div className="relative">
                                <select
                                  name="selectedPackage"
                                  onChange={handlePackageChange}
                                  className="w-full appearance-none bg-white/5 border border-white/10 text-white rounded-2xl px-5 py-4 outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all cursor-pointer"
                                >
                                  {offer.price.map((option, index) => (
                                    <option key={index} value={index} className="bg-gray-900 text-white">
                                      {option.duration} — {option.amount}
                                    </option>
                                  ))}
                                </select>
                                <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                                  <ChevronDown className="w-5 h-5 text-gray-400" />
                                </div>
                              </div>
                              {errors.package && <p className="text-amber-400 text-sm mt-1">{errors.package}</p>}
                            </div>

                            {/* Selected package preview card */}
                            <div className="relative overflow-hidden bg-gradient-to-br from-amber-950/40 to-black border border-amber-900/30 rounded-2xl p-6 sm:p-8 group transition-all hover:border-amber-800/50">
                              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Sparkles className="w-24 h-24 text-amber-500" />
                              </div>
                              <p className="text-amber-300 uppercase tracking-[0.2em] text-xs font-semibold mb-4">Aperçu de la sélection</p>
                              <p className="text-xl font-light text-white mb-1">{selectedPackage.duration}</p>
                              <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-500 mb-4">
                                {selectedPackage.price}
                              </p>
                              {selectedPackage.description && (
                                <p className="text-sm text-gray-400 border-t border-white/5 pt-4 mt-2 font-light leading-relaxed">
                                  {selectedPackage.description}
                                </p>
                              )}
                            </div>

                            <Link href="/tarifs" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-amber-400 transition-colors">
                              Voir tous les tarifs détaillés <ChevronRight className="w-4 h-4" />
                            </Link>
                          </div>
                        )}

                        <div className="flex justify-end pt-4 border-t border-white/5 mt-2">
                          <button 
                            type="button" 
                            onClick={handleNext} 
                            className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]"
                          >
                            Continuer <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ── STEP 2 : PERSONAL INFO ── */}
                  {currentStep === 2 && (
                    <div className="bg-[#121212]/80 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl p-6 sm:p-8 animate-in fade-in slide-in-from-right-4 duration-500">
                      <div className="flex flex-col gap-6">
                        <h3 className="text-2xl font-light text-white flex items-center gap-3 mb-2">
                          <span className="w-8 h-[1px] bg-amber-500"></span>
                          Informations Personnelles
                        </h3>

                        <div className="grid grid-cols-1 gap-6">
                          {/* Name */}
                          <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                              <User className="w-4 h-4 text-amber-400" /> Nom & Prénom
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Votre nom complet"
                              className={`w-full bg-white/5 border ${errors.name ? 'border-amber-500/50' : 'border-white/10'} text-white rounded-2xl px-5 py-4 outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all placeholder:text-gray-600`}
                              required
                            />
                            {errors.name && <p className="text-amber-400 text-sm">{errors.name}</p>}
                          </div>

                          {/* Email */}
                          <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                              <Mail className="w-4 h-4 text-amber-400" /> Adresse Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="votre@email.com"
                              className={`w-full bg-white/5 border ${errors.email ? 'border-amber-500/50' : 'border-white/10'} text-white rounded-2xl px-5 py-4 outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all placeholder:text-gray-600`}
                              required
                            />
                            {errors.email && <p className="text-amber-400 text-sm">{errors.email}</p>}
                          </div>

                          {/* Date */}
                          <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-amber-400" /> Date & Heure souhaitée
                            </label>
                            <input
                              type="datetime-local"
                              name="appointmentDate"
                              value={formData.appointmentDate ? formData.appointmentDate.toISOString().slice(0, 16) : ''}
                              onChange={handleDateChange}
                              min={new Date().toISOString().slice(0, 16)}
                              className={`w-full bg-white/5 border ${errors.appointmentDate ? 'border-amber-500/50' : 'border-white/10'} text-white rounded-2xl px-5 py-4 outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all [color-scheme:dark]`}
                              required
                            />
                            {errors.appointmentDate 
                              ? <p className="text-amber-400 text-sm">{errors.appointmentDate}</p>
                              : <p className="text-xs text-gray-500">Disponible de 9h à 20h</p>
                            }
                          </div>

                          {/* Payment proof */}
                          <div className="flex flex-col gap-2 mt-2">
                            <label className="text-sm font-medium text-gray-400 flex items-center gap-2 mb-1">
                              <Upload className="w-4 h-4 text-amber-400" /> Justificatif de réservation
                            </label>
                            <label
                              className={`relative flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-3xl cursor-pointer transition-all group overflow-hidden
                                ${errors.paymentProof ? 'border-amber-500/50 bg-amber-500/5' : 'border-white/10 bg-white/5 hover:border-amber-400/50 hover:bg-amber-950/20'}
                              `}
                            >
                              {filePreview ? (
                                <div className="absolute inset-0 p-2">
                                  <img src={filePreview} alt="Preview" className="w-full h-full object-contain rounded-2xl" />
                                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl">
                                    <span className="text-white font-medium text-sm">Modifier l'image</span>
                                  </div>
                                </div>
                              ) : formData.paymentProof ? (
                                <div className="flex flex-col items-center gap-3 z-10">
                                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                                    <CheckCircle className="w-6 h-6 text-green-400" />
                                  </div>
                                  <span className="text-green-400 font-medium text-sm">{formData.paymentProof.name}</span>
                                </div>
                              ) : (
                                <div className="flex flex-col items-center gap-3 z-10">
                                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Upload className="w-5 h-5 text-amber-300" />
                                  </div>
                                  <div className="text-center">
                                    <p className="text-sm text-gray-300">Photo de la recharge Transcash</p>
                                    <p className="text-xs text-gray-500 mt-1">Cliquez ou glissez le fichier ici</p>
                                  </div>
                                </div>
                              )}
                              <input type="file" name="paymentProof" onChange={handleChange} className="hidden" required />
                            </label>
                            {errors.paymentProof && <p className="text-amber-400 text-sm mt-1">{errors.paymentProof}</p>}
                            
                            <p className="text-xs text-gray-400 mt-3 flex items-center gap-2 bg-white/5 p-3 rounded-xl">
                              <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
                              Virement instantané ? Contactez-moi sur <strong className="text-[#25D366]">WhatsApp +33780967872</strong>
                            </p>
                          </div>

                          {/* Optional message */}
                          <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-400">
                              Note spéciale <span className="text-gray-600 font-light">(Optionnel)</span>
                            </label>
                            <textarea
                              name="additionalMessage"
                              value={formData.additionalMessage}
                              onChange={handleChange}
                              className="w-full bg-white/5 border border-white/10 text-white rounded-2xl px-5 py-4 outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all placeholder:text-gray-600 min-h-[120px] resize-none"
                              placeholder="Tenue particulière, lieu spécifique, demande spéciale…"
                            />
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-4">
                          <button type="button" onClick={handleBack} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors py-2 px-4 rounded-full hover:bg-white/5">
                            <ChevronLeft className="w-4 h-4" /> Retour
                          </button>
                          <button type="button" onClick={handleNext} className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
                            Vérifier la réservation <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ── STEP 3 : SUMMARY + CONFIRM ── */}
                  {currentStep === 3 && (
                    <div className="bg-[#121212]/80 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl p-6 sm:p-8 animate-in fade-in slide-in-from-right-4 duration-500">
                      <div className="flex flex-col gap-6">
                        <div className="text-center mb-4">
                          <h3 className="text-3xl font-light text-white mb-2">Confirmation</h3>
                          <p className="text-sm text-gray-400">Veuillez vérifier les détails de votre réservation.</p>
                        </div>

                        <div className="bg-black/40 border border-white/5 rounded-3xl p-6 space-y-6">
                          <div className="flex justify-between items-end border-b border-white/5 pb-6">
                            <div>
                              <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">Forfait choisi</p>
                              <p className="text-xl text-white">{selectedPackage.duration}</p>
                            </div>
                            <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-500">
                              {selectedPackage.price}
                            </p>
                          </div>

                          <div className="space-y-4">
                            <SummaryRow icon={<User className="w-4 h-4 text-gray-500" />} label="Nom" value={formData.name} />
                            <SummaryRow icon={<Mail className="w-4 h-4 text-gray-500" />} label="Email" value={formData.email} />
                            <SummaryRow
                              icon={<Calendar className="w-4 h-4 text-gray-500" />}
                              label="Date"
                              value={<span className="capitalize text-amber-300">{formatDate(formData.appointmentDate)}</span>}
                            />
                            {formData.paymentProof && (
                              <SummaryRow
                                icon={<CheckCircle className="w-4 h-4 text-green-500" />}
                                label="Justificatif"
                                value={<span className="text-green-400">{formData.paymentProof.name}</span>}
                              />
                            )}
                            {formData.additionalMessage && (
                              <SummaryRow
                                icon={<Clock className="w-4 h-4 text-gray-500" />}
                                label="Message"
                                value={formData.additionalMessage}
                              />
                            )}
                          </div>
                        </div>

                        <div className="bg-amber-950/20 border border-amber-900/30 rounded-2xl p-5 flex gap-4 items-start">
                          <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                          <p className="text-sm text-amber-200/80 leading-relaxed">
                            Votre réservation sera confirmée sous <strong className="text-amber-100">24h</strong> par WhatsApp, Telegram ou email. Un rappel vous sera envoyé la veille de notre rencontre.
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-6 mt-2">
                          <button type="button" onClick={handleBack} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors py-2 px-4 rounded-full hover:bg-white/5">
                            <ChevronLeft className="w-4 h-4" /> Modifier
                          </button>
                          
                          <button
                            type="submit"
                            disabled={isLoading}
                            className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full font-medium min-w-[200px] hover:shadow-[0_0_30px_-5px_rgba(225,29,72,0.4)] disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98] transition-all"
                          >
                            {isLoading ? (
                              <>
                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Traitement...
                              </>
                            ) : (
                              <>
                                Confirmer la réservation <CheckCircle className="w-5 h-5" />
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

<div className="bg-[#121212]/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
  {/* En-tête de section épuré */}
  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-4">
    <h2 className="text-xl font-light text-white tracking-wide flex items-center gap-3">
      <span className="w-6 h-[1px] bg-amber-500"></span>
      Plateformes d'Achat Sécurisées
    </h2>
    <p className="text-xs text-gray-400 font-light tracking-wider uppercase">
      Obtenir un coupon Transcash
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    
    {/* ── CARTE 1 : RECHARGE.FR ── */}
    <a
      href="https://www.recharge.fr/carte-transcash"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col justify-between bg-white/[0.02] hover:bg-white/[0.06] rounded-2xl border border-white/5 hover:border-amber-500/30 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden p-5"
    >
      <div>
        {/* Conteneur d'image premium */}
        <div className="w-full h-36 mb-4 overflow-hidden rounded-xl bg-black/40 border border-white/5 relative">
          <img
            src="https://www.recharge.fr/_next/image?url=https%3A%2F%2Frecharge-prd.asset.akeneo.cloud%2Fproduct_assets%2Fmedia%2FTranscash.png&w=640&q=75"
            alt="Aperçu de Recharge.fr"
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>
        
        <h3 className="text-lg font-medium text-white tracking-wide mb-2">Recharge.fr</h3>
        <p className="text-gray-400 text-xs font-light leading-relaxed mb-6">
          Rechargez vos mobiles, jeux vidéo et cartes cadeaux instantanément. Plus de 750 marques de confiance disponibles.
        </p>
      </div>

      <div className="flex items-center justify-between text-xs font-medium tracking-wider uppercase text-amber-400 group-hover:text-amber-300 transition-colors pt-2 border-t border-white/5">
        <span>Accéder au site</span>
        <ExternalLink className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </div>
    </a>

    {/* ── CARTE 2 : TRANSCASH RECHARGE ── */}
    <a
      href="https://www.transcash-recharge.com"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col justify-between bg-white/[0.02] hover:bg-white/[0.06] rounded-2xl border border-white/5 hover:border-amber-500/30 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden p-5"
    >
      <div>
        <div className="w-full h-36 mb-4 overflow-hidden rounded-xl bg-black/40 border border-white/5 relative">
          <img
            src="https://www.transcash-recharge.com/sites/uploads/2021/10/Banniere-visuel-coupons_TCRECHARGEnoMSTRD_939x676.png"
            alt="Aperçu de Transcash Recharge"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-90"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </div>
        
        <h3 className="text-lg font-medium text-white tracking-wide mb-2">Transcash Recharge</h3>
        <p className="text-gray-400 text-xs font-light leading-relaxed mb-6">
          La solution officielle et sécurisée par carte prépayée. Créditez votre compte Transcash en ligne en seulement quelques clics.
        </p>
      </div>

      <div className="flex items-center justify-between text-xs font-medium tracking-wider uppercase text-amber-400 group-hover:text-amber-300 transition-colors pt-2 border-t border-white/5">
        <span>Accéder au site</span>
        <ExternalLink className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </div>
    </a>

    {/* ── CARTE 3 : CARTE DIRECTE ── */}
    <a
      href="https://cartedirecte.fr/cartes-de-paiement/transcash"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col justify-between bg-white/[0.02] hover:bg-white/[0.06] rounded-2xl border border-white/5 hover:border-amber-500/30 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden p-5"
    >
      <div>
        <div className="w-full h-36 mb-4 overflow-hidden rounded-xl bg-black/40 border border-white/5 relative">
          <img
            src="https://cartedirecte.fr/cdn-cgi/imagedelivery/Pk8Ky-xDyeK8TLUvfplArQ/cartes-de-paiement-transcash-banner-1659618230.pngv2-staging-1737042874.0467/public?w=1280"
            alt="Aperçu de Carte Directe"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-90"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </div>
        
        <h3 className="text-lg font-medium text-white tracking-wide mb-2">Carte Directe</h3>
        <p className="text-gray-400 text-xs font-light leading-relaxed mb-6">
          Distribution de codes de paiement Mastercard pour vos transactions en ligne. Système immédiat et sans aucun risque de découvert.
        </p>
      </div>

      <div className="flex items-center justify-between text-xs font-medium tracking-wider uppercase text-amber-400 group-hover:text-amber-300 transition-colors pt-2 border-t border-white/5">
        <span>Visiter le site</span>
        <ExternalLink className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </div>
    </a>

  </div>
</div>

<div className="space-y-8 p-6 sm:p-8 bg-[#0e0e0e]/40 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl">
  
  {/* Section Conciergerie / Contact */}
  <div className="space-y-4">
    <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-rose-400/80">
      Assistance & Conciergerie
    </h3>
    <p className="text-sm font-light text-gray-300 leading-relaxed max-w-xl">
      Une question ou une demande particulière ? Nos canaux privés restent à votre entière disposition pour concevoir votre expérience.
    </p>
    
    {/* Boutons de contact discrets et élégants */}
    <div className="flex flex-wrap gap-3 pt-2">
      <a
        href="https://wa.me/votre_numero" // Remplacez par votre lien de contact direct
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 text.xs uppercase tracking-wider font-light bg-[#25D366]/5 hover:bg-[#25D366]/10 border border-[#25D366]/20 hover:border-[#25D366]/40 text-[#25D366] rounded-full transition-all duration-300"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
        WhatsApp
      </a>
      <a
        href="https://t.me/moreau_brunella"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-light bg-[#0088CC]/5 hover:bg-[#0088CC]/10 border border-[#0088CC]/20 hover:border-[#0088CC]/40 text-[#0088CC] rounded-full transition-all duration-300"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#0088CC]" />
        Telegram @moreau_brunella
      </a>
    </div>
  </div>

  {/* Section Informations de Réservation */}
  <div className="pt-6 border-t border-white/5 space-y-4">
    <h2 className="text-sm font-medium uppercase tracking-[0.15em] text-white/90">
      Confirmation &amp; Engagement
    </h2>
    
    {/* Liste stylisée façon grille de conciergerie */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="flex gap-3 items-start">
        <span className="text-rose-400/60 text-xs mt-0.5">01</span>
        <p className="text-xs text-gray-400 font-light leading-relaxed">
          <strong className="text-gray-200 font-normal">Confirmation immédiate</strong> après votre réservation via WhatsApp, Telegram ou email.
        </p>
      </div>
      <div className="flex gap-3 items-start">
        <span className="text-rose-400/60 text-xs mt-0.5">02</span>
        <p className="text-xs text-gray-400 font-light leading-relaxed">
          Un <strong className="text-gray-200 font-normal">rappel personnalisé</strong> vous sera envoyé 24 heures avant notre rendez-vous.
        </p>
      </div>
      <div className="flex gap-3 items-start">
        <span className="text-rose-400/60 text-xs mt-0.5">03</span>
        <p className="text-xs text-gray-400 font-light leading-relaxed">
          Une <strong className="text-gray-200 font-normal">facture détaillée</strong> est émise immédiatement après validation de la demande.
        </p>
      </div>
      <div className="flex gap-3 items-start">
        <span className="text-rose-400/60 text-xs mt-0.5">04</span>
        <p className="text-xs text-gray-400 font-light leading-relaxed">
          Votre réservation n'est <strong className="text-gray-200 font-normal">définitivement confirmée</strong> qu'à réception de ce document.
        </p>
      </div>
    </div>
  </div>

  {/* Signature / Citation Haute Couture */}
  <div className="pt-8 border-t border-white/5 text-center space-y-2">
    <p className="font-serif italic text-xl text-white/70 tracking-wide selection:bg-rose-500/30">
      « Le meilleur moyen de résister à la tentation est d'y céder. »
    </p>
  </div>

</div>
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