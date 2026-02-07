'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabaseClient } from '@/utils/supabaseClient';
import { Mail, Lock, Home, AlertCircle, CheckCircle, Shield } from 'lucide-react';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [debugInfo, setDebugInfo] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  // // Vérifier la session au chargement
  // useEffect(() => {
  //   checkSession();
  // }, []);

  // const checkSession = async () => {
  //   try {
  //     const { data: { session }, error } = await supabaseClient.auth.getSession();
      
  //     if (error) {
  //       console.error('❌ Erreur lors de la vérification de session:', error);
  //       setDebugInfo({
  //         isValid: false,
  //         message: error.message,
  //       });
  //       return;
  //     }

  //     if (session) {
  //       console.log('✅ Session existante détectée');
  //       console.log('User ID:', session.user.id);
  //       console.log('Email:', session.user.email);
        
  //       setIsAuthenticated(true);
  //       setDebugInfo({
  //         isValid: true,
  //         userId: session.user.id,
  //         userEmail: session.user.email,
  //         expiresAt: session.expires_at ? new Date(session.expires_at * 1000).toLocaleString() : 'Non disponible',
  //         provider: session.user.app_metadata?.provider || 'email',
  //       });

  //       // Rediriger vers l'admin si déjà connecté
  //       router.push('/admin');
  //     } else {
  //       setIsAuthenticated(false);
  //       setDebugInfo({
  //         isValid: false,
  //         message: 'Aucune session active',
  //       });
  //     }
  //   } catch (error) {
  //     console.error('Erreur lors de la vérification de session:', error);
  //     setDebugInfo({
  //       isValid: false,
  //       message: 'Erreur lors de la vérification',
  //     });
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const { data, error: signInError } = await supabaseClient.auth.signInWithPassword({
        email: email.trim(),
        password: password,
      });

      if (signInError) {
        throw signInError;
      }

      console.log('✅ Connexion réussie:');
      console.log('User ID:', data.user?.id);
      console.log('Email:', data.user?.email);
      console.log('Session:', data.session ? 'Présente' : 'Absente');

      // Mettre à jour l'état d'authentification
      setIsAuthenticated(true);

      // Rafraîchir la session
      await supabaseClient.auth.refreshSession();

      // Rediriger vers la page admin
      router.push('/admin');
      
    } catch (error: any) {
      console.error('❌ Erreur de connexion:', error);
      
      // Messages d'erreur personnalisés
      if (error.message?.includes('Invalid login credentials')) {
        setError('Email ou mot de passe incorrect');
      } else if (error.message?.includes('Email not confirmed')) {
        setError('Veuillez confirmer votre email avant de vous connecter');
      } else if (error.message?.includes('Invalid email')) {
        setError('Format d\'email invalide');
      } else {
        setError(error.message || 'Une erreur est survenue lors de la connexion');
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Fonction de déconnexion (pour debug)
  const handleSignOut = async () => {
    try {
      const { error } = await supabaseClient.auth.signOut();
      if (error) throw error;
      
      setIsAuthenticated(false);
      setDebugInfo(null);
      console.log('✅ Déconnexion réussie');
    } catch (error) {
      console.error('❌ Erreur de déconnexion:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* En-tête */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full mb-4">
            <Shield className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent mb-2">
            Brunella Moreau
          </h1>
          <h2 className="text-2xl font-bold text-slate-800">
            Accès Administrateur
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Connectez-vous pour gérer les réservations et le contenu
          </p>
        </div>

        {/* Si déjà connecté, afficher un message */}
        {isAuthenticated ? (
          <div className="bg-gradient-to-br from-emerald-50 to-teal-100 rounded-2xl p-8 shadow-lg">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                <CheckCircle className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Déjà connecté !</h3>
              <p className="text-slate-600 mb-6">
                Vous êtes déjà connecté. Redirection vers le tableau de bord...
              </p>
              <div className="space-y-3">
                <button
                  onClick={() => router.push('/admin')}
                  className="btn btn-primary w-full py-3"
                >
                  Aller au tableau de bord
                </button>
                <button
                  onClick={handleSignOut}
                  className="btn btn-ghost w-full py-3"
                >
                  Se déconnecter
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Formulaire de connexion */
          <form className="mt-8 space-y-6 bg-white p-8 rounded-2xl shadow-xl border border-slate-200" onSubmit={handleSubmit}>
            {error && (
              <div className="alert alert-error shadow-lg bg-red-50 border border-red-200">
                <AlertCircle className="stroke-current shrink-0 h-6 w-6 text-red-600" />
                <span className="text-red-700">{error}</span>
              </div>
            )}

            <div className="space-y-4">
              <div className="form-control">
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-violet-600" />
                    Adresse email
                  </div>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="pl-10 w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                    placeholder="admin@exemple.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="form-control">
                <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                  <div className="flex items-center gap-2">
                    <Lock className="h-4 w-4 text-violet-600" />
                    Mot de passe
                  </div>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="pl-10 w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                    placeholder="Votre mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                  />
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full p-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold rounded-lg hover:from-violet-700 hover:to-fuchsia-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Connexion en cours...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-3">
                    <Shield className="w-5 h-5" />
                    Se connecter
                  </span>
                )}
              </button>
            </div>

            <div className="text-center pt-4 border-t border-slate-200">
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-violet-600 transition-colors"
              >
                <Home className="h-4 w-4" />
                ← Retour au site principal
              </Link>
            </div>
          </form>
        )}

        {/* Debug info - À retirer en production */}
        {process.env.NODE_ENV === 'development' && debugInfo && (
          <div className="mt-8 p-4 bg-gradient-to-r from-slate-100 to-slate-200 rounded-xl border border-slate-300">
            <h3 className="font-bold text-slate-700 mb-2 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Informations de Debug
            </h3>
            <div className="text-xs font-mono space-y-1">
              <div className="flex justify-between">
                <span className="text-slate-600">Authentifié:</span>
                <span className={debugInfo.isValid ? "text-emerald-600 font-semibold" : "text-red-600"}>
                  {debugInfo.isValid ? '✅ Oui' : '❌ Non'}
                </span>
              </div>
              {debugInfo.userEmail && (
                <div className="flex justify-between">
                  <span className="text-slate-600">Email:</span>
                  <span className="text-slate-800">{debugInfo.userEmail}</span>
                </div>
              )}
              {debugInfo.expiresAt && (
                <div className="flex justify-between">
                  <span className="text-slate-600">Expire le:</span>
                  <span className="text-slate-800">{debugInfo.expiresAt}</span>
                </div>
              )}
              {debugInfo.message && (
                <div className="text-slate-800">{debugInfo.message}</div>
              )}
            </div>
            <div className="mt-3 flex gap-2">
              {/* <button
                onClick={checkSession}
                className="text-xs px-3 py-1 bg-slate-200 hover:bg-slate-300 rounded text-slate-700"
              >
                Rafraîchir session
              </button> */}
              <button
                onClick={handleSignOut}
                className="text-xs px-3 py-1 bg-red-100 hover:bg-red-200 rounded text-red-700"
              >
                Déconnexion
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}