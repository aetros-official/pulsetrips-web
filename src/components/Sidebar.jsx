'use client';
import { useState } from 'react';
import { ChevronDown, ChevronRight, LayoutDashboard, Calendar, Award, BarChart2, MessageSquare, DollarSign, Share2, Users, FileText } from 'lucide-react';

export default function Sidebar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const menuItems = [
    {
      name: 'Dashboard Overview',
      icon: <LayoutDashboard size={18} />,
      subItems: ['Quick Stats', 'Activity Log', 'Recent System Updates']
    },
    {
      name: 'Booking Management',
      icon: <Calendar size={18} />,
      subItems: ['Active Bookings', 'Cancelled Trips', 'Pending Approvals', 'Refund Requests']
    },
    {
      name: 'Programs & Perks',
      icon: <Award size={18} />,
      subItems: ['Active Rewards', 'Tier Status', 'VIP Benefits', 'Partner Perks']
    },
    {
      name: 'Performance Analytics',
      icon: <BarChart2 size={18} />,
      subItems: ['Revenue Report', 'Traffic Sources', 'Conversion Rates', 'Daily Summaries']
    },
    {
      name: 'Contact Analytics',
      icon: <MessageSquare size={18} />,
      subItems: ['Support Tickets', 'Live Chat Logs', 'Customer Inquiries', 'Escalations']
    },
    {
      name: 'Finance & Payouts',
      icon: <DollarSign size={18} />,
      subItems: ['Balance Breakdown', 'Payout History', 'Withdrawal Methods']
    },
    {
      name: 'Affiliate & White Label',
      icon: <Share2 size={18} />,
      subItems: ['Affiliate Network Tools', 'Custom Domain Setup', 'Revenue Share', 'API Keys']
    },
    {
      name: 'Referral Program',
      icon: <Users size={18} />,
      subItems: ['Referral Links', 'Earnings Tracker', 'Tier Bonuses', 'Promo Banners']
    },
    {
      name: 'Blog & Resources',
      icon: <FileText size={18} />,
      subItems: ['Published Posts', 'Draft Articles', 'SEO Optimizer', 'Travel Guides']
    }
  ];

  return (
    <aside className="w-64 bg-[#0b1329] text-gray-300 h-screen p-4 overflow-y-auto border-r border-slate-800 shadow-xl">
      <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-4 px-2">
        Portal Management
      </h2>

      <div className="flex flex-col gap-1.5">
        {menuItems.map((menu) => {
          const isOpen = openDropdown === menu.name;
          return (
            <div key={menu.name} className="flex flex-col">
              {/* Main Menu Button with Hover Highlight */}
              <button
                onClick={() => toggleDropdown(menu.name)}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold transition-all duration-200 hover:bg-blue-600 hover:text-white hover:shadow-md group"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-cyan-400 group-hover:text-white transition">{menu.icon}</span>
                  <span>{menu.name}</span>
                </div>
                <span>{isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}</span>
              </button>

              {/* Dropdown Sub-items */}
              {isOpen && (
                <div className="flex flex-col pl-8 py-1 gap-1 bg-slate-900/60 rounded-b-lg border-l-2 border-cyan-500 ml-3 my-1">
                  {menu.subItems.map((sub) => (
                    <a
                      key={sub}
                      href="#"
                      className="py-1.5 px-2 text-[11px] text-gray-400 rounded hover:text-white hover:bg-slate-800 transition"
                    >
                      • {sub}
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
