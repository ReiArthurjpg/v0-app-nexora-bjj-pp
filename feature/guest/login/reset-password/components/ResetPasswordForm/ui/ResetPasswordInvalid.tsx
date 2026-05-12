'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { XCircle } from 'lucide-react';

export function ResetPasswordInvalid() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#070708] flex flex-col items-center justify-center text-white p-8">
      <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6">
        <XCircle className="text-red-500" size={40} />
      </div>
      <h1 className="text-3xl font-black italic uppercase tracking-tighter mb-4 text-center">LINK <span className="text-[#E11D48]">EXPIRADO</span></h1>
      <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest text-center max-w-xs mb-8">
        Este link de recuperação não é mais válido ou já foi utilizado.
      </p>
      <button 
        onClick={() => router.push('/forgot-password')}
        className="bg-[#E11D48] hover:bg-white hover:text-black px-8 py-4 rounded font-black text-[10px] uppercase tracking-widest transition-all"
      >
        Solicitar novo link
      </button>
    </div>
  );
}
