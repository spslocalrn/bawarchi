// Common Types
export interface ApiResponse<T> {
  data: T;
  error?: string;
}

// Recipe Types
export interface RecipeRequest {
  recipe: string;
  diet?: string;
  servings?: number;
  preparationTime?: number;
  difficulty?: string;
  measurement?: 'imperial' | 'metric';
  language?: string;
  allergies?: string;
}

export interface RecipeFromIngredientsRequest {
  ingredients: string[];
  mealType?: 'breakfast' | 'lunch' | 'dinner' | 'snack' | 'dessert';
  kitchenTools?: string[];
  preparationTime?: number;
  servings?: number;
  difficulty?: 'novice' | 'intermediate' | 'expert';
  measurement?: 'imperial' | 'metric';
  language?: string;
  allergies?: string;
}

// Meal Plan Types
export interface MealPlanRequest {
  goal: 'lose-weight' | 'gain-muscles' | 'eat-healthy';
  duration: number;
  activityLevel: 'sedentary' | 'light-active' | 'moderately-active' | 'very-active' | 'extremely-active';
  age: number;
  height: number;
  weight: number;
  gender: 'male' | 'female' | 'undefined';
  diet: string;
  measurement?: 'imperial' | 'metric';
  language?: string;
  allergies?: string;
}

// Pairing Types
export interface PairingRequest {
  drinkType: 'beer' | 'wine';
  meal: string;
  language?: string;
}

export interface PairingResponse {
  rank: number;
  producer: string;
  name: string;
  styles: string;
  country: string;
  tasteProfile: {
    sweetness: string;
    acidity: string;
    tannin: string;
    body: string;
  };
  alcolVolume: string;
  priceRange: string;
}