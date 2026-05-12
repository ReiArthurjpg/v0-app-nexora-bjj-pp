import { useEffect, useState } from 'react'

type NavLink = {
  id: string
  label: string
}

export function useHeroNavigation() {
  const navLinks: NavLink[] = [
    { id: 'beneficios', label: 'Benefícios' },
    { id: 'funcionalidades', label: 'Funcionalidades' },
    { id: 'precos', label: 'Preços' },
    { id: 'mvp', label: 'Controle' },
    { id: 'contato', label: 'Contato' },
  ]

  const [activeSection, setActiveSection] = useState<string>('')

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

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

  return {
    navLinks,
    activeSection,
    scrollTo,
  }
}