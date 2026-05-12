'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ForgotPasswordSuccessProps {
  email: string;
  onBack: () => void;
}

export function ForgotPasswordSuccess({ email, onBack }: ForgotPasswordSuccessProps) {
  return (
    <div className="text-center animate-in zoom-in-95 duration-500">
      <div className="w-20 h-20 bg-[#E11D48]/10 border border-[#E11D48]/30 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-[#E11D48]/20">
        <CheckCircle2 size={40} className="text-[#E11D48]" />
      </div>
      <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-4 leading-none">SOLICITAÇÃO <span className="text-[#E11D48]">ENVIADA</span></h2>
      <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest leading-relaxed mb-10">
        Se o e-mail <span className="text-white">{email}</span> possuir uma conta ativa, você receberá o link em instantes.
      </p>
      <button 
        onClick={onBack}
        className="w-full bg-white/5 border border-white/10 hover:bg-white/10 py-4 rounded font-black text-[10px] uppercase tracking-widest transition-all text-white"
      >
        Tentar outro e-mail
      </button>
    </div>
  );
}
