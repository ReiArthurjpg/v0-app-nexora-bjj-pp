'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { useAuth } from '@/hooks/useAuth';
import { editProfileSchema, EditProfileFormData } from '@/feature/system/edit-profile/schemas/edit-profile.schema';

export function useEditProfileForm() {
  const { user, updateProfile } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<EditProfileFormData>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      name: '',
      academy_name: '',
      phone: '',
      birth_date: '',
      gender: '',
      cpf: '',
      address: '',
      belt: '',
      degree: '',
      last_graduation: '',
    },
  });

  // Pré-preenche com dados do usuário logado
  useEffect(() => {
    if (user) {
      form.reset({
        name: user.name ?? '',
        academy_name: user.academy_name ?? '',
        phone: user.phone ?? '',
        birth_date: user.birth_date ?? '',
        gender: user.gender ?? '',
        cpf: user.cpf ?? '',
        address: user.address ?? '',
        belt: user.belt ?? '',
        degree: user.degree ?? '',
        last_graduation: user.last_graduation ?? '',
      });
    }
  }, [user, form]);

  const onSubmit = async (data: EditProfileFormData) => {
    setIsSubmitting(true);
    try {
      const result = await updateProfile(data);

      if (result?.user || result?.message) {
        toast.success('Perfil atualizado com sucesso!');
      } else if (result?.code === 'VALIDATION_ERROR') {
        toast.error('Dados inválidos. Verifique os campos e tente novamente.');
      } else {
        toast.error(result?.message || 'Erro ao atualizar perfil.');
      }
    } catch {
      toast.error('Erro ao conectar com o servidor.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    user,
    isSubmitting,
    onSubmit: form.handleSubmit(onSubmit),
  };
}
