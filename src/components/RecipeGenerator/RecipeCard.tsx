import React from 'react';
import { Clock, Users } from 'lucide-react';
import { type GeneratedRecipe } from '../../services/api';

interface RecipeCardProps {
  recipe: GeneratedRecipe;
  imageUrl: string | null;
}

const RecipeCard = ({ recipe, imageUrl }: RecipeCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={recipe.recipeName} 
          className="w-full h-48 object-cover"
        />
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{recipe.recipeName}</h3>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{recipe.preparationTime} mins</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{recipe.servings} servings</span>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Ingredients:</h4>
            <ul className="list-disc list-inside space-y-1">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-600">
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

          <div className="pt-4 grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-orange-50 rounded-md">
              <p className="text-sm text-gray-600">Difficulty</p>
              <p className="font-semibold text-gray-800 capitalize">{recipe.difficulty}</p>
            </div>
            <div className="text-center p-3 bg-orange-50 rounded-md">
              <p className="text-sm text-gray-600">Tools Needed</p>
              <p className="font-semibold text-gray-800">{recipe.kitchenToolsUsed.length}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;