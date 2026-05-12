import { motion } from 'framer-motion'
import { FeatureCard } from '@/feature/guest/site/components/nexora-cards'
import { LucideIcon } from 'lucide-react'

type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

// Layout de 12 colunas por linha de cada feature
const colSpans = [
  'md:col-span-5',  // 1 — menor
  'md:col-span-7',  // 2 — maior (destaque)
  'md:col-span-4',  // 3
  'md:col-span-4',  // 4
  'md:col-span-4',  // 5
  'md:col-span-12', // 6 — full width (destaque final)
]

export function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <div className="flex flex-col gap-16">
      {/* Grid Principal */}
      <div className="grid md:grid-cols-12 gap-5">
        {features.map((item, index) => {
          const Icon = item.icon
          const xOffset = index % 2 === 0 ? -30 : 30

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: xOffset, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className={colSpans[index] ?? 'md:col-span-4'}
            >
              <FeatureCard
                icon={<Icon size={22} />}
                title={item.title}
                description={item.description}
              />
            </motion.div>
          )
        })}
      </div>

      {/* CTA Final */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
      >
        <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">
          Todas as ferramentas, uma única plataforma
        </p>
        <button
          onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-3 bg-[#E11D48] text-white text-xs font-black uppercase tracking-widest italic -skew-x-6 hover:bg-[#BE123C] transition-all active:scale-95 shadow-[0_0_20px_rgba(225,29,72,0.3)] cursor-pointer"
        >
          <span className="skew-x-6 inline-block">Quero Experimentar</span>
        </button>
      </motion.div>
    </div>
  )
}
