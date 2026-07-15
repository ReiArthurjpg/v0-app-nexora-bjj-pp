import { TwoFactorFormData } from '../schemas/two-factor.schema';
import { BaseResponse } from '@/services/auth.service';

export interface TwoFactorResponse extends BaseResponse {
  accessToken?: string;
  refreshToken?: string;
  expiresIn?: number;
  user?: {
    id: number;
    name: string;
    email: string;
  };
}

export type { TwoFactorFormData };
