import React from 'react'

export function PricingSectionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <section
      id="precos"
      className="py-32 px-6 bg-[#070708] relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#E11D48]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  )
}
