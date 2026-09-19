'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [accountType, setAccountType] = useState('Affiliate Marketer');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(isLogin ? `Logging in with ${email}` : `Registering account for ${fullName}`);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between font-sans">
     
      {/* Top Header / Navbar Simple */}
      <header className="border-b border-slate-800 bg-slate-900/95 backdrop-blur px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center font-black text-white shadow-lg shadow-indigo-600/30 animate-pulse">
            AP
          </div>
          <div>
            <span className="text-xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-cyan-400">
              AETROS PULSETRIPS
            </span>
            <span className="block text-[10px] text-slate-400 tracking-widest uppercase">Secure B2B Portal Authentication</span>
          </div>
        </Link>
        <Link href="/" className="text-xs text-indigo-400 hover:underline font-semibold">
          ← Back to Main Portal
        </Link>
      </header>

      {/* Main Authentication Card Area */}
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-slate-900/90 backdrop-blur border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
         
          {/* Header Title */}
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-black text-white">
              {isLogin ? 'Welcome Back to Aetros' : 'Create Your B2B Partner Account'}
            </h1>
            <p className="text-xs text-slate-400">
              {isLogin ? 'Access your wholesale travel dashboard & affiliate links' : 'Join the global travel affiliate & white label network'}
            </p>
          </div>

          {/* Toggle Tabs (Sign In / Register) */}
          <div className="flex bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
            <button
              type="button"
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition ${isLogin ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30' : 'text-slate-400 hover:text-white'}`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition ${!isLogin ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30' : 'text-slate-400 hover:text-white'}`}
            >
              Register / Signup
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
           
            {!isLogin && (
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Full Name / Agency Name</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your name or agency title"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Business / Affiliate Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Secure Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition"
              />
            </div>

            {!isLogin && (
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Partner Category</label>
                <select
                  value={accountType}
                  onChange={(e) => setAccountType(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition"
                >
                  <option value="Affiliate Marketer">Affiliate Marketer (Pinterest / Travel Blog)</option>
                  <option value="B2B Travel Agency">B2B Travel Agency / Corporate</option>
                  <option value="White Label Partner">White Label Widget Partner</option>
                </select>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold py-3.5 rounded-xl text-sm transition shadow-lg shadow-indigo-600/30 mt-2"
            >
              {isLogin ? 'Access Dashboard 🚀' : 'Create Partner Account ✨'}
            </button>
          </form>

          {/* Support Info Footer inside Card */}
          <div className="border-t border-slate-800/80 pt-4 text-center text-xs text-slate-400 space-y-1">
            <p>Need assistance or API onboarding?</p>
            <a href="mailto:aetros.official@gmail.com" className="text-indigo-400 hover:underline font-medium">
              aetros.official@gmail.com
            </a>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900/60 py-6 text-center text-xs text-slate-500 space-y-1">
        <p>© 2026 Aetros PulseTrips. All rights reserved.</p>
        <p>Official Support: <a href="mailto:aetros.official@gmail.com" className="text-indigo-400 hover:underline">aetros.official@gmail.com</a></p>
      </footer>

    </div>
  );
}
