'use client';
import { useState } from 'react';
import { Plane, Hotel, Globe, Bell, User, ChevronDown } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-[#070d1d] border-b border-slate-800 sticky top-0 z-50">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 text-[11px] font-bold text-center py-1.5 px-4 text-white tracking-wide shadow-inner flex items-center justify-center gap-2">
        <span className="bg-white/20 px-2 py-0.5 rounded text-white animate-pulse">FLASH DEAL</span>
        <span>Get up to 40% wholesale commission on European flight & hotel packages this week!</span>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-black text-slate-950 text-lg shadow-lg">
              P
            </div>
            <span className="text-lg font-black tracking-wider bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent">
              PULSETRIPS
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-xs font-bold text-slate-300">
            <a href="#" className="hover:text-cyan-400 transition">Dashboard</a>
            <a href="#" className="hover:text-cyan-400 transition">Flights (Duffel)</a>
            <a href="#" className="hover:text-cyan-400 transition">Hotels (Hotelbeds)</a>
            <a href="#" className="hover:text-cyan-400 transition">Affiliate Links</a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-300">
            <Globe size={14} className="text-cyan-400" />
            <span>USD / EN</span>
          </div>
          <button className="relative bg-slate-900 hover:bg-slate-800 border border-slate-800 p-2 rounded-xl text-slate-300 transition">
            <Bell size={16} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></span>
          </button>
          <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl text-xs font-bold text-white">
            <div className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <User size={14} />
            </div>
            <span>Aetros Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
}

