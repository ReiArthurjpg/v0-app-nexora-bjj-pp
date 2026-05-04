import { Zap, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-[#070708]/90 backdrop-blur-xl border-b border-white/10 py-3' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <div 
          onClick={() => onScrollTo('home')}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-9 h-9 bg-[#E11D48] rounded flex items-center justify-center -skew-x-12 group-hover:skew-x-0 transition-all duration-300 shadow-[0_0_15px_rgba(225,29,72,0.5)]">
            <Zap className="text-white fill-current" size={20} />
          </div>
          <span className="text-xl font-black tracking-tighter italic text-white">
            NEXORA <span className="text-[#E11D48]">BJJ</span>
          </span>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em]">
            {navLinks.map(({ id, label }) => {
              const isActive = activeSection === id

              return (
                <button
                  key={id}
                  onClick={() => onScrollTo(id)}
                  className="relative pb-1 cursor-pointer group transition-colors duration-300"
                  style={{ color: isActive ? '#ffffff' : 'rgb(156,163,175)' }}
                >
                  <span className="group-hover:text-white transition-colors">{label}</span>
                  <span
                    className={`absolute bottom-[-2px] left-0 h-[2px] bg-[#E11D48] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </button>
              )
            })}
          </div>

          <a
            href="/login"
            className="inline-flex items-center px-7 py-3 bg-white text-black text-[10px] font-black uppercase tracking-[0.25em] italic -skew-x-6 hover:bg-[#E11D48] hover:text-white transition-all duration-300 active:scale-95 shadow-lg"
          >
            <span className="skew-x-6">Login</span>
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center text-white bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MOBILE MENU DRAWER */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-[80%] max-w-xs bg-[#070708] border-l border-white/10 z-[60] shadow-2xl p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-lg font-black italic">MENU</span>
              <button onClick={() => setIsMenuOpen(false)} className="text-gray-400">
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {navLinks.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => {
                    onScrollTo(id)
                    setIsMenuOpen(false)
                  }}
                  className={`text-left text-sm font-black uppercase tracking-widest italic py-2 border-b border-white/5 ${
                    activeSection === id ? 'text-[#E11D48]' : 'text-white'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="mt-auto pt-8">
              <a
                href="/login"
                className="w-full flex justify-center items-center py-4 bg-[#E11D48] text-white font-black uppercase tracking-widest italic -skew-x-6"
              >
                <span className="skew-x-6">Login</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] md:hidden"
          />
        )}
      </AnimatePresence>
    </nav>
  )
}