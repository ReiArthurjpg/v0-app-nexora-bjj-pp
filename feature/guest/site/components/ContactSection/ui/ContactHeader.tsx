import { motion } from 'framer-motion'

export function ContactHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center"
    >

      <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-6 text-white leading-[0.9]">
        Pronto para <br />
        <span className="text-[#E11D48]">Dominar o Tatame?</span>
      </h2>

      <p className="text-gray-400 font-bold uppercase tracking-widest text-xs md:text-sm mb-12 max-w-lg">
        Preencha os dados da sua academia e nossa equipe entrará em contato para agendar sua demonstração exclusiva.
      </p>
    </motion.div>
  )
}
