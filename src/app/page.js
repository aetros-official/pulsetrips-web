'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [currency, setCurrency] = useState('USD');
  const [language, setLanguage] = useState('en');
  const [activeTab, setActiveTab] = useState('hotels'); // 'hotels' | 'flights' | 'unique'

  // Currencies list (PKR excluded as requested)
  const currencies = ['USD', 'EUR', 'GBP', 'AED', 'SAR', 'CHF', 'CAD', 'AUD', 'JPY', 'SGD'];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
     
      {/* 2-Row Topbar */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
        {/* Row 1: Brand & Utilities */}
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center border-b border-slate-800/60">
          <div className="flex items-center space-x-3">
            <span className="text-xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              AETROS PULSETRIPS
            </span>
            <span className="hidden md:inline-block text-xs bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2 py-0.5 rounded-full">
              B2B Partner Portal
            </span>
          </div>

          <div className="flex items-center space-x-4 text-sm">
            <div className="hidden sm:flex items-center space-x-1 text-slate-400 text-xs">
              <span>Support:</span>
              <a href="mailto:aetros.official@gmail.com" className="text-indigo-400 hover:underline">
                aetros.official@gmail.com
              </a>
            </div>

            {/* Currency Selector */}
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-slate-800 border border-slate-700 rounded px-2 py-1 text-xs text-white focus:outline-none"
            >
              {currencies.map((curr) => (
                <option key={curr} value={curr}>{curr}</option>
              ))}
            </select>

            {/* Language Selector */}
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-slate-800 border border-slate-700 rounded px-2 py-1 text-xs text-white focus:outline-none"
            >
              <option value="en">English</option>
              <option value="ar">العربية</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
            </select>

            <Link
              href="/auth"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition"
            >
              Partner Login
            </Link>
          </div>
        </div>

        {/* Row 2: Navigation Tabs / Sidebar Options */}
        <div className="max-w-7xl mx-auto px-4 py-2 flex space-x-6 text-sm overflow-x-auto">
          <button
            onClick={() => setActiveTab('hotels')}
            className={`pb-1 font-medium transition border-b-2 ${activeTab === 'hotels' ? 'border-indigo-500 text-indigo-400' : 'border-transparent text-slate-400 hover:text-white'}`}
          >
            🏨 Hotels & Resorts (Hotelbeds)
          </button>
          <button
            onClick={() => setActiveTab('flights')}
            className={`pb-1 font-medium transition border-b-2 ${activeTab === 'flights' ? 'border-indigo-500 text-indigo-400' : 'border-transparent text-slate-400 hover:text-white'}`}
          >
            ✈️ Flights (Duffel API)
          </button>
          <button
            onClick={() => setActiveTab('unique')}
            className={`pb-1 font-medium transition border-b-2 ${activeTab === 'unique' ? 'border-indigo-500 text-indigo-400' : 'border-transparent text-slate-400 hover:text-white'}`}
          >
            ✨ Unique Properties & White Label
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow max-w-7xl mx-auto px-4 py-8 w-full">
        {activeTab === 'hotels' && (
          <div className="space-y-6">
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl">
              <h2 className="text-xl font-bold mb-4">Search Global Hotels</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Region / Country</label>
                  <select className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none">
                    <option>Europe</option>
                    <option>Middle East</option>
                    <option>Asia Pacific</option>
                    <option>North America</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Destination City</label>
                  <input type="text" placeholder="e.g. Paris, Dubai, Tokyo" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Check-in / Check-out</label>
                  <input type="date" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none" />
                </div>
                <div className="flex items-end">
                  <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2.5 rounded-lg text-sm transition shadow-lg">
                    Search Inventory ({currency})
                  </button>
                </div>
              </div>
            </div>

            {/* Trending Destinations */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-slate-200">Trending B2B Destinations</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {['Dubai, UAE', 'Paris, France', 'Tokyo, Japan'].map((dest, idx) => (
                  <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-4 hover:border-indigo-500/50 transition cursor-pointer">
                    <h4 className="font-bold text-base">{dest}</h4>
                    <p className="text-xs text-slate-400 mt-1">Exclusive wholesale rates available</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'flights' && (
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4">
            <h2 className="text-xl font-bold">Flight Ticketing (Powered by Duffel)</h2>
            <p className="text-sm text-slate-400">Search global airline inventory with instant ticketing capabilities.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input type="text" placeholder="Origin (e.g. LHR)" className="bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white" />
              <input type="text" placeholder="Destination (e.g. DXB)" className="bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white" />
              <input type="date" className="bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white" />
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition">
              Search Flights
            </button>
          </div>
        )}

        {activeTab === 'unique' && (
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4">
            <h2 className="text-xl font-bold">White Label & Affiliate Options</h2>
            <p className="text-sm text-slate-400">
              Integrate white-label booking widgets directly onto your travel network sites. For custom API integration queries or bulk partnerships, reach out directly via email at <a href="mailto:aetros.official@gmail.com" className="text-indigo-400 underline">aetros.official@gmail.com</a>.
            </p>
          </div>
        )}
      </main>

      {/* Centered Copyright Footer */}
      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500 space-y-1 bg-slate-950">
        <p>© 2026 Aetros PulseTrips. All rights reserved.</p>
        <p>B2B Global Travel Solutions | Inquiries: <a href="mailto:aetros.official@gmail.com" className="text-indigo-400 hover:underline">aetros.official@gmail.com</a></p>
      </footer>

    </div>
  );
}
