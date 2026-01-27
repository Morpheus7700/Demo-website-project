'use client';

import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => (
  <section className="relative h-[700px] flex items-center justify-center text-white text-center">
    <Image
      src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2068&auto=format&fit=crop"
      alt="Escapade on Wheels Adventure"
      layout="fill"
      objectFit="cover"
      className="absolute z-0"
      priority
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent z-10"></div>
    <div className="relative z-20 container mx-auto px-6">
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
        Discover the World with <br />
        <span className="text-primary">Escapade On Wheels</span>
      </h1>
      <p className="text-xl md:text-3xl mt-6 max-w-4xl mx-auto font-light drop-shadow-md">
        Your designated travel partner for domestic & international tours.
      </p>
      <div className="mt-10">
        <Link href="/contact" className="bg-primary hover:bg-orange-600 text-white text-lg font-bold py-4 px-10 rounded-full transition-transform hover:scale-105 shadow-xl">
          Start Your Journey
        </Link>
      </div>
    </div>
  </section>
);

const FeaturedHoliday = ({ title, destination, imageUrl, link }: { title: string, destination: string, imageUrl: string, link: string }) => (
  <div className="bg-white rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
    <div className="relative h-64 overflow-hidden">
      <Image
        src={imageUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute top-4 right-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
        Featured
      </div>
    </div>
    <div className="p-6">
      <p className="text-sm text-primary font-bold uppercase tracking-wider mb-2">{destination}</p>
      <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 min-h-[3.5rem]">{title}</h3>
      <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
        <Link href={link} className="text-secondary hover:text-primary font-bold flex items-center group-hover:underline">
          View Details
          <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </Link>
      </div>
    </div>
  </div>
);

const WhyChooseUs = () => (
  <section className="py-20 md:py-24 bg-gray-50">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Escapade On Wheels?</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-16">We don&apos;t just plan trips; we craft experiences that last a lifetime.</p>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex justify-center items-center h-20 w-20 bg-primary/10 text-primary rounded-full mx-auto mb-6">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Unique Destinations</h3>
          <p className="text-gray-600">We uncover hidden gems and offbeat locations to make your travel truly unique.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex justify-center items-center h-20 w-20 bg-primary/10 text-primary rounded-full mx-auto mb-6">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Best Value</h3>
          <p className="text-gray-600">Premium experiences at competitive prices, ensuring you get the most out of your budget.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex justify-center items-center h-20 w-20 bg-primary/10 text-primary rounded-full mx-auto mb-6">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">24/7 Support</h3>
          <p className="text-gray-600">Our backup team is always available to assist you, ensuring a hassle-free journey.</p>
        </div>
      </div>
    </div>
  </section>
);

export default function HomePage() {
  const domesticHolidays = [
    {
      title: 'Magical Sikkim',
      destination: 'Domestic',
      imageUrl: 'https://escapadeonwheels.com/wp-content/uploads/2024/07/Ladakh-Featured.webp',
      link: '/holidays/domestic/sikkim',
    },
    {
      title: 'The Mystical Land of Ladakh',
      destination: 'Domestic',
      imageUrl: 'https://escapadeonwheels.com/wp-content/uploads/2017/11/Featured-720X560-1.jpg',
      link: '/holidays/domestic/ladakh',
    },
    {
      title: 'Alluring Andamans',
      destination: 'Domestic',
      imageUrl: 'https://images.unsplash.com/photo-1550951298-5c7b95a66b90?q=80&w=2000&auto=format&fit=crop', // Fallback as scraper didn't clear image for Andamans
      link: '/holidays/domestic/andaman',
    },
  ];

  const internationalHolidays = [
    {
      title: 'Arctic Adventure with Northern Lights',
      destination: 'International',
      imageUrl: 'https://escapadeonwheels.com/wp-content/uploads/2025/03/Featured-720x560-aa.webp',
      link: '/holidays/international/arctic',
    },
    {
      title: 'Balkan Treasure Trove',
      destination: 'International',
      imageUrl: 'https://escapadeonwheels.com/wp-content/uploads/2025/02/Featured-720X560.webp',
      link: '/holidays/international/balkans',
    },
    {
      title: 'Best Kenya Adventure',
      destination: 'International',
      imageUrl: 'https://escapadeonwheels.com/wp-content/uploads/2025/02/Featured-720X560.webp', // Reusing valid image or finding better match
      link: '/holidays/international/kenya',
    },
  ];

  return (
    <div className="animate-fadeIn bg-background">
      <HeroSection />

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-secondary mb-2">Domestic Tours</h2>
              <div className="h-1 w-20 bg-primary rounded"></div>
            </div>
            <Link href="/holidays/domestic" className="text-primary font-bold hover:text-secondary transition-colors">View All &rarr;</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {domesticHolidays.map((holiday, index) => (
              <FeaturedHoliday key={index} {...holiday} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-secondary mb-2">International Tours</h2>
              <div className="h-1 w-20 bg-primary rounded"></div>
            </div>
            <Link href="/holidays/international" className="text-primary font-bold hover:text-secondary transition-colors">View All &rarr;</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {internationalHolidays.map((holiday, index) => (
              <FeaturedHoliday key={index} {...holiday} />
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
    </div>
  );
}
