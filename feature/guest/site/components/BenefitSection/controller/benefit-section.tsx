'use client'

import { useBenefits } from '../hooks/useBenefits'
import { BenefitSectionWrapper, BenefitHeader, BenefitGrid } from '../ui'

export function BenefitSection() {
  const { benefits } = useBenefits()

  return (
    <BenefitSectionWrapper>
      <BenefitHeader />
      <BenefitGrid benefits={benefits} />
    </BenefitSectionWrapper>
  )
}
