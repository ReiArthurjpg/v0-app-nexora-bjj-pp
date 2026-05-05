import { motion } from 'framer-motion'

export function StepsHeader() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-24 flex flex-col items-center"
    >

      <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter mb-6 text-white leading-[0.9]">
        Comece a usar em <br />
        <span className="text-[#E11D48]">questão de minutos.</span>
      </h2>

      <p className="text-gray-400 font-bold uppercase tracking-widest text-xs md:text-sm max-w-lg">
        Um processo simplificado projetado para que você foque no que realmente importa: seus alunos.
      </p>
    </motion.div>
  )
}
