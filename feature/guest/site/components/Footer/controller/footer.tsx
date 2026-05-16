'use client'

import { useFooter } from '../hooks/useFooter'
import { 
  FooterWrapper, 
  FooterBrand, 
  FooterLinks, 
  FooterBottom, 
  MobileCTA 
} from '../ui'
import { ChatAssistant } from '@/feature/system/chat'

export function Footer() {
  const { footerLinks } = useFooter()

  return (
    <>
      <FooterWrapper>
        <FooterBrand />
        <FooterLinks links={footerLinks} />
        <FooterBottom />
      </FooterWrapper>

      <ChatAssistant />
      <MobileCTA />
    </>
  )
}
