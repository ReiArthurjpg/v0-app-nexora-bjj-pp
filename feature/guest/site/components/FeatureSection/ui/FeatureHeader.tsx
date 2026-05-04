import { motion } from 'framer-motion'

export function FeatureHeader() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-24 text-center"
    >
      <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-6 text-white leading-tight">
        Performance <span className="text-[#E11D48]">Suave.</span>
      </h2>

      <p className="text-gray-500 font-bold uppercase tracking-[0.3em] text-xs">
        Ferramentas técnicas para academias de alto nível.
      </p>
    </motion.div>
  )
}
