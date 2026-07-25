'use client'

import { fileNames } from '@/constants/gallery';
import { motion, AnimatePresence, PanInfo } from 'framer-motion'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { useTranslations } from 'next-intl'

interface GalleryImage {
  id: number;
  src: string;
  blurred?: boolean;
}

const galleryImages: GalleryImage[] = fileNames.map((fileName, index) => ({
  id: index + 1,
  src: `/gallery/${fileName}`,
  blurred: false
}));

export default function Gallery() {
  const t = useTranslations('Home.Gallery');
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  const activeImage = galleryImages[activeIndex];
  const swipeThreshold = 50;

  const paginateNext = () => {
    setActiveIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const paginatePrev = () => {
    setActiveIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const { offset, velocity } = info;

    if (offset.x < -swipeThreshold || velocity.x < -500) {
      paginateNext();
    } else if (offset.x > swipeThreshold || velocity.x > 500) {
      paginatePrev();
    }
  };

  useEffect(() => {
    const thumbnailsContainer = thumbnailsRef.current;
    if (thumbnailsContainer) {
      const activeThumb = thumbnailsContainer.children[activeIndex] as HTMLElement;
      if (activeThumb) {
        const containerWidth = thumbnailsContainer.offsetWidth;
        const thumbOffset = activeThumb.offsetLeft;
        const thumbWidth = activeThumb.offsetWidth;
        
        const scrollTo = thumbOffset - containerWidth / 2 + thumbWidth / 2;
        
        thumbnailsContainer.scrollTo({
          left: scrollTo,
          behavior: 'smooth'
        });
      }
    }
  }, [activeIndex]);

  const NavButton = ({ direction, onClick }: { direction: 'prev' | 'next'; onClick: () => void }) => (
    <button
      onClick={onClick}
      className={`
        absolute top-1/2 -translate-y-1/2 z-30
        flex items-center justify-center
        w-12 h-12 rounded-full
        bg-black/40 backdrop-blur-sm
        border border-neutral-800
        text-amber-400
        transition-all duration-300
        outline-none focus:ring-2 focus:ring-amber-400/50
        group-hover:opacity-100
        ${direction === 'prev' ? 'left-4' : 'right-4'}
        ${direction === 'prev' ? 'lg:opacity-0' : 'lg:opacity-0'}
      `}
      aria-label={direction === 'prev' ? t('nav.prev') : t('nav.next')}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d={direction === 'prev' ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
      </svg>
    </button>
  );

  return (
    <section id="gallery" className="py-28 bg-[#0a0a0a] text-white relative overflow-hidden border-t border-neutral-900">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-amber-400/40 to-transparent"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10 mb-16 flex flex-col items-center">
        
        <div className="text-center mb-16 max-w-xl">
          <span className="text-xs uppercase tracking-[0.3em] text-amber-400/70 block mb-4">{t('tagline')}</span>
          <h2 className="text-4xl md:text-5xl font-light font-serif mb-6 tracking-wide text-white">{t('title')}</h2>
          <div className="w-16 h-[1px] bg-amber-400/30 mx-auto mb-8"></div>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto font-light leading-relaxed">
            {t('description')}
          </p>
        </div>

        {/* --- ZONE D'AFFICHAGE PRINCIPALE --- */}
        <motion.div 
          className="relative w-full aspect-[1/1] border border-neutral-900 rounded shadow-3xl overflow-hidden group hover:border-amber-400/30 transition-colors duration-500 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          whileTap={{ cursor: "grabbing" }}
        >
          <AnimatePresence mode="popLayout">
            <motion.div
              key={`bg-${activeImage.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-cover bg-center scale-110 blur-xs"
              style={{
                backgroundImage: `url(${activeImage.src})`,
              }}
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-black/30 z-[1]" />
          
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-[2]"></div>

          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black/50 to-transparent z-[2] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black/50 to-transparent z-[2] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <NavButton direction="prev" onClick={paginatePrev} />
          <NavButton direction="next" onClick={paginateNext} />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, 10] }}
            transition={{ delay: 1, duration: 5, times: [0, 0.1, 0.9, 1] }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 pointer-events-none flex items-center gap-2 bg-black/70 px-5 py-2.5 rounded-full border border-neutral-800/80 backdrop-blur-sm shadow-xl"
          >
            <span className="text-neutral-500 text-sm">&larr;</span>
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-300 font-medium">{t('swipe')}</span>
            <span className="text-neutral-500 text-sm">&rarr;</span>
          </motion.div>

          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeImage.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 z-[3]"
            >
              <Image 
                src={activeImage.src} 
                alt={t('alt.image', { number: activeIndex + 1 })} 
                fill 
                className="object-contain select-none pointer-events-none"
                draggable="false" 
                priority 
                quality={100} 
                unoptimized 
                onContextMenu={(e) => e.preventDefault()} 
              />
            </motion.div>
          </AnimatePresence>
          
          {activeImage.blurred && (
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center gap-3 z-40 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-xs uppercase tracking-[0.3em] text-amber-400/70 font-medium">{t('restrictedAccess')}</span>
            </div>
          )}
        </motion.div>
      </div>

      {/* --- BARRE DE MINIATURES EN BAS --- */}
      <div className="w-full relative z-10">
        <div className="text-center mb-5 max-w-sm mx-auto">
          <span className="text-[10px] uppercase tracking-[0.2em] text-amber-400/80 mb-2 block">{t('collectionTitle')}</span>
        </div>
        
        <div 
          ref={thumbnailsRef} 
          className="flex flex-row gap-5 overflow-x-auto p-3
                    snap-x snap-mandatory overscroll-x-contain
                    scrollbar-thin scrollbar-thumb-amber-400/60 scrollbar-track-transparent"
        >
          {galleryImages.map((image, index) => (
            <button
              key={`thumb-${image.id}`}
              onClick={() => setActiveIndex(index)}
              className={`flex-shrink-0 w-24 sm:w-28 md:w-32 h-20 sm:h-24 md:h-28 
                        relative rounded overflow-hidden snap-center
                        border-2 transition-all duration-300 outline-none
                        ${index === activeIndex 
                          ? 'border-amber-400 shadow-2xl scale-110' 
                          : 'border-neutral-900 bg-neutral-950 hover:border-amber-400/40 opacity-70 hover:opacity-100'}
                        `}
              aria-label={t('alt.thumbnailAria', { number: index + 1 })}
            >
              <Image 
                src={image.src} 
                alt={t('alt.thumbnail', { number: index + 1 })} 
                fill 
                className="object-cover select-none" 
                draggable="false" 
                quality={50}
                unoptimized 
                onContextMenu={(e) => e.preventDefault()} 
              />
              
              {image.blurred && (
                <div className="absolute inset-0 z-20 bg-black/50 backdrop-blur-sm flex items-center justify-center gap-1.5 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-amber-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="text-[7px] uppercase tracking-[0.1em] text-amber-400/70 font-medium">{t('private')}</span>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

    </section>
  )
}