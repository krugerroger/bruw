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
        duration: t("prices.1h.duration"),
        amount: t("prices.1h.amount"),
        description: t("prices.1h.description"),
      },
      {
        duration: t("prices.1h30.duration"),
        amount: t("prices.1h30.amount"),
        description: t("prices.1h30.description"),
      },
      {
        duration: t("prices.2h.duration"),
        amount: t("prices.2h.amount"),
        description: t("prices.2h.description"),
      },
      {
        duration: t("prices.3h.duration"),
        amount: t("prices.3h.amount"),
        description: t("prices.3h.description"),
      },
      {
        duration: t("prices.afternoon.duration"),
        amount: t("prices.afternoon.amount"),
        description: t("prices.afternoon.description"),
      },
      {
        duration: t("prices.delightEvening.duration"),
        amount: t("prices.delightEvening.amount"),
        description: t("prices.delightEvening.description"),
      },
      {
        duration: t("prices.hotEvening.duration"),
        amount: t("prices.hotEvening.amount"),
        description: t("prices.hotEvening.description"),
      },
      {
        duration: t("prices.fullNight.duration"),
        amount: t("prices.fullNight.amount"),
        description: t("prices.fullNight.description"),
      },
    ],
  };
}
