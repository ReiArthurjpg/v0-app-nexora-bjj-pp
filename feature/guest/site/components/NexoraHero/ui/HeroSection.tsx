'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function HeroSection({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative min-h-[85vh] flex items-center px-6 overflow-hidden bg-[#070708]">

      {/* Imagem de fundo — zoom-out cinematográfico */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      >
        <Image
          src="/hero-training.png"
          alt="Treino de Jiu-Jitsu no tatame"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Overlay escuro — Vignette para foco no texto e preservação da foto nas bordas */}
      <div className="absolute inset-0 z-10 bg-[#070708]/60" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#070708] via-transparent to-[#070708]" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,_transparent_0%,_#070708_100%)] opacity-80" />

      {/* Overlay vermelho sutil no topo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#E11D48]/10 via-transparent to-transparent pointer-events-none" />

      {/* Textura de carbon fibre */}
      <div className="absolute inset-0 z-10 opacity-[0.025] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      {/* Conteúdo */}
      <div className="max-w-7xl w-full mx-auto relative z-20 flex flex-col items-center justify-center py-32">
        {children}
      </div>
    </section>
  )
}