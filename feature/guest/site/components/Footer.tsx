'use client'

import { useState } from 'react'
import { ChevronUp } from 'lucide-react'

const footerLinks = [
  { label: 'Suporte', href: '#' },
  { label: 'Privacidade', href: '#' },
  { label: 'Central BJJ', href: '#' },
]

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <footer className="py-20 px-6 border-t border-white/5 bg-black text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-center">
          {/* BRAND */}
          <div>
            <span className="text-xl font-black italic tracking-tighter uppercase">
              NEXORA <span className="text-[#E11D48]">BJJ</span>
            </span>

            <p className="text-[10px] text-gray-600 mt-4 uppercase font-bold tracking-[0.2em]">
              O sistema definitivo para academias de arte suave.
            </p>
          </div>

          {/* LINKS DINÂMICOS */}
          <div className="flex justify-center gap-8 text-[10px] font-black uppercase tracking-widest text-gray-500">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* COPYRIGHT */}
          <div className="md:text-right">
            <p className="text-[10px] text-gray-700 font-bold uppercase tracking-[0.1em]">
              © 2024 Nexora Fight System. <br />
              Respeito e Gestão.
            </p>
          </div>
        </div>
      </footer>

      {/* SCROLL TO TOP */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-24 md:bottom-10 right-6 z-50 p-4 bg-[#E11D48] text-white rounded-full shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 group opacity-100 translate-y-0"
      >
        <ChevronUp
          size={24}
          strokeWidth={3}
          className="group-hover:-translate-y-1 transition-transform"
        />
      </button>

      {/* MOBILE CTA */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
        <button className="w-full bg-[#E11D48] py-5 rounded font-black text-lg uppercase italic shadow-2xl shadow-[#E11D48]/40 border-t border-white/20 text-white hover:bg-white hover:text-[#E11D48] transition-all">
          Acessar Meu Tatame
        </button>
      </div>
    </>
  )
}