'use client';

import { FormHeader, FormFields, SocialLogin } from '../ui';
import { useLoginForm } from '../hooks/useLoginForm';

export function LoginForm() {
  const { 
    form, 
    showPassword, 
    setShowPassword, 
    isLoading, 
    onSubmit, 
    handleGoogleLogin,
    router 
  } = useLoginForm();

  return (
    <div className="w-full lg:w-[45%] flex flex-col relative z-10 bg-[#070708] border-r border-white/5 min-h-screen">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      
      <main className="flex-grow flex flex-col items-end justify-center gap-12 pl-8 pr-4 md:pl-16 md:pr-8 py-12">
        {/* Topo: Logo */}
        <div className="w-full max-w-md">
          <FormHeader />
        </div>

        {/* Meio: Formulário */}
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

          <form className="space-y-5" onSubmit={onSubmit}>
            <FormFields 
              register={form.register}
              errors={form.formState.errors}
              isLoading={isLoading}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              router={router}
            />
          </form>

          <SocialLogin 
            isLoading={isLoading}
            handleGoogleLogin={handleGoogleLogin}
          />

          <div className="mt-8 text-center">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">
              Problemas para acessar?{' '}
              <button
                onClick={() => router.push('/guest/forgot-password')}
                className="cursor-pointer text-white hover:text-[#E11D48] ml-1 uppercase font-black italic transition-colors duration-200"
              >
                Recuperar senha
              </button>
            </p>
          </div>
        </div>

        {/* Bottom: Footer */}
        <footer className="w-full max-w-md flex justify-center gap-8 opacity-30 text-[9px] font-black uppercase tracking-widest">
          <a href="#" className="cursor-not-allowed text-white hover:opacity-60 transition-opacity">Privacidade</a>
          <a href="#" className="cursor-not-allowed text-white hover:opacity-60 transition-opacity">Suporte</a>
          <a href="#" className="cursor-not-allowed text-white hover:opacity-60 transition-opacity">Termos de Uso</a>
        </footer>
      </main>
    </div>
  );
}
