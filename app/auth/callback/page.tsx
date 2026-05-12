'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Cookies from 'js-cookie';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export default function AuthCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  useEffect(() => {
    if (token) {
      // Save token to cookies
      Cookies.set('nexora_token', token, { expires: 1 }); // 1 day
      toast.success('Login com Google realizado com sucesso!');
      router.push('/hub');
    } else {
      toast.error('Token de autenticação não encontrado.');
      router.push('/login');
    }
  }, [token, router]);

  return (
    <div className="min-h-screen bg-[#070708] flex flex-col items-center justify-center text-white p-8">
      <Loader2 className="animate-spin text-[#E11D48] mb-4" size={48} />
      <h1 className="text-xl font-black uppercase italic tracking-tighter mb-2">
        FINALIZANDO <span className="text-[#E11D48]">AUTENTICAÇÃO</span>
      </h1>
      <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em] animate-pulse">
        Por favor, aguarde enquanto validamos sua conta...
      </p>
    </div>
  );
}
