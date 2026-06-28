'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import Cookies from 'js-cookie';
import { useAuth } from '@/hooks/useAuth';
import { twoFactorSchema, TwoFactorFormData } from '../../../schemas/two-factor.schema';
import { twoFactorApi } from '../../../apis/two-factor.api';

export function useTwoFactorForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const { setSession } = useAuth();

  const form = useForm<TwoFactorFormData>({
    resolver: zodResolver(twoFactorSchema),
    defaultValues: { code: '' },
  });

  const onSubmit = async (data: TwoFactorFormData) => {
    setIsSubmitting(true);
    try {
      const result = await twoFactorApi.verify(data);

      if (result && result.accessToken && result.user) {
        // Remove temporary 2FA cookie
        Cookies.remove('nexora_2fa_token');
        // Set real session
        setSession(result.accessToken, result.user as any, result.refreshToken);
        toast.success('Autenticação concluída! Bem-vindo.');
        router.push('/hub');
      } else if (result?.code === 'INVALID_CODE') {
        toast.error('Código 2FA inválido. Verifique o app autenticador.');
      } else {
        toast.error(result?.message || 'Erro ao verificar o código. Tente novamente.');
      }
    } catch (error) {
      console.error('2FA error:', error);
      toast.error('Erro ao conectar com o servidor. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    Cookies.remove('nexora_2fa_token');
    router.push('/guest/login');
  };

  return {
    form,
    isSubmitting,
    onSubmit: form.handleSubmit(onSubmit),
    handleBack,
  };
}
