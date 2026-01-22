'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
  {
    id: 1,
    title: '10 Best Beaches in the World',
    date: 'October 26, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723a996f3ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: `
      <p>The world is full of beautiful beaches, but some are just a cut above the rest. Here are 10 of the best beaches in the world, from the white sands of the Maldives to the rugged coastlines of Iceland.</p>
      <h2 class="text-2xl font-bold my-4">1. Anse Source d\'Argent, Seychelles</h2>
      <p>With its powdery white sand, crystal-clear water, and dramatic granite boulders, Anse Source d\'Argent is one of the most photographed beaches in the world.</p>
      <h2 class="text-2xl font-bold my-4">2. Whitehaven Beach, Australia</h2>
      <p>Located in the heart of the Great Barrier Reef, Whitehaven Beach is famous for its brilliant white silica sand, which is among the purest in the world.</p>
    `
  },
  {
    id: 2,
    title: 'A Foodie\'s Guide to Italy',
    date: 'October 22, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1533933639593-5c4041343289?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: `
        <p>Italy is a food lover\'s paradise. From pasta and pizza to gelato and espresso, here\'s our guide to the best food in Italy.</p>
        <h2 class="text-2xl font-bold my-4">1. Pizza in Naples</h2>
        <p>Naples is the birthplace of pizza, and there\'s no better place to try it than at one of the city\'s many pizzerias.</p>
        <h2 class="text-2xl font-bold my-4">2. Pasta in Rome</h2>
        <p>Rome is home to some of the best pasta in the world. Be sure to try the cacio e pepe, carbonara, and amatriciana.</p>
    `
  },
  {
    id: 3,
    title: 'The Ultimate Guide to Visiting Japan',
    date: 'October 18, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1526481280643-3b94b27a758f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: `
        <p>Japan is a country of contrasts, where ancient traditions meet futuristic technology. Here\'s everything you need to know before you go, from what to pack to how to get around.</p>
        <h2 class="text-2xl font-bold my-4">1. What to Pack</h2>
        <p>Japan is a country of four seasons, so what you pack will depend on when you go. In general, it\'s a good idea to pack layers, as the weather can be unpredictable.</p>
        <h2 class="text-2xl font-bold my-4">2. Getting Around</h2>
        <p>Japan has an excellent public transportation system, so it\'s easy to get around without a car. The Japan Rail Pass is a great value if you\'re planning on doing a lot of train travel.</p>
    `
  },
];

export default function BlogPostPage() {
  const params = useParams();
  const { id } = params;
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return <div className="text-center py-10">Blog post not found.</div>;
  }

  return (
    <div className="animate-fadeIn bg-white">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-96 mb-8">
            <Image src={post.imageUrl} alt={post.title} layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">{post.title}</h1>
          <p className="text-gray-500 mt-4">{post.date}</p>
          <div className="prose prose-lg max-w-none mt-8 text-gray-800" dangerouslySetInnerHTML={{ __html: post.content }}></div>
          <div className="mt-12">
            <Link href="/blog" className="inline-block bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
