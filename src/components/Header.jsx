'use client';
import { useState } from 'react';
import { Globe, DollarSign } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-[#070d1d] border-b border-slate-800 text-white flex flex-col">
      {/* 1. Sub se top center mein blinking deal banner */}
      <div className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-center py-2 px-4 text-xs font-extrabold tracking-wide animate-pulse">
        🔥 Limited Deal: Save up to 40% on Flights, eSIMs & Tour Tickets Worldwide!
      </div>

      {/* 2. Book now ke oper wali line mein currency, language, signup, signin */}
      <div className="flex justify-end items-center gap-3 px-6 py-2 bg-[#050914] border-b border-slate-800/60 text-xs">
        <div className="flex items-center gap-1 text-gray-300 bg-slate-900 px-2 py-1 rounded border border-slate-700">
          <DollarSign size={13} className="text-cyan-400" />
          <select className="bg-transparent text-white outline-none cursor-pointer text-xs font-semibold">
            <option value="USD" className="bg-slate-900">USD</option>
            <option value="EUR" className="bg-slate-900">EUR</option>
            <option value="GBP" className="bg-slate-900">GBP</option>
          </select>
        </div>

        <div className="flex items-center gap-1 text-gray-300 bg-slate-900 px-2 py-1 rounded border border-slate-700">
          <Globe size={13} className="text-cyan-400" />
          <select className="bg-transparent text-white outline-none cursor-pointer text-xs font-semibold">
            <option value="English" className="bg-slate-900">English</option>
            <option value="Urdu" className="bg-slate-900">Urdu</option>
            <option value="French" className="bg-slate-900">French</option>
          </select>
        </div>

        <button className="text-gray-300 hover:text-white px-2.5 py-1 font-semibold transition">
          Sign In
        </button>
        <button className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold px-3 py-1.5 rounded transition shadow">
          Register / Signup
        </button>
      </div>

      {/* 3. Main Header Section */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left Side: Logo & Brand Name */}
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 text-white font-black p-2.5 rounded-xl text-sm tracking-wider shadow-md">
            AP
          </div>
          <div className="flex flex-col">
            <span className="font-black tracking-tight text-white text-base">AETROS PULSETRIPS</span>
            <span className="text-[10px] text-cyan-400 tracking-wider font-semibold">B2B GLOBAL TRAVEL NETWORK</span>
          </div>
        </div>

        {/* Center Navigation: Bade, Bold aur Boxed */}
        <nav className="hidden xl:flex items-center gap-2.5">
          {[
            'Home',
            'Flights',
            'Stay',
            'Hotels',
            'Airport Taxi',
            'Car Rental',
            'Rail',
            'Buses'
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-700 text-sm font-extrabold text-gray-100 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition shadow-md"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right Side: Blinking Book Now Button */}
        <div>
          <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black px-6 py-3 rounded-xl shadow-lg animate-pulse hover:scale-105 transition text-sm">
            BOOK NOW 🚀
          </button>
        </div>
      </div>
    </header>
  );
}

