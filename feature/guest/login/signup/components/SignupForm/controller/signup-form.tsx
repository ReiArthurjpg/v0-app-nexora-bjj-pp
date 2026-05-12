'use client';

import React from 'react';
import { useSignupForm } from '../hooks/useSignupForm';
import { SignupHeader } from '../ui/SignupHeader';
import { SignupFields } from '../ui/SignupFields';
import { SignupVisualSide } from '../ui/SignupVisualSide';

export function SignupForm() {
  const { form, isSubmitting, showPassword, setShowPassword, onSubmit } = useSignupForm();

  return (
    <div className="min-h-screen bg-[#070708] text-white font-sans selection:bg-[#E11D48] selection:text-white flex overflow-hidden">
      
      {/* COLUNA ESQUERDA: CONTEÚDO VISUAL E RECURSOS */}
      <SignupVisualSide />

      {/* COLUNA DIREITA: FORMULÁRIO DE REGISTRO */}
      <div className="w-full lg:w-[45%] flex flex-col relative z-10 bg-[#070708] overflow-y-auto custom-scrollbar">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        <main className="flex-grow flex items-center justify-center px-8 md:px-16 pb-12 pt-12 lg:pt-4">
          <div className="w-full max-w-md">
            <SignupHeader />
            <SignupFields 
              form={form}
              isSubmitting={isSubmitting}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              onSubmit={onSubmit}
            />
          </div>
        </main>

        <footer className="p-8 flex justify-center gap-8 opacity-30 text-[9px] font-black uppercase tracking-widest mt-auto">
          <span>© 2024 NEXORA BJJ SYSTEM</span>
          <a href="#" className="hover:text-[#E11D48] text-white">Suporte</a>
          <a href="#" className="hover:text-[#E11D48] text-white">Privacidade</a>
        </footer>
      </div>

      <style jsx>{`
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
