'use client';

import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
  {
    id: 1,
    title: '10 Best Beaches in the World',
    date: 'October 26, 2025',
    excerpt: 'Discover the most beautiful beaches in the world, from the white sands of the Maldives to the rugged coastlines of Iceland.',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723a996f3ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    title: 'A Foodie\'s Guide to Italy',
    date: 'October 22, 2025',
    excerpt: 'From pasta and pizza to gelato and espresso, here\'s our guide to the best food in Italy.',
    imageUrl: 'https://images.unsplash.com/photo-1533933639593-5c4041343289?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    title: 'The Ultimate Guide to Visiting Japan',
    date: 'October 18, 2025',
    excerpt: 'Everything you need to know before you go, from what to pack to how to get around.',
    imageUrl: 'https://images.unsplash.com/photo-1526481280643-3b94b2a758f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const BlogPostCard = ({ id, title, date, excerpt, imageUrl }: { id: number, title: string, date: string, excerpt: string, imageUrl: string }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="relative h-64">
      <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
    </div>
    <div className="p-6">
      <p className="text-gray-500 text-sm">{date}</p>
      <h3 className="text-2xl font-bold text-gray-900 mt-2">{title}</h3>
      <p className="text-gray-600 mt-4">{excerpt}</p>
      <Link href={`/blog/${id}`} className="inline-block mt-6 text-primary hover:text-secondary font-semibold">Read More &rarr;</Link>
    </div>
  </div>
);

export default function BlogPage() {
  return (
    <div className="animate-fadeIn bg-white">
      <section className="bg-gray-100 text-gray-800 text-center py-20 md:py-32">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-primary">
            Travel Blog
          </h1>
          <p className="text-xl md:text-2xl mt-6 max-w-3xl mx-auto text-gray-600">
            Inspiration for your next adventure.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogPosts.map(post => (
              <BlogPostCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
