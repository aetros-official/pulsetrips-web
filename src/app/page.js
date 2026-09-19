'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [currency, setCurrency] = useState('USD');
  const [language, setLanguage] = useState('en');
  const [activeMenu, setActiveMenu] = useState('dashboard');

  // Dynamic Cascading Filters State
  const [selectedRegion, setSelectedRegion] = useState('Europe');
  const [selectedCountry, setSelectedCountry] = useState('France');
  const [cityInput, setCityInput] = useState('');

  // Currencies list (PKR excluded as requested)
  const currencies = ['USD', 'EUR', 'GBP', 'AED', 'SAR', 'CHF', 'CAD', 'AUD', 'JPY', 'SGD'];

  // Mock cascading options mapping
  const regionData = {
    'Europe': { countries: ['France', 'Italy', 'Spain', 'Switzerland'], cities: { 'France': ['Paris', 'Nice', 'Lyon'], 'Italy': ['Rome', 'Milan', 'Venice'], 'Spain': ['Barcelona', 'Madrid'], 'Switzerland': ['Zurich', 'Geneva'] } },
    'Middle East': { countries: ['UAE', 'Saudi Arabia', 'Qatar'], cities: { 'UAE': ['Dubai', 'Abu Dhabi'], 'Saudi Arabia': ['Riyadh', 'Jeddah'], 'Qatar': ['Doha'] } },
    'Asia Pacific': { countries: ['Japan', 'Singapore', 'Thailand'], cities: { 'Japan': ['Tokyo', 'Kyoto', 'Osaka'], 'Singapore': ['Singapore'], 'Thailand': ['Bangkok', 'Phuket'] } },
    'North America': { countries: ['United States', 'Canada'], cities: { 'United States': ['New York', 'Los Angeles', 'Miami'], 'Canada': ['Toronto', 'Vancouver'] } }
  };

  const currentCountries = regionData[selectedRegion]?.countries || [];
  const currentCities = regionData[selectedRegion]?.cities[selectedCountry] || [];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
     
      {/* Top Navigation Bar */}
      <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur sticky top-0 z-50 px-6 py-3 flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center space-x-3">
          <span className="text-xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            AETROS PULSETRIPS
          </span>
          <span className="text-xs bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2.5 py-0.5 rounded-full font-medium">
            B2B Partner Portal
          </span>
        </div>

        <div className="flex items-center space-x-3 text-sm flex-wrap">
          <div className="hidden lg:flex items-center space-x-1 text-slate-400 text-xs">
            <span>Support:</span>
            <a href="mailto:aetros.official@gmail.com" className="text-indigo-400 hover:underline">
              aetros.official@gmail.com
            </a>
          </div>

          {/* Currency Selector (PKR excluded) */}
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="bg-slate-800 border border-slate-700 rounded px-2.5 py-1 text-xs text-white focus:outline-none"
          >
            {currencies.map((curr) => (
              <option key={curr} value={curr}>{curr}</option>
            ))}
          </select>

          {/* World Languages Selector */}
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-slate-800 border border-slate-700 rounded px-2.5 py-1 text-xs text-white focus:outline-none"
          >
            <option value="en">English</option>
            <option value="ar">العربية</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
          </select>

          <Link
            href="/auth"
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold transition shadow-md shadow-indigo-600/20"
          >
            Partner Login
          </Link>
        </div>
      </header>

      {/* Main Body with Sidebar Layout */}
      <div className="flex flex-grow">
       
        {/* Sidebar Options (Affiliate, White Label, Navigation) */}
        <aside className="w-64 bg-slate-900 border-r border-slate-800 p-6 hidden md:flex flex-col justify-between shrink-0">
          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Portal Navigation</h3>
              <nav className="space-y-1.5">
                <button
                  onClick={() => setActiveMenu('dashboard')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition ${activeMenu === 'dashboard' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' : 'text-slate-300 hover:bg-slate-800'}`}
                >
                  🏨 Hotels & Resorts
                </button>
                <button
                  onClick={() => setActiveMenu('flights')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition ${activeMenu === 'flights' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' : 'text-slate-300 hover:bg-slate-800'}`}
                >
                  ✈️ Flight Ticketing
                </button>
                <button
                  onClick={() => setActiveMenu('unique')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition ${activeMenu === 'unique' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' : 'text-slate-300 hover:bg-slate-800'}`}
                >
                  ✨ Unique Properties
                </button>
              </nav>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Affiliate & White Label</h3>
              <nav className="space-y-1.5">
                <button
                  onClick={() => setActiveMenu('whitelabel')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition ${activeMenu === 'whitelabel' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' : 'text-slate-300 hover:bg-slate-800'}`}
                >
                  🧩 White Label Widgets
                </button>
                <button
                  onClick={() => setActiveMenu('affiliate')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition ${activeMenu === 'affiliate' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' : 'text-slate-300 hover:bg-slate-800'}`}
                >
                  🔗 Affiliate Networks
                </button>
              </nav>
            </div>
          </div>

          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-xs text-slate-400 space-y-1">
            <p className="font-semibold text-slate-200">Official Support</p>
            <a href="mailto:aetros.official@gmail.com" className="text-indigo-400 hover:underline break-all block">
              aetros.official@gmail.com
            </a>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-grow p-6 md:p-8 space-y-8 max-w-5xl mx-auto w-full">
          {activeMenu === 'dashboard' && (
            <div className="space-y-8">
             
              {/* Search Section with Dynamic Cascading Filters */}
              <div className="bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-2xl space-y-4">
                <h2 className="text-xl font-bold">Dynamic Hotel Search (Hotelbeds API)</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                 
                  {/* Region */}
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">Region</label>
                    <select
                      value={selectedRegion}
                      onChange={(e) => {
                        const reg = e.target.value;
                        setSelectedRegion(reg);
                        const newCountries = regionData[reg]?.countries || [];
                        setSelectedCountry(newCountries[0] || '');
                      }}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
                    >
                      {Object.keys(regionData).map((reg) => (
                        <option key={reg} value={reg}>{reg}</option>
                      ))}
                    </select>
                  </div>

                  {/* Country (Cascading) */}
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">Country</label>
                    <select
                      value={selectedCountry}
                      onChange={(e) => setSelectedCountry(e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
                    >
                      {currentCountries.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  {/* City (Cascading / Custom Input) */}
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">Destination City</label>
                    <select
                      value={cityInput}
                      onChange={(e) => setCityInput(e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
                    >
                      <option value="">Select City ({selectedCountry})</option>
                      {currentCities.map((ct) => (
                        <option key={ct} value={ct}>{ct}</option>
                      ))}
                    </select>
                  </div>

                  {/* Search Button */}
                  <div className="flex items-end">
                    <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2.5 rounded-lg text-sm transition shadow-lg shadow-indigo-600/30">
                      Search ({currency})
                    </button>
                  </div>
                </div>
              </div>

              {/* Trending Destinations */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-200">Trending B2B Destinations</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { city: 'Dubai, UAE', tag: 'High Demand • Luxury Resorts' },
                    { city: 'Paris, France', tag: 'Wholesale Rates • Boutique' },
                    { city: 'Tokyo, Japan', tag: 'Partner Exclusive • Urban' }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-indigo-500/50 transition cursor-pointer">
                      <h4 className="font-bold text-base">{item.city}</h4>
                      <p className="text-xs text-indigo-400 mt-1">{item.tag}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {activeMenu === 'flights' && (
            <div className="bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-4">
              <h2 className="text-xl font-bold">Flight Ticketing Portal (Powered by Duffel API)</h2>
              <p className="text-sm text-slate-400">Search global carrier inventory, manage bookings, and execute instant ticketing.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <input type="text" placeholder="Origin Airport (e.g. LHR)" className="bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm text-white focus:outline-none" />
                <input type="text" placeholder="Destination Airport (e.g. DXB)" className="bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm text-white focus:outline-none" />
                <input type="date" className="bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm text-white focus:outline-none" />
              </div>
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition">
                Search Flights ({currency})
              </button>
            </div>
          )}

          {activeMenu === 'unique' && (
            <div className="bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-4">
              <h2 className="text-xl font-bold">Unique Properties & Trip Planners</h2>
              <p className="text-sm text-slate-400">
                Explore hand-picked luxury villas, eco-lodges, glass igloos, and curated multi-destination trip itineraries tailored for B2B wholesale clients.
              </p>
            </div>
          )}

          {activeMenu === 'whitelabel' && (
            <div className="bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-4">
              <h2 className="text-xl font-bold">White Label Solutions</h2>
              <p className="text-sm text-slate-400">
                Embed fully branded booking engines on your own domain with custom styling and affiliate tracking capabilities.
              </p>
            </div>
          )}

          {activeMenu === 'affiliate' && (
            <div className="bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-4">
              <h2 className="text-xl font-bold">Affiliate & Travel Networks</h2>
              <p className="text-sm text-slate-400">
                Integrated tracking parameters, conversion analytics, and payouts setup via Travelpayouts, Stay22, and Booking.com APIs.
              </p>
            </div>
          )}
        </main>
      </div>

      {/* Centered Copyright Footer */}
      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500 space-y-1 bg-slate-950">
        <p>© 2026 Aetros PulseTrips. All rights reserved.</p>
        <p>B2B Global Travel Solutions | Inquiries: <a href="mailto:aetros.official@gmail.com" className="text-indigo-400 hover:underline">aetros.official@gmail.com</a></p>
      </footer>

    </div>
  );
}
