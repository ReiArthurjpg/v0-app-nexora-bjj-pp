'use client';

import React, { useRef } from 'react';
import { Loader2, ChevronRight, ArrowLeft, ShieldCheck } from 'lucide-react';
import { UseFormReturn } from 'react-hook-form';
import { TwoFactorFormData } from '../../../schemas/two-factor.schema';

interface TwoFactorFieldsProps {
  form: UseFormReturn<TwoFactorFormData>;
  isSubmitting: boolean;
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  handleBack: () => void;
}

export function TwoFactorFields({ form, isSubmitting, onSubmit, handleBack }: TwoFactorFieldsProps) {
  const { register, formState: { errors }, setValue, watch } = form;
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const digits = watch('code') ?? '';

  const handleDigitChange = (idx: number, value: string) => {
    const cleaned = value.replace(/\D/g, '').slice(0, 1);
    const newDigits = digits.split('');
    newDigits[idx] = cleaned;
    setValue('code', newDigits.join('').slice(0, 6));
    if (cleaned && idx < 5) {
      inputRefs.current[idx + 1]?.focus();
    }
  };

  const handleKeyDown = (idx: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !digits[idx] && idx > 0) {
      inputRefs.current[idx - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    setValue('code', pasted);
    inputRefs.current[Math.min(pasted.length, 5)]?.focus();
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      {/* OTP Input */}
      <div className="space-y-3">
        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 block text-center">
          Código do Aplicativo Autenticador
        </label>

        <div className="flex justify-center gap-3">
          {Array.from({ length: 6 }).map((_, idx) => (
            <input
              key={idx}
              ref={el => { inputRefs.current[idx] = el; }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digits[idx] ?? ''}
              disabled={isSubmitting}
              onChange={e => handleDigitChange(idx, e.target.value)}
              onKeyDown={e => handleKeyDown(idx, e)}
              onPaste={handlePaste}
              className={`
                w-12 h-14 text-center text-2xl font-black rounded-lg border transition-all
                bg-white/5 text-white
                ${errors.code ? 'border-red-500' : 'border-white/10'}
                focus:outline-none focus:border-[#E11D48] focus:bg-[#E11D48]/5
                disabled:opacity-50
              `}
            />
          ))}
        </div>

        {errors.code && (
          <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest text-center">
            {errors.code.message}
          </p>
        )}
      </div>

      {/* Hidden real input for form validation */}
      <input type="hidden" {...register('code')} />

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting || digits.length < 6}
        className="w-full bg-[#E11D48] hover:bg-white hover:text-black py-5 rounded-lg font-black text-lg uppercase italic tracking-tighter transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#E11D48]/20 group disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>VERIFICANDO... <Loader2 className="animate-spin" size={20} /></>
        ) : (
          <>VERIFICAR CÓDIGO <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" strokeWidth={3} /></>
        )}
      </button>

      {/* Back */}
      <div className="text-center">
        <button
          type="button"
          onClick={handleBack}
          className="text-xs font-bold text-gray-500 uppercase tracking-widest hover:text-white transition-colors flex items-center gap-1.5 mx-auto"
        >
          <ArrowLeft size={14} /> Voltar para o Login
        </button>
      </div>
    </form>
  );
}
