import { ResetPasswordFormData } from '../schemas/reset-password.schema';

export interface ResetPasswordResponse {
  success?: boolean;
  message?: string;
  valid?: boolean;
}

export type { ResetPasswordFormData };
