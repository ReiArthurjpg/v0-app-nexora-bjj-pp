'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserCog, UserPlus, Shield, ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

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

  return (
    <div className="min-h-screen bg-[#070708] text-white">
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="mb-8 flex items-center gap-4">
          <button
            onClick={() => router.push('/hub')}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
          >
            <ChevronLeft size={18} className="text-gray-400" />
          </button>
          <div>
            <h1 className="text-2xl font-black uppercase italic tracking-tighter">
              Configurações
            </h1>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
              Gerencie sua conta e segurança
            </p>
          </div>
        </div>

        {/* Layout: Sidebar + Content */}
        <div className="flex gap-8 items-start">

          {/* ── PILL SIDEBAR ── */}
          <nav className="w-[220px] shrink-0">
            <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-2 flex flex-col gap-1">
              {navItems.map(({ href, label, icon: Icon }) => {
                const isActive = pathname === href || pathname.startsWith(href + '/');
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`
                      relative flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200
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
      </div>
    </div>
  );
}
