import { Zap } from 'lucide-react';

export function FormHeader() {
  return (
    <header className="p-8">
      <a href="/" className="flex items-center gap-2 group cursor-pointer text-decoration-none">
        <div className="w-10 h-10 bg-[#E11D48] rounded flex items-center justify-center -skew-x-12">
          <Zap className="text-white fill-current" size={24} />
        </div>
        <span className="text-xl font-black tracking-tighter italic text-white underline-none">
          NEXORA <span className="text-[#E11D48]">BJJ</span>
        </span>
      </a>
    </header>
  );
}
