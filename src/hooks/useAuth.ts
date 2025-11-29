import { useState, useEffect } from 'react';
import pb from '@/utils/pocketbase/pocketbase';

export function useAuth() {
  const [user, setUser] = useState(pb.authStore.record);
  const [isValid, setIsValid] = useState(pb.authStore.isValid);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Vérifier l'authentification initiale
    setLoading(false);

    // Écouter les changements d'authentification
    const unsubscribe = pb.authStore.onChange((token, model) => {
      setUser(model);
      setIsValid(!!token);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const authData = await pb.collection('users').authWithPassword(email, password);
      return { 
        success: true, 
        user: authData.record,
        token: authData.token
      };
    } catch (error: any) {
      console.error('Erreur de connexion:', error);
      return { 
        success: false, 
        error: error?.message || 'Erreur de connexion' 
      };
    }
  };

  const logout = () => {
    pb.authStore.clear();
  };

  const isAuthenticated = () => {
    return pb.authStore.isValid;
  };

  return {
    user,
    isValid,
    loading,
    login,
    logout,
    isAuthenticated
  };
}