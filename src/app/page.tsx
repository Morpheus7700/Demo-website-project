'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, TrendingUp, Users, Zap, Shield, Globe } from 'lucide-react';

import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function PitchDeck() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Visionary
          </div>
          <a href="#contact" className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-200 transition-colors">
            Contact Us
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center relative px-6 pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px]" />
          <div className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] bg-purple-600/20 rounded-full blur-[120px]" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          <div className="inline-block px-3 py-1 mb-6 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm text-sm text-gray-300">
            The Future of Digital Interaction
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
            Reimagining <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Connectivity.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            We bridge the gap between human intuition and artificial intelligence, creating seamless digital experiences for the next generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold text-lg transition-all flex items-center justify-center gap-2">
                View Demo <ArrowRight size={20} />
              </button>
            </Link>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold text-lg transition-all backdrop-blur-sm border border-white/10">
              Download Deck
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* The Problem */}
      <section className="py-24 px-6 relative bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">The Disconnect</h2>
            <p className="text-xl text-gray-400 max-w-2xl">
              Despite hyper-connectivity, digital interactions remain fragmented, impersonal, and inefficient.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Fragmented Tools", desc: "Users toggle between 10+ apps daily, losing focus and context." },
              { title: "Data Silos", desc: "Critical information is locked in proprietary ecosystems, hindering collaboration." },
              { title: "Cognitive Overload", desc: "Information density is increasing, while our ability to process it stagnates." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors"
              >
                <div className="h-2 w-12 bg-red-500 mb-6 rounded-full" />
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-24 px-6 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div {...fadeInUp} className="mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Unified Intelligence</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A single, adaptive platform that unifies your digital workspace using context-aware AI.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 to-black border border-white/10 p-1"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-50 mix-blend-overlay" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 bg-black/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8 shadow-2xl">
                  <div className="flex gap-4 mb-8">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-white/10 rounded w-3/4" />
                    <div className="h-4 bg-white/10 rounded w-1/2" />
                    <div className="h-4 bg-white/10 rounded w-full" />
                    <div className="h-20 bg-blue-500/10 rounded border border-blue-500/20 mt-8" />
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="space-y-12">
              {[
                { icon: <Zap className="text-yellow-400" />, title: "Instant Context", desc: "AI that understands what you're working on and surfaces relevant tools instantly." },
                { icon: <Shield className="text-blue-400" />, title: "Enterprise Security", desc: "Bank-grade encryption with zero-knowledge architecture for total privacy." },
                { icon: <Globe className="text-purple-400" />, title: "Global Sync", desc: "Real-time collaboration across time zones with latency under 50ms." }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className="flex gap-6"
                >
                  <div className="p-4 rounded-xl bg-white/5 h-fit border border-white/10">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Total Addressable Market", value: "$45B" },
              { label: "Growth Rate (YoY)", value: "125%" },
              { label: "Active Beta Users", value: "12k+" },
              { label: "Enterprise Partners", value: "85" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Traction / Team */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Growth</h2>
              <p className="text-xl text-gray-400">Quarter over quarter performance.</p>
            </div>
            <div className="flex gap-2">
               <span className="w-3 h-3 rounded-full bg-blue-500"></span>
               <span className="text-sm text-gray-400">Revenue</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[400px] w-full bg-white/5 rounded-3xl border border-white/10 p-8 flex items-end justify-between gap-4"
          >
            {/* Simple Bar Chart Visualization */}
            {[30, 45, 60, 50, 75, 90, 100].map((height, i) => (
              <div key={i} className="w-full bg-blue-600/20 rounded-t-lg relative group overflow-hidden">
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className="absolute bottom-0 w-full bg-blue-600 group-hover:bg-blue-500 transition-colors"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-32 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-gradient-to-b from-blue-900/50 to-black rounded-3xl border border-blue-500/30 p-12 md:p-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Join the Revolution</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            We are currently raising our Series A round. Let's build the future of work together.
          </p>
          <form className="max-w-md mx-auto flex flex-col gap-4">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full px-6 py-4 bg-black/50 border border-white/10 rounded-full focus:outline-none focus:border-blue-500 text-white placeholder:text-gray-500 transition-colors"
            />
            <button className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-lg transition-all shadow-lg shadow-blue-900/50">
              Request Access
            </button>
          </form>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 text-center text-gray-500 text-sm">
        <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">AngelList</a>
        </div>
        <p>&copy; 2026 Visionary Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}