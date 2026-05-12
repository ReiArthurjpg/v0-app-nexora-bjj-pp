import { Mail, Lock, Eye, EyeOff, ChevronRight, Loader2 } from 'lucide-react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { LoginFormData } from '../../../schemas/login.schema';

interface FormFieldsProps {
  register: UseFormRegister<LoginFormData>;
  errors: FieldErrors<LoginFormData>;
  isLoading: boolean;
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
  router: any;
}

export function FormFields({ 
  register, 
  errors, 
  isLoading, 
  showPassword, 
  setShowPassword,
  router 
}: FormFieldsProps) {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">E-mail</label>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-600 group-focus-within:text-[#E11D48]">
            <Mail size={18} />
          </div>
          <input 
            {...register('email')}
            type="email" 
            disabled={isLoading}
            placeholder="Digite seu e-mail"
            className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} p-4 pl-12 rounded font-bold text-sm focus:outline-none focus:border-[#E11D48] transition-all disabled:opacity-50`}
          />
        </div>
        {errors.email && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1">{errors.email.message}</p>}
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center px-1">
          <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Senha</label>
        </div>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-600 group-focus-within:text-[#E11D48]">
            <Lock size={18} />
          </div>
          <input 
            {...register('password')}
            type={showPassword ? "text" : "password"} 
            disabled={isLoading}
            placeholder="Digite sua senha"
            className={`w-full bg-white/5 border ${errors.password ? 'border-red-500' : 'border-white/10'} p-4 pl-12 rounded font-bold text-sm focus:outline-none focus:border-[#E11D48] transition-all disabled:opacity-50`}
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute cursor-pointer inset-y-0 right-0 pr-4 flex items-center text-gray-600 hover:text-white">
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {errors.password && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1">{errors.password.message}</p>}
      </div>

      <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest">
        <label className="flex items-center gap-2 cursor-pointer group">
          <input type="checkbox" className="w-4 h-4 bg-white/5 border-white/10 rounded accent-[#E11D48]" />
          <span className="text-gray-500 group-hover:text-white transition-colors">Lembrar de mim</span>
        </label>
        <button type="button" onClick={() => router.push('/guest/forgot-password')} className="text-[#E11D48] cursor-pointer hover:underline italic">Esqueceu sua senha?</button>
      </div>

      <button 
        type="submit"
        disabled={isLoading}
        className="w-full cursor-pointer bg-[#E11D48] hover:bg-white hover:text-black py-5 rounded font-black text-lg uppercase italic tracking-tighter transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#E11D48]/10 group disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <>ENVIANDO... <Loader2 className="animate-spin" size={20} /></>
        ) : (
          <>ENTRAR <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" strokeWidth={3} /></>
        )}
      </button>
    </div>
  );
}
