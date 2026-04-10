'use client'

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
      className="py-32 px-6 bg-white text-black relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] mb-6">
              Menos tempo no PC, <br />
              <span className="text-[#E11D48]">
                Mais tempo no Tatame.
              </span>
            </h2>

            <p className="text-xl text-gray-600 font-medium">
              Desenvolvemos o Nexora para que você foque na técnica dos seus alunos enquanto o sistema cuida do resto.
            </p>
          </div>

          <div className="bg-[#070708] text-white p-6 rounded-lg -skew-x-6 hidden lg:block shadow-2xl">
            <p className="text-xs font-black uppercase tracking-[0.2em]">
              Resultado Médio
            </p>
            <p className="text-3xl font-black italic">
              +30% faturamento
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {benefits.map((item, index) => {
            const Icon = item.icon

            return (
              <BenefitCard
                key={index}
                icon={<Icon size={40} />}
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