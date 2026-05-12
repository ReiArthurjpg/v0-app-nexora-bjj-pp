'use client'

import { usePricing } from '../hooks/usePricing'
import { PricingSectionWrapper, PricingHeader, PricingGrid, PricingFooter } from '../ui'

export function PricingSection() {
  const { plans } = usePricing()

  return (
    <PricingSectionWrapper>
      <PricingHeader />
      <PricingGrid plans={plans} />
      <PricingFooter />
    </PricingSectionWrapper>
  )
}
