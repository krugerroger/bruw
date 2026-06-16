import Link from "next/link";

export default function PracticesPage() {
  const practicesData = {
    title: "Mes pratiques : Brunella, belle escorte pour votre plaisir",
    description: "Retrouvez une liste non exhaustive de mes différentes pratiques",
    intro: "Cela répondra à la majorité de vos interrogations, et si vous lisez mes services érotiques vous découvrirez comment vous faire plaisir en me faisant plaisir",
    
    whatIDo: {
      title: "CE QUE JE FAIS…",
      items: [
        "GFE : Girl Friend Experience",
        "PSE : Porn Star Experience",
        "Extraball: plusieurs rapport en 1h",
        "Accompagnement en Club Échangiste / Sauna Libertin",
        "Massage Erotique naturiste",
        "Massage BodyBody Thaï",
        "Massage en Duo à 4 mains",
        "Massage du Lingam",
        "Massage Couple",
        "Show Web Cam visio",
        "Strip Tease / Effeuillage burlesque",
        "Longs Préliminaires",
        "Jeux de rôles / Scénario HOT",
        "Paroles coquines",
        "Kamasutra et 69 (péché mignon pour la levrette)",
        "Être dominée (avec respect)",
        "Fétish pieds",
        "BDSM: Maîtresse Domina Initiation SM Soft/Hard",
        "Facesitting",
        "Handjob",
        "Douce ou sauvage / Ange ou Démon",
        "Branlette / Branlette espagnole",
        "Fellation nature ou protégée",
        "Finition corporelle (sauf le visage)",
        "Sex toys (pour moi et pour vous)",
        "Travail anal / Massage prostatique",
        "French Kiss : Embrasser avec la langue",
        "Trio HOT : Couple ou HFF",
        "Conversation excitante : mots cru et fessées",
        "Anal (sur moi ou sur vous)",
        "Cunnilingus et Anulingus (sur moi)",
        "Fist (vaginal uniquement)",
        "Douche dorée (donneuse)"
      ]
    },
    
    whatIDontDo: {
      title: "Ce que je ne fait pas...",
      items: [
        "Anulingus (sur vous)",
        "Être attachée (trop risqué)",
        "Je ne fais pas crédit !",
        "Je ne suis pas assistante sociale !",
        "Je ne fais pas de téléphone rose",
        "Je ne fais pas de tchat d'SMS érotique interminable…",
        "Je ne réponds pas aux appels masqués, ni aux fixes.",
        "Je ne négocie pas mes tarifs!!!",
        "Je ne vide pas les « fond de poches »!",
        "Je ne fais pas de chantage, et n'accepte pas vos informations de CB pour vider vos comptes bancaires sur internet!! ( malgré l'insistance de certain soumis )"
      ]
    },
    
    whatIDontLike: {
      title: "Ce que je n'aime pas…",
      items: [
        "Le tutoiement direct au téléphone et les langages trop familiers",
        "La brutalité, les grossièretés et le manque de respect",
        "Que l'on me bave ou crache dessus",
        "Que l'on me pince ou mordille les tétons",
        "Ceux qui retiennent leur jouissance pour faire durer le plaisir au maximum pour au final ne plus réussir à jouir",
        "Ceux qui prennent un RDV pour 30 min et qui ont besoin de 2h pour jouir",
        "Gorge profonde forcée avec les mains sur la tête"
      ]
    }
  };

  return (
 <section className="py-24 bg-[#0a0a0a] text-white">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
            {practicesData.title}
          </h1>
          <div className="w-24 h-[1px] bg-amber-500/50 mx-auto mb-8"></div>
          <p className="text-lg text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed">
            {practicesData.description}
          </p>
        </div>

        {/* Sections de contenu */}
        {[
          { data: practicesData.whatIDo, color: 'text-amber-400', icon: 'M5 13l4 4L19 7' },
          { data: practicesData.whatIDontDo, color: 'text-red-500', icon: 'M6 18L18 6M6 6l12 12' },
          { data: practicesData.whatIDontLike, color: 'text-neutral-500', icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' }
        ].map((section, idx) => (
          <div key={idx} className="mb-20">
            <h2 className={`text-xs uppercase tracking-[0.3em] font-medium ${section.color} mb-10 text-center`}>
              {section.data.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {section.data.items.map((item, i) => (
                <div key={i} className="flex items-center group">
                  <svg className={`w-4 h-4 ${section.color} mr-4 opacity-70`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={section.icon} />
                  </svg>
                  <span className="text-neutral-300 font-light group-hover:text-white transition-colors duration-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Call to Action */}
        <div className="text-center pt-12 border-t border-neutral-900">
          <p className="text-neutral-400 mb-8 font-light italic">
            "Maintenant que vous connaissez mes pratiques, n'hésitez pas à me contacter pour une expérience inoubliable."
          </p>
          <Link href="/contact">
            <button className="px-10 py-3 border border-amber-500/30 text-amber-500 hover:bg-amber-500 hover:text-black uppercase tracking-[0.2em] text-sm transition-all duration-500">
              Me contacter
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};