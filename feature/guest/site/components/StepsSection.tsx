'use client'

import { motion } from 'framer-motion'
import { UserPlus, LogIn, Sparkles } from 'lucide-react'
import { StepCard } from '@/feature/guest/site/components/nexora-cards'

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
    <section className="py-32 px-6 bg-gradient-to-b from-transparent to-[#0F0F11] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-6 text-white leading-tight">
            Use em menos de <br />
            <span className="text-[#E11D48]">5 minutos.</span>
          </h2>

          <div className="w-24 h-1.5 bg-[#E11D48] mx-auto -skew-x-12" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <StepCard
                  number={item.number}
                  icon={<Icon size={32} />}
                  title={item.title}
                  description={item.description}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}