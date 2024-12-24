const API_KEY = '096d67cb-df8e-4082-b94c-e713193d0bbf';

interface GenerateRecipeParams {
  carbs: number;
  proteins: number;
  fats: number;
  diet?: string;
  meal?: string;
}

export const generateRecipeFromMacros = async (params: GenerateRecipeParams) => {
  const response = await fetch('/api/generate/recipe-from-macros', {
    method: 'POST',
    headers: {
      'Authorization': API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    throw new Error('Failed to generate recipe');
  }

  return response.json();
};