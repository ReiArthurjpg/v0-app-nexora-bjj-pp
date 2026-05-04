export function HeroSection({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#E11D48]/15 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  )
}