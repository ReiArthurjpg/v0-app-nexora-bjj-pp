import { HeroStats } from './HeroStats'
import { HeroCard } from './HeroCard'

export function HeroVisual() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-[#E11D48]/20 blur-[120px] rounded-full opacity-30 animate-pulse" />

      <div className="relative bg-[#0F0F11] border border-white/10 rounded-xl overflow-hidden shadow-2xl skew-y-1">
        <img
          src="/hero-training.png"
          alt="Atletas de Jiu-Jitsu treinando"
          className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale"
        />

        <div className="relative p-8 space-y-6 bg-gradient-to-b from-transparent to-[#0F0F11]">
          <HeroStats />
          <HeroCard />
        </div>
      </div>
    </div>
  )
}