import { ArrowRight, Zap } from 'lucide-react'

export function MiniContactContent() {
  const scrollToPricing = () => {
    const el = document.getElementById('precos')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
          <Zap size={14} className="text-white fill-white" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/70">
            Acesso Imediato
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white leading-none mb-3">
          Pronto para o próximo nível?
        </h2>
        <p className="text-white/60 text-[10px] md:text-xs font-bold uppercase tracking-widest max-w-sm">
          Escolha o plano ideal e comece a transformar sua academia hoje.
        </p>
      </div>

      <button
        onClick={scrollToPricing}
        className="group relative px-10 py-6 bg-black border border-white/20 text-white font-black uppercase tracking-widest italic -skew-x-12 hover:border-[#E11D48] transition-all active:scale-95 flex items-center justify-center gap-4 overflow-hidden shadow-2xl cursor-pointer"
      >
        <div className="absolute inset-0 bg-[#E11D48]/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        
        <span className="skew-x-12 flex items-center gap-3 relative z-10">
          Ver Planos
          <ArrowRight size={20} className="text-[#E11D48] group-hover:translate-x-1 transition-transform" /> 
        </span>
      </button>
    </div>
  )
}
