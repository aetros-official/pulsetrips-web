'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function DiscoverPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const discoverItems = [
    { title: 'Trending Cities in Europe', category: 'cities', desc: 'Paris, Rome, Zurich, Barcelona wholesale inventories', badge: 'High Demand', tag: 'Europe' },
    { title: 'Unique Glass Igloos', category: 'properties', desc: 'Arctic luxury glass cabins with northern lights view', badge: 'Exclusive', tag: 'Scandinavia' },
    { title: 'Summer Seasonal Deals', category: 'deals', desc: 'Up to 35% off on Mediterranean beach resorts', badge: 'Limited Offer', tag: 'Global' },
    { title: 'Top Flight Routes (Duffel API)', category: 'flights', desc: 'Direct wholesale airline ticketing across global hubs', badge: 'Active API', tag: 'Aviation' },
    { title: 'Overwater Bungalows', category: 'properties', desc: 'Maldives and Bora Bora private island retreats', badge: 'Luxury', tag: 'Asia Pacific' },
    { title: 'Autumn Cultural Festivals', category: 'deals', desc: 'Curated packages for global heritage and events', badge: 'Trending', tag: 'Worldwide' }
  ];

  const filteredItems = selectedCategory === 'all'
    ? discoverItems
    : discoverItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between font-sans">
     
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/95 backdrop-blur px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center font-black text-white shadow-lg shadow-indigo-600/30">
            AP
          </div>
          <div>
            <span className="text-xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-cyan-400">
              AETROS PULSETRIPS
            </span>
            <span className="block text-[10px] text-slate-400 tracking-widest uppercase">Discovery & Insights Portal</span>
          </div>
        </Link>
        <Link href="/" className="text-xs bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-4 py-2 rounded-xl transition shadow-lg">
          ← Back to Main Portal
        </Link>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow max-w-6xl mx-auto px-6 py-12 w-full space-y-8">
       
        {/* Banner Section */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 md:p-12 rounded-3xl border border-slate-800 shadow-2xl space-y-4">
          <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold bg-indigo-500/10 border border-indigo-500/20 px-3 py-1.5 rounded-full inline-block">
            🌍 Global Discovery Hub
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-white">Explore Trending Cities, Unique Stays & Seasonal Deals</h1>
          <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
            Browse through curated travel data optimized for B2B affiliate networks, Pinterest traffic landing pages, and direct wholesale bookings.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 pt-4">
            {[
              { id: 'all', label: 'All Discoveries' },
              { id: 'cities', label: 'Trending Cities' },
              { id: 'properties', label: 'Unique Properties' },
              { id: 'deals', label: 'Seasonal Deals' },
              { id: 'flights', label: 'Flight Routes' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${selectedCategory === tab.id ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Discovery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl hover:border-indigo-500/60 transition space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2.5 py-1 rounded-full">
                    {item.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{item.tag}</span>
                </div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
                <span className="text-xs text-indigo-400 font-semibold cursor-pointer hover:underline">Explore inventory →</span>
                <Link href="/" className="bg-slate-800 hover:bg-slate-700 text-white text-xs px-3 py-1.5 rounded-lg transition">
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900/60 py-6 text-center text-xs text-slate-500 space-y-1">
        <p>© 2026 Aetros PulseTrips. All rights reserved.</p>
        <p>Official Support Contact: <a href="mailto:aetros.official@gmail.com" className="text-indigo-400 hover:underline">aetros.official@gmail.com</a></p>
      </footer>

    </div>
  );
}
