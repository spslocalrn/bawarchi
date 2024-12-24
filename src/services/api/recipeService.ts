import { fetchApi } from './fetchUtils';
import type {
  ApiResponse,
  RecipeRequest,
  RecipeFromIngredientsRequest,
  GeneratedRecipe,
} from './types';

export async function generateRecipe(
  params: RecipeRequest,
  useStream = false
): Promise<ApiResponse<GeneratedRecipe>> {
  return fetchApi<ApiResponse<GeneratedRecipe>>('/recipe', params, useStream);
}

export async function generateRecipeFromIngredients(
  params: RecipeFromIngredientsRequest,
  useStream = false
): Promise<ApiResponse<GeneratedRecipe>> {
  return fetchApi<ApiResponse<GeneratedRecipe>>('/recipe-from-ingredients', params, useStream);
}

export async function generateRecipeImage(
  recipe: string,
  ingredients: string[]
): Promise<{ imageUrl: string }> {
  return fetchApi('/recipe-image', { recipe, ingredients });
}