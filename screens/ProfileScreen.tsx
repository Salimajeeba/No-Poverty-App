
import React from 'react';
import { UserRole } from '../types';
import { Settings, ShieldCheck, Award, TrendingUp, History, LogOut, ChevronRight } from 'lucide-react';

interface ProfileScreenProps {
  role: UserRole | null;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ role }) => {
  const badges = [
    { icon: <Award className="text-yellow-600" />, label: 'Hunger Hero', color: 'bg-yellow-100' },
    { icon: <ShieldCheck className="text-green-600" />, label: 'Verified Donor', color: 'bg-green-100' },
    { icon: <TrendingUp className="text-blue-600" />, label: 'Impact King', color: 'bg-blue-100' },
  ];

  return (
    <div className="bg-gray-50 min-h-full pb-8">
      <div className="bg-green-600 pt-16 pb-12 px-6 rounded-b-[48px] relative">
        <div className="absolute top-12 right-6">
          <Settings size={24} className="text-white opacity-80" />
        </div>
        
        <div className="flex flex-col items-center">
          <div className="relative mb-4">
             <div className="w-24 h-24 rounded-full border-4 border-white/30 overflow-hidden shadow-xl">
              <img src="https://picsum.photos/200" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 bg-white p-1.5 rounded-full shadow-lg">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            </div>
          </div>
          <h2 className="text-xl font-bold text-white">Alex Johnson</h2>
          <p className="text-green-100 text-sm opacity-80">{role || 'Hunger Hero'}</p>
        </div>
      </div>

      <div className="px-6 -mt-8 mb-8">
        <div className="bg-white p-6 rounded-3xl shadow-xl flex justify-around text-center border border-gray-100">
          <div>
            <p className="text-2xl font-bold text-gray-800">42</p>
            <p className="text-[10px] text-gray-400 font-bold uppercase">Meals Shared</p>
          </div>
          <div className="w-px h-10 bg-gray-100 self-center"></div>
          <div>
            <p className="text-2xl font-bold text-gray-800">12</p>
            <p className="text-[10px] text-gray-400 font-bold uppercase">Badges</p>
          </div>
          <div className="w-px h-10 bg-gray-100 self-center"></div>
          <div>
            <p className="text-2xl font-bold text-gray-800">850</p>
            <p className="text-[10px] text-gray-400 font-bold uppercase">Karma Pts</p>
          </div>
        </div>
      </div>

      <div className="px-6 mb-8">
        <h3 className="font-bold text-gray-800 mb-4 px-1">Achievement Badges</h3>
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {badges.map((b, i) => (
            <div key={i} className="flex flex-col items-center gap-2 min-w-[80px]">
              <div className={`w-16 h-16 rounded-3xl flex items-center justify-center shadow-sm ${b.color}`}>
                {b.icon}
              </div>
              <span className="text-[10px] font-bold text-gray-600 text-center">{b.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 space-y-3">
        {[
          { icon: <History className="text-orange-500" />, label: 'Donation History', sub: 'Track your contributions' },
          { icon: <TrendingUp className="text-blue-500" />, label: 'SDG Impact Report', sub: 'View zero hunger progress' },
          { icon: <LogOut className="text-red-500" />, label: 'Log Out', sub: 'See you again soon' },
        ].map((item, i) => (
          <button 
            key={i}
            className="w-full bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between group active:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gray-50 rounded-xl group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="text-left">
                <p className="font-bold text-gray-800 text-sm">{item.label}</p>
                <p className="text-[10px] text-gray-400">{item.sub}</p>
              </div>
            </div>
            <ChevronRight size={18} className="text-gray-300" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfileScreen;
