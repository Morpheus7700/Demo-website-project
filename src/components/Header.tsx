
"use client";

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { usePathname } from 'next/navigation';

const Header = () => {
  const { user, loading, logout } = useAuth();
  const pathname = usePathname();

  if (pathname === '/login' || pathname === '/signup') {
    return null;
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold text-primary hover:text-secondary transition-colors">
          Thomas Cook
        </Link>
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/holidays" className="text-foreground hover:text-primary font-semibold transition-colors">Holidays</Link>
          <Link href="/about" className="text-foreground hover:text-primary font-semibold transition-colors">About</Link>
          <Link href="/contact" className="text-foreground hover:text-primary font-semibold transition-colors">Contact</Link>
        </div>
        <div className="space-x-4 flex items-center">
          {loading ? (
            <div className="h-8 w-36 bg-gray-200 rounded animate-pulse"></div>
          ) : (
            <>
              {user ? (
                <>
                  {user.role === 'ADMIN' && (
                     <Link href="/admin/dashboard" className="text-foreground hover:text-primary font-semibold">Admin</Link>
                  )}
                  <Link href="/dashboard" className="text-foreground hover:text-primary">My Account</Link>
                  <button onClick={logout} className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded-lg transition-colors">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" className="text-foreground hover:text-primary">Login</Link>
                  <Link href="/holidays" className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded-lg transition-colors">
                    Book a Trip
                  </Link>
                </>
              )}
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
