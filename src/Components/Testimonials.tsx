"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  PenLine, 
  Loader2, 
  ChevronLeft, 
  ChevronRight 
} from "lucide-react";
import { supabaseClient } from "@/utils/supabaseClient";
import { useTranslations } from "next-intl";

const COMMENTS_PER_PAGE = 10;

export default function Testimonials() {
  const t = useTranslations("Home.Testimonials");

  // États pour le formulaire
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");

  // États de soumission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  // États pour Supabase & Pagination
  const [dbCount, setDbCount] = useState(0);
  const [currentComments, setCurrentComments] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoadingPage, setIsLoadingPage] = useState(true);

  const commentsTopRef = useRef<HTMLDivElement>(null);

  // Initialisation : Compte total + Page 1
  useEffect(() => {
    const initData = async () => {
      setIsLoadingPage(true);
      try {
        const { count, error } = await supabaseClient
          .from("comments_brunella")
          .select("*", { count: "exact", head: true })
          .eq("status", "displayed");

        const fetchedCount = error ? 0 : count || 0;
        setDbCount(fetchedCount);

        if (fetchedCount > 0) {
          await fetchPageData(1);
        } else {
          setCurrentComments([]);
        }
      } catch (err) {
        console.error("Erreur d'initialisation:", err);
      } finally {
        setIsLoadingPage(false);
      }
    };

    initData();
  }, []);

  // Fetch exactement 10 éléments
  const fetchPageData = async (page: number) => {
    const startIdx = (page - 1) * COMMENTS_PER_PAGE;
    const endIdx = startIdx + COMMENTS_PER_PAGE - 1;

    const { data, error } = await supabaseClient
      .from("comments_brunella")
      .select("*")
      .eq("status", "displayed")
      .order("created_at", { ascending: false })
      .range(startIdx, endIdx);

    if (!error && data) {
      const formattedData = data.map((item) => ({
        id: item.id,
        name: item.nom,
        // Remarque : Vous pouvez dynamiser la locale "fr-FR" si votre site est multilingue
        date: new Date(item.created_at).toLocaleDateString("fr-FR", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        text: item.commentaire,
        rating: item.note || 5,
      }));
      setCurrentComments(formattedData);
    } else {
      setCurrentComments([]);
    }
  };

  // Gestion du clic de pagination
  const handlePageChange = async (page: number) => {
    setCurrentPage(page);

    if (commentsTopRef.current) {
      commentsTopRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setIsLoadingPage(true);
    await fetchPageData(page);
    setIsLoadingPage(false);
  };

  // Soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !comment.trim()) {
      setStatus("error");
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/uploadComment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: name,
          email: email,
          commentaire: comment,
          note: rating,
        }),
      });

      if (!response.ok) throw new Error("Erreur de soumission");

      // Affichage optimiste instantané
      const optimisticComment = {
        id: "temp-" + Date.now(),
        name: name.trim(),
        date: new Date().toLocaleDateString("fr-FR", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        text: comment.trim(),
        rating: rating,
      };

      await fetchPageData(1);
      setCurrentPage(1);
      setCurrentComments((prev) => [optimisticComment, ...prev].slice(0, COMMENTS_PER_PAGE));

      setStatus("success");
      setName("");
      setEmail("");
      setComment("");
      setRating(5);

      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Erreur d'envoi:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const totalPages = Math.ceil(dbCount / COMMENTS_PER_PAGE);

  return (
    <section
      id="testimonies"
      className="py-32 bg-[#0a0a0a] text-white relative overflow-hidden"
    >
      {/* Élément décoratif subtil en arrière-plan */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-amber-400/40 to-transparent"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* En-tête de section Premium */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24 flex flex-col items-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-amber-400/70 block mb-4">
            {t("header.tagline")}
          </span>
          <h2 className="text-4xl md:text-5xl font-light font-serif mb-6 tracking-wide text-white">
            {t("header.title")}
          </h2>
          <div className="w-16 h-[1px] bg-amber-400/30 mx-auto mb-8"></div>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
            {t("header.description")}
          </p>
          <div className="max-w-7xl mx-auto px-6 pt-12">
            <div className="inline-flex flex-wrap gap-x-12 gap-y-4 border-b border-zinc-900/50 pb-6 text-[9px] uppercase tracking-widest font-mono font-bold text-zinc-600">
              <div className="flex items-center gap-3">
                <span className="text-zinc-200 font-light text-lg font-sans">
                  100%
                </span>{" "}
                {t("header.satisfaction")}
              </div>
              <div className="flex items-center gap-3">
                <span className="text-zinc-200 font-light text-lg font-sans">
                  4.9/5
                </span>{" "}
                {t("header.average_rating")}
              </div>
              <div className="flex items-center gap-3">
                <span className="text-zinc-200 font-light text-lg font-sans">
                  {t("header.subscribers")}
                </span>{" "}
                {t("header.trust")}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Ancre de scroll pour la pagination */}
        <div ref={commentsTopRef} className="scroll-mt-32" />

        {/* Grille de témoignages stylisés avec Loader absolu intégré */}
        <div className="relative min-h-[300px]">
          {isLoadingPage && (
            <div className="absolute inset-0 z-50 flex items-start justify-center pt-16 bg-[#0a0a0a]/60 backdrop-blur-sm transition-all duration-300">
              <Loader2
                size={36}
                className="animate-spin text-amber-400 opacity-70"
              />
            </div>
          )}

          {currentComments.length === 0 && !isLoadingPage ? (
            <div className="text-center py-16 text-neutral-600 italic font-serif tracking-wide">
              {t("list.empty")}
            </div>
          ) : (
            <motion.div
              className={`grid md:grid-cols-2 gap-8 lg:gap-12 mb-24 transition-opacity duration-300 ${
                isLoadingPage ? "opacity-20 pointer-events-none" : "opacity-100"
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {currentComments.map((testimonial, i) => (
                <motion.div
                  key={testimonial.id || i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group relative border border-neutral-900 bg-neutral-950/50 p-10 transition-colors duration-500 hover:border-amber-400/30 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  <div className="absolute top-6 left-8 text-9xl font-serif text-neutral-900 select-none pointer-events-none opacity-50 group-hover:text-amber-900/10 transition-colors duration-500">
                    "
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-6 flex gap-1 justify-center">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className={`w-4 h-4 ${
                            index < testimonial.rating
                              ? "text-amber-400 fill-amber-400"
                              : "text-neutral-800 fill-neutral-800"
                          }`}
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>

                    <blockquote className="text-lg text-neutral-300 font-semibold leading-relaxed mb-8 flex-grow">
                      {testimonial.text}
                    </blockquote>

                    <div className="w-full h-px bg-neutral-900 mb-6 group-hover:bg-amber-400/20 transition-colors duration-500"></div>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-400/30 text-amber-400 font-serif text-lg bg-neutral-950 shadow-inner">
                          {testimonial.name
                            ? testimonial.name.charAt(0).toUpperCase()
                            : "?"}
                        </div>
                        <div>
                          <h3 className="font-medium tracking-wide text-neutral-200 uppercase text-xs">
                            {testimonial.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        {/* PAGINATION NUMÉROTÉE PREMIUM */}
        {totalPages > 1 && (
          <div className="mb-24 flex justify-center items-center gap-2">
            <button
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1 || isLoadingPage}
              className="p-3 text-neutral-600 hover:text-amber-400 disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-1.5">
              {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1;
                return (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    disabled={isLoadingPage}
                    className={`w-9 h-9 flex items-center justify-center text-xs font-mono border transition-all ${
                      currentPage === pageNumber
                        ? "bg-amber-400/10 text-amber-400 border-amber-400/30"
                        : "text-neutral-500 border-transparent hover:text-white hover:bg-neutral-900"
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() =>
                handlePageChange(Math.min(currentPage + 1, totalPages))
              }
              disabled={currentPage === totalPages || isLoadingPage}
              className="p-3 text-neutral-600 hover:text-amber-400 disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}

        {/* NOUVELLE STRUCTURE DE FORMULAIRE EN 2 COLONNES ASYMÉTRIQUES */}
        <section className="mt-56 pt-24 border-t border-zinc-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Colonne gauche : Label d'intention */}
            <div className="lg:col-span-4 space-y-4">
              <div className="inline-block p-3 bg-zinc-950 border border-zinc-900 shadow-sm mb-2">
                <PenLine
                  className="text-amber-500/70"
                  size={20}
                  strokeWidth={1.5}
                />
              </div>
              <h2 className="text-3xl text-zinc-100 font-light uppercase tracking-tight">
                {t("form.intro.title")}
                <span className="text-amber-500">{t("form.intro.dot")}</span>
              </h2>
              <p className="text-xs text-zinc-500 font-sans leading-relaxed tracking-wide">
                {t("form.intro.description")}
              </p>
            </div>

            {/* Colonne droite : Formulaire ultra-minimal épuré */}
            <form
              onSubmit={handleSubmit}
              className="lg:col-span-8 grid gap-8 bg-zinc-950 p-8 md:p-12 border border-zinc-900 shadow-sm relative"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-1">
                  <label className="text-[8px] uppercase tracking-widest font-sans font-bold text-zinc-500">
                    {t("form.fields.name.label")}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t("form.fields.name.placeholder")}
                    className="bg-transparent border-b border-zinc-900 focus:border-amber-600 text-zinc-200 outline-none py-3 text-sm font-sans italic transition-colors placeholder:text-zinc-700"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[8px] uppercase tracking-widest font-sans font-bold text-zinc-500">
                    {t("form.fields.email.label")}
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("form.fields.email.placeholder")}
                    className="bg-transparent border-b border-zinc-900 focus:border-amber-600 text-zinc-200 outline-none py-3 text-sm font-sans italic transition-colors placeholder:text-zinc-700"
                  />
                </div>
              </div>

              {/* Sélecteur de Note Premium (Étoiles interactives) */}
              <div className="flex flex-col gap-2">
                <label className="text-[8px] uppercase tracking-widest font-sans font-bold text-zinc-500">
                  {t("form.fields.rating.label")}
                </label>
                <div className="flex gap-1.5 items-center py-1">
                  {[...Array(5)].map((_, i) => {
                    const starValue = i + 1;
                    return (
                      <button
                        type="button"
                        key={i}
                        onClick={() => setRating(starValue)}
                        onMouseEnter={() => setHoverRating(starValue)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="text-neutral-700 hover:scale-110 transition-transform focus:outline-none"
                      >
                        <svg
                          className={`w-5 h-5 transition-colors duration-200 ${
                            starValue <= (hoverRating || rating)
                              ? "text-amber-400 fill-amber-400"
                              : "text-neutral-800 fill-neutral-800"
                          }`}
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[8px] uppercase tracking-widest font-sans font-bold text-zinc-500">
                  {t("form.fields.comment.label")}
                </label>
                <textarea
                  rows={4}
                  required
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder={t("form.fields.comment.placeholder")}
                  className="bg-transparent border-b border-zinc-900 focus:border-amber-600 text-zinc-200 outline-none py-3 text-sm font-sans italic transition-colors resize-none placeholder:text-zinc-700"
                />
              </div>

              {/* Messages d'état */}
              {status === "success" && (
                <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-500 flex items-center gap-2">
                  {t("form.messages.success")}
                </div>
              )}
              {status === "error" && (
                <div className="text-[10px] font-mono uppercase tracking-widest text-rose-500">
                  {t("form.messages.error")}
                </div>
              )}

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex items-center gap-3 px-8 py-4 bg-zinc-900 text-stone-100 uppercase tracking-[0.3em] text-[10px] font-mono font-bold hover:bg-amber-600 transition-colors duration-300 shadow-sm border border-zinc-800 hover:border-transparent disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span>{t("form.submit.loading")}</span>
                      <Loader2
                        size={12}
                        className="animate-spin text-zinc-400"
                      />
                    </>
                  ) : (
                    <>
                      <span>{t("form.submit.default")}</span>
                      <ArrowUpRight
                        size={12}
                        className="text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Footer de la section (Disclaimer) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-center mt-32 border-t border-neutral-900 pt-16"
        >
          <p className="text-[11px] uppercase tracking-[0.1em] text-neutral-600 leading-relaxed max-w-sm mx-auto">
            {t("disclaimer.line1")}
            <br />
            {t("disclaimer.line2")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}