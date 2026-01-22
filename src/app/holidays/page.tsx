'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{destination}</p>
        <Link href={`/holidays/${id}`} className="inline-block text-secondary hover:text-primary font-semibold transition-colors">Learn More &rarr;</Link>
      </div>
    </div>
  );

interface Holiday {
    id: number;
    title: string;
    destination: string;
    imageUrl: string;
    category: string;
}

export default function HolidaysPage() {
  const [holidays, setHolidays] = useState<Holiday[]>([]);
  const [filteredHolidays, setFilteredHolidays] = useState<Holiday[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        const res = await fetch('/api/trips/all');
        const data = await res.json();
        setHolidays(data);
        setFilteredHolidays(data);
      } catch (error) {
        console.error('Failed to fetch holidays:', error);
      }
    };

    fetchHolidays();
  }, []);

  useEffect(() => {
    let filtered = holidays;

    if (searchTerm) {
      filtered = filtered.filter(holiday => 
        holiday.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        holiday.destination.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (category !== 'all') {
      filtered = filtered.filter(holiday => holiday.category === category);
    }

    setFilteredHolidays(filtered);
  }, [searchTerm, category, holidays]);

  return (
    <div className="animate-fadeIn bg-white">
      {/* Hero Section */}
      <section className="bg-gray-100 text-gray-800 text-center py-20 md:py-32">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-primary">
            Explore Our Holidays
          </h1>
          <p className="text-xl md:text-2xl mt-6 max-w-3xl mx-auto text-gray-600">
            Find your next unforgettable journey from our collection of curated holiday packages.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 md:items-center">
            <div className="flex-grow">
              <input 
                type="text" 
                placeholder="Search by destination or title..." 
                className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary bg-gray-100 text-gray-900"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="font-semibold text-gray-700">Filter by:</label>
              <select 
                className="px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary bg-gray-100 text-gray-900"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="all">All</option>
                <option value="domestic">Domestic</option>
                <option value="international">International</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Holidays Grid Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6">
          {filteredHolidays.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {filteredHolidays.map(holiday => (
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
            <div className="text-center">
              <h2 className="text-2xl font-bold text-primary">No holidays found</h2>
              <p className="text-gray-600 mt-2">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}