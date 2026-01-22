"use client";

import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
}

interface Holiday {
    id: number;
    title: string;
    destination: string;
}

export default function AdminDashboardPage() {
  const { user, loading } = useAuth();
  const [users, setUsers] = useState<User[]>([]);
  const [holidays, setHolidays] = useState<Holiday[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!user || user.role !== 'ADMIN') return;

      try {
        const [usersRes, holidaysRes] = await Promise.all([
          fetch('/api/admin/users'),
          fetch('/api/trips/all'),
        ]);

        if (usersRes.ok) {
          const usersData = await usersRes.json();
          setUsers(usersData);
        }

        if (holidaysRes.ok) {
          const holidaysData = await holidaysRes.json();
          setHolidays(holidaysData);
        }
      } catch (error) {
        console.error('Failed to fetch admin data:', error);
      }
    };

    fetchData();
  }, [user]);

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  if (!user || user.role !== 'ADMIN') {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Access Denied</h1>
        <p className="mt-2">You do not have permission to view this page.</p>
        <Link href="/" className="text-primary hover:underline mt-4 inline-block">Go to Homepage</Link>
      </div>
    );
  }

  return (
    <div className="animate-fadeIn bg-gray-100 min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* User Management */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">User Management</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-3 px-4 border-b text-left">Name</th>
                    <th className="py-3 px-4 border-b text-left">Email</th>
                    <th className="py-3 px-4 border-b text-left">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(u => (
                    <tr key={u.id} className="hover:bg-gray-50">
                      <td className="py-3 px-4 border-b">{u.name}</td>
                      <td className="py-3 px-4 border-b">{u.email}</td>
                      <td className="py-3 px-4 border-b">{u.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Holiday Management */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Holiday Management</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-3 px-4 border-b text-left">Title</th>
                    <th className="py-3 px-4 border-b text-left">Destination</th>
                    <th className="py-3 px-4 border-b text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {holidays.map(h => (
                    <tr key={h.id} className="hover:bg-gray-50">
                      <td className="py-3 px-4 border-b">{h.title}</td>
                      <td className="py-3 px-4 border-b">{h.destination}</td>
                      <td className="py-3 px-4 border-b">
                        <Link href={`/holidays/${h.id}`} className="text-secondary hover:underline">View</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}