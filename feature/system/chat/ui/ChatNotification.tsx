'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Headset, X } from 'lucide-react';

interface ChatNotificationProps {
  onClose: (e: React.MouseEvent) => void;
  onClick: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export function ChatNotification({ onClose, onClick, onMouseEnter, onMouseLeave }: ChatNotificationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 15 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="fixed bottom-[160px] right-6 md:bottom-[44px] md:right-[88px] z-50 w-max max-w-[340px] p-4 bg-gradient-to-br from-[#18181B]/95 to-[#0A0A0A]/95 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-br-sm shadow-[0_12px_40px_rgba(0,0,0,0.6)] flex items-start gap-4 cursor-pointer group hover:border-[#E11D48]/40 transition-all duration-300"
    >
      <div className="relative flex-shrink-0 mt-0.5">
        <div className="w-10 h-10 bg-gradient-to-br from-[#E11D48] to-[#BE123C] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(225,29,72,0.4)] group-hover:scale-105 transition-transform duration-300">
          <Headset size={18} className="text-white" />
        </div>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#10B981] border-[2.5px] border-[#18181B] rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
      </div>
      
      <div className="flex-1 min-w-0 pr-6">
        <p className="text-[10px] font-black uppercase tracking-widest text-[#E11D48] mb-1 opacity-90">Suporte Nexora</p>
        <p className="text-[14px] text-white/95 font-medium leading-relaxed">Oi, você está precisando de ajuda?</p>
      </div>
      
      <button
        onClick={onClose}
        className="absolute top-3 right-3 p-1.5 rounded-full text-gray-500 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
        aria-label="Fechar notificação"
      >
        <X size={14} />
      </button>
    </motion.div>
  );
}
