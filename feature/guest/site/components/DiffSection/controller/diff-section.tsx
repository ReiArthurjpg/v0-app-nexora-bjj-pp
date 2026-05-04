'use client'

import { useDifferentials } from '../hooks/useDifferentials'
import { DiffSectionWrapper, DiffGrid } from '../ui'

export function DiffSection() {
  const { differentials } = useDifferentials()

  return (
    <DiffSectionWrapper>
      <DiffGrid differentials={differentials} />
    </DiffSectionWrapper>
  )
}
