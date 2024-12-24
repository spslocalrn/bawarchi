import React from 'react';
import { Clock, Users, ChefHat } from 'lucide-react';
import { Recipe } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
      <img 
        src={recipe.image} 
        alt={recipe.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{recipe.name}</h3>
        <p className="text-gray-600 mb-4">{recipe.description}</p>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{recipe.cookingTime} mins</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{recipe.servings} servings</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
            {recipe.mainIngredient}
          </span>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
            {recipe.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;