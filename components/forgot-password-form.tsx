'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Zap,
  ChevronRight,
  Mail,
  ArrowLeft,
  Users,
  Trophy,
  Activity,
  CheckCircle2,
  Shield,
  Target,
  BarChart3,
  Loader2
} from 'lucide-react';
import { authService } from '@/services/auth.service';
import { toast } from 'sonner';

export function ForgotPasswordForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleResetRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      const result = await authService.forgotPassword(email);
      
      // Generic success check for forgot password
      if (result && (result.success || result.message)) {
        setIsSubmitted(true);
      } else {
        toast.error(result?.message || 'Ocorreu um erro ao processar sua solicitação.');
      }
    } catch (error: any) {
      console.error('Forgot password error:', error);
      toast.error('Erro ao conectar com o servidor. Tente novamente mais tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#070708] text-white font-sans selection:bg-[#E11D48] selection:text-white flex overflow-hidden">
      
      {/* COLUNA ESQUERDA: CONTEÚDO VISUAL E INSTITUCIONAL */}
      <div className="hidden lg:flex lg:w-[55%] flex-col relative overflow-hidden bg-gradient-to-br from-[#070708] via-[#0F0F11] to-[#E11D48]/20 p-16 justify-center border-r border-white/5">
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

          <h2 className="text-6xl font-black uppercase italic tracking-tighter leading-[0.9] mb-6">
            DOMINE O SEU <br />
            <span className="text-[#E11D48]">DESTINO NO TATAME.</span>
          </h2>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-12 max-w-lg">
            A plataforma definitiva para mestres que buscam excelência na gestão e performance de suas academias.
          </p>

          {/* NOVOS ELEMENTOS VISUAIS */}
          <div className="grid grid-cols-1 gap-4 mb-16">
            <div className="flex items-center gap-5 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm group hover:bg-[#E11D48]/10 transition-all duration-500">
              <div className="w-12 h-12 rounded-xl bg-[#E11D48]/20 flex items-center justify-center text-[#E11D48] group-hover:scale-110 transition-transform">
                <Target size={24} />
              </div>
              <div>
                <h3 className="font-black italic uppercase tracking-tighter text-lg text-white">Graduação Inteligente</h3>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Controle automático de graus e faltas.</p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm group hover:bg-[#E11D48]/10 transition-all duration-500">
              <div className="w-12 h-12 rounded-xl bg-[#E11D48]/20 flex items-center justify-center text-[#E11D48] group-hover:scale-110 transition-transform">
                <BarChart3 size={24} />
              </div>
              <div>
                <h3 className="font-black italic uppercase tracking-tighter text-lg text-white">Análise de Retenção</h3>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Métricas precisas sobre a saúde da sua escola.</p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm group hover:bg-[#E11D48]/10 transition-all duration-500">
              <div className="w-12 h-12 rounded-xl bg-[#E11D48]/20 flex items-center justify-center text-[#E11D48] group-hover:scale-110 transition-transform">
                <Shield size={24} />
              </div>
              <div>
                <h3 className="font-black italic uppercase tracking-tighter text-lg text-white">Segurança de Dados</h3>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Sua base de alunos protegida com criptografia militar.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 opacity-60">
            <MetricBox icon={<Users size={18} />} val="10k+" label="Usuários" />
            <MetricBox icon={<Activity size={18} />} val="2M+" label="Check-ins" />
            <MetricBox icon={<Trophy size={18} />} val="98%" label="Sucesso" />
          </div>
        </div>
      </div>

      {/* COLUNA DIREITA: FORMULÁRIO DE RECUPERAÇÃO */}
      <div className="w-full lg:w-[45%] flex flex-col relative z-10 bg-[#070708]">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        {/* Header para mobile apenas */}
        <header className="p-8 lg:hidden">
          <div className="flex items-center gap-2" onClick={() => router.push('/')}>
            <div className="w-8 h-8 bg-[#E11D48] rounded flex items-center justify-center -skew-x-12">
              <Zap className="text-white fill-current" size={18} />
            </div>
            <span className="text-lg font-black tracking-tighter italic">NEXORA BJJ</span>
          </div>
        </header>

        <main className="flex-grow flex items-center justify-center px-8 md:px-16 pb-12">
          <div className="w-full max-w-md">
            
            <button 
              onClick={() => router.push('/login')}
              disabled={isSubmitting}
              className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-10 text-[10px] font-black uppercase tracking-widest group disabled:opacity-50"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
              Voltar ao login
            </button>

            {!isSubmitted ? (
              <div className="animate-in fade-in slide-in-from-right-4 duration-700">
                <div className="mb-10">
                  <h1 className="text-4xl font-black italic uppercase tracking-tighter mb-2 leading-none">
                    RECUPERAR <span className="text-[#E11D48]">ACESSO</span>
                  </h1>
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] leading-relaxed">
                    Recupere sua chave de acesso à plataforma digital.
                  </p>
                </div>

                <form onSubmit={handleResetRequest} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">E-mail Cadastrado</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-600 group-focus-within:text-[#E11D48]">
                        <Mail size={18} />
                      </div>
                      <input
                        required
                        type="email"
                        disabled={isSubmitting}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="nome@academia.com"
                        className="w-full bg-white/5 border border-white/10 p-4 pl-12 rounded font-bold text-sm focus:outline-none focus:border-[#E11D48] transition-all disabled:opacity-50"
                      />
                    </div>
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
                </form>

                <div className="mt-8 pt-8 border-t border-white/5 text-center">
                  <p className="text-xs font-bold text-gray-600 uppercase tracking-widest leading-loose">
                    Dificuldades no acesso?<br/>
                    <button className="text-white hover:text-[#E11D48] border-b border-[#E11D48]">Contatar Suporte Técnico</button>
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center animate-in zoom-in-95 duration-500">
                <div className="w-20 h-20 bg-[#E11D48]/10 border border-[#E11D48]/30 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-[#E11D48]/20">
                  <CheckCircle2 size={40} className="text-[#E11D48]" />
                </div>
                <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-4 leading-none">SOLICITAÇÃO <span className="text-[#E11D48]">ENVIADA</span></h2>
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest leading-relaxed mb-10">
                  Se o e-mail <span className="text-white">{email}</span> possuir uma conta ativa, você receberá o link em instantes.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="w-full bg-white/5 border border-white/10 hover:bg-white/10 py-4 rounded font-black text-[10px] uppercase tracking-widest transition-all text-white"
                >
                  Tentar outro e-mail
                </button>
              </div>
            )}
          </div>
        </main>

        <footer className="p-8 flex justify-center gap-8 opacity-30 text-[9px] font-black uppercase tracking-widest mt-auto">
          <span className="text-gray-400">© 2024 NEXORA SYSTEMS</span>
          <a href="#" className="hover:text-[#E11D48] text-white">POLÍTICA DE PRIVACIDADE</a>
        </footer>
      </div>
    </div>
  );
}

const MetricBox = ({ icon, val, label }: { icon: React.ReactNode; val: string; label: string }) => (
  <div className="p-4 bg-white/5 border border-white/5 rounded-xl flex flex-col items-center text-center group hover:bg-white/10 transition-all">
    <div className="text-[#E11D48] mb-2 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div className="text-xl font-black italic tracking-tighter text-white mb-0.5">{val}</div>
    <div className="text-[8px] font-black uppercase tracking-widest text-gray-500">{label}</div>
  </div>
);
