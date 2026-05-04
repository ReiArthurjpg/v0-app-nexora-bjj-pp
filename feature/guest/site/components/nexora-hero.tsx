'use client'

import { NexoraNavbar } from '@/feature/guest/site/components/NexoraHero/ui/NexoraNavbar'
import { HeroSection } from '@/feature/guest/site/components/NexoraHero/ui/HeroSection'
import { HeroContent } from '@/feature/guest/site/components/NexoraHero/ui/HeroContent'
import { HeroVisual } from '@/feature/guest/site/components/NexoraHero/ui/HeroVisual'
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <HeroContent />
          <HeroVisual />
        </div>
      </HeroSection>
    </>
  )
}