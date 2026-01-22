
import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading, logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
            Innovate Inc.
          </Link>
          <div className="space-x-6 flex items-center">
            {!loading && (
              <>
                {user ? (
                  <>
                    {user.role === 'ADMIN' && (
                       <Link href="/admin/dashboard" className="text-gray-600 hover:text-blue-600 font-semibold">Admin</Link>
                    )}
                    <Link href="/dashboard" className="text-gray-600 hover:text-blue-600">Dashboard</Link>
                    <button onClick={logout} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/login" className="text-gray-600 hover:text-blue-600">Login</Link>
                    <Link href="/signup" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                      Sign Up
                    </Link>
                  </>
                )}
              </>
            )}
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-8 text-center">
          <p>&copy; {new Date().getFullYear()} Innovate Inc. All rights reserved.</p>
          <p className="text-sm text-gray-400 mt-2">Revolutionizing the future, one innovation at a time.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
