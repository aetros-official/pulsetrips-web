'use client';
import { useState } from 'react';

export default function DiscoverPage() {
  const [flightData, setFlightData] = useState(null);
  const [hotelData, setHotelData] = useState(null);
  const [loadingFlights, setLoadingFlights] = useState(false);
  const [loadingHotels, setLoadingHotels] = useState(false);

  // فلائٹس کا ڈیٹا فیچ کرنے کا فنکشن
  const fetchFlights = async () => {
    setLoadingFlights(true);
    try {
      const response = await fetch('/api/flights?origin=LON&destination=NYC');
      const data = await response.json();
      setFlightData(data.flights);
    } catch (error) {
      console.error("Error fetching flights:", error);
    } finally {
      setLoadingFlights(false);
    }
  };

  // ہوٹلز کا ڈیٹا فیچ کرنے کا فنکشن
  const fetchHotels = async () => {
    setLoadingHotels(true);
    try {
      const response = await fetch('/api/hotels?city=Paris');
      const data = await response.json();
      setHotelData(data.hotels);
    } catch (error) {
      console.error("Error fetching hotels:", error);
    } finally {
      setLoadingHotels(false);
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Aetros PulseTrips - Discover Inventory</h1>
     
      {/* فلائٹس سرچ سیکشن */}
      <div className="mb-8 p-6 bg-white shadow rounded-lg border">
        <h2 className="text-xl font-semibold mb-4 text-blue-600">Flight Inventory</h2>
        <button
          onClick={fetchFlights}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {loadingFlights ? 'Searching Flights...' : 'Fetch Live Flights'}
        </button>

        {flightData && (
          <div className="mt-4 space-y-3">
            {flightData.map((flight) => (
              <div key={flight.id} className="p-4 bg-gray-50 border rounded flex justify-between items-center">
                <div>
                  <p className="font-bold text-gray-700">{flight.airline}</p>
                  <p className="text-sm text-gray-500">Route: {flight.route} | Duration: {flight.duration}</p>
                </div>
                <span className="text-lg font-bold text-green-600">{flight.price}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ہوٹلز سرچ سیکشن */}
      <div className="p-6 bg-white shadow rounded-lg border">
        <h2 className="text-xl font-semibold mb-4 text-blue-600">Hotel Inventory</h2>
        <button
          onClick={fetchHotels}
          className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          {loadingHotels ? 'Searching Hotels...' : 'Fetch Live Hotels'}
        </button>

        {hotelData && (
          <div className="mt-4 space-y-3">
            {hotelData.map((hotel) => (
              <div key={hotel.id} className="p-4 bg-gray-50 border rounded flex justify-between items-center">
                <div>
                  <p className="font-bold text-gray-700">{hotel.name}</p>
                  <p className="text-sm text-gray-500">Location: {hotel.location} | Rating: {hotel.rating} ⭐</p>
                </div>
                <span className="text-lg font-bold text-green-600">{hotel.pricePerNight} / night</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
