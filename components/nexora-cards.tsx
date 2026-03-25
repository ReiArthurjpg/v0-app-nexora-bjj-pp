'use client'

import { CheckCircle2 } from 'lucide-react'

export function BenefitCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="border-l-4 border-[#E11D48] pl-8 py-4 space-y-4 group">
      <div className="text-[#E11D48] group-hover:scale-110 transition-transform duration-300 inline-block">{icon}</div>
      <h3 className="text-2xl font-black uppercase italic tracking-tighter text-[#070708]">{title}</h3>
      <p className="text-gray-600 font-medium leading-relaxed max-w-md">{description}</p>
    </div>
  )
}

export function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="group p-8 bg-white/5 border border-white/5 rounded-lg hover:border-[#E11D48]/50 transition-all duration-300">
      <div className="w-12 h-12 bg-[#E11D48] text-white rounded flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h4 className="text-2xl font-black uppercase italic tracking-tighter mb-4 text-white">{title}</h4>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

export function StepCard({ number, icon, title, description }: { number: string; icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="relative p-10 bg-[#0F0F11] border border-white/5 rounded-xl group hover:border-[#E11D48]/50 transition-all duration-500 overflow-hidden">
      <div className="absolute -top-10 -right-10 text-[180px] font-black italic text-white/5 select-none pointer-events-none group-hover:text-[#E11D48]/10 transition-colors">
        {number}
      </div>
      <div className="relative z-10">
        <div className="w-16 h-16 bg-[#E11D48]/10 rounded-lg flex items-center justify-center text-[#E11D48] mb-8 border border-[#E11D48]/20 group-hover:bg-[#E11D48] group-hover:text-white transition-all duration-300">
          {icon}
        </div>
        <h4 className="text-3xl font-black uppercase italic tracking-tighter mb-4 text-white">{title}</h4>
        <p className="text-gray-400 font-medium leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export function PriceCard({ tier, price, description, features, featured = false }: { tier: string; price: string; description: string; features: string[]; featured?: boolean }) {
  return (
    <div
      className={`p-8 rounded-xl border transition-all duration-500 relative flex flex-col h-full ${
        featured ? 'bg-white border-[#E11D48] scale-105 shadow-[0_0_40px_rgba(225,29,72,0.2)]' : 'bg-[#0F0F11] border-white/5 hover:border-white/20'
      }`}
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E11D48] text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
          Mais Popular
        </div>
      )}
      <div className="mb-8">
        <h4 className={`text-sm font-black uppercase tracking-[0.2em] mb-2 ${featured ? 'text-[#E11D48]' : 'text-gray-500'}`}>{tier}</h4>
        <div className="flex items-baseline gap-1">
          <span className={`text-[10px] font-black uppercase ${featured ? 'text-gray-400' : 'text-gray-600'}`}>R$</span>
          <span className={`text-5xl font-black italic tracking-tighter ${featured ? 'text-black' : 'text-white'}`}>{price}</span>
          <span className={`text-[10px] font-black uppercase ${featured ? 'text-gray-400' : 'text-gray-600'}`}>/mês</span>
        </div>
      </div>
      <p className={`text-sm font-medium mb-8 leading-relaxed ${featured ? 'text-gray-600' : 'text-gray-400'}`}>{description}</p>
      <ul className="space-y-4 mb-10 flex-grow">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${featured ? 'text-[#E11D48]' : 'text-gray-400'}`} />
            <span className={`text-[10px] font-bold uppercase tracking-wide ${featured ? 'text-black' : 'text-gray-300'}`}>{f}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-4 rounded font-black text-sm uppercase italic tracking-tighter transition-all ${featured ? 'bg-[#E11D48] text-white hover:bg-black shadow-lg shadow-[#E11D48]/20' : 'bg-white/5 text-white hover:bg-white hover:text-black border border-white/10'}`}>
        Selecionar Plano
      </button>
    </div>
  )
}

export function MVPBlock({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) {
  return (
    <div className="p-6 border border-white/10 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
      <div className="flex items-center gap-3 mb-4 text-[#E11D48]">
        {icon}
        <h5 className="font-black uppercase italic tracking-tight text-white">{title}</h5>
      </div>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase">
            <div className="w-1 h-1 bg-[#E11D48] rounded-full" /> {item}
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
