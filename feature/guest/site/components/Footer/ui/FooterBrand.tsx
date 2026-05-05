export function FooterBrand() {
  return (
    <div className="flex flex-col items-center mb-10">
      <h2 className="text-6xl md:text-[8rem] font-black italic tracking-tighter uppercase text-white/[0.03] select-none leading-none mb-4 md:-mb-8">
        NEXORA
      </h2>
      
      <div className="flex flex-col items-center relative z-10">
        <span className="text-3xl md:text-4xl font-black italic tracking-tighter uppercase text-white mb-2">
          NEXORA <span className="text-[#E11D48]">BJJ</span>
        </span>
        <p className="text-xs font-black uppercase tracking-[0.4em] text-gray-500 text-center max-w-sm">
          RESPEITO E GESTÃO NO SEU TATAME
        </p>
      </div>
    </div>
  )
}
