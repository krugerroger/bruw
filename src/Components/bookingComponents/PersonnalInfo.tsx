"use client";

import { CONTACTS } from "@/constants/contacts";
import { BookingFormProps } from "@/types";
import {
  Calendar,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Mail,
  Upload,
  User,
} from "lucide-react";
import React from "react";
import { useTranslations } from "next-intl";

function PersonnalInfo({
  formData,
  errors,
  handleChange,
  handleDateChange,
  handleBack,
  handleNext,
  filePreview,
}: {
  formData: BookingFormProps["formData"];
  errors: Record<string, string>;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  handleDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBack: () => void;
  handleNext: () => void;
  filePreview: string | null;
}) {
  const t = useTranslations("PersonnalInfo");

  return (
    <div className="bg-[#121212]/80 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl p-6 sm:p-8 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="flex flex-col gap-6">
        <h3 className="text-2xl font-light text-white flex items-center gap-3 mb-2">
          <span className="w-8 h-[1px] bg-amber-500"></span>
          {t("title")}
        </h3>

        <div className="grid grid-cols-1 gap-6">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
              <User className="w-4 h-4 text-amber-400" />{" "}
              {t("fields.name.label")}
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t("fields.name.placeholder")}
              className={`w-full bg-white/5 border ${errors.name ? "border-amber-500/50" : "border-white/10"} text-white rounded-2xl px-5 py-4 outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all placeholder:text-gray-600`}
              required
            />
            {errors.name && (
              <p className="text-amber-400 text-sm">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
              <Mail className="w-4 h-4 text-amber-400" />{" "}
              {t("fields.email.label")}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("fields.email.placeholder")}
              className={`w-full bg-white/5 border ${errors.email ? "border-amber-500/50" : "border-white/10"} text-white rounded-2xl px-5 py-4 outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all placeholder:text-gray-600`}
              required
            />
            {errors.email && (
              <p className="text-amber-400 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Date */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-400" />{" "}
              {t("fields.appointmentDate.label")}
            </label>
            <input
              type="datetime-local"
              name="appointmentDate"
              value={
                formData.appointmentDate
                  ? formData.appointmentDate.toISOString().slice(0, 16)
                  : ""
              }
              onChange={handleDateChange}
              min={new Date().toISOString().slice(0, 16)}
              className={`w-full bg-white/5 border ${errors.appointmentDate ? "border-amber-500/50" : "border-white/10"} text-white rounded-2xl px-5 py-4 outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all [color-scheme:dark]`}
              required
            />
            {errors.appointmentDate ? (
              <p className="text-amber-400 text-sm">{errors.appointmentDate}</p>
            ) : (
              <p className="text-xs text-gray-500">
                {t("fields.appointmentDate.availabilityHint")}
              </p>
            )}
          </div>

          {/* Payment proof */}
          <div className="flex flex-col gap-2 mt-2">
            <label className="text-sm font-medium text-gray-400 flex items-center gap-2 mb-1">
              <Upload className="w-4 h-4 text-amber-400" />{" "}
              {t("fields.paymentProof.label")}
            </label>
            <label
              className={`relative flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-3xl cursor-pointer transition-all group overflow-hidden
                                ${errors.paymentProof ? "border-amber-500/50 bg-amber-500/5" : "border-white/10 bg-white/5 hover:border-amber-400/50 hover:bg-amber-950/20"}
                              `}
            >
              {filePreview ? (
                <div className="absolute inset-0 p-2">
                  <img
                    src={filePreview}
                    alt="Preview"
                    className="w-full h-full object-contain rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl">
                    <span className="text-white font-medium text-sm">
                      {t("fields.paymentProof.changeImage")}
                    </span>
                  </div>
                </div>
              ) : formData.paymentProof ? (
                <div className="flex flex-col items-center gap-3 z-10">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                  </div>
                  <span className="text-green-400 font-medium text-sm">
                    {formData.paymentProof.name}
                  </span>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-3 z-10">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Upload className="w-5 h-5 text-amber-300" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-300">
                      {t("fields.paymentProof.defaultTitle")}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {t("fields.paymentProof.defaultSubtitle")}
                    </p>
                  </div>
                </div>
              )}
              <input
                type="file"
                name="paymentProof"
                onChange={handleChange}
                className="hidden"
                required
              />
            </label>
            {errors.paymentProof && (
              <p className="text-amber-400 text-sm mt-1">
                {errors.paymentProof}
              </p>
            )}

            <p className="text-xs text-gray-400 mt-3 flex items-center gap-2 bg-white/5 p-3 rounded-xl">
              <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
              {t("fields.transferNotice.textBefore")}
              <strong className="text-[#25D366]">
                {t("fields.transferNotice.whatsappLabel", {
                  phone: CONTACTS.phoneNumber,
                })}
              </strong>
            </p>
          </div>

          {/* Optional message */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-400">
              {t("fields.additionalMessage.label")}{" "}
              <span className="text-gray-600 font-light">
                {t("fields.additionalMessage.optionalTag")}
              </span>
            </label>
            <textarea
              name="additionalMessage"
              value={formData.additionalMessage}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 text-white rounded-2xl px-5 py-4 outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all placeholder:text-gray-600 min-h-[120px] resize-none"
              placeholder={t("fields.additionalMessage.placeholder")}
            />
          </div>
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-4">
          <button
            type="button"
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors py-2 px-4 rounded-full hover:bg-white/5"
          >
            <ChevronLeft className="w-4 h-4" /> {t("buttons.back")}
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]"
          >
            {t("buttons.verify")} <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PersonnalInfo;
