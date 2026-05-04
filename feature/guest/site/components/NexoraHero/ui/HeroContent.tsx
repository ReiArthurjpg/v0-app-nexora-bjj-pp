export function HeroContent() {
  return (
    <div className="bg-[#070708] text-center lg:text-left">
      <div className="inline-flex items-center gap-2 bg-[#E11D48]/10 border border-[#E11D48]/20 px-4 py-1.5 rounded mb-8">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E11D48]">
          Especialista em Jiu-Jitsu e NoGi
        </span>
      </div>

      <h1 className="text-5xl md:text-[80px] font-black leading-[0.85] mb-8 tracking-tighter uppercase italic text-white">
        O tatame <br />
        <span>quer ordem.</span>
        <br />
        <span className="text-[#E11D48]">A Nexora entrega.</span>
      </h1>

      <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
        O único sistema de gestão desenhado exclusivamente para a rotina do Jiu-Jitsu. Controle graduações, presenças
        e mensalidades sem sair do tatame.
      </p>
    </div>
  )
}