import React from 'react';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900" dir="rtl">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col fixed inset-y-0 right-0 z-50">
        <div className="p-6 text-2xl font-bold text-sky-400 border-b border-slate-800 text-center">
          Pulsetrips B2B
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="flex items-center p-3 text-sky-400 bg-slate-800 rounded-lg font-medium">
            ڈیش بورڈ (Dashboard)
          </a>
          <a href="#" className="flex items-center p-3 text-slate-400 hover:bg-slate-800 hover:text-white rounded-lg">
            فلائٹس (Flights)
          </a>
          <a href="#" className="flex items-center p-3 text-slate-400 hover:bg-slate-800 hover:text-white rounded-lg">
            ہوٹلز (Hotels)
          </a>
          <a href="#" className="flex items-center p-3 text-slate-400 hover:bg-slate-800 hover:text-white rounded-lg">
            ٹرانسفرز (Transfers)
          </a>
          <a href="#" className="flex items-center p-3 text-slate-400 hover:bg-slate-800 hover:text-white rounded-lg">
            ای سم (eSIM Data)
          </a>
          <a href="#" className="flex items-center justify-between p-3 text-slate-400 hover:bg-slate-800 hover:text-white rounded-lg">
            <span>وائٹ لیبل / ایفیلی ایٹ</span>
            <span className="bg-amber-500 text-black text-xs font-bold px-2 py-0.5 rounded">NEW</span>
          </a>
          <a href="#" className="flex items-center p-3 text-slate-400 hover:bg-slate-800 hover:text-white rounded-lg">
            مارک اپ سیٹنگز (Markup)
          </a>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="mr-64 flex-1 flex flex-col min-h-screen">
        {/* Top Header */}
        <header className="bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-slate-800">B2B ایجنٹ پورٹل</h2>
          <div className="flex items-center gap-4">
            <span className="bg-sky-100 text-sky-800 font-bold px-4 py-2 rounded-full text-sm">
              Net Balance: $5,240.00
            </span>
            <span className="text-sm">ایجنسی: <strong>Pulsetrips Partner</strong></span>
          </div>
        </header>

        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-blue-700 to-indigo-900 text-white py-12 px-8 text-center">
          <h1 className="text-3xl font-extrabold mb-3">آپ کا مکمل B2B ٹریول ہب</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm">
            فلائٹس، ہوٹلز، ٹرانسفرز اور eSIM کے ہول سیل ریٹس پر اپلائی کریں اپنا مارک اپ اور حاصل کریں مکمل کنٹرول۔
          </p>
        </section>

        {/* Search Widget Container */}
        <main className="p-8 flex-1">
          <div className="bg-white rounded-xl p-6 shadow-md -mt-12 mb-8 border border-slate-100">
            <div className="flex gap-4 border-b border-slate-100 pb-4 mb-6">
              <button className="bg-blue-50 text-blue-700 font-bold px-4 py-2 rounded-lg">✈️ فلائٹ سرچ</button>
              <button className="text-slate-500 font-medium px-4 py-2 hover:bg-slate-50 rounded-lg">🏨 ہوٹل سرچ</button>
              <button className="text-slate-500 font-medium px-4 py-2 hover:bg-slate-50 rounded-lg">🚗 ٹرانسفرز</button>
              <button className="text-slate-500 font-medium px-4 py-2 hover:bg-slate-50 rounded-lg">📱 eSIM ڈیٹا</button>
            </div>
            <div className="flex gap-4">
              <input type="text" placeholder="کہاں سے (From)" className="flex-1 p-3 border border-slate-300 rounded-lg text-sm" />
              <input type="text" placeholder="کہاں تک (To)" className="flex-1 p-3 border border-slate-300 rounded-lg text-sm" />
              <button className="bg-blue-700 text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-800">
                تلاش کریں
              </button>
            </div>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg mb-2 flex justify-between">
                <span>مارک اپ مینجمنٹ</span>
                <span>⚙️</span>
              </h3>
              <p className="text-slate-500 text-xs mb-4">اپنا گلوبل نفع (Profit Margin) سیٹ کریں۔</p>
              <span className="text-2xl font-bold text-blue-700">+ 5.0% Net Rate</span>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg mb-2 flex justify-between">
                <span>White Label / Affiliate</span>
                <span>🌐</span>
              </h3>
              <p className="text-slate-500 text-xs mb-4">اپنی ڈومین پر ہماری APIs استعمال کریں۔</p>
              <span className="text-green-600 font-bold text-sm">Status: Active Key</span>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg mb-2 flex justify-between">
                <span>کل ماہانہ سیلز</span>
                <span>📊</span>
              </h3>
              <p className="text-slate-500 text-xs mb-4">جاری ماہ کی مکمل بکنگز</p>
              <span className="text-2xl font-bold text-amber-600">$12,850.00</span>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-400 p-8 text-sm mt-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">Pulsetrips B2B</h4>
              <p className="text-xs leading-relaxed">دنیا بھر کے ایجنٹس اور بی ٹو بی پارٹنرز کے لیے مکمل سفری پورٹل۔</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">خدمات (Services)</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-white">B2B Flight Booking</a></li>
                <li><a href="#" className="hover:text-white">Wholesale Hotel Rates</a></li>
                <li><a href="#" className="hover:text-white">Airport Transfers</a></li>
                <li><a href="#" className="hover:text-white">Global eSIM Packs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">پالیسیز (Policies)</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white">Refund & Cancellation</a></li>
                <li><a href="#" className="hover:text-white">Agency SLA Agreement</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">پارٹنرشپ</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-white">Affiliate Program</a></li>
                <li><a href="#" className="hover:text-white">White Label Setup</a></li>
                <li><a href="#" className="hover:text-white">API Documentation</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-4 text-center text-xs">
            © 2026 Pulsetrips.com — All Rights Reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}
