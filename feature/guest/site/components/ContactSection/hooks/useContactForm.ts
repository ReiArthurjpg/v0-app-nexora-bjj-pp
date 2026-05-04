import { useState } from 'react'

const WHATSAPP_NUMBER = '5519994673428'

export function useContactForm() {
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

  return {
    formData,
    handleChange,
    handleSubmit
  }
}
