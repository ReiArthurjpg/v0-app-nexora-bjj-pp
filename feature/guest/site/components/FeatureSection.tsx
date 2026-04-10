'use client'

import { motion } from 'framer-motion'
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
      className="py-32 px-6 bg-[#070708] relative overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#E11D48]/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-6 text-white leading-tight">
            Performance <span className="text-[#E11D48]">Suave.</span>
          </h2>

          <p className="text-gray-500 font-bold uppercase tracking-[0.3em] text-xs">
            Ferramentas técnicas para academias de alto nível.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <FeatureCard
                  icon={<Icon size={24} />}
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