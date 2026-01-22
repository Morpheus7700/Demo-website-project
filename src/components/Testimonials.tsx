"use client";

import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    quote: "The most incredible road trip of my life! Every detail was perfectly planned, and the scenery was breathtaking. I can't wait for my next adventure with Escapade.",
    name: "Alex Johnson",
    location: "San Francisco, CA",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote: "From the stunning coastal highways to the hidden mountain passes, every day was a new discovery. The team at Escapade are true experts in crafting unforgettable journeys.",
    name: "Maria Garcia",
    location: "Miami, FL",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote: "I've been on many guided tours, but this was something special. The freedom of the open road combined with the comfort of a well-planned itinerary is a winning combination.",
    name: "David Smith",
    location: "Chicago, IL",
    avatar: "https://randomuser.me/api/portraits/men/62.jpg",
  },
];

const TestimonialCard = ({ quote, name, location, avatar }: { quote: string, name: string, location: string, avatar: string }) => (
  <div className="bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
    <Image 
      src={avatar}
      alt={name}
      width={80}
      height={80}
      className="rounded-full mb-4"
    />
    <p className="text-foreground text-lg mb-6">&quot;{quote}&quot;</p>
    <div className="font-semibold text-primary">{name}</div>
    <div className="text-gray-500">{location}</div>
  </div>
);

const Testimonials = () => (
  <section className="py-20 md:py-32 bg-background">
    <div className="container mx-auto px-6">
      <h2 className="text-5xl font-bold text-center text-primary mb-16">What Our Adventurers Say</h2>
      <div className="grid md:grid-cols-3 gap-12">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;