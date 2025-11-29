'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import pb from '@/utils/pocketbase/pocketbase';

interface Reservation {
  id: string
  name: string
  email: string
  appointmentDate: string
  packageTitle: string
  packageDuration: string
  packagePrice: string
  paymentProof: string
  status: string
  created: string
}

export default function AdminPage() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Vérifier l'authentification
  useEffect(() => {
    if (!pb.authStore.isValid) {
      router.push('/admin/login');
      return;
    }
    fetchReservations();
  }, [router]);

const fetchReservations = async () => {
  try {
    const records = await pb
      .collection('reservations')
      .getFullList<Reservation>({
        sort: '-created',
      });

    setReservations(records);
  } catch (error) {
    console.error('Erreur PocketBase :', error);
  } finally {
    setLoading(false);
  }
};


  const handleLogout = () => {
    pb.authStore.clear();
    router.push('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading loading-spinner loading-lg"></div>
      </div>
    );
  }

  return (
<div className="min-h-screen p-4 bg-base-100">
  <div className="max-w-7xl mx-auto">
    {/* En-tête */}
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-base-content">Administration</h1>
        <p className="text-base-content/70 text-sm mt-1">
          Connecté en tant que: {pb.authStore.record?.email}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 w-full sm:w-auto">
        <button 
          onClick={fetchReservations} 
          className="btn btn-primary btn-sm sm:btn-md flex-1 sm:flex-none"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Actualiser
        </button>
        <button 
          onClick={handleLogout} 
          className="btn btn-error btn-sm sm:btn-md flex-1 sm:flex-none"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Déconnexion
        </button>
      </div>
    </div>

    {/* Tableau des réservations - Version Desktop */}
    <div className="hidden lg:block bg-base-200 rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-base-300">
          <thead className="bg-base-300">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-base-content/70 uppercase tracking-wider">
                Client
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-base-content/70 uppercase tracking-wider">
                Forfait
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-base-content/70 uppercase tracking-wider">
                Date RDV
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-base-content/70 uppercase tracking-wider">
                Preuve
              </th>
            </tr>
          </thead>
          <tbody className="bg-base-200 divide-y divide-base-300">
            {reservations.map((reservation) => (
              <tr key={reservation.id} className="hover:bg-base-300/50 transition-colors">
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-base-content">{reservation.name}</div>
                  <div className="text-sm text-base-content/70 truncate max-w-[200px]">{reservation.email}</div>
                </td>
                <td className="px-4 py-4">
                  <div className="text-sm font-medium text-base-content">{reservation.packageTitle}</div>
                  <div className="text-sm text-base-content/70">{reservation.packageDuration} - {reservation.packagePrice}</div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm text-base-content font-medium">
                    {new Date(reservation.appointmentDate).toLocaleDateString('fr-FR')}
                  </div>
                  <div className="text-xs text-base-content/70">
                    {new Date(reservation.appointmentDate).toLocaleTimeString('fr-FR', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  {reservation.paymentProof && (
                    <a
                      href={pb.files.getUrl(reservation, reservation.paymentProof)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-primary btn-sm"
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Voir
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    {/* Version Mobile - Cards */}
    <div className="lg:hidden space-y-4">
      {reservations.map((reservation) => (
        <div key={reservation.id} className="bg-base-200 rounded-lg shadow p-4 border border-base-300">
          {/* En-tête de la carte */}
          <div className="flex justify-between items-start mb-3">
            <div className="flex-1">
              <h3 className="font-semibold text-base-content text-lg truncate">
                {reservation.name}
              </h3>
              <p className="text-base-content/70 text-sm truncate">
                {reservation.email}
              </p>
            </div>
            {reservation.paymentProof && (
              <a
                href={pb.files.getUrl(reservation, reservation.paymentProof)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-primary btn-sm ml-2 flex-shrink-0"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </a>
            )}
          </div>

          {/* Détails du forfait */}
          <div className="mb-3">
            <div className="flex items-center gap-2 mb-1">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="font-medium text-base-content">{reservation.packageTitle}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-base-content/70">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{reservation.packageDuration}</span>
              <span className="mx-1">•</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
              <span>{reservation.packagePrice}</span>
            </div>
          </div>

          {/* Date du rendez-vous */}
          <div className="flex items-center gap-2 p-2 bg-base-300 rounded">
            <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <div className="text-sm">
              <div className="font-medium text-base-content">
                {new Date(reservation.appointmentDate).toLocaleDateString('fr-FR', {
                  weekday: 'short',
                  day: 'numeric',
                  month: 'short'
                })}
              </div>
              <div className="text-base-content/70">
                {new Date(reservation.appointmentDate).toLocaleTimeString('fr-FR', {
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Message si aucune réservation */}
    {reservations.length === 0 && (
      <div className="text-center py-12">
        <div className="text-base-content/50">
          <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <p className="text-lg font-medium">Aucune réservation</p>
          <p className="text-sm mt-1">Les nouvelles réservations apparaîtront ici</p>
        </div>
      </div>
    )}
  </div>
</div>
  );
}