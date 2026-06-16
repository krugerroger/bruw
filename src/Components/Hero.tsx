'use client'

import React from 'react'
import { Variants, motion } from 'framer-motion'
import Image from 'next/image'
import { Booker } from './Book'
import { Clock, Gem, ShieldCheck } from 'lucide-react'

export default function Hero() {
  // Variantes pour l'animation du conteneur

  return (
    <section className="relative h-screen min-h-[750px] w-full overflow-hidden bg-[#0b0c10]">
      
      {/* --- IMAGE DE FOND (Référence à image.png pour l'ambiance sombre/luxe) --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bru_hero.jpg"
          alt="BRUNELLA - Escort Premium en France"
          fill
          className="object-cover object-center grayscale-[15%]"
          priority // Remplacé lazy par priority car c'est le LCP (Hero banner)
          quality={100}
        />
        {/* Descente de gradient plus sombre et immersive pour faire ressortir le texte */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/60 to-black/30" />
      </div>

      {/* --- CONTENU --- */}
      <div
        className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 h-full flex items-center relative z-10"
        
      >
        <div className="max-w-xl md:max-w-2xl text-left space-y-6">
          
          {/* Titres harmonisés avec le style "Raffinement" de image.png */}
          <div className="space-y-1">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-wide text-white"
            
            >
              BRUNELLA
            </h1>
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl font-serif italic font-light text-amber-500 tracking-wide"
            
            >
              Escort professionnelle en France
            </h2>
            {/* Ligne de séparation fine style or */}
            <div 
              className="h-[1px] w-40 sm:w-60 bg-gradient-to-r from-amber-500 to-transparent mt-4"
            
            />
          </div>

          {/* Sous-titre */}
          <p
            className="text-sm sm:text-base md:text-lg uppercase tracking-widest text-gray-300 font-sans font-medium max-w-lg"
          
          >
            Discrétion, élégance & moments inoubliables
          </p>

          {/* Bouton d'action principal */}
          <div className="pt-2">
            <Booker />
          </div>

          {/* --- LES BADGES / CARACTÉRISTIQUES --- */}
          <div 
            className="pt-8 flex flex-wrap items-center gap-4 sm:gap-6"
          
          >
            {[
              { icon: ShieldCheck, label: "Discrétion assurée" },
              { icon: Gem, label: "Élégance & raffinement" },
              { icon: Clock, label: "Disponibilité flexible" }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 px-4 py-3 rounded border border-amber-500/10 bg-black/40 backdrop-blur-sm min-w-[170px] sm:min-w-[200px]"
              >
                <div className="p-2 rounded-full bg-amber-500/10 text-amber-500 shrink-0">
                  <feature.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h6 className="font-sans font-semibold text-[10px] sm:text-xs uppercase tracking-wider text-gray-200">
                  {feature.label}
                </h6>
              </div>
            ))}
          </div>
          
        </div>
      </div>

      {/* --- INDICATEUR DE SCROLL --- */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer hidden sm:block"
       
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] uppercase tracking-widest text-amber-500/70 font-semibold">Scroll</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-amber-500"
          >
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
      </div>

    </section>
  )
}