import { authService } from '@/services/auth.service';
import { TwoFactorFormData, TwoFactorResponse } from '../types/two-factor.types';

export const twoFactorApi = {
  verify: async (data: TwoFactorFormData): Promise<TwoFactorResponse> => {
    return authService.verify2fa(data.code);
  },
};
