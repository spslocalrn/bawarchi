import { useState } from 'react';
import { generateRecipe, generateRecipeImage, type RecipeRequest, type GeneratedRecipe } from '../services/api';

export function useRecipeGenerator() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recipe, setRecipe] = useState<GeneratedRecipe | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const generateNewRecipe = async (params: RecipeRequest) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await generateRecipe(params, true); // Using stream for better UX
      setRecipe(response.data);
      
      // Generate recipe image
      if (response.data) {
        const imageResponse = await generateRecipeImage(
          response.data.recipeName,
          response.data.ingredients.map(i => `${i.amount} ${i.unit} ${i.name}`)
        );
        setImageUrl(imageResponse.imageUrl);
      }
    } catch (err) {
      setError('Failed to generate recipe. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return {
    recipe,
    imageUrl,
    loading,
    error,
    generateNewRecipe
  };
}