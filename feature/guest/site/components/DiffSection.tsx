'use client'

import { DiffItem } from '@/components/nexora-cards'

const differentials = [
  'Feito 100% para Jiu-Jitsu e NoGi',
  'A evolução técnica em tempo real',
  'Terminologia oficial (IBJJF/CBJJ)',
  'Foco na retenção do seu aluno',
]

export function DiffSection() {
  return (
    <section className="py-20 px-6 border-t border-white/5 bg-[#070708]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {differentials.map((text, index) => (
            <DiffItem key={index} text={text} />
          ))}
        </div>
      </div>
    </section>
  )
}