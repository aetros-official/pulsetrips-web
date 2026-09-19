import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { origin, destination, date } = body;

    // Duffel API se direct data fetch karne ka secure server-side request
    const response = await fetch('https://api.duffel.com/air/offer_requests', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.DUFFEL_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
        'Duffel-Version': 'v1',
      },
      body: JSON.stringify({
        data: {
          slices: [
            {
              origin: origin || 'LHE',
              destination: destination || 'DXB',
              departure_date: date || '2026-10-15',
            }
          ],
          passengers: [{ type: 'adult' }],
          cabin_class: 'economy',
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: data.errors || 'API Error' }, { status: response.status });
    }

    // 100% Direct markup / commission calculation apke apne server par hogi
    return NextResponse.json({ success: true, data: data.data });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
