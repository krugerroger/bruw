'use client'

import React from 'react'
import { Variants, motion } from 'framer-motion'
import Image from 'next/image'
import { Booker } from './Book'
import { Clock, Gem, ShieldCheck } from 'lucide-react'
import { useTranslations } from 'next-intl' // Import de next-intl

export default function Hero() {
  const t = useTranslations('Home.Hero'); // Récupération des traductions pour la section Hero

  const features = [
    { icon: ShieldCheck, label: t('features.discretion') },
    { icon: Gem, label: t('features.elegance') },
    { icon: Clock, label: t('features.availability') }
  ];

  return (
    <section className="relative h-screen min-h-[750px] w-full overflow-hidden bg-[#0b0c10]">
      
      <div className="absolute inset-0 z-0">
        <Image
          src="/bru_hero.jpg"
          alt={t('imageAlt')}
          fill
          className="object-cover object-center grayscale-[15%]"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/60 to-black/30" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 h-full flex items-center relative z-10">
        <div className="max-w-xl md:max-w-2xl text-left space-y-6">
          
          <div className="space-y-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-wide text-white">
              {t('title')}
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif italic font-light text-amber-500 tracking-wide">
              {t('subtitle')}
            </h2>
            <div className="h-[1px] w-40 sm:w-60 bg-gradient-to-r from-amber-500 to-transparent mt-4" />
          </div>

          <p className="text-sm sm:text-base md:text-lg uppercase tracking-widest text-gray-300 font-sans font-medium max-w-lg">
            {t('description')}
          </p>

          <div className="pt-2">
            <Booker />
          </div>

          <div className="pt-8 flex flex-wrap items-center gap-4 sm:gap-6">
            {features.map((feature, index) => (
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

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer hidden sm:block">
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] uppercase tracking-widest text-amber-500/70 font-semibold">{t('scroll')}</span>
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