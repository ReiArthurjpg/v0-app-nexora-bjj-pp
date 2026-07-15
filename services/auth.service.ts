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
  phone?: string;
  birth_date?: string;
  gender?: string;
  cpf?: string;
  address?: string;
  belt?: string;
  degree?: string;
  last_graduation?: string;
  academy_name?: string;
  is_email_verified?: boolean;
  two_factor_enabled?: boolean;
}

export interface AuthResponse extends BaseResponse {
  accessToken: string;
  refreshToken?: string;
  tokenType: string;
  expiresIn: number;
  requires_2fa?: boolean;
  tempToken?: string;
  user: User;
}

export interface RefreshResponse {
  accessToken: string;
  refreshToken?: string;
  expiresIn: number;
}

export interface TwoFactorGenerateResponse {
  secret: string;
  qrCode: string;
  url: string;
}

export interface TwoFactorEnableResponse {
  message: string;
  recoveryCodes: string[];
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
    return response.json();
  },

  async logout(): Promise<void> {
    const refreshToken = Cookies.get('nexora_refresh');
    try {
      await fetchApi('/auth/logout', {
        method: 'POST',
        body: JSON.stringify({ refreshToken }),
      });
    } catch {
      // Ignora erro de logout no servidor
    }
    Cookies.remove('nexora_token');
    Cookies.remove('nexora_refresh');
    Cookies.remove('nexora_2fa_token');
    if (typeof window !== 'undefined') {
      window.location.href = '/guest/login';
    }
  },

  async refreshToken(refreshToken: string): Promise<RefreshResponse> {
    const response = await fetchApi('/auth/refresh', {
      method: 'POST',
      body: JSON.stringify({ refreshToken }),
    });
    return response.json();
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

  async verifyEmail(token: string): Promise<any> {
    const response = await fetchApi(`/auth/verify-email?token=${token}`);
    return response.json();
  },

  redirectToGoogle(): void {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
    window.location.href = `${apiUrl}/auth/google`;
  },

  async updateProfile(data: any): Promise<any> {
    const response = await fetchApi('/auth/me', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
    return response.json();
  },

  // ─── 2FA ──────────────────────────────────────────────────────────────────

  async verify2fa(code: string): Promise<AuthResponse> {
    const twoFaToken = Cookies.get('nexora_2fa_token');
    const response = await fetchApi('/auth/2fa/verify', {
      method: 'POST',
      body: JSON.stringify({ code }),
      headers: {
        'Authorization': `Bearer ${twoFaToken}`,
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  },

  async generate2fa(): Promise<TwoFactorGenerateResponse> {
    const response = await fetchApi('/2fa/generate', { method: 'POST' });
    return response.json();
  },

  async enable2fa(secret: string, code: string): Promise<TwoFactorEnableResponse> {
    const response = await fetchApi('/2fa/enable', {
      method: 'POST',
      body: JSON.stringify({ secret, code }),
    });
    return response.json();
  },

  async disable2fa(password: string): Promise<any> {
    const response = await fetchApi('/2fa/disable', {
      method: 'POST',
      body: JSON.stringify({ password }),
    });
    return response.json();
  },
};
