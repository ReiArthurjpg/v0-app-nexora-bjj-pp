import { authService } from '@/services/auth.service';
import { ResetPasswordResponse, ResetPasswordFormData } from '../types/reset-password.types';

export const resetPasswordApi = {
  validateToken: async (token: string): Promise<ResetPasswordResponse> => {
    return authService.validateResetToken(token);
  },
  resetPassword: async (token: string, data: ResetPasswordFormData): Promise<ResetPasswordResponse> => {
    return authService.resetPassword({
      token,
      newPassword: data.password,
      confirmPassword: data.confirmPassword
    });
  },
};
