'use client';

import React from 'react';
import { 
  Mail, 
  Lock, 
  User, 
  Building2, 
  Eye, 
  EyeOff, 
  Loader2, 
  ChevronRight 
} from 'lucide-react';
import { UseFormReturn } from 'react-hook-form';
import { SignupFormData } from '../../../schemas/signup.schema';
import { useRouter } from 'next/navigation';

interface SignupFieldsProps {
  form: UseFormReturn<SignupFormData>;
  isSubmitting: boolean;
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
}

export function SignupFields({ form, isSubmitting, showPassword, setShowPassword, onSubmit }: SignupFieldsProps) {
  const { register, formState: { errors } } = form;
  const router = useRouter();

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      {/* Nome Completo */}
      <div className="space-y-1.5">
        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Nome Completo</label>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-600 group-focus-within:text-[#E11D48]">
            <User size={18} />
          </div>
          <input 
            {...register('name')}
            type="text" 
            disabled={isSubmitting}
            placeholder="Seu nome e sobrenome"
            className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} p-4 pl-12 rounded font-bold text-sm focus:outline-none focus:border-[#E11D48] transition-all disabled:opacity-50`}
          />
        </div>
        {errors.name && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1">{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div className="space-y-1.5">
        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">E-mail Profissional</label>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-600 group-focus-within:text-[#E11D48]">
            <Mail size={18} />
          </div>
          <input 
            {...register('email')}
            type="email" 
            disabled={isSubmitting}
            placeholder="exemplo@academia.com"
            className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} p-4 pl-12 rounded font-bold text-sm focus:outline-none focus:border-[#E11D48] transition-all disabled:opacity-50`}
          />
        </div>
        {errors.email && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1">{errors.email.message}</p>}
      </div>

      {/* Nome da Academia */}
      <div className="space-y-1.5">
        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Nome da Academia</label>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-600 group-focus-within:text-[#E11D48]">
            <Building2 size={18} />
          </div>
          <input 
            {...register('academyName')}
            type="text" 
            disabled={isSubmitting}
            placeholder="Ex: Gracie Barra Central"
            className={`w-full bg-white/5 border ${errors.academyName ? 'border-red-500' : 'border-white/10'} p-4 pl-12 rounded font-bold text-sm focus:outline-none focus:border-[#E11D48] transition-all disabled:opacity-50`}
          />
        </div>
        {errors.academyName && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1">{errors.academyName.message}</p>}
      </div>

      {/* Novos campos agrupados */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Telefone</label>
          <input 
            {...register('phone')}
            type="text" 
            placeholder="(00) 00000-0000"
            className="w-full bg-white/5 border border-white/10 p-4 rounded font-bold text-sm focus:outline-none focus:border-[#E11D48] transition-all"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">CPF</label>
          <input 
            {...register('cpf')}
            type="text" 
            placeholder="000.000.000-00"
            className="w-full bg-white/5 border border-white/10 p-4 rounded font-bold text-sm focus:outline-none focus:border-[#E11D48] transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Data de Nascimento</label>
          <input 
            {...register('birthDate')}
            type="date" 
            className="w-full bg-white/5 border border-white/10 p-4 rounded font-bold text-sm focus:outline-none focus:border-[#E11D48] transition-all text-gray-400"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Sexo / Gênero</label>
          <select 
            {...register('gender')}
            className="w-full bg-white/5 border border-white/10 p-4 rounded font-bold text-sm focus:outline-none focus:border-[#E11D48] transition-all text-gray-400"
          >
            <option value="" className="bg-[#070708]">Selecione</option>
            <option value="Masculino" className="bg-[#070708]">Masculino</option>
            <option value="Feminino" className="bg-[#070708]">Feminino</option>
            <option value="Outro" className="bg-[#070708]">Outro</option>
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Endereço</label>
        <input 
          {...register('address')}
          type="text" 
          placeholder="Rua, Número, Bairro, Cidade - UF"
          className="w-full bg-white/5 border border-white/10 p-4 rounded font-bold text-sm focus:outline-none focus:border-[#E11D48] transition-all"
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-1.5">
          <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Faixa</label>
          <input 
            {...register('belt')}
            type="text" 
            placeholder="Ex: Preta"
            className="w-full bg-white/5 border border-white/10 p-4 rounded font-bold text-sm focus:outline-none focus:border-[#E11D48] transition-all"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Grau</label>
          <input 
            {...register('degree')}
            type="text" 
            placeholder="Ex: 3º Grau"
            className="w-full bg-white/5 border border-white/10 p-4 rounded font-bold text-sm focus:outline-none focus:border-[#E11D48] transition-all"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Graduação</label>
          <input 
            {...register('lastGraduation')}
            type="date" 
            className="w-full bg-white/5 border border-white/10 p-4 rounded font-bold text-sm focus:outline-none focus:border-[#E11D48] transition-all text-gray-400"
          />
        </div>
      </div>

      {/* Senha */}
      <div className="space-y-1.5">
        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Senha</label>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-600 group-focus-within:text-[#E11D48]">
            <Lock size={18} />
          </div>
          <input 
            {...register('password')}
            type={showPassword ? "text" : "password"} 
            disabled={isSubmitting}
            placeholder="Mínimo 8 caracteres"
            className={`w-full bg-white/5 border ${errors.password ? 'border-red-500' : 'border-white/10'} p-4 pl-12 rounded font-bold text-sm focus:outline-none focus:border-[#E11D48] transition-all disabled:opacity-50`}
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-600 hover:text-white">
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {errors.password && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1">{errors.password.message}</p>}
      </div>

      {/* Confirmar Senha */}
      <div className="space-y-1.5">
        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Confirmar Senha</label>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-600 group-focus-within:text-[#E11D48]">
            <Lock size={18} />
          </div>
          <input 
            {...register('confirmPassword')}
            type={showPassword ? "text" : "password"} 
            disabled={isSubmitting}
            placeholder="Repita sua senha"
            className={`w-full bg-white/5 border ${errors.confirmPassword ? 'border-red-500' : 'border-white/10'} p-4 pl-12 rounded font-bold text-sm focus:outline-none focus:border-[#E11D48] transition-all disabled:opacity-50`}
          />
        </div>
        {errors.confirmPassword && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1">{errors.confirmPassword.message}</p>}
      </div>

      <div className="pt-2">
        <label className="flex items-start gap-3 cursor-pointer group">
          <input 
            {...register('terms')}
            type="checkbox" 
            disabled={isSubmitting}
            className="mt-1 w-4 h-4 bg-white/5 border-white/10 rounded accent-[#E11D48] disabled:opacity-50" 
          />
          <span className="text-[10px] font-bold text-gray-500 uppercase leading-relaxed tracking-wider group-hover:text-gray-300 transition-colors">
            Eu aceito os <button type="button" className="text-[#E11D48] hover:underline">Termos de Serviço</button> e a <button type="button" className="text-[#E11D48] hover:underline">Política de Privacidade</button>.
          </span>
        </label>
        {errors.terms && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1 mt-1">{errors.terms.message}</p>}
      </div>

      <button 
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#E11D48] hover:bg-white hover:text-black py-5 rounded font-black text-lg uppercase italic tracking-tighter transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#E11D48]/20 group mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>PROCESSANDO... <Loader2 className="animate-spin" size={20} /></>
        ) : (
          <>CRIAR MINHA CONTA <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" strokeWidth={3} /></>
        )}
      </button>

      <div className="mt-8 text-center">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">
          Já possui uma conta? <button type="button" onClick={() => router.push('/guest/login')} className="text-white font-black hover:text-[#E11D48] ml-1 transition-colors italic uppercase">Fazer Login</button>
        </p>
      </div>
    </form>
  );
}
