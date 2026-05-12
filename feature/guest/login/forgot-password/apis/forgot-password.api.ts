import { authService } from '@/services/auth.service';
import { ForgotPasswordResponse } from '../types/forgot-password.types';

export const forgotPasswordApi = {
  requestReset: async (email: string): Promise<ForgotPasswordResponse> => {
    return authService.forgotPassword(email);
  },
};
