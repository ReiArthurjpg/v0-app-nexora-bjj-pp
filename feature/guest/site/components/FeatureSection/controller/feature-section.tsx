'use client'

import { useFeatures } from '../hooks/useFeatures'
import { FeatureSectionWrapper, FeatureHeader, FeatureGrid } from '../ui'

export function FeatureSection() {
  const { features } = useFeatures()

  return (
    <FeatureSectionWrapper>
      <FeatureHeader />
      <FeatureGrid features={features} />
    </FeatureSectionWrapper>
  )
}
