import { motion } from 'framer-motion'
import { BenefitCard } from '@/feature/guest/site/components/nexora-cards'
import { LucideIcon } from 'lucide-react'

type Benefit = {
  icon: LucideIcon
  title: string
  description: string
  metric?: string
}

export function BenefitGrid({ benefits }: { benefits: Benefit[] }) {
  return (
    <div className="grid md:grid-cols-12 gap-6 max-w-7xl mx-auto">
      {benefits.map((item, index) => {
        const Icon = item.icon
        
        // Layout assimétrico: primeiro card maior (col-span-7), outros col-span-5 ou 4
        const colSpan = index === 0 ? 'md:col-span-7' : index === 1 ? 'md:col-span-5' : 'md:col-span-6'
        
        // Animação variada: alternando entrada pela esquerda e direita
        const xOffset = index % 2 === 0 ? -40 : 40

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: xOffset, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
            className={colSpan}
          >
            <BenefitCard
              icon={<Icon size={28} />}
              title={item.title}
              description={item.description}
              metric={item.metric}
            />
          </motion.div>
        )
      })}
    </div>
  )
}
