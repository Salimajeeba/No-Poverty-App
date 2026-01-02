
import React, { useState } from 'react';
import { Search, Filter, Navigation, Info, ChevronRight } from 'lucide-react';

const MapScreen: React.FC = () => {
  const [selectedPin, setSelectedPin] = useState<any>(null);

  const pins = [
    { id: 1, type: 'donor', lat: 30, lng: 40, label: 'Fresh Veggies', time: '2h left', color: 'bg-green-500' },
    { id: 2, type: 'ngo', lat: 60, lng: 20, label: 'Sunrise Shelter', status: 'Accepting', color: 'bg-blue-500' },
    { id: 3, type: 'volunteer', lat: 45, lng: 70, label: 'John D.', status: 'Active', color: 'bg-orange-500' },
    { id: 4, type: 'donor', lat: 75, lng: 60, label: 'Bakery Surplus', time: '5h left', color: 'bg-green-500' },
  ];

  return (
    <div className="h-full relative overflow-hidden bg-gray-100">
      {/* Fake Map Background */}
      <div className="absolute inset-0 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1569336415962-a4bd9f6dfc0f?q=80&w=1200&auto=format&fit=crop" 
          className="w-full h-full object-cover"
          alt="Map"
        />
      </div>

      {/* Grid Overlay for feel */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 pointer-events-none opacity-10">
        {Array.from({length: 144}).map((_, i) => (
          <div key={i} className="border-[0.5px] border-black"></div>
        ))}
      </div>

      {/* Pins */}
      {pins.map((pin) => (
        <button
          key={pin.id}
          onClick={() => setSelectedPin(pin)}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 p-2 rounded-full shadow-lg border-2 border-white transition-all hover:scale-110 active:scale-90 ${pin.color}`}
          style={{ top: `${pin.lat}%`, left: `${pin.lng}%` }}
        >
          <div className="w-4 h-4 rounded-full bg-white opacity-40 animate-ping absolute inset-0"></div>
          <div className="relative z-10 w-4 h-4 bg-white rounded-full"></div>
        </button>
      ))}

      {/* UI Elements */}
      <div className="absolute top-12 left-6 right-6 flex gap-3">
        <div className="flex-1 bg-white p-3 rounded-2xl shadow-lg flex items-center gap-3">
          <Search size={18} className="text-gray-400" />
          <input 
            type="text" 
            placeholder="Search nearby food..." 
            className="flex-1 text-sm bg-transparent border-none focus:outline-none"
          />
        </div>
        <button className="bg-white p-3 rounded-2xl shadow-lg text-gray-700">
          <Filter size={20} />
        </button>
      </div>

      <div className="absolute bottom-24 right-6 space-y-3">
        <button className="bg-white p-3 rounded-2xl shadow-lg text-green-600">
          <Navigation size={20} />
        </button>
        <button className="bg-white p-3 rounded-2xl shadow-lg text-blue-600">
          <Info size={20} />
        </button>
      </div>

      {/* Detail Card Overlay */}
      {selectedPin && (
        <div className="absolute bottom-24 left-6 right-6 bg-white rounded-[32px] p-6 shadow-2xl animate-in slide-in-from-bottom duration-300">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-2xl ${selectedPin.color} text-white`}>
                <Info size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">{selectedPin.label}</h3>
                <p className="text-xs text-gray-400">{selectedPin.type === 'donor' ? `Expires in ${selectedPin.time}` : 'Available for pickup'}</p>
              </div>
            </div>
            <button 
              onClick={() => setSelectedPin(null)}
              className="text-gray-300 hover:text-gray-500"
            >
              ✕
            </button>
          </div>
          
          <div className="flex gap-4">
            <button className="flex-1 bg-green-600 text-white font-bold py-3 rounded-2xl shadow-md flex items-center justify-center gap-2">
              Accept Request
              <ChevronRight size={18} />
            </button>
            <button className="w-14 bg-gray-50 border border-gray-100 text-gray-500 flex items-center justify-center rounded-2xl">
              <Navigation size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="absolute top-28 left-6 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-xl text-[10px] font-bold text-gray-600 shadow-sm space-y-1">
        <div className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div> DONORS</div>
        <div className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> NGOs</div>
        <div className="flex items-center gap-2"><div className="w-2 h-2 bg-orange-500 rounded-full"></div> VOLUNTEERS</div>
      </div>
    </div>
  );
};

export default MapScreen;
