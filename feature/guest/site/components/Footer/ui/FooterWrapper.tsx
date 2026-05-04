import React from 'react'

export function FooterWrapper({ children }: { children: React.ReactNode }) {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-black text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-center">
        {children}
      </div>
    </footer>
  )
}
