'use client';
import { useState } from 'react';

export default function Home() {
  const [selectedRegion, setSelectedRegion] = useState('Asia');
  const [selectedCountry, setSelectedCountry] = useState('UAE');
  const [selectedCity, setSelectedCity] = useState('Dubai');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
     
      {/* 1. TOPBAR WITH MONOGRAM & LINKS */}
      <header className="border-b border-slate-800 bg-slate-900/80 sticky top-0 z-50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
         
          {/* Monogram / Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-500/30">
              AP
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-wider bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
                AETROS PULSETRIPS
              </span>
              <span className="block text-xs text-slate-400">B2B Direct Wholesale Portal</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-slate-300">
            <a href="#" className="hover:text-blue-400 transition">Home</a>
            <a href="#" className="hover:text-blue-400 transition">Flights</a>
            <a href="#" className="hover:text-blue-400 transition">Stays</a>
            <a href="#" className="hover:text-blue-400 transition">Hotels</a>
            <a href="#" className="hover:text-blue-400 transition">Airport Taxi</a>
            <a href="#" className="hover:text-blue-400 transition">Car Rental</a>
            <a href="#" className="hover:text-blue-400 transition">Buses</a>
            <a href="#" className="hover:text-blue-400 transition">Rail</a>
          </nav>

          {/* Right Actions & Blinking Book Now */}
          <div className="flex items-center space-x-4">
            <select className="bg-slate-800 border border-slate-700 text-xs rounded px-2 py-1 text-slate-300 focus:outline-none">
              <option>English (EN)</option>
              <option>Urdu (UR)</option>
            </select>
            <select className="bg-slate-800 border border-slate-700 text-xs rounded px-2 py-1 text-slate-300 focus:outline-none">
              <option>USD ($)</option>
              <option>EUR (€)</option>
              <option>PKR (Rs)</option>
            </select>
            <a href="#auth" className="hidden sm:inline text-sm hover:text-blue-400">Sign In</a>
           
            {/* Blinking Book Now Button */}
            <a href="#search-section" className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white bg-blue-600 rounded-full shadow-lg overflow-hidden group animate-pulse hover:bg-blue-500 transition">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
              Book Now
            </a>
          </div>

        </div>
      </header>

      {/* MAIN CONTAINER (Layout with Sidebar & Content) */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
       
        {/* 2. ADVANCED SIDEBAR DASHBOARD */}
        <aside className="lg:col-span-1 space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
            <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">Partner Control Panel</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><a href="#dashboard" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-800 transition">📊 <span>Dashboard</span></a></li>
              <li><a href="#performance" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-800 transition">📈 <span>Performance</span></a></li>
              <li><a href="#bookings" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-800 transition">✈️ <span>Bookings & Ledger</span></a></li>
              <li><a href="#finance" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-800 transition">💳 <span>Finance & Payouts</span></a></li>
              <li><a href="#referral" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-800 transition">🤝 <span>Referral Program</span></a></li>
              <li><a href="#blog" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-800 transition">📰 <span>Blog & Guides</span></a></li>
              <li><a href="#help" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-800 transition text-amber-400">❓ <span>Help Center</span></a></li>
            </ul>
          </div>

          {/* Live Balance Card */}
          <div className="bg-gradient-to-br from-blue-900/40 to-slate-900 border border-blue-800/50 rounded-2xl p-5">
            <span className="text-xs text-blue-300 uppercase font-semibold">Live Commission Balance</span>
            <div className="text-2xl font-bold mt-1 text-white">$4,850.00 <span className="text-xs font-normal text-slate-400">USD</span></div>
            <p className="text-xs text-slate-400 mt-2">Instant withdrawal enabled via Bank, Crypto & Wise.</p>
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="lg:col-span-3 space-y-10">
         
          {/* 3. HERO BANNER */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 p-8 md:p-12 border border-slate-800 shadow-2xl">
            <div className="relative z-10 max-w-xl space-y-4">
              <span className="bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full border border-blue-500/30">
                100% Direct Wholesale Pricing
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                "The world is a book, and those who do not travel read only one page."
              </h1>
              <p className="text-slate-300 text-sm">
                Book wholesale flights and live hotel rooms worldwide with direct-to-server API pricing and zero third-party cuts.
              </p>
             
              {/* Quick Search Widget */}
              <div id="search-section" className="bg-slate-950/80 backdrop-blur p-4 rounded-2xl border border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">From (Origin)</label>
                  <input type="text" placeholder="LHE / ISB" className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-sm text-white focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">To (Destination)</label>
                  <input type="text" placeholder="DXB / IST" className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-sm text-white focus:outline-none" />
                </div>
                <div className="flex items-end">
                  <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm py-2 rounded transition">
                    Search Fares
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 4. DYNAMIC REGION / COUNTRY / CITY FILTER BARS */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-bold text-white">🌍 Dynamic Location & Property Filters</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs text-slate-400 mb-1">Select Region</label>
                <select value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)} className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white">
                  <option value="Asia">Asia & Middle East</option>
                  <option value="Europe">Europe</option>
                  <option value="Americas">Americas</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Select Country</label>
                <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)} className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white">
                  <option value="UAE">United Arab Emirates</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Select City / Airport</label>
                <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white">
                  <option value="Dubai">Dubai (DXB)</option>
                  <option value="Abu Dhabi">Abu Dhabi (AUH)</option>
                </select>
              </div>
            </div>
          </div>

          {/* 5. BROWSE BY PROPERTY TYPE */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Browse by Property Type</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {['Hotels', 'Apartments', 'Resorts', 'Villas'].map((type, idx) => (
                <div key={idx} className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500 transition cursor-pointer p-4 text-center">
                  <div className="w-full h-24 bg-slate-800 rounded-xl mb-3 flex items-center justify-center text-2xl">🏨</div>
                  <h4 className="font-semibold text-white">{type}</h4>
                  <p className="text-xs text-slate-400 mt-1">High-res bed/room views</p>
                </div>
              ))}
            </div>
          </div>

          {/* 6. TRENDING DESTINATIONS */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Trending Destinations ({selectedCity}, {selectedCountry})</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {['Downtown Skyline', 'Marina Beach', 'Palm Island'].map((dest, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
                  <div className="h-36 bg-slate-800 flex items-center justify-center text-slate-500">Destination Image</div>
                  <div className="p-4">
                    <h5 className="font-bold text-white">{dest}</h5>
                    <p className="text-xs text-slate-400 mt-1">Direct wholesale contracted rates</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 7. QUICK TRIP PLANNER */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Quick & Easy Trip Planner</h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {['Food & Cooking', 'Photography', 'Festival & Events', 'Historical', 'Shopping'].map((item, idx) => (
                <button key={idx} className="bg-slate-800 hover:bg-blue-600/20 border border-slate-700 hover:border-blue-500 text-xs text-slate-200 p-3 rounded-xl transition text-center font-medium">
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* 8. UNIQUE PROPERTIES & WEEKEND DEALS */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Stay at Top Unique Properties & Weekend Deals</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <span className="bg-amber-500/20 text-amber-400 text-xs px-2.5 py-1 rounded-full font-bold">★ 4.9 Rating</span>
                    <span className="bg-rose-500/20 text-rose-400 text-xs px-2.5 py-1 rounded-full font-bold">25% OFF</span>
                  </div>
                  <h4 className="font-bold text-lg text-white mt-3">Aetros Luxury Suite & Spa</h4>
                  <p className="text-xs text-slate-400 mt-1">Starting from $120 / night (Wholesale Direct)</p>
                </div>
                <button className="mt-4 w-full bg-slate-800 hover:bg-blue-600 text-white text-xs font-semibold py-2 rounded-lg transition">
                  Check Availability
                </button>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <span className="bg-amber-500/20 text-amber-400 text-xs px-2.5 py-1 rounded-full font-bold">★ 4.8 Rating</span>
                    <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2.5 py-1 rounded-full font-bold">Weekend Special</span>
                  </div>
                  <h4 className="font-bold text-lg text-white mt-3">PulseTrips Desert Resort</h4>
                  <p className="text-xs text-slate-400 mt-1">Starting from $95 / night + Free Breakfast</p>
                </div>
                <button className="mt-4 w-full bg-slate-800 hover:bg-blue-600 text-white text-xs font-semibold py-2 rounded-lg transition">
                  Check Availability
                </button>
              </div>
            </div>
          </div>

        </main>
      </div>

      {/* 9. FOOTER SECTION (5-7 Options & Copyright) */}
      <footer className="border-t border-slate-800 bg-slate-900 mt-16 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
          <div>
            <h5 className="font-bold text-white mb-3">Discover</h5>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li><a href="#" className="hover:text-blue-400">Flights API</a></li>
              <li><a href="#" className="hover:text-blue-400">Hotel Beds</a></li>
              <li><a href="#" className="hover:text-blue-400">Trending Cities</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white mb-3">Support</h5>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li><a href="#" className="hover:text-blue-400">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-400">API Documentation</a></li>
              <li><a href="#" className="hover:text-blue-400">Withdrawal FAQ</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white mb-3">Partners</h5>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li><a href="#" className="hover:text-blue-400">Affiliate Portal</a></li>
              <li><a href="#" className="hover:text-blue-400">Direct Commission</a></li>
              <li><a href="#" className="hover:text-blue-400">White-label Domain</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white mb-3">Terms & Settings</h5>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-400">Security & Ledger</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white mb-3">About Aetros</h5>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li><a href="#" className="hover:text-blue-400">Our Story</a></li>
              <li><a href="#" className="hover:text-blue-400">Global Network</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright & Monogram */}
        <div className="max-w-7xl mx-auto px-4 mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center font-bold text-white text-xs">AP</div>
            <span>© 2026 Aetros PulseTrips. All rights reserved. Direct B2B Wholesale Portal.</span>
          </div>
          <div className="mt-4 sm:mt-0 flex space-x-4">
            <a href="#" className="hover:text-slate-400">Privacy</a>
            <a href="#" className="hover:text-slate-400">Terms</a>
            <a href="#" className="hover:text-slate-400">API Status: Online</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
