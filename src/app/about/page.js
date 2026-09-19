'use client';
import Link from 'next/link';

export default function AboutPage() {
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
            <span className="block text-[10px] text-slate-400 tracking-widest uppercase">About Our Global Travel Network</span>
          </div>
        </Link>
        <Link href="/" className="text-xs bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-4 py-2 rounded-xl transition shadow-lg">
          ← Back to Main Portal
        </Link>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow max-w-4xl mx-auto px-6 py-12 w-full space-y-8">
       
        {/* Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 md:p-12 rounded-3xl border border-slate-800 shadow-2xl space-y-4 text-center">
          <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full inline-block">
            🌟 Empowering Next-Gen Travel Entrepreneurs
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-white">About Aetros PulseTrips</h1>
          <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Revolutionizing B2B travel distribution, wholesale inventory, and high-performance affiliate integrations worldwide.
          </p>
        </div>

        {/* Content Details */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-8 shadow-xl text-xs md:text-sm text-slate-300 leading-relaxed">
         
          <div className="space-y-2">
            <h3 className="text-base font-bold text-white">Our Mission</h3>
            <p>
              Aetros PulseTrips is engineered to bridge the gap between high-performance affiliate traffic (such as Pinterest campaigns and travel landing pages) and global wholesale travel inventory like Duffel and Hotelbeds. We provide robust tools for travel marketers and agencies to scale effortlessly.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-base font-bold text-white">What We Offer</h3>
            <p>
              From real-time cascading airport and hotel filters to multi-currency and multi-language wholesale booking engines, our platform is built from the ground up for speed, reliability, and security.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-base font-bold text-white">Direct Support & Inquiries</h3>
            <p>
              We believe in direct communication and strong partner relationships. For any partnership proposals, technical onboarding, or general queries, reach out directly to our official support team at:
            </p>
            <div className="pt-2">
              <a href="mailto:aetros.official@gmail.com" className="text-indigo-400 font-bold hover:underline text-base">
                aetros.official@gmail.com
              </a>
            </div>
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
