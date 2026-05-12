import React from 'react'

export function FeatureSectionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <section
      id="funcionalidades"
      className="py-32 px-6 bg-[#070708] relative overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#E11D48]/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  )
}
