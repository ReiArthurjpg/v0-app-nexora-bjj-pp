import { motion } from 'framer-motion'

export function StepsHeader() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-24"
    >
      <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-6 text-white leading-tight">
        Use em menos de <br />
        <span className="text-[#E11D48]">5 minutos.</span>
      </h2>

      <div className="w-24 h-1.5 bg-[#E11D48] mx-auto -skew-x-12" />
    </motion.div>
  )
}
