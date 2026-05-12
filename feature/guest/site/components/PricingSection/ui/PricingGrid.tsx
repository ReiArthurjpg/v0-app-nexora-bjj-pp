import { motion } from 'framer-motion'
import { PriceCard } from '@/feature/guest/site/components/nexora-cards'

type Plan = {
  tier: string
  price: string
  description: string
  features: string[]
  featured?: boolean
}

export function PricingGrid({ plans }: { plans: Plan[] }) {
  return (
    <div className="grid lg:grid-cols-3 gap-8 items-stretch">
      {plans.map((plan, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.15,
            ease: "easeOut"
          }}
          className="h-full"
        >
          <PriceCard
            tier={plan.tier}
            price={plan.price}
            description={plan.description}
            features={plan.features}
            featured={plan.featured}
          />
        </motion.div>
      ))}
    </div>
  )
}
