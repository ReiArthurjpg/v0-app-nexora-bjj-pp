import { motion } from 'framer-motion'
import { MVPBlock } from '@/feature/guest/site/components/nexora-cards'
import { LucideIcon } from 'lucide-react'

type Block = {
  icon: LucideIcon
  title: string
  items: string[]
}

export function MVPFeaturesGrid({ mvpBlocks }: { mvpBlocks: Block[] }) {
  return (
    <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
      {mvpBlocks.map((block, index) => {
        const Icon = block.icon

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <MVPBlock
              icon={<Icon size={20} />}
              title={block.title}
              items={block.items}
            />
          </motion.div>
        )
      })}
    </div>
  )
}
