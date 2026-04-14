'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Zap, Mail, Lock, Eye, EyeOff, ChevronRight } from 'lucide-react';

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/hub');
  };

  const handleGoogleLogin = () => {
    router.push('/hub');
  };

  return (
    <div className="w-full lg:w-[45%] flex flex-col relative z-10 bg-[#070708] border-r border-white/5">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      
      <header className="p-8">
        <a href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-[#E11D48] rounded flex items-center justify-center -skew-x-12">
            <Zap className="text-white fill-current" size={24} />
          </div>
          <span className="text-xl font-black tracking-tighter italic">NEXORA <span className="text-[#E11D48]">BJJ</span></span>
        </a>
      </header>

      <main className="flex-grow flex items-center justify-center px-8 md:px-16 pb-12">
        <div className="w-full max-w-md">
          <div className="mb-10">
            <h1 className="text-4xl font-black italic uppercase tracking-tighter mb-2">
              ACESSE SUA <span className="text-[#E11D48]">CONTA</span>
            </h1>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
              Informe suas credenciais para gerenciar o tatame
            </p>
            
            <div className="flex gap-4 mt-6 opacity-60">
              <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-tighter">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> Seguro
              </div>
              <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-tighter">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Rápido
              </div>
              <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-tighter">
                <div className="w-1.5 h-1.5 rounded-full bg-[#E11D48]" /> Confiável
              </div>
            </div>
          </div>

          <form className="space-y-5" onSubmit={handleLogin}>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">E-mail</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-600 group-focus-within:text-[#E11D48]">
                  <Mail size={18} />
                </div>
                <input 
                  type="email" 
                  placeholder="Digite seu e-mail"
                  className="w-full bg-white/5 border border-white/10 p-4 pl-12 rounded font-bold text-sm focus:outline-none focus:border-[#E11D48] transition-all"
                />
              </div>
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
                  type={showPassword ? "text" : "password"} 
                  placeholder="Digite sua senha"
                  className="w-full bg-white/5 border border-white/10 p-4 pl-12 rounded font-bold text-sm focus:outline-none focus:border-[#E11D48] transition-all"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute cursor-pointer inset-y-0 right-0 pr-4 flex items-center text-gray-600 hover:text-white">
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 bg-white/5 border-white/10 rounded accent-[#E11D48]" />
                <span className="text-gray-500 group-hover:text-white transition-colors">Lembrar de mim</span>
              </label>
              <button type="button" onClick={() => router.push('/forgot-password')} className="text-[#E11D48] cursor-pointer hover:underline italic">Esqueceu sua senha?</button>
            </div>

            <button className="w-full cursor-pointer bg-[#E11D48] hover:bg-white hover:text-black py-5 rounded font-black text-lg uppercase italic tracking-tighter transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#E11D48]/10 group">
              ENTRAR <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" strokeWidth={3} />
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-600">Ou continuar com</p>
            <button type="button" onClick={handleGoogleLogin} className="w-full cursor-pointer mt-4 bg-transparent border border-white/10 hover:bg-white/5 py-4 rounded flex items-center justify-center gap-3 transition-all">
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/action/google.svg" className="w-5 h-5" alt="Google" />
              <span className="text-xs font-black uppercase tracking-widest text-gray-300">Google Account</span>
            </button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">
              Não tem uma conta? <button onClick={() => router.push('/signup')} className="cursor-pointer text-white hover:text-[#E11D48] ml-1">Criar conta</button>
            </p>
          </div>
        </div>
      </main>

      <footer className="p-8 flex justify-center gap-8 opacity-30 text-[9px] font-black uppercase tracking-widest">
        <a href="#" className="cursor-not-allowed">Privacidade</a>
        <a href="#" className="cursor-not-allowed">Suporte</a>
        <a href="#" className="cursor-not-allowed">Termos de Uso</a>
      </footer>
    </div>
  );
}
