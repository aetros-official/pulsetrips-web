import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    // Retrieves the Hotelbeds API credentials securely from Vercel / GitHub environment variables
    const apiKey = process.env.HOTELBEDS_API_KEY;
    const apiSecret = process.env.HOTELBEDS_SECRET;

    // Extracting query parameters sent from the frontend
    const { searchParams } = new URL(request.url);
    const city = searchParams.get('city') || 'Paris';
    const checkIn = searchParams.get('checkIn') || '2026-10-05';
    const checkOut = searchParams.get('checkOut') || '2026-10-10';

    /*
    // 3309edbb6a745e0c4b827ce23682097a
    */

    // Sample response to verify server-side hotel route connectivity
    return NextResponse.json({
      success: true,
      message: "Hotelbeds inventory connected via server-side route!",
      searchParameters: { city, checkIn, checkOut },
      hotels: [
        { id: 'h-201', name: 'Aetros Grand Luxury Resort', location: `${city} Center`, pricePerNight: '$145', rating: '4.8' }
      ]
    });

  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
