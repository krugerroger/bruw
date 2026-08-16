import {
  Wind,
  Flame,
  Droplets,
  Leaf,
  Baby,
  Footprints,
  UserCircle,
} from "lucide-react";
import { Activity } from "react";

export const massages = [
  {
    id: "relaxant",
    icon: Wind,
    name: "Massage Relaxant Signature",
    duration: "60 min / 90 min",
    price: "À partir de 120€",
    recommendedFor: "Personnes stressées, première expérience de massage.",
    benefits: [
      "Diminution de l'anxiété",
      "Amélioration du sommeil",
      "Lâcher-prise total",
    ],
    description:
      "Véritable invitation au lâcher-prise, le massage relaxant signature est conçu pour apaiser les tensions superficielles et calmer le système nerveux en profondeur. Par des effleurements doux, lents et enveloppants, ce soin dissipe le stress accumulé tout au long de la journée et favorise une profonde sensation de quiétude. J'utilise des huiles végétales tièdes et précieuses, soigneusement sélectionnées pour leurs propriétés nourrissantes et apaisantes sur la peau. L'enchaînement fluide des mouvements permet de reconnecter le corps et l'esprit, offrant un espace de respiration intérieure indispensable dans nos vies à un rythme effréné. Il harmonise les énergies sans brusquer le muscle.",
  },
  {
    id: "pierres-chaudes",
    icon: Flame,
    name: "Massage aux Pierres Chaudes",
    duration: "90 min",
    price: "160€",
    recommendedFor:
      "Tensions chroniques, frilosité, besoin de réconfort profond.",
    benefits: [
      "Détoxification",
      "Relâchement musculaire par la chaleur",
      "Amélioration de la circulation",
    ],
    description:
      "Issu des traditions ancestrales, ce soin fusionne l'art du toucher manuel avec le pouvoir thérapeutique de pierres de basalte volcanique chauffées. Glissées le long des méridiens et déposées sur les points clés énergétiques de votre corps, les pierres diffusent une chaleur lente et pénétrante qui dissout instantanément les nœuds musculaires et les blocages. Cette chaleur enveloppante provoque une vasodilatation qui optimise l'oxygénation des tissus et facilite l'élimination des toxines. Le contraste thermique plonge le receveur dans un état méditatif proche du sommeil réparateur. Une expérience polysensorielle d'une rare intensité qui réchauffe le corps jusqu'à l'âme.",
  },
  {
    id: "suedois",
    icon: Activity,
    name: "Massage Suédois",
    duration: "60 min / 90 min",
    price: "À partir de 130€",
    recommendedFor: "Fatigue musculaire, besoin de tonification.",
    benefits: [
      "Amélioration de la circulation sanguine",
      "Tonification",
      "Soulagement des courbatures",
    ],
    description:
      "Le massage suédois est la référence incontestée en matière de soin musculaire dynamique. Grâce à une combinaison précise de pétrissages profonds, d'effleurages appuyés, de frictions et de percussions, ce protocole travaille directement sur l'oxygénation des muscles et la stimulation du flux sanguin. Il ne s'agit pas seulement d'un moment de détente, mais d'une véritable thérapie corporelle visant à dissoudre les adhérences tissulaires et à redonner de la souplesse aux articulations. Très apprécié en Occident pour son approche biomécanique, il laisse une sensation de légèreté incroyable, éliminant la sensation de « jambes lourdes » et la fatigue généralisée.",
  },
  {
    id: "deep-tissue",
    icon: Droplets,
    name: "Massage Deep Tissue",
    duration: "60 min / 90 min",
    price: "À partir de 140€",
    recommendedFor: "Douleurs musculaires tenaces, posture contractée.",
    benefits: [
      "Relâchement des fascias",
      "Soulagement des douleurs chroniques",
      "Correction posturale indirecte",
    ],
    description:
      "Le Deep Tissue s'adresse aux couches les plus profondes du tissu musculaire et des fascias. Par des mouvements lents, soutenus et extrêmement ciblés utilisant les avant-bras, les coudes et les phalanges, ce massage va déloger les tensions chroniques souvent liées à de mauvaises postures ou à des mouvements répétitifs. Contrairement aux idées reçues, la pression est ajustée progressivement pour ne pas créer de douleur défensive de la part de votre corps. Il exige une respiration synchronisée entre le praticien et le receveur pour « fondre » dans la tension. Idéal pour retrouver une liberté de mouvement et soulager les raideurs aiguës du dos et de la nuque.",
  },
  {
    id: "sportif",
    icon: Activity,
    name: "Massage Sportif",
    duration: "60 min",
    price: "130€",
    recommendedFor: "Athlètes, personnes actives, récupération post-effort.",
    benefits: [
      "Prévention des blessures",
      "Élimination de l'acide lactique",
      "Gain d'élasticité",
    ],
    description:
      "Spécifiquement élaboré pour accompagner l'activité physique, le massage sportif s'adapte à vos besoins : préparation avant un événement (stimulant et échauffant) ou récupération après l'effort (drainant et décontractant). Il associe des étirements passifs, des compressions ischémiques et un travail articulaire profond. Son objectif principal est d'accélérer l'élimination de l'acide lactique et des toxines accumulées durant l'exercice, réduisant ainsi drastiquement le temps de récupération et l'apparition de courbatures. Ce soin très technique permet au corps de retrouver sa pleine fonctionnalité musculaire, tout en prévenant activement les risques de lésions et de claquages.",
  },
  {
    id: "californien",
    icon: Wind,
    name: "Massage Californien",
    duration: "60 min / 90 min",
    price: "À partir de 120€",
    recommendedFor:
      "Besoin de reconnexion corporelle, choc émotionnel, surmenage.",
    benefits: [
      "Éveil sensoriel",
      "Libération émotionnelle",
      "Harmonisation globale",
    ],
    description:
      "Surnommé le « toucher du cœur », le massage californien est une approche holistique qui se distingue par la fluidité continue de ses longs mouvements englobants. Dessinant des figures en huit sur l'ensemble du corps, ce soin favorise une unification du schéma corporel, donnant la sensation d'être enveloppé de la tête aux pieds. Il est particulièrement recommandé pour libérer les émotions enfouies et apaiser un mental en état de surchauffe. C'est un véritable cocon de douceur, exécuté avec des huiles chaudes, qui permet de se réapproprier son corps de manière positive, douce et bienveillante, dans un espace de sécurité totale.",
  },
  {
    id: "aromatherapie",
    icon: Leaf,
    name: "Massage Aromathérapie",
    duration: "75 min",
    price: "140€",
    recommendedFor:
      "Fatigue mentale, déséquilibres émotionnels, baisse d'énergie.",
    benefits: [
      "Action olfactive ciblée",
      "Rééquilibrage du système nerveux",
      "Soin sur-mesure",
    ],
    description:
      "L'aromathérapie ajoute une dimension vibratoire et olfactive puissante au massage. Avant la séance, nous déterminons ensemble vos besoins du moment (vitalité, apaisement, clarté mentale) pour créer une synergie d'huiles essentielles pures et biologiques sur-mesure. La technique de massage est ensuite adaptée, souvent inspirée de l'acupression et de manœuvres drainantes, pour faire pénétrer les principes actifs des plantes dans la circulation sanguine. En stimulant le système limbique (le centre des émotions dans le cerveau) par l'odorat, ce soin offre un voyage sensoriel unique qui régule en profondeur vos humeurs et stimule vos défenses immunitaires naturelles.",
  },
  {
    id: "prenatal",
    icon: Baby,
    name: "Massage Prénatal (Dès le 4e mois)",
    duration: "60 min",
    price: "120€",
    recommendedFor: "Femmes enceintes (à partir du 2ème trimestre).",
    benefits: [
      "Soulagement des lombaires",
      "Diminution de la rétention d'eau",
      "Lien in-utéro",
    ],
    description:
      "La grossesse est un moment de profonds bouleversements physiques et émotionnels. Ce massage spécifique, réalisé avec une huile neutre et biologique sans huiles essentielles, est conçu pour soulager les maux caractéristiques de la maternité : jambes lourdes, tensions dans le bas du dos, sciatiques et troubles du sommeil. Pratiqué principalement en position latérale soutenue par des coussins ergonomiques pour un confort absolu, il enveloppe la future maman de douceur. C'est aussi un moment privilégié pour ralentir, prendre soin de soi et favoriser la sécrétion d'endorphines, les hormones du bonheur, qui seront transmises directement au bébé.",
  },
  {
    id: "reflexologie",
    icon: Footprints,
    name: "Réflexologie Plantaire",
    duration: "45 min / 60 min",
    price: "À partir de 90€",
    recommendedFor: "Stress chronique, problèmes digestifs, fatigue passagère.",
    benefits: [
      "Stimulation des organes internes",
      "Rééquilibrage énergétique",
      "Ancrage profond",
    ],
    description:
      "La réflexologie part du principe que nos pieds sont la miniature de notre corps : chaque organe, glande ou partie du corps correspond à une zone réflexe précise sur la plante, le dessus ou les côtés des pieds. Par des pressions soutenues et des reptations du pouce sur ces zones spécifiques, je libère les tensions à distance, dissous les cristaux de toxines accumulés et relance l'énergie vitale (le Qi) dans l'ensemble de l'organisme. Bien plus qu'un simple massage des pieds, cette technique agit comme un véritable nettoyage interne, rétablissant l'homéostasie (l'équilibre naturel) du corps tout en procurant une détente fulgurante.",
  },
  {
    id: "dos-nuque",
    icon: UserCircle,
    name: "Focus Dos, Nuque & Épaules",
    duration: "30 min / 45 min",
    price: "À partir de 65€",
    recommendedFor: "Travailleurs de bureau, manque de temps, cervicalgies.",
    benefits: [
      "Détente express",
      "Soulagement des trapèzes",
      "Dissipation des céphalées de tension",
    ],
    description:
      "Ce soin ciblé est la réponse idéale aux rythmes de vie modernes où le temps manque, mais où le stress s'accumule inévitablement sur la partie supérieure du corps. Concentré exclusivement sur le dos, les cervicales, les trapèzes et le crâne, ce massage dénoue les zones qui portent littéralement « le poids des responsabilités ». Alternant manœuvres chauffantes, pétrissages profonds et étirements musculaires spécifiques, il libère l'axe vertébral en un minimum de temps. Une parenthèse express mais d'une incroyable efficacité pour relancer la concentration, chasser les migraines de tension et repartir avec une posture redressée et allégée.",
  },
];

