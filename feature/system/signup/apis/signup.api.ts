import { authService } from '@/services/auth.service';
import { SystemSignupFormData, SystemSignupResponse } from '../types/signup.types';

export const systemSignupApi = {
  createUser: async (data: SystemSignupFormData): Promise<SystemSignupResponse> => {
    return authService.signup(data);
  },
};
