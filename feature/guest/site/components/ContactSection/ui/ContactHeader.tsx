import { motion } from 'framer-motion'

export function ContactHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">
        Pronto para <span className="text-[#E11D48]">Dominar?</span>
      </h2>

      <p className="text-gray-600 font-bold uppercase tracking-widest text-sm mb-12">
        Preencha os dados da sua academia e nossa equipe entrará em contato.
      </p>
    </motion.div>
  )
}
