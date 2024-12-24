import React, { useState } from 'react';
import { ChefHat, Search } from 'lucide-react';
import RecipeCard from './components/RecipeCard';
import Header from './components/Header';
import MacroRecipeGenerator from './components/MacroRecipeGenerator';
import { Recipe } from './types';
import { recipes } from './data/recipes';

function App() {
  const [selectedIngredient, setSelectedIngredient] = useState<string>('');
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(recipes);

  const handleIngredientChange = (ingredient: string) => {
    setSelectedIngredient(ingredient);
    if (ingredient) {
      setFilteredRecipes(recipes.filter(recipe => 
        recipe.mainIngredient.toLowerCase() === ingredient.toLowerCase()
      ));
    } else {
      setFilteredRecipes(recipes);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto mb-12 space-y-8">
          <MacroRecipeGenerator />

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Search className="w-5 h-5 text-orange-500" />
              <h2 className="text-xl font-semibold text-gray-800">Find Recipes</h2>
            </div>
            <select
              value={selectedIngredient}
              onChange={(e) => handleIngredientChange(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="">Select main ingredient</option>
              <option value="potato">Potato</option>
              <option value="paneer">Paneer</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;