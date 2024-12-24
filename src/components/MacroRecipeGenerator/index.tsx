import React, { useState } from 'react';
import { ChefHat } from 'lucide-react';
import { MacroTarget, GeneratedRecipe } from '../../types';
import { generateRecipeFromMacros } from '../../services/recipeApi';
import MacroForm from './MacroForm';
import RecipeDisplay from './RecipeDisplay';

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

      <MacroForm
        macros={macros}
        diet={diet}
        loading={loading}
        onMacrosChange={setMacros}
        onDietChange={setDiet}
        onSubmit={handleSubmit}
      />

      {error && (
        <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-md">
          {error}
        </div>
      )}

      {recipe && <RecipeDisplay recipe={recipe} />}
    </div>
  );
};

export default MacroRecipeGenerator;