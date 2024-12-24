import React from 'react';
import { GeneratedRecipe } from '../../types';

interface RecipeDisplayProps {
  recipe: GeneratedRecipe;
}

const RecipeDisplay = ({ recipe }: RecipeDisplayProps) => {
  return (
    <div className="mt-6 space-y-4">
      <h3 className="text-xl font-semibold text-gray-800">{recipe.recipeName}</h3>
      
      <div>
        <h4 className="font-medium text-gray-700 mb-2">Ingredients:</h4>
        <ul className="list-disc list-inside space-y-1">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient.amount} {ingredient.unit} {ingredient.name}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-medium text-gray-700 mb-2">Instructions:</h4>
        <ol className="list-decimal list-inside space-y-2">
          {recipe.instructions.map((instruction, index) => (
            <li key={index} className="text-gray-600">{instruction}</li>
          ))}
        </ol>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
        <RecipeMetric label="Preparation Time" value={`${recipe.preparationTime} min`} />
        <RecipeMetric label="Difficulty" value={recipe.difficulty} />
        <RecipeMetric label="Servings" value={recipe.servings.toString()} />
        <RecipeMetric label="Tools Needed" value={recipe.kitchenToolsUsed.length.toString()} />
      </div>
    </div>
  );
};

const RecipeMetric = ({ label, value }: { label: string; value: string }) => (
  <div className="text-center p-3 bg-orange-50 rounded-md">
    <p className="text-sm text-gray-600">{label}</p>
    <p className="font-semibold text-gray-800 capitalize">{value}</p>
  </div>
);

export default RecipeDisplay;