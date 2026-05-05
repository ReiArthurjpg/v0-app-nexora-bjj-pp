import React from 'react'

export function MiniContactWrapper({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-14 px-6 bg-[#070708] relative overflow-hidden border-y border-white/10">
      {/* Padrão de Grid Técnico (Software Style) */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#E11D48 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      
      {/* Gradiente de Fundo — O "Sistema" em ação */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E11D48] via-[#BE123C] to-[#070708] opacity-90" />
      
      {/* Background Text sutil */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-20">
        <span className="text-[10vw] font-black italic uppercase text-black leading-none tracking-tighter">
          NEXORA SYSTEM
        </span>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  )
}
