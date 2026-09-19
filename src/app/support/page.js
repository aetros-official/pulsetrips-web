'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function SupportPage() {
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketMessage, setTicketMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between font-sans">
     
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/95 backdrop-blur px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center font-black text-white shadow-lg shadow-indigo-600/30">
            AP
          </div>
          <div>
            <span className="text-xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-cyan-400">
              AETROS PULSETRIPS
            </span>
            <span className="block text-[10px] text-slate-400 tracking-widest uppercase">B2B Help Center & Support</span>
          </div>
        </Link>
        <Link href="/" className="text-xs bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-4 py-2 rounded-xl transition shadow-lg">
          ← Back to Main Portal
        </Link>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow max-w-5xl mx-auto px-6 py-12 w-full space-y-12">
       
        {/* Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 md:p-12 rounded-3xl border border-slate-800 shadow-2xl space-y-4 text-center">
          <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full inline-block">
            🛠️ 24/7 B2B Technical & Partner Assistance
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-white">How Can We Help You Today?</h1>
          <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Direct API support, payout inquiries, and wholesale travel assistance. Reach out to our technical team anytime.
          </p>
          <div className="pt-2">
            <span className="text-xs text-slate-400">Direct Official Support Email: </span>
            <a href="mailto:aetros.official@gmail.com" className="text-indigo-400 font-bold hover:underline ml-1">
              aetros.official@gmail.com
            </a>
          </div>
        </div>

        {/* Support Grid & Ticket Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         
          {/* FAQs Section */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6 shadow-xl">
            <h3 className="text-xl font-bold text-white flex items-center space-x-2">
              <span>❓</span>
              <span>Frequently Asked Questions</span>
            </h3>
           
            <div className="space-y-4 text-xs">
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1">
                <h4 className="font-bold text-slate-200">How do Duffel and Hotelbeds APIs sync?</h4>
                <p className="text-slate-400">Inventory and live pricing synchronize automatically via secure wholesale endpoints in real-time.</p>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1">
                <h4 className="font-bold text-slate-200">What are the payout schedules?</h4>
                <p className="text-slate-400">Payouts are processed weekly via wire transfer or crypto options once the minimum threshold is met.</p>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1">
                <h4 className="font-bold text-slate-200">Can I embed white-label widgets on Pinterest?</h4>
                <p className="text-slate-400">Yes! You can link your dedicated landing pages directly from Pinterest traffic to drive high-converting bookings.</p>
              </div>
            </div>
          </div>

          {/* Raise a Support Ticket */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6 shadow-xl">
            <h3 className="text-xl font-bold text-white flex items-center space-x-2">
              <span>🎫</span>
              <span>Open a Support Ticket</span>
            </h3>

            {submitted ? (
              <div className="bg-indigo-600/10 border border-indigo-500/30 p-6 rounded-2xl text-center space-y-3">
                <div className="text-3xl">✅</div>
                <h4 className="font-bold text-white text-sm">Ticket Submitted Successfully!</h4>
                <p className="text-xs text-slate-300">Our support team will review your request and reply shortly to <span className="text-indigo-400 font-medium">aetros.official@gmail.com</span>.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition"
                >
                  Submit Another Ticket
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-slate-300 mb-1">Your Partner Email</label>
                  <input
                    type="email"
                    required
                    placeholder="aetros.official@gmail.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-300 mb-1">Subject / Issue Type</label>
                  <select
                    value={ticketSubject}
                    onChange={(e) => setTicketSubject(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-indigo-500"
                  >
                    <option value="API Integration">API Integration & Sync</option>
                    <option value="Payout & Finance">Payout & Finance Inquiry</option>
                    <option value="White Label Setup">White Label Widget Setup</option>
                    <option value="General Support">General Support</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-300 mb-1">Detailed Message</label>
                  <textarea
                    rows="4"
                    required
                    value={ticketMessage}
                    onChange={(e) => setTicketMessage(e.target.value)}
                    placeholder="Describe your issue in detail..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-indigo-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold py-3 rounded-xl transition shadow-lg shadow-indigo-600/30"
                >
                  Send Support Request 🚀
                </button>
              </form>
            )}
          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900/60 py-6 text-center text-xs text-slate-500 space-y-1">
        <p>© 2026 Aetros PulseTrips. All rights reserved.</p>
        <p>Official Support Contact: <a href="mailto:aetros.official@gmail.com" className="text-indigo-400 hover:underline">aetros.official@gmail.com</a></p>
      </footer>

    </div>
  );
}
