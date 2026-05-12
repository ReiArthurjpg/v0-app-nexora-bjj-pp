'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Zap, ArrowLeft } from 'lucide-react';

interface ResetPasswordHeaderProps {
  isSubmitting: boolean;
}

export function ResetPasswordHeader({ isSubmitting }: ResetPasswordHeaderProps) {
  const router = useRouter();

  return (
    <div className="mb-10">
      <button 
        onClick={() => router.push('/guest/login')}
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
  );
}
