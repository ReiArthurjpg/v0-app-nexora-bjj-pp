'use client';

import React from 'react';
import { Loader2 } from 'lucide-react';

export function ResetPasswordLoading() {
  return (
    <div className="min-h-screen bg-[#070708] flex flex-col items-center justify-center text-white p-8">
      <Loader2 className="animate-spin text-[#E11D48] mb-4" size={48} />
      <p className="text-[10px] font-black uppercase tracking-[0.3em] animate-pulse">Validando token de segurança...</p>
    </div>
  );
}
