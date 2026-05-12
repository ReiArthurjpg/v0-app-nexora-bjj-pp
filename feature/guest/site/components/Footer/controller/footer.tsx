'use client'

import { useFooter } from '../hooks/useFooter'
import { 
  FooterWrapper, 
  FooterBrand, 
  FooterLinks, 
  FooterBottom, 
  ScrollToTop, 
  MobileCTA 
} from '../ui'

export function Footer() {
  const { showScrollTop, scrollToTop, footerLinks } = useFooter()

  return (
    <>
      <FooterWrapper>
        <FooterBrand />
        <FooterLinks links={footerLinks} />
        <FooterBottom />
      </FooterWrapper>

      <ScrollToTop show={showScrollTop} onClick={scrollToTop} />
      <MobileCTA />
    </>
  )
}
