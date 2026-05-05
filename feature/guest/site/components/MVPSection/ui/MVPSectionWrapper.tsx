import React from 'react'

export function MVPSectionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <section
      id="mvp"
      className="py-32 px-6 bg-[#0F0F11] border-y border-white/5 relative overflow-hidden"
    >
      {/* Brilho Radial Estratégico (Atrás do Grid) */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#E11D48]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-3 gap-16">
          {children}
        </div>
      </div>
    </section>
  )
}
