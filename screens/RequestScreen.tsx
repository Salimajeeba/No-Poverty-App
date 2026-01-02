
import React, { useState } from 'react';
import { ArrowLeft, Users, Heart, MapPin, AlertCircle, CheckCircle2 } from 'lucide-react';

interface RequestScreenProps {
  onBack: () => void;
}

const RequestScreen: React.FC<RequestScreenProps> = ({ onBack }) => {
  const [submitted, setSubmitted] = useState(false);
  const [urgency, setUrgency] = useState('Medium');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => onBack(), 2500);
  };

  if (submitted) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-8 bg-white animate-in zoom-in duration-300">
        <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 size={64} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Request Sent</h2>
        <p className="text-gray-500 text-center">We are searching for donors near you. Stay tuned!</p>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-white px-6 pt-12">
      <div className="flex items-center gap-4 mb-8">
        <button onClick={onBack} className="p-2 bg-gray-50 rounded-full text-gray-600">
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-bold text-gray-800">Request Food</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="p-4 bg-blue-50 border border-blue-100 rounded-2xl flex gap-3 text-blue-800 text-sm">
          <AlertCircle size={20} className="shrink-0" />
          <p>Please provide accurate details so we can match you with the right donors.</p>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <Users size={18} />
            </div>
            <input 
              required
              type="number"
              placeholder="Number of people"
              className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <Heart size={18} />
            </div>
            <input 
              required
              type="text"
              placeholder="Food Preference (e.g. Rice, Bread, Baby food)"
              className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <MapPin size={18} />
            </div>
            <input 
              required
              type="text"
              placeholder="Drop-off Location"
              className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">Urgency Level</label>
          <div className="flex gap-2">
            {['Low', 'Medium', 'Critical'].map((level) => (
              <button
                key={level}
                type="button"
                onClick={() => setUrgency(level)}
                className={`flex-1 py-3 rounded-2xl border-2 font-medium text-sm transition-all ${
                  urgency === level 
                    ? level === 'Critical' ? 'border-red-600 bg-red-50 text-red-600' : 'border-blue-600 bg-blue-50 text-blue-600' 
                    : 'border-gray-100 text-gray-500'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        <button 
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-5 rounded-3xl shadow-lg hover:bg-blue-700 transition-all mt-4"
        >
          Request Now
        </button>
      </form>
    </div>
  );
};

export default RequestScreen;
