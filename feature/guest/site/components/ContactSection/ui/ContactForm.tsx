import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

type FormData = {
  nome: string
  academia: string
  whatsapp: string
  alunos: string
}

type ContactFormProps = {
  formData: FormData
  handleChange: (field: string, value: string) => void
  handleSubmit: (e: React.FormEvent) => void
}

export function ContactForm({ formData, handleChange, handleSubmit }: ContactFormProps) {
  return (
    <div className="bg-[#0F0F11]/50 border border-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-xl shadow-2xl relative overflow-hidden group">
      {/* Detalhe de borda superior sutil */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E11D48]/30 to-transparent" />

      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 text-left relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="space-y-2"
        >
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 ml-1">
            Nome do Responsável
          </label>
          <input
            type="text"
            placeholder="Mestre Hélio"
            value={formData.nome}
            onChange={(e) => handleChange('nome', e.target.value)}
            className="w-full bg-white/[0.03] border border-white/10 p-5 rounded-xl font-bold text-white focus:border-[#E11D48] outline-none transition-all placeholder:text-white/10"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="space-y-2"
        >
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 ml-1">
            Nome da Academia
          </label>
          <input
            type="text"
            placeholder="Alliance Jiu-Jitsu"
            value={formData.academia}
            onChange={(e) => handleChange('academia', e.target.value)}
            className="w-full bg-white/[0.03] border border-white/10 p-5 rounded-xl font-bold text-white focus:border-[#E11D48] outline-none transition-all placeholder:text-white/10"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="space-y-2"
        >
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 ml-1">
            WhatsApp de Contato
          </label>
          <input
            type="tel"
            placeholder="(00) 00000-0000"
            value={formData.whatsapp}
            onChange={(e) => handleChange('whatsapp', e.target.value)}
            className="w-full bg-white/[0.03] border border-white/10 p-5 rounded-xl font-bold text-white focus:border-[#E11D48] outline-none transition-all placeholder:text-white/10"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="space-y-2"
        >
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 ml-1">
            Número de Alunos
          </label>
          <div className="relative">
            <select
              value={formData.alunos}
              onChange={(e) => handleChange('alunos', e.target.value)}
              className="w-full bg-white/[0.03] border border-white/10 p-5 rounded-xl font-bold text-white focus:border-[#E11D48] outline-none transition-all appearance-none cursor-pointer"
            >
              <option className="bg-[#070708]">Até 50 alunos</option>
              <option className="bg-[#070708]">51 a 150 alunos</option>
              <option className="bg-[#070708]">Mais de 150 alunos</option>
            </select>
            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">
              ▼
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="md:col-span-2 mt-6"
        >
          <button
            type="submit"
            className="group w-full cursor-pointer bg-[#E11D48] text-white py-6 rounded-xl font-black text-xl uppercase italic tracking-widest -skew-x-6 hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-4 shadow-xl shadow-[#E11D48]/20 active:scale-[0.98]"
          >
            <span className="skew-x-6">Solicitar Demonstração</span>
            <Send size={24} className="skew-x-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </form>
    </div>
  )
}
