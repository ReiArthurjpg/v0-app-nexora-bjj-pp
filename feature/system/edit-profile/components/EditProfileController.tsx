'use client';

import React from 'react';
import { UserCog } from 'lucide-react';
import { useEditProfileForm } from '../hooks/useEditProfileForm';
import { EditProfileFields } from './EditProfileFields';

export function EditProfileController() {
  const { form, user, isSubmitting, onSubmit } = useEditProfileForm();

  return (
    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
      {/* Card Header */}
      <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/5">
        <div className="w-9 h-9 bg-[#E11D48]/10 rounded-xl flex items-center justify-center border border-[#E11D48]/20">
          <UserCog size={18} className="text-[#E11D48]" />
        </div>
        <div>
          <h2 className="text-base font-black uppercase italic tracking-tighter">Editar Perfil</h2>
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
            Atualiza os dados via <code className="text-[#E11D48]">PUT /auth/me</code>
          </p>
        </div>
      </div>

      <EditProfileFields
        form={form}
        isSubmitting={isSubmitting}
        onSubmit={onSubmit}
        userEmail={user?.email}
        isEmailVerified={user?.is_email_verified}
        twoFactorEnabled={user?.two_factor_enabled}
      />
    </div>
  );
}
