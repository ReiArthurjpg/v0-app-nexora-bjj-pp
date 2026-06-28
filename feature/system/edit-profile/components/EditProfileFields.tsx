'use client';

import React from 'react';
import {
  User, Mail, Phone, Calendar, CreditCard, MapPin,
  Building2, Shield, Loader2, CheckCircle, Lock,
  Save, ChevronRight,
} from 'lucide-react';
import { UseFormReturn } from 'react-hook-form';
import { EditProfileFormData } from '@/feature/system/edit-profile/schemas/edit-profile.schema';

interface EditProfileFieldsProps {
  form: UseFormReturn<EditProfileFormData>;
  isSubmitting: boolean;
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  userEmail?: string;
  isEmailVerified?: boolean;
  twoFactorEnabled?: boolean;
}

const inputClass = (hasError: boolean) =>
  `w-full bg-white/5 border ${hasError ? 'border-red-500' : 'border-white/10'} p-3.5 pl-11 rounded-xl font-semibold text-sm focus:outline-none focus:border-[#E11D48] focus:bg-[#E11D48]/5 transition-all disabled:opacity-40 text-white placeholder:text-gray-600`;

const labelClass = 'text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1 block';

const FieldWrapper = ({ children, error }: { children: React.ReactNode; error?: string }) => (
  <div className="space-y-1">
    {children}
    {error && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest">{error}</p>}
  </div>
);

const Icon = ({ children }: { children: React.ReactNode }) => (
  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-600 group-focus-within:text-[#E11D48] pointer-events-none transition-colors">
    {children}
  </div>
);

export function EditProfileFields({
  form,
  isSubmitting,
  onSubmit,
  userEmail,
  isEmailVerified,
  twoFactorEnabled,
}: EditProfileFieldsProps) {
  const { register, formState: { errors } } = form;

  return (
    <form onSubmit={onSubmit} className="space-y-6">

      {/* ── Status badges ── */}
      <div className="flex flex-wrap gap-3">
        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-widest ${isEmailVerified ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-amber-500/10 border-amber-500/20 text-amber-400'}`}>
          <CheckCircle size={12} />
          {isEmailVerified ? 'E-mail verificado' : 'E-mail não verificado'}
        </div>
        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-widest ${twoFactorEnabled ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-gray-500/10 border-gray-500/20 text-gray-500'}`}>
          <Shield size={12} />
          {twoFactorEnabled ? '2FA ativo' : '2FA inativo'}
        </div>
      </div>

      {/* ── E-mail (somente leitura) ── */}
      <FieldWrapper>
        <label className={labelClass}>E-mail (não editável)</label>
        <div className="relative">
          <Icon><Mail size={16} /></Icon>
          <input
            type="email"
            value={userEmail ?? ''}
            disabled
            className={`w-full bg-white/[0.02] border border-white/5 p-3.5 pl-11 rounded-xl font-semibold text-sm text-gray-600 cursor-not-allowed`}
          />
          <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center">
            <Lock size={14} className="text-gray-700" />
          </div>
        </div>
      </FieldWrapper>

      <div className="border-t border-white/5" />

      {/* ── Dados Pessoais ── */}
      <div className="space-y-4">
        <p className="text-[10px] font-black uppercase tracking-widest text-[#E11D48] flex items-center gap-2">
          <User size={12} /> Dados Pessoais
        </p>

        <FieldWrapper error={errors.name?.message}>
          <label className={labelClass}>Nome Completo *</label>
          <div className="relative group">
            <Icon><User size={16} /></Icon>
            <input
              {...register('name')}
              type="text"
              disabled={isSubmitting}
              placeholder="Nome e sobrenome"
              className={inputClass(!!errors.name)}
            />
          </div>
        </FieldWrapper>

        <div className="grid grid-cols-2 gap-4">
          <FieldWrapper error={errors.phone?.message}>
            <label className={labelClass}>Telefone</label>
            <div className="relative group">
              <Icon><Phone size={16} /></Icon>
              <input
                {...register('phone')}
                type="text"
                disabled={isSubmitting}
                placeholder="(00) 00000-0000"
                className={inputClass(!!errors.phone)}
              />
            </div>
          </FieldWrapper>

          <FieldWrapper error={errors.cpf?.message}>
            <label className={labelClass}>CPF</label>
            <div className="relative group">
              <Icon><CreditCard size={16} /></Icon>
              <input
                {...register('cpf')}
                type="text"
                disabled={isSubmitting}
                placeholder="000.000.000-00"
                className={inputClass(!!errors.cpf)}
              />
            </div>
          </FieldWrapper>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <FieldWrapper error={errors.birth_date?.message}>
            <label className={labelClass}>Data de Nascimento</label>
            <div className="relative group">
              <Icon><Calendar size={16} /></Icon>
              <input
                {...register('birth_date')}
                type="date"
                disabled={isSubmitting}
                className={`${inputClass(!!errors.birth_date)} text-gray-400`}
              />
            </div>
          </FieldWrapper>

          <FieldWrapper error={errors.gender?.message}>
            <label className={labelClass}>Gênero</label>
            <select
              {...register('gender')}
              disabled={isSubmitting}
              className="w-full bg-white/5 border border-white/10 p-3.5 rounded-xl font-semibold text-sm focus:outline-none focus:border-[#E11D48] transition-all text-gray-400 disabled:opacity-40"
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
            <Icon><MapPin size={16} /></Icon>
            <input
              {...register('address')}
              type="text"
              disabled={isSubmitting}
              placeholder="Rua, Número, Bairro, Cidade - UF"
              className={inputClass(!!errors.address)}
            />
          </div>
        </FieldWrapper>
      </div>

      <div className="border-t border-white/5" />

      {/* ── Academia & Graduação ── */}
      <div className="space-y-4">
        <p className="text-[10px] font-black uppercase tracking-widest text-[#E11D48] flex items-center gap-2">
          <Building2 size={12} /> Academia & Graduação
        </p>

        <FieldWrapper error={errors.academy_name?.message}>
          <label className={labelClass}>Nome da Academia</label>
          <div className="relative group">
            <Icon><Building2 size={16} /></Icon>
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
              disabled={isSubmitting}
              placeholder="Preta"
              className="w-full bg-white/5 border border-white/10 p-3.5 rounded-xl font-semibold text-sm focus:outline-none focus:border-[#E11D48] transition-all disabled:opacity-40"
            />
          </FieldWrapper>

          <FieldWrapper error={errors.degree?.message}>
            <label className={labelClass}>Grau</label>
            <input
              {...register('degree')}
              type="text"
              disabled={isSubmitting}
              placeholder="3º Grau"
              className="w-full bg-white/5 border border-white/10 p-3.5 rounded-xl font-semibold text-sm focus:outline-none focus:border-[#E11D48] transition-all disabled:opacity-40"
            />
          </FieldWrapper>

          <FieldWrapper error={errors.last_graduation?.message}>
            <label className={labelClass}>Última Grad.</label>
            <input
              {...register('last_graduation')}
              type="date"
              disabled={isSubmitting}
              className="w-full bg-white/5 border border-white/10 p-3.5 rounded-xl font-semibold text-sm focus:outline-none focus:border-[#E11D48] transition-all text-gray-400 disabled:opacity-40"
            />
          </FieldWrapper>
        </div>
      </div>

      {/* ── Submit ── */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#E11D48] hover:bg-white hover:text-black py-4 rounded-xl font-black text-sm uppercase italic tracking-tighter transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#E11D48]/20 group disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <><Loader2 className="animate-spin" size={16} /> SALVANDO...</>
        ) : (
          <><Save size={16} /> SALVAR ALTERAÇÕES <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /></>
        )}
      </button>

    </form>
  );
}
