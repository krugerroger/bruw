"use client";

import { BookingFormProps, Offer } from "@/types";
import { ChevronDown, ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";

function PackageSelection({
  offer,
  selectedPackage,
  errors,
  handlePackageChange,
  handleNext,
}: {
  offer: Offer | null;
  selectedPackage: BookingFormProps["selectedPackage"];
  errors: Record<string, string>;
  handlePackageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleNext: () => void;
}) {
  const t = useTranslations("PackageSelection");

  return (
    <div className="bg-[#121212]/80 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl p-6 sm:p-8 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="flex flex-col gap-6">
        <h3 className="text-2xl font-light text-white flex items-center gap-3">
          <span className="w-8 h-[1px] bg-amber-500"></span>
          {t("title")}
        </h3>

        {offer && (
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-400 tracking-wide uppercase">
                {t("selectLabel")}
              </label>
              <div className="relative">
                <select
                  name="selectedPackage"
                  onChange={handlePackageChange}
                  className="w-full appearance-none bg-white/5 border border-white/10 text-white rounded-2xl px-5 py-4 outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all cursor-pointer"
                >
                  {offer.price.map((option, index) => (
                    <option
                      key={index}
                      value={index}
                      className="bg-gray-900 text-white"
                    >
                      {option.duration} — {option.amount}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </div>
              </div>
              {errors.package && (
                <p className="text-amber-400 text-sm mt-1">{errors.package}</p>
              )}
            </div>

            {/* Selected package preview card */}
            <div className="relative overflow-hidden bg-gradient-to-br from-amber-950/40 to-black border border-amber-900/30 rounded-2xl p-6 sm:p-8 group transition-all hover:border-amber-800/50">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Sparkles className="w-24 h-24 text-amber-500" />
              </div>
              <p className="text-amber-300 uppercase tracking-[0.2em] text-xs font-semibold mb-4">
                {t("preview.tagline")}
              </p>
              <p className="text-xl font-light text-white mb-1">
                {selectedPackage.duration}
              </p>
              <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-500 mb-4">
                {selectedPackage.price}
              </p>
              {selectedPackage.description && (
                <p className="text-sm text-gray-400 border-t border-white/5 pt-4 mt-2 font-light leading-relaxed">
                  {selectedPackage.description}
                </p>
              )}
            </div>

            <Link
              href="/tarifs"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-amber-400 transition-colors"
            >
              {t("allRatesLink")} <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        <div className="flex justify-end pt-4 border-t border-white/5 mt-2">
          <button
            type="button"
            onClick={handleNext}
            className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]"
          >
            {t("buttons.continue")} <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PackageSelection;
