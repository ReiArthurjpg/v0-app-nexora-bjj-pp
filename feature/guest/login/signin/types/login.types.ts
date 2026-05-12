import { LoginFormData } from '../schemas/login.schema';
import { User } from '@/services/auth.service';

export interface LoginResponse {
  success?: boolean;
  accessToken: string;
  tokenType: string;
  expiresIn: number;
  user: User;
  message?: string;
  code?: string;
}

export type { LoginFormData };
