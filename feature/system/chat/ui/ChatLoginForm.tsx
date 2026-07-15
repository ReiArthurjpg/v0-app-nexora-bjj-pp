'use client';

import React, { useState } from 'react';
import { Eye, EyeOff, Loader2, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

export function ChatLoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const { setSession } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) return;

    setIsLoading(true);
    setError('');

    try {
      // Usa fetch direto para evitar interceptação do refresh logic do fetchApi
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), password }),
      });

      const result = await response.json();

      // Conta bloqueada
      if (result.code === 'ACCOUNT_LOCKED') {
        setError('Conta bloqueada por muitas tentativas incorretas. Redefina sua senha para desbloquear.');
        return;
      }

      // Rate limit
      if (result.code === 'RATE_LIMIT') {
        setError('Muitas tentativas. Aguarde um momento e tente novamente.');
        return;
      }

      // 2FA necessário
      if (result.requires_2fa && result.tempToken) {
        Cookies.set('nexora_2fa_token', result.tempToken, { expires: 1 / 24 });
        router.push('/guest/two-factor');
        return;
      }

      // Sucesso
      if (result.accessToken && result.user) {
        setSession(result.accessToken, result.user, result.refreshToken);
        setSuccess(true);
        setTimeout(() => router.push('/hub'), 1500);
        return;
      }

      // Credenciais inválidas ou outro erro
      setError(result.message || 'Credenciais inválidas. Verifique seu e-mail e senha.');
    } catch {
      setError('Erro ao conectar com o servidor. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  // Estado de sucesso
  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mt-3 ml-11 p-4 bg-[#10B981]/10 border border-[#10B981]/30 rounded-2xl flex items-center gap-3"
      >
        <CheckCircle size={18} className="text-[#10B981] shrink-0" />
        <span className="text-[13px] text-[#10B981] font-semibold">
          Login realizado! Redirecionando...
        </span>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="mt-3 ml-11 p-4 bg-[#111113] border border-white/10 rounded-2xl space-y-3"
    >
      {/* E-mail */}
      <div className="space-y-1">
        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">
          E-mail
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seu@email.com"
          disabled={isLoading}
          autoComplete="email"
          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-[13px] text-white placeholder-gray-600 focus:outline-none focus:border-[#E11D48]/50 focus:ring-1 focus:ring-[#E11D48]/20 transition-all disabled:opacity-50"
        />
      </div>

      {/* Senha */}
      <div className="space-y-1">
        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">
          Senha
        </label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            disabled={isLoading}
            autoComplete="current-password"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 pr-9 text-[13px] text-white placeholder-gray-600 focus:outline-none focus:border-[#E11D48]/50 focus:ring-1 focus:ring-[#E11D48]/20 transition-all disabled:opacity-50"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
          >
            {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
          </button>
        </div>
      </div>

      {/* Erro */}
      {error && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[11px] text-red-400 font-semibold leading-snug"
        >
          {error}
        </motion.p>
      )}

      {/* Botão */}
      <button
        type="submit"
        disabled={isLoading || !email.trim() || !password.trim()}
        className="w-full bg-[#E11D48] hover:bg-[#BE123C] text-white font-black text-[12px] uppercase tracking-wider py-2.5 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-[0_0_12px_rgba(225,29,72,0.3)]"
      >
        {isLoading ? (
          <>
            <Loader2 size={14} className="animate-spin" />
            Entrando...
          </>
        ) : (
          'Entrar'
        )}
      </button>

      {/* Esqueci a senha */}
      <button
        type="button"
        onClick={() => router.push('/guest/forgot-password')}
        className="w-full text-[11px] text-gray-500 hover:text-[#E11D48] transition-colors text-center"
      >
        Esqueceu sua senha?
      </button>
    </motion.form>
  );
}
