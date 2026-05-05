import React from 'react'
import ScrollVelocity from '@/components/react-bits/ScrollVelocity'

export function MiniSocialWrapper({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-14 px-6 bg-[#070708] relative overflow-hidden border-y border-white/10">
      {/* Padrão de Grid Técnico */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      
      {/* Gradiente de Fundo — Diferente da seção de contato para não repetir exato, mas na mesma estética */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#070708] via-[#E11D48]/80 to-[#070708] opacity-90" />
      
      {/* Scroll Velocity Text */}
      <div className="absolute inset-0 flex flex-col justify-center select-none pointer-events-none opacity-20 overflow-hidden">
        <ScrollVelocity 
          text="COMUNIDADE • NEXORA BJJ • INSTAGRAM • " 
          velocity={-2} 
          className="text-white mix-blend-overlay"
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  )
}
