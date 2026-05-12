'use client';

import { FormHeader, FormFields, SocialLogin } from '../ui';
import { useLoginForm } from '../hooks/useLoginForm';
import DecryptedText from '@/components/react-bits/DecryptedText';

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
            {/* H1 com DecryptedText */}
            <h1 className="text-4xl font-black italic uppercase tracking-tighter mb-2">
              <DecryptedText
                text="ACESSE SUA"
                speed={40}
                maxIterations={10}
                sequential={true}
                revealDirection="start"
                animateOn="view"
                className="text-white"
                encryptedClassName="text-white/20"
                characters="ABCXYZ@#%&01"
                tag="span"
              />{' '}
              <DecryptedText
                text="CONTA"
                speed={50}
                maxIterations={12}
                sequential={true}
                revealDirection="end"
                animateOn="view"
                className="text-[#E11D48]"
                encryptedClassName="text-[#E11D48]/25"
                characters="C0NT4XZ@#"
                tag="span"
              />
            </h1>

            {/* Subtítulo com DecryptedText */}
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
              <DecryptedText
                text="Informe suas credenciais para gerenciar o tatame"
                speed={50}
                maxIterations={15}
                animateOn="view"
                className="text-gray-500"
                encryptedClassName="text-gray-700"
              />
            </p>
            
            {/* Badges com DecryptedText */}
            <div className="flex gap-4 mt-6 opacity-60">
              <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-tighter text-white">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                <DecryptedText
                  text="Seguro"
                  speed={60}
                  maxIterations={8}
                  sequential={true}
                  revealDirection="start"
                  animateOn="view"
                  className="text-white"
                  encryptedClassName="text-cyan-500/40"
                  characters="S3GUR0XZ"
                />
              </div>
              <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-tighter text-white">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <DecryptedText
                  text="Rápido"
                  speed={65}
                  maxIterations={8}
                  sequential={true}
                  revealDirection="start"
                  animateOn="view"
                  className="text-white"
                  encryptedClassName="text-green-500/40"
                  characters="R4P1D0XZ"
                />
              </div>
              <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-tighter text-white">
                <div className="w-1.5 h-1.5 rounded-full bg-[#E11D48]" />
                <DecryptedText
                  text="Confiável"
                  speed={55}
                  maxIterations={8}
                  sequential={true}
                  revealDirection="start"
                  animateOn="view"
                  className="text-white"
                  encryptedClassName="text-[#E11D48]/40"
                  characters="C0NF14VELXZ"
                />
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
              Não tem uma conta?{' '}
              <button
                onClick={() => router.push('/signup')}
                className="cursor-pointer ml-1 transition-all duration-200 hover:scale-105"
              >
                <DecryptedText
                  text="Criar conta"
                  speed={50}
                  maxIterations={10}
                  animateOn="view"
                  className="text-white uppercase font-black italic"
                  encryptedClassName="text-[#E11D48]"
                />
              </button>
            </p>
          </div>
        </div>

        {/* Bottom: Footer com DecryptedText */}
        <footer className="w-full max-w-md flex justify-center gap-8 opacity-30 text-[9px] font-black uppercase tracking-widest">
          <a href="#" className="cursor-not-allowed text-white hover:opacity-100 transition-opacity">
            <DecryptedText text="Privacidade" speed={80} animateOn="view" />
          </a>
          <a href="#" className="cursor-not-allowed text-white hover:opacity-100 transition-opacity">
            <DecryptedText text="Suporte" speed={90} animateOn="view" />
          </a>
          <a href="#" className="cursor-not-allowed text-white hover:opacity-100 transition-opacity">
            <DecryptedText text="Termos de Uso" speed={100} animateOn="view" />
          </a>
        </footer>
      </main>
    </div>
  );
}
