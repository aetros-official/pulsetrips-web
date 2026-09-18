'use client';

import { useState } from 'react';

export default function AetrosPortal() {
  const [activeTab, setActiveTab] = useState('flights');
  const [from, setFrom] = useState('LHE');
  const [to, setTo] = useState('DXB');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [withdrawSuccess, setWithdrawSuccess] = useState(false);

  const handleWithdraw = (e) => {
    e.preventDefault();
    if (withdrawAmount) {
      setWithdrawSuccess(true);
      setWithdrawAmount('');
      setTimeout(() => setWithdrawSuccess(false), 4000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col">
     
      {/* Top Banner & Monogram */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center font-black text-white text-2xl shadow-lg shadow-cyan-500/30">
              A
            </div>
            <div>
              <span className="text-xl font-black tracking-wider text-white">AETROS</span>
              <span className="block text-[10px] text-cyan-400 font-bold uppercase tracking-widest">PulseTrips B2B</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-300">
            <a href="#search" className="hover:text-cyan-400 transition">Flight & Hotels</a>
            <a href="#affiliate" className="hover:text-cyan-400 transition">White-label & API</a>
            <a href="#wallet" className="hover:text-cyan-400 transition">Agent Wallet & Withdraw</a>
          </div>
          <div>
            <span className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold px-4 py-2 rounded-xl">
              Partner Portal Active
            </span>
          </div>
        </div>

        {/* API Links Sub-Bar */}
        <div className="bg-slate-900/90 border-t border-slate-800/60 py-2.5 px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between overflow-x-auto space-x-6 text-xs text-slate-400">
            <span className="font-bold text-slate-200 uppercase tracking-wider flex-shrink-0">API & Affiliates Hub:</span>
            <div className="flex space-x-6 whitespace-nowrap">
              <a href="#duffel" className="hover:text-cyan-400 transition flex items-center space-x-1"><span>✈️</span> <span>Duffel Flights API</span></a>
              <a href="#stay22" className="hover:text-cyan-400 transition flex items-center space-x-1"><span>🏨</span> <span>Stay22 Hotels API</span></a>
              <a href="#travelpayouts" className="hover:text-cyan-400 transition flex items-center space-x-1"><span>🔗</span> <span>Travelpayouts Network</span></a>
              <a href="#whitelabel" className="hover:text-cyan-400 transition flex items-center space-x-1"><span>💼</span> <span>White-label Solution</span></a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Layout with Sidebar */}
      <div className="flex-1 flex flex-col md:flex-row max-w-7xl w-full mx-auto p-4 md:p-6 gap-6">
       
        {/* Sidebar: Affiliate & White-label Options */}
        <aside className="w-full md:w-80 bg-slate-900/70 border border-slate-800/80 rounded-3xl p-6 backdrop-blur-xl space-y-6 h-fit">
          <div>
            <h3 className="text-xs font-black text-cyan-400 uppercase tracking-widest mb-3">Partner Control Panel</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#affiliate" className="block p-3 bg-slate-800/50 hover:bg-slate-800 rounded-xl transition font-medium">🤝 Affiliate Program Dashboard</a></li>
              <li><a href="#whitelabel" className="block p-3 hover:bg-slate-800/50 rounded-xl transition font-medium">🏷️ White-label Custom Domain</a></li>
              <li><a href="#wallet" className="block p-3 hover:bg-slate-800/50 rounded-xl transition font-medium">💳 Income & Payout Methods</a></li>
              <li><a href="#region" className="block p-3 hover:bg-slate-800/50 rounded-xl transition font-medium">🌍 Region & Currency Settings</a></li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-cyan-950/40 to-blue-950/40 border border-cyan-500/20 p-4 rounded-2xl">
            <h4 className="text-xs font-bold text-cyan-400 uppercase">Live Commission Balance</h4>
            <div className="text-2xl font-black text-white mt-1">$4,850.00 <span className="text-xs font-normal text-slate-400">USD</span></div>
            <p className="text-[11px] text-slate-400 mt-2">Instant withdrawal enabled via Bank, Crypto & Wise.</p>
          </div>
        </aside>

        {/* Center Content Area */}
        <main className="flex-1 space-y-8">
         
          {/* Motivational Hero Banner with World Aesthetic Image */}
          <section id="search" className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 p-8 md:p-12 border border-slate-800 shadow-2xl">
            <div className="absolute inset-0 opacity-25 bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center"></div>
            <div className="relative z-10 max-w-2xl space-y-4">
              <span className="bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                Explore The Globe Without Limits
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                "The world is a book, and those who do not travel read only one page."
              </h1>
              <p className="text-slate-300 text-sm md:text-base">
                Book wholesale flights and live hotel rooms worldwide with real-time API pricing.
              </p>
            </div>

            {/* Flight & Hotel Search Box */}
            <div className="relative z-10 mt-8 bg-slate-900/95 border border-slate-800 p-6 rounded-2xl backdrop-blur-xl shadow-xl space-y-4">
              <div className="flex space-x-4 border-b border-slate-800 pb-3">
                <button
                  onClick={() => setActiveTab('flights')}
                  className={`text-sm font-bold pb-1 transition ${activeTab === 'flights' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-slate-400'}`}
                >
                  ✈️ Flights Search
                </button>
                <button
                  onClick={() => setActiveTab('hotels')}
                  className={`text-sm font-bold pb-1 transition ${activeTab === 'hotels' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-slate-400'}`}
                >
                  🏨 Live Hotels & Rooms
                </button>
              </div>

              {activeTab === 'flights' ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">From (Origin)</label>
                    <input type="text" value={from} onChange={(e)=>setFrom(e.target.value)} className="w-full bg-slate-800 border border-slate-700 p-3 rounded-xl text-sm text-white font-mono uppercase outline-none focus:border-cyan-500" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">To (Destination)</label>
                    <input type="text" value={to} onChange={(e)=>setTo(e.target.value)} className="w-full bg-slate-800 border border-slate-700 p-3 rounded-xl text-sm text-white font-mono uppercase outline-none focus:border-cyan-500" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Date</label>
                    <input type="date" defaultValue="2026-10-15" className="w-full bg-slate-800 border border-slate-700 p-3 rounded-xl text-sm text-white outline-none focus:border-cyan-500" />
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">City or Hotel Name</label>
                    <input type="text" defaultValue="Dubai Marina, UAE" className="w-full bg-slate-800 border border-slate-700 p-3 rounded-xl text-sm text-white outline-none focus:border-cyan-500" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Check-in / Out</label>
                    <input type="date" defaultValue="2026-10-20" className="w-full bg-slate-800 border border-slate-700 p-3 rounded-xl text-sm text-white outline-none focus:border-cyan-500" />
                  </div>
                </div>
              )}

              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-95 text-white font-bold py-3.5 rounded-xl transition shadow-lg text-sm uppercase tracking-wider">
                Search Live {activeTab === 'flights' ? 'Wholesale Fares' : 'Hotel Rooms'}
              </button>
            </div>
          </section>

          {/* Region & Currency Settings Section */}
          <section id="region" className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-4">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">🌍 Region & Currency Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-400 mb-1">Select Target Region / Market</label>
                <select className="w-full bg-slate-800 border border-slate-700 text-white p-3 rounded-xl text-sm outline-none">
                  <option>Middle East (GCC - English / Arabic)</option>
                  <option>South Asia (Pakistan / India - PKR / INR)</option>
                  <option>Europe & UK (GBP / EUR)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Display Currency</label>
                <select className="w-full bg-slate-800 border border-slate-700 text-white p-3 rounded-xl text-sm outline-none">
                  <option>USD ($)</option>
                  <option>PKR (Rs)</option>
                  <option>AED (Dh)</option>
                </select>
              </div>
            </div>
          </section>

          {/* Partner Income & Easy Withdrawal Section */}
          <section id="wallet" className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="text-lg font-bold text-white">Partner Income & Withdrawal</h3>
                <p className="text-xs text-slate-400 mt-1">Partners can easily withdraw their affiliate & whitelabel earnings anytime.</p>
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/30 px-4 py-2 rounded-xl text-right">
                <span className="block text-[10px] text-emerald-400 font-bold uppercase">Ready to Withdraw</span>
                <span className="text-xl font-black text-emerald-400">$4,850.00 USD</span>
              </div>
            </div>

            {withdrawSuccess && (
              <div className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 p-4 rounded-xl text-sm font-semibold">
                ✅ Withdrawal request submitted successfully! Funds will be transferred to your selected payout method shortly.
              </div>
            )}

            <form onSubmit={handleWithdraw} className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Withdrawal Amount ($)</label>
                <input
                  type="number"
                  placeholder="Enter amount"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 p-3 rounded-xl text-sm text-white outline-none focus:border-cyan-500"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Payment Method</label>
                <select className="w-full bg-slate-800 border border-slate-700 text-white p-3 rounded-xl text-sm outline-none">
                  <option>Direct Bank Transfer (IBAN / Wire)</option>
                  <option>Wise / Payoneer Account</option>
                  <option>Crypto (USDT / Bitcoin)</option>
                </select>
              </div>
              <div className="flex items-end">
                <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl transition text-sm uppercase tracking-wider shadow-lg">
                  Withdraw Funds Now
                </button>
              </div>
            </form>
          </section>

        </main>
      </div>

      {/* Footer with Policies */}
      <footer className="bg-slate-900 border-t border-slate-800 mt-12 py-10 px-6 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-sm">Aetros PulseTrips</h4>
            <p className="text-slate-400">The ultimate B2B wholesale flight and hotel booking platform powered by advanced API networks.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#search" className="hover:text-cyan-400">Flight Search Engine</a></li>
              <li><a href="#affiliate" className="hover:text-cyan-400">Affiliate Program</a></li>
              <li><a href="#whitelabel" className="hover:text-cyan-400">White-label Solutions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-sm">Legal & Policies</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-cyan-400">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-cyan-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cyan-400">Refund & Payout Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-sm">Support</h4>
            <p>Email: support@pulsetrips.com</p>
            <p className="mt-1">24/7 B2B Agent Assistance</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-slate-800 pt-6 text-center">
          <p>&copy; 2026 Aetros PulseTrips. All rights reserved. Built for professional travel partners.</p>
        </div>
      </footer>

    </div>
  );
}
