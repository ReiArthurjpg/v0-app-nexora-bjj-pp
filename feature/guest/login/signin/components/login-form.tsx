'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Zap, Mail, Lock, Eye, EyeOff, ChevronRight, Loader2 } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';

const loginSchema = z.object({
  email: z.string().email('E-mail inválido'),
  password: z.string().min(1, 'A senha é obrigatória'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { login, isLoading: authLoading } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsSubmitting(true);
    try {
      const result = await login(data);
      
      // Checking success based on response structure from authService.login
      if (result && result.accessToken) {
        toast.success('Login realizado com sucesso! Redirecionando...');
        router.push('/hub');
      } else {
        toast.error(result?.message || 'Credenciais inválidas. Tente novamente.');
      }
    } catch (error: any) {
      console.error('Login error:', error);
      toast.error('Erro ao conectar com o servidor. Tente novamente mais tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isLoading = authLoading || isSubmitting;

  return (
    <div className="w-full lg:w-[45%] flex  flex-col relative z-10 bg-[#070708] border-r border-white/5">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      
      <header className="p-8">
        <a href="/" className="flex items-center gap-2 group cursor-pointer text-decoration-none">
          <div className="w-10 h-10 bg-[#E11D48] rounded flex items-center justify-center -skew-x-12">
            <Zap className="text-white fill-current" size={24} />
          </div>
          <span className="text-xl font-black tracking-tighter italic text-white underline-none">NEXORA <span className="text-[#E11D48]">BJJ</span></span>
        </a>
      </header>

      <main className="flex-grow flex items-center justify-end px-8 md:px-16 pb-12">
        <div className="w-full max-w-md">
          <div className="mb-10">
            <h1 className="text-4xl font-black italic uppercase tracking-tighter mb-2">
              ACESSE SUA <span className="text-[#E11D48]">CONTA</span>
            </h1>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
              Informe suas credenciais para gerenciar o tatame
            </p>
            
            <div className="flex gap-4 mt-6 opacity-60">
              <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-tighter text-white">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> Seguro
              </div>
              <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-tighter text-white">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Rápido
              </div>
              <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-tighter text-white">
                <div className="w-1.5 h-1.5 rounded-full bg-[#E11D48]" /> Confiável
              </div>
            </div>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
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
              <button type="button" onClick={() => router.push('/forgot-password')} className="text-[#E11D48] cursor-pointer hover:underline italic">Esqueceu sua senha?</button>
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
          </form>

          <div className="mt-8 text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-600">Ou continuar com</p>
            <button 
              type="button" 
              onClick={async () => {
                try {
                  const { url } = await authService.getGoogleAuthUrl();
                  if (url) window.location.href = url;
                } catch (error) {
                  toast.error('Erro ao conectar com Google');
                }
              }} 
              disabled={isLoading}
              className="w-full cursor-pointer mt-4 bg-transparent border border-white/10 hover:bg-white/5 py-4 rounded flex items-center justify-center gap-3 transition-all disabled:opacity-50"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <span className="text-xs font-black uppercase tracking-widest text-gray-300">Google Account</span>
            </button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">
              Não tem uma conta? <button onClick={() => router.push('/signup')} className="cursor-pointer text-white hover:text-[#E11D48] ml-1 uppercase font-black italic">Criar conta</button>
            </p>
          </div>
        </div>
      </main>

      <footer className="p-8 flex justify-center gap-8 opacity-30 text-[9px] font-black uppercase tracking-widest">
        <a href="#" className="cursor-not-allowed text-white">Privacidade</a>
        <a href="#" className="cursor-not-allowed text-white">Suporte</a>
        <a href="#" className="cursor-not-allowed text-white">Termos de Uso</a>
      </footer>
    </div>
  );
}
