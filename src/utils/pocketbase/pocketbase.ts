import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);

// Restaurer l'authentification au chargement
if (typeof window !== 'undefined') {
  const savedToken = localStorage.getItem('pocketbase_token');
  const savedUser = localStorage.getItem('pocketbase_user');
  
  if (savedToken) {
    pb.authStore.save(savedToken, savedUser ? JSON.parse(savedUser) : null);
  }
}

// Écouter les changements d'authentification
pb.authStore.onChange((token, model) => {
  if (typeof window !== 'undefined') {
    if (token) {
      localStorage.setItem('pocketbase_token', token);
      localStorage.setItem('pocketbase_user', JSON.stringify(model));
    } else {
      localStorage.removeItem('pocketbase_token');
      localStorage.removeItem('pocketbase_user');
    }
  }
}, true);

export default pb;