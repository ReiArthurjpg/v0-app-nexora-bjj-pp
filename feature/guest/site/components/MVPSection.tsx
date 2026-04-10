'use client'

import { motion } from 'framer-motion'
import { Users, QrCode, Trophy, LayoutDashboard } from 'lucide-react'
import { MVPBlock } from '@/feature/guest/site/components/nexora-cards'

const mvpBlocks = [
  {
    icon: Users,
    title: 'Gestão de Alunos',
    items: [
      'Ficha técnica completa',
      'Cor da faixa e graus',
      'Status (Ativo/Inativo)',
      'Controle de exames',
    ],
  },
  {
    icon: QrCode,
    title: 'Presença Inteligente',
    items: [
      'Check-in via QR Code',
      'Histórico de treinos',
      'Frequência por quimono/NoGi',
    ],
  },
  {
    icon: Trophy,
    title: 'Promoção de Faixa',
    items: [
      'Regras por n° de aulas',
      'Contagem de carência',
      'Sugestão de promoção',
    ],
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard do Mestre',
    items: [
      'Alunos no tatame',
      'Evolução do faturamento',
      'Previsão de graduações',
    ],
  },
]

export function MVPSection() {
  return (
    <section
      id="mvp"
      className="py-32 px-6 bg-[#0F0F11] border-y border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* LADO ESQUERDO (FIXO) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-none mb-6 text-white">
              Controle <br />
              do <span className="text-[#E11D48]">Tatame.</span>
            </h2>

            <p className="text-gray-600 font-medium mb-8">
              Desenvolvemos o Nexora para resolver a desorganização que impede sua academia de crescer. Gestão focada no que o mestre precisa.
            </p>

            <button className="bg-[#E11D48] text-white px-8 py-4 rounded font-black uppercase italic tracking-tighter hover:bg-white hover:text-black transition-all duration-300">
              Experimentar Grátis
            </button>
          </motion.div>

          {/* LADO DIREITO (DINÂMICO) */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {mvpBlocks.map((block, index) => {
              const Icon = block.icon

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <MVPBlock
                    icon={<Icon size={20} />}
                    title={block.title}
                    items={block.items}
                  />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}