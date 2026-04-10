'use client'

import { motion } from 'framer-motion'
import { TrendingUp, ShieldCheck, Clock, HeartPulse } from 'lucide-react'
import { BenefitCard } from '@/components/nexora-cards'

const benefits = [
  {
    icon: TrendingUp,
    title: 'Aumento de Retenção',
    description:
      'Com o sistema de graduação automática, o aluno visualiza o progresso e sente-se motivado a não faltar aos treinos. Menos desistências, mais mensalidades.',
  },
  {
    icon: ShieldCheck,
    title: 'Inadimplência Zero',
    description:
      'Automação completa de cobranças recorrentes via cartão ou boleto. O sistema bloqueia o check-in de alunos com pagamentos pendentes automaticamente.',
  },
  {
    icon: Clock,
    title: 'Economia de 10h/semana',
    description:
      'Elimine planilhas manuais e o tempo gasto conferindo quem pagou ou quem deve subir de grau. Tudo é processado em tempo real.',
  },
  {
    icon: HeartPulse,
    title: 'Saúde do Aluno',
    description:
      'Histórico de lesões e anamnese integrados. Proteja seus atletas e a sua academia com termos de responsabilidade assinados digitalmente.',
  },
]

export function BenefitSection() {
  return (
    <section
      id="beneficios"
      className="py-32 px-6 bg-white text-black relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[#E11D48] rounded-full blur-[120px] -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-24 gap-8"
        >
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] mb-8">
              Menos tempo no PC, <br />
              <span className="text-[#E11D48]">
                Mais tempo no Tatame.
              </span>
            </h2>

            <p className="text-xl text-gray-600 font-medium mx-auto max-w-2xl">
              Desenvolvemos o Nexora para que você foque na técnica dos seus alunos enquanto o sistema cuida do resto.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {benefits.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <BenefitCard
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