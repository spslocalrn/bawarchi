export interface Recipe {
  id: number;
  name: string;
  description: string;
  mainIngredient: string;
  category: string;
  cookingTime: number;
  servings: number;
  image: string;
}

export interface MacroTarget {
  carbs: number;
  proteins: number;
  fats: number;
}

export interface GeneratedRecipe {
  recipeName: string;
  ingredients: {
    name: string;
    unit: string;
    amount: number;
  }[];
  instructions: string[];
  difficulty: string;
  macros: {
    carbs: { amount: number; unit: string };
    proteins: { amount: number; unit: string };
    fats: { amount: number; unit: string };
  };
  preparationTime: number;
  servings: number;
  kitchenToolsUsed: string[];
}