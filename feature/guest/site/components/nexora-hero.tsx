'use client'

import { ChevronRight, Zap } from 'lucide-react'
import { useState } from 'react'

export function NexoraHero() {
  return (
    <>
      {/* NAVEGAÇÃO */}
      <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-[#070708]/95 backdrop-blur-md border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-[#E11D48] rounded flex items-center justify-center -skew-x-12 group-hover:skew-x-0 transition-transform">
              <Zap className="text-white fill-current" size={24} />
            </div>
            <span className="text-xl font-black tracking-tighter italic">
              NEXORA <span className="text-[#E11D48]">BJJ</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-[10px] font-black uppercase tracking-widest text-gray-400">
            <a href="#beneficios" className="hover:text-white transition-colors">
              Benefícios
            </a>
            <a href="#funcionalidades" className="hover:text-white transition-colors">
              Funcionalidades
            </a>
            <a href="#precos" className="hover:text-white transition-colors">
              Preços
            </a>
            <a href="/login" className="text-gray-400 hover:text-white transition-colors">
              Login
            </a>
            <button className="bg-white text-black hover:bg-[#E11D48] hover:text-white px-6 py-2 rounded font-black transition-all">
              Criar minha conta
            </button>
          </div>

          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#E11D48]/15 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

        <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-[#070708]">
              <div className="inline-flex items-center gap-2 bg-[#E11D48]/10 border border-[#E11D48]/20 px-4 py-1.5 rounded mb-8">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E11D48]">
                  Especialista em Jiu-Jitsu e NoGi
                </span>
              </div>

              <h1 className="text-5xl md:text-[80px] font-black leading-[0.85] mb-8 tracking-tighter uppercase italic text-white">
                O tatame <br />
                <span className="text-white">quer ordem.</span>
                <br />
                <span className="text-[#E11D48]">A Nexora entrega.</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                O único sistema de gestão desenhado exclusivamente para a rotina do Jiu-Jitsu. Controle graduações, presenças
                e mensalidades sem sair do tatame.
              </p>

              {/* FORMULÁRIO DE CAPTURA */}
              <form className="max-w-md mx-auto lg:mx-0 bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm">
                <p className="text-[10px] font-black uppercase text-[#E11D48] mb-4 tracking-widest">Acesse uma demo gratuita agora</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    className="flex-grow bg-black/50 border border-white/10 px-4 py-4 rounded font-bold text-sm focus:outline-none focus:border-[#E11D48] transition-all text-white placeholder-gray-500"
                    required
                  />
                  <button className="bg-[#E11D48] hover:bg-white hover:text-black px-6 py-4 rounded font-black text-sm uppercase tracking-tighter transition-all flex items-center justify-center gap-2 italic">
                    Entrar <ChevronRight size={18} strokeWidth={3} />
                  </button>
                </div>
                <p className="text-[8px] text-gray-500 mt-3 uppercase font-bold tracking-widest">Sem cartão de crédito. Teste por 7 dias.</p>
              </form>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-[#E11D48]/20 blur-[120px] rounded-full opacity-30 animate-pulse" />
              <div className="relative bg-[#0F0F11] border border-white/10 rounded-xl overflow-hidden shadow-2xl skew-y-1">
                <img
                  src="https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?auto=format&fit=crop&q=80&w=1000"
                  alt="Atletas de Jiu-Jitsu treinando"
                  className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale"
                />
                <div className="relative p-8 space-y-6 bg-gradient-to-b from-transparent to-[#0F0F11]">
                  <div className="flex gap-4">
                    <div className="h-20 w-1/3 bg-white/5 rounded border border-white/5 p-4 flex flex-col justify-center">
                      <div className="h-1 w-8 bg-[#E11D48] mb-2" />
                      <div className="text-[10px] text-gray-500 uppercase font-black">Ativos</div>
                      <div className="text-lg font-black italic tracking-tighter text-white">142 ALUNOS</div>
                    </div>
                    <div className="h-20 w-1/3 bg-white/5 rounded border border-white/5 p-4 flex flex-col justify-center">
                      <div className="h-1 w-8 bg-[#E11D48] mb-2" />
                      <div className="text-[10px] text-gray-500 uppercase font-black">NoGi</div>
                      <div className="text-lg font-black italic tracking-tighter text-white">56 ATLETAS</div>
                    </div>
                    <div className="h-20 w-1/3 bg-white/5 rounded border border-white/5 p-4 flex flex-col justify-center">
                      <div className="h-1 w-8 bg-[#E11D48] mb-2" />
                      <div className="text-[10px] text-gray-500 uppercase font-black">Aptos</div>
                      <div className="text-lg font-black italic tracking-tighter text-white">12 GRAUS</div>
                    </div>
                  </div>
                  <div className="h-48 bg-white/5 rounded border border-white/5 p-6 flex flex-col justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded bg-[#E11D48] flex items-center justify-center font-black italic text-black">
                        BJJ
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm font-black italic uppercase tracking-tight text-white">Alliance Matriz SP</div>
                        <div className="h-1 w-20 bg-white/10 rounded" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-[10px] font-black uppercase text-gray-500">
                        <span>Frequência Semanal</span>
                        <span className="text-[#E11D48]">92%</span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded overflow-hidden">
                        <div className="h-full bg-[#E11D48] w-[92%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
