export const API_KEY = '096d67cb-df8e-4082-b94c-e713193d0bbf';

export const API_CONFIG = {
  baseUrl: '/api/generate',
  headers: {
    'Authorization': API_KEY,
    'Content-Type': 'application/json',
  },
} as const;