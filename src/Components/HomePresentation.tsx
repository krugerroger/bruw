import React from 'react';
import Image from 'next/image';
import { Shield, MapPin, Star, Heart, User, Bell, Utensils, Plane } from 'lucide-react';
import Link from 'next/link';

export default function SectionBrunella() {
  return (
    <section className="bg-[#0b0c10] text-white py-16 px-4 md:px-8 font-sans selection:bg-amber-500 selection:text-black">
      <div className="max-w-6xl mx-auto">
        
        {/* --- HEADER / MES SERVICES --- */}
        <div className="text-center mb-16">
          <p className=" uppercase tracking-widest text-amber-500 font-semibold mb-2">
            Mes Services
          </p>
          <h2 className="text-2xl md:text-3xl font-serif tracking-wide text-gray-100">
            Des moments uniques rien que pour vous
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-4" />
        </div>

        {/* --- GRILLE DES SERVICES --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-20">
          {/* Service 1 */}
          <div className="flex flex-col items-center group">
            <div className="p-3 rounded-full border border-amber-500/20 text-amber-500 mb-3 group-hover:bg-amber-500/10 transition-colors">
              <Bell className="w-6 h-6" />
            </div>
            <h3 className=" md: font-bold tracking-wider uppercase mb-2 text-amber-500/90">
              Rencontres Privées
            </h3>
            <p className="text-sm text-gray-400 max-w-[200px] leading-relaxed">
              Des instants privilégiés dans un cadre discret et raffiné.
            </p>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col items-center group">
            <div className="p-3 rounded-full border border-amber-500/20 text-amber-500 mb-3 group-hover:bg-amber-500/10 transition-colors">
              <Utensils className="w-6 h-6" />
            </div>
            <h3 className=" md: font-bold tracking-wider uppercase mb-2 text-amber-500/90">
              Dîners & Sorties
            </h3>
            <p className=" text-sm text-gray-400 max-w-[200px] leading-relaxed">
              Votre accompagnement élégant pour vos dîners, événements et soirées.
            </p>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col items-center group">
            <div className="p-3 rounded-full border border-amber-500/20 text-amber-500 mb-3 group-hover:bg-amber-500/10 transition-colors">
              <Plane className="w-6 h-6" />
            </div>
            <h3 className=" md: font-bold tracking-wider uppercase mb-2 text-amber-500/90">
              Déplacements
            </h3>
            <p className=" text-sm text-gray-400 max-w-[200px] leading-relaxed">
              Je me déplace dans toute la France pour des moments inoubliables.
            </p>
          </div>

          {/* Service 4 */}
          <div className="flex flex-col items-center group">
            <div className="p-3 rounded-full border border-amber-500/20 text-amber-500 mb-3 group-hover:bg-amber-500/10 transition-colors">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className=" md: font-bold tracking-wider uppercase mb-2 text-amber-500/90">
              Discrétion Absolue
            </h3>
            <p className=" text-sm text-gray-400 max-w-[200px] leading-relaxed">
              Votre intimité est ma priorité absolue. Discrétion et respect garantis.
            </p>
          </div>
        </div>

        {/* --- SECTION À PROPOS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Bloc Texte */}
          <div className="space-y-6 order-2 md:order-1 text-center md:text-left">
            <div>
              <p className=" uppercase tracking-widest text-amber-500 font-semibold mb-2">
                À Propos
              </p>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-100 leading-tight">
                Brunella, l'art de la séduction <br />
                <span className="italic font-light">et du raffinement</span>
              </h2>
            </div>
            
            <p className=" text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
              Brunella, escort indépendante haut de gamme, vous reçoit pour des moments d'exception. 
              Élégante, attentionnée et passionnée, je vous offre bien plus qu'une rencontre : 
              une véritable expérience.
            </p>

            <div className="pt-2">
              <Link href="/about" className="border border-amber-500 text-amber-500 px-6 py-2.5  font-semibold uppercase tracking-widest hover:bg-amber-500 hover:text-black transition-all duration-300">
                En savoir plus
              </Link>
            </div>
          </div>

          {/* Bloc Image */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/3] overflow-hidden rounded shadow-2xl shadow-black/50 grayscale-[20%] hover:grayscale-0 transition-all duration-500">
              {/* Remplacer par votre vrai chemin d'image */}
              <Image 
                src="/gallery/1_1.jpeg" 
                alt="Brunella, art de la séduction"
                fill
                className="object-cover object-center"
                sizes="(max-w-768px) 100vw, 50vw"
                priority
              />
              {/* Overlay sombre subtil pour coller à l'ambiance */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* --- FOOTER DE LA SECTION (Caractéristiques) --- */}
        <div className="border-t border-gray-900 pt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
            <User className="w-5 h-5 text-amber-500 shrink-0" />
            <div>
              <h4 className=" font-bold uppercase tracking-wider text-gray-200">Indépendante</h4>
              <p className="text-sm text-gray-400 mt-1">Service exclusif et personnalisé.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
            <Star className="w-5 h-5 text-amber-500 shrink-0" />
            <div>
              <h4 className=" font-bold uppercase tracking-wider text-gray-200">Expérience</h4>
              <p className="text-sm text-gray-400 mt-1">Des moments uniques et mémorables.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
            <Heart className="w-5 h-5 text-amber-500 shrink-0" />
            <div>
              <h4 className=" font-bold uppercase tracking-wider text-gray-200">Passion</h4>
              <p className="text-sm text-gray-400 mt-1">L'art de vous faire vivre des instants d'exception.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
            <MapPin className="w-5 h-5 text-amber-500 shrink-0" />
            <div>
              <h4 className=" font-bold uppercase tracking-wider text-gray-200">Partout en France</h4>
              <p className="text-sm text-gray-400 mt-1">Déplacements possibles selon vos envies.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}