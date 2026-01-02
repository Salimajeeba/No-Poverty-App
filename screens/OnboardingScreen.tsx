
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface OnboardingScreenProps {
  onFinish: () => void;
}

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&auto=format&fit=crop',
    title: 'Reduce Food Waste',
    desc: 'Join our community in salvaging perfectly good food and putting it on the plates of those who need it most.'
  },
  {
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=600&auto=format&fit=crop',
    title: 'Help Hungry Families',
    desc: 'Connect directly with local families and charities. Your small contribution can make a massive difference.'
  },
  {
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=600&auto=format&fit=crop',
    title: 'Support Sustainable Agriculture',
    desc: 'Working together towards UN SDG 2 to achieve a world with zero hunger and healthy living for all.'
  }
];

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ onFinish }) => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    if (current < slides.length - 1) {
      setCurrent(current + 1);
    } else {
      onFinish();
    }
  };

  return (
    <div className="h-full flex flex-col items-center justify-between p-8 bg-white">
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="w-full aspect-square rounded-3xl overflow-hidden shadow-lg mb-10 relative">
           <img 
            src={slides[current].image} 
            alt={slides[current].title} 
            className="w-full h-full object-cover transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{slides[current].title}</h2>
        <p className="text-gray-500 leading-relaxed max-w-xs">{slides[current].desc}</p>
      </div>

      <div className="w-full flex flex-col items-center gap-8 mb-4">
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <div 
              key={i} 
              className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-green-600' : 'w-2 bg-gray-200'}`}
            />
          ))}
        </div>

        <button 
          onClick={next}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-2xl shadow-lg flex items-center justify-center transition-all"
        >
          {current === slides.length - 1 ? 'Get Started' : 'Next'}
          <ChevronRight size={20} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default OnboardingScreen;
