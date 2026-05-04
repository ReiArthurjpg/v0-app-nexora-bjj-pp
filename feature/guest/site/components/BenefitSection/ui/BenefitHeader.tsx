import { motion } from 'framer-motion'

export function BenefitHeader() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center mb-24"
    >
      <div className="max-w-3xl">
        <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] mb-8 text-white">
          Menos tempo no PC, <br />
          <span className="text-[#E11D48]">
            Mais tempo no Tatame.
          </span>
        </h2>

        <p className="text-xl text-gray-400 font-medium mx-auto max-w-2xl">
          Desenvolvemos o Nexora para que você foque na técnica dos seus alunos enquanto o sistema cuida do resto.
        </p>
      </div>
    </motion.div>
  )
}
