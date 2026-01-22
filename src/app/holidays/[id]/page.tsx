
"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

interface Holiday {
    id: number;
    title: string;
    destination: string;
    description: string;
    price: number;
    imageUrl: string;
}

const HolidayDetailPage = () => {
    const [holiday, setHoliday] = useState<Holiday | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const params = useParams();
    const { id } = params;

    useEffect(() => {
        if (id) {
            const fetchHoliday = async () => {
                try {
                    const res = await fetch(`/api/trips/${id}`);
                    if (res.ok) {
                        const data = await res.json();
                        setHoliday(data);
                    } else {
                        setError('Holiday not found');
                    }
                } catch (err) {
                    setError('Failed to fetch holiday data.');
                } finally {
                    setLoading(false);
                }
            };

            fetchHoliday();
        }
    }, [id]);

    if (loading) {
        return <div className="text-center py-10">Loading...</div>;
    }

    if (error) {
        return <div className="text-center py-10 text-red-500">{error}</div>;
    }

    if (!holiday) {
        return <div className="text-center py-10">Holiday not found.</div>;
    }

    return (
        <div className="bg-white animate-fadeIn">
            <div className="container mx-auto px-6 py-16">
                <div className="bg-gray-100 rounded-xl shadow-lg overflow-hidden">
                    <div className="relative h-96">
                        <Image src={holiday.imageUrl} alt={holiday.title} layout="fill" objectFit="cover" />
                    </div>
                    <div className="p-8 md:p-12">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">{holiday.title}</h1>
                        <p className="text-lg md:text-xl text-gray-700 mt-4">{holiday.destination}</p>
                        <p className="text-2xl font-bold text-primary mt-6">${holiday.price}</p>
                        <div className="prose prose-lg max-w-none mt-8 text-gray-800">
                            <p>{holiday.description}</p>
                        </div>
                        <div className="mt-10">
                            <Link href="/holidays" className="inline-block bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                                Back to Holidays
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HolidayDetailPage;
