import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request) {
  try {
    const body = await request.json();
    const { destinationCode, checkIn, checkOut, adults } = body;

    const apiKey = process.env.HOTELBEDS_API_KEY;
    const secret = process.env.HOTELBEDS_SECRET;
   
    // Hotelbeds API signature generation (SHA-256)
    const timestamp = Math.floor(Date.now() / 1000);
    const signature = crypto
      .createHash('sha256')
      .update(apiKey + secret + timestamp)
      .digest('hex');

    // Hotelbeds Direct API Request
    const response = await fetch('https://api.test.hotelbeds.com/hotel-api/1.0/hotels', {
      method: 'POST',
      headers: {
        'Api-key': apiKey,
        'X-Signature': signature,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        stay: {
          checkIn: checkIn || '2026-10-15',
          checkOut: checkOut || '2026-10-18',
        },
        occupancies: [
          {
            rooms: 1,
            adults: adults || 2,
            children: 0,
          }
        ],
        destination: {
          code: destinationCode || 'DXB',
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: data.error || 'Hotelbeds API Error' }, { status: response.status });
    }

    return NextResponse.json({ success: true, hotels: data.hotels });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
