'use client'

import { UserPlus, LogIn, Sparkles } from 'lucide-react'
import { StepCard } from '@/components/nexora-cards'

const steps = [
  {
    number: '1',
    icon: UserPlus,
    title: 'Registre-se',
    description:
      'Acesse a página inicial do sistema. Preencha o formulário de registro em menos de 3 minutos.',
  },
  {
    number: '2',
    icon: LogIn,
    title: 'Acesse',
    description:
      'Com as informações que acabou de preencher, autentique-se no sistema por qualquer dispositivo.',
  },
  {
    number: '3',
    icon: Sparkles,
    title: 'Surpreenda-se',
    description:
      'Com o Guia BJJ Control você irá aproveitar ao máximo os benefícios do sistema.',
  },
]

export function StepsSection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-transparent to-[#0F0F11]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4 text-white">
            Use em menos de <span className="text-[#E11D48]">5 minutos.</span>
          </h2>

          <div className="w-24 h-1.5 bg-[#E11D48] mx-auto -skew-x-12" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item) => {
            const Icon = item.icon

            return (
              <StepCard
                key={item.number}
                number={item.number}
                icon={<Icon size={32} />}
                title={item.title}
                description={item.description}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}