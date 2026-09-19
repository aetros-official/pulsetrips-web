'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [currency, setCurrency] = useState('USD');
  const [language, setLanguage] = useState('en');
  const [activeMenu, setActiveMenu] = useState('dashboard');

  // Cascading Filters State
  const [selectedRegion, setSelectedRegion] = useState('Europe');
  const [selectedCountry, setSelectedCountry] = useState('France');
  const [selectedCity, setSelectedCity] = useState('Paris');

  // Comprehensive World Currencies (PKR excluded)
  const currencies = ['USD', 'EUR', 'GBP', 'AED', 'SAR', 'CHF', 'CAD', 'AUD', 'JPY', 'SGD', 'CNY', 'INR', 'ZAR', 'BRL', 'MXN'];

  // Comprehensive World Languages
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ar', name: 'العربية (Arabic)' },
    { code: 'es', name: 'Español (Spanish)' },
    { code: 'fr', name: 'Français (French)' },
    { code: 'de', name: 'Deutsch (German)' },
    { code: 'zh', name: '中文 (Chinese)' },
    { code: 'ja', name: '日本語 (Japanese)' },
    { code: 'hi', name: 'हिन्दी (Hindi)' },
    { code: 'tr', name: 'Türkçe (Turkish)' }
  ];

  // Detailed Cascading Data mapping regions -> countries -> cities -> airports/hotels
  const globalData = {
    'Europe': {
      countries: {
        'France': {
          cities: ['Paris', 'Nice', 'Lyon', 'Marseille'],
          airports: ['Charles de Gaulle (CDG)', 'Orly (ORY)', 'Nice Côte d\'Azur (NCE)'],
          hotels: ['Le Meurice Paris', 'Hotel Plaza Athenee', 'InterContinental Paris Le Grand']
        },
        'Italy': {
          cities: ['Rome', 'Milan', 'Venice', 'Florence'],
          airports: ['Fiumicino (FCO)', 'Malpensa (MXP)', 'Venice Marco Polo (VCE)'],
          hotels: ['The Gritti Palace Venice', 'Hotel Principe di Savoia', 'Hotel de Russie Rome']
        },
        'Spain': {
          cities: ['Barcelona', 'Madrid', 'Seville', 'Valencia'],
          airports: ['Adolfo Suárez Madrid–Barajas (MAD)', 'Barcelona–El Prat (BCN)'],
          hotels: ['Hotel Arts Barcelona', 'The Westin Palace Madrid', 'Mandarin Oriental Barcelona']
        },
        'Switzerland': {
          cities: ['Zurich', 'Geneva', 'Interlaken', 'Zermatt'],
          airports: ['Zurich Airport (ZRH)', 'Geneva Airport (GVA)'],
          hotels: ['Baur au Lac Zurich', 'The Omnia Zermatt', 'Four Seasons Hotel des Bergues Geneva']
        }
      }
    },
    'Middle East': {
      countries: {
        'UAE': {
          cities: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ras Al Khaimah'],
          airports: ['Dubai International (DXB)', 'Abu Dhabi International (AUH)'],
          hotels: ['Burj Al Arab Jumeirah', 'Atlantis The Royal', 'Armani Hotel Dubai']
        },
        'Saudi Arabia': {
          cities: ['Riyadh', 'Jeddah', 'Mecca', 'Medina'],
          airports: ['King Khalid International (RUH)', 'King Abdulaziz International (JED)'],
          hotels: ['Ritz-Carlton Riyadh', 'Rosewood Jeddah', 'Fairway Hotel Makkah']
        },
        'Qatar': {
          cities: ['Doha', 'Al Wakrah', 'Al Khor'],
          airports: ['Hamad International (DOH)'],
          hotels: ['St. Regis Doha', 'Mandarin Oriental Doha', 'W Doha']
        }
      }
    },
    'Asia Pacific': {
      countries: {
        'Japan': {
          cities: ['Tokyo', 'Kyoto', 'Osaka', 'Hokkaido'],
          airports: ['Narita International (NRT)', 'Haneda (HND)', 'Kansai (KIX)'],
          hotels: ['Aman Tokyo', 'The Ritz-Carlton Kyoto', 'Conrad Osaka']
        },
        'Singapore': {
          cities: ['Singapore'],
          airports: ['Changi Airport (SIN)'],
          hotels: ['Marina Bay Sands', 'Fullerton Hotel Singapore', 'Raffles Singapore']
        },
        'Thailand': {
          cities: ['Bangkok', 'Phuket', 'Chiang Mai', 'Pattaya'],
          airports: ['Suvarnabhumi (BKK)', 'Phuket International (HKT)'],
          hotels: ['Mandarin Oriental Bangkok', 'Rosewood Phuket', 'Four Seasons Chiang Mai']
        }
      }
    },
    'North America': {
      countries: {
        'United States': {
          cities: ['New York', 'Los Angeles', 'Miami', 'Las Vegas', 'San Francisco'],
          airports: ['JFK International (JFK)', 'LAX Airport (LAX)', 'Miami International (MIA)'],
          hotels: ['The Plaza New York', 'Beverly Hills Hotel', 'Faena Hotel Miami Beach']
        },
        'Canada': {
          cities: ['Toronto', 'Vancouver', 'Montreal', 'Calgary'],
          airports: ['Toronto Pearson (YYZ)', 'Vancouver International (YVR)'],
          hotels: ['Fairmont Le Château Frontenac', 'Shangri-La Vancouver', 'The Ritz-Carlton Toronto']
        }
      }
    }
  };

  const currentCountries = Object.keys(globalData[selectedRegion]?.countries || {});
  const currentCityList = globalData[selectedRegion]?.countries[selectedCountry]?.cities || [];
  const currentAirports = globalData[selectedRegion]?.countries[selectedCountry]?.airports || [];
  const currentHotels = globalData[selectedRegion]?.countries[selectedCountry]?.hotels || [];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
     
      {/* ================= TOPBAR ================= */}
      <header className="border-b border-slate-800 bg-slate-900/95 backdrop-blur sticky top-0 z-50">
        {/* Row 1: Brand Monogram, Main Navigation Links & Blinking Book Now Button */}
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap justify-between items-center gap-4 border-b border-slate-800/60">
         
          {/* Monogram / Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center font-black text-white shadow-lg shadow-indigo-600/30">
              AP
            </div>
            <div>
              <span className="text-xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-cyan-400">
                AETROS PULSETRIPS
              </span>
              <span className="block text-[10px] text-slate-400 tracking-widest uppercase">B2B Global Travel Network</span>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden xl:flex items-center space-x-6 text-sm font-medium text-slate-300">
            <Link href="/" className="hover:text-indigo-400 transition">Home</Link>
            <Link href="#flights" className="hover:text-indigo-400 transition">Flights</Link>
            <Link href="#stays" className="hover:text-indigo-400 transition">Stays</Link>
            <Link href="#hotels" className="hover:text-indigo-400 transition">Hotels</Link>
            <Link href="#taxi" className="hover:text-indigo-400 transition">Airport Taxi</Link>
            <Link href="#cars" className="hover:text-indigo-400 transition">Car Rental</Link>
            <Link href="#buses" className="hover:text-indigo-400 transition">Buses</Link>
            <Link href="#rail" className="hover:text-indigo-400 transition">Rail</Link>
          </nav>

          {/* Blinking Book Now Button & Support Email */}
          <div className="flex items-center space-x-4">
            <span className="hidden 2xl:inline text-xs text-slate-400">
              Support: <a href="mailto:aetros.official@gmail.com" className="text-indigo-400 hover:underline">aetros.official@gmail.com</a>
            </span>
            <Link
              href="#booknow"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-xl text-xs font-bold tracking-wide uppercase transition shadow-lg shadow-indigo-600/50 animate-pulse border border-indigo-400/40"
            >
              Book Now ⚡
            </Link>
          </div>
        </div>

        {/* Row 2: Secondary Line for Register, Sign In, Language, Currency */}
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap justify-between items-center gap-3 bg-slate-950/40 text-xs">
          <div className="flex items-center space-x-4 text-slate-400">
            <span>🌐 B2B Wholesale Portal Active</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Direct Duffel & Hotelbeds API Integrated</span>
          </div>

          <div className="flex items-center space-x-3 flex-wrap">
            {/* World Currency Selector */}
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-white focus:outline-none focus:border-indigo-500"
            >
              {currencies.map((curr) => (
                <option key={curr} value={curr}>{curr}</option>
              ))}
            </select>

            {/* World Language Selector */}
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-white focus:outline-none focus:border-indigo-500"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>{lang.name}</option>
              ))}
            </select>

            <div className="h-4 w-px bg-slate-800"></div>

            <Link href="/auth" className="text-slate-300 hover:text-white font-medium px-2 py-1 transition">
              Sign In
            </Link>
            <Link href="/auth" className="bg-slate-800 hover:bg-slate-700 text-indigo-400 font-semibold px-3 py-1 rounded-lg border border-slate-700 transition">
              Register / Signup
            </Link>
          </div>
        </div>
      </header>

      {/* ================= MAIN BODY WITH SIDEBAR ================= */}
      <div className="flex flex-grow">
       
        {/* Sidebar */}
        <aside className="w-72 bg-slate-900 border-r border-slate-800 p-6 hidden md:flex flex-col justify-between shrink-0">
          <div className="space-y-6">
           
            {/* Core Navigation */}
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">Portal Management</h3>
              <nav className="space-y-1">
                {[
                  { id: 'dashboard', label: 'Dashboard Overview', icon: '📊' },
                  { id: 'programs', label: 'Programs & Perks', icon: '🌟' },
                  { id: 'performance', label: 'Performance Analytics', icon: '📈' },
                  { id: 'booking', label: 'Booking Management', icon: '📑' },
                  { id: 'analytics', label: 'Contact Analytics', icon: '👥' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveMenu(item.id)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-medium transition flex items-center space-x-2.5 ${activeMenu === item.id ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 font-semibold' : 'text-slate-300 hover:bg-slate-800/80'}`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Finance & Payouts */}
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">Finance & Payouts</h3>
              <nav className="space-y-1 text-xs text-slate-300">
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-slate-400">Balance Breakdown:</span>
                    <span className="text-emerald-400 font-bold">$24,850.00</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-slate-400">Payout History:</span>
                    <span className="text-indigo-400 underline cursor-pointer">View All</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-slate-400">Payout Method:</span>
                    <span className="text-slate-200 font-medium">Wire / Crypto</span>
                  </div>
                </div>
              </nav>
            </div>

            {/* Affiliate & White Label */}
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">Affiliate & White Label</h3>
              <nav className="space-y-1">
                {[
                  { id: 'affiliate', label: 'Affiliate Network Tools', icon: '🔗' },
                  { id: 'whitelabel', label: 'White Label Widgets', icon: '🧩' },
                  { id: 'referral', label: 'Referral Program', icon: '🎁' },
                  { id: 'blog', label: 'Partner Blog & Insights', icon: '📰' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveMenu(item.id)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-medium transition flex items-center space-x-2.5 ${activeMenu === item.id ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 font-semibold' : 'text-slate-300 hover:bg-slate-800/80'}`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>

          </div>

          {/* Help Center Widget */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs space-y-2 mt-6">
            <p className="font-bold text-slate-200">Help Center & Support</p>
            <p className="text-[11px] text-slate-400">Direct assistance for B2B API integrations:</p>
            <a href="mailto:aetros.official@gmail.com" className="text-indigo-400 hover:underline break-all block font-medium">
              aetros.official@gmail.com
            </a>
          </div>
        </aside>

        {/* ================= CONTENT AREA ================= */}
        <main className="flex-grow p-6 md:p-10 space-y-12 max-w-6xl mx-auto w-full">
         
          {/* HERO BANNER SECTION */}
          <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 md:p-12 flex flex-col justify-center min-h-[300px]">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:20px_20px]"></div>
            <div className="relative z-10 max-w-3xl space-y-4">
              <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full inline-block">
                ✨ Empowering Global B2B Travel Partnerships
              </span>
              <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Discover, Book & Manage Luxury Travel at Wholesale Scale.
              </h1>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                Connect seamlessly with Duffel flight inventory and Hotelbeds global accommodations. Engineered for high-performance travel entrepreneurs and affiliate networks.
              </p>
            </div>
          </div>

          {/* DYNAMIC CASCADING FILTERS BAR (Airports & Hotels Separate Filters) */}
          <div className="bg-slate-900/95 backdrop-blur p-6 md:p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-6">
            <div className="flex justify-between items-center flex-wrap gap-2">
              <h2 className="text-lg font-bold flex items-center space-x-2">
                <span>🎛️</span>
                <span>Advanced Cascading Region, Country & City Filters</span>
              </h2>
              <span className="text-xs text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                Live Data Synchronized ({currency})
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
             
              {/* Select Region */}
              <div>
                <label className="block text-xs text-slate-400 mb-1.5 font-semibold">1. Select Region</label>
                <select
                  value={selectedRegion}
                  onChange={(e) => {
                    const reg = e.target.value;
                    setSelectedRegion(reg);
                    const countriesInReg = Object.keys(globalData[reg]?.countries || {});
                    const firstCountry = countriesInReg[0] || '';
                    setSelectedCountry(firstCountry);
                    const citiesInCountry = globalData[reg]?.countries[firstCountry]?.cities || [];
                    setSelectedCity(citiesInCountry[0] || '');
                  }}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-indigo-500"
                >
                  {Object.keys(globalData).map((reg) => (
                    <option key={reg} value={reg}>{reg}</option>
                  ))}
                </select>
              </div>

              {/* Select Country (Cascading) */}
              <div>
                <label className="block text-xs text-slate-400 mb-1.5 font-semibold">2. Select Country</label>
                <select
                  value={selectedCountry}
                  onChange={(e) => {
                    const ctry = e.target.value;
                    setSelectedCountry(ctry);
                    const citiesInCtry = globalData[selectedRegion]?.countries[ctry]?.cities || [];
                    setSelectedCity(citiesInCtry[0] || '');
                  }}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-indigo-500"
                >
                  {currentCountries.map((country) => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>

              {/* Select City (Cascading) */}
              <div>
                <label className="block text-xs text-slate-400 mb-1.5 font-semibold">3. Select City</label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-indigo-500"
                >
                  {currentCityList.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              {/* Action Button */}
              <div className="flex items-end">
                <button className="w-full bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold py-3 rounded-xl text-sm transition shadow-lg shadow-indigo-600/30">
                  Search Inventory 🚀
                </button>
              </div>
            </div>

            {/* Dynamic Results Preview based on Selection */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-slate-400 font-semibold block mb-1">✈️ Famous Airports in {selectedCity}, {selectedCountry}:</span>
                <div className="flex flex-wrap gap-1.5">
                  {currentAirports.map((apt, i) => (
                    <span key={i} className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-lg text-indigo-300">{apt}</span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-slate-400 font-semibold block mb-1">🏨 Top Wholesale Hotels in {selectedCity}:</span>
                <div className="flex flex-wrap gap-1.5">
                  {currentHotels.map((htl, i) => (
                    <span key={i} className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-lg text-cyan-300">{htl}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* BROWSE BY PROPERTY TYPE (9 to 12 Property Types with Pictures) */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold text-slate-100">Browse by Property Type</h3>
                <p className="text-xs text-slate-400">Select accommodation categories tailored for your clients</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { title: 'Luxury Hotels', count: '4,210 Stays', img: '🏨' },
                { title: 'Apartments', count: '2,930 Units', img: '🏢' },
                { title: 'Resorts', count: '1,450 Resorts', img: '🌴' },
                { title: 'Villas', count: '890 Villas', img: '🏡' },
                { title: 'Glass Igloos', count: '120 Igloos', img: '❄️' },
                { title: 'Overwater Bungalows', count: '340 Stays', img: '🌊' },
                { title: 'Eco Lodges', count: '560 Lodges', img: '🌿' },
                { title: 'Boutique Hotels', count: '1,120 Stays', img: '🏛️' },
                { title: 'Penthouses', count: '310 Suites', img: '🏙️' },
                { title: 'Private Chalets', count: '450 Chalets', img: '⛷️' },
                { title: 'Castles & Palaces', count: '95 Estates', img: '👑' },
                { title: 'Yacht Stays', count: '180 Yachts', img: '⛵' }
              ].map((prop, idx) => (
                <div key={idx} className="group bg-slate-900 border border-slate-800 rounded-2xl p-4 hover:border-indigo-500/60 transition cursor-pointer flex flex-col justify-between shadow-md hover:-translate-y-1">
                  <div className="text-3xl mb-3 bg-slate-950 w-12 h-12 rounded-xl flex items-center justify-center border border-slate-800 group-hover:scale-110 transition">
                    {prop.img}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white group-hover:text-indigo-400 transition">{prop.title}</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">{prop.count}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* WORLD FAMOUS TRENDING DESTINATIONS (8 to 10 Pictures / Cards) */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold text-slate-100">Trending Global Destinations</h3>
                <p className="text-xs text-slate-400">Top-booked destinations corresponding to your selected region: <span className="text-indigo-400 font-semibold">{selectedRegion}</span></p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { city: 'Dubai, UAE', rate: 'From $190/night', tag: 'Luxury & Beach', bg: 'from-amber-600/20 to-slate-900' },
                { city: 'Paris, France', rate: 'From $210/night', tag: 'Romantic & Historic', bg: 'from-purple-600/20 to-slate-900' },
                { city: 'Tokyo, Japan', rate: 'From $170/night', tag: 'Modern Skyline', bg: 'from-cyan-600/20 to-slate-900' },
                { city: 'Rome, Italy', rate: 'From $160/night', tag: 'Ancient Heritage', bg: 'from-rose-600/20 to-slate-900' },
                { city: 'Zurich, Switzerland', rate: 'From $290/night', tag: 'Alpine Luxury', bg: 'from-blue-600/20 to-slate-900' },
                { city: 'New York, USA', rate: 'From $250/night', tag: 'Metropolitan', bg: 'from-emerald-600/20 to-slate-900' },
                { city: 'Singapore', rate: 'From $220/night', tag: 'Tropical Hub', bg: 'from-indigo-600/20 to-slate-900' },
                { city: 'Barcelona, Spain', rate: 'From $150/night', tag: 'Coastal Culture', bg: 'from-orange-600/20 to-slate-900' }
              ].map((dest, idx) => (
                <div key={idx} className={`bg-gradient-to-br ${dest.bg} border border-slate-800 rounded-2xl p-5 hover:border-indigo-500/60 transition cursor-pointer shadow-lg group hover:-translate-y-1`}>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-bold bg-slate-950/80 px-2.5 py-1 rounded-full text-indigo-300 border border-slate-800">
                      {dest.tag}
                    </span>
                    <span className="text-xs font-semibold text-emerald-400">{dest.rate}</span>
                  </div>
                  <h4 className="font-bold text-lg text-white group-hover:text-indigo-400 transition">{dest.city}</h4>
                  <p className="text-xs text-slate-300 mt-1">Wholesale B2B inventory active</p>
                </div>
              ))}
            </div>
          </div>

          {/* QUICK & EASY TRIP PLANNER */}
          <div className="bg-slate-900 p-6 md:p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-6">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-slate-100">Quick & Easy Trip Planner</h3>
              <p className="text-xs text-slate-400">Curated itineraries and expedition themes for travelers</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { name: 'Food & Cooking', desc: 'Culinary tours & masterclasses', icon: '🍲' },
                { name: 'Photography', desc: 'Scenic landscapes & guides', icon: '📸' },
                { name: 'Festival & Events', desc: 'Global cultural carnivals', icon: '🎉' },
                { name: 'Historical Expeditions', desc: 'Ancient monuments & heritage', icon: '🏛️' },
                { name: 'Shopping Getaways', desc: 'Luxury malls & fashion weeks', icon: '🛍️' }
              ].map((plan, idx) => (
                <div key={idx} className="bg-slate-950 border border-slate-800 p-4 rounded-2xl hover:border-indigo-500/50 transition cursor-pointer space-y-2">
                  <div className="text-2xl">{plan.icon}</div>
                  <h4 className="font-bold text-sm text-white">{plan.name}</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{plan.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* STAY AT TOP UNIQUE PROPERTIES & WEEKEND DEALS */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold text-slate-100">Stay at Top Unique Properties & Weekend Deals</h3>
                <p className="text-xs text-slate-400">Exclusive weekend rates for <span className="text-indigo-400 font-semibold">{selectedCity}, {selectedCountry}</span></p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: `Grand Luxury Suites ${selectedCity}`, rating: '⭐ 4.9/5', price: '$240/night', discount: '25% OFF Weekend Deal', badge: 'Best Seller' },
                { name: `Boutique Skyline Resort ${selectedCity}`, rating: '⭐ 4.8/5', price: '$195/night', discount: '20% OFF Special', badge: 'High Demand' },
                { name: `Scenic Cliffside Villa ${selectedCity}`, rating: '⭐ 5.0/5', price: '$320/night', discount: '30% OFF Early Bird', badge: 'Exclusive' }
              ].map((deal, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl hover:border-indigo-500/60 transition space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2.5 py-1 rounded-full">
                      {deal.badge}
                    </span>
                    <span className="text-xs font-bold text-amber-400">{deal.rating}</span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-base text-white">{deal.name}</h4>
                    <p className="text-xs text-emerald-400 font-semibold">{deal.discount}</p>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-slate-800">
                    <span className="text-sm font-black text-white">{deal.price}</span>
                    <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-xl text-xs font-semibold transition">
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* REGISTER / SIGN IN PROMPT BANNER */}
          <div className="bg-gradient-to-r from-indigo-900/60 via-slate-900 to-cyan-950/60 p-8 rounded-3xl border border-indigo-500/30 text-center space-y-4">
            <h3 className="text-2xl font-black text-white">Ready to Scale Your Travel Business?</h3>
            <p className="text-xs md:text-sm text-slate-300 max-w-xl mx-auto">
              Join hundreds of successful affiliate marketers and travel agencies using Aetros PulseTrips for live wholesale bookings.
            </p>
            <div className="flex justify-center space-x-4 pt-2">
              <Link href="/auth" className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-2.5 rounded-xl text-xs transition shadow-lg">
                Register / Signup
              </Link>
              <Link href="/auth" className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-2.5 rounded-xl text-xs transition border border-slate-700">
                Sign In
              </Link>
            </div>
          </div>

          {/* POPULAR WITH TRAVELERS FROM REGION/COUNTRIES LIST */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-200">Popular with Travelers from {selectedRegion} ({selectedCountry})</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              {currentCityList.map((ct, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 p-3.5 rounded-xl text-slate-300 hover:border-indigo-500/50 transition cursor-pointer flex justify-between items-center">
                  <span>{ct} Stays</span>
                  <span className="text-indigo-400">→</span>
                </div>
              ))}
            </div>
          </div>

        </main>
      </div>

      {/* ================= FOOTER (5 to 7 Options with Detailed Links & Center Copyright) ================= */}
      <footer className="border-t border-slate-800 bg-slate-900/80 pt-12 pb-8 px-6 text-xs text-slate-400 space-y-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
         
          {/* Column 1: Discover */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Discover</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-indigo-400 transition">Trending Cities</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition">Unique Properties</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition">Seasonal Deals</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition">Flight Routes</Link></li>
            </ul>
          </div>

          {/* Column 2: Support */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Support</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-indigo-400 transition">Help Center</Link></li>
              <li><Link href="mailto:aetros.official@gmail.com" className="hover:text-indigo-400 transition">Official Email</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition">API Documentation</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition">Partner Security</Link></li>
            </ul>
          </div>

          {/* Column 3: Partners */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Partners</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-indigo-400 transition">Affiliate Networks</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition">White Label Solutions</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition">Hotelbeds Wholesale</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition">Duffel Ticketing</Link></li>
            </ul>
          </div>

          {/* Column 4: Terms & Settings */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Terms & Settings</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-indigo-400 transition">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition">Cookie Preferences</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition">Compliance</Link></li>
            </ul>
          </div>

          {/* Column 5: About */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">About</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-indigo-400 transition">Our Story</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition">Press & Media</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition">Careers</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition">Global Offices</Link></li>
            </ul>
          </div>

          {/* Column 6: Connect / Contact */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Official Contact</h4>
            <p className="text-[11px] text-slate-400">Direct inquiries & support requests:</p>
            <a href="mailto:aetros.official@gmail.com" className="text-indigo-400 hover:underline font-medium block break-all">
              aetros.official@gmail.com
            </a>
          </div>

        </div>

        {/* Centered Copyright & Monogram Footer Line */}
        <div className="border-t border-slate-800/80 pt-8 mt-8 text-center space-y-2">
          <div className="flex justify-center items-center space-x-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center font-black text-white text-[10px]">
              AP
            </div>
            <span className="font-bold text-slate-200">Aetros PulseTrips</span>
          </div>
          <p>© 2026 Aetros PulseTrips. All rights reserved. B2B Global Travel Solutions.</p>
          <p className="text-[11px] text-slate-500">Official Support Contact: <a href="mailto:aetros.official@gmail.com" className="text-indigo-400 hover:underline">aetros.official@gmail.com</a></p>
        </div>
      </footer>

    </div>
  );
}
