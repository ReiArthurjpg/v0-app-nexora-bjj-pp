'use client';

import React from 'react';
import {
  Mail, Lock, User, Building2, Eye, EyeOff,
  Loader2, ChevronRight, Phone, Calendar, CreditCard,
  MapPin, Shield,
} from 'lucide-react';
import { UseFormReturn } from 'react-hook-form';
import { SystemSignupFormData } from '@/feature/system/signup/schemas/signup.schema';

interface SystemSignupFieldsProps {
  form: UseFormReturn<SystemSignupFormData>;
  isSubmitting: boolean;
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
}

const inputClass = (hasError: boolean) =>
  `w-full bg-white/5 border ${hasError ? 'border-red-500' : 'border-white/10'} p-3.5 pl-11 rounded-lg font-semibold text-sm focus:outline-none focus:border-[#E11D48] transition-all disabled:opacity-50 text-white placeholder:text-gray-600`;

const labelClass = 'text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1 mb-1 block';

const FieldWrapper = ({ children, error }: { children: React.ReactNode; error?: string }) => (
  <div className="space-y-1">
    {children}
    {error && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1">{error}</p>}
  </div>
);

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-600 group-focus-within:text-[#E11D48] pointer-events-none transition-colors">
    {children}
  </div>
);

export function SystemSignupFields({ form, isSubmitting, showPassword, setShowPassword, onSubmit }: SystemSignupFieldsProps) {
  const { register, formState: { errors } } = form;

  return (
    <form className="space-y-5" onSubmit={onSubmit}>
      {/* Seção: Dados Pessoais */}
      <div className="space-y-1">
        <p className="text-[10px] font-black uppercase tracking-widest text-[#E11D48] mb-3 flex items-center gap-2">
          <User size={12} /> Dados Pessoais
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FieldWrapper error={errors.name?.message}>
            <label className={labelClass}>Nome Completo *</label>
            <div className="relative group">
              <IconWrapper><User size={16} /></IconWrapper>
              <input
                {...register('name')}
                type="text"
                disabled={isSubmitting}
                placeholder="Nome e sobrenome"
                className={inputClass(!!errors.name)}
              />
            </div>
          </FieldWrapper>

          <FieldWrapper error={errors.email?.message}>
            <label className={labelClass}>E-mail Profissional *</label>
            <div className="relative group">
              <IconWrapper><Mail size={16} /></IconWrapper>
              <input
                {...register('email')}
                type="email"
                disabled={isSubmitting}
                placeholder="exemplo@academia.com"
                className={inputClass(!!errors.email)}
              />
            </div>
          </FieldWrapper>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <FieldWrapper error={errors.phone?.message}>
            <label className={labelClass}>Telefone</label>
            <div className="relative group">
              <IconWrapper><Phone size={16} /></IconWrapper>
              <input
                {...register('phone')}
                type="text"
                placeholder="(00) 00000-0000"
                className={inputClass(!!errors.phone)}
              />
            </div>
          </FieldWrapper>

          <FieldWrapper error={errors.cpf?.message}>
            <label className={labelClass}>CPF</label>
            <div className="relative group">
              <IconWrapper><CreditCard size={16} /></IconWrapper>
              <input
                {...register('cpf')}
                type="text"
                placeholder="000.000.000-00"
                className={inputClass(!!errors.cpf)}
              />
            </div>
          </FieldWrapper>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <FieldWrapper error={errors.birth_date?.message}>
            <label className={labelClass}>Data de Nascimento</label>
            <div className="relative group">
              <IconWrapper><Calendar size={16} /></IconWrapper>
              <input
                {...register('birth_date')}
                type="date"
                className={`${inputClass(!!errors.birth_date)} text-gray-400`}
              />
            </div>
          </FieldWrapper>

          <FieldWrapper error={errors.gender?.message}>
            <label className={labelClass}>Sexo / Gênero</label>
            <select
              {...register('gender')}
              className={`w-full bg-white/5 border border-white/10 p-3.5 rounded-lg font-semibold text-sm focus:outline-none focus:border-[#E11D48] transition-all text-gray-400`}
            >
              <option value="" className="bg-[#0F0F11]">Selecione</option>
              <option value="Masculino" className="bg-[#0F0F11]">Masculino</option>
              <option value="Feminino" className="bg-[#0F0F11]">Feminino</option>
              <option value="Outro" className="bg-[#0F0F11]">Outro</option>
            </select>
          </FieldWrapper>
        </div>

        <FieldWrapper error={errors.address?.message}>
          <label className={labelClass}>Endereço</label>
          <div className="relative group">
            <IconWrapper><MapPin size={16} /></IconWrapper>
            <input
              {...register('address')}
              type="text"
              placeholder="Rua, Número, Bairro, Cidade - UF"
              className={inputClass(!!errors.address)}
            />
          </div>
        </FieldWrapper>
      </div>

      {/* Divider */}
      <div className="border-t border-white/5" />

      {/* Seção: Academia / Faixa */}
      <div className="space-y-4">
        <p className="text-[10px] font-black uppercase tracking-widest text-[#E11D48] flex items-center gap-2">
          <Building2 size={12} /> Academia & Graduação
        </p>

        <FieldWrapper error={errors.academy_name?.message}>
          <label className={labelClass}>Nome da Academia *</label>
          <div className="relative group">
            <IconWrapper><Building2 size={16} /></IconWrapper>
            <input
              {...register('academy_name')}
              type="text"
              disabled={isSubmitting}
              placeholder="Ex: Gracie Barra Central"
              className={inputClass(!!errors.academy_name)}
            />
          </div>
        </FieldWrapper>

        <div className="grid grid-cols-3 gap-4">
          <FieldWrapper error={errors.belt?.message}>
            <label className={labelClass}>Faixa</label>
            <input
              {...register('belt')}
              type="text"
              placeholder="Preta"
              className={`w-full bg-white/5 border border-white/10 p-3.5 rounded-lg font-semibold text-sm focus:outline-none focus:border-[#E11D48] transition-all`}
            />
          </FieldWrapper>
          <FieldWrapper error={errors.degree?.message}>
            <label className={labelClass}>Grau</label>
            <input
              {...register('degree')}
              type="text"
              placeholder="3º Grau"
              className={`w-full bg-white/5 border border-white/10 p-3.5 rounded-lg font-semibold text-sm focus:outline-none focus:border-[#E11D48] transition-all`}
            />
          </FieldWrapper>
          <FieldWrapper error={errors.last_graduation?.message}>
            <label className={labelClass}>Última Graduação</label>
            <input
              {...register('last_graduation')}
              type="date"
              className={`w-full bg-white/5 border border-white/10 p-3.5 rounded-lg font-semibold text-sm focus:outline-none focus:border-[#E11D48] transition-all text-gray-400`}
            />
          </FieldWrapper>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/5" />

      {/* Seção: Senha */}
      <div className="space-y-4">
        <p className="text-[10px] font-black uppercase tracking-widest text-[#E11D48] flex items-center gap-2">
          <Shield size={12} /> Credenciais de Acesso
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FieldWrapper error={errors.password?.message}>
            <label className={labelClass}>Senha *</label>
            <div className="relative group">
              <IconWrapper><Lock size={16} /></IconWrapper>
              <input
                {...register('password')}
                type={showPassword ? 'text' : 'password'}
                disabled={isSubmitting}
                placeholder="Mínimo 8 caracteres"
                className={inputClass(!!errors.password)}
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-600 hover:text-white">
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </FieldWrapper>

          <FieldWrapper error={errors.confirmPassword?.message}>
            <label className={labelClass}>Confirmar Senha *</label>
            <div className="relative group">
              <IconWrapper><Lock size={16} /></IconWrapper>
              <input
                {...register('confirmPassword')}
                type={showPassword ? 'text' : 'password'}
                disabled={isSubmitting}
                placeholder="Repita a senha"
                className={inputClass(!!errors.confirmPassword)}
              />
            </div>
          </FieldWrapper>
        </div>

        <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">
          A senha deve ter 8+ caracteres com maiúscula, minúscula, número e símbolo.
        </p>
      </div>

      {/* Botão */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#E11D48] hover:bg-white hover:text-black py-4 rounded-lg font-black text-base uppercase italic tracking-tighter transition-all flex items-center justify-center gap-3 shadow-lg shadow-[#E11D48]/20 group disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>CRIANDO USUÁRIO... <Loader2 className="animate-spin" size={18} /></>
        ) : (
          <>CRIAR USUÁRIO <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" strokeWidth={3} /></>
        )}
      </button>
    </form>
  );
}
