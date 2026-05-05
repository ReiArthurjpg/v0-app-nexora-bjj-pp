import React from 'react'

export function FooterWrapper({ children }: { children: React.ReactNode }) {
  return (
    <footer className="pt-20 pb-16 px-6 bg-[#070708] relative overflow-hidden border-t border-white/5">
      {/* Glow de Fundo — O efeito final */}
      <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#E11D48]/10 blur-[150px] rounded-full pointer-events-none opacity-50" />
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        {children}
      </div>
    </footer>
  )
}
