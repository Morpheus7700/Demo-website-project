
import { useEffect, useState } from 'react';

interface User {
  userId: string;
  role: 'ADMIN' | 'USER';
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch('/api/user/me');
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error('Failed to fetch user', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  const logout = async () => {
    // Calling an API to explicitly clear the httpOnly cookie is more robust.
    await fetch('/api/auth/logout');
    setUser(null);
    window.location.href = '/login';
  };


  return { user, loading, logout };
}
