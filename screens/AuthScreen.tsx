
import React, { useState } from 'react';
import { UserRole } from '../types';
import { User, Store, Heart, Bike, Mail, Phone, ArrowRight } from 'lucide-react';

interface AuthScreenProps {
  onLogin: (role: UserRole) => void;
}

const AuthScreen: React.FC<AuthScreenProps> = ({ onLogin }) => {
  const [role, setRole] = useState<UserRole | null>(null);
  const [loginMethod, setLoginMethod] = useState<'email' | 'phone'>('email');

  const roles = [
    { id: UserRole.INDIVIDUAL, icon: <User size={24} />, label: 'Individual', color: 'bg-blue-100 text-blue-600' },
    { id: UserRole.RESTAURANT, icon: <Store size={24} />, label: 'Restaurant', color: 'bg-orange-100 text-orange-600' },
    { id: UserRole.NGO, icon: <Heart size={24} />, label: 'NGO', color: 'bg-pink-100 text-pink-600' },
    { id: UserRole.VOLUNTEER, icon: <Bike size={24} />, label: 'Volunteer', color: 'bg-green-100 text-green-600' },
  ];

  return (
    <div className="h-full flex flex-col p-8 bg-white">
      <div className="mt-10 mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Welcome Back!</h1>
        <p className="text-gray-500">Sign in to continue sharing</p>
      </div>

      <div className="mb-10">
        <label className="block text-sm font-semibold text-gray-700 mb-4">Select Your Role</label>
        <div className="grid grid-cols-2 gap-4">
          {roles.map((r) => (
            <button
              key={r.id}
              onClick={() => setRole(r.id)}
              className={`p-4 rounded-2xl flex flex-col items-center justify-center gap-2 border-2 transition-all ${
                role === r.id ? 'border-green-600 bg-green-50' : 'border-gray-100 bg-gray-50'
              }`}
            >
              <div className={`p-3 rounded-full ${r.color}`}>
                {r.icon}
              </div>
              <span className="text-sm font-medium text-gray-800">{r.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1">
        <div className="flex gap-4 mb-6">
          <button 
            onClick={() => setLoginMethod('email')}
            className={`flex-1 py-2 text-sm font-medium border-b-2 transition-all ${loginMethod === 'email' ? 'border-green-600 text-green-600' : 'border-transparent text-gray-400'}`}
          >
            Email
          </button>
          <button 
            onClick={() => setLoginMethod('phone')}
            className={`flex-1 py-2 text-sm font-medium border-b-2 transition-all ${loginMethod === 'phone' ? 'border-green-600 text-green-600' : 'border-transparent text-gray-400'}`}
          >
            Phone
          </button>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              {loginMethod === 'email' ? <Mail size={18} /> : <Phone size={18} />}
            </div>
            <input 
              type={loginMethod === 'email' ? 'email' : 'tel'} 
              placeholder={loginMethod === 'email' ? 'Enter your email' : 'Enter phone number'}
              className="w-full bg-gray-50 border border-gray-100 rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-green-500 focus:outline-none transition-all"
            />
          </div>
          <button 
            disabled={!role}
            onClick={() => role && onLogin(role)}
            className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg transition-all ${
              role ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Login
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <p className="text-center text-sm text-gray-500 mt-8">
        Don't have an account? <span className="text-green-600 font-bold">Sign Up</span>
      </p>
    </div>
  );
};

export default AuthScreen;
