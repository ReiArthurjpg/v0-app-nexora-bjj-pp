import { motion } from 'framer-motion'
import { StepCard } from '@/feature/guest/site/components/nexora-cards'
import { LucideIcon } from 'lucide-react'

type Step = {
  number: string
  icon: LucideIcon
  title: string
  description: string
}

export function StepsGrid({ steps }: { steps: Step[] }) {
  return (
    <div className="relative">
      {/* Linha Conectora (Desktop) */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E11D48]/10 to-transparent hidden md:block -translate-y-12" />

      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        {steps.map((item, index) => {
          const Icon = item.icon
          // Alterna a direção da animação para um efeito mais orgânico
          const xOffset = index % 2 === 0 ? -20 : 20

          return (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, x: xOffset, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: "easeOut"
              }}
              className="relative"
            >
              <StepCard
                number={item.number}
                icon={<Icon size={32} />}
                title={item.title}
                description={item.description}
              />
              
              {/* Indicador de Conexão Mobile */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center py-4">
                  <div className="w-px h-8 bg-gradient-to-b from-[#E11D48]/40 to-transparent" />
                </div>
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
