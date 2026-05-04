import { motion } from 'framer-motion'

export function MVPHeader() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="lg:col-span-1"
    >
      <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-none mb-6 text-white">
        Controle <br />
        do <span className="text-[#E11D48]">Tatame.</span>
      </h2>

      <p className="text-gray-600 font-medium mb-8">
        Desenvolvemos o Nexora para resolver a desorganização que impede sua academia de crescer. Gestão focada no que o mestre precisa.
      </p>

      <button className="bg-[#E11D48] text-white px-8 py-4 rounded font-black uppercase italic tracking-tighter hover:bg-white hover:text-black transition-all duration-300">
        Experimentar Grátis
      </button>
    </motion.div>
  )
}
