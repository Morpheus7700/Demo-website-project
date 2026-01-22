'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => (
  <section className="relative h-[600px] flex items-center justify-center text-white text-center">
    <Image
      src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Tropical beach"
      layout="fill"
      objectFit="cover"
      className="absolute z-0"
    />
    <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
    <div className="relative z-20 container mx-auto px-6">
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter">
        Your Story, Your Adventure
      </h1>
      <p className="text-xl md:text-2xl mt-6 max-w-3xl mx-auto font-light">
        Find the perfect holiday package tailored for you.
      </p>
      <div className="mt-8 bg-white p-6 rounded-lg shadow-2xl max-w-4xl mx-auto">
        <SearchForm />
      </div>
    </div>
  </section>
);

const SearchForm = () => {
  const [activeTab, setActiveTab] = useState('holidays');

  return (
    <div>
      <div className="flex border-b mb-4">
        <button onClick={() => setActiveTab('holidays')} className={`py-2 px-4 ${activeTab === 'holidays' ? 'border-b-2 border-primary text-primary' : 'text-gray-600'}`}>Holidays</button>
        <button onClick={() => setActiveTab('flights')} className={`py-2 px-4 ${activeTab === 'flights' ? 'border-b-2 border-primary text-primary' : 'text-gray-600'}`}>Flights</button>
        <button onClick={() => setActiveTab('hotels')} className={`py-2 px-4 ${activeTab === 'hotels' ? 'border-b-2 border-primary text-primary' : 'text-gray-600'}`}>Hotels</button>
      </div>
      <form className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <div className="md:col-span-2">
          <label className="block text-left text-gray-700">Destination</label>
          <input type="text" placeholder="e.g., Paris, Maldives" className="w-full p-3 border rounded-lg text-gray-900" />
        </div>
        <div>
          <label className="block text-left text-gray-700">Departure Date</label>
          <input type="date" className="w-full p-3 border rounded-lg text-gray-900" />
        </div>
        <button type="submit" className="bg-primary text-background font-bold p-3 rounded-lg w-full hover:bg-secondary transition-colors">Search</button>
      </form>
    </div>
  );
};

const FeaturedHoliday = ({ title, destination, imageUrl, price }: { title: string, destination: string, imageUrl: string, price: number }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
    <div className="relative h-64">
      <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      <p className="text-gray-600 mt-2">{destination}</p>
      <div className="mt-4 flex justify-between items-center">
        <p className="text-xl font-bold text-primary">${price}</p>
        <Link href="/tours" className="text-secondary hover:text-primary font-semibold">View Deal &rarr;</Link>
      </div>
    </div>
  </div>
);

const PopularDestination = ({ name, imageUrl }: { name: string, imageUrl: string }) => (
  <div className="relative rounded-lg overflow-hidden shadow-lg h-80">
    <Image src={imageUrl} alt={name} layout="fill" objectFit="cover" />
    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
      <h3 className="text-white text-3xl font-bold">{name}</h3>
    </div>
  </div>
);

const WhyChooseUs = () => (
  <section className="py-20 md:py-24 bg-gray-100">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-12">Why Choose Escapade?</h2>
      <div className="grid md:grid-cols-3 gap-12">
        <div className="text-center">
          <div className="flex justify-center items-center h-16 w-16 bg-primary text-white rounded-full mx-auto mb-4">
            <Image src="/globe.svg" alt="Expertise" width={32} height={32} />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Expertise</h3>
          <p className="text-gray-600 mt-2">Decades of experience in crafting the perfect holiday.</p>
        </div>
        <div className="text-center">
          <div className="flex justify-center items-center h-16 w-16 bg-primary text-white rounded-full mx-auto mb-4">
            <Image src="/support.svg" alt="Support" width={32} height={32} />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">24/7 Support</h3>
          <p className="text-gray-600 mt-2">We are here for you anytime, anywhere.</p>
        </div>
        <div className="text-center">
          <div className="flex justify-center items-center h-16 w-16 bg-primary text-white rounded-full mx-auto mb-4">
            <Image src="/file.svg" alt="Value" width={32} height={32} />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Best Value</h3>
          <p className="text-gray-600 mt-2">Competitive prices without compromising on quality.</p>
        </div>
      </div>
    </div>
  </section>
);

export default function HomePage() {
  const featuredHolidays = [
    {
      title: 'Maldives Paradise',
      destination: 'Maldives',
      imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 1500,
    },
    {
      title: 'Santorini Sunset',
      destination: 'Greece',
      imageUrl: 'https://images.unsplash.com/photo-1582556510342-4bc8984a352c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 1200,
    },
    {
      title: 'Kyoto Cherry Blossoms',
      destination: 'Japan',
      imageUrl: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 2200,
    },
  ];

  const popularDestinations = [
    { name: 'Paris', imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760c0337?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Rome', imageUrl: 'https://images.unsplash.com/photo-1529260830199-42c24129f196?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Bali', imageUrl: 'https://images.unsplash.com/photo-1537996194471-e8564f663849?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];

  return (
    <div className="animate-fadeIn bg-background">
      <HeroSection />

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">Featured Holidays</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {featuredHolidays.map((holiday, index) => (
              <FeaturedHoliday key={index} {...holiday} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">Popular Destinations</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {popularDestinations.map((dest, index) => (
              <PopularDestination key={index} {...dest} />
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
    </div>
  );
}
