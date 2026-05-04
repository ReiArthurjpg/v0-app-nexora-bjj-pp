import React from 'react'

export function MVPSectionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <section
      id="mvp"
      className="py-32 px-6 bg-[#0F0F11] border-y border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-16">
          {children}
        </div>
      </div>
    </section>
  )
}
