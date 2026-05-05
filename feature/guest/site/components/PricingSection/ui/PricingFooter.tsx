import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'

export function PricingFooter() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-20 flex flex-col items-center gap-4"
    >
      <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
        <ShieldCheck size={18} className="text-[#E11D48]" />
        <span className="text-white text-[10px] font-black uppercase tracking-widest">
          Garantia Blindada de 7 Dias
        </span>
      </div>
      
      <p className="text-center text-gray-500 text-xs font-bold uppercase tracking-widest">
        Sem fidelidade ou letras miúdas. <br className="md:hidden" />
        <span className="text-gray-400">Cancele sua assinatura quando quiser.</span>
      </p>
    </motion.div>
  )
}
