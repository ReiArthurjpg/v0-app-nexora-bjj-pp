'use client'

import { CheckCircle2 } from 'lucide-react'

export function BenefitCard({ 
  icon, 
  title, 
  description,
  metric 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  metric?: string;
}) {
  return (
    <div className="flex cursor-pointer flex-col p-10 rounded-2xl bg-white/5 border border-white/5 hover:border-[#E11D48]/30 transition-all duration-500 group relative overflow-hidden h-full">
      {/* Background Glow on Hover */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-32 h-32 bg-[#E11D48]/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="w-14 h-14 bg-[#E11D48]/10 text-[#E11D48] rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#E11D48] group-hover:text-white transition-all duration-500 shadow-lg shadow-[#E11D48]/10">
        {icon}
      </div>

      <div className="flex flex-col gap-4">
        {metric && (
          <span className="text-4xl font-black italic tracking-tighter text-[#E11D48]">
            {metric}
          </span>
        )}
        <h3 className="text-2xl font-black uppercase italic tracking-tighter text-white">{title}</h3>
        <p className="text-gray-400 font-medium leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="cursor-pointer group p-8 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-[#E11D48]/50 hover:bg-white/[0.06] transition-all duration-500 flex flex-col relative overflow-hidden h-full">
      {/* Linha de destaque esquerda no hover */}
      <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-[#E11D48] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Brilho de canto no hover */}
      <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#E11D48]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="w-12 h-12 bg-[#E11D48]/10 text-[#E11D48] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#E11D48] group-hover:text-white transition-all duration-300 shadow-lg shadow-[#E11D48]/10 shrink-0">
        {icon}
      </div>
      <h4 className="text-xl font-black uppercase italic tracking-tighter mb-3 text-white">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

export function StepCard({ number, icon, title, description }: { number: string; icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="cursor-pointer relative p-10 bg-[#0F0F11]/50 border border-white/5 rounded-2xl group hover:border-[#E11D48]/30 transition-all duration-500 h-full">
      {/* Indicador de Número Moderno */}
      <div className="flex items-center gap-4 mb-8">
        <span className="text-xl font-black italic text-[#E11D48] tracking-tighter bg-[#E11D48]/10 px-3 py-1 rounded border border-[#E11D48]/20 group-hover:bg-[#E11D48] group-hover:text-white transition-all duration-300">
          {number}
        </span>
        <div className="h-px flex-grow bg-white/5 group-hover:bg-[#E11D48]/20 transition-colors" />
      </div>

      <div className="relative z-10">
        <div className="text-white mb-6 group-hover:text-[#E11D48] transition-colors duration-300">
          {icon}
        </div>
        <h4 className="text-2xl font-black uppercase italic tracking-tighter mb-4 text-white group-hover:translate-x-1 transition-transform">
          {title}
        </h4>
        <p className="text-gray-400 font-medium leading-relaxed text-sm">{description}</p>
      </div>

      {/* Número Fantasma sutil ao fundo */}
      <div className="absolute -bottom-6 -right-4 text-[120px] font-black italic text-white/[0.02] select-none pointer-events-none group-hover:text-[#E11D48]/[0.03] transition-colors">
        {number}
      </div>
    </div>
  )
}

export function PriceCard({ tier, price, description, features, featured = false }: { tier: string; price: string; description: string; features: string[]; featured?: boolean }) {
  return (
    <div
      className={`p-10 rounded-2xl border transition-all duration-500 relative flex flex-col h-full ${
        featured 
          ? 'bg-[#0F0F11] border-[#E11D48] scale-105 shadow-[0_0_50px_rgba(225,29,72,0.15)] z-20' 
          : 'bg-[#0F0F11]/50 border-white/5 hover:border-white/20 z-10'
      }`}
    >
      {/* Glow Superior no Destaque */}
      {featured && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E11D48] to-transparent" />
      )}

      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E11D48] text-white px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest italic shadow-lg shadow-[#E11D48]/20">
          Mais Popular
        </div>
      )}

      <div className="mb-10">
        <h4 className={`text-sm font-black uppercase tracking-[0.3em] mb-4 ${featured ? 'text-[#E11D48]' : 'text-gray-500'}`}>
          {tier}
        </h4>
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-black text-gray-500 italic uppercase">R$</span>
          <span className="text-6xl font-black italic tracking-tighter text-white">{price}</span>
          <span className="text-xs font-bold uppercase tracking-widest text-gray-500">/mês</span>
        </div>
      </div>

      <p className="text-sm font-medium mb-10 leading-relaxed text-gray-400">
        {description}
      </p>

      <ul className="space-y-5 mb-12 flex-grow">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-4">
            <CheckCircle2 size={18} className="shrink-0 mt-0.5 text-[#E11D48]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-gray-300">
              {f}
            </span>
          </li>
        ))}
      </ul>

      <button className={`w-full cursor-pointer py-5 rounded-lg font-black text-sm uppercase italic tracking-widest transition-all -skew-x-6 active:scale-95 flex items-center justify-center gap-2 ${
        featured 
          ? 'bg-[#E11D48] text-white hover:bg-[#BE123C] shadow-xl shadow-[#E11D48]/20' 
          : 'bg-white/5 text-white hover:bg-white hover:text-black border border-white/10'
      }`}>
        <span className="skew-x-6">Selecionar Plano</span>
      </button>
    </div>
  )
}

export function MVPBlock({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) {
  return (
    <div className="cursor-pointer group p-8 border border-white/5 bg-white/[0.02] rounded-xl hover:bg-white/[0.05] hover:border-[#E11D48]/30 transition-all duration-500 relative overflow-hidden h-full">
      {/* Linha Lateral de Ativação */}
      <div className="absolute left-0 top-0 h-full w-1 bg-[#E11D48] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="flex items-center gap-4 mb-6">
        <div className="text-[#E11D48] group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h5 className="font-black uppercase italic tracking-tight text-white text-lg">{title}</h5>
      </div>
      
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest group-hover:text-gray-300 transition-colors">
            <div className="w-1.5 h-1.5 bg-[#E11D48]/50 rounded-full group-hover:bg-[#E11D48] transition-colors" /> 
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function DiffItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 text-center md:text-left">
      <div className="w-2 h-2 bg-[#E11D48] rounded-full shrink-0" />
      <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{text}</span>
    </div>
  )
}
