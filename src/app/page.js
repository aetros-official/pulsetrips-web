'use client';
import { useState } from 'react';

// Location dataset with cascading logic
const locationData = {
  "Asia & Middle East": {
    "United Arab Emirates": ["Dubai", "Abu Dhabi", "Sharjah"],
    "Saudi Arabia": ["Riyadh", "Jeddah", "Mecca"],
    "Turkey": ["Istanbul", "Antalya", "Cappadocia"]
  },
  "Europe": {
    "France": ["Paris", "Nice", "Lyon"],
    "United Kingdom": ["London", "Manchester", "Edinburgh"],
    "Switzerland": ["Zurich", "Geneva", "Interlaken"]
  },
  "North America": {
    "United States": ["New York", "Los Angeles", "Miami"],
    "Canada": ["Toronto", "Vancouver", "Montreal"]
  }
};

const propertyTypes = [
  { name: 'Hotels', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&auto=format&fit=crop&q=60' },
  { name: 'Apartments', img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&auto=format&fit=crop&q=60' },
  { name: 'Resorts', img: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=500&auto=format&fit=crop&q=60' },
  { name: 'Villas', img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&auto=format&fit=crop&q=60' },
  { name: 'Cottages', img: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=500&auto=format&fit=crop&q=60' },
  { name: 'Hostels', img: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=500&auto=format&fit=crop&q=60' },
  { name: 'Penthouses', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=60' },
  { name: 'Glamping', img: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=500&auto=format&fit=crop&q=60' },
  { name: 'Motels', img: 'https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=500&auto=format&fit=crop&q=60' },
  { name: 'Boats', img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&auto=format&fit=crop&q=60' },
  { name: 'Ryokans', img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500&auto=format&fit=crop&q=60' },
  { name: 'Chalets', img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&auto=format&fit=crop&q=60' },
];

const tripPlanners = [
  { name: 'Food & Cooking', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&auto=format&fit=crop&q=60' },
  { name: 'Photography', img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60' },
  { name: 'Festival & Events', img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&auto=format&fit=crop&q=60' },
  { name: 'Historical Expeditions', img: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=500&auto=format&fit=crop&q=60' },
  { name: 'Shopping', img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format&fit=crop&q=60' },
];

export default function Home() {
  const regions = Object.keys(locationData);
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);
 
  const countries = Object.keys(locationData[selectedRegion] || {});
  const [selectedCountry, setSelectedCountry] = useState(countries[0] || '');

  const cities = locationData[selectedRegion]?.[selectedCountry] || [];
  const [selectedCity, setSelectedCity] = useState(cities[0] || '');

  // Handle region change safely
  const handleRegionChange = (reg) => {
    setSelectedRegion(reg);
    const newCountries = Object.keys(locationData[reg] || {});
    const firstCountry = newCountries[0] || '';
    setSelectedCountry(firstCountry);
    const newCities = locationData[reg]?.[firstCountry] || [];
    setSelectedCity(newCities[0] || '');
  };

  // Handle country change safely
  const handleCountryChange = (cnt) => {
    setSelectedCountry(cnt);
    const newCities = locationData[selectedRegion]?.[cnt] || [];
    setSelectedCity(newCities[0] || '');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
     
      {/* 1. TOPBAR WITH MONOGRAM, LINKS & SPACIOUS 2-ROW DESIGN */}
      <header className="border-b border-slate-800 bg-slate-900/90 sticky top-0 z-50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-3 space-y-3">
         
          {/* Top Row: Monogram, Language, Currency, Auth & Blinking Book Now */}
          <div className="flex items-center justify-between border-b border-slate-800/60 pb-3">
           
            {/* Monogram / Brand */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-500/30 text-white">
                AP
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-wider bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
                  AETROS PULSETRIPS
                </span>
                <span className="block text-xs text-slate-400">B2B Direct Wholesale Portal</span>
              </div>
            </div>

            {/* Language, Currency & Auth / Signup */}
            <div className="flex items-center space-x-3">
              <select className="bg-slate-800 border border-slate-700 text-xs rounded-lg px-2.5 py-1.5 text-slate-300 focus:outline-none">
                <option>English (EN)</option>
                <option>Urdu (اردو)</option>
                <option>Arabic (العربية)</option>
                <option>Spanish (ES)</option>
                <option>French (FR)</option>
                <option>German (DE)</option>
                <option>Chinese (中文)</option>
              </select>

              <select className="bg-slate-800 border border-slate-700 text-xs rounded-lg px-2.5 py-1.5 text-slate-300 focus:outline-none">
                <option>USD ($)</option>
                <option>EUR (€)</option>
                <option>GBP (£)</option>
                <option>AED (د.إ)</option>
                <option>SAR (﷼)</option>
                <option>PKR (Rs)</option>
                <option>CAD ($)</option>
              </select>

              <a href="/auth" className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition">
                Sign In
              </a>
              <a href="/auth" className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition shadow-md">
                Register
              </a>

              {/* Blinking Book Now Button */}
              <a href="#search-section" className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-white bg-blue-600 rounded-full shadow-lg overflow-hidden group animate-pulse hover:bg-blue-500 transition">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                Book Now
              </a>
            </div>

          </div>

          {/* Bottom Row: Navigation Links */}
          <nav className="flex items-center justify-center lg:justify-start space-x-6 text-sm font-medium text-slate-300 overflow-x-auto py-1">
            <a href="#" className="hover:text-blue-400 whitespace-nowrap transition">Home</a>
            <a href="#" className="hover:text-blue-400 whitespace-nowrap transition">Flights</a>
            <a href="#" className="hover:text-blue-400 whitespace-nowrap transition">Stays</a>
            <a href="#" className="hover:text-blue-400 whitespace-nowrap transition">Hotels</a>
            <a href="#" className="hover:text-blue-400 whitespace-nowrap transition">Airport Taxi</a>
            <a href="#" className="hover:text-blue-400 whitespace-nowrap transition">Car Rental</a>
            <a href="#" className="hover:text-blue-400 whitespace-nowrap transition">Buses</a>
            <a href="#" className="hover:text-blue-400 whitespace-nowrap transition">Rail</a>
          </nav>

        </div>
      </header>

      {/* MAIN CONTAINER (Layout with Sidebar & Content) */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
       
        {/* 2. ADVANCED SIDEBAR DASHBOARD WITH AFFILIATE & WHITE LABEL */}
        <aside className="lg:col-span-1 space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
            <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">Partner Control Panel</h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li><a href="#dashboard" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-800 transition">📊 <span>Dashboard</span></a></li>
              <li><a href="#performance" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-800 transition">📈 <span>Performance</span></a></li>
              <li><a href="#affiliate" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-800 transition text-blue-400 font-medium">🔗 <span>Affiliate Program</span></a></li>
              <li><a href="#whitelabel" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-800 transition text-emerald-400 font-medium">🏷️ <span>White Label Setup</span></a></li>
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
         
          {/* 3. HERO BANNER WITH HIGH-RES PICTURE */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 p-8 md:p-12 border border-slate-800 shadow-2xl">
            <div className="absolute inset-0 opacity-25 mix-blend-overlay bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&auto=format&fit=crop&q=80')` }}></div>
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
              <div id="search-section" className="bg-slate-950/90 backdrop-blur p-4 rounded-2xl border border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">From (Origin)</label>
                  <input type="text" placeholder="LHE / ISB" className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-sm text-white focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">To ({selectedCity || 'Destination'})</label>
                  <input type="text" placeholder={`${selectedCity} Airport`} className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-sm text-white focus:outline-none" />
                </div>
                <div className="flex items-end">
                  <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm py-2 rounded transition shadow-md">
                    Search Fares
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 4. CASCADING REGION / COUNTRY / CITY & AIRPORT / HOTEL FILTERS */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-xl">
            <div>
              <h3 className="text-lg font-bold text-white">🌍 Dynamic Location & Airport Filters</h3>
              <p className="text-xs text-slate-400 mt-1">Select your target region to automatically load corresponding countries, cities, and major airports.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs text-slate-400 mb-1">Select Region</label>
                <select value={selectedRegion} onChange={(e) => handleRegionChange(e.target.value)} className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white">
                  {regions.map((reg) => (
                    <option key={reg} value={reg}>{reg}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Select Country</label>
                <select value={selectedCountry} onChange={(e) => handleCountryChange(e.target.value)} className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white">
                  {countries.map((cnt) => (
                    <option key={cnt} value={cnt}>{cnt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Select City & Airport</label>
                <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white">
                  {cities.map((ct) => (
                    <option key={ct} value={ct}>{ct} International Airport</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* 5. BROWSE BY PROPERTY TYPE (12 ITEMS WITH HIGH-RES PICTURES) */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Browse by Property Type</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {propertyTypes.map((item, idx) => (
                <div key={idx} className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500 transition cursor-pointer shadow-lg">
                  <div className="w-full h-28 bg-slate-800 overflow-hidden">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  </div>
                  <div className="p-3 text-center">
                    <h4 className="font-semibold text-white text-sm">{item.name}</h4>
                    <p className="text-[10px] text-slate-400 mt-0.5">Wholesale contracted beds</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 6. TRENDING DESTINATIONS (8-10 PICTURES BASED ON SELECTED REGION/COUNTRY) */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Trending Destinations in {selectedCountry} ({selectedCity})</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { title: `${selectedCity} Downtown Skyline`, img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&auto=format&fit=crop&q=60' },
                { title: `${selectedCity} Luxury Marina`, img: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=500&auto=format&fit=crop&q=60' },
                { title: `${selectedCity} Cultural Heritage Quarter`, img: 'https://images.unsplash.com/photo-1578637387939-43c525ef900f?w=500&auto=format&fit=crop&q=60' },
                { title: `${selectedCity} Coastal Resort Beach`, img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60' },
                { title: `${selectedCity} Grand Shopping Boulevard`, img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&auto=format&fit=crop&q=60' },
                { title: `${selectedCity} Scenic Mountain View`, img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&auto=format&fit=crop&q=60' },
              ].map((dest, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg group">
                  <div className="h-36 bg-slate-800 overflow-hidden">
                    <img src={dest.img} alt={dest.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  </div>
                  <div className="p-4">
                    <h5 className="font-bold text-white text-sm">{dest.title}</h5>
                    <p className="text-xs text-slate-400 mt-1">Direct wholesale contracted rates</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 7. QUICK & EASY TRIP PLANNER */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-4">Quick & Easy Trip Planner</h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {tripPlanners.map((item, idx) => (
                <div key={idx} className="group bg-slate-800 border border-slate-700 hover:border-blue-500 rounded-xl overflow-hidden cursor-pointer transition shadow-md">
                  <div className="h-20 bg-slate-900 overflow-hidden">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  </div>
                  <div className="p-2 text-center">
                    <span className="text-[11px] font-semibold text-slate-200">{item.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 8. STAY AT TOP UNIQUE PROPERTIES & WEEKEND DEALS */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Stay at Top Unique Properties & Weekend Deals ({selectedCity})</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between">
                <div className="h-40 bg-slate-800 relative">
                  <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&auto=format&fit=crop&q=60" alt="Hotel" className="w-full h-full object-cover" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-amber-500/90 text-slate-950 text-xs px-2.5 py-1 rounded-full font-bold shadow">★ 4.9 Rating</span>
                    <span className="bg-rose-500/90 text-white text-xs px-2.5 py-1 rounded-full font-bold shadow">25% OFF</span>
                  </div>
                </div>
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <h4 className="font-bold text-lg text-white">Aetros Grand Signature Suite - {selectedCity}</h4>
                    <p className="text-xs text-slate-400 mt-1">Starting from <span className="text-emerald-400 font-bold text-sm">$120 / night</span> (Wholesale Direct)</p>
                  </div>
                  <button className="mt-4 w-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold py-2.5 rounded-xl transition shadow-lg">
                    Check Live Availability & Book
                  </button>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between">
                <div className="h-40 bg-slate-800 relative">
                  <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop&q=60" alt="Resort" className="w-full h-full object-cover" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-amber-500/90 text-slate-950 text-xs px-2.5 py-1 rounded-full font-bold shadow">★ 4.8 Rating</span>
                    <span className="bg-emerald-500/90 text-slate-950 text-xs px-2.5 py-1 rounded-full font-bold shadow">Weekend Special</span>
                  </div>
                </div>
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <h4 className="font-bold text-lg text-white">PulseTrips Elite Oasis Resort - {selectedCountry}</h4>
                    <p className="text-xs text-slate-400 mt-1">Starting from <span className="text-emerald-400 font-bold text-sm">$95 / night</span> + Free Breakfast</p>
                  </div>
                  <button className="mt-4 w-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold py-2.5 rounded-xl transition shadow-lg">
                    Check Live Availability & Book
                  </button>
                </div>
              </div>
            </div>
          </div>

        </main>
      </div>

      {/* 9. FOOTER SECTION (WITH DETAILED OPTIONS & CENTERED COPYRIGHT) */}
      <footer className="border-t border-slate-800 bg-slate-900 mt-16 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
          <div>
            <h5 className="font-bold text-white mb-3 text-xs uppercase tracking-wider text-blue-400">Discover</h5>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li><a href="#" className="hover:text-blue-400">Direct Flights API</a></li>
              <li><a href="#" className="hover:text-blue-400">Global Hotel Beds</a></li>
              <li><a href="#" className="hover:text-blue-400">Trending Cities Guide</a></li>
              <li><a href="#" className="hover:text-blue-400">Airport Taxi Transfers</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white mb-3 text-xs uppercase tracking-wider text-blue-400">Support</h5>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li><a href="#" className="hover:text-blue-400">Partner Help Center</a></li>
              <li><a href="#" className="hover:text-blue-400">API Documentation</a></li>
              <li><a href="#" className="hover:text-blue-400">Withdrawal & Payout FAQ</a></li>
              <li><a href="#" className="hover:text-blue-400">24/7 Live Support Desk</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white mb-3 text-xs uppercase tracking-wider text-blue-400">Partners</h5>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li><a href="#" className="hover:text-blue-400">Affiliate Program</a></li>
              <li><a href="#" className="hover:text-blue-400">Direct Commission System</a></li>
              <li><a href="#" className="hover:text-blue-400">White-label Domain Setup</a></li>
              <li><a href="#" className="hover:text-blue-400">B2B Agent Portal Login</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white mb-3 text-xs uppercase tracking-wider text-blue-400">Terms & Settings</h5>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-400">Financial Security & Ledger</a></li>
              <li><a href="#" className="hover:text-blue-400">Cookie Preferences</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white mb-3 text-xs uppercase tracking-wider text-blue-400">About Aetros</h5>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li><a href="#" className="hover:text-blue-400">Our Corporate Story</a></li>
              <li><a href="#" className="hover:text-blue-400">Global Wholesale Network</a></li>
              <li><a href="#" className="hover:text-blue-400">Press & Media Kit</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact Management</a></li>
            </ul>
          </div>
        </div>

        {/* Centered Copyright & Monogram */}
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-slate-800 flex flex-col items-center justify-center text-center text-xs text-slate-400 space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-xs shadow">AP</div>
            <span className="font-bold text-white tracking-wider">AETROS PULSETRIPS</span>
          </div>
          <p>© 2026 Aetros PulseTrips. All rights reserved. Direct B2B Wholesale Portal with 100% Commission Retention.</p>
          <div className="flex space-x-6 text-[11px] text-slate-500">
            <a href="#" className="hover:text-slate-300">Privacy</a>
            <a href="#" className="hover:text-slate-300">Terms</a>
            <a href="#" className="hover:text-slate-300 text-emerald-400 font-medium">API Status: Fully Operational Online</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
