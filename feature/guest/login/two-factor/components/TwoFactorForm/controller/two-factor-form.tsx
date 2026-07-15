'use client';

import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { useTwoFactorForm } from '../hooks/useTwoFactorForm';
import { TwoFactorFields } from '../ui/TwoFactorFields';

export function TwoFactorForm() {
  const { form, isSubmitting, onSubmit, handleBack } = useTwoFactorForm();

  return (
    <div className="min-h-screen bg-[#070708] text-white font-sans flex overflow-hidden">
      {/* Left visual side */}
      <div className="hidden lg:flex lg:w-[55%] flex-col relative overflow-hidden bg-gradient-to-br from-[#070708] via-[#0F0F11] to-[#E11D48]/20 p-16 justify-center items-center">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E11D48]/15 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#E11D48]/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 text-center max-w-md">
          <div className="w-24 h-24 bg-[#E11D48]/10 rounded-2xl flex items-center justify-center border border-[#E11D48]/20 mx-auto mb-8">
            <ShieldCheck size={48} className="text-[#E11D48]" />
          </div>
          <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-none mb-4">
            Verificação <br /><span className="text-[#E11D48]">em 2 Etapas</span>
          </h2>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">
            Sua conta está protegida com autenticação de dois fatores.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-4 text-left">
            {[
              { step: '01', label: 'Abra o app autenticador', desc: 'Google Authenticator, Authy ou similar.' },
              { step: '02', label: 'Encontre a entrada Nexora', desc: 'Verifique o código de 6 dígitos gerado.' },
              { step: '03', label: 'Digite o código abaixo', desc: 'O código é válido por 30 segundos.' },
            ].map(({ step, label, desc }) => (
              <div key={step} className="flex items-start gap-4">
                <span className="text-[#E11D48] font-black text-sm">{step}</span>
                <div>
                  <p className="text-white font-black text-sm uppercase tracking-widest">{label}</p>
                  <p className="text-gray-500 text-xs font-bold">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right form side */}
      <div className="w-full lg:w-[45%] flex flex-col items-center justify-center px-8 md:px-16 relative z-10 bg-[#070708]">
        <div className="w-full max-w-sm">
          {/* Logo / Brand */}
          <div className="mb-10 text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E11D48] mb-2">Nexora BJJ System</p>
            <h1 className="text-3xl font-black uppercase italic tracking-tighter">
              Autenticação <span className="text-[#E11D48]">2FA</span>
            </h1>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-2">
              Insira o código gerado no seu app autenticador
            </p>
          </div>

          <TwoFactorFields
            form={form}
            isSubmitting={isSubmitting}
            onSubmit={onSubmit}
            handleBack={handleBack}
          />
        </div>
      </div>
    </div>
  );
}
