'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between p-4">
      <div className="max-w-7xl mx-auto w-full pt-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-wider text-indigo-400">
          AETROS <span className="text-white font-light">PULSETRIPS</span>
        </Link>
        <span className="text-xs text-slate-400">Support: aetros.official@gmail.com</span>
      </div>

      <div className="flex items-center justify-center my-auto">
        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 w-full max-w-md shadow-xl">
          <h1 className="text-2xl font-bold mb-2 text-center">
            {isLogin ? 'Welcome Back' : 'Create an Account'}
          </h1>
          <p className="text-xs text-slate-400 text-center mb-6">
            Access B2B travel portal & exclusive rates
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label className="block text-xs text-slate-400 mb-1">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-indigo-500"
                placeholder="aetros.official@gmail.com"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-indigo-500"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2.5 rounded-lg text-sm transition shadow-lg shadow-indigo-600/30"
            >
              {isLogin ? 'Secure Login' : 'Register Now'}
            </button>
          </form>

          <div className="mt-6 text-center text-xs text-slate-400">
            {isLogin ? "Don't have a partner account?" : "Already registered?"}{' '}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-indigo-400 hover:underline font-medium ml-1"
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-slate-500 pb-4">
        © 2026 Aetros PulseTrips. All rights reserved. Contact: aetros.official@gmail.com
      </div>
    </div>
  );
}
