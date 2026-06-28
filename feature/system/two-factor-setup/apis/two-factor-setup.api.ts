import { authService } from '@/services/auth.service';

export const twoFactorSetupApi = {
  generate: () => authService.generate2fa(),
  enable: (secret: string, code: string) => authService.enable2fa(secret, code),
  disable: (password: string) => authService.disable2fa(password),
};
