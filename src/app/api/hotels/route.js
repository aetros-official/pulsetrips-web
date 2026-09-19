import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    // Retrieves the Hotel API key securely from Vercel / GitHub environment variables
    const apiKey = process.env.HOTEL_API_KEY || process.env.API_KEY;

    // Extracting query parameters sent from the frontend
    const { searchParams } = new URL(request.url);
    const city = searchParams.get('city') || 'Paris';
    const checkIn = searchParams.get('checkIn') || '2026-10-05';
    const checkOut = searchParams.get('checkOut') || '2026-10-10';

    /*
    // Uncomment and replace this block when integrating your actual live hotel supplier API URL:
    const apiResponse = await fetch(`https://api.your-hotel-provider.com/v1/search?city=${city}&checkIn=${checkIn}&checkOut=${checkOut}`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    const hotelData = await apiResponse.json();
    */

    // Sample response to verify server-side hotel route connectivity
    return NextResponse.json({
      success: true,
      message: "Hotel inventory fetched securely via server-side API route!",
      searchParameters: { city, checkIn, checkOut },
      hotels: [
        { id: 'h-201', name: 'Aetros Grand Luxury Resort', location: `${city} Center`, pricePerNight: '$145', rating: '4.8' },
        { id: 'h-202', name: 'Pulse Business Suites', location: `Near ${city} Airport`, pricePerNight: '$95', rating: '4.5' }
      ]
    });

  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}



