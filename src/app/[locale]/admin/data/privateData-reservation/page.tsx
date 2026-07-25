// admin/data/privateData-reservation/page.tsx
'use client'

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'; // ✅ Correction : Import du composant de navigation de Next.js
import { supabaseClient } from '@/utils/supabaseClient';
import { 
  RefreshCw, 
  LogOut, 
  User, 
  Clock, 
  CreditCard, 
  Calendar,
  Package,
  DollarSign,
  Mail,
  Shield,
  AlertCircle,
  MessageSquare
} from 'lucide-react'; // ✅ Correction : Retrait de 'Link' qui entrait en conflit

interface Reservation {
  id: string;
  name: string;
  email: string;
  meetdate: string;
  ticketproof: string;
  message: string;
  optionname: string;
  optionduration: string;
  optionprice: string;
  status: string;
  created_at: string;
}

export default function AdminPage() {
  // ✅ Correction : Initialisé à true pour éviter le flash du message "Aucune réservation" au premier chargement
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState<string>('');
  const [authError, setAuthError] = useState<string>('');
  const router = useRouter();

  const fetchReservations = useCallback(async () => {
    try {
      setLoading(true); // ✅ Correction : Activer le chargement lors d'une actualisation manuelle
      console.log('📥 Récupération des réservations...');

      const { data, error } = await supabaseClient
        .from('customers')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('❌ Erreur Supabase:', error);
        throw error;
      }

      console.log(`✅ ${data?.length || 0} réservations récupérées`);
      setReservations(data || []);
    } catch (error: any) {
      console.error('❌ Erreur lors de la récupération:', error);
      alert('Erreur lors de la récupération des réservations');
    } finally {
      setLoading(false);
    }
  }, []);

  const checkAuthAndFetchData = useCallback(async () => {
    try {
      const { data: { session }, error: sessionError } = await supabaseClient.auth.getSession();
      
      if (sessionError) {
        console.error('❌ Erreur de session:', sessionError);
        setAuthError('Erreur de session');
        router.push('/admin/adminLogin');
        return;
      }

      if (!session) {
        console.log('ℹ️ Aucune session - redirection vers login');
        router.push('/admin/adminLogin');
        return;
      }

      setUserEmail(session.user.email || '');
      console.log('✅ Utilisateur connecté:', session.user.email);

      await fetchReservations();
    } catch (error) {
      console.error('❌ Erreur de vérification:', error);
      setAuthError('Erreur de vérification');
      router.push('/admin/adminLogin');
    }
  }, [router, fetchReservations]);

  useEffect(() => {
    checkAuthAndFetchData();
  }, [checkAuthAndFetchData]);

  const handleLogout = async () => {
    try {
      console.log('🚪 Déconnexion...');
      const { error } = await supabaseClient.auth.signOut();
      if (error) throw error;
      
      console.log('✅ Déconnexion réussie');
      router.push('/admin/adminLogin');
    } catch (error) {
      console.error('❌ Erreur de déconnexion:', error);
      alert('Erreur lors de la déconnexion');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'confirmed':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'pending':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'cancelled':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  // Écran de chargement
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full mb-4">
            <Shield className="w-8 h-8 text-white animate-pulse" />
          </div>
          <h2 className="text-xl font-semibold text-slate-700 mb-2">
            Chargement des réservations...
          </h2>
          <div className="w-8 h-8 border-2 border-violet-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  // Si erreur d'authentification
  if (authError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="text-center max-w-md">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
            <AlertCircle className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-xl font-semibold text-slate-700 mb-2">
            Erreur d'authentification
          </h2>
          <p className="text-slate-600 mb-6">{authError}</p>
          <button
            onClick={() => router.push('/admin/adminLogin')} // ✅ Correction du chemin de redirection
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-all shadow"
          >
            Retour à la connexion
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              Tableau de bord
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <User className="w-4 h-4 text-slate-500" />
              <p className="text-slate-600 text-sm">
                Connecté en tant que: <span className="font-medium text-slate-800">{userEmail}</span>
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            <button 
              onClick={fetchReservations} 
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-medium rounded-lg hover:from-violet-600 hover:to-fuchsia-600 transition-all shadow hover:shadow-lg"
            >
              <RefreshCw className="w-4 h-4" />
              Actualiser
            </button>
            
            <button 
              onClick={handleLogout} 
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-all shadow hover:shadow-lg"
            >
              <LogOut className="w-4 h-4" />
              Déconnexion
            </button>
          </div>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Link
            href="/admin/data/comments"
            className="flex items-center justify-center gap-2 px-6 py-3 border border-slate-200 bg-white hover:bg-slate-50 rounded-xl transition-all text-sm font-medium text-slate-700 shadow-sm"
          >
            <MessageSquare size={14} />
            Commentaires
          </Link>
          
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600">Total réservations</p>
                <p className="text-2xl font-bold text-slate-800">{reservations.length}</p>
              </div>
              <div className="p-2 bg-violet-50 rounded-lg">
                <Calendar className="w-5 h-5 text-violet-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600">À venir</p>
                <p className="text-2xl font-bold text-slate-800">
                  {reservations.filter(r => r.meetdate && new Date(r.meetdate) > new Date()).length}
                </p>
              </div>
              <div className="p-2 bg-emerald-50 rounded-lg">
                <Clock className="w-5 h-5 text-emerald-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600">En attente</p>
                <p className="text-2xl font-bold text-slate-800">
                  {reservations.filter(r => r.status === 'pending').length}
                </p>
              </div>
              <div className="p-2 bg-amber-50 rounded-lg">
                <AlertCircle className="w-5 h-5 text-amber-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Tableau des réservations - Version Desktop */}
        <div className="hidden lg:block bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">Client</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">Forfait</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">Date RDV</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">Statut</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">Images</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {reservations.map((reservation) => (
                  <tr key={reservation.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-gradient-to-r from-violet-100 to-fuchsia-100 rounded-full flex items-center justify-center">
                          <User className="h-5 w-5 text-violet-600" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-slate-900">{reservation.name}</div>
                          <div className="text-sm text-slate-500">{reservation.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-slate-900 font-medium">{reservation.optionname}</div>
                      <div className="text-sm text-slate-500">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {reservation.optionduration}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-3 h-3" />
                          {reservation.optionprice}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {reservation.meetdate ? (
                        <>
                          <div className="text-sm font-medium text-slate-900">
                            {new Date(reservation.meetdate).toLocaleDateString('fr-FR', {
                              weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'
                            })}
                          </div>
                          <div className="text-sm text-slate-500">
                            {new Date(reservation.meetdate).toLocaleTimeString('fr-FR', { 
                              hour: '2-digit', minute: '2-digit' 
                            })}
                          </div>
                        </>
                      ) : (
                        <span className="text-slate-400 text-sm">Non planifié</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(reservation.status)}`}>
                        {reservation.status || 'Non défini'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {reservation.ticketproof ? (
                        <a
                          href={reservation.ticketproof}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-violet-100 to-fuchsia-100 hover:from-violet-200 hover:to-fuchsia-200 text-violet-700 font-medium rounded-lg transition-all hover:shadow-md border border-violet-200"
                        >
                          Voir l'image
                        </a>
                      ) : (
                        <span className="text-slate-400 text-sm">Aucune image</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Version Mobile - Cards */}
        <div className="lg:hidden space-y-4 mb-8">
          {reservations.map((reservation) => (
            <div key={reservation.id} className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="h-8 w-8 bg-gradient-to-r from-violet-100 to-fuchsia-100 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-violet-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 text-base truncate">{reservation.name}</h3>
                      <p className="text-slate-600 text-sm truncate flex items-center gap-1">
                        <Mail className="w-3 h-3" />
                        {reservation.email}
                      </p>
                    </div>
                  </div>
                </div>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ml-2 ${getStatusColor(reservation.status)}`}>
                  {reservation.status || 'Non défini'}
                </span>
              </div>

              <div className="mb-3 space-y-2">
                <div className="flex items-center gap-2 text-slate-700">
                  <Package className="w-4 h-4 text-violet-600" />
                  <span className="font-medium">{reservation.optionname}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-1 text-sm text-slate-600">
                    <Clock className="w-3 h-3" />
                    <span>{reservation.optionduration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-slate-600">
                    <DollarSign className="w-3 h-3" />
                    <span>{reservation.optionprice}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-2 bg-slate-50 rounded-lg mb-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-slate-600" />
                  {reservation.meetdate ? (
                    <div className="text-sm">
                      <div className="font-medium text-slate-900">
                        {new Date(reservation.meetdate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
                      </div>
                      <div className="text-slate-600">
                        {new Date(reservation.meetdate).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                  ) : (
                    <span className="text-slate-400 text-sm">Non planifié</span>
                  )}
                </div>
                {reservation.ticketproof && (
                  <a
                    href={reservation.ticketproof}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-violet-100 to-fuchsia-100 text-violet-700 font-medium rounded-lg text-xs border border-violet-200"
                  >
                    Voir l'image
                  </a>
                )}
              </div>

              {reservation.message && (
                <div className="mt-2 p-2 bg-blue-50 rounded-lg border border-blue-100">
                  <p className="text-xs text-slate-700 line-clamp-2">{reservation.message}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Message si aucune réservation */}
        {reservations.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-slate-200 shadow-sm">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4">
              <Calendar className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-700 mb-2">Aucune réservation</h3>
            <p className="text-slate-600 mb-6 max-w-md mx-auto">
              Les nouvelles réservations apparaîtront automatiquement ici.
            </p>
            <button
              onClick={fetchReservations}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-medium rounded-lg hover:from-violet-600 hover:to-fuchsia-600 transition-all"
            >
              <RefreshCw className="w-4 h-4" />
              Actualiser
            </button>
          </div>
        )}
      </div>
    </div>
  );
}