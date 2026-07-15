'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { twoFactorSetupApi } from '../apis/two-factor-setup.api';

export type SetupStep = 'idle' | 'generating' | 'scanning' | 'verifying' | 'success' | 'disabling';

export function useTwoFactorSetup() {
  const [step, setStep] = useState<SetupStep>('idle');
  const [qrCode, setQrCode] = useState('');
  const [secret, setSecret] = useState('');
  const [otpUrl, setOtpUrl] = useState('');
  const [verifyCode, setVerifyCode] = useState('');
  const [recoveryCodes, setRecoveryCodes] = useState<string[]>([]);
  const [disablePassword, setDisablePassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    setIsLoading(true);
    setStep('generating');
    try {
      const result = await twoFactorSetupApi.generate();
      setQrCode(result.qrCode);
      setSecret(result.secret);
      setOtpUrl(result.url);
      setStep('scanning');
    } catch {
      toast.error('Erro ao gerar o QR Code. Tente novamente.');
      setStep('idle');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEnable = async () => {
    if (verifyCode.length !== 6) {
      toast.error('Digite um código de 6 dígitos.');
      return;
    }
    setIsLoading(true);
    setStep('verifying');
    try {
      const result = await twoFactorSetupApi.enable(secret, verifyCode);
      if (result.recoveryCodes) {
        setRecoveryCodes(result.recoveryCodes);
        setStep('success');
        toast.success('2FA ativado com sucesso!');
      } else {
        toast.error(result.message || 'Código inválido. Tente novamente.');
        setStep('scanning');
      }
    } catch {
      toast.error('Erro ao ativar 2FA. Tente novamente.');
      setStep('scanning');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDisable = async () => {
    if (!disablePassword) {
      toast.error('Digite sua senha para desativar o 2FA.');
      return;
    }
    setIsLoading(true);
    try {
      const result = await twoFactorSetupApi.disable(disablePassword);
      if (result.code === 'INVALID_CREDENTIALS') {
        toast.error('Senha incorreta. Tente novamente.');
      } else {
        toast.success('2FA desativado com sucesso.');
        setStep('idle');
        setDisablePassword('');
      }
    } catch {
      toast.error('Erro ao desativar 2FA.');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    step, setStep,
    qrCode, secret, otpUrl,
    verifyCode, setVerifyCode,
    recoveryCodes,
    disablePassword, setDisablePassword,
    isLoading,
    handleGenerate,
    handleEnable,
    handleDisable,
  };
}
