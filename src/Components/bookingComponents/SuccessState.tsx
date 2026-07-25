"use client";

import { CONTACTS } from "@/constants/contacts";
import { BookingFormProps } from "@/types";
import { CheckCircle } from "lucide-react";
import React from "react";
import { useTranslations } from "next-intl";

function SuccessState({
  formData,
  selectedPackage,
  formatDate,
}: {
  formData: BookingFormProps["formData"];
  selectedPackage: {
    duration: string;
    price: string;
  };
  formatDate: (date: Date | null) => string;
}) {
  const t = useTranslations("SuccessState");

  return (
    <div className="card bg-base-200 shadow-lg overflow-hidden">
      {/* Top accent bar */}
      <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600" />
      <div className="p-8 flex flex-col items-center text-center gap-6">
        {/* Animated checkmark */}
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-green-500/10 flex items-center justify-center animate-pulse">
            <CheckCircle
              className="w-12 h-12 text-green-400"
              strokeWidth={1.5}
            />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{t("title")}</h3>
          <p className="text-gray-400 max-w-sm">
            {t("description.textBefore")}
            <strong className="text-white">{t("description.timeframe")}</strong>
            {t("description.textAfter")}
          </p>
        </div>

        {/* Booking summary */}
        <div className="w-full bg-gray-800/60 rounded-xl p-6 text-left space-y-4 border border-gray-700">
          <p className="text-amber-400 font-semibold uppercase tracking-wider text-xs">
            {t("summary.title")}
          </p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <p className="text-gray-400">{t("summary.name")}</p>
              <p className="font-medium text-white">{formData.name}</p>
            </div>
            <div>
              <p className="text-gray-400">{t("summary.email")}</p>
              <p className="font-medium text-white">{formData.email}</p>
            </div>
            <div className="col-span-2">
              <p className="text-gray-400">{t("summary.appointmentDate")}</p>
              <p className="font-medium text-white capitalize">
                {formatDate(formData.appointmentDate)}
              </p>
            </div>
            <div>
              <p className="text-gray-400">{t("summary.package")}</p>
              <p className="font-medium text-white">
                {selectedPackage.duration}
              </p>
            </div>
            <div>
              <p className="text-gray-400">{t("summary.price")}</p>
              <p className="font-bold text-amber-400 text-xl">
                {selectedPackage.price}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <a
            href={CONTACTS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn flex-1 bg-[#25D366] hover:bg-[#1ebe5d] border-none text-white"
          >
            {t("buttons.whatsapp")}
          </a>
          <a
            href={CONTACTS.telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn flex-1 bg-[#0088CC] hover:bg-[#0077b5] border-none text-white"
          >
            {t("buttons.telegram")}
          </a>
        </div>
      </div>
    </div>
  );
}

export default SuccessState;
