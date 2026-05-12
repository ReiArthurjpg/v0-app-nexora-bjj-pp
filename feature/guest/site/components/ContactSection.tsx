'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

const WHATSAPP_NUMBER = '5519994673428'

export function ContactSection() {
  const [formData, setFormData] = useState({
    nome: '',
    academia: '',
    whatsapp: '',
    alunos: 'Até 50 alunos',
  })

  function handleChange(field: string, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!formData.nome || !formData.academia || !formData.whatsapp) {
      alert('Por favor, preencha todos os campos antes de enviar.')
      return
    }

    const message = [
      '🥋 *Nova Solicitação - Nexora BJJ*',
      '',
      `👤 *Responsável:* ${formData.nome}`,
      `🏫 *Academia:* ${formData.academia}`,
      `📱 *WhatsApp:* ${formData.whatsapp}`,
      `👥 *Nº de Alunos:* ${formData.alunos}`,
      '',
      '🔥 Enviado pela Landing Page do Nexora.',
    ].join('\n')

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <section
      id="contato"
      className="py-32 px-6 bg-white text-black relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#E11D48]/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
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
      </div>
    </section>
  )
}