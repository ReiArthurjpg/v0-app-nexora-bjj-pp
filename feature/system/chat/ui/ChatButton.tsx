import React from 'react';
import { Headset, X } from 'lucide-react';

interface ChatButtonProps {
  isOpen: boolean;
  onClick: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export function ChatButton({ isOpen, onClick, onMouseEnter, onMouseLeave }: ChatButtonProps) {
  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`fixed cursor-pointer bottom-24 md:bottom-10 right-6 z-50 p-4 bg-[#E11D48] text-white rounded-full shadow-[0_0_20px_rgba(225,29,72,0.4)] transition-all duration-500 hover:scale-110 active:scale-95 group`}
      aria-label={isOpen ? "Fechar Chat" : "Abrir Chat"}
    >
      {isOpen ? (
        <X size={24} strokeWidth={2.5} className="animate-in fade-in zoom-in duration-300" />
      ) : (
        <Headset size={24} strokeWidth={2.5} className="animate-in fade-in zoom-in duration-300 group-hover:rotate-12 transition-transform" />
      )}
    </button>
  );
}
