import React from 'react';
import { MacroTarget } from '../../types';

interface MacroFormProps {
  macros: MacroTarget;
  diet: string;
  loading: boolean;
  onMacrosChange: (macros: MacroTarget) => void;
  onDietChange: (diet: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const MacroForm = ({ 
  macros, 
  diet, 
  loading, 
  onMacrosChange, 
  onDietChange, 
  onSubmit 
}: MacroFormProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Carbs (g)
          </label>
          <input
            type="number"
            value={macros.carbs}
            onChange={(e) => onMacrosChange({ ...macros, carbs: Number(e.target.value) })}
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
            onChange={(e) => onMacrosChange({ ...macros, proteins: Number(e.target.value) })}
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
            onChange={(e) => onMacrosChange({ ...macros, fats: Number(e.target.value) })}
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
          onChange={(e) => onDietChange(e.target.value)}
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
        className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors disabled:bg-orange-300"
      >
        {loading ? 'Generating Recipe...' : 'Generate Recipe'}
      </button>
    </form>
  );
};

export default MacroForm;