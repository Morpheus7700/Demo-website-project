"use client";

import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';
import Image from 'next/image';

interface Holiday {
    id: number;
    title: string;
    destination: string;
    imageUrl: string;
}

const HolidayCard = ({ id, title, destination, imageUrl }: { id: number, title: string, destination: string, imageUrl: string }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
      <div className="relative h-56">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{destination}</p>
        <Link href={`/holidays/${id}`} className="inline-block text-secondary hover:text-primary font-semibold transition-colors">View Details &rarr;</Link>
      </div>
    </div>
  );

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const [bookedHolidays, setBookedHolidays] = useState<Holiday[]>([]);

  useEffect(() => {
    const fetchBookedHolidays = async () => {
      if (!user) return;
      try {
        const res = await fetch('/api/user/trips');
        if (res.ok) {
          const data = await res.json();
          setBookedHolidays(data);
        }
      } catch (error) {
        console.error('Failed to fetch booked holidays:', error);
      }
    };

    fetchBookedHolidays();
  }, [user]);

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  if (!user) {
    return (
      <div className="text-center py-20">
        <p>Please <Link href="/login" className="text-primary hover:underline">log in</Link> to view your dashboard.</p>
      </div>
    );
  }

  return (
    <div className="animate-fadeIn bg-gray-50">
      {/* Welcome Section */}
      <section className="bg-white py-12 shadow-sm">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900">Welcome, {user.name}!</h1>
          <p className="text-lg text-gray-600 mt-2">Here are your upcoming adventures.</p>
        </div>
      </section>

      {/* Booked Holidays Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Booked Holidays</h2>
          {bookedHolidays.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {bookedHolidays.map(holiday => (
                <HolidayCard 
                  key={holiday.id}
                  id={holiday.id}
                  title={holiday.title}
                  destination={holiday.destination}
                  imageUrl={holiday.imageUrl}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800">No holidays booked yet.</h3>
              <p className="text-gray-600 mt-2 mb-6">Ready for your next adventure?</p>
              <Link href="/holidays" className="inline-block bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                Explore Holidays
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}