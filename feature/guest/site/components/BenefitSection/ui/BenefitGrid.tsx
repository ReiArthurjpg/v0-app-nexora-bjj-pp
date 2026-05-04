import { motion } from 'framer-motion'
import { BenefitCard } from '@/feature/guest/site/components/nexora-cards'
import { LucideIcon } from 'lucide-react'

type Benefit = {
  icon: LucideIcon
  title: string
  description: string
}

export function BenefitGrid({ benefits }: { benefits: Benefit[] }) {
  return (
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
  )
}
