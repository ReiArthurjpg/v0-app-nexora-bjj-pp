import { LoginFormData } from '../schemas/login.schema';
import { User } from '@/services/auth.service';

export interface LoginResponse {
  success?: boolean;
  accessToken?: string;
  refreshToken?: string;
  tokenType?: string;
  expiresIn?: number;
  user?: User;
  message?: string;
  code?: string;
  // 2FA flow
  requires_2fa?: boolean;
  temp_token?: string;
}

export type { LoginFormData };
