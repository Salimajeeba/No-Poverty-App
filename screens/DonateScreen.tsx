
import React, { useState } from 'react';
import { ArrowLeft, Camera, Clock, Weight, MapPin, CheckCircle2 } from 'lucide-react';

interface DonateScreenProps {
  onBack: () => void;
}

const DonateScreen: React.FC<DonateScreenProps> = ({ onBack }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    type: 'Veg',
    quantity: '',
    expiry: '',
    location: '',
    delivery: 'Pickup'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onBack();
    }, 2500);
  };

  if (submitted) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-8 bg-white animate-in zoom-in duration-300">
        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 size={64} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h2>
        <p className="text-gray-500 text-center">Your donation has been posted. We'll notify nearby volunteers.</p>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-white px-6 pt-12">
      <div className="flex items-center gap-4 mb-8">
        <button onClick={onBack} className="p-2 bg-gray-50 rounded-full text-gray-600">
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-bold text-gray-800">Donate Food</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Photo Upload Placeholder */}
        <div className="w-full aspect-video bg-gray-50 border-2 border-dashed border-gray-200 rounded-3xl flex flex-col items-center justify-center text-gray-400 group hover:border-green-400 transition-colors cursor-pointer">
          <Camera size={40} className="mb-2 group-hover:text-green-500" />
          <span className="text-sm font-medium">Upload Food Photo</span>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">Food Type</label>
          <div className="flex gap-4">
            {['Veg', 'Non-veg'].map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setFormData({ ...formData, type: t })}
                className={`flex-1 py-3 rounded-2xl border-2 font-medium transition-all ${
                  formData.type === t ? 'border-green-600 bg-green-50 text-green-600' : 'border-gray-100 text-gray-500'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <Weight size={18} />
            </div>
            <input 
              required
              type="text"
              placeholder="Quantity (e.g. 5kg or 20 meals)"
              className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-green-500 focus:outline-none"
              value={formData.quantity}
              onChange={(e) => setFormData({...formData, quantity: e.target.value})}
            />
          </div>

          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <Clock size={18} />
            </div>
            <input 
              required
              type="text"
              placeholder="Best before time"
              className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-green-500 focus:outline-none"
              value={formData.expiry}
              onChange={(e) => setFormData({...formData, expiry: e.target.value})}
            />
          </div>

          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <MapPin size={18} />
            </div>
            <input 
              required
              type="text"
              placeholder="Pickup Location"
              className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-green-500 focus:outline-none"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">Preferred Method</label>
          <div className="flex gap-4">
            {['Pickup', 'Drop'].map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setFormData({ ...formData, delivery: m })}
                className={`flex-1 py-3 rounded-2xl border-2 font-medium transition-all ${
                  formData.delivery === m ? 'border-green-600 bg-green-50 text-green-600' : 'border-gray-100 text-gray-500'
                }`}
              >
                {m === 'Pickup' ? 'Volunteer Pickup' : 'I will Drop it'}
              </button>
            ))}
          </div>
        </div>

        <button 
          type="submit"
          className="w-full bg-green-600 text-white font-bold py-5 rounded-3xl shadow-lg hover:bg-green-700 transition-all mt-4"
        >
          Post Donation
        </button>
      </form>
    </div>
  );
};

export default DonateScreen;
