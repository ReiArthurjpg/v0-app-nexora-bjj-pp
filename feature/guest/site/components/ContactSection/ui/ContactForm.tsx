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
    <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4 text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="space-y-2"
      >
        <label className="text-[10px] font-black uppercase tracking-widest ml-1">
          Nome do Responsável
        </label>
        <input
          type="text"
          placeholder="Ex: Mestre Hélio"
          value={formData.nome}
          onChange={(e) => handleChange('nome', e.target.value)}
          className="w-full bg-gray-50 border-2 border-gray-100 p-4 rounded font-bold focus:border-[#E11D48] outline-none transition-all"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="space-y-2"
      >
        <label className="text-[10px] font-black uppercase tracking-widest ml-1">
          Nome da Academia
        </label>
        <input
          type="text"
          placeholder="Ex: Alliance Jiu-Jitsu"
          value={formData.academia}
          onChange={(e) => handleChange('academia', e.target.value)}
          className="w-full bg-gray-50 border-2 border-gray-100 p-4 rounded font-bold focus:border-[#E11D48] outline-none transition-all"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="space-y-2"
      >
        <label className="text-[10px] font-black uppercase tracking-widest ml-1">
          WhatsApp de Contato
        </label>
        <input
          type="tel"
          placeholder="(00) 00000-0000"
          value={formData.whatsapp}
          onChange={(e) => handleChange('whatsapp', e.target.value)}
          className="w-full bg-gray-50 border-2 border-gray-100 p-4 rounded font-bold focus:border-[#E11D48] outline-none transition-all"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="space-y-2"
      >
        <label className="text-[10px] font-black uppercase tracking-widest ml-1">
          Número de Alunos
        </label>
        <select
          value={formData.alunos}
          onChange={(e) => handleChange('alunos', e.target.value)}
          className="w-full bg-gray-50 border-2 border-gray-100 p-4 rounded font-bold focus:border-[#E11D48] outline-none transition-all appearance-none cursor-pointer"
        >
          <option>Até 50 alunos</option>
          <option>51 a 150 alunos</option>
          <option>Mais de 150 alunos</option>
        </select>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="md:col-span-2 mt-4"
      >
        <button
          type="submit"
          className="w-full cursor-pointer bg-[#E11D48] text-white py-5 rounded font-black text-xl uppercase italic tracking-tighter hover:bg-black transition-all duration-300 flex items-center justify-center gap-3"
        >
          Solicitar Demonstração <Send size={24} />
        </button>
      </motion.div>
    </form>
  )
}
