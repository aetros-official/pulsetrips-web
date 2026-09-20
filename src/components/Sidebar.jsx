'use client';
import { LayoutDashboard, PlaneTakeoff, Building2, Link2, BarChart3, Settings, HelpCircle, Wallet } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#070d1d] border-r border-slate-800 min-h-[calc(100vh-4rem)] p-4 hidden lg:flex flex-col justify-between">
      <div className="space-y-6">
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 px-3 mb-3">Management Portal</p>
          <nav className="space-y-1 text-xs font-bold">
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <LayoutDashboard size={16} /> Overview
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:bg-slate-900 hover:text-white transition">
              <PlaneTakeoff size={16} /> Flight Inventory
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:bg-slate-900 hover:text-white transition">
              <Building2 size={16} /> Hotel Stays
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:bg-slate-900 hover:text-white transition">
              <Link2 size={16} /> Affiliate Networks
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:bg-slate-900 hover:text-white transition">
              <BarChart3 size={16} /> Reports & Payouts
            </a>
          </nav>
        </div>

        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 px-3 mb-3">System & Settings</p>
          <nav className="space-y-1 text-xs font-bold">
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:bg-slate-900 hover:text-white transition">
              <Settings size={16} /> API Settings
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:bg-slate-900 hover:text-white transition">
              <HelpCircle size={16} /> Support Guide
            </a>
          </nav>
        </div>
      </div>

      {/* Wallet / Balance Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1.5">
            <Wallet size={14} className="text-cyan-400" /> Commission Balance
          </span>
        </div>
        <p className="text-lg font-black text-white">$14,850.00</p>
        <span className="text-[10px] text-cyan-400 font-semibold">Available for payout</span>
      </div>
    </aside>
  );
}
