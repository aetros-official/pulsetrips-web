mport Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070d1d] text-white flex flex-col">
      {/* Top Bar Component */}
      <Header />

      {/* Main Layout with Sidebar and Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Component */}
        <Sidebar />

        {/* Main Content Area (Purana Web Data / Dashboard Content) */}
        <main className="flex-1 overflow-y-auto p-6 bg-[#091022]">
          <div className="max-w-7xl mx-auto flex flex-col gap-6">
           
            {/* Banner / Hero Section */}
            <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl flex flex-col gap-3">
              <div className="text-xs text-cyan-400 font-semibold tracking-wider">
                ⚡ EMPOWERING GLOBAL B2B TRAVEL PARTNERSHIPS
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-white">
                Discover, Book & Manage Luxury Travel at Wholesale Scale.
              </h2>
              <p className="text-sm text-gray-300 max-w-2xl">
                Connect seamlessly with Duffel flight inventory and Hotelbeds global accommodations. Engineered for high-performance travel entrepreneurs and affiliate networks.
              </p>
            </div>

            {/* Advanced Filters Section */}
            <div className="bg-[#0b1329] p-4 rounded-xl border border-slate-800 shadow-md flex flex-col gap-3">
              <div className="flex justify-between items-center text-xs text-gray-400">
                <span className="font-bold text-gray-200">Advanced Cascading Region, Country & City Filters</span>
                <span className="text-cyan-400">Live Data Synchronized (USD)</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-slate-900 p-2.5 rounded border border-slate-800 text-xs">
                  <span className="text-gray-400 block text-[10px]">1. Select Region</span>
                  <span className="font-semibold text-white">Europe</span>
                </div>
                <div className="bg-slate-900 p-2.5 rounded border border-slate-800 text-xs">
                  <span className="text-gray-400 block text-[10px]">2. Select Country</span>
                  <span className="font-semibold text-white">France</span>
                </div>
                <div className="bg-slate-900 p-2.5 rounded border border-slate-800 text-xs">
                  <span className="text-gray-400 block text-[10px]">3. Select City</span>
                  <span className="font-semibold text-white">Paris</span>
                </div>
              </div>
            </div>

            {/* Trending Global Destinations Grid (Purana Web Data sorted out) */}
            <div>
              <h3 className="text-lg font-bold mb-3 text-white">Trending Global Destinations</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { city: 'Dubai, UAE', price: '$950/night', type: 'Luxury & Villa' },
                  { city: 'Paris, France', price: '$850/night', type: 'Romantic & Scenic' },
                  { city: 'Tokyo, Japan', price: '$900/night', type: 'Modern & Culture' },
                  { city: 'Rome, Italy', price: '$780/night', type: 'Ancient & History' },
                ].map((dest, idx) => (
                  <div key={idx} className="bg-[#0b1329] p-4 rounded-xl border border-slate-800 shadow flex flex-col gap-2 hover:border-blue-500 transition">
                    <div className="flex justify-between text-xs font-semibold text-gray-300">
                      <span>{dest.type}</span>
                      <span className="text-emerald-400">From {dest.price}</span>
                    </div>
                    <h4 className="font-bold text-white text-base">{dest.city}</h4>
                    <span className="text-[10px] text-cyan-400">Wholesale B2B Inventory Active</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
