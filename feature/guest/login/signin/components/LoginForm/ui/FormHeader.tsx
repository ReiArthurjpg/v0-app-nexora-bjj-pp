'use client';

import { Zap } from 'lucide-react';
import DecryptedText from '@/components/react-bits/DecryptedText';

export function FormHeader() {
  return (
    <header>
      <a href="/" className="flex items-center gap-3 group cursor-pointer text-decoration-none w-fit">
        <div className="w-10 h-10 bg-[#E11D48] rounded flex items-center justify-center -skew-x-12 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#E11D48]/30">
          <Zap className="text-white fill-current" size={24} />
        </div>
        <span className="text-xl font-black tracking-tighter italic text-white underline-none">
          <DecryptedText
            text="NEXORA"
            speed={60}
            maxIterations={8}
            sequential={true}
            revealDirection="start"
            animateOn="view"
            className="text-white"
            encryptedClassName="text-[#E11D48]/40"
            characters="NXRAOEJKZ01"
          />
          {' '}
          <DecryptedText
            text="BJJ"
            speed={80}
            maxIterations={12}
            sequential={true}
            revealDirection="end"
            animateOn="view"
            className="text-[#E11D48]"
            encryptedClassName="text-white/20"
            characters="BJJ01XZ"
          />
        </span>
      </a>
    </header>
  );
}
