import { fetchApi } from './fetchUtils';
import type { ApiResponse, MealPlanRequest, GeneratedRecipe } from './types';

export interface MealPlanDay {
  day: number;
  breakfast: GeneratedRecipe;
  lunch: GeneratedRecipe;
  snack: GeneratedRecipe;
  dinner: GeneratedRecipe;
}

export interface MealPlanResponse {
  mealPlan: MealPlanDay[];
}

export async function generateMealPlan(
  params: MealPlanRequest,
  useStream = false
): Promise<ApiResponse<MealPlanResponse>> {
  return fetchApi<ApiResponse<MealPlanResponse>>('/meal-plan', params, useStream);
}