'use client'

import { useMVPFeatures } from '../hooks/useMVPFeatures'
import { MVPSectionWrapper, MVPHeader, MVPFeaturesGrid } from '../ui'

export function MVPSection() {
  const { mvpBlocks } = useMVPFeatures()

  return (
    <MVPSectionWrapper>
      <MVPHeader />
      <MVPFeaturesGrid mvpBlocks={mvpBlocks} />
    </MVPSectionWrapper>
  )
}
