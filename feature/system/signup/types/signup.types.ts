import { SystemSignupFormData } from '../schemas/signup.schema';
import { BaseResponse } from '@/services/auth.service';

export interface SystemSignupResponse extends BaseResponse {
  message?: string;
  user?: {
    id: number;
    name: string;
    email: string;
  };
}

export type { SystemSignupFormData };
