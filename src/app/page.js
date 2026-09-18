'use client';

import { useState } from 'react';

export default function B2BDashboard() {
  const [tripType, setTripType] = useState('one-way');
  const [origin, setOrigin] = useState('LHE');
  const [destination, setDestination] = useState('DXB');
  const [departureDate, setDepartureDate] = useState('2026-10-15');
  const [passengers, setPassengers] = useState(1);

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800 flex flex-col md:flex-row">
     
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-slate-900 text-slate-300 p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-xl">
              A
            </div>
            <div>
              <h1 className="font-bold text-white text-lg leading-none">AETROS</h1>
              <span className="text-xs text-blue-400 font-medium">PulseTrips B2B</span>
            </div>
          </div>

          <nav className="space-y-2">
            <a href="#" className="flex items-center space-x-3 bg-blue-600 text-white px-4 py-3 rounded-xl font-medium text-sm">
              <span>✈️ Flight Search</span>
            </a>
            <a href="#" className="flex items-center space-x-3 hover:bg-slate-800 text-slate-400 hover:text-white px-4 py-3 rounded-xl font-medium text-sm transition">
              <span>📋 Bookings</span>
            </a>
            <a href="#" className="flex items-center space-x-3 hover:bg-slate-800 text-slate-400 hover:text-white px-4 py-3 rounded-xl font-medium text-sm transition">
              <span>💳 Agency Wallet</span>
            </a>
            <a href="#" className="flex items-center space-x-3 hover:bg-slate-800 text-slate-400 hover:text-white px-4 py-3 rounded-xl font-medium text-sm transition">
              <span>⚙️ Settings</span>
            </a>
          </nav>
        </div>

        <div className="border-t border-slate-800 pt-4 mt-6">
          <div className="text-xs text-slate-500">
            <p className="font-semibold text-slate-400">Orbit Travel Agency</p>
            <p>ID: AG-88492</p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-10 space-y-8 overflow-y-auto">
       
        {/* Top Bar */}
        <header className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-slate-200">
          <div>
            <h2 className="text-xl font-bold text-slate-800">Flight Search Dashboard</h2>
            <p className="text-xs text-slate-500">Search real-time wholesale fares via Duffel API</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-slate-100 px-3 py-1.5 rounded-lg border text-right">
              <span className="block text-[10px] text-slate-500 uppercase font-semibold">Credit Balance</span>
              <span className="text-sm font-bold text-emerald-600">$12,450.00 USD</span>
            </div>
          </div>
        </header>

        {/* Flight Search Widget */}
        <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-6">
          <div className="flex space-x-4 border-b border-slate-100 pb-4">
            <button
              onClick={() => setTripType('one-way')}
              className={`text-sm font-semibold pb-2 transition ${tripType === 'one-way' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-400'}`}
            >
              One Way
            </button>
            <button
              onClick={() => setTripType('round-trip')}
              className={`text-sm font-semibold pb-2 transition ${tripType === 'round-trip' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-400'}`}
            >
              Round Trip
            </button>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1">FROM (ORIGIN)</label>
              <input
                type="text"
                value={origin}
                onChange={(e) => setOrigin(e.target.value.toUpperCase())}
                className="w-full p-3 border border-slate-200 rounded-xl font-mono text-sm uppercase focus:ring-2 focus:ring-blue-500 outline-none"
                maxLength={3}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1">TO (DESTINATION)</label>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value.toUpperCase())}
                className="w-full p-3 border border-slate-200 rounded-xl font-mono text-sm uppercase focus:ring-2 focus:ring-blue-500 outline-none"
                maxLength={3}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1">DEPARTURE DATE</label>
              <input
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="w-full p-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1">PASSENGERS</label>
              <input
                type="number"
                min={1}
                max={9}
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="w-full p-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="md:col-span-4 mt-2">
              <button
                type="button"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl transition shadow-sm"
              >
                Search Available Flights
              </button>
            </div>
          </form>
        </section>

        {/* Search Results Mock Preview */}
        <section className="space-y-4">
          <h3 className="text-base font-bold text-slate-700">Available Flight Offers</h3>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-blue-300 transition">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center font-bold text-slate-700 text-xs">
                EK
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">Emirates Airlines</h4>
                <p className="text-xs text-slate-500">LHE ➔ DXB • Direct • 3h 15m</p>
              </div>
            </div>

            <div className="text-right w-full md:w-auto flex md:flex-col justify-between items-center md:items-end border-t md:border-0 pt-3 md:pt-0">
              <span className="text-xs text-slate-400">Agent Wholesale Price</span>
              <span className="text-xl font-extrabold text-emerald-600">$340.00 USD</span>
              <button className="mt-2 bg-slate-900 text-white text-xs px-4 py-2 rounded-lg font-medium hover:bg-slate-800">
                Book Seat
              </button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