// --- DONNÉES FAQ ---
export const faqData = [
  {
    q: "Dois-je me dévêtir complètement pour le massage ?",
    a: "Non, votre confort et votre pudeur sont ma priorité absolue. Vous conservez vos sous-vêtements (le bas) et un jeu de serviettes chaudes est utilisé tout au long de la séance pour couvrir les parties du corps non massées.",
  },
  {
    q: "Quels types de produits et d'huiles utilisez-vous ?",
    a: "Je travaille exclusivement avec des huiles végétales de première pression à froid (amande douce, sésame, macadamia) et des huiles essentielles certifiées 100% biologiques, garantissant un respect total de votre peau.",
  },
  {
    q: "Puis-je choisir l'intensité de la pression ?",
    a: "Absolument. Un temps d'échange est prévu avant chaque soin. Pendant le massage, je reste toujours à l'écoute de votre corps et de vos retours pour ajuster la pression selon votre convenance.",
  },
  {
    q: "Est-il recommandé de manger avant une séance ?",
    a: "Il est préférable d'éviter un repas lourd juste avant un massage. Un délai d'au moins 1h30 après un repas est idéal pour permettre au corps de se détendre sans entraver la digestion.",
  },
  {
    q: "Y a-t-il des contre-indications médicales au massage ?",
    a: "Oui, certaines conditions (fièvre, maladies infectieuses, phlébite, problèmes cardiaques graves, premier trimestre de grossesse) nécessitent un avis médical ou empêchent le massage. Un questionnaire de santé sera vérifié ensemble.",
  },
  {
    q: "Comment dois-je me comporter après la séance ?",
    a: "Prenez votre temps. Il est conseillé de bien s'hydrater dans les heures qui suivent pour aider l'élimination des toxines, et d'éviter les activités physiques intenses ou les situations stressantes le reste de la journée.",
  },
  {
    q: "Les massages proposés ont-ils un but thérapeutique ou médical ?",
    a: "Mes massages sont des soins de bien-être, de relaxation et de lâcher-prise. Ils ne s'apparentent en rien à des pratiques médicales ou à la masso-kinésithérapie.",
  },
  {
    q: "Où se déroulent les séances ?",
    a: "Les soins sont prodigués dans un cadre luxueux et confidentiel préparé à cet effet. Sous certaines conditions, je peux également me déplacer au sein de votre chambre d'hôtel ou résidence privée.",
  },
];
