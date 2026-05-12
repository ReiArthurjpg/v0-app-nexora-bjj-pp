'use client';

import React from 'react';
import { useForgotPasswordForm } from '../hooks/useForgotPasswordForm';
import { ForgotPasswordHeader } from '../ui/ForgotPasswordHeader';
import { ForgotPasswordFields } from '../ui/ForgotPasswordFields';
import { ForgotPasswordSuccess } from '../ui/ForgotPasswordSuccess';
import { ForgotPasswordVisualSide } from '../ui/ForgotPasswordVisualSide';

export function ForgotPasswordForm() {
  const { 
    form, 
    isSubmitting, 
    isSubmitted, 
    submittedEmail, 
    onSubmit, 
    handleBackToEmail 
  } = useForgotPasswordForm();

  return (
    <div className="min-h-screen bg-[#070708] text-white font-sans selection:bg-[#E11D48] selection:text-white flex overflow-hidden">
      
      {/* COLUNA ESQUERDA: CONTEÚDO VISUAL E INSTITUCIONAL */}
      <ForgotPasswordVisualSide />

      {/* COLUNA DIREITA: FORMULÁRIO DE RECUPERAÇÃO */}
      <div className="w-full lg:w-[45%] flex flex-col relative z-10 bg-[#070708]">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        <main className="flex-grow flex items-center justify-center px-8 md:px-16 pb-12">
          <div className="w-full max-w-md">
            
            <ForgotPasswordHeader isSubmitting={isSubmitting} />

            {!isSubmitted ? (
              <div className="animate-in fade-in slide-in-from-right-4 duration-700">
                <ForgotPasswordFields 
                  form={form} 
                  isSubmitting={isSubmitting} 
                  onSubmit={onSubmit} 
                />
              </div>
            ) : (
              <ForgotPasswordSuccess 
                email={submittedEmail} 
                onBack={handleBackToEmail} 
              />
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
