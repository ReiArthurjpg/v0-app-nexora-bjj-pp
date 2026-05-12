import { authService } from '@/services/auth.service';
import { LoginFormData, LoginResponse } from '../types/login.types';

export const signinApi = {
  login: async (data: LoginFormData): Promise<LoginResponse> => {
    return await authService.login(data);
  },

  getGoogleAuthUrl: async () => {
    return await authService.getGoogleAuthUrl();
  }
};
