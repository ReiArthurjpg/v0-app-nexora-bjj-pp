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
    let formattedValue = value

    if (field === 'whatsapp') {
      const digits = value.replace(/\D/g, '')
      if (digits.length <= 11) {
        formattedValue = digits
          .replace(/^(\d{2})(\d)/g, '($1) $2')
          .replace(/(\d{5})(\d)/, '$1-$2')
      } else {
        formattedValue = digits.substring(0, 11)
          .replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
      }
    }

    setFormData((prev) => ({ ...prev, [field]: formattedValue }))
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
