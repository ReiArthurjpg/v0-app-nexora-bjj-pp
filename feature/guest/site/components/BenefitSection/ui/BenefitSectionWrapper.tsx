import React from 'react'

export function BenefitSectionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <section
      id="beneficios"
      className="py-32 px-6 bg-[#070708] text-white relative overflow-hidden"
    >
      {/* Background Decoration — Brilho sutil nas bordas */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-[#E11D48]/10 rounded-full blur-[150px]" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[600px] h-[600px] bg-[#E11D48]/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  )
}
