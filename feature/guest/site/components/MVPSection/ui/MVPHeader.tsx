import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function MVPHeader() {
  const scrollToContact = () => {
    const el = document.getElementById('contato')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="lg:col-span-1 flex flex-col items-start"
    >

      <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] mb-8 text-white">
        O Controle <br />
        do <span className="text-[#E11D48]">Tatame.</span>
      </h2>

      <p className="text-gray-400 font-bold uppercase tracking-widest text-xs leading-relaxed mb-10 max-w-sm">
        Desenvolvemos o Nexora para resolver a desorganização que impede sua academia de crescer. Gestão focada no que o mestre realmente precisa.
      </p>

      <button 
        onClick={scrollToContact}
        className="group bg-[#E11D48] text-white px-10 py-5 rounded font-black uppercase italic tracking-tighter -skew-x-6 hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-3 shadow-lg shadow-[#E11D48]/20 cursor-pointer active:scale-95"
      >
        <span className="skew-x-6">Experimentar Grátis</span>
        <ArrowRight size={20} className="skew-x-6 group-hover:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  )
}
