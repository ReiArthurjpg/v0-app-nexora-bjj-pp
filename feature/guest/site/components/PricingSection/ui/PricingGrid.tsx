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
    <div className="grid lg:grid-cols-3 gap-8 items-center">
      {plans.map((plan, index) => (
        <PriceCard
          key={index}
          tier={plan.tier}
          price={plan.price}
          description={plan.description}
          features={plan.features}
          featured={plan.featured}
        />
      ))}
    </div>
  )
}
