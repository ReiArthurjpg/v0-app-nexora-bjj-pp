import { authService } from '@/services/auth.service';
import { SignupFormData, SignupResponse } from '../types/signup.types';

export const signupApi = {
  signup: async (data: SignupFormData): Promise<SignupResponse> => {
    // Tratamento de payload se necessário (ex: renomear campos camelCase para snake_case)
    const payload = {
      ...data,
      academy_name: data.academyName,
      birth_date: data.birthDate,
      last_graduation: data.lastGraduation
    };
    
    return authService.signup(payload);
  },
};
