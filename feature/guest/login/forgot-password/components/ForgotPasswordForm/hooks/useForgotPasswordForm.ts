'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { forgotPasswordSchema, ForgotPasswordFormData } from '../../../schemas/forgot-password.schema';
import { forgotPasswordApi } from '../../../apis/forgot-password.api';

export function useForgotPasswordForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');
  const router = useRouter();

  const form = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    }
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    setIsSubmitting(true);
    try {
      const result = await forgotPasswordApi.requestReset(data.email);
      
      if (result && (result.success || result.message)) {
        setSubmittedEmail(data.email);
        setIsSubmitted(true);
      } else {
        toast.error(result?.message || 'Ocorreu um erro ao processar sua solicitação.');
      }
    } catch (error: any) {
      console.error('Forgot password error:', error);
      toast.error('Erro ao conectar com o servidor. Tente novamente mais tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackToEmail = () => {
    setIsSubmitted(false);
    form.reset();
  };

  return {
    form,
    isSubmitting,
    isSubmitted,
    submittedEmail,
    onSubmit: form.handleSubmit(onSubmit),
    handleBackToEmail,
    router
  };
}
