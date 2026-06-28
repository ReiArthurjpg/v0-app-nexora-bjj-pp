'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { systemSignupSchema, SystemSignupFormData } from '@/feature/system/signup/schemas/signup.schema';
import { systemSignupApi } from '@/feature/system/signup/apis/signup.api';

export function useSystemSignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const form = useForm<SystemSignupFormData>({
    resolver: zodResolver(systemSignupSchema),
  });

  const onSubmit = async (data: SystemSignupFormData) => {
    setIsSubmitting(true);
    try {
      const result = await systemSignupApi.createUser(data);

      if (result && (result.message || result.user)) {
        toast.success('Usuário criado com sucesso!');
        form.reset();
      } else if (result?.code === 'EMAIL_ALREADY_EXISTS') {
        toast.error('Este e-mail já está cadastrado.');
      } else {
        toast.error(result?.message || 'Erro ao criar usuário. Verifique os dados e tente novamente.');
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
    router,
  };
}
