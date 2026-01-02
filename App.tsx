
import React, { useState, useEffect } from 'react';
import { Screen, UserRole } from './types';
import SplashScreen from './screens/SplashScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import AuthScreen from './screens/AuthScreen';
import DashboardScreen from './screens/DashboardScreen';
import DonateScreen from './screens/DonateScreen';
import RequestScreen from './screens/RequestScreen';
import MapScreen from './screens/MapScreen';
import NGOScreen from './screens/NGOScreen';
import NutritionScreen from './screens/NutritionScreen';
import ProfileScreen from './screens/ProfileScreen';
import BottomNav from './components/BottomNav';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.SPLASH);
  const [userRole, setUserRole] = useState<UserRole | null>(null);

  useEffect(() => {
    if (currentScreen === Screen.SPLASH) {
      const timer = setTimeout(() => {
        setCurrentScreen(Screen.ONBOARDING);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.SPLASH:
        return <SplashScreen />;
      case Screen.ONBOARDING:
        return <OnboardingScreen onFinish={() => setCurrentScreen(Screen.AUTH)} />;
      case Screen.AUTH:
        return (
          <AuthScreen 
            onLogin={(role) => {
              setUserRole(role);
              setCurrentScreen(Screen.HOME);
            }} 
          />
        );
      case Screen.HOME:
        return <DashboardScreen onNavigate={setCurrentScreen} role={userRole} />;
      case Screen.DONATE:
        return <DonateScreen onBack={() => setCurrentScreen(Screen.HOME)} />;
      case Screen.REQUEST:
        return <RequestScreen onBack={() => setCurrentScreen(Screen.HOME)} />;
      case Screen.MAP:
        return <MapScreen />;
      case Screen.NGO_TASKS:
        return <NGOScreen role={userRole} />;
      case Screen.NUTRITION:
        return <NutritionScreen />;
      case Screen.PROFILE:
        return <ProfileScreen role={userRole} />;
      default:
        return <DashboardScreen onNavigate={setCurrentScreen} role={userRole} />;
    }
  };

  const showNav = [
    Screen.HOME, 
    Screen.MAP, 
    Screen.NGO_TASKS, 
    Screen.NUTRITION, 
    Screen.PROFILE
  ].includes(currentScreen);

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-white shadow-xl overflow-hidden relative">
      <main className="flex-1 overflow-y-auto pb-20">
        {renderScreen()}
      </main>
      
      {showNav && (
        <BottomNav 
          activeScreen={currentScreen} 
          onNavigate={setCurrentScreen} 
          role={userRole}
        />
      )}
    </div>
  );
};

export default App;
