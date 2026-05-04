'use client'

import { useSteps } from '../hooks/useSteps'
import { StepsSectionWrapper, StepsHeader, StepsGrid } from '../ui'

export function StepsSection() {
  const { steps } = useSteps()

  return (
    <StepsSectionWrapper>
      <StepsHeader />
      <StepsGrid steps={steps} />
    </StepsSectionWrapper>
  )
}
