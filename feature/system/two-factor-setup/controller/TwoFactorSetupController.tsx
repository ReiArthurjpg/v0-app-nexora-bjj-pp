'use client';

import React from 'react';
import { Shield, ShieldCheck, QrCode, Key, Copy, AlertTriangle, Lock, Loader2, CheckCircle, Eye, EyeOff, ChevronRight } from 'lucide-react';
import { useTwoFactorSetup } from '../hooks/useTwoFactorSetup';
import { useState } from 'react';

export function TwoFactorSetupController() {
  const {
    step, setStep,
    qrCode, secret, otpUrl,
    verifyCode, setVerifyCode,
    recoveryCodes,
    disablePassword, setDisablePassword,
    isLoading,
    handleGenerate, handleEnable, handleDisable,
  } = useTwoFactorSetup();

  const [showPassword, setShowPassword] = useState(false);
  const [copiedSecret, setCopiedSecret] = useState(false);

  const copySecret = () => {
    navigator.clipboard.writeText(secret);
    setCopiedSecret(true);
    setTimeout(() => setCopiedSecret(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#070708] text-white">
      <div className="max-w-2xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-[#E11D48]/10 rounded-lg flex items-center justify-center border border-[#E11D48]/20">
              <Shield size={20} className="text-[#E11D48]" />
            </div>
            <div>
              <h1 className="text-2xl font-black uppercase italic tracking-tighter">
                Autenticação <span className="text-[#E11D48]">2 Fatores</span>
              </h1>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">
                Configurações de segurança da conta
              </p>
            </div>
          </div>
        </div>

        {/* ── STEP: IDLE (not enabled) ── */}
        {step === 'idle' && (
          <div className="space-y-6">
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-amber-500/10 rounded-lg flex items-center justify-center border border-amber-500/20">
                  <AlertTriangle size={16} className="text-amber-400" />
                </div>
                <p className="text-sm font-black uppercase tracking-widest text-amber-400">2FA não ativado</p>
              </div>
              <p className="text-gray-400 text-sm font-medium mb-6">
                A autenticação de dois fatores adiciona uma camada extra de segurança à sua conta.
                Mesmo que sua senha seja comprometida, o invasor precisará do código do seu app autenticador.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { icon: <Shield size={20} />, label: 'Conta Protegida' },
                  { icon: <Key size={20} />, label: 'Códigos Únicos' },
                  { icon: <ShieldCheck size={20} />, label: 'Acesso Seguro' },
                ].map(({ icon, label }) => (
                  <div key={label} className="bg-white/5 rounded-lg p-4 text-center border border-white/5">
                    <div className="text-[#E11D48] flex justify-center mb-2">{icon}</div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{label}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={handleGenerate}
                disabled={isLoading}
                className="w-full bg-[#E11D48] hover:bg-white hover:text-black py-4 rounded-lg font-black text-sm uppercase italic tracking-tighter transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#E11D48]/20 group disabled:opacity-50"
              >
                {isLoading ? <><Loader2 className="animate-spin" size={16} /> GERANDO...</> : <><ShieldCheck size={16} /> ATIVAR 2FA <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /></>}
              </button>
            </div>
          </div>
        )}

        {/* ── STEP: SCANNING (QR Code) ── */}
        {step === 'scanning' && (
          <div className="space-y-6">
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-6">
                <QrCode size={18} className="text-[#E11D48]" />
                <p className="text-sm font-black uppercase tracking-widest">Etapa 1: Escanear QR Code</p>
              </div>

              {/* Steps guide */}
              <div className="space-y-2 mb-6">
                {[
                  'Abra o Google Authenticator ou Authy',
                  'Toque em "+ Adicionar conta"',
                  'Selecione "Escanear QR Code"',
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs text-gray-400 font-bold">
                    <span className="w-5 h-5 bg-[#E11D48]/10 rounded-full flex items-center justify-center text-[#E11D48] text-[10px] font-black shrink-0">{i + 1}</span>
                    {text}
                  </div>
                ))}
              </div>

              {/* QR Code */}
              <div className="flex justify-center mb-6">
                <div className="bg-white p-4 rounded-xl inline-block">
                  {qrCode ? (
                    <img src={qrCode} alt="QR Code 2FA" width={180} height={180} />
                  ) : (
                    <div className="w-[180px] h-[180px] flex items-center justify-center">
                      <Loader2 className="animate-spin text-gray-400" size={32} />
                    </div>
                  )}
                </div>
              </div>

              {/* Manual secret */}
              <div className="mb-6">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">
                  Ou insira a chave manualmente:
                </p>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg p-3">
                  <code className="flex-1 text-sm text-[#E11D48] font-mono font-bold tracking-widest break-all">
                    {secret}
                  </code>
                  <button
                    type="button"
                    onClick={copySecret}
                    className="text-gray-400 hover:text-white transition-colors shrink-0"
                  >
                    {copiedSecret ? <CheckCircle size={16} className="text-green-400" /> : <Copy size={16} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Verify step */}
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Key size={18} className="text-[#E11D48]" />
                <p className="text-sm font-black uppercase tracking-widest">Etapa 2: Confirmar com o código</p>
              </div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-4">
                Após escanear, insira o código de 6 dígitos gerado pelo app:
              </p>

              {/* OTP Input */}
              <div className="flex justify-center gap-2 mb-6">
                {Array.from({ length: 6 }).map((_, idx) => (
                  <input
                    key={idx}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={verifyCode[idx] ?? ''}
                    onChange={e => {
                      const cleaned = e.target.value.replace(/\D/g, '').slice(0, 1);
                      const arr = verifyCode.split('');
                      arr[idx] = cleaned;
                      const newCode = arr.join('').slice(0, 6);
                      setVerifyCode(newCode);
                      if (cleaned) {
                        const nextInput = document.getElementById(`setup-otp-${idx + 1}`);
                        nextInput?.focus();
                      }
                    }}
                    id={`setup-otp-${idx}`}
                    className="w-11 h-13 text-center text-xl font-black rounded-lg border border-white/10 bg-white/5 text-white focus:outline-none focus:border-[#E11D48] focus:bg-[#E11D48]/5 transition-all"
                  />
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep('idle')}
                  className="flex-1 border border-white/10 hover:border-white/30 py-3 rounded-lg font-black text-sm uppercase tracking-widest transition-all"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleEnable}
                  disabled={isLoading || verifyCode.length < 6}
                  className="flex-1 bg-[#E11D48] hover:bg-white hover:text-black py-3 rounded-lg font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isLoading ? <Loader2 className="animate-spin" size={16} /> : <ShieldCheck size={16} />}
                  {isLoading ? 'Ativando...' : 'Ativar 2FA'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── STEP: SUCCESS (Recovery Codes) ── */}
        {step === 'success' && (
          <div className="space-y-6">
            <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle size={24} className="text-green-400" />
                <p className="text-base font-black uppercase tracking-widest text-green-400">2FA Ativado!</p>
              </div>
              <p className="text-gray-400 text-sm font-medium">
                Sua conta agora está protegida com autenticação de dois fatores.
              </p>
            </div>

            {/* Recovery Codes */}
            <div className="bg-white/[0.03] border border-amber-500/20 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle size={16} className="text-amber-400" />
                <p className="text-sm font-black uppercase tracking-widest text-amber-400">
                  Salve seus códigos de recuperação!
                </p>
              </div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-4">
                Use estes códigos caso perca o acesso ao app autenticador. Cada código pode ser usado apenas uma vez.
              </p>

              <div className="grid grid-cols-2 gap-2 mb-6">
                {recoveryCodes.map((code, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-center font-mono text-sm font-bold text-gray-300 tracking-widest"
                  >
                    {code}
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  const text = recoveryCodes.join('\n');
                  navigator.clipboard.writeText(text);
                }}
                className="w-full border border-white/10 hover:border-[#E11D48] py-3 rounded-lg font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
              >
                <Copy size={14} /> Copiar todos os códigos
              </button>
            </div>

            <button
              onClick={() => setStep('disabling')}
              className="w-full border border-white/10 hover:border-white/30 py-3 rounded-lg font-black text-xs uppercase tracking-widest transition-all text-gray-500"
            >
              Concluído
            </button>
          </div>
        )}

        {/* ── STEP: DISABLING (2FA enabled, show disable option) ── */}
        {step === 'disabling' && (
          <div className="space-y-6">
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck size={20} className="text-green-400" />
                <p className="text-sm font-black uppercase tracking-widest text-green-400">2FA Ativo</p>
              </div>
              <p className="text-gray-400 text-sm font-medium mb-6">
                Sua conta está protegida com autenticação de dois fatores. Para desativar, confirme sua senha.
              </p>

              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                    Senha atual para confirmar
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-600 pointer-events-none">
                      <Lock size={16} />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={disablePassword}
                      onChange={e => setDisablePassword(e.target.value)}
                      placeholder="Digite sua senha"
                      className="w-full bg-white/5 border border-white/10 p-3.5 pl-11 rounded-lg font-semibold text-sm focus:outline-none focus:border-[#E11D48] transition-all text-white"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-600 hover:text-white"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setStep('idle')}
                    className="flex-1 border border-white/10 hover:border-white/30 py-3 rounded-lg font-black text-sm uppercase tracking-widest transition-all"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleDisable}
                    disabled={isLoading || !disablePassword}
                    className="flex-1 bg-red-600 hover:bg-red-500 py-3 rounded-lg font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isLoading ? <Loader2 className="animate-spin" size={16} /> : null}
                    {isLoading ? 'Desativando...' : 'Desativar 2FA'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
