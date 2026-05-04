'use client'

import {
  NexoraNavbar,
  HeroSection,
  HeroContent,
} from '@/feature/guest/site/components/NexoraHero/ui'
import { useHeroNavigation } from '@/feature/guest/site/components/NexoraHero/hooks/useHeroNavigation'

export function NexoraHero() {
  const { navLinks, activeSection, scrollTo } = useHeroNavigation()

  return (
    <>
      <NexoraNavbar
        navLinks={navLinks}
        activeSection={activeSection}
        onScrollTo={scrollTo}
      />

      <HeroSection>
        <div className="flex flex-col items-center justify-center">
          <HeroContent onScrollTo={scrollTo} />
        </div>
      </HeroSection>
    </>
  )
}