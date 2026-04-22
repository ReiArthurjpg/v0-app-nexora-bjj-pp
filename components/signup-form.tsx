'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Zap, 
  ChevronRight, 
  Mail, 
  Lock, 
  User,
  Eye, 
  EyeOff,
  ShieldCheck,
  Building2,
  CheckCircle2,
  BarChart3,
  Layers,
  Smartphone,
  Loader2
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';

const signupSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('E-mail profissional inválido'),
  academyName: z.string().min(2, 'Informe o nome da sua academia'),
  password: z.string()
    .min(8, 'A senha deve ter pelo menos 8 caracteres')
    .regex(/[a-z]/, 'Deve conter ao menos uma letra minúscula')
    .regex(/[A-Z]/, 'Deve conter ao menos uma letra maiúscula')
    .regex(/\d/, 'Deve conter ao menos um número')
    .regex(/[^a-zA-Z0-9\s]/, 'Deve conter ao menos um símbolo'),
  terms: z.literal(true, {
    errorMap: () => ({ message: 'Você deve aceitar os termos para continuar' }),
  }),
});

type SignupFormData = z.infer<typeof signupSchema>;

const features = [
  {
    icon: <Layers className="text-[#E11D48]" size={24} />,
    title: "GESTÃO DE GRADUAÇÃO",
    description: "Algoritmo inteligente que monitora a frequência e sugere trocas de faixa e graus automaticamente."
  },
  {
    icon: <BarChart3 className="text-[#E11D48]" size={24} />,
    title: "FINANCEIRO BLINDADO",
    description: "Controle de mensalidades, cobranças automáticas via PIX e relatórios de inadimplência em tempo real."
  },
  {
    icon: <Smartphone className="text-[#E11D48]" size={24} />,
    title: "APP DO ALUNO",
    description: "Seus alunos podem marcar aulas, visualizar currículo técnico e acompanhar o progresso pelo celular."
  }
];

export function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { signup } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      terms: false,
    }
  });

  const onSubmit = async (data: SignupFormData) => {
    setIsSubmitting(true);
    try {
      // Replicating password as confirmPassword as requested
      const payload = {
        ...data,
        confirmPassword: data.password
      };

      const result = await signup(payload);
      
      if (result && (result.success || result.id)) {
        toast.success('Conta criada com sucesso! Faça login para começar.');
        router.push('/login');
      } else {
        toast.error(result?.message || 'Erro ao criar conta. Verifique os dados e tente novamente.');
      }
    } catch (error: any) {
      console.error('Signup error:', error);
      toast.error('Erro ao conectar com o servidor. Tente novamente mais tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#070708] text-white font-sans selection:bg-[#E11D48] selection:text-white flex overflow-hidden">
      
      {/* COLUNA ESQUERDA: CONTEÚDO VISUAL E RECURSOS */}
      <div className="hidden lg:flex lg:w-[55%] flex-col relative overflow-hidden bg-gradient-to-br from-[#070708] via-[#0F0F11] to-[#E11D48]/20 p-16 justify-center border-r border-white/5">
        {/* Efeito de luz ambiente */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#E11D48]/10 blur-[150px] rounded-full -translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative z-10 max-w-2xl">
          <header className="mb-12">
            <div className="flex items-center gap-2 group cursor-pointer" onClick={() => router.push('/')}>
              <div className="w-10 h-10 bg-[#E11D48] rounded flex items-center justify-center -skew-x-12">
                <Zap className="text-white fill-current" size={24} />
              </div>
              <span className="text-xl font-black tracking-tighter italic">NEXORA <span className="text-[#E11D48]">BJJ</span></span>
            </div>
          </header>

          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <ShieldCheck className="text-green-500" size={16} />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">O Padrão Ouro em Gestão de Academias</span>
          </div>

          <h2 className="text-6xl font-black uppercase italic tracking-tighter leading-[0.9] mb-8">
            DOMINE O SEU <br />
            <span className="text-[#E11D48]">TATAME</span> COM <br />
            TECNOLOGIA.
          </h2>
          
          <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-sm mb-12 max-w-lg">
            Pare de perder tempo com planilhas e foque no que realmente importa: o desenvolvimento dos seus alunos.
          </p>

          {/* LISTA DE RECURSOS */}
          <div className="space-y-6 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-5 p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-all group">
                <div className="mt-1 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-black italic text-lg uppercase tracking-tighter mb-1">{feature.title}</h3>
                  <p className="text-gray-500 text-xs font-bold leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-8 opacity-50">
             <div className="flex flex-col">
                <span className="text-2xl font-black italic tracking-tighter text-white">100%</span>
                <span className="text-[9px] font-black uppercase tracking-widest text-gray-500">Cloud Based</span>
             </div>
             <div className="w-[1px] h-8 bg-white/10" />
             <div className="flex flex-col">
                <span className="text-2xl font-black italic tracking-tighter text-white">SSL</span>
                <span className="text-[9px] font-black uppercase tracking-widest text-gray-500">Encrypted</span>
             </div>
             <div className="w-[1px] h-8 bg-white/10" />
             <div className="flex flex-col">
                <span className="text-2xl font-black italic tracking-tighter text-white">24/7</span>
                <span className="text-[9px] font-black uppercase tracking-widest text-gray-500">Suporte</span>
             </div>
          </div>
        </div>
      </div>

      {/* COLUNA DIREITA: FORMULÁRIO DE REGISTRO */}
      <div className="w-full lg:w-[45%] flex flex-col relative z-10 bg-[#070708] overflow-y-auto custom-scrollbar">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        <header className="p-8 lg:hidden">
          <div className="flex items-center gap-2" onClick={() => router.push('/')}>
            <div className="w-10 h-10 bg-[#E11D48] rounded flex items-center justify-center -skew-x-12">
              <Zap className="text-white fill-current" size={24} />
            </div>
            <span className="text-xl font-black tracking-tighter italic">NEXORA <span className="text-[#E11D48]">BJJ</span></span>
          </div>
        </header>

        <main className="flex-grow flex items-center justify-center px-8 md:px-16 pb-12 pt-12 lg:pt-4">
          <div className="w-full max-w-md">
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-[2px] w-8 bg-[#E11D48]" />
                <span className="text-[#E11D48] text-[10px] font-black uppercase tracking-widest">Início imediato</span>
              </div>
              <h1 className="text-4xl font-black italic uppercase tracking-tighter mb-2 leading-tight">
                CRIAR SUA <span className="text-[#E11D48]">CONTA</span>
              </h1>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
                Preencha os dados abaixo para configurar seu tatame
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
            </form>

            <div className="mt-8 text-center">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                Já possui uma conta? <button onClick={() => router.push('/login')} className="text-white font-black hover:text-[#E11D48] ml-1 transition-colors italic uppercase">Fazer Login</button>
              </p>
            </div>
          </div>
        </main>

        <footer className="p-8 flex justify-center gap-8 opacity-30 text-[9px] font-black uppercase tracking-widest mt-auto">
          <span>© 2024 NEXORA BJJ SYSTEM</span>
          <a href="#" className="hover:text-[#E11D48] text-white">Suporte</a>
          <a href="#" className="hover:text-[#E11D48] text-white">Privacidade</a>
        </footer>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(225, 29, 72, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(225, 29, 72, 0.5);
        }
      `}</style>
    </div>
  );
}
