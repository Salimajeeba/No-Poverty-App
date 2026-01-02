
import React, { useState } from 'react';
import { UserRole } from '../types';
import { Package, Truck, CheckCircle, Clock, MapPin, Phone } from 'lucide-react';

interface NGOScreenProps {
  role: UserRole | null;
}

const NGOScreen: React.FC<NGOScreenProps> = ({ role }) => {
  const [activeTab, setActiveTab] = useState<'Active' | 'History'>('Active');

  const tasks = [
    { id: 1, title: 'Leftover Buffet Meals', from: 'The Grand Hotel', to: 'Mercy Soup Kitchen', status: 'Accepted', step: 1 },
    { id: 2, title: 'Bakery Goods', from: 'Sunshine Bakery', to: 'Orphanage Home', status: 'Delivering', step: 2 },
    { id: 3, title: 'Fresh Veggies', from: 'Farmers Market', to: 'Community Pantry', status: 'Completed', step: 3 },
  ];

  return (
    <div className="bg-gray-50 min-h-full pb-8">
      <div className="bg-white px-6 pt-12 pb-6 shadow-sm mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Delivery Management</h1>
        <div className="flex bg-gray-100 p-1 rounded-2xl">
          <button 
            onClick={() => setActiveTab('Active')}
            className={`flex-1 py-3 rounded-xl font-bold transition-all ${activeTab === 'Active' ? 'bg-white text-green-600 shadow-sm' : 'text-gray-400'}`}
          >
            Active Tasks
          </button>
          <button 
            onClick={() => setActiveTab('History')}
            className={`flex-1 py-3 rounded-xl font-bold transition-all ${activeTab === 'History' ? 'bg-white text-green-600 shadow-sm' : 'text-gray-400'}`}
          >
            Past Deliveries
          </button>
        </div>
      </div>

      <div className="px-6 space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="bg-white p-5 rounded-3xl shadow-md border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-gray-800">{task.title}</h3>
                <p className="text-xs text-gray-400 flex items-center gap-1 mt-1">
                  <Clock size={12} /> Just 5 mins ago
                </p>
              </div>
              <span className={`text-[10px] font-bold px-3 py-1 rounded-full ${
                task.status === 'Completed' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'
              }`}>
                {task.status.toUpperCase()}
              </span>
            </div>

            <div className="relative pl-6 border-l-2 border-dashed border-gray-100 space-y-6 mb-6">
              <div className="relative">
                <div className="absolute -left-[31px] top-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                <p className="text-[10px] text-gray-400 font-medium">PICKUP FROM</p>
                <p className="text-sm font-bold text-gray-700">{task.from}</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[31px] top-0 w-4 h-4 bg-orange-500 rounded-full border-2 border-white"></div>
                <p className="text-[10px] text-gray-400 font-medium">DELIVER TO</p>
                <p className="text-sm font-bold text-gray-700">{task.to}</p>
              </div>
            </div>

            {/* Progress Tracker */}
            <div className="flex items-center justify-between mb-6 px-2">
              {[
                { icon: <Package size={14} />, label: 'Accepted', filled: task.step >= 1 },
                { icon: <Truck size={14} />, label: 'On Way', filled: task.step >= 2 },
                { icon: <CheckCircle size={14} />, label: 'Delivered', filled: task.step >= 3 },
              ].map((s, i, arr) => (
                <React.Fragment key={i}>
                  <div className="flex flex-col items-center gap-1">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${s.filled ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                      {s.icon}
                    </div>
                    <span className={`text-[8px] font-bold ${s.filled ? 'text-green-600' : 'text-gray-400'}`}>{s.label}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <div className={`flex-1 h-[2px] mb-4 ${s.filled && arr[i+1].filled ? 'bg-green-600' : 'bg-gray-100'}`}></div>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="flex gap-3">
              <button className="flex-1 py-3 bg-green-50 text-green-600 font-bold rounded-2xl flex items-center justify-center gap-2 border border-green-100">
                <Phone size={16} /> Contact
              </button>
              <button className="flex-1 py-3 bg-green-600 text-white font-bold rounded-2xl flex items-center justify-center gap-2 shadow-lg">
                Update Status
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NGOScreen;
