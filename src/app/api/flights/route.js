import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    // Retrieves the API key securely from Vercel / GitHub environment variables
    const apiKey = process.env.FLIGHT_API_KEY || process.env.API_KEY;

    // Extracting query parameters sent from the frontend
    const { searchParams } = new URL(request.url);
    const origin = searchParams.get('origin') || 'LON';
    const destination = searchParams.get('destination') || 'NYC';
    const date = searchParams.get('date') || '2026-10-01';

    /*
    // Uncomment and replace this block when integrating your actual live flight provider API URL:
    const apiResponse = await fetch(`https://api.your-flight-provider.com/v1/search?origin=${origin}&destination=${destination}&date=${date}`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    const flightData = await apiResponse.json();
    */

    // Sample response to verify server-side route connectivity
    return NextResponse.json({
      success: true,
      message: "Flight inventory fetched securely via server-side API route!",
      searchParameters: { origin, destination, date },
      flights: [
        { id: 'f-101', airline: 'Aetros Direct Wings', route: `${origin} → ${destination}`, price: '$320', duration: '7h 40m' },
        { id: 'f-102', airline: 'Global Pulse Air', route: `${origin} → ${destination}`, price: '$290', duration: '8h 15m' }
      ]
    });

  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}



