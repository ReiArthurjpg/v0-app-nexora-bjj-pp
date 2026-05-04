import { motion } from 'framer-motion'
import { FeatureCard } from '@/feature/guest/site/components/nexora-cards'
import { LucideIcon } from 'lucide-react'

type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureGrid({ features }: { features: Feature[] }) {
  return (
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
  )
}
