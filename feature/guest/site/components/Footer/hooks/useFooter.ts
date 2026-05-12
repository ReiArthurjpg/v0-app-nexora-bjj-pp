import { useState, useEffect } from 'react'

export function useFooter() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  const footerLinks = [
    { label: 'Suporte', href: '#' },
    { label: 'Privacidade', href: '#' },
    { label: 'Central BJJ', href: '#' },
  ]

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 250)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return {
    showScrollTop,
    scrollToTop,
    footerLinks
  }
}
