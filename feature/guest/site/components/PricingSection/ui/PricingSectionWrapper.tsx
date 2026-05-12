import React from 'react'

export function PricingSectionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <section
      id="precos"
      className="py-32 px-6 bg-[#070708] relative overflow-hidden"
    >
      {/* Brilho de fundo centralizado atrás dos cards */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-[#E11D48]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  )
}
