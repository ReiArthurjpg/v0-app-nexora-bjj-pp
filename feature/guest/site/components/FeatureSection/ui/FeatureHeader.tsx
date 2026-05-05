import { motion } from 'framer-motion'

export function FeatureHeader() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-24 text-center flex flex-col items-center"
    >

      <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-6 text-white leading-[0.9]">
        Tudo que sua academia<br />
        <span className="text-[#E11D48]">precisa em um lugar.</span>
      </h2>

      <p className="text-gray-400 font-medium text-lg max-w-xl mx-auto leading-relaxed">
        Do check-in à graduação, da mensalidade ao feedback técnico — o Nexora cobre cada detalhe da sua rotina.
      </p>
    </motion.div>
  )
}
