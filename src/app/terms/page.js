'use client';
import Link from 'next/link';

export default function TermsPage() {
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
            <span className="block text-[10px] text-slate-400 tracking-widest uppercase">Terms, Privacy & Compliance</span>
          </div>
        </Link>
        <Link href="/" className="text-xs bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-4 py-2 rounded-xl transition shadow-lg">
          ← Back to Main Portal
        </Link>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow max-w-4xl mx-auto px-6 py-12 w-full space-y-8">
       
        {/* Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 md:p-10 rounded-3xl border border-slate-800 shadow-2xl space-y-3">
          <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full inline-block">
            ⚖️ Legal Compliance & Policies
          </span>
          <h1 className="text-2xl md:text-3xl font-black text-white">Terms of Service & Privacy Policy</h1>
          <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
            Transparent guidelines governing B2B wholesale transactions, affiliate data processing, and user privacy on Aetros PulseTrips.
          </p>
        </div>

        {/* Content Sections */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-8 shadow-xl text-xs md:text-sm text-slate-300 leading-relaxed">
         
          <div className="space-y-2">
            <h3 className="text-base font-bold text-white">1. Acceptance of Terms</h3>
            <p>
              By accessing or using Aetros PulseTrips, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please refrain from using our B2B travel portal and white label widgets.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-base font-bold text-white">2. Affiliate Disclosures & Third-Party APIs</h3>
            <p>
              Our platform integrates third-party inventory APIs including Duffel and Hotelbeds, along with affiliate networks like Travelpayouts and Booking.com. We may earn commissions on qualifying bookings made through our links without any additional cost to the end consumer.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-base font-bold text-white">3. User Data & Privacy</h3>
            <p>
              We prioritize digital privacy. We do not store unnecessary personal records or share sensitive data with unauthorized third parties. All authentication details and transaction logs are securely encrypted.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-base font-bold text-white">4. Contact Information</h3>
            <p>
              For any legal or compliance inquiries, please contact our official support team at <a href="mailto:aetros.official@gmail.com" className="text-indigo-400 font-bold hover:underline">aetros.official@gmail.com</a>.
            </p>
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


