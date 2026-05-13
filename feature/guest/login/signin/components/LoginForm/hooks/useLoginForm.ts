'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { useAuth } from '@/hooks/useAuth';
import { loginSchema, LoginFormData } from '../../../schemas/login.schema';
import { signinApi } from '../../../apis/signin.api';

export function useLoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setSession, isLoading: authLoading } = useAuth();

  useEffect(() => {
    const error = searchParams.get('error');
    const message = searchParams.get('message');
    if (error === 'google_auth_failed') {
      toast.error(`Falha na autenticação Google: ${message || 'Erro desconhecido'}`);
    }
  }, [searchParams]);

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsSubmitting(true);
    try {
      const result = await signinApi.login(data);
      
      if (result && result.accessToken) {
        setSession(result.accessToken, result.user);
        toast.success('Login realizado com sucesso! Redirecionando...');
        router.push('/hub');
      } else {
        toast.error(result?.message || 'Credenciais inválidas. Tente novamente.');
      }
    } catch (error: any) {
      console.error('Login error:', error);
      toast.error('Erro ao conectar com o servidor. Tente novamente mais tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleLogin = () => {
    signinApi.redirectToGoogle();
  };

  return {
    form,
    showPassword,
    setShowPassword,
    isLoading: authLoading || isSubmitting,
    onSubmit: form.handleSubmit(onSubmit),
    handleGoogleLogin,
    router
  };
}
