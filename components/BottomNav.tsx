
import React from 'react';
import { Home, MapPin, ClipboardList, Apple, User } from 'lucide-react';
import { Screen, UserRole } from '../types';

interface BottomNavProps {
  activeScreen: Screen;
  onNavigate: (screen: Screen) => void;
  role: UserRole | null;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeScreen, onNavigate, role }) => {
  const isNGOOrVolunteer = role === UserRole.NGO || role === UserRole.VOLUNTEER;

  return (
    <nav className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center py-3 px-2 safe-area-bottom z-50">
      <button 
        onClick={() => onNavigate(Screen.HOME)}
        className={`flex flex-col items-center ${activeScreen === Screen.HOME ? 'text-green-600' : 'text-gray-400'}`}
      >
        <Home size={24} />
        <span className="text-[10px] mt-1 font-medium">Home</span>
      </button>

      <button 
        onClick={() => onNavigate(Screen.MAP)}
        className={`flex flex-col items-center ${activeScreen === Screen.MAP ? 'text-green-600' : 'text-gray-400'}`}
      >
        <MapPin size={24} />
        <span className="text-[10px] mt-1 font-medium">Map</span>
      </button>

      {isNGOOrVolunteer && (
        <button 
          onClick={() => onNavigate(Screen.NGO_TASKS)}
          className={`flex flex-col items-center ${activeScreen === Screen.NGO_TASKS ? 'text-green-600' : 'text-gray-400'}`}
        >
          <ClipboardList size={24} />
          <span className="text-[10px] mt-1 font-medium">Tasks</span>
        </button>
      )}

      <button 
        onClick={() => onNavigate(Screen.NUTRITION)}
        className={`flex flex-col items-center ${activeScreen === Screen.NUTRITION ? 'text-green-600' : 'text-gray-400'}`}
      >
        <Apple size={24} />
        <span className="text-[10px] mt-1 font-medium">Tips</span>
      </button>

      <button 
        onClick={() => onNavigate(Screen.PROFILE)}
        className={`flex flex-col items-center ${activeScreen === Screen.PROFILE ? 'text-green-600' : 'text-gray-400'}`}
      >
        <User size={24} />
        <span className="text-[10px] mt-1 font-medium">Profile</span>
      </button>
    </nav>
  );
};

export default BottomNav;
