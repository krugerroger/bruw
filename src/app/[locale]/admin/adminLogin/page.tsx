"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, Loader2, ChevronRight } from "lucide-react";
import { supabaseClient } from "@/utils/supabaseClient";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const router = useRouter();
  const supabase = supabaseClient;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError("Identifiants invalides. Veuillez réessayer.");
      setLoading(false);
    } else {
      router.push("/admin/data/privateData-reservation"); // Redirection vers ton dashboard
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] px-4">
      <div className="w-full max-w-md space-y-8 p-8 bg-[#111] border border-white/10 rounded-2xl shadow-2xl">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-light text-white tracking-tight">
            Espace <span className="font-semibold text-rose-500">Privé</span>
          </h1>
          <p className="text-gray-400 text-sm">Identifiez-vous pour accéder à la gestion</p>
        </div>

        {/* Formulaire */}
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-4">
            
            {/* Email */}
            <div className="relative group">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-rose-500 transition-colors opacity-70" />
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/20 transition-all"
              />
            </div>

            {/* Password */}
            <div className="relative group">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-rose-500 transition-colors opacity-70" />
              <input
                type="password"
                placeholder="Mot de passe"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/20 transition-all"
              />
            </div>
          </div>

          {error && (
            <p className="text-rose-500 text-xs text-center animate-pulse">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-white text-black font-medium py-3 rounded-xl hover:bg-rose-500 hover:text-white transition-all duration-300 disabled:opacity-50 group"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                Se connecter
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        <div className="text-center">
          <button 
            onClick={() => router.push("/")}
            className="text-gray-500 text-xs hover:text-white transition-opacity opacity-60 hover:opacity-100"
          >
            Retour au site public
          </button>
        </div>
      </div>
    </div>
  );
}