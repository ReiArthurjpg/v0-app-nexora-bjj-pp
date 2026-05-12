'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Zap } from 'lucide-react';

export function SignupHeader() {
  const router = useRouter();

  return (
    <>
      <header className="p-8 lg:hidden">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push('/')}>
          <div className="w-10 h-10 bg-[#E11D48] rounded flex items-center justify-center -skew-x-12">
            <Zap className="text-white fill-current" size={24} />
          </div>
          <span className="text-xl font-black tracking-tighter italic">NEXORA <span className="text-[#E11D48]">BJJ</span></span>
        </div>
      </header>

      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-[2px] w-8 bg-[#E11D48]" />
          <span className="text-[#E11D48] text-[10px] font-black uppercase tracking-widest">Início imediato</span>
        </div>
        <h1 className="text-4xl font-black italic uppercase tracking-tighter mb-2 leading-tight">
          CRIAR SUA <span className="text-[#E11D48]">CONTA</span>
        </h1>
        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
          Preencha os dados abaixo para configurar seu tatame
        </p>
      </div>
    </>
  );
}
