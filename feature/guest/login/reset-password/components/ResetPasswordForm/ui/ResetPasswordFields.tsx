'use client';

import React from 'react';
import { Lock, Eye, EyeOff, ShieldCheck, ShieldAlert, Loader2, ChevronRight } from 'lucide-react';
import { UseFormReturn } from 'react-hook-form';
import { ResetPasswordFormData } from '../../../schemas/reset-password.schema';

interface ResetPasswordFieldsProps {
  form: UseFormReturn<ResetPasswordFormData>;
  isSubmitting: boolean;
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
  showConfirmPassword: boolean;
  setShowConfirmPassword: (show: boolean) => void;
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
}

export function ResetPasswordFields({ 
  form, 
  isSubmitting, 
  showPassword, 
  setShowPassword, 
  showConfirmPassword, 
  setShowConfirmPassword,
  onSubmit 
}: ResetPasswordFieldsProps) {
  const { register, formState: { errors }, watch } = form;
  const password = watch('password');
  const confirmPassword = watch('confirmPassword');

  return (
    <form className="space-y-5" onSubmit={onSubmit}>
      {/* CAMPO: NOVA SENHA */}
      <div className="space-y-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Nova Senha</label>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-600 group-focus-within:text-[#E11D48]">
            <Lock size={18} />
          </div>
          <input
            {...register('password')}
            disabled={isSubmitting}
            type={showPassword ? "text" : "password"}
            placeholder="Sua nova senha forte"
            className={`w-full bg-white/5 border ${errors.password ? 'border-red-500' : 'border-white/10'} p-4 pl-12 rounded font-bold text-sm focus:outline-none focus:border-[#E11D48] transition-all disabled:opacity-50`}
          />
          <button 
            type="button" 
            onClick={() => setShowPassword(!showPassword)} 
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-600 hover:text-white"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {errors.password && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1">{errors.password.message}</p>}
      </div>

      {/* CAMPO: CONFIRMAÇÃO DE SENHA */}
      <div className="space-y-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Confirmar Nova Senha</label>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-600 group-focus-within:text-[#E11D48]">
            <ShieldCheck size={18} />
          </div>
          <input
            {...register('confirmPassword')}
            disabled={isSubmitting}
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Repita a nova senha"
            className={`w-full bg-white/5 border ${errors.confirmPassword ? 'border-red-500' : 'border-white/10'} p-4 pl-12 rounded font-bold text-sm focus:outline-none focus:border-[#E11D48] transition-all disabled:opacity-50`}
          />
          <button 
            type="button" 
            onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-600 hover:text-white"
          >
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {errors.confirmPassword && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1">{errors.confirmPassword.message}</p>}
      </div>

      {/* REQUISITOS DE SENHA */}
      <div className="p-4 bg-white/5 border border-white/5 rounded italic">
        <div className="flex items-start gap-3">
          <ShieldAlert className="text-[#E11D48] shrink-0" size={16} />
          <p className="text-[10px] text-gray-400 font-bold uppercase leading-tight">
            A sua senha deve conter pelo menos 8 caracteres, incluindo letras e números. 
            Evite usar sequências óbvias ou datas de nascimento.
          </p>
        </div>
      </div>

      <button 
        type="submit"
        disabled={isSubmitting || !password || password !== confirmPassword}
        className="w-full bg-[#E11D48] hover:bg-white hover:text-black disabled:opacity-50 disabled:cursor-not-allowed py-5 rounded font-black text-lg uppercase italic tracking-tighter transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#E11D48]/10 group mt-4"
      >
        {isSubmitting ? (
          <>ATUALIZANDO... <Loader2 className="animate-spin" size={20} /></>
        ) : (
          <>ATUALIZAR ACESSO <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" strokeWidth={3} /></>
        )}
      </button>
    </form>
  );
}
