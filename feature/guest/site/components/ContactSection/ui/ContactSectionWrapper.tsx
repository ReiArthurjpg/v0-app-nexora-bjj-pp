import React from 'react'

export function ContactSectionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <section
      id="contato"
      className="py-32 px-6 bg-white text-black relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#E11D48]/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {children}
      </div>
    </section>
  )
}

