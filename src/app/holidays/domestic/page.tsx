
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Holiday {
    id: number;
    title: string;
    destination: string;
    imageUrl: string;
}

const HolidayCard = ({ holiday }: { holiday: Holiday }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="relative h-48">
            <Image src={holiday.imageUrl} alt={holiday.title} layout="fill" objectFit="cover" />
        </div>
        <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900">{holiday.title}</h3>
            <p className="text-gray-700 mt-2">{holiday.destination}</p>
            <Link href={`/holidays/${holiday.id}`} className="inline-block mt-4 text-secondary hover:text-primary font-semibold">Learn More &rarr;</Link>
        </div>
    </div>
);

const DomesticHolidaysPage = () => {
    const [holidays, setHolidays] = useState<Holiday[]>([]);

    useEffect(() => {
        const fetchHolidays = async () => {
            try {
                const res = await fetch('/api/trips/domestic');
                const data = await res.json();
                setHolidays(data);
            } catch (error) {
                console.error('Failed to fetch domestic holidays:', error);
            }
        };

        fetchHolidays();
    }, []);

    return (
        <div className="bg-white animate-fadeIn">
            <main className="container mx-auto px-6 py-16">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-primary">Domestic Holidays</h1>
                    <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
                        Explore the beauty and diversity of your own country with our curated domestic holidays.
                    </p>
                </div>

                <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {holidays.length > 0 ? (
                        holidays.map(holiday => (
                            <HolidayCard key={holiday.id} holiday={holiday} />
                        ))
                    ) : (
                        <p className="text-center md:col-span-3">No domestic holidays found.</p>
                    )}
                </div>
            </main>
        </div>
    );
};

export default DomesticHolidaysPage;
