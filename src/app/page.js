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

  // Currencies list (PKR excluded)
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
      <header className="border-b border-slate-800 bg-slate-900/95 backdrop-blur sticky top-0 z-50 px-6 py-3 flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center space-x-3">
          <span className="text-xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-cyan-400">
            AETROS PULSETRIPS
          </span>
          <span className="text-xs bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2.5 py-0.5 rounded-full font-medium shadow-sm">
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

          {/* Currency Selector */}
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
       
        {/* Sidebar Options */}
        <aside className="w-64 bg-slate-900 border-r border-slate-800 p-6 hidden md:flex flex-col justify-between shrink-0">
          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Portal Navigation</h3>
              <nav className="space-y-1.5">
                <button
                  onClick={() => setActiveMenu('dashboard')}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium transition flex items-center space-x-2 ${activeMenu === 'dashboard' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' : 'text-slate-300 hover:bg-slate-800/80'}`}
                >
                  <span>🏨</span>
                  <span>Hotels & Resorts</span>
                </button>
                <button
                  onClick={() => setActiveMenu('flights')}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium transition flex items-center space-x-2 ${activeMenu === 'flights' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' : 'text-slate-300 hover:bg-slate-800/80'}`}
                >
                  <span>✈️</span>
                  <span>Flight Ticketing</span>
                </button>
                <button
                  onClick={() => setActiveMenu('unique')}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium transition flex items-center space-x-2 ${activeMenu === 'unique' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' : 'text-slate-300 hover:bg-slate-800/80'}`}
                >
                  <span>✨</span>
                  <span>Unique Properties</span>
                </button>
              </nav>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Affiliate & White Label</h3>
              <nav className="space-y-1.5">
                <button
                  onClick={() => setActiveMenu('whitelabel')}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium transition flex items-center space-x-2 ${activeMenu === 'whitelabel' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' : 'text-slate-300 hover:bg-slate-800/80'}`}
                >
                  <span>🧩</span>
                  <span>White Label Widgets</span>
                </button>
                <button
                  onClick={() => setActiveMenu('affiliate')}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium transition flex items-center space-x-2 ${activeMenu === 'affiliate' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' : 'text-slate-300 hover:bg-slate-800/80'}`}
                >
                  <span>🔗</span>
                  <span>Affiliate Networks</span>
                </button>
              </nav>
            </div>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-slate-400 space-y-1 shadow-inner">
            <p className="font-semibold text-slate-200">Official Support</p>
            <a href="mailto:aetros.official@gmail.com" className="text-indigo-400 hover:underline break-all block">
              aetros.official@gmail.com
            </a>
          </div>
        </aside>

        {/* Content Area with Rich Hero Banners and Images */}
        <main className="flex-grow p-6 md:p-8 space-y-8 max-w-6xl mx-auto w-full">
          {activeMenu === 'dashboard' && (
            <div className="space-y-8">
             
              {/* Stunning Hero Banner with Background Image Overlay */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 md:p-12 flex flex-col justify-center min-h-[260px]">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="relative z-10 max-w-2xl space-y-3">
                  <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
                    Global Wholesale Inventory
                  </span>
                  <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                    Next-Gen B2B Travel & Hospitality Network
                  </h1>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Access live inventory from Hotelbeds and Duffel with dynamic region filtering, high-yield margins, and automated booking management.
                  </p>
                </div>
              </div>

              {/* Dynamic Cascading Filters Search Card */}
              <div className="bg-slate-900/90 backdrop-blur p-6 md:p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-5">
                <h2 className="text-lg font-bold flex items-center space-x-2">
                  <span>🔍</span>
                  <span>Advanced Hotel & Resort Search</span>
                </h2>
               
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Region */}
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5 font-medium">Region</label>
                    <select
                      value={selectedRegion}
                      onChange={(e) => {
                        const reg = e.target.value;
                        setSelectedRegion(reg);
                        const newCountries = regionData[reg]?.countries || [];
                        setSelectedCountry(newCountries[0] || '');
                      }}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-indigo-500"
                    >
                      {Object.keys(regionData).map((reg) => (
                        <option key={reg} value={reg}>{reg}</option>
                      ))}
                    </select>
                  </div>

                  {/* Country (Cascading) */}
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5 font-medium">Country</label>
                    <select
                      value={selectedCountry}
                      onChange={(e) => setSelectedCountry(e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-indigo-500"
                    >
                      {currentCountries.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  {/* City (Cascading) */}
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5 font-medium">Destination City</label>
                    <select
                      value={cityInput}
                      onChange={(e) => setCityInput(e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-indigo-500"
                    >
                      <option value="">Select City ({selectedCountry})</option>
                      {currentCities.map((ct) => (
                        <option key={ct} value={ct}>{ct}</option>
                      ))}
                    </select>
                  </div>

                  {/* Search Button */}
                  <div className="flex items-end">
                    <button className="w-full bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-semibold py-3 rounded-xl text-sm transition shadow-lg shadow-indigo-600/30">
                      Search Inventory ({currency})
                    </button>
                  </div>
                </div>
              </div>

              {/* Trending Destinations with Visual Cards & Images Style */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-slate-100">Trending Global Destinations</h3>
                  <span className="text-xs text-indigo-400 font-semibold cursor-pointer hover:underline">View All Wholesale Rates →</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      city: 'Dubai, UAE',
                      desc: 'Luxury 5-Star Resorts & Beachfront Villas',
                      imgBg: 'from-amber-500/20 to-orange-500/10',
                      badge: 'Top B2B Booked'
                    },
                    {
                      city: 'Paris, France',
                      desc: 'Historic Boutique Hotels near City Center',
                      imgBg: 'from-pink-500/20 to-purple-500/10',
                      badge: 'High Margin'
                    },
                    {
                      city: 'Tokyo, Japan',
                      desc: 'Modern Urban Stays & Scenic Skyline Views',
                      imgBg: 'from-cyan-500/20 to-blue-500/10',
                      badge: 'Trending Fast'
                    }
                  ].map((item, idx) => (
                    <div key={idx} className={`group relative bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500/60 transition-all duration-300 shadow-xl overflow-hidden bg-gradient-to-br ${item.imgBg} cursor-pointer hover:-translate-y-1`}>
                      <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur px-2.5 py-1 rounded-full text-[10px] font-semibold text-indigo-300 border border-slate-800">
                        {item.badge}
                      </div>
                      <div className="space-y-3 pt-4">
                        <h4 className="font-bold text-xl text-white group-hover:text-indigo-400 transition">{item.city}</h4>
                        <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                        <div className="pt-2 flex items-center text-xs font-semibold text-indigo-400 space-x-1">
                          <span>Explore Inventory</span>
                          <span>→</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {activeMenu === 'flights' && (
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold bg-indigo-500/10 px-3 py-1 rounded-full">Duffel API Integration</span>
                <h2 className="text-2xl font-bold">Global Flight Ticketing Portal</h2>
                <p className="text-sm text-slate-400">Instantly search live carrier fares, baggage additions, and instant PNR generation.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input type="text" placeholder="Origin (e.g. LHR / London)" className="bg-slate-800 border border-slate-700 rounded-xl p-3.5 text-sm text-white focus:outline-none focus:border-indigo-500" />
                <input type="text" placeholder="Destination (e.g. DXB / Dubai)" className="bg-slate-800 border border-slate-700 rounded-xl p-3.5 text-sm text-white focus:outline-none focus:border-indigo-500" />
                <input type="date" className="bg-slate-800 border border-slate-700 rounded-xl p-3.5 text-sm text-white focus:outline-none focus:border-indigo-500" />
              </div>
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3 rounded-xl text-sm transition shadow-lg shadow-indigo-600/30">
                Search Live Flights ({currency})
              </button>
            </div>
          )}

          {activeMenu === 'unique' && (
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-4">
              <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold bg-indigo-500/10 px-3 py-1 rounded-full">Curated Experiences</span>
              <h2 className="text-2xl font-bold">Unique Properties & Trip Planners</h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                Hand-picked glass igloos, private overwater bungalows, cliffside eco-lodges, and automated B2B multi-destination itineraries designed for premium clientele. For bespoke packages, contact us at <a href="mailto:aetros.official@gmail.com" className="text-indigo-400 underline">aetros.official@gmail.com</a>.
              </p>
            </div>
          )}

          {activeMenu === 'whitelabel' && (
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-4">
              <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold bg-indigo-500/10 px-3 py-1 rounded-full">White Label Partner Network</span>
              <h2 className="text-2xl font-bold">Custom Branded Booking Engines</h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                Embed fully white-labeled booking widgets directly onto your travel blog or portal under your own branding. Setup and API configurations are managed via <a href="mailto:aetros.official@gmail.com" className="text-indigo-400 underline">aetros.official@gmail.com</a>.
              </p>
            </div>
          )}

          {activeMenu === 'affiliate' && (
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-4">
              <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold bg-indigo-500/10 px-3 py-1 rounded-full">Affiliate Networks</span>
              <h2 className="text-2xl font-bold">Travelpayouts & Stay22 Integration</h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                Seamlessly track Pinterest traffic conversion funnels, affiliate parameters, and automated commission payouts.
              </p>
            </div>
          )}
        </main>
      </div>

      {/* Centered Copyright Footer */}
      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500 space-y-1.5 bg-slate-950">
        <p>© 2026 Aetros PulseTrips. All rights reserved.</p>
        <p>B2B Global Travel Solutions | Official Inquiries: <a href="mailto:aetros.official@gmail.com" className="text-indigo-400 hover:underline">aetros.official@gmail.com</a></p>
      </footer>

    </div>
  );
}
