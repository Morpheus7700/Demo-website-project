
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
        <Link href="/" className="text-2xl font-extrabold text-secondary hover:text-primary transition-colors uppercase tracking-wider">
          EscapadeOnWheels
        </Link>
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="text-foreground hover:text-primary font-semibold transition-colors">Home</Link>
          <Link href="/holidays/domestic" className="text-foreground hover:text-primary font-semibold transition-colors">Domestic</Link>
          <Link href="/holidays/international" className="text-foreground hover:text-primary font-semibold transition-colors">International</Link>
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
                  <Link href="/contact" className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded-lg transition-colors">
                    Enquire Now
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
