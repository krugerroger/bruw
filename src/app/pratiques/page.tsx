import { motion } from "framer-motion";
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
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
            {practicesData.title}
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            {practicesData.description}
          </p>
          <p className="text-gray-400">
            {practicesData.intro}
          </p>
        </div>

        {/* What I Do Section */}
        <div
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-pink-500 mb-6 text-center">
            {practicesData.whatIDo.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {practicesData.whatIDo.items.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800/60 rounded-lg p-4 hover:bg-gray-700/60 transition-colors"
              >
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-200">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What I Don't Do Section */}
        <div
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-6 text-center">
            {practicesData.whatIDontDo.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {practicesData.whatIDontDo.items.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800/60 rounded-lg p-4 hover:bg-gray-700/60 transition-colors"
              >
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span className="text-gray-200">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What I Don't Like Section */}
        <div
        >
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 text-center">
            {practicesData.whatIDontLike.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {practicesData.whatIDontLike.items.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800/60 rounded-lg p-4 hover:bg-gray-700/60 transition-colors"
              >
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  <span className="text-gray-200">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">
            Maintenant que vous connaissez mes pratiques, n'hésitez pas à me contacter pour une expérience inoubliable.
          </p>
          <Link href="contact">
            <button className="btn bg-pink-600 hover:bg-pink-700 border-none text-white">
                Me contacter
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};