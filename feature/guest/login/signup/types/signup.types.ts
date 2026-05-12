import { SignupFormData } from '../schemas/signup.schema';
import { BaseResponse } from '@/services/auth.service';

export interface SignupResponse extends BaseResponse {
  id?: number;
  // Adicione outros campos se a API retornar mais dados no registro bem sucedido
}

export type { SignupFormData };
