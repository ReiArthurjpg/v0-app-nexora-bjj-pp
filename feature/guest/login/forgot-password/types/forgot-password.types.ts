import { ForgotPasswordFormData } from '../schemas/forgot-password.schema';

export interface ForgotPasswordResponse {
  success?: boolean;
  message?: string;
}

export type { ForgotPasswordFormData };
