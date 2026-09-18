'use client';
import { useState } from 'react';

export default function Home() {
  const [origin, setOrigin] = useState('LHE');
  const [destination, setDestination] = useState('DXB');
  const [departureDate, setDepartureDate] = useState('2026-10-15');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResults(null);

    try {
      const res = await fetch('/api/flights/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ origin, destination, departureDate, passengers: 1 }),
      });

      const data = await res.json();
      setResults(data);
    } catch (err) {
      console.error('Error fetching flights:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Aetros B2B Flight Search</h1>
      <form onSubmit={handleSearch} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          value={origin}
          onChange={(e) => setOrigin(e.target.value.toUpperCase())}
          placeholder="Origin (e.g. LHE)"
          required
        />
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value.toUpperCase())}
          placeholder="Destination (e.g. DXB)"
          required
        />
        <input
          type="date"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Searching...' : 'Search Flights'}
        </button>
      </form>

      {results && (
        <pre style={{ background: '#f4f4f4', padding: '10px', borderRadius: '5px' }}>
          {JSON.stringify(results, null, 2)}
        </pre>
      )}
    </div>
  );
}
