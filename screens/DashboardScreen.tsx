
import React from 'react';
import { Screen, UserRole } from '../types';
import { PlusCircle, HandHeart, Map, Utensils, Bell, Search } from 'lucide-react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, Cell } from 'recharts';

interface DashboardScreenProps {
  onNavigate: (screen: Screen) => void;
  role: UserRole | null;
}

const impactData = [
  { day: 'Mon', meals: 85 },
  { day: 'Tue', meals: 110 },
  { day: 'Wed', meals: 95 },
  { day: 'Thu', meals: 140 },
  { day: 'Fri', meals: 120 },
  { day: 'Sat', meals: 160 },
  { day: 'Sun', meals: 155 },
];

const DashboardScreen: React.FC<DashboardScreenProps> = ({ onNavigate, role }) => {
  return (
    <div className="bg-gray-50 min-h-full pb-8">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-6 rounded-b-[40px] shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-gray-500 text-sm">Welcome back,</p>
            <h2 className="text-xl font-bold text-gray-800">Hunger Hero 👋</h2>
          </div>
          <div className="flex gap-3">
            <button className="p-2 bg-gray-100 rounded-full text-gray-600 relative">
              <Bell size={20} />
              <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></div>
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-500 p-6 rounded-3xl text-white shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-green-100 text-sm opacity-80 mb-1">Today's Global Impact</p>
            <h3 className="text-3xl font-bold mb-4">12,450 <span className="text-lg font-normal">Meals</span></h3>
            <div className="flex items-center gap-2 bg-white/20 w-fit px-3 py-1 rounded-full text-xs">
              <span className="font-bold">+12%</span> vs yesterday
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 text-white/10 rotate-12">
            <Utensils size={120} />
          </div>
        </div>
      </div>

      {/* Action Cards */}
      <div className="px-6 -mt-4 mb-8">
        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => onNavigate(Screen.DONATE)}
            className="bg-white p-5 rounded-3xl shadow-md border border-gray-100 flex flex-col items-center text-center transition-transform active:scale-95"
          >
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-3">
              <PlusCircle size={28} />
            </div>
            <span className="font-bold text-gray-800">Donate Food</span>
            <span className="text-[10px] text-gray-400 mt-1">Share your surplus</span>
          </button>

          <button 
            onClick={() => onNavigate(Screen.REQUEST)}
            className="bg-white p-5 rounded-3xl shadow-md border border-gray-100 flex flex-col items-center text-center transition-transform active:scale-95"
          >
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-3">
              <HandHeart size={28} />
            </div>
            <span className="font-bold text-gray-800">Request Food</span>
            <span className="text-[10px] text-gray-400 mt-1">Need assistance?</span>
          </button>
        </div>
      </div>

      {/* Quick Map */}
      <div className="px-6 mb-8">
        <div 
          onClick={() => onNavigate(Screen.MAP)}
          className="bg-white p-4 rounded-3xl shadow-md border border-gray-100 cursor-pointer overflow-hidden group"
        >
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <Map size={18} className="text-green-600" />
              <h4 className="font-bold text-gray-800">Nearby Map</h4>
            </div>
            <span className="text-xs text-green-600 font-medium">View All</span>
          </div>
          <div className="h-28 bg-gray-100 rounded-2xl overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=600&auto=format&fit=crop" 
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform"
              alt="Map thumbnail"
            />
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 border border-green-100">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-bold text-gray-700">12 Donors Near You</span>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="px-6 mb-8">
        <div className="bg-white p-6 rounded-3xl shadow-md border border-gray-100">
           <h4 className="font-bold text-gray-800 mb-4">Impact Analytics</h4>
           <div className="h-40 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={impactData}>
                <XAxis dataKey="day" axisLine={false} tickLine={false} fontSize={12} tick={{fill: '#94a3b8'}} />
                <YAxis hide />
                <Tooltip 
                  cursor={{fill: '#f1f5f9'}}
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}
                />
                <Bar dataKey="meals" radius={[6, 6, 0, 0]}>
                  {impactData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === impactData.length - 1 ? '#16a34a' : '#bbf7d0'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
           </div>
           <div className="flex justify-between mt-4 text-xs font-medium text-gray-400">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span>Current Peak</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-200 rounded-full"></div>
                <span>Average</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;
