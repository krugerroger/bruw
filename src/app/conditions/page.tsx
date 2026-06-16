'use client'

export default function Conditions() {

  return (
    <section id="conditions" className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Halo de fond subtil */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        {/* ================= SECTION SERVICES ================= */}
        <div 
          className="border border-neutral-900 bg-neutral-950/40 rounded-2xl p-8 md:p-10 mb-20 backdrop-blur-sm"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-amber-500/80 block text-center mb-3">Prestations</span>
          <h2 className="text-3xl font-light text-center font-serif text-white mb-8">
            Que proposez-vous ?
          </h2>
          <div className="w-12 h-px bg-amber-500/30 mx-auto mb-8"></div>
          
          <p className="text-neutral-300 font-light leading-relaxed text-center max-w-3xl mx-auto text-base md:text-lg">
            Je propose mes services d’<span className="text-amber-400 font-normal">accompagnement</span> (restaurant, soirée privée, Club &amp; Sauna libertin, Discothèque…) et d’<span className="text-amber-400 font-normal">escorting</span>, 
            des prestations de <span className="text-amber-400 font-normal">massages NATURISTE intégral</span> de bien-être et de relaxation, 
            des <span className="text-amber-400 font-normal">strip-teases sensuels</span> ou de l’<span className="text-amber-400 font-normal">Effeuillage Burlesque</span>, 
            des prestations en <span className="text-amber-400 font-normal">DUO escorte</span>, du <span className="text-amber-400 font-normal">Triolisme couple</span>, 
            de l’<span className="text-amber-400 font-normal">initiation SM Soft ou Hard</span>, 
            du <span className="text-amber-400 font-normal">Fétichisme</span>, ainsi que la réalisation de vos <span className="text-amber-400 font-normal">scénarios</span> et <span className="text-amber-400 font-normal">fantasmes insolites</span>.
          </p>

          {/* Table de pilules minimalistes */}
          <div className="flex flex-wrap gap-2.5 mt-10 justify-center max-w-3xl mx-auto">
            {[
              "Accompagnement", "Escorting", "Massages Naturiste", "Strip Tease", 
              "Effeuillage Burlesque", "DUO Escorte", "Triolisme Couple", 
              "Initiation SM", "Fétichisme", "Scénarios & Fantasmes"
            ].map((service, index) => (
              <span key={index} className="bg-neutral-950 border border-neutral-900 text-neutral-400 px-4 py-2 rounded-full text-xs font-light tracking-wide cursor-default hover:border-amber-500/30 hover:text-amber-400 transition-colors duration-300">
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* ================= MODE DE PAIEMENT ================= */}
        <div 
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-amber-500/80 block mb-3">Réservations</span>
          <h1 className="text-4xl md:text-5xl font-light font-serif text-white mb-6">
            Mode de Paiement
          </h1>
          <div className="w-16 h-px bg-amber-500/40 mx-auto mb-6"></div>
          <p className="text-neutral-400 font-light leading-relaxed text-sm md:text-base max-w-2xl mx-auto">
            Pour garantir la sécurité et le sérieux de nos engagements, un pré-paiement sécurisé et discret peut vous être demandé via <span className="text-amber-400 font-medium">Transcash, PayPal, Virement instantanée ou WERO</span>. Voici pourquoi cette méthode protège notre philosophie d'échange :
          </p>
        </div>

        {/* Liste des Avantages */}
        <div 
          className="space-y-4"
        >
          {[
            { title: "Sérieux et Sécurité", desc: "En validant une réservation, je vous assure de mon sérieux complet et de mon engagement absolu à honorer notre rendez-vous, tout en évitant les désagréments des annulations de dernière minute." },
            { title: "Préparation Optimale", desc: "Cette démarche mutuelle me permet d’organiser mon emploi du temps en toute sérénité afin de vous offrir une prestation sur-mesure et irréprochable." },
            { title: "Discrétion et Anonymat", desc: "Les règlements par Transcash ou PayPal respectent totalement votre vie privée et s’imposent comme des alternatives idéales pour préserver votre anonymat." },
            { title: "Engagement Mutuel", desc: "L'acompte formalise une relation de confiance réciproque, où chacun s’engage à honorer sa parole et à respecter le temps de l'autre." },
            { title: "Simplicité et Accessibilité", desc: "L’achat de coupons Transcash en bureau de tabac est immédiat, simple et totalement neutre sur vos relevés bancaires, vous évitant les contraintes des virements classiques." }
          ].map((itemBox, idx) => (
            <div 
              key={idx} 
              className="border border-neutral-900 bg-neutral-950/30 rounded-xl p-6 md:p-8 hover:border-neutral-800/80 transition-all duration-300 group"
            >
              <div className="flex items-start gap-6">
                <span className="text-3xl font-serif font-light text-amber-500/40 group-hover:text-amber-500 transition-colors duration-300 select-none">
                  {`0${idx + 1}`}
                </span>
                <div>
                  <h3 className="text-lg font-serif font-light text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                    {itemBox.title}
                  </h3>
                  <p className="text-neutral-400 font-light text-sm md:text-base leading-relaxed">
                    {itemBox.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Méthodes de paiement miniatures */}
        <div className="text-center mt-10 mb-24">
          <p className="text-neutral-500 text-xs uppercase tracking-widest mb-4">Méthodes acceptées</p>
          <div className="flex justify-center items-center gap-3">
            <span className="bg-neutral-950 border border-neutral-900 px-4 py-2 rounded-lg text-neutral-300 font-serif font-light text-xs tracking-wider">Transcash</span>
            <span className="bg-neutral-950 border border-neutral-900 px-4 py-2 rounded-lg text-neutral-300 font-serif font-light text-xs tracking-wider">PayPal</span>
            <span className="bg-neutral-950 border border-neutral-900 px-4 py-2 rounded-lg text-neutral-300 font-serif font-light text-xs tracking-wider">WERO</span>
            <span className="bg-neutral-950 border border-neutral-900 px-4 py-2 rounded-lg text-neutral-300 font-serif font-light text-xs tracking-wider">Virement instantanée</span>
          </div>
        </div>

        {/* ================= CONFIDENTIALITÉ & CADRE DE COMPLÉMENT ================= */}
        <div className="mt-20 pt-16 border-t border-neutral-900">
          <h2 className="text-3xl font-light font-serif text-white mb-10 text-center">
            Confidentialité et Sécurité
          </h2>
          
          <div className="space-y-4">
            <div className="border border-neutral-900 bg-neutral-950/30 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="font-serif text-amber-500/50 text-xl">09</span>
                <div>
                  <h3 className="text-base font-serif font-light text-neutral-200 mb-2">Modification des Conditions</h3>
                  <p className="text-neutral-400 font-light text-sm leading-relaxed">
                    Ces directives peuvent évoluer au fil du temps. Toute modification significative vous sera partagée au préalable, nécessitant votre parfait accord pour reconduire nos interactions privées.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-neutral-900 bg-neutral-950/30 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="font-serif text-amber-500/50 text-xl">10</span>
                <div>
                  <h3 className="text-base font-serif font-light text-neutral-200 mb-2">Contact et Échanges</h3>
                  <p className="text-neutral-400 font-light text-sm leading-relaxed">
                    Pour toute question relative à cette charte ou pour affiner vos besoins particuliers, vous pouvez m'écrire directement à :{" "}
                    <a 
                      href="mailto:moreaubrunella12@gmail.com" 
                      className="text-amber-500 hover:text-amber-400 underline transition-colors font-normal"
                    >
                      moreaubrunella12@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= QUESTIONS FRÉQUENTES (FAQ) ================= */}
        <div className="mt-24">
          <h2 className="text-3xl font-light font-serif text-white mb-12 text-center">
            Questions Fréquentes
          </h2>
          
          <div className="space-y-4">
            
            {/* FAQ 1 */}
            <div className="border border-neutral-900 bg-neutral-950/20 rounded-xl p-6 md:p-8">
              <h3 className="text-lg font-serif font-light text-amber-500/90 mb-3 flex items-center gap-3">
                <svg className="w-5 h-5 text-amber-500/60 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                Avez-vous des limites ou interdits (Taboo) ?
              </h3>
              <p className="text-neutral-400 font-light text-sm md:text-base leading-relaxed pl-8">
                Je suis une femme moderne, libre et adepte des plaisirs libertins. Cependant, je refuse strictement tout comportement dégradant, hygiéniquement douteux, ou manquant de respect. Ma sécurité physique et le strict respect de ma vie privée restent mes priorités absolues.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="border border-neutral-900 bg-neutral-950/20 rounded-xl p-6 md:p-8">
              <h3 className="text-lg font-serif font-light text-amber-500/90 mb-3 flex items-center gap-3">
                <svg className="w-5 h-5 text-amber-500/60 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                Est-il possible de négocier vos tarifs et options ?
              </h3>
              <p className="text-neutral-400 font-light text-sm md:text-base leading-relaxed pl-8">
                Mes tarifs et prestations reflètent la qualité, le raffinement et l'implication que je dédie à chaque instant. Ils ne sont pas négociables. Si mes conditions ne s'alignent pas avec vos attentes, le milieu offre une multitude de profils variés où vous trouverez aisément votre bonheur. Sachez qu'aucune sur-tarification ne me fera accepter une pratique préalablement refusée.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="border border-neutral-900 bg-neutral-950/20 rounded-xl p-6 md:p-8">
              <h3 className="text-lg font-serif font-light text-amber-500/90 mb-3 flex items-center gap-3">
                <svg className="w-5 h-5 text-amber-500/60 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Avez-vous des critères d’âge pour vos partenaires ?
              </h3>
              <p className="text-neutral-400 font-light text-sm md:text-base leading-relaxed pl-8">
                J'apprécie particulièrement la maturité, le calme et les manières des hommes d'expérience, qui se révèlent souvent être de parfaits gentlemen à l’écoute. Bien que j'accorde une préférence naturelle aux profils de plus de 30 ans, je ne ferme pas hermétiquement ma porte aux plus jeunes ; l’élégance de votre démarche et votre pouvoir de séduction feront toute la différence.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="border border-neutral-900 bg-neutral-950/20 rounded-xl p-6 md:p-8">
              <h3 className="text-lg font-serif font-light text-amber-500/90 mb-3 flex items-center gap-3">
                <svg className="w-5 h-5 text-amber-500/60 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Accueillez-vous les personnes en situation de handicap ?
              </h3>
              <p className="text-neutral-400 font-light text-sm md:text-base leading-relaxed pl-8">
                Absolument. Les particularités physiques ou handicaps (moteurs, sensoriels, appareillages ou stomies) ne constituent en aucun cas un frein. J’ai l’habitude d’accompagner des profils diversifiés avec beaucoup de naturel et de bienveillance. N’hésitez pas à me confier vos besoins en amont afin que nous organisions notre moment de complicité idéal.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="border border-neutral-900 bg-neutral-950/20 rounded-xl p-6 md:p-8">
              <h3 className="text-lg font-serif font-light text-amber-500/90 mb-3 flex items-center gap-3">
                <svg className="w-5 h-5 text-amber-500/60 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Puis-je compter sur votre entière discrétion ?
              </h3>
              <div className="text-neutral-400 font-light text-sm md:text-base leading-relaxed pl-8 space-y-4">
                <p>
                  Sans aucune réserve. La discrétion absolue est <span className="text-amber-500 font-normal">la règle d'or</span> qui structure mon activité d’accompagnement. J'exige naturellement la même élégance de votre côté.
                </p>
                <div className="bg-neutral-950 p-4 rounded-lg border-l-2 border-amber-500/40 text-xs text-neutral-500 italic max-w-2xl">
                  * Je vous rappelle que ce site présente des services exclusifs d’accompagnement et de modelages bien-être entre adultes, s’inscrivant dans un cadre légal et parfaitement indépendant. Toute alchimie ou intimité ultérieure relève strictement du libre consentement mutuel au titre de la vie privée, totalement indépendante de la rémunération de la prestation horaire.
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Conclusion / Note d'accueil finale */}
        <div 
          className="text-center mt-20 p-8 border border-neutral-900 bg-neutral-950/30 rounded-2xl"
        >
          <p className="text-neutral-400 font-serif italic text-lg mb-2">
            Merci pour votre confiance et votre courtoisie.
          </p>
          <p className="text-sm font-light text-amber-500/85 tracking-wide">
            Chaque détail est pensé pour dessiner les contours d'une rencontre inoubliable. Au plaisir de vous recevoir.
          </p>
        </div>

      </div>
    </section>
  )
}