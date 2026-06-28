'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { UserCog, UserPlus, Shield, LayoutDashboard, LogOut } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const navItems = [
  {
    href: '/hub/settings/profile',
    label: 'Editar Perfil',
    icon: UserCog,
  },
  {
    href: '/hub/settings/signup',
    label: 'Novo Usuário',
    icon: UserPlus,
  },
  {
    href: '/hub/settings/two-factor',
    label: 'Autenticação 2FA',
    icon: Shield,
  },
];

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();

  const initials = user?.name
    ? user.name.split(' ').map((n: string) => n[0]).slice(0, 2).join('').toUpperCase()
    : 'AD';

  return (
    <div className="min-h-screen bg-[#070708] text-white font-sans antialiased">

      {/* ── HEADER PADRÃO ── */}
      <header className="border-b border-white/5 bg-[#070708]/90 backdrop-blur-xl sticky top-0 z-50 px-8 py-6">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">

          {/* Logo */}
          <div
            className="flex items-center gap-4 cursor-pointer group"
            onClick={() => router.push('/hub')}
          >
            <div className="w-12 h-12 bg-[#E11D48] rounded-[1rem] flex items-center justify-center -skew-x-12 shadow-[0_0_40px_rgba(225,29,72,0.5)] group-hover:scale-110 transition-all">
              <LayoutDashboard className="text-white" size={24} />
            </div>
            <h1 className="text-3xl font-black italic tracking-tighter uppercase leading-none">
              Nexora <span className="text-[#E11D48]">Hub</span>
            </h1>
          </div>

          {/* Right: user info + avatar + logout */}
          <div className="flex items-center gap-8">
            <div className="hidden md:flex flex-col items-end">
              <span className="text-[12px] font-black uppercase tracking-[0.2em] text-white italic">
                {user?.name ?? 'Administrador'}
              </span>
              <span className="text-[10px] font-bold text-[#E11D48] uppercase tracking-[0.3em] mt-1">
                Diretor Técnico
              </span>
            </div>

            <div className="relative">
              <div className="w-14 h-14 rounded-[1.2rem] bg-gradient-to-tr from-[#E11D48] to-[#FF4D7D] flex items-center justify-center text-white font-black text-sm shadow-lg shadow-[#E11D48]/20">
                {initials}
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#00FF00] border-4 border-[#070708] rounded-full" />
            </div>

            <button
              onClick={logout}
              className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-red-500/10 hover:border-red-500/50 transition-all text-gray-400 hover:text-red-500 group"
              title="Sair do Sistema"
            >
              <LogOut size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </header>

      {/* ── CONTEÚDO ── */}
      <main className="max-w-[1440px] mx-auto px-8 py-12">

        {/* Page title */}
        <div className="mb-8">
          <h2 className="text-2xl font-black uppercase italic tracking-tighter">
            Configurações
          </h2>
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mt-1">
            Gerencie sua conta e segurança
          </p>
        </div>

        {/* Layout: Sidebar + Content */}
        <div className="flex gap-10 items-start">

          {/* ── PILL SIDEBAR ── */}
          <nav className="w-[220px] shrink-0">
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-2 flex flex-col gap-1">
              {navItems.map(({ href, label, icon: Icon }) => {
                const isActive = pathname === href || pathname.startsWith(href + '/');
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`
                      flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200
                      ${isActive
                        ? 'bg-[#E11D48] shadow-lg shadow-[#E11D48]/30 text-white'
                        : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
                      }
                    `}
                  >
                    <Icon
                      size={16}
                      className={`shrink-0 transition-colors ${isActive ? 'text-white' : 'text-gray-600'}`}
                    />
                    <span className="text-[11px] font-black uppercase tracking-[0.15em]">
                      {label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* ── CONTENT ── */}
          <div className="flex-1 min-w-0">
            {children}
          </div>

        </div>
      </main>
    </div>
  );
}
