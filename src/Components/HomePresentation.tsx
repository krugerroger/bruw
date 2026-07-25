'use client'

import React from 'react';
import Image from 'next/image';
import { Shield, MapPin, Star, Heart, User, Bell, Utensils, Plane } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function SectionBrunella() {
  const t = useTranslations('Home.Services');

  const servicesList = [
    {
      icon: Bell,
      title: t('items.privateEncounters.title'),
      description: t('items.privateEncounters.description')
    },
    {
      icon: Utensils,
      title: t('items.dinners.title'),
      description: t('items.dinners.description')
    },
    {
      icon: Plane,
      title: t('items.travel.title'),
      description: t('items.travel.description')
    },
    {
      icon: Shield,
      title: t('items.discretion.title'),
      description: t('items.discretion.description')
    }
  ];

  const featuresList = [
    {
      icon: User,
      title: t('features.independent.title'),
      description: t('features.independent.description')
    },
    {
      icon: Star,
      title: t('features.experience.title'),
      description: t('features.experience.description')
    },
    {
      icon: Heart,
      title: t('features.passion.title'),
      description: t('features.passion.description')
    },
    {
      icon: MapPin,
      title: t('features.location.title'),
      description: t('features.location.description')
    }
  ];

  return (
    <section className="bg-[#0b0c10] text-white py-16 px-4 md:px-8 font-sans selection:bg-amber-500 selection:text-black">
      <div className="max-w-6xl mx-auto">
        
        {/* --- HEADER / MES SERVICES --- */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-amber-500 font-semibold mb-2">
            {t('header.tagline')}
          </p>
          <h2 className="text-2xl md:text-3xl font-serif tracking-wide text-gray-100">
            {t('header.title')}
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-4" />
        </div>

        {/* --- GRILLE DES SERVICES --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-20">
          {servicesList.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="flex flex-col items-center group">
                <div className="p-3 rounded-full border border-amber-500/20 text-amber-500 mb-3 group-hover:bg-amber-500/10 transition-colors">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-bold tracking-wider uppercase mb-2 text-amber-500/90">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-400 max-w-[200px] leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* --- SECTION À PROPOS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Bloc Texte */}
          <div className="space-y-6 order-2 md:order-1 text-center md:text-left">
            <div>
              <p className="uppercase tracking-widest text-amber-500 font-semibold mb-2">
                {t('about.tagline')}
              </p>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-100 leading-tight">
                {t('about.titlePart1')} <br />
                <span className="italic font-light">{t('about.titlePart2')}</span>
              </h2>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
              {t('about.description')}
            </p>

            <div className="pt-2">
              <Link href="/about" className="border border-amber-500 text-amber-500 px-6 py-2.5 font-semibold uppercase tracking-widest hover:bg-amber-500 hover:text-black transition-all duration-300">
                {t('about.cta')}
              </Link>
            </div>
          </div>

          {/* Bloc Image */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/3] overflow-hidden rounded shadow-2xl shadow-black/50 grayscale-[20%] hover:grayscale-0 transition-all duration-500">
              <Image 
                src="/gallery/1_1.jpeg" 
                alt={t('about.imageAlt')}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* --- FOOTER DE LA SECTION (Caractéristiques) --- */}
        <div className="border-t border-gray-900 pt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          {featuresList.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <IconComponent className="w-5 h-5 text-amber-500 shrink-0" />
                <div>
                  <h4 className="font-bold uppercase tracking-wider text-gray-200">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-400 mt-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}