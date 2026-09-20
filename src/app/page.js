'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Search, MapPin, Calendar, Users, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('Flights');

  return (
    <div className="min-h-screen bg-[#040812] text-white flex flex-col">
      {/* Top Header */}
      <Header />

      <div className="flex flex-1">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
          {/* Hero Banner Section */}
          <div className="relative bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border border-slate-800 rounded-2xl p-8 lg:p-10 mb-8 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/30 border border-blue-500/40 text-cyan-300 text-xs font-bold mb-4 tracking-wide">
                <Zap size={13} /> EMPOWERING GLOBAL B2B TRAVEL PARTNERSHIPS
              </span>
              <h1 className="text-3xl lg:text-5xl font-black tracking-tight text-white mb-4 leading-tight">
                Discover, Book & Manage Luxury Travel at Wholesale Scale.
              </h1>
              <p className="text-slate-300 text-sm lg:text-base leading-relaxed mb-6">
                Connect seamlessly with Duffel flight inventory and Hotelbeds global accommodations. Engineered for high-performance travel entrepreneurs and affiliate networks.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-300">
                <span className="flex items-center gap-1 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
                  <ShieldCheck size={14} className="text-cyan-400" /> B2B Wholesale Portal Active
                </span>
                <span className="flex items-center gap-1 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
                  <Zap size={14} className="text-blue-400" /> Direct Duffel & Hotelbeds API Integrated
                </span>
              </div>
            </div>
          </div>

          {/* Search / Booking Widget Section */}
          <div className="bg-[#080e22] border border-slate-800 rounded-2xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
              <h2 className="text-lg font-extrabold tracking-wide text-white flex items-center gap-2">
                <Search size={18} className="text-cyan-400" /> Advanced Cascading Region, Country & City Filters
              </h2>
              <span className="text-xs text-cyan-400 font-semibold bg-cyan-950/60 px-2.5 py-1 rounded-full border border-cyan-800/60">
                Live Data Synchronized (USD)
              </span>
            </div>

            {/* Cascading Filter Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1.5">1. Select Region</label>
                <div className="flex items-center bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-sm">
                  <MapPin size={16} className="text-cyan-400 mr-2" />
                  <select className="bg-transparent text-white w-full outline-none cursor-pointer font-semibold">
                    <option className="bg-slate-900" value="Europe">Europe</option>
                    <option className="bg-slate-900" value="Asia">Asia</option>
                    <option className="bg-slate-900" value="North America">North America</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1.5">2. Select Country</label>
                <div className="flex items-center bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-sm">
                  <MapPin size={16} className="text-cyan-400 mr-2" />
                  <select className="bg-transparent text-white w-full outline-none cursor-pointer font-semibold">
                    <option className="bg-slate-900" value="France">France</option>
                    <option className="bg-slate-900" value="United Kingdom">United Kingdom</option>
                    <option className="bg-slate-900" value="Italy">Italy</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1.5">3. Select City</label>
                <div className="flex items-center bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-sm">
                  <MapPin size={16} className="text-cyan-400 mr-2" />
                  <select className="bg-transparent text-white w-full outline-none cursor-pointer font-semibold">
                    <option className="bg-slate-900" value="Paris">Paris</option>
                    <option className="bg-slate-900" value="Nice">Nice</option>
                    <option className="bg-slate-900" value="Lyon">Lyon</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black px-6 py-3 rounded-xl shadow-lg transition flex items-center gap-2 text-sm">
                Search Inventory <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
