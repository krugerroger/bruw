// app/admin/comments/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabaseClient } from "@/utils/supabaseClient";
import {
  RefreshCw,
  LogOut,
  User,
  Shield,
  MessageSquare,
  Trash2,
  Calendar,
  Star,
  ChevronDown,
  Check
} from "lucide-react";

interface Commentaire {
  id: string;
  nom: string;
  email: string | null;
  commentaire: string;
  note: number;
  status: string;
  created_at: string;
}

const COMMENTS_PER_PAGE = 10;

export default function AdminCommentsPage() {
  const [comments, setComments] = useState<Commentaire[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [approvingId, setApprovingId] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [userEmail, setUserEmail] = useState<string>("");
  
  const router = useRouter();

  useEffect(() => {
    checkAuthAndFetchData();
  }, []);

  const checkAuthAndFetchData = async () => {
    try {
      const {
        data: { session },
        error: sessionError,
      } = await supabaseClient.auth.getSession();

      if (sessionError || !session) {
        router.push("/admin/adminLogin");
        return;
      }

      setUserEmail(session.user.email || "");
      await fetchComments(0, false);
    } catch {
      router.push("/admin/adminLogin");
    }
  };

  const fetchComments = async (pageIndex: number, isLoadMore: boolean) => {
    if (isLoadMore) setLoadingMore(true);
    else setLoading(true);

    try {
      const from = pageIndex * COMMENTS_PER_PAGE;
      const to = from + COMMENTS_PER_PAGE - 1;

      const { data, error } = await supabaseClient
        .from("comments_brunella")
        .select("*")
        .eq("status", "pending")
        .order("created_at", { ascending: false })
        .range(from, to);

      if (error) throw error;

      if (data) {
        if (isLoadMore) {
          setComments((prev) => [...prev, ...data]);
        } else {
          setComments(data);
        }
        setHasMore(data.length === COMMENTS_PER_PAGE);
      }
    } catch (error: unknown) {
      console.error("Erreur de chargement:", error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchComments(nextPage, true);
  };

  const handleRefresh = () => {
    setPage(0);
    fetchComments(0, false);
  };

  const handleLogout = async () => {
    await supabaseClient.auth.signOut();
    router.push("/admin/adminLogin");
  };

  const handleApprove = async (id: string) => {
    setApprovingId(id);
    try {
      // Mise à jour directe via Supabase (tu peux aussi utiliser une API route comme pour Delete si tes RLS l'exigent)
      const { error } = await supabaseClient
        .from("comments_brunella")
        .update({ status: "displayed" })
        .eq("id", id);

      if (error) throw error;

      // Mise à jour de l'UI (on retire le commentaire puisqu'il n'est plus "pending")
      setComments((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      console.error(err);
      alert("Impossible d'approuver le commentaire.");
    } finally {
      setApprovingId(null);
    }
  };

const handleDelete = async (id: string) => {
  setDeletingId(id);
  try {
    // Suppression définitive de la ligne dans Supabase
    const { error } = await supabaseClient
      .from("comments_brunella")
      .delete()
      .eq("id", id);

    if (error) throw error;

    // Mise à jour de l'UI (on retire le commentaire de la liste)
    setComments((prev) => prev.filter((c) => c.id !== id));
  } catch (err) {
    console.error(err);
    alert("Impossible de supprimer définitivement le commentaire.");
  } finally {
    setDeletingId(null);
  }
};

  if (loading && comments.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center space-y-5">
          <RefreshCw
            className="w-8 h-8 text-indigo-600 animate-spin mx-auto"
            strokeWidth={1.5}
          />
          <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-sans font-medium">
            Lecture des témoignages en cours...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-600 font-serif selection:bg-indigo-100 selection:text-indigo-900 p-4 md:p-12 lg:p-16 pt-28 md:pt-32 mt-20">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12 border-b border-slate-200 pb-10">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-indigo-600 font-sans font-bold block">
              Espace Privé — Administration
            </span>
            <h1 className="text-3xl md:text-4xl text-slate-900 italic tracking-tight font-light">
              Modération des Témoignages
            </h1>
            <div className="flex items-center gap-2 text-[11px] font-sans tracking-wide text-slate-500">
              <Shield size={14} className="text-indigo-500" strokeWidth={2} />
              <span>
                Session : <span className="text-slate-700 font-medium italic font-serif">{userEmail}</span>
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 w-full md:w-auto">
            <Link
              href="/admin/data/privateData-reservation"
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 border border-slate-200 hover:border-indigo-300 text-[10px] uppercase tracking-widest font-sans font-medium transition-all text-slate-600 hover:text-indigo-600 bg-white rounded-lg shadow-sm"
            >
              <Calendar size={14} strokeWidth={1.5} />
              Registre
            </Link>
            <button
              type="button"
              onClick={handleRefresh}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 border border-slate-200 hover:border-indigo-300 text-[10px] uppercase tracking-widest font-sans font-medium transition-all text-slate-600 hover:text-indigo-600 bg-white rounded-lg shadow-sm group"
            >
              <RefreshCw
                size={14}
                strokeWidth={1.5}
                className="group-hover:rotate-180 transition-transform duration-700 ease-out"
              />
              Actualiser
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 border border-slate-200 hover:border-red-300 text-[10px] uppercase tracking-widest font-sans font-medium transition-all text-slate-600 hover:text-red-600 bg-white hover:bg-red-50 rounded-lg shadow-sm"
            >
              <LogOut size={14} strokeWidth={1.5} />
              Quitter
            </button>
          </div>
        </header>

        {/* CONTENEUR PRINCIPAL / DESKTOP TABLE */}
        <div className="hidden lg:block bg-white border border-slate-200 rounded-xl overflow-hidden mb-12 shadow-md">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-5 text-[10px] uppercase tracking-[0.2em] font-sans text-slate-500 font-bold w-1/4">
                  Auteur
                </th>
                <th className="px-6 py-5 text-[10px] uppercase tracking-[0.2em] font-sans text-slate-500 font-bold w-1/2">
                  Témoignage
                </th>
                <th className="px-6 py-5 text-[10px] uppercase tracking-[0.2em] font-sans text-slate-500 font-bold w-1/6">
                  Date
                </th>
                <th className="px-6 py-5 text-right text-[10px] uppercase tracking-[0.2em] font-sans text-slate-500 font-bold">
                  Décision
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {comments.map((comment) => (
                <tr
                  key={comment.id}
                  className="hover:bg-indigo-50/50 transition-colors group"
                >
                  <td className="px-6 py-6 align-top">
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 bg-indigo-50 border border-indigo-100 flex items-center justify-center rounded-full text-indigo-600 group-hover:bg-indigo-500 group-hover:text-white transition-all shrink-0 shadow-sm">
                        <User size={16} strokeWidth={1.5} />
                      </div>
                      <div className="truncate space-y-0.5 mt-0.5">
                        <div className="text-slate-900 text-sm font-semibold truncate">
                          {comment.nom}
                        </div>
                        <div className="text-[11px] text-slate-500 font-sans tracking-wide truncate">
                          {comment.email || "Adresse non fournie"}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6 align-top">
                    <div className="flex items-center gap-1 mb-2.5 text-amber-400">
                      {Array.from({ length: comment.note }).map((_, i) => (
                        <Star key={i} size={12} fill="currentColor" stroke="none" />
                      ))}
                    </div>
                    <p className="text-[14px] text-slate-700 leading-relaxed max-w-xl font-normal">
                      « {comment.commentaire} »
                    </p>
                  </td>
                  <td className="px-6 py-6 align-top tabular-nums">
                    <div className="text-sm font-medium text-slate-700">
                      {new Date(comment.created_at).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </div>
                    <div className="text-[11px] text-slate-400 font-sans mt-1">
                      {new Date(comment.created_at).toLocaleTimeString("fr-FR", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </td>
                  <td className="px-6 py-6 text-right align-top">
                    <div className="flex justify-end gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
                      {/* APPROUVER */}
                      <button
                        onClick={() => handleApprove(comment.id)}
                        disabled={approvingId === comment.id}
                        className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-emerald-50 hover:border-emerald-300 text-slate-400 hover:text-emerald-600 shadow-sm transition-all disabled:opacity-40"
                        title="Approuver l'avis"
                      >
                        {approvingId === comment.id ? (
                          <RefreshCw size={14} className="animate-spin" />
                        ) : (
                          <Check size={16} strokeWidth={2} />
                        )}
                      </button>

                      {/* SUPPRIMER */}
                      <button
                        onClick={() => handleDelete(comment.id)}
                        disabled={deletingId === comment.id}
                        className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-red-50 hover:border-red-300 text-slate-400 hover:text-red-600 shadow-sm transition-all disabled:opacity-40"
                        title="Refuser et archiver"
                      >
                        {deletingId === comment.id ? (
                          <RefreshCw size={14} className="animate-spin" />
                        ) : (
                          <Trash2 size={16} strokeWidth={2} />
                        )}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* VERSION MOBILE (CARDS) */}
        <div className="lg:hidden space-y-4 mb-12">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-white border border-slate-200 rounded-xl p-5 space-y-4 relative overflow-hidden shadow-sm"
            >
              <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-slate-50 border border-slate-200 p-1 rounded-lg shadow-sm">
                <button
                  onClick={() => handleApprove(comment.id)}
                  disabled={approvingId === comment.id}
                  className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors disabled:opacity-40"
                >
                  {approvingId === comment.id ? (
                    <RefreshCw size={15} className="animate-spin" />
                  ) : (
                    <Check size={16} strokeWidth={2} />
                  )}
                </button>
                
                <button
                  onClick={() => handleDelete(comment.id)}
                  disabled={deletingId === comment.id}
                  className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors disabled:opacity-40"
                >
                  {deletingId === comment.id ? (
                    <RefreshCw size={15} className="animate-spin" />
                  ) : (
                    <Trash2 size={15} strokeWidth={2} />
                  )}
                </button>
              </div>

              <div className="flex items-center gap-3 pr-24">
                <div className="w-10 h-10 bg-indigo-50 border border-indigo-100 rounded-full flex items-center justify-center shrink-0 text-indigo-600">
                  <User size={18} strokeWidth={1.5} />
                </div>
                <div className="truncate">
                  <h3 className="text-slate-900 font-semibold text-sm truncate">{comment.nom}</h3>
                  <p className="text-[11px] font-sans text-slate-500 tracking-wide truncate">
                    {comment.email || "Non renseigné"}
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-3">
                <div className="flex items-center gap-1 mb-2 text-amber-400">
                  {Array.from({ length: comment.note }).map((_, i) => (
                    <Star key={i} size={11} fill="currentColor" stroke="none" />
                  ))}
                </div>
                <p className="text-[14px] text-slate-700 leading-relaxed font-normal">
                  « {comment.commentaire} »
                </p>
              </div>

              <div className="border-t border-slate-100 pt-3 flex justify-between items-center tabular-nums">
                <p className="text-[11px] text-slate-400 font-sans tracking-wide flex gap-2 font-medium">
                  <span>{new Date(comment.created_at).toLocaleDateString("fr-FR")}</span>
                  <span className="text-slate-300">—</span>
                  <span>
                    {new Date(comment.created_at).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        {hasMore && comments.length > 0 && (
          <div className="flex justify-center mt-12 pb-16">
            <button
              onClick={handleLoadMore}
              disabled={loadingMore}
              className="flex items-center justify-center gap-3 px-8 py-3.5 border border-slate-200 hover:border-indigo-300 text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-slate-600 hover:text-indigo-600 transition-all bg-white rounded-xl shadow-sm disabled:opacity-40"
            >
              {loadingMore ? (
                <RefreshCw size={14} className="animate-spin text-indigo-600" />
              ) : (
                <ChevronDown size={14} className="text-indigo-600" />
              )}
              {loadingMore ? "Indexation..." : "Charger les témoignages suivants"}
            </button>
          </div>
        )}

        {/* ÉTAT VIDE */}
        {comments.length === 0 && !loading && (
          <div className="text-center py-24 border border-slate-200 bg-white rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-100">
              <MessageSquare
                className="w-8 h-8 text-slate-300"
                strokeWidth={1.5}
              />
            </div>
            <h3 className="text-slate-900 font-medium text-lg">File d'attente vierge</h3>
            <p className="text-slate-500 text-[11px] mt-2 uppercase tracking-[0.2em] font-sans">
              Aucun nouveau témoignage n'est en attente de traitement.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}