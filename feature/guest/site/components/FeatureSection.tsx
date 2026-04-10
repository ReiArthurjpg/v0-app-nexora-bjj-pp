'use client'

import {
  Layers,
  Calendar,
  History,
  Target,
  Medal,
  MessageSquare,
} from 'lucide-react'
import { FeatureCard } from '@/components/nexora-cards'

const features = [
  {
    icon: Layers,
    title: 'Graduação Automática',
    description:
      'Configure o tempo de carência e número de aulas para cada faixa. O sistema avisa quem está pronto para o próximo grau.',
  },
  {
    icon: Calendar,
    title: 'Presença Gi e NoGi',
    description:
      'Chamada rápida. Saiba quem está vestindo o quimono e quem está no NoGi com métricas separadas por modalidade.',
  },
  {
    icon: History,
    title: 'Histórico do Lutador',
    description:
      'O registro completo: da branca à preta. Lesões, competições e frequência histórica em um só lugar.',
  },
  {
    icon: Target,
    title: 'Turmas Segmentadas',
    description:
      'Separe turmas de Iniciantes, Avançados, Infantil e Competição. Gestão de horários focada na sua grade de aulas.',
  },
  {
    icon: Medal,
    title: 'Ranking da Academia',
    description:
      'Engaje seus alunos com um ranking interno de assiduidade. Quem mais treina, mais aparece no topo.',
  },
  {
    icon: MessageSquare,
    title: 'Avaliação Técnica',
    description:
      'Módulo de feedback onde o professor registra pontos de melhoria técnica de cada atleta individualmente.',
  },
]

export function FeatureSection() {
  return (
    <section
      id="funcionalidades"
      className="py-32 px-6 bg-[#070708] relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center lg:text-left">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4 text-white">
            Performance <span className="text-[#E11D48]">Suave.</span>
          </h2>

          <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">
            Ferramentas técnicas para academias de alto nível.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((item, index) => {
            const Icon = item.icon

            return (
              <FeatureCard
                key={index}
                icon={<Icon />}
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