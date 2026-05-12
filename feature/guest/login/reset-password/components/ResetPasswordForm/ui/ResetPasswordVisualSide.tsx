'use client';

import React from 'react';
import { Fingerprint, ShieldCheck, Zap } from 'lucide-react';

export function ResetPasswordVisualSide() {
  return (
    <div className="hidden lg:flex lg:w-[55%] flex-col relative overflow-hidden bg-gradient-to-br from-[#070708] via-[#0F0F11] to-[#E11D48]/20 p-16 justify-center">
      {/* Efeito de luz ambiente */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E11D48]/20 blur-[180px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="relative z-10 max-w-xl">
        <div className="mb-12">
           <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6 -rotate-6">
              <Fingerprint className="text-[#E11D48]" size={32} />
           </div>
           <h2 className="text-6xl font-black uppercase italic tracking-tighter leading-none mb-6">
             MANTENHA SUA <br />
             <span className="text-[#E11D48]">JORNADA</span> <br />
             PROTEGIDA.
           </h2>
           <div className="w-20 h-1.5 bg-[#E11D48] mb-8" />
           <p className="text-gray-400 font-bold uppercase tracking-widest text-sm leading-relaxed mb-12">
             A segurança da sua academia começa com uma senha forte. Redefina agora e recupere o controle total da sua gestão.
           </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 bg-white/5 border border-white/5 rounded-2xl backdrop-blur-sm group hover:bg-white/10 transition-all cursor-default">
            <ShieldCheck className="text-[#E11D48] mb-4" />
            <p className="text-white font-black italic uppercase tracking-tighter text-lg">Protocolo Seguro</p>
            <p className="text-[10px] text-gray-500 uppercase font-bold mt-1 tracking-widest">Verificação em tempo real</p>
          </div>
          <div className="p-6 bg-white/5 border border-white/5 rounded-2xl backdrop-blur-sm group hover:bg-white/10 transition-all cursor-default">
            <Zap className="text-[#E11D48] mb-4" />
            <p className="text-white font-black italic uppercase tracking-tighter text-lg">Acesso Rápido</p>
            <p className="text-[10px] text-gray-500 uppercase font-bold mt-1 tracking-widest">Login instantâneo após reset</p>
          </div>
        </div>
      </div>

      {/* Decorativo de fundo */}
      <div className="absolute -bottom-10 -right-10 text-[20rem] font-black italic opacity-[0.03] select-none pointer-events-none tracking-tighter">
        BJJ
      </div>
    </div>
  );
}
