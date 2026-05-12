import { LoginFormData } from '../schemas/login.schema';

export interface LoginResponse {
  accessToken?: string;
  message?: string;
  // Adicione outros campos conforme necessário baseado na resposta do authService
}

export type { LoginFormData };
