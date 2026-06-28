'use client';

import React from 'react';
import { useSystemSignupForm } from '../hooks/useSystemSignupForm';
import { SystemSignupFields } from '../ui/SystemSignupFields';
import { UserPlus, Shield, Users } from 'lucide-react';

export function SystemSignupForm() {
  const { form, isSubmitting, showPassword, setShowPassword, onSubmit } = useSystemSignupForm();

  return (
    <div className="min-h-screen bg-[#070708] text-white">
      <div className="max-w-4xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-[#E11D48]/10 rounded-lg flex items-center justify-center border border-[#E11D48]/20">
              <UserPlus size={20} className="text-[#E11D48]" />
            </div>
            <div>
              <h1 className="text-2xl font-black uppercase italic tracking-tighter">
                Cadastrar <span className="text-[#E11D48]">Novo Usuário</span>
              </h1>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">
                Acesso administrativo — sistema interno
              </p>
            </div>
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-amber-500/5 border border-amber-500/20 rounded-lg p-4 mb-8 flex items-start gap-3">
          <Shield size={16} className="text-amber-400 mt-0.5 shrink-0" />
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-amber-400 mb-1">Ação Administrativa</p>
            <p className="text-xs text-gray-400 font-medium">
              Este formulário cria um novo usuário no sistema. O usuário receberá um e-mail de verificação.
              Apenas administradores autenticados podem realizar esta ação.
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white/[0.03] border border-white/10 rounded-xl p-8">
          <SystemSignupFields
            form={form}
            isSubmitting={isSubmitting}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            onSubmit={onSubmit}
          />
        </div>

        {/* Footer info */}
        <div className="mt-6 flex items-center gap-2 text-xs text-gray-600 font-bold uppercase tracking-widest">
          <Users size={12} />
          <span>Para ver todos os usuários, acesse a lista de membros.</span>
        </div>
      </div>
    </div>
  );
}
