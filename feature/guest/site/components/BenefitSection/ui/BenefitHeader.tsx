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
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[#E11D48]/30 bg-[#E11D48]/10 backdrop-blur-md"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] animate-pulse" />
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#E11D48]">
          Vantagens Exclusivas
        </span>
      </motion.div>

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
