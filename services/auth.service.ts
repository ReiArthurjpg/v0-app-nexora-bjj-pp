import { fetchApi } from '@/lib/api';
import Cookies from 'js-cookie';

export interface BaseResponse {
  success: boolean;
  message?: string;
  code?: string;
  errors?: Record<string, string[]>;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface AuthResponse extends BaseResponse {
  accessToken: string;
  tokenType: string;
  expiresIn: number;
  user: User;
}

export const authService = {
  async signup(data: any): Promise<any> {
    const response = await fetchApi('/auth/signup', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return response.json();
  },

  async login(data: any): Promise<AuthResponse> {
    const response = await fetchApi('/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  },

  async me(): Promise<User> {
    const response = await fetchApi('/auth/me');
    return response.json(); // expects `{ id, name, email }` optionally w/ wrapper
  },

  async logout(): Promise<void> {
    await fetchApi('/auth/logout', { method: 'POST' });
    Cookies.remove('nexora_token');
    if (typeof window !== 'undefined') {
      window.location.href = '/login';
    }
  },

  async forgotPassword(email: string): Promise<any> {
    const response = await fetchApi('/auth/forgot-password', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
    return response.json();
  },

  async validateResetToken(token: string): Promise<any> {
    const response = await fetchApi(`/auth/reset-password/validate?token=${token}`);
    return response.json();
  },

  async resetPassword(data: any): Promise<any> {
    const response = await fetchApi('/auth/reset-password', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return response.json();
  },

  async getGoogleAuthUrl(): Promise<{ url: string }> {
    const response = await fetchApi('/auth/google');
    return response.json();
  },
};
