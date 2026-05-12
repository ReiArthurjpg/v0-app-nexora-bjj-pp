'use client';

import React from 'react';
import { Mail, Loader2, ChevronRight } from 'lucide-react';
import { UseFormReturn } from 'react-hook-form';
import { ForgotPasswordFormData } from '../../../schemas/forgot-password.schema';

interface ForgotPasswordFieldsProps {
  form: UseFormReturn<ForgotPasswordFormData>;
  isSubmitting: boolean;
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
}

export function ForgotPasswordFields({ form, isSubmitting, onSubmit }: ForgotPasswordFieldsProps) {
  const { register, formState: { errors }, watch } = form;
  const email = watch('email');

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">E-mail Cadastrado</label>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-600 group-focus-within:text-[#E11D48]">
            <Mail size={18} />
          </div>
          <input
            {...register('email')}
            type="email"
            disabled={isSubmitting}
            placeholder="nome@academia.com"
            className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} p-4 pl-12 rounded font-bold text-sm focus:outline-none focus:border-[#E11D48] transition-all disabled:opacity-50`}
          />
        </div>
        {errors.email && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1">{errors.email.message}</p>}
      </div>

      <button 
        type="submit"
        disabled={isSubmitting || !email}
        className="w-full bg-[#E11D48] hover:bg-white hover:text-black py-5 rounded font-black text-lg uppercase italic tracking-tighter transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#E11D48]/10 group disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>PROCESSANDO... <Loader2 className="animate-spin" size={20} /></>
        ) : (
          <>ENVIAR INSTRUÇÕES <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" strokeWidth={3} /></>
        )}
      </button>

      <div className="mt-8 pt-8 border-t border-white/5 text-center">
        <p className="text-xs font-bold text-gray-600 uppercase tracking-widest leading-loose">
          Dificuldades no acesso?<br/>
          <button type="button" className="text-white hover:text-[#E11D48] border-b border-[#E11D48]">Contatar Suporte Técnico</button>
        </p>
      </div>
    </form>
  );
}
