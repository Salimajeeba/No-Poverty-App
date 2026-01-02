
import React from 'react';
import { Apple, Baby, Milk, Salad, Heart, Info, Search } from 'lucide-react';

const NutritionScreen: React.FC = () => {
  const categories = [
    { icon: <Apple size={24} />, label: 'Vitamins', color: 'bg-red-50 text-red-600' },
    { icon: <Milk size={24} />, label: 'Calcium', color: 'bg-blue-50 text-blue-600' },
    { icon: <Salad size={24} />, label: 'Fiber', color: 'bg-green-50 text-green-600' },
    { icon: <Heart size={24} />, label: 'Energy', color: 'bg-orange-50 text-orange-600' },
  ];

  const tips = [
    {
      title: 'Balanced Meals for Kids',
      desc: 'Include colorful veggies to ensure a range of micronutrients.',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop',
      tag: 'Child Nutrition'
    },
    {
      title: 'Hydration is Key',
      desc: 'Clean water is essential for preventing malnutrition and disease.',
      image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=600&auto=format&fit=crop',
      tag: 'Healthy Living'
    },
    {
      title: 'Prenatal Care',
      desc: 'Folic acid and iron are critical for mothers in early pregnancy.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop',
      tag: 'Pregnant Women'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-full pb-8">
      <div className="bg-white px-6 pt-12 pb-6 shadow-sm mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Nutrition Insights</h1>
        <div className="bg-gray-50 p-3 rounded-2xl flex items-center gap-3 border border-gray-100">
          <Search size={18} className="text-gray-400" />
          <input 
            type="text" 
            placeholder="Search healthy tips..." 
            className="flex-1 bg-transparent text-sm focus:outline-none"
          />
        </div>
      </div>

      <div className="px-6 mb-8">
        <div className="flex gap-4 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide">
          {categories.map((c, i) => (
            <div key={i} className="flex flex-col items-center gap-2 min-w-[70px]">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm ${c.color}`}>
                {c.icon}
              </div>
              <span className="text-[10px] font-bold text-gray-600">{c.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 space-y-6">
        <h2 className="font-bold text-gray-800 text-lg">Daily Guidance</h2>
        {tips.map((tip, i) => (
          <div key={i} className="bg-white rounded-[32px] overflow-hidden shadow-md border border-gray-100 group">
            <div className="h-40 relative">
              <img src={tip.image} alt={tip.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-green-600 uppercase tracking-wider">
                {tip.tag}
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-gray-800 mb-2">{tip.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{tip.desc}</p>
              <button className="mt-4 text-green-600 font-bold text-xs flex items-center gap-1">
                Read More <Info size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NutritionScreen;
