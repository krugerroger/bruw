import { Offer } from "@/types";
import { CheckCircle, Sparkles, User } from "lucide-react";
import { useTranslations } from "next-intl";

// Hook pour obtenir les étapes traduites
export function useSteps() {
  const t = useTranslations("Steps");

  return [
    { id: 1, label: t("package"), icon: Sparkles },
    { id: 2, label: t("info"), icon: User },
    { id: 3, label: t("confirmation"), icon: CheckCircle },
  ];
}

// Hook pour obtenir l'offre traduite
export function useOffers(): Offer {
  const t = useTranslations("Offers");

 return {
    title: t("title"),
    price: [
      {
        value: "1h",
        duration: t("prices.1h.duration"),
        amount: t("prices.1h.amount"),
        description: t("prices.1h.description"),
      },
      {
        value: "1h30",
        duration: t("prices.1h30.duration"),
        amount: t("prices.1h30.amount"),
        description: t("prices.1h30.description"),
      },
      {
        value: "2h",
        duration: t("prices.2h.duration"),
        amount: t("prices.2h.amount"),
        description: t("prices.2h.description"),
      },
      {
        value: "3h",
        duration: t("prices.3h.duration"),
        amount: t("prices.3h.amount"),
        description: t("prices.3h.description"),
      },
      {
        value: "afternoon",
        duration: t("prices.afternoon.duration"),
        amount: t("prices.afternoon.amount"),
        description: t("prices.afternoon.description"),
      },
      {
        value: "delightEvening",
        duration: t("prices.delightEvening.duration"),
        amount: t("prices.delightEvening.amount"),
        description: t("prices.delightEvening.description"),
      },
      {
        value: "hotEvening",
        duration: t("prices.hotEvening.duration"),
        amount: t("prices.hotEvening.amount"),
        description: t("prices.hotEvening.description"),
      },
      {
        value: "fullNight",
        duration: t("prices.fullNight.duration"),
        amount: t("prices.fullNight.amount"),
        description: t("prices.fullNight.description"),
      },
      {
        value: "massage_relaxant_60",
        duration: t("prices.massage_relaxant_60.duration"),
        amount: t("prices.massage_relaxant_60.amount"),
      },
      {
        value: "massage_relaxant_90",
        duration: t("prices.massage_relaxant_90.duration"),
        amount: t("prices.massage_relaxant_90.amount"),
      },
      {
        value: "massage_pierres_90",
        duration: t("prices.massage_pierres_90.duration"),
        amount: t("prices.massage_pierres_90.amount"),
      },
      {
        value: "massage_suedois_60",
        duration: t("prices.massage_suedois_60.duration"),
        amount: t("prices.massage_suedois_60.amount"),
      },
      {
        value: "massage_suedois_90",
        duration: t("prices.massage_suedois_90.duration"),
        amount: t("prices.massage_suedois_90.amount"),
      },
      {
        value: "massage_deeptissue_60",
        duration: t("prices.massage_deeptissue_60.duration"),
        amount: t("prices.massage_deeptissue_60.amount"),
      },
      {
        value: "massage_deeptissue_90",
        duration: t("prices.massage_deeptissue_90.duration"),
        amount: t("prices.massage_deeptissue_90.amount"),
      },
      {
        value: "massage_sportif_60",
        duration: t("prices.massage_sportif_60.duration"),
        amount: t("prices.massage_sportif_60.amount"),
      },
      {
        value: "massage_californien_60",
        duration: t("prices.massage_californien_60.duration"),
        amount: t("prices.massage_californien_60.amount"),
      },
      {
        value: "massage_californien_90",
        duration: t("prices.massage_californien_90.duration"),
        amount: t("prices.massage_californien_90.amount"),
      },
      {
        value: "massage_aromatherapie_75",
        duration: t("prices.massage_aromatherapie_75.duration"),
        amount: t("prices.massage_aromatherapie_75.amount"),
      },
      {
        value: "massage_prenatal_60",
        duration: t("prices.massage_prenatal_60.duration"),
        amount: t("prices.massage_prenatal_60.amount"),
      },
      {
        value: "massage_reflexo_45",
        duration: t("prices.massage_reflexo_45.duration"),
        amount: t("prices.massage_reflexo_45.amount"),
      },
      {
        value: "massage_reflexo_60",
        duration: t("prices.massage_reflexo_60.duration"),
        amount: t("prices.massage_reflexo_60.amount"),
      },
      {
        value: "massage_dos_nuque_30",
        duration: t("prices.massage_dos_nuque_30.duration"),
        amount: t("prices.massage_dos_nuque_30.amount"),
      },
      {
        value: "massage_dos_nuque_45",
        duration: t("prices.massage_dos_nuque_45.duration"),
        amount: t("prices.massage_dos_nuque_45.amount"),
      },
    ],
  };
}
