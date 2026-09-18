import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { origin, destination, departureDate, passengers } = body;

    const response = await fetch('https://api.duffel.com/air/offer_requests', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Duffel-Version': 'v2',
        'Authorization': `Bearer ${process.env.DUFFEL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        data: {
          slices: [
            {
              origin: origin,
              destination: destination,
              departure_date: departureDate,
            },
          ],
          passengers: Array.from({ length: passengers || 1 }, () => ({ type: 'adult' })),
          cabin_class: 'economy',
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: data }, { status: response.status });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Server connection error' }, { status: 500 });
  }
}
