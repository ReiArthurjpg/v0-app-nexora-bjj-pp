'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import Cookies from 'js-cookie';
import { resetPasswordSchema, ResetPasswordFormData } from '../../../schemas/reset-password.schema';
import { resetPasswordApi } from '../../../apis/reset-password.api';

export function useResetPasswordForm(token: string) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isValidating, setIsValidating] = useState(true);
  const [isTokenValid, setIsTokenValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const form = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    }
  });

  useEffect(() => {
    async function validateToken() {
      try {
        const result = await resetPasswordApi.validateToken(token);
        if (result && result.valid) {
          setIsTokenValid(true);
        } else {
          toast.error(result?.message || 'Link de recuperação expirado ou inválido.');
        }
      } catch (error) {
        console.error('Token validation error:', error);
        toast.error('Erro ao validar token de segurança.');
      } finally {
        setIsValidating(false);
      }
    }
    if (token) validateToken();
  }, [token]);

  const onSubmit = async (data: ResetPasswordFormData) => {
    setIsSubmitting(true);
    try {
      const result = await resetPasswordApi.resetPassword(token, data);

      if (result && (result.success || result.message)) {
        toast.success('Senha atualizada com sucesso! Faça login com a nova senha.');
        Cookies.remove('nexora_token');
        router.push('/login');
      } else {
        toast.error(result?.message || 'Não foi possível redefinir sua senha.');
      }
    } catch (error) {
      console.error('Reset password error:', error);
      toast.error('Erro de conexão com o servidor.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    isValidating,
    isTokenValid,
    isSubmitting,
    onSubmit: form.handleSubmit(onSubmit),
    router
  };
}
