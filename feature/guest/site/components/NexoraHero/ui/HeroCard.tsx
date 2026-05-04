export function HeroCard() {
  return (
    <div className="h-48 bg-white/5 rounded border border-white/5 p-6 flex flex-col justify-between">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded bg-[#E11D48] flex items-center justify-center font-black italic text-black">
          BJJ
        </div>
        <div className="space-y-1">
          <div className="text-sm font-black italic uppercase tracking-tight text-white">
            Alliance Matriz SP
          </div>
          <div className="h-1 w-20 bg-white/10 rounded" />
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between text-[10px] font-black uppercase text-gray-500">
          <span>Frequência Semanal</span>
          <span className="text-[#E11D48]">92%</span>
        </div>

        <div className="h-2 w-full bg-white/5 rounded overflow-hidden">
          <div className="h-full bg-[#E11D48] w-[92%]" />
        </div>
      </div>
    </div>
  )
}