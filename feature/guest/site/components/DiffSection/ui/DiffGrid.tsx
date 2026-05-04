import { DiffItem } from '@/feature/guest/site/components/nexora-cards'

export function DiffGrid({ differentials }: { differentials: string[] }) {
  return (
    <div className="grid md:grid-cols-4 gap-8">
      {differentials.map((text, index) => (
        <DiffItem key={index} text={text} />
      ))}
    </div>
  )
}
