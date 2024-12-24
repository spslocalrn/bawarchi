import React from 'react';
import { type RecipeRequest } from '../../services/api';

interface RecipeFormProps {
  onSubmit: (params: RecipeRequest) => void;
  loading: boolean;
}

const RecipeForm = ({ onSubmit, loading }: RecipeFormProps) => {
  const [formData, setFormData] = React.useState<RecipeRequest>({
    recipe: '',
    diet: 'vegetarian',
    servings: 2,
    difficulty: 'intermediate'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Recipe Description
        </label>
        <input
          type="text"
          value={formData.recipe}
          onChange={(e) => setFormData({ ...formData, recipe: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="e.g., Pasta Carbonara"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Diet
          </label>
          <select
            value={formData.diet}
            onChange={(e) => setFormData({ ...formData, diet: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="keto">Keto</option>
            <option value="paleo">Paleo</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Servings
          </label>
          <input
            type="number"
            value={formData.servings}
            onChange={(e) => setFormData({ ...formData, servings: Number(e.target.value) })}
            className="w-full p-2 border border-gray-300 rounded-md"
            min="1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Difficulty
          </label>
          <select
            value={formData.difficulty}
            onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="novice">Novice</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors disabled:bg-orange-300"
      >
        {loading ? 'Generating Recipe...' : 'Generate Recipe'}
      </button>
    </form>
  );
};

export default RecipeForm;