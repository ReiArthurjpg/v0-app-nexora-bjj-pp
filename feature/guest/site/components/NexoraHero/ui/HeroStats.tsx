const stats = [
  { label: 'Ativos', value: '142 ALUNOS' },
  { label: 'NoGi', value: '56 ATLETAS' },
  { label: 'Aptos', value: '12 GRAUS' },
]

export function HeroStats() {
  return (
    <div className="flex gap-4">
      {stats.map((item) => (
        <div key={item.label} className="h-20 w-1/3 bg-white/5 rounded border border-white/5 p-4 flex flex-col justify-center">
          <div className="h-1 w-8 bg-[#E11D48] mb-2" />
          <div className="text-[10px] text-gray-500 uppercase font-black">{item.label}</div>
          <div className="text-lg font-black italic tracking-tighter text-white">{item.value}</div>
        </div>
      ))}
    </div>
  )
}