'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { authService } from '@/services/auth.service';
import { CheckCircle, XCircle, Loader2, Mail, ArrowRight } from 'lucide-react';

type VerifyStatus = 'loading' | 'success' | 'error' | 'missing';

export function VerifyEmailController() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState<VerifyStatus>('loading');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = searchParams.get('token');

    if (!token) {
      setStatus('missing');
      return;
    }

    authService.verifyEmail(token).then((result) => {
      if (result?.message && !result?.code) {
        setStatus('success');
        setMessage(result.message);
      } else if (result?.code === 'INVALID_TOKEN') {
        setStatus('error');
        setMessage('Token inválido ou expirado. Solicite um novo link de verificação.');
      } else {
        setStatus('error');
        setMessage(result?.message || 'Erro ao verificar o e-mail.');
      }
    }).catch(() => {
      setStatus('error');
      setMessage('Erro ao conectar com o servidor.');
    });
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-[#070708] text-white flex items-center justify-center px-6">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#E11D48]/10 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-md text-center">
        {/* Brand */}
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E11D48] mb-8">Nexora BJJ System</p>

        {/* Status Card */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-10">
          {status === 'loading' && (
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/20 mx-auto">
                <Loader2 size={32} className="text-blue-400 animate-spin" />
              </div>
              <h1 className="text-2xl font-black uppercase italic tracking-tighter">Verificando...</h1>
              <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">
                Aguarde enquanto validamos seu e-mail.
              </p>
            </div>
          )}

          {status === 'success' && (
            <div className="space-y-4">
              <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center border border-green-500/20 mx-auto">
                <CheckCircle size={32} className="text-green-400" />
              </div>
              <h1 className="text-2xl font-black uppercase italic tracking-tighter">
                E-mail <span className="text-green-400">Verificado!</span>
              </h1>
              <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">
                Seu e-mail foi confirmado com sucesso. Agora você pode acessar todas as funcionalidades.
              </p>
              <button
                onClick={() => router.push('/guest/login')}
                className="w-full bg-[#E11D48] hover:bg-white hover:text-black py-4 rounded-lg font-black text-sm uppercase italic tracking-tighter transition-all flex items-center justify-center gap-2 group mt-6"
              >
                FAZER LOGIN <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}

          {(status === 'error' || status === 'missing') && (
            <div className="space-y-4">
              <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center border border-red-500/20 mx-auto">
                <XCircle size={32} className="text-red-400" />
              </div>
              <h1 className="text-2xl font-black uppercase italic tracking-tighter">
                <span className="text-[#E11D48]">Falha</span> na Verificação
              </h1>
              <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">
                {status === 'missing'
                  ? 'Link de verificação inválido. Verifique o link no seu e-mail.'
                  : message}
              </p>
              <button
                onClick={() => router.push('/guest/login')}
                className="w-full border border-white/10 hover:border-[#E11D48] py-4 rounded-lg font-black text-sm uppercase italic tracking-tighter transition-all flex items-center justify-center gap-2 group mt-6"
              >
                VOLTAR AO LOGIN <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-600 font-bold uppercase tracking-widest">
          <Mail size={12} />
          <span>Verifique sua caixa de entrada se o link não funcionar</span>
        </div>
      </div>
    </div>
  );
}
