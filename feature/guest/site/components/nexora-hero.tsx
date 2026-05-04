'use client'

import { useState, useEffect } from 'react'
import { NexoraNavbar } from '@/feature/guest/site/components/NexoraHero/ui/NexoraNavbar'
import { HeroSection } from '@/feature/guest/site/components/NexoraHero/ui/HeroSection'
import { HeroContent } from '@/feature/guest/site/components/NexoraHero/ui/HeroContent'
import { HeroVisual } from '@/feature/guest/site/components/NexoraHero/ui/HeroVisual'

const navLinks = [
  { id: 'beneficios', label: 'Benefícios' },
  { id: 'funcionalidades', label: 'Funcionalidades' },
  { id: 'precos', label: 'Preços' },
  { id: 'mvp', label: 'Controle' },
  { id: 'contato', label: 'Contato' },
]

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function NexoraHero() {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 80) {
        setActiveSection('')
        return
      }

      let current = ''
      navLinks.forEach(({ id }) => {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= window.innerHeight * 0.55) {
            current = id
          }
        }
      })

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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