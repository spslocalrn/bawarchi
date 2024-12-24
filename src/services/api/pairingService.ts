import { fetchApi } from './fetchUtils';
import type { ApiResponse, PairingRequest, PairingResponse } from './types';

export async function generatePairings(
  params: PairingRequest,
  useStream = false
): Promise<ApiResponse<PairingResponse[]>> {
  return fetchApi<ApiResponse<PairingResponse[]>>('/pairings', params, useStream);
}