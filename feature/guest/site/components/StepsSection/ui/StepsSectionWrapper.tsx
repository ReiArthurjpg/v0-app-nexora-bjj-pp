import React from 'react'

export function StepsSectionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-transparent to-[#0F0F11] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  )
}
