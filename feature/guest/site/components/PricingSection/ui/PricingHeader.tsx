import { motion } from 'framer-motion'

export function PricingHeader() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-24 flex flex-col items-center"
    >

      <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-6 text-white leading-[0.9]">
        O investimento que se <br />
        <span className="text-[#E11D48]">paga no primeiro mês.</span>
      </h2>

      <p className="text-gray-400 font-bold uppercase tracking-widest text-xs md:text-sm max-w-lg">
        Preços especiais de lançamento para academias que buscam o controle total da jornada do aluno.
      </p>
    </motion.div>
  )
}
