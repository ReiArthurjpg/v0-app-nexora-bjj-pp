'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { 
  Zap, 
  ShieldCheck,
  BarChart3,
  Layers,
  Smartphone
} from 'lucide-react';

const features = [
  {
    icon: <Layers className="text-[#E11D48]" size={24} />,
    title: "GESTÃO DE GRADUAÇÃO",
    description: "Algoritmo inteligente que monitora a frequência e sugere trocas de faixa e graus automaticamente."
  },
  {
    icon: <BarChart3 className="text-[#E11D48]" size={24} />,
    title: "FINANCEIRO BLINDADO",
    description: "Controle de mensalidades, cobranças automáticas via PIX e relatórios de inadimplência em tempo real."
  },
  {
    icon: <Smartphone className="text-[#E11D48]" size={24} />,
    title: "APP DO ALUNO",
    description: "Seus alunos podem marcar aulas, visualizar currículo técnico e acompanhar o progresso pelo celular."
  }
];

export function SignupVisualSide() {
  const router = useRouter();

  return (
    <div className="hidden lg:flex lg:w-[55%] flex-col relative overflow-hidden bg-gradient-to-br from-[#070708] via-[#0F0F11] to-[#E11D48]/20 p-16 justify-center border-r border-white/5">
      {/* Efeito de luz ambiente */}
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

        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
          <ShieldCheck className="text-green-500" size={16} />
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">O Padrão Ouro em Gestão de Academias</span>
        </div>

        <h2 className="text-6xl font-black uppercase italic tracking-tighter leading-[0.9] mb-8">
          DOMINE O SEU <br />
          <span className="text-[#E11D48]">TATAME</span> COM <br />
          TECNOLOGIA.
        </h2>
        
        <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-sm mb-12 max-w-lg">
          Pare de perder tempo com planilhas e foque no que realmente importa: o desenvolvimento dos seus alunos.
        </p>

        {/* LISTA DE RECURSOS */}
        <div className="space-y-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-5 p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-all group">
              <div className="mt-1 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-black italic text-lg uppercase tracking-tighter mb-1">{feature.title}</h3>
                <p className="text-gray-500 text-xs font-bold leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-8 opacity-50">
           <div className="flex flex-col">
              <span className="text-2xl font-black italic tracking-tighter text-white">100%</span>
              <span className="text-[9px] font-black uppercase tracking-widest text-gray-500">Cloud Based</span>
           </div>
           <div className="w-[1px] h-8 bg-white/10" />
           <div className="flex flex-col">
              <span className="text-2xl font-black italic tracking-tighter text-white">SSL</span>
              <span className="text-[9px] font-black uppercase tracking-widest text-gray-500">Encrypted</span>
           </div>
           <div className="w-[1px] h-8 bg-white/10" />
           <div className="flex flex-col">
              <span className="text-2xl font-black italic tracking-tighter text-white">24/7</span>
              <span className="text-[9px] font-black uppercase tracking-widest text-gray-500">Suporte</span>
           </div>
        </div>
      </div>
    </div>
  );
}
