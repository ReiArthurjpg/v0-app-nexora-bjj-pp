'use client'

import { PriceCard } from '@/components/nexora-cards'

const plans = [
  {
    tier: 'White Belt',
    price: '69',
    description:
      'Ideal para professores que estão começando o seu próprio horário.',
    features: [
      'Até 40 alunos',
      'Gestão de graduação',
      'Check-in simples',
      'Suporte via email',
    ],
  },
  {
    tier: 'Black Belt',
    price: '129',
    featured: true,
    description:
      'O controle completo para academias profissionais que querem crescer.',
    features: [
      'Alunos ilimitados',
      'Financeiro automatizado',
      'Módulo NoGi separado',
      'Ranking da academia',
      'Suporte prioritário WhatsApp',
      'Relatórios de performance',
    ],
  },
  {
    tier: 'Gracie Master',
    price: '249',
    description:
      'Para redes de academias ou filiais que buscam padronização total.',
    features: [
      'Até 5 unidades',
      'Dashboard centralizado',
      'Migração de dados grátis',
      'Treinamento de equipe',
      'API para site próprio',
    ],
  },
]

export function PricingSection() {
  return (
    <section
      id="precos"
      className="py-32 px-6 bg-[#070708] relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#E11D48]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4 text-white">
            Investimento <span className="text-[#E11D48]">Justo.</span>
          </h2>

          <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">
            Preço de lançamento para os primeiros parceiros.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <PriceCard
              key={index}
              tier={plan.tier}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              featured={plan.featured}
            />
          ))}
        </div>

        <p className="text-center mt-12 text-gray-500 text-xs font-bold uppercase tracking-widest">
          Sem fidelidade. Cancele quando quiser.{' '}
          <span className="text-white">
            Garantia de 7 dias ou seu dinheiro de volta.
          </span>
        </p>
      </div>
    </section>
  )
}