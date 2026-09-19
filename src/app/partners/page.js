'use client';
import Link from 'next/link';

export default function PartnersPage() {
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
            <span className="block text-[10px] text-slate-400 tracking-widest uppercase">Global Affiliate & Wholesale Partners</span>
          </div>
        </Link>
        <Link href="/" className="text-xs bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-4 py-2 rounded-xl transition shadow-lg">
          ← Back to Main Portal
        </Link>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow max-w-5xl mx-auto px-6 py-12 w-full space-y-12">
       
        {/* Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 md:p-12 rounded-3xl border border-slate-800 shadow-2xl space-y-4 text-center">
          <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full inline-block">
            🤝 B2B Affiliate & White Label Network
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-white">Scale Your Travel Business with Aetros</h1>
          <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Integrate high-converting travel links, white-label booking engines, and leverage global wholesale inventories.
          </p>
          <div className="pt-2">
            <span className="text-xs text-slate-400">Partner Inquiry Contact: </span>
            <a href="mailto:aetros.official@gmail.com" className="text-indigo-400 font-bold hover:underline ml-1">
              aetros.official@gmail.com
            </a>
          </div>
        </div>

        {/* Partner Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl">
            <div className="text-3xl">🔗</div>
            <h3 className="text-lg font-bold text-white">Affiliate Networks</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Connect via Travelpayouts, Stay22, and Booking.com APIs to maximize commission earnings from your landing pages and traffic sources.
            </p>
            <Link href="/auth" className="text-xs text-indigo-400 font-semibold hover:underline block pt-2">
              Join Affiliate Program →
            </Link>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl">
            <div className="text-3xl">🧩</div>
            <h3 className="text-lg font-bold text-white">White Label Solutions</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Embed fully branded flight and hotel booking search widgets directly onto your travel blog or dedicated landing pages.
            </p>
            <Link href="/auth" className="text-xs text-indigo-400 font-semibold hover:underline block pt-2">
              Setup White Label →
            </Link>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl">
            <div className="text-3xl">📊</div>
            <h3 className="text-lg font-bold text-white">Wholesale Inventory</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Direct integration with Duffel and Hotelbeds for real-time rates, global airport taxis, car rentals, and luxury stays.
            </p>
            <Link href="/auth" className="text-xs text-indigo-400 font-semibold hover:underline block pt-2">
              Explore API Access →
            </Link>
          </div>

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
