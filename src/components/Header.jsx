export default function Navbar() {
  return (
    <header className="w-full bg-[#0b1329] text-white shadow-md">
      {/* Top Blinking Announcement Bar */}
      <div className="bg-amber-500 text-black text-xs sm:text-sm font-bold py-1 text-center animate-pulse">
        ⭐ [Limited Deal: Save up to 40% on Flights, eSIMs & Tour Tickets Worldwide!] ⭐
      </div>

      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-3">
        {/* Upper Row: Logo, Currency, Language, Signup/Signin */}
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
              AP
            </div>
            <div>
              <h1 className="font-extrabold text-base tracking-wider text-cyan-400">AETROS PULSETRIPS</h1>
              <p className="text-[10px] text-gray-300">B2B GLOBAL TRAVEL NETWORK</p>
            </div>
          </div>

          {/* Right Section: Signup/Signin shifted left with Currency & Language */}
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1 bg-slate-800 px-2 py-1 rounded border border-slate-700">
              <span className="text-gray-400 text-[11px]">Currency:</span>
              <select className="bg-transparent text-white focus:outline-none cursor-pointer">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>

            <div className="flex items-center gap-1 bg-slate-800 px-2 py-1 rounded border border-slate-700">
              <span className="text-gray-400 text-[11px]">Lang:</span>
              <select className="bg-transparent text-white focus:outline-none cursor-pointer">
                <option value="en">English</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <button className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-md font-semibold shadow transition">
                Signup
              </button>
              <button className="px-4 py-1.5 bg-slate-700 hover:bg-slate-600 text-white rounded-md font-semibold shadow transition">
                Signin
              </button>
            </div>
          </div>
        </div>

        {/* Middle Row: Navigation Links in Boxes (Balanced Size) */}
        <nav className="flex flex-wrap items-center justify-center gap-2 py-1">
          {['HOME', 'FLIGHTS', 'STAYS', 'HOTELS', 'AIRPORT TAXI', 'CAR RENTAL', 'RAIL', 'BUSES'].map((item) => (
            <a
              key={item}
              href="#"
              className="px-3.5 py-1.5 bg-slate-800/80 hover:bg-blue-600 border border-slate-700 rounded-lg text-xs font-bold tracking-wide transition shadow-sm"
            >
              {item}
            </a>
          ))}

          {/* Blinking Book Now Button */}
          <button className="px-4 py-1.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg text-xs font-extrabold animate-bounce shadow-lg">
            BOOK NOW
          </button>
        </nav>

        {/* Motivational Subtext in Center */}
        <div className="text-center pb-1">
          <p className="text-xs italic text-cyan-300 font-medium tracking-wide">
            ✨ "Discover the world your way – where every journey turns into an unforgettable adventure." ✨
          </p>
        </div>
      </div>
    </header>
  );
}
