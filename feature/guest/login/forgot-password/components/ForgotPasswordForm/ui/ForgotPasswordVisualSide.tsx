'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { 
  Zap, 
  Target, 
  BarChart3, 
  Shield, 
  Users, 
  Activity, 
  Trophy 
} from 'lucide-react';
import { MetricBox } from '@/feature/guest/login/shared/components';

export function ForgotPasswordVisualSide() {
  const router = useRouter();

  return (
    <div className="hidden lg:flex lg:w-[55%] flex-col relative overflow-hidden bg-gradient-to-br from-[#070708] via-[#0F0F11] to-[#E11D48]/20 p-16 justify-center border-r border-white/5">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#E11D48]/10 blur-[150px] rounded-full -translate-y-1/2 -translate-x-1/2" />
      
      <div className="relative z-10 max-w-2xl">
        <header className="mb-12">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => router.push('/')}>
            <div className="w-10 h-10 bg-[#E11D48] rounded flex items-center justify-center -skew-x-12">
              <Zap className="text-white fill-current" size={24} />
            </div>
            <span className="text-xl font-black tracking-tighter italic">NEXORA <span className="text-[#E11D48]">BJJ</span></span>
          </div>
        </header>

        <h2 className="text-6xl font-black uppercase italic tracking-tighter leading-[0.9] mb-6">
          DOMINE O SEU <br />
          <span className="text-[#E11D48]">DESTINO NO TATAME.</span>
        </h2>
        <p className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-12 max-w-lg">
          A plataforma definitiva para mestres que buscam excelência na gestão e performance de suas academias.
        </p>

        {/* ELEMENTOS VISUAIS */}
        <div className="grid grid-cols-1 gap-4 mb-16">
          <div className="flex items-center gap-5 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm group hover:bg-[#E11D48]/10 transition-all duration-500">
            <div className="w-12 h-12 rounded-xl bg-[#E11D48]/20 flex items-center justify-center text-[#E11D48] group-hover:scale-110 transition-transform">
              <Target size={24} />
            </div>
            <div>
              <h3 className="font-black italic uppercase tracking-tighter text-lg text-white">Graduação Inteligente</h3>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Controle automático de graus e faltas.</p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm group hover:bg-[#E11D48]/10 transition-all duration-500">
            <div className="w-12 h-12 rounded-xl bg-[#E11D48]/20 flex items-center justify-center text-[#E11D48] group-hover:scale-110 transition-transform">
              <BarChart3 size={24} />
            </div>
            <div>
              <h3 className="font-black italic uppercase tracking-tighter text-lg text-white">Análise de Retenção</h3>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Métricas precisas sobre a saúde da sua escola.</p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm group hover:bg-[#E11D48]/10 transition-all duration-500">
            <div className="w-12 h-12 rounded-xl bg-[#E11D48]/20 flex items-center justify-center text-[#E11D48] group-hover:scale-110 transition-transform">
              <Shield size={24} />
            </div>
            <div>
              <h3 className="font-black italic uppercase tracking-tighter text-lg text-white">Segurança de Dados</h3>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Sua base de alunos protegida com criptografia militar.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 opacity-60">
          <MetricBox icon={<Users size={18} />} val="10k+" label="Usuários" />
          <MetricBox icon={<Activity size={18} />} val="2M+" label="Check-ins" />
          <MetricBox icon={<Trophy size={18} />} val="98%" label="Sucesso" />
        </div>
      </div>
    </div>
  );
}
