import React from 'react'

export function DiffSectionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-20 px-6 border-t border-white/5 bg-[#070708]">
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  )
}
