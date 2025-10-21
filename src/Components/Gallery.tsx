'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const galleryImages = [
  {
    id: 1,
    src: '/gallery/1.jpg',
    alt: 'Brunella en tenue de soirée au restaurant',
    category: 'intérieur',
    blurred: false
  },
  {
    id: 2,
    src: '/gallery/2.jpg',
    alt: 'Brunella en ville, tenue élégante',
    category: 'intérieur',
    blurred: false // Exemple d'image floutée
  },
  {
    id: 3,
    src: '/gallery/3.jpg',
    alt: 'Ambiance intérieure chic',
    category: 'intérieur',
    blurred: false
  },
  {
    id: 4,
    src: '/gallery/4.jpg',
    alt: 'Soirée romantique',
    category: 'intérieur',
    blurred: false
  },
  {
    id: 5,
    src: '/gallery/5.jpg',
    alt: 'Moment détente en lounge',
    category: 'intérieur',
    blurred: false
  },
  {
    id: 6,
    src: '/gallery/6.jpg',
    alt: 'Cocktail en terrasse',
    category: 'intérieur',
    blurred: false
  },
  {
    id: 7,
    src: '/gallery/7.jpg',
    alt: 'Cocktail en terrasse',
    category: 'intérieur',
    blurred: false
  },
  {
    id: 8,
    src: '/gallery/8.jpg',
    alt: 'Cocktail en terrasse',
    category: 'intérieur',
    blurred: false
  },
  {
    id: 9,
    src: '/gallery/9.jpg',
    alt: 'Cocktail en terrasse',
    category: 'intérieur',
    blurred: false
  },
  {
    id: 10,
    src: '/gallery/10.jpg',
    alt: 'Cocktail en terrasse',
    category: 'intérieur',
    blurred: false
  },
  {
    id: 11,
    src: '/gallery/11.jpg',
    alt: 'Cocktail en terrasse',
    category: 'intérieur',
    blurred: false
  },
  {
    id: 12,
    src: '/gallery/12.jpg',
    alt: 'Cocktail en terrasse',
    category: 'intérieur',
    blurred: false
  },
  {
    id: 13,
    src: '/gallery/13.jpg',
    alt: 'Cocktail en terrasse',
    category: 'ville',
    blurred: false
  },
  {
    id: 14,
    src: '/gallery/14.jpg',
    alt: 'Cocktail en terrasse',
    category: 'intérieur',
    blurred: false
  },
  {
    id: 15,
    src: '/gallery/15.jpg',
    alt: 'Cocktail en terrasse',
    category: 'ville',
    blurred: false
  },
  {
    id: 16,
    src: '/gallery/16.jpg',
    alt: 'Cocktail en terrasse',
    category: 'soirée',
    blurred: false
  },
  {
    id: 17,
    src: '/gallery/17.jpg',
    alt: 'Cocktail en terrasse',
    category: 'intérieur',
    blurred: false
  },
  {
    id: 18,
    src: '/gallery/18.jpg',
    alt: 'Cocktail en terrasse',
    category: 'intérieur',
    blurred: false
  },
  {
    id: 19,
    src: '/gallery/19.jpg',
    alt: 'Cocktail en terrasse',
    category: 'ville',
    blurred: false
  },
  {
    id: 20,
    src: '/gallery/20.jpg',
    alt: 'Cocktail en terrasse',
    category: 'ville',
    blurred: false
  },
  {
    id: 21,
    src: '/gallery/21.jpg',
    alt: 'Cocktail en terrasse',
    category: 'ville',
    blurred: false
  },
  {
    id: 22,
    src: '/gallery/22.jpg',
    alt: 'Cocktail en terrasse',
    category: 'ville',
    blurred: false
  },
  {
    id: 23,
    src: '/gallery/23.jpg',
    alt: 'Cocktail en terrasse',
    category: 'ville',
    blurred: false
  },
  {
    id: 24,
    src: '/gallery/24.jpg',
    alt: 'Cocktail en terrasse',
    category: 'ville',
    blurred: false
  },
  {
    id: 25,
    src: '/gallery/25.jpg',
    alt: 'Cocktail en terrasse',
    category: 'ville',
    blurred: false
  },
  {
    id: 26,
    src: '/gallery/26.jpg',
    alt: 'Cocktail en terrasse',
    category: 'ville',
    blurred: false
  },
  {
    id: 27,
    src: '/gallery/27.jpg',
    alt: 'Cocktail en terrasse',
    category: 'ville',
    blurred: false
  },
  {
    id: 28,
    src: '/gallery/28.jpg',
    alt: 'Cocktail en terrasse',
    category: 'ville',
    blurred: false
  },
  {
    id: 29,
    src: '/gallery/29.jpg',
    alt: 'Cocktail en terrasse',
    category: 'ville',
    blurred: false
  },
  {
    id: 30,
    src: '/gallery/30.jpg',
    alt: 'Cocktail en terrasse',
    category: 'ville',
    blurred: false
  },
  {
    id: 31,
    src: '/gallery/31.jpg',
    alt: 'Cocktail en terrasse',
    category: 'ville',
    blurred: false
  },
  {
    id: 32,
    src: '/gallery/32.jpg',
    alt: 'Cocktail en terrasse',
    category: 'ville',
    blurred: false
  },
  {
    id: 33,
    src: '/gallery/33.jpg',
    alt: 'Cocktail en terrasse',
    category: 'ville',
    blurred: false
  },
  {
    id: 34,
    src: '/gallery/34.jpg',
    alt: 'Cocktail en terrasse',
    category: 'ville',
    blurred: false
  },
  {
    id: 35,
    src: '/gallery/35.jpg',
    alt: 'Cocktail en terrasse',
    category: 'ville',
    blurred: false
  },
  {
    id: 36,
    src: '/gallery/36.jpg',
    alt: 'Cocktail en terrasse',
    category: 'ville',
    blurred: false
  },
  {
    id: 37,
    src: '/gallery/37.jpg',
    alt: 'Cocktail en terrasse',
    category: 'ville',
    blurred: false
  },
  {
    id: 38,
    src: '/gallery/38.jpg',
    alt: 'Cocktail en terrasse',
    category: 'ville',
    blurred: false
  },
  {
    id: 39,
    src: '/gallery/39.jpg',
    alt: 'Cocktail en terrasse',
    category: 'ville',
    blurred: false
  },
  {
    id: 40,
    src: '/gallery/40.jpg',
    alt: 'Cocktail en terrasse',
    category: 'ville',
    blurred: false
  },
  {
    id: 41,
    src: '/gallery/41.jpg',
    alt: 'Cocktail en terrasse',
    category: 'ville',
    blurred: false
  },
  {
    id: 42,
    src: '/gallery/42.jpg',
    alt: 'Cocktail en terrasse',
    category: 'ville',
    blurred: false
  },
  {
    id: 43,
    src: '/gallery/43.jpg',
    alt: 'Cocktail en terrasse',
    category: 'ville',
    blurred: false
  },
  {
    id: 44,
    src: '/gallery/44.jpg',
    alt: 'Cocktail en terrasse',
    category: 'ville',
    blurred: false
  },
  {
    id: 45,
    src: '/gallery/45.jpg',
    alt: 'Cocktail en terrasse',
    category: 'ville',
    blurred: false
  },
  {
    id: 46,
    src: '/gallery/46.jpg',
    alt: 'Cocktail en terrasse',
    category: 'ville',
    blurred: false
  },
  {
    id: 47,
    src: '/gallery/47.jpg',
    alt: 'Cocktail en terrasse',
    category: 'ville',
    blurred: false
  },
  {
    id: 48,
    src: '/gallery/48.jpg',
    alt: 'Cocktail en terrasse',
    category: 'ville',
    blurred: false
  },
  {
    id: 49,
    src: '/gallery/49.jpg',
    alt: 'Cocktail en terrasse',
    category: 'ville',
    blurred: false
  },
  {
    id: 50,
    src: '/gallery/50.jpg',
    alt: 'Cocktail en terrasse',
    category: 'ville',
    blurred: false
  },
  {
    id: 51,
    src: '/gallery/51.jpg',
    alt: 'Cocktail en terrasse',
    category: 'ville',
    blurred: false
  },
  {
    id: 52,
    src: '/gallery/52.jpg',
    alt: 'Cocktail en terrasse',
    category: 'ville',
    blurred: false
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [filter, setFilter] = useState<string>('tous')

  const filteredImages = filter === 'tous' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter)

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100
      }
    }
  }

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        {/* Titre et filtres */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4 font-serif">Galerie</h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button 
              onClick={() => setFilter('tous')}
              className={`btn btn-sm ${filter === 'tous' ? 'btn-primary' : 'btn-ghost'}`}
            >
              Tous
            </button>
            <button 
              onClick={() => setFilter('soirée')}
              className={`btn btn-sm ${filter === 'soirée' ? 'btn-primary' : 'btn-ghost'}`}
            >
              Soirées
            </button>
            <button 
              onClick={() => setFilter('ville')}
              className={`btn btn-sm ${filter === 'ville' ? 'btn-primary' : 'btn-ghost'}`}
            >
              Ville
            </button>
            <button 
              onClick={() => setFilter('intérieur')}
              className={`btn btn-sm ${filter === 'intérieur' ? 'btn-primary' : 'btn-ghost'}`}
            >
              Intérieurs
            </button>
          </div>
        </motion.div>

        {/* Grille d'images */}
        <motion.div
           key={filter} // 👈 important pour forcer le "reset"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            variants={container}
            initial="hidden"
            animate="visible"
            exit="hidden"
            viewport={{ once: true, margin: "-100px" }}
        >
        {filteredImages.map((image) => (
         <motion.div 
            key={image.id}
            variants={item}
            whileHover={{ scale: 1.03 }}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
            onClick={() => setSelectedImage(image.id)} // 👈 ajoute ceci
          >

            {/* Conteneur principal avec protection intégrée */}
            <div className="relative h-full w-full">
              {/* Image de base */}
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover select-none"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
              />

              {/* Couche de protection permanente */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Filigrane principal (répété en motif) */}
                

                {/* Signature visible */}
                <div className="absolute bottom-2 right-2 bg-black/70 text-white/80 px-2 py-1 rounded text-xs">
                  © Brunella Moreau
                </div>
              </div>

              {/* Overlay de flou si nécessaire */}
              {image.blurred && (
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-white font-medium">Cliquer pour voir</span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
        </motion.div>

       {/* Lightbox améliorée */}
{selectedImage && (
  <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
    {/* Bouton fermeture */}
    <button 
      className="absolute top-4 right-4 text-white hover:text-primary text-4xl z-10 transition-all"
      onClick={() => setSelectedImage(null)}
      aria-label="Fermer"
    >
      &times;
    </button>

    {/* Navigation */}
    {galleryImages.length > 1 && (
      <>
        <button
          className="absolute left-4 md:left-8 text-white hover:text-primary text-2xl md:text-4xl z-10 p-2"
          onClick={() => {
            const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
            const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
            setSelectedImage(galleryImages[prevIndex].id);
          }}
          aria-label="Image précédente"
        >
          ❮
        </button>
        <button
          className="absolute right-4 md:right-8 text-white hover:text-primary text-2xl md:text-4xl z-10 p-2"
          onClick={() => {
            const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
            const nextIndex = (currentIndex + 1) % galleryImages.length;
            setSelectedImage(galleryImages[nextIndex].id);
          }}
          aria-label="Image suivante"
        >
          ❯
        </button>
      </>
    )}

    {/* Conteneur image avec filigrane */}
    <div className="relative w-full max-w-6xl h-[90vh]">
      <Image
        src={galleryImages.find(img => img.id === selectedImage)!.src}
        alt={galleryImages.find(img => img.id === selectedImage)!.alt}
        fill
        className="object-contain select-none"
        draggable="false"
        priority
        quality={100}
        onContextMenu={(e) => e.preventDefault()}
      />

      {/* Filigrane persistant */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Motif diagonal discret */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              repeating-linear-gradient(
                -45deg,
                rgba(255,255,255,0.1),
                rgba(255,255,255,0.1) 1px,
                transparent 1px,
                transparent 10px
              )
            `
          }}
        />
        
        {/* Signature visible */}
        <div className="absolute bottom-4 right-4 bg-black/70 text-white/80 px-3 py-1 rounded text-sm md:text-base backdrop-blur-sm">
          ©{new Date().getFullYear()} Brunella Moreau
        </div>
      </div>
    </div>

    {/* Indicateur de position (si plusieurs images) */}
    {galleryImages.length > 1 && (
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {galleryImages.map((img, index) => (
          <button
            key={img.id}
            className={`w-3 h-3 rounded-full ${img.id === selectedImage ? 'bg-white' : 'bg-white/30'}`}
            onClick={() => setSelectedImage(img.id)}
            aria-label={`Aller à l’image ${index + 1}`}
          />
        ))}
      </div>
    )}
  </div>
)}
      </div>
    </section>
  )
}