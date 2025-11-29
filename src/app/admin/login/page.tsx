'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import pb from '@/utils/pocketbase/pocketbase';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  // Rediriger si déjà connecté
  useEffect(() => {
    if (pb.authStore.isValid) {
      router.push('/admin');
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {      
      console.log('✅ Connexion réussie:');
      console.log('Token:', pb.authStore.token);
      console.log('User ID:', pb.authStore.record?.id);
      console.log('Valid:', pb.authStore.isValid);

      // Rediriger vers la page admin
      router.push('/admin');
      
    } catch (error) {
      console.error('❌ Erreur de connexion:', error);
      setError('Email ou mot de passe incorrect');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* En-tête */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-2">Brunella Moreau</h1>
          <h2 className="text-2xl font-bold text-gray-900">
            Administration
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Connectez-vous pour gérer les réservations
          </p>
        </div>

        {/* Formulaire */}
        <form className="mt-8 space-y-6 bg-base-200 p-8 rounded-2xl shadow-lg" onSubmit={handleSubmit}>
          {error && (
            <div className="alert alert-error shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{error}</span>
            </div>
          )}

          <div className="space-y-4">
            <div className="form-control">
              <label htmlFor="email" className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="input input-bordered input-primary w-full"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
            </div>

            <div className="form-control">
              <label htmlFor="password" className="label">
                <span className="label-text font-semibold">Mot de passe</span>
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="input input-bordered input-primary w-full"
                placeholder="Votre mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-primary w-full py-3 px-4 text-lg font-semibold"
            >
              {isLoading ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  Connexion...
                </>
              ) : (
                'Se connecter'
              )}
            </button>
          </div>

          <div className="text-center mt-4">
            <Link 
              href="/" 
              className="link link-hover text-sm text-gray-600 hover:text-primary"
            >
              ← Retour au site principal
            </Link>
          </div>
        </form>

        {/* Debug info - À retirer en production */}
        <div className="mt-8 p-4 bg-info/20 rounded-lg">
          <h3 className="font-bold text-info mb-2">Debug Information:</h3>
          <div className="text-xs font-mono">
            <div>Auth Store Valid: {pb.authStore.isValid ? '✅ Oui' : '❌ Non'}</div>
            <div>Token: {pb.authStore.token ? '✅ Présent' : '❌ Absent'}</div>
            <div>User: {pb.authStore.record ? '✅ Connecté' : '❌ Déconnecté'}</div>
          </div>
        </div>
      </div>
    </div>
  );
}