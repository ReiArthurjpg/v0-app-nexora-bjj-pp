'use client'

import { Zap } from 'lucide-react'

type NavLink = {
  id: string
  label: string
}

type Props = {
  navLinks: NavLink[]
  activeSection: string
  onScrollTo: (id: string) => void
}

export function NexoraNavbar({
  navLinks,
  activeSection,
  onScrollTo,
}: Props) {
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-[#070708]/95 backdrop-blur-md border-b border-white/5 py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-[#E11D48] rounded flex items-center justify-center -skew-x-12 group-hover:skew-x-0 transition-transform">
            <Zap className="text-white fill-current" size={24} />
          </div>
          <span className="text-xl font-black tracking-tighter italic">
            NEXORA <span className="text-[#E11D48]">BJJ</span>
          </span>
        </div>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-8 text-[10px] font-black uppercase tracking-widest">
          {navLinks.map(({ id, label }) => {
            const isActive = activeSection === id

            return (
              <button
                key={id}
                onClick={() => onScrollTo(id)}
                className="relative pb-1 cursor-pointer group"
                style={{
                  color: isActive ? '#ffffff' : 'rgb(107,114,128)',
                  transition: 'color 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  if (!isActive)
                    (e.currentTarget as HTMLElement).style.color = '#ffffff'
                }}
                onMouseLeave={(e) => {
                  if (!isActive)
                    (e.currentTarget as HTMLElement).style.color =
                      'rgb(107,114,128)'
                }}
              >
                {label}
                <span
                  style={{
                    position: 'absolute',
                    bottom: '-2px',
                    left: 0,
                    height: '2px',
                    backgroundColor: '#E11D48',
                    width: isActive ? '100%' : '0%',
                    transition: 'width 0.3s ease',
                  }}
                />
              </button>
            )
          })}

          {/* LOGIN */}
          <a
            href="/login"
            className="inline-flex items-center px-6 py-2.5 bg-white text-black text-[10px] font-black uppercase tracking-[0.25em] italic -skew-x-6 hover:bg-transparent hover:text-white hover:border-white border border-transparent transition-all duration-300 active:scale-95"
          >
            <span className="skew-x-6">Login</span>
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  )
}