import { Instagram, Users, Facebook, Linkedin, Youtube } from 'lucide-react'

// Ícone simples em SVG para o TikTok
const TikTokIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
)

function SocialCircle({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      className="group relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#E11D48] hover:border-[#E11D48] hover:scale-110 transition-all duration-500 shadow-xl overflow-hidden"
    >
      {/* Glow interno no hover */}
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-full" />
      
      <span className="relative z-10 text-white/70 group-hover:text-white transition-colors duration-300">
        {icon}
      </span>
    </a>
  )
}

export function MiniSocialContent() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-10 py-4">
      <div className="max-w-2xl">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Users size={16} className="text-[#E11D48]" />
          <span className="text-xs font-black uppercase tracking-[0.3em] text-[#E11D48]">
            Comunidade Nexora
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white leading-none mb-6">
          Faça parte do <br className="md:hidden" /> movimento.
        </h2>
        <p className="text-white/60 text-xs md:text-sm font-bold uppercase tracking-widest max-w-lg mx-auto leading-relaxed">
          Acompanhe os bastidores, dicas de gestão e o crescimento do ecossistema que está transformando o Jiu-Jitsu.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
        <SocialCircle href="https://instagram.com" icon={<Instagram size={28} />} label="Instagram" />
        <SocialCircle href="https://tiktok.com" icon={<TikTokIcon size={28} />} label="TikTok" />
        <SocialCircle href="https://youtube.com" icon={<Youtube size={28} />} label="YouTube" />
        <SocialCircle href="https://linkedin.com" icon={<Linkedin size={28} />} label="LinkedIn" />
        <SocialCircle href="https://facebook.com" icon={<Facebook size={28} />} label="Facebook" />
      </div>
    </div>
  )
}

