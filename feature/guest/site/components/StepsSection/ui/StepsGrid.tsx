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
  )
}
