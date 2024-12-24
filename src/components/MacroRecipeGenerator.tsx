import React, { useState } from 'react';
import { ChefHat, Loader2 } from 'lucide-react';
import { MacroTarget, GeneratedRecipe } from '../types';
import { generateRecipeFromMacros } from '../services/recipeApi';

const MacroRecipeGenerator = () => {
  const [macros, setMacros] = useState<MacroTarget>({
    carbs: 100,
    proteins: 50,
    fats: 30,
  });
  const [diet, setDiet] = useState('vegetarian');
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState<GeneratedRecipe | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const generatedRecipe = await generateRecipeFromMacros({
        ...macros,
        diet,
        meal: 'lunch',
      });
      setRecipe(generatedRecipe);
    } catch (err) {
      setError('Failed to generate recipe. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <ChefHat className="w-6 h-6 text-orange-500" />
        <h2 className="text-2xl font-semibold text-gray-800">Recipe Generator</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Carbs (g)
            </label>
            <input
              type="number"
              value={macros.carbs}
              onChange={(e) => setMacros({ ...macros, carbs: Number(e.target.value) })}
              className="w-full p-2 border border-gray-300 rounded-md"
              min="0"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Proteins (g)
            </label>
            <input
              type="number"
              value={macros.proteins}
              onChange={(e) => setMacros({ ...macros, proteins: Number(e.target.value) })}
              className="w-full p-2 border border-gray-300 rounded-md"
              min="0"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Fats (g)
            </label>
            <input
              type="number"
              value={macros.fats}
              onChange={(e) => setMacros({ ...macros, fats: Number(e.target.value) })}
              className="w-full p-2 border border-gray-300 rounded-md"
              min="0"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Diet
          </label>
          <select
            value={diet}
            onChange={(e) => setDiet(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="keto">Keto</option>
            <option value="paleo">Paleo</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors disabled:bg-orange-300 flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Generating Recipe...
            </>
          ) : (
            'Generate Recipe'
          )}
        </button>
      </form>

      {error && (
        <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-md">
          {error}
        </div>
      )}

      {recipe && (
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
            <div className="text-center p-3 bg-orange-50 rounded-md">
              <p className="text-sm text-gray-600">Preparation Time</p>
              <p className="font-semibold text-gray-800">{recipe.preparationTime} min</p>
            </div>
            <div className="text-center p-3 bg-orange-50 rounded-md">
              <p className="text-sm text-gray-600">Difficulty</p>
              <p className="font-semibold text-gray-800 capitalize">{recipe.difficulty}</p>
            </div>
            <div className="text-center p-3 bg-orange-50 rounded-md">
              <p className="text-sm text-gray-600">Servings</p>
              <p className="font-semibold text-gray-800">{recipe.servings}</p>
            </div>
            <div className="text-center p-3 bg-orange-50 rounded-md">
              <p className="text-sm text-gray-600">Tools Needed</p>
              <p className="font-semibold text-gray-800">{recipe.kitchenToolsUsed.length}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MacroRecipeGenerator;