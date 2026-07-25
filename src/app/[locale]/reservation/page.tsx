"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { Offer, BookingFormProps } from "@/types";
import SuccessState from "@/Components/bookingComponents/SuccessState";
import PackageSelection from "@/Components/bookingComponents/PackageSelection";
import PersonnalInfo from "@/Components/bookingComponents/PersonnalInfo";
import Summary from "@/Components/bookingComponents/Summary";
import InfoSection from "@/Components/bookingComponents/InfoSection";
import { useOffers, useSteps } from "@/constants/book";

export default function BookingForm() {
  const t = useTranslations("BookingForm");
  const Steps = useSteps();
  const Offers = useOffers();

  const [offer, setOffer] = useState<Offer | null>(Offers);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [filePreview, setFilePreview] = useState<string | null>(null);

  const [selectedPackage, setSelectedPackage] = useState<
    BookingFormProps["selectedPackage"]
  >({
    title: Offers.title,
    duration: Offers.price[0].duration,
    price: Offers.price[0].amount,
    description: Offers.price[0].description,
  });

  const [formData, setFormData] = useState<BookingFormProps["formData"]>({
    name: "",
    email: "",
    appointmentDate: null,
    paymentProof: null,
    additionalMessage: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const data = params.get("data");
      if (data) {
        try {
          const parsed = JSON.parse(data);
          setOffer(parsed);
        } catch (err) {
          console.error(t("errors.parsing"), err);
        }
      }
    }
  }, [t]);

  const validate = (step: number) => {
    const newErrors: Record<string, string> = {};
    if (step === 1) {
      if (!selectedPackage.duration) newErrors.package = t("errors.package");
    }
    if (step === 2) {
      if (!formData.name.trim()) newErrors.name = t("errors.nameRequired");
      if (!formData.email.trim()) newErrors.email = t("errors.emailRequired");
      else if (!/\S+@\S+\.\S+/.test(formData.email))
        newErrors.email = t("errors.emailInvalid");
      if (!formData.appointmentDate)
        newErrors.appointmentDate = t("errors.dateRequired");
      if (!formData.paymentProof)
        newErrors.paymentProof = t("errors.proofRequired");
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate(currentStep)) setCurrentStep((s) => s + 1);
  };

  const handleBack = () => setCurrentStep((s) => s - 1);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    if (
      event.target instanceof HTMLInputElement &&
      event.target.type === "file"
    ) {
      const files = event.target.files;
      const file = files ? files[0] : null;
      setFormData((prev) => ({ ...prev, [name]: file }));
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => setFilePreview(e.target?.result as string);
        reader.readAsDataURL(file);
      } else {
        setFilePreview(null);
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handlePackageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = Number(e.target.value);
    if (offer) {
      setSelectedPackage({
        title: offer.title,
        duration: offer.price[selectedIndex].duration,
        price: offer.price[selectedIndex].amount,
        description: offer.price[selectedIndex].description,
      });
    }
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      const selectedDate = new Date(e.target.value);
      if (selectedDate >= new Date()) {
        setFormData((prev) => ({ ...prev, appointmentDate: selectedDate }));
        setErrors((prev) => ({ ...prev, appointmentDate: "" }));
      } else {
        setErrors((prev) => ({
          ...prev,
          appointmentDate: t("errors.dateFuture"),
        }));
      }
    } else {
      setFormData((prev) => ({ ...prev, appointmentDate: null }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append(
        "appointmentDate",
        formData.appointmentDate?.toISOString() || "",
      );
      if (formData.paymentProof)
        formDataToSend.append("paymentProof", formData.paymentProof);
      formDataToSend.append("additionalMessage", formData.additionalMessage);
      formDataToSend.append("packageTitle", selectedPackage.title);
      formDataToSend.append("packageDuration", selectedPackage.duration);
      formDataToSend.append("packagePrice", selectedPackage.price);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formDataToSend,
      });
      const result = await response.json();
      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error(t("errors.general"), result.error);
      }
    } catch (err) {
      console.error(t("errors.general"), err);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (date: Date | null) => {
    if (!date) return t("dateFallback");
    return date.toLocaleDateString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <section id="reservation" className="py-20 bg-base-100 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Sidebar image */}
          <div className="hidden lg:block lg:w-1/3 sticky top-20 space-y-6">
            <div className="relative h-[28rem] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
              <Image
                src="/bru_hero.jpg"
                alt="Brunella Moreau - Moments privilégiés"
                sizes="(min-width: 640px) 32rem, 90vw"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Dégradé de cinéma plus immersif */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-8 left-8 text-white space-y-1">
                <p className="text-2xl font-light tracking-wide">
                  {t("sidebar.title")}
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-white/60 font-medium">
                  {t("sidebar.subtitle")}
                </p>
              </div>
            </div>

            {/* Package summary card visible on step 2+ */}
            {currentStep >= 2 && !submitted && (
              <div className="relative bg-[#121212]/70 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl space-y-4 animate-in fade-in slide-in-from-top-4 duration-500 overflow-hidden">
                {/* Halo lumineux en arrière-plan */}
                <div className="absolute -top-16 -right-16 w-36 h-36 bg-gradient-to-br from-amber-500/20 to-transparent rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center justify-between border-b border-white/5 pb-3 relative z-10">
                  <p className="text-amber-400 font-medium uppercase tracking-[0.15em] text-xs">
                    {t("sidebar.selection")}
                  </p>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_#f43f5e] animate-pulse"></span>
                </div>

                <div className="space-y-1 relative z-10">
                  <p className="text-base font-light text-white/90">
                    {selectedPackage.duration}
                  </p>
                  <p className="text-4xl font-bold text-amber-400">
                    {selectedPackage.price}
                  </p>
                </div>

                {selectedPackage.description && (
                  <p className="text-xs text-gray-400 border-t border-white/5 pt-3 font-light leading-relaxed relative z-10">
                    {selectedPackage.description}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Main form area */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-500 mb-2">
              {t("title")}
            </h2>
            <div className="w-20 h-1 bg-amber-500 mb-8" />

            {/* ── SUCCESS STATE ── */}
            {submitted ? (
              <SuccessState
                formData={formData}
                selectedPackage={selectedPackage}
                formatDate={formatDate}
              />
            ) : (
              <>
                {/* ── STEPPER ── */}
                <div className="flex items-center mb-8">
                  {Steps.map((step, i) => {
                    const Icon = step.icon;
                    const isActive = currentStep === step.id;
                    const isDone = currentStep > step.id;
                    return (
                      <div
                        key={step.id}
                        className="flex items-center flex-1 last:flex-none"
                      >
                        <div className="flex flex-col items-center gap-1">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border-2
                              ${isDone ? "bg-amber-600 border-amber-600 text-white" : ""}
                              ${isActive ? "bg-transparent border-amber-500 text-amber-500 shadow-[0_0_12px_rgba(236,72,153,0.4)]" : ""}
                              ${!isActive && !isDone ? "bg-transparent border-gray-600 text-gray-500" : ""}
                            `}
                          >
                            {isDone ? (
                              <CheckCircle className="w-5 h-5" />
                            ) : (
                              <Icon className="w-4 h-4" />
                            )}
                          </div>
                          <span
                            className={`text-xs font-medium transition-colors
                              ${isActive ? "text-amber-400" : isDone ? "text-amber-600" : "text-gray-500"}
                            `}
                          >
                            {step.label}
                          </span>
                        </div>
                        {i < Steps.length - 1 && (
                          <div
                            className={`flex-1 h-0.5 mx-2 mb-4 transition-all duration-500
                              ${currentStep > step.id ? "bg-amber-600" : "bg-gray-700"}
                            `}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 w-full max-w-2xl mx-auto"
                >
                  {/* ── STEP 1 : PACKAGE SELECTION ── */}
                  {currentStep === 1 && (
                    <PackageSelection
                      offer={offer}
                      selectedPackage={selectedPackage}
                      errors={errors}
                      handlePackageChange={handlePackageChange}
                      handleNext={handleNext}
                    />
                  )}

                  {/* ── STEP 2 : PERSONAL INFO ── */}
                  {currentStep === 2 && (
                    <PersonnalInfo
                      formData={formData}
                      errors={errors}
                      handleChange={handleChange}
                      handleDateChange={handleDateChange}
                      handleBack={handleBack}
                      handleNext={handleNext}
                      filePreview={filePreview}
                    />
                  )}

                  {/* ── STEP 3 : SUMMARY + CONFIRM ── */}
                  {currentStep === 3 && (
                    <Summary
                      formData={formData}
                      selectedPackage={selectedPackage}
                      handleBack={handleBack}
                      isLoading={isLoading}
                      formatDate={formatDate}
                    />
                  )}
                </form>
              </>
            )}
          </div>
        </div>

        {/* ── INFO SECTION ── */}
        <div className="divider mt-12" />

        <InfoSection />
      </div>
    </section>
  );
}
