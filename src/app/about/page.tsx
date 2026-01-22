'use client';

import Link from 'next/link';
import Image from 'next/image';

const CTAButton = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link 
    href={href} 
    className="inline-block bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
  >
    {children}
  </Link>
);

const TeamMemberCard = ({ name, role, imageUrl }: { name: string, role: string, imageUrl: string }) => (
  <div className="text-center">
    <div className="relative w-48 h-48 mx-auto mb-4">
      <Image 
        src={imageUrl} 
        alt={name} 
        layout="fill" 
        objectFit="cover" 
        className="rounded-full"
      />
    </div>
    <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
    <p className="text-gray-600">{role}</p>
  </div>
);

export default function AboutPage() {
  return (
    <div className="animate-fadeIn bg-white">
      {/* Hero Section */}
      <section className="bg-gray-100 text-gray-800 text-center py-20 md:py-32">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-primary">
            About Thomas Cook
          </h1>
          <p className="text-xl md:text-2xl mt-6 max-w-3xl mx-auto text-gray-600">
            A trusted name in travel for over 180 years, we continue to create unforgettable holiday experiences.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our mission is to be the most loved holiday company. We are committed to providing our customers with the best holiday experiences, offering a wide range of destinations and holiday types, all backed by our expert knowledge and exceptional customer service.
          </p>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 md:py-24 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <TeamMemberCard 
              name="John Doe"
              role="Founder & CEO"
              imageUrl="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <TeamMemberCard 
              name="Jane Smith"
              role="Head of Operations"
              imageUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <TeamMemberCard 
              name="Peter Jones"
              role="Lead Travel Expert"
              imageUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-primary text-white text-center py-20 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold">Ready for an Adventure?</h2>
          <p className="text-xl mt-4 mb-10">Let&apos;s plan your next unforgettable journey together.</p>
          <CTAButton href="/contact">Get in Touch</CTAButton>
        </div>
      </section>
    </div>
  );
}