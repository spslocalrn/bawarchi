import React from 'react';
import { ChefHat } from 'lucide-react';
import { useRecipeGenerator } from '../../hooks/useRecipeGenerator';
import RecipeForm from './RecipeForm';
import RecipeCard from './RecipeCard';

const RecipeGenerator = () => {
  const { recipe, imageUrl, loading, error, generateNewRecipe } = useRecipeGenerator();

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <ChefHat className="w-6 h-6 text-orange-500" />
        <h2 className="text-2xl font-semibold text-gray-800">Recipe Generator</h2>
      </div>

      <RecipeForm onSubmit={generateNewRecipe} loading={loading} />

      {error && (
        <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-md">
          {error}
        </div>
      )}

      {recipe && (
        <div className="mt-6">
          <RecipeCard recipe={recipe} imageUrl={imageUrl} />
        </div>
      )}
    </div>
  );
};

export default RecipeGenerator;