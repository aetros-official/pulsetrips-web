import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    // Using your exact Vercel/GitHub secret variable name for flights
    const accessToken = process.env.DUFFEL_ACCESS_TOKEN;

    const { searchParams } = new URL(request.url);
    const origin = searchParams.get('origin') || 'LON';
    const destination = searchParams.get('destination') || 'NYC';
    const date = searchParams.get('date') || '2026-10-01';

    /*
    // Example fetch block for Duffel API using your access token:
    const apiResponse = await fetch(`https://api.duffel.com/air/slice_offers?...`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Duffel-Version': 'v1',
        'Content-Type': 'application/json'
      }
    });
    const flightData = await apiResponse.json();
    */

    return NextResponse.json({
      success: true,
      message: "Duffel Flight inventory connected via server-side route!",
      searchParameters: { origin, destination, date },
      flights: [
        { id: 'f-101', airline: 'Aetros Direct Wings', route: `${origin} → ${destination}`, price: '$320', duration: '7h 40m' }
      ]
    });

  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
