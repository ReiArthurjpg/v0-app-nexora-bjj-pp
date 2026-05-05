import React from 'react'

export function ContactSectionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <section
      id="contato"
      className="py-32 px-6 bg-[#070708] text-white relative overflow-hidden"
    >
      {/* Brilho de fundo sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E11D48]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {children}
      </div>
    </section>
  )
}

