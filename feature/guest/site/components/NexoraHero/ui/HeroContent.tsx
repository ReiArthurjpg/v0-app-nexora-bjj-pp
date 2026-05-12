import { motion } from 'framer-motion';
import SplitText from '@/components/react-bits/SplitText';
import BlurIn from '@/components/react-bits/BlurIn';

export function HeroContent({ onScrollTo }: { onScrollTo: (id: string) => void }) {
  return (
    <div className="text-center max-w-4xl mx-auto flex flex-col items-center">

      {/* Título com SplitText */}
      <h1 className="text-5xl md:text-[80px] font-black leading-[0.85] mb-8 tracking-tighter uppercase italic text-white">
        <SplitText text="O tatame" delay={0.2} />
        <br />
        <SplitText text="quer ordem." delay={0.5} />
        <br />
        <SplitText
          text="A Nexora entrega."
          delay={0.8}
          className="text-[#E11D48]"
        />
      </h1>

      {/* Parágrafo com BlurIn */}
      <BlurIn delay={1.2} className="max-w-xl mx-auto mb-10">
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
          O único sistema de gestão desenhado exclusivamente para a rotina do Jiu-Jitsu.
          Controle graduações, presenças e mensalidades sem sair do tatame.
        </p>
      </BlurIn>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="flex flex-col sm:flex-row gap-4 mb-10"
      >
        <button 
          onClick={() => onScrollTo('contato')}
          className="px-8 cursor-pointer py-4 bg-[#E11D48] text-white font-black uppercase tracking-widest italic -skew-x-6 hover:bg-[#BE123C] transition-all active:scale-95 shadow-[0_0_20px_rgba(225,29,72,0.4)]"
        >
          <span className="skew-x-6 inline-block">Começar Agora</span>
        </button>
        <button 
          onClick={() => onScrollTo('contato')}
          className="px-8 cursor-pointer py-4 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest italic -skew-x-6 hover:bg-white/10 transition-all active:scale-95 backdrop-blur-sm"
        >
          <span className="skew-x-6 inline-block">Ver Demonstração</span>
        </button>
      </motion.div>

      {/* Social Proof */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-col items-center gap-3 opacity-60"
      >
        <div className="flex -space-x-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-8 h-8 rounded-full border-2 border-[#070708] bg-gray-800 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-900" />
            </div>
          ))}
        </div>
        <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400">
          Confiado por +50 academias de BJJ em toda Paraíba
        </p>
      </motion.div>

    </div>
  )
}

