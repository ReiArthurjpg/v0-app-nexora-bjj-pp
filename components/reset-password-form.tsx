'use client';

import React, { useState, useEffect } from 'react';
import {
  Zap,
  ChevronRight,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  ArrowLeft,
  ShieldAlert,
  Fingerprint,
  Loader2,
  XCircle
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { authService } from '@/services/auth.service';
import { toast } from 'sonner';
import Cookies from 'js-cookie';

interface ResetPasswordFormProps {
  token: string;
}

export function ResetPasswordForm({ token }: ResetPasswordFormProps) {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValidating, setIsValidating] = useState(true);
  const [isTokenValid, setIsTokenValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    async function validateToken() {
      try {
        const result = await authService.validateResetToken(token);
        if (result && result.valid) {
          setIsTokenValid(true);
        } else {
          toast.error(result?.message || 'Link de recuperação expirado ou inválido.');
        }
      } catch (error) {
        console.error('Token validation error:', error);
        toast.error('Erro ao validar token de segurança.');
      } finally {
        setIsValidating(false);
      }
    }
    validateToken();
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('As senhas não coincidem.');
      return;
    }
    if (password.length < 8) {
      toast.error('A senha deve ter no mínimo 8 caracteres.');
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await authService.resetPassword({ 
        token, 
        newPassword: password, 
        confirmPassword 
      });

      if (result && (result.success || result.message)) {
        toast.success('Senha atualizada com sucesso! Faça login com a nova senha.');
        Cookies.remove('nexora_token');
        router.push('/login');
      } else {
        toast.error(result?.message || 'Não foi possível redefinir sua senha.');
      }
    } catch (error) {
      console.error('Reset password error:', error);
      toast.error('Erro de conexão com o servidor.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isValidating) {
    return (
      <div className="min-h-screen bg-[#070708] flex flex-col items-center justify-center text-white p-8">
        <Loader2 className="animate-spin text-[#E11D48] mb-4" size={48} />
        <p className="text-[10px] font-black uppercase tracking-[0.3em] animate-pulse">Validando token de segurança...</p>
      </div>
    );
  }

  if (!isTokenValid) {
    return (
      <div className="min-h-screen bg-[#070708] flex flex-col items-center justify-center text-white p-8">
        <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6">
          <XCircle className="text-red-500" size={40} />
        </div>
        <h1 className="text-3xl font-black italic uppercase tracking-tighter mb-4 text-center">LINK <span className="text-[#E11D48]">EXPIRADO</span></h1>
        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest text-center max-w-xs mb-8">
          Este link de recuperação não é mais válido ou já foi utilizado.
        </p>
        <button 
          onClick={() => router.push('/forgot-password')}
          className="bg-[#E11D48] hover:bg-white hover:text-black px-8 py-4 rounded font-black text-[10px] uppercase tracking-widest transition-all"
        >
          Solicitar novo link
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070708] text-white font-sans selection:bg-[#E11D48] selection:text-white flex overflow-hidden">
      
      {/* COLUNA ESQUERDA: FORMULÁRIO DE RESET */}
      <div className="w-full lg:w-[45%] flex flex-col relative z-10 bg-[#070708] border-r border-white/5">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        <header className="p-8">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => router.push('/')}>
            <div className="w-10 h-10 bg-[#E11D48] rounded flex items-center justify-center -skew-x-12">
              <Zap className="text-white fill-current" size={24} />
            </div>
            <span className="text-xl font-black tracking-tighter italic">NEXORA <span className="text-[#E11D48]">BJJ</span></span>
          </div>
        </header>

        <main className="flex-grow flex items-center justify-center px-8 md:px-16 pb-12">
          <div className="w-full max-w-md">
            <div className="mb-10">
              <button 
                onClick={() => router.push('/login')}
                disabled={isSubmitting}
                className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest mb-6 group disabled:opacity-50"
              >
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Voltar para o login
              </button>
              
              <h1 className="text-4xl font-black italic uppercase tracking-tighter mb-2 leading-none">
                REDEFINIR <span className="text-[#E11D48]">SENHA</span>
              </h1>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest leading-relaxed">
                Crie uma nova credencial de acesso para retornar ao tatame digital.
              </p>
              
              <div className="flex gap-4 mt-6 opacity-60">
                <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-tighter">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> Criptografia 256-bit
                </div>
                <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-tighter">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E11D48]" /> Proteção Ativa
                </div>
              </div>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* CAMPO: NOVA SENHA */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Nova Senha</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-600 group-focus-within:text-[#E11D48]">
                    <Lock size={18} />
                  </div>
                  <input
                    required
                    disabled={isSubmitting}
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Sua nova senha forte"
                    className="w-full bg-white/5 border border-white/10 p-4 pl-12 rounded font-bold text-sm focus:outline-none focus:border-[#E11D48] transition-all disabled:opacity-50"
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)} 
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-600 hover:text-white"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* CAMPO: CONFIRMAÇÃO DE SENHA */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Confirmar Nova Senha</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-600 group-focus-within:text-[#E11D48]">
                    <ShieldCheck size={18} />
                  </div>
                  <input
                    required
                    disabled={isSubmitting}
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Repita a nova senha"
                    className="w-full bg-white/5 border border-white/10 p-4 pl-12 rounded font-bold text-sm focus:outline-none focus:border-[#E11D48] transition-all disabled:opacity-50"
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-600 hover:text-white"
                  >
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
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
                disabled={isSubmitting || password.length < 8 || password !== confirmPassword}
                className="w-full bg-[#E11D48] hover:bg-white hover:text-black disabled:opacity-50 disabled:cursor-not-allowed py-5 rounded font-black text-lg uppercase italic tracking-tighter transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#E11D48]/10 group mt-4"
              >
                {isSubmitting ? (
                  <>ATUALIZANDO... <Loader2 className="animate-spin" size={20} /></>
                ) : (
                  <>ATUALIZAR ACESSO <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" strokeWidth={3} /></>
                )}
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                Encontrou problemas? <button className="text-white hover:text-[#E11D48] ml-1 uppercase underline underline-offset-4">Falar com o Suporte</button>
              </p>
            </div>
          </div>
        </main>

        <footer className="p-8 flex justify-center gap-8 opacity-30 text-[9px] font-black uppercase tracking-widest mt-auto">
          <span className="text-white">SISTEMA DE SEGURANÇA NEXORA</span>
          <span className="text-white">© 2024</span>
        </footer>
      </div>

      {/* COLUNA DIREITA: CONTEÚDO VISUAL */}
      <div className="hidden lg:flex lg:w-[55%] flex-col relative overflow-hidden bg-gradient-to-br from-[#070708] via-[#0F0F11] to-[#E11D48]/20 p-16 justify-center">
        {/* Efeito de luz ambiente */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E11D48]/20 blur-[180px] rounded-full -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative z-10 max-w-xl">
          <div className="mb-12">
             <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6 -rotate-6">
                <Fingerprint className="text-[#E11D48]" size={32} />
             </div>
             <h2 className="text-6xl font-black uppercase italic tracking-tighter leading-none mb-6">
               MANTENHA SUA <br />
               <span className="text-[#E11D48]">JORNADA</span> <br />
               PROTEGIDA.
             </h2>
             <div className="w-20 h-1.5 bg-[#E11D48] mb-8" />
             <p className="text-gray-400 font-bold uppercase tracking-widest text-sm leading-relaxed mb-12">
               A segurança da sua academia começa com uma senha forte. Redefina agora e recupere o controle total da sua gestão.
             </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-white/5 border border-white/5 rounded-2xl backdrop-blur-sm group hover:bg-white/10 transition-all cursor-default">
              <ShieldCheck className="text-[#E11D48] mb-4" />
              <p className="text-white font-black italic uppercase tracking-tighter text-lg">Protocolo Seguro</p>
              <p className="text-[10px] text-gray-500 uppercase font-bold mt-1 tracking-widest">Verificação em tempo real</p>
            </div>
            <div className="p-6 bg-white/5 border border-white/5 rounded-2xl backdrop-blur-sm group hover:bg-white/10 transition-all cursor-default">
              <Zap className="text-[#E11D48] mb-4" />
              <p className="text-white font-black italic uppercase tracking-tighter text-lg">Acesso Rápido</p>
              <p className="text-[10px] text-gray-500 uppercase font-bold mt-1 tracking-widest">Login instantâneo após reset</p>
            </div>
          </div>
        </div>

        {/* Decorativo de fundo */}
        <div className="absolute -bottom-10 -right-10 text-[20rem] font-black italic opacity-[0.03] select-none pointer-events-none tracking-tighter">
          BJJ
        </div>
      </div>
    </div>
  );
}
