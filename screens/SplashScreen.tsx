
import React from 'react';
import { Utensils } from 'lucide-react';

const SplashScreen: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-orange-50 animate-in fade-in duration-700">
      <div className="relative">
        <div className="bg-white p-6 rounded-full shadow-2xl mb-6 flex items-center justify-center border-4 border-green-500">
          <Utensils size={64} className="text-orange-500" />
        </div>
        <div className="absolute -top-2 -right-2 bg-green-500 rounded-full p-2 shadow-lg">
          <div className="w-4 h-4 bg-white rounded-full"></div>
        </div>
      </div>
      
      <h1 className="text-3xl font-bold text-gray-800 tracking-tight">Zero Hunger Connect</h1>
      <p className="text-green-600 font-medium mt-2">“Share Food. Spread Hope.”</p>
      
      <div className="mt-20 flex gap-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce [animation-delay:-.5s]"></div>
      </div>
    </div>
  );
};

export default SplashScreen;
