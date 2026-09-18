import React from 'react';

export default function Home() {
  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', direction: 'ltr', backgroundColor: '#f8fafc', minHeight: '100vh', margin: 0, padding: 0 }}>
      {/* Top Bar */}
      <div style={{ backgroundColor: '#0f172a', color: '#fff', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0, color: '#38bdf8' }}>Pulsetrips B2B Portal</h2>
        <div>
          <span style={{ backgroundColor: '#0369a1', padding: '6px 15px', borderRadius: '20px', fontSize: '14px', fontWeight: 'bold' }}>
            Wallet Balance: $5,240.00
          </span>
        </div>
      </div>

      {/* Hero Banner */}
      <div style={{ background: 'linear-gradient(135deg, #1e40af 0%, #312e81 100%)', color: '#fff', padding: '40px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '32px', marginBottom: '10px' }}>B2B Travel Management Hub</h1>
        <p style={{ color: '#cbd5e1', fontSize: '16px' }}>Access net rates for Flights, Hotels, Transfers, and eSIMs with customized markups.</p>
      </div>

      {/* Main Container */}
      <div style={{ maxWidth: '1100px', margin: '-30px auto 40px', padding: '0 20px' }}>
        {/* Search Widget */}
        <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '25px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', borderBottom: '2px solid #f1f5f9', paddingBottom: '10px' }}>
            <button style={{ padding: '10px 20px', backgroundColor: '#eff6ff', color: '#1e40af', border: 'none', borderRadius: '6px', fontWeight: 'bold' }}>✈️ Flights</button>
            <button style={{ padding: '10px 20px', backgroundColor: 'transparent', color: '#64748b', border: 'none', fontWeight: 'bold' }}>🏨 Hotels</button>
            <button style={{ padding: '10px 20px', backgroundColor: 'transparent', color: '#64748b', border: 'none', fontWeight: 'bold' }}>🚗 Transfers</button>
            <button style={{ padding: '10px 20px', backgroundColor: 'transparent', color: '#64748b', border: 'none', fontWeight: 'bold' }}>📱 eSIM Data</button>
          </div>
          <div style={{ display: 'flex', gap: '15px' }}>
            <input type="text" placeholder="From (City/Airport)" style={{ flex: 1, padding: '12px', border: '1px solid #cbd5e1', borderRadius: '6px' }} />
            <input type="text" placeholder="To (City/Airport)" style={{ flex: 1, padding: '12px', border: '1px solid #cbd5e1', borderRadius: '6px' }} />
            <button style={{ backgroundColor: '#1e40af', color: '#fff', border: 'none', padding: '12px 30px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>Search</button>
          </div>
        </div>

        {/* Feature Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '30px' }}>
          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ margin: '0 0 10px 0' }}>Markup Settings ⚙️</h3>
            <p style={{ color: '#64748b', fontSize: '13px' }}>Global Profit Margin</p>
            <span style={{ fontSize: '22px', fontWeight: 'bold', color: '#1e40af' }}>+ 5.0% Net Rate</span>
          </div>

          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ margin: '0 0 10px 0' }}>White Label / Affiliate 🌐</h3>
            <p style={{ color: '#64748b', fontSize: '13px' }}>Custom Domain & APIs</p>
            <span style={{ color: '#16a34a', fontWeight: 'bold' }}>Status: Active API Keys</span>
          </div>

          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ margin: '0 0 10px 0' }}>Monthly Sales 📊</h3>
            <p style={{ color: '#64748b', fontSize: '13px' }}>Current Month Bookings</p>
            <span style={{ fontSize: '22px', fontWeight: 'bold', color: '#d97706' }}>$12,850.00</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#0f172a', color: '#94a3b8', padding: '30px 20px', textAlign: 'center', fontSize: '14px', marginTop: 'auto' }}>
        <p>&copy; 2026 Pulsetrips.com — B2B Travel Management Portal. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
