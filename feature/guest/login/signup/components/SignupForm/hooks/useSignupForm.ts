'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { signupSchema, SignupFormData } from '../../../schemas/signup.schema';
import { signupApi } from '../../../apis/signup.api';

export function useSignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      terms: false,
    }
  });

  const onSubmit = async (data: SignupFormData) => {
    setIsSubmitting(true);
    try {
      const result = await signupApi.signup(data);
      
      if (result && (result.success || result.id)) {
        toast.success('Conta criada com sucesso! Faça login para começar.');
        router.push('/login');
      } else {
        toast.error(result?.message || 'Erro ao criar conta. Verifique os dados e tente novamente.');
      }
    } catch (error: any) {
      console.error('Signup error:', error);
      toast.error('Erro ao conectar com o servidor. Tente novamente mais tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    showPassword,
    setShowPassword,
    isSubmitting,
    onSubmit: form.handleSubmit(onSubmit),
    router
  };
}
