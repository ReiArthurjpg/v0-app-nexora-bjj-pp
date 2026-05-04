'use client'

import { useContactForm } from '../hooks/useContactForm'
import { ContactSectionWrapper, ContactHeader, ContactForm } from '../ui'

export function ContactSection() {
  const { formData, handleChange, handleSubmit } = useContactForm()

  return (
    <ContactSectionWrapper>
      <ContactHeader />
      <ContactForm 
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </ContactSectionWrapper>
  )
}
