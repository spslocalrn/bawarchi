import { API_CONFIG } from './config';
import type { ApiResponse } from './types';

export async function fetchApi<T>(
  endpoint: string,
  data: unknown,
  useStream = false
): Promise<T> {
  const url = `${API_CONFIG.baseUrl}${useStream ? '/stream' : ''}${endpoint}`;
  
  const response = await fetch(url, {
    method: 'POST',
    headers: API_CONFIG.headers,
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('API request failed');
  }

  if (useStream) {
    return handleStreamResponse<T>(response);
  }

  return response.json();
}

async function handleStreamResponse<T>(response: Response): Promise<T> {
  const reader = response.body?.getReader();
  const decoder = new TextDecoder();
  let result = '';

  if (!reader) {
    throw new Error('Stream not available');
  }

  while (true) {
    const { done, value } = await reader.read();
    
    if (done) {
      break;
    }

    result += decoder.decode(value);
  }

  return JSON.parse(result);
}