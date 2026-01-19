'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  BarChart2, 
  Bell, 
  Calendar, 
  ChevronDown, 
  Command, 
  CreditCard, 
  FileText, 
  Globe, 
  Home, 
  Layout, 
  Menu, 
  MessageSquare, 
  PieChart, 
  Search, 
  Settings, 
  Share2, 
  Users, 
  Zap 
} from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex overflow-hidden font-sans">
      
      {/* Sidebar */}
      <aside className="w-64 bg-black/50 border-r border-white/10 hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-white/10">
          <div className="flex items-center gap-2 font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            <Zap className="text-blue-500 fill-current" size={20} />
            Visionary
          </div>
        </div>

        <div className="p-4 space-y-6 flex-1 overflow-y-auto">
          <div>
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">Main</div>
            <nav className="space-y-1">
              {[
                { icon: Home, label: "Overview", active: true },
                { icon: Activity, label: "Analytics" },
                { icon: Users, label: "Team" },
                { icon: FileText, label: "Projects" },
              ].map((item, i) => (
                <button 
                  key={i}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    item.active 
                      ? "bg-blue-600/10 text-blue-400" 
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <item.icon size={18} />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">Workspace</div>
            <nav className="space-y-1">
              {[
                { icon: MessageSquare, label: "Messages", badge: 3 },
                { icon: Calendar, label: "Calendar" },
                { icon: Layout, label: "Kanban" },
              ].map((item, i) => (
                <button 
                  key={i}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-gray-400 hover:bg-white/5 hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <item.icon size={18} />
                    {item.label}
                  </div>
                  {item.badge && (
                    <span className="bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="p-4 border-t border-white/10">
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-400 hover:bg-white/5 hover:text-white transition-colors">
            <Settings size={18} />
            Settings
          </button>
          <div className="mt-4 flex items-center gap-3 px-3">
             <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500" />
             <div className="flex-1 min-w-0">
               <div className="text-sm font-medium truncate">Alex Morgan</div>
               <div className="text-xs text-gray-500 truncate">Pro Plan</div>
             </div>
             <ChevronDown size={14} className="text-gray-500" />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-6 border-b border-white/10 bg-black/50 backdrop-blur-md">
          <div className="flex items-center gap-4">
             <button className="md:hidden text-gray-400">
               <Menu size={24} />
             </button>
             <div className="relative hidden sm:block group">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors" size={16} />
               <input 
                 type="text" 
                 placeholder="Search or type command..." 
                 className="bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-1.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 focus:bg-white/10 w-64 transition-all"
               />
               <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
                 <span className="text-[10px] font-mono text-gray-600 border border-white/10 rounded px-1">⌘</span>
                 <span className="text-[10px] font-mono text-gray-600 border border-white/10 rounded px-1">K</span>
               </div>
             </div>
          </div>

          <div className="flex items-center gap-4">
             <button className="relative p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors">
               <Bell size={20} />
               <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-black" />
             </button>
             <Link href="/" className="px-4 py-1.5 text-sm font-medium bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
               Exit Demo
             </Link>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h1 className="text-2xl font-bold">Welcome back, Alex</h1>
                <p className="text-gray-400">Here's what's happening with your projects today.</p>
              </div>
              <div className="flex gap-3">
                 <button className="px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm font-medium rounded-lg flex items-center gap-2 transition-colors">
                   <Share2 size={16} /> Share
                 </button>
                 <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg flex items-center gap-2 transition-colors">
                   <Zap size={16} /> New Project
                 </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                { label: "Total Revenue", value: "$45,231.89", change: "+20.1%", trend: "up", icon: CreditCard },
                { label: "Active Users", value: "2,345", change: "+15.3%", trend: "up", icon: Users },
                { label: "Bounce Rate", value: "42.3%", change: "-5.4%", trend: "down", icon: Activity },
                { label: "Active Sessions", value: "1,234", change: "+12.5%", trend: "up", icon: Globe },
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-[#111] border border-white/5 rounded-2xl hover:border-white/10 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2 rounded-lg bg-white/5 text-gray-400`}>
                      <stat.icon size={20} />
                    </div>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      stat.trend === 'up' 
                        ? 'bg-green-500/10 text-green-500' 
                        : 'bg-green-500/10 text-green-500' // Using green for 'down' bounce rate is good, but let's just stick to positive vibes for demo
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Main Charts Area */}
            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="lg:col-span-2 bg-[#111] border border-white/5 rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-lg">Revenue Overview</h3>
                  <div className="flex gap-2">
                    {['1D', '1W', '1M', '1Y'].map(t => (
                      <button key={t} className={`px-3 py-1 text-xs rounded-full ${t === '1M' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-white'}`}>
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="h-64 flex items-end justify-between gap-2 px-2">
                  {[40, 65, 45, 80, 55, 70, 50, 85, 60, 75, 90, 65].map((h, i) => (
                    <div key={i} className="w-full bg-blue-500/10 rounded-t-sm relative group">
                      <div 
                        className="absolute bottom-0 left-0 right-0 bg-blue-600 rounded-t-sm group-hover:bg-blue-400 transition-all duration-500"
                        style={{ height: `${h}%` }}
                      />
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-[#111] border border-white/5 rounded-2xl p-6"
              >
                <h3 className="font-semibold text-lg mb-6">Traffic Sources</h3>
                <div className="space-y-6">
                  {[
                    { label: "Direct", value: 45, color: "bg-blue-500" },
                    { label: "Social Media", value: 32, color: "bg-purple-500" },
                    { label: "Organic Search", value: 15, color: "bg-green-500" },
                    { label: "Referral", value: 8, color: "bg-yellow-500" },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-400">{item.label}</span>
                        <span className="font-medium">{item.value}%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-8 py-2 text-sm text-blue-400 hover:text-blue-300 transition-colors">
                  View full report
                </button>
              </motion.div>
            </div>

            {/* Recent Activity */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-[#111] border border-white/5 rounded-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-white/5 flex justify-between items-center">
                <h3 className="font-semibold text-lg">Recent Transactions</h3>
                <button className="text-gray-500 hover:text-white transition-colors">
                  <Command size={16} />
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-400">
                  <thead className="bg-white/5 text-gray-200">
                    <tr>
                      <th className="px-6 py-3 font-medium">Customer</th>
                      <th className="px-6 py-3 font-medium">Status</th>
                      <th className="px-6 py-3 font-medium">Date</th>
                      <th className="px-6 py-3 font-medium text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { name: "Global Solutions Inc.", status: "Completed", date: "Oct 24, 2025", amount: "$1,250.00" },
                      { name: "Nexus Tech", status: "Processing", date: "Oct 23, 2025", amount: "$850.00" },
                      { name: "Alpha Stream", status: "Failed", date: "Oct 23, 2025", amount: "$2,400.00" },
                      { name: "Bright Path", status: "Completed", date: "Oct 21, 2025", amount: "$350.00" },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4 font-medium text-white">{row.name}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            row.status === 'Completed' ? 'bg-green-500/10 text-green-500' :
                            row.status === 'Processing' ? 'bg-yellow-500/10 text-yellow-500' :
                            'bg-red-500/10 text-red-500'
                          }`}>
                            {row.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">{row.date}</td>
                        <td className="px-6 py-4 text-right text-white">{row.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

          </div>
        </div>
      </main>
    </div>
  );
}
