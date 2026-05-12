'use client';

import React from 'react';
import { useResetPasswordForm } from '../hooks/useResetPasswordForm';
import { ResetPasswordHeader } from '../ui/ResetPasswordHeader';
import { ResetPasswordFields } from '../ui/ResetPasswordFields';
import { ResetPasswordVisualSide } from '../ui/ResetPasswordVisualSide';
import { ResetPasswordLoading } from '../ui/ResetPasswordLoading';
import { ResetPasswordInvalid } from '../ui/ResetPasswordInvalid';

interface ResetPasswordFormProps {
  token: string;
}

export function ResetPasswordForm({ token }: ResetPasswordFormProps) {
  const { 
    form, 
    showPassword, 
    setShowPassword, 
    showConfirmPassword, 
    setShowConfirmPassword,
    isValidating, 
    isTokenValid, 
    isSubmitting, 
    onSubmit, 
    router 
  } = useResetPasswordForm(token);

  if (isValidating) return <ResetPasswordLoading />;
  if (!isTokenValid) return <ResetPasswordInvalid />;

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
            <ResetPasswordHeader isSubmitting={isSubmitting} />
            <ResetPasswordFields 
              form={form}
              isSubmitting={isSubmitting}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              showConfirmPassword={showConfirmPassword}
              setShowConfirmPassword={setShowConfirmPassword}
              onSubmit={onSubmit}
            />

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
      <ResetPasswordVisualSide />
    </div>
  );
}
import { Zap } from 'lucide-react';
