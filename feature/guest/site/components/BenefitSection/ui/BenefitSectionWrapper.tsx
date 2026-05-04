import React from 'react'

export function BenefitSectionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <section
      id="beneficios"
      className="py-32 px-6 bg-white text-black relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[#E11D48] rounded-full blur-[120px] -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  )
}
