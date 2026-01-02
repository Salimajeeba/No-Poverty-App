
export enum UserRole {
  INDIVIDUAL = 'Individual',
  RESTAURANT = 'Restaurant',
  NGO = 'NGO',
  VOLUNTEER = 'Volunteer'
}

export enum Screen {
  SPLASH = 'splash',
  ONBOARDING = 'onboarding',
  AUTH = 'auth',
  HOME = 'home',
  DONATE = 'donate',
  REQUEST = 'request',
  MAP = 'map',
  NGO_TASKS = 'ngo_tasks',
  NUTRITION = 'nutrition',
  PROFILE = 'profile'
}

export interface FoodDonation {
  id: string;
  type: 'Veg' | 'Non-veg';
  quantity: string;
  bestBefore: string;
  photo?: string;
  pickupOption: 'Pickup' | 'Drop';
  status: 'Available' | 'Assigned' | 'Picked Up' | 'Delivered';
  location: string;
}

export interface NutritionTip {
  title: string;
  icon: string;
  content: string;
}
