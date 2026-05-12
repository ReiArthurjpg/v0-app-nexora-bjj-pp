'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Zap, ArrowLeft } from 'lucide-react';

interface ForgotPasswordHeaderProps {
  isSubmitting: boolean;
}

export function ForgotPasswordHeader({ isSubmitting }: ForgotPasswordHeaderProps) {
  const router = useRouter();

  return (
    <>
      <header className="p-8 lg:hidden">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push('/')}>
          <div className="w-8 h-8 bg-[#E11D48] rounded flex items-center justify-center -skew-x-12">
            <Zap className="text-white fill-current" size={18} />
          </div>
          <span className="text-lg font-black tracking-tighter italic">NEXORA BJJ</span>
        </div>
      </header>

      <button 
        onClick={() => router.push('/login')}
        disabled={isSubmitting}
        className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-10 text-[10px] font-black uppercase tracking-widest group disabled:opacity-50"
      >
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
        Voltar ao login
      </button>

      <div className="mb-10">
        <h1 className="text-4xl font-black italic uppercase tracking-tighter mb-2 leading-none">
          RECUPERAR <span className="text-[#E11D48]">ACESSO</span>
        </h1>
        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] leading-relaxed">
          Recupere sua chave de acesso à plataforma digital.
        </p>
      </div>
    </>
  );
}
