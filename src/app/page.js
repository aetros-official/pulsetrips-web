'use client';

import { useState } from 'react';

export default function Home() {
  const [origin, setOrigin] = useState('LHE');
  const [destination, setDestination] = useState('DXB');
  const [departureDate, setDepartureDate] = useState('2026-10-15');
  const [passengers, setPassengers] = useState(1);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResults(null);

    try {
      const res = await fetch('/api/flights/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          origin,
          destination,
          departure_date: departureDate,
          passengers: Number(passengers),
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to fetch flights');
      setResults(data.data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-12 font-sans dir-ltr">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <header className="border-b pb-4 border-slate-200">
          <h1 className="text-2xl font-bold text-slate-800">Aetros PulseTrips</h1>
          <p className="text-sm text-slate-500">B2B Flight Search & Booking Portal</p>
        </header>

        {/* Search Box */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-700 mb-4">Search Flights</h2>
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">ORIGIN (IATA)</label>
              <input
                type="text"
                value={origin}
                onChange={(e) => setOrigin(e.target.value.toUpperCase())}
                className="w-full p-2.5 border rounded-lg uppercase text-slate-800 font-mono focus:ring-2 focus:ring-blue-500"
                maxLength={3}
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">DESTINATION (IATA)</label>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value.toUpperCase())}
                className="w-full p-2.5 border rounded-lg uppercase text-slate-800 font-mono focus:ring-2 focus:ring-blue-500"
                maxLength={3}
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">DEPARTURE DATE</label>
              <input
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="w-full p-2.5 border rounded-lg text-slate-800 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">PASSENGERS</label>
              <input
                type="number"
                min={1}
                max={9}
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="w-full p-2.5 border rounded-lg text-slate-800 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="md:col-span-4 mt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors disabled:bg-blue-300"
              >
                {loading ? 'Searching Duffel API...' : 'Search Flights'}
              </button>
            </div>
          </form>
        </div>

        {/* Errors */}
        {error && (
          <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
            <strong>Error:</strong> {error}
          </div>
        )}

        {/* Results */}
        {results && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800">Flight Results ({results.length})</h3>
            {results.length === 0 ? (
              <p className="text-slate-500">No flights found for this route.</p>
            ) : (
              results.map((offer) => (
                <div key={offer.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex justify-between items-center">
                  <div>
                    <span className="text-xs font-bold bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {offer.owner?.name || 'Airline'}
                    </span>
                    <p className="text-sm text-slate-600 mt-2">
                      Offers ID: <code className="text-xs bg-slate-100 p-1 rounded">{offer.id}</code>
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-emerald-600">
                      {offer.total_amount} {offer.total_currency}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </main>
  );
}
