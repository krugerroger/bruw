"use client";

import React from "react";
import SummaryRow from "./SummaryRow";
import {
  User,
  Mail,
  Calendar,
  CheckCircle,
  Clock,
  Sparkles,
  ChevronLeft,
} from "lucide-react";
import { BookingFormProps } from "@/types";
import { useTranslations } from "next-intl";

function Summary({
  formData,
  selectedPackage,
  handleBack,
  isLoading,
  formatDate,
}: {
  formData: BookingFormProps["formData"];
  selectedPackage: BookingFormProps["selectedPackage"];
  handleBack: () => void;
  isLoading: boolean;
  formatDate: (date: Date | null) => string;
}) {
  const t = useTranslations("Summary");

  return (
    <div className="bg-[#121212]/80 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl p-6 sm:p-8 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="flex flex-col gap-6">
        <div className="text-center mb-4">
          <h3 className="text-3xl font-light text-white mb-2">
            {t("header.title")}
          </h3>
          <p className="text-sm text-gray-400">{t("header.subtitle")}</p>
        </div>

        <div className="bg-black/40 border border-white/5 rounded-3xl p-6 space-y-6">
          <div className="flex justify-between items-end border-b border-white/5 pb-6">
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">
                {t("package.label")}
              </p>
              <p className="text-xl text-white">{selectedPackage.duration}</p>
            </div>
            <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-500">
              {selectedPackage.price}
            </p>
          </div>

          <div className="space-y-4">
            <SummaryRow
              icon={<User className="w-4 h-4 text-gray-500" />}
              label={t("labels.name")}
              value={formData.name}
            />
            <SummaryRow
              icon={<Mail className="w-4 h-4 text-gray-500" />}
              label={t("labels.email")}
              value={formData.email}
            />
            <SummaryRow
              icon={<Calendar className="w-4 h-4 text-gray-500" />}
              label={t("labels.date")}
              value={
                <span className="capitalize text-amber-300">
                  {formatDate(formData.appointmentDate)}
                </span>
              }
            />
            {formData.paymentProof && (
              <SummaryRow
                icon={<CheckCircle className="w-4 h-4 text-green-500" />}
                label={t("labels.proof")}
                value={
                  <span className="text-green-400">
                    {formData.paymentProof.name}
                  </span>
                }
              />
            )}
            {formData.additionalMessage && (
              <SummaryRow
                icon={<Clock className="w-4 h-4 text-gray-500" />}
                label={t("labels.message")}
                value={formData.additionalMessage}
              />
            )}
          </div>
        </div>

        <div className="bg-amber-950/20 border border-amber-900/30 rounded-2xl p-5 flex gap-4 items-start">
          <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-200/80 leading-relaxed">
            {t("notice.textBefore")}
            <strong className="text-amber-100">{t("notice.timeframe")}</strong>
            {t("notice.textAfter")}
          </p>
        </div>

        <div className="flex items-center justify-between pt-6 mt-2">
          <button
            type="button"
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors py-2 px-4 rounded-full hover:bg-white/5"
          >
            <ChevronLeft className="w-4 h-4" /> {t("buttons.edit")}
          </button>

          <button
            type="submit"
            disabled={isLoading}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full font-medium min-w-[200px] hover:shadow-[0_0_30px_-5px_rgba(225,29,72,0.4)] disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            {isLoading ? (
              <>
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                {t("buttons.processing")}
              </>
            ) : (
              <>
                {t("buttons.confirm")} <CheckCircle className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Summary;
