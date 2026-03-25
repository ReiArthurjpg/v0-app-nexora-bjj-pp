import { ReactNode } from 'react';

interface MetricBoxProps {
  icon: ReactNode;
  val: string;
  label: string;
}

export function MetricBox({ icon, val, label }: MetricBoxProps) {
  return (
    <div className="p-6 bg-white/5 border border-white/5 rounded-xl flex flex-col items-center text-center group hover:bg-white/10 transition-all">
      <div className="text-[#E11D48] mb-3 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="text-2xl font-black italic tracking-tighter text-white mb-1">{val}</div>
      <div className="text-[9px] font-black uppercase tracking-widest text-gray-500">{label}</div>
    </div>
  );
}
