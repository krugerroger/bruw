import { useEffect, ComponentType, FC } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

export function withAuth<P extends object>(Component: ComponentType<P>): FC<P> {
  const AuthenticatedComponent: FC<P> = (props) => {
    const { isAuthenticated, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && !isAuthenticated()) {
        router.push('/admin/login');
      }
    }, [loading, isAuthenticated, router]);

    if (loading) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="loading loading-spinner loading-lg text-primary"></div>
            <p className="mt-4 text-lg">Vérification des permissions...</p>
          </div>
        </div>
      );
    }

    if (!isAuthenticated()) {
      return null; // La redirection s'occupe du reste
    }

    return <Component {...props} />;
  };

  return AuthenticatedComponent;
}
