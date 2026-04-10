import {
  NexoraHero,
  BenefitSection,
  FeatureSection,
  StepsSection,
  PricingSection,
  MVPSection,
  ContactSection,
  DiffSection,
  Footer,
} from '@/feature/guest/site/components'
export default function Home() {
  return (
    <main className="min-h-screen bg-[#070708] text-white font-sans selection:bg-[#E11D48] selection:text-white overflow-x-hidden">
      <NexoraHero />
      <BenefitSection />
      <FeatureSection />
      <StepsSection />
      <PricingSection />
      <MVPSection />
      <ContactSection />
      <DiffSection />
      <Footer />
    </main>
  )
}
