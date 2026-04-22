'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  MapPin, 
  CreditCard, 
  ShieldCheck, 
  Trophy, 
  Star,
  Edit3,
  Lock,
  LayoutDashboard,
  CheckCircle2,
  ChevronRight,
  ArrowLeft,
  Zap,
  Camera
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

export function DirectorProfile() {
  const router = useRouter();
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  // Dados do utilizador dinâmicos
  const userData = {
    name: user?.name?.split(' ')[0] || "Mestre",
    fullName: user?.name || "Nome não informado",
    email: user?.email || "email@exemplo.com",
    phone: user?.phone || "Não informado",
    birthDate: user?.birth_date || "Não informado",
    gender: user?.gender || "Não informado",
    cpf: user?.cpf || "Não informado",
    address: user?.address || "Não informado",
    academy: user?.academy_name || "Alliance BJJ",
    role: "Diretor Técnico",
    avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || 'M')}&background=E11D48&color=fff`,
    
    // Dados Técnicos (Graduação)
    belt: user?.belt || "Branca",
    degree: user?.degree || "0º Grau",
    lastPromotion: user?.last_graduation || "Nenhuma",
    beltColor: "#000000",
    stripes: parseInt(user?.degree?.charAt(0) || "0")
  };

  // Cores das faixas para lógica visual
  const beltColors = {
    "Branca": "bg-white text-black",
    "Azul": "bg-blue-600 text-white",
    "Roxa": "bg-purple-700 text-white",
    "Marrom": "bg-amber-900 text-white",
    "Preta": "bg-zinc-900 text-[#E11D48] border border-white/10"
  };

  return (
    <div className="min-h-screen bg-[#070708] text-white font-sans selection:bg-[#E11D48] antialiased">
      
      {/* HEADER */}
      <header className="border-b border-white/5 bg-[#070708]/90 backdrop-blur-xl sticky top-0 z-50 px-8 py-6">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">
          <button onClick={() => router.push('/hub')} className="flex items-center gap-4 cursor-pointer group hover:scale-105 transition-transform">
            <ArrowLeft size={20} className="text-gray-500 group-hover:text-white transition-colors" />
            <h1 className="text-3xl font-black italic tracking-tighter uppercase leading-none group-hover:text-[#E11D48] transition-colors">Nexora <span className="text-[#E11D48]">Hub</span></h1>
          </button>
          
          <div className="flex items-center gap-6">
             <div className="flex flex-col items-end">
               <span className="text-[12px] font-black uppercase tracking-[0.2em] text-white italic">{userData.name}</span>
               <span className="text-[10px] font-bold text-[#E11D48] uppercase tracking-[0.3em] mt-1">{userData.role}</span>
             </div>
             <div className="w-[1px] h-8 bg-white/5 hidden md:block"></div>
             <div className="w-12 h-12 rounded-xl bg-[#E11D48]/20 flex items-center justify-center border border-[#E11D48]/30">
                <User size={20} className="text-[#E11D48]" />
             </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto px-8 py-12">
        
        {/* TÍTULO DA SECÇÃO */}
        <div className="mb-12 animate-in fade-in slide-in-from-left-4 duration-700">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#E11D48] shadow-[0_0_8px_#E11D48]"></span>
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] italic">Perfil de Utilizador</span>
          </div>
          <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-tight text-white">
            Gerir <span className="text-[#E11D48]">Identidade</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* COLUNA ESQUERDA: FOTO E STATUS TÉCNICO */}
          <div className="lg:col-span-4 space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            
            {/* CARD DE AVATAR */}
            <div className="bg-[#111112] border border-white/5 rounded-[3rem] p-10 flex flex-col items-center relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#E11D48]/10 to-transparent"></div>
              
              <div className="relative mb-8 mt-4">
                <div className="w-40 h-40 rounded-[3rem] bg-gradient-to-tr from-[#E11D48] to-[#FF4D7D] p-[3px] shadow-2xl shadow-[#E11D48]/30 group-hover:scale-105 transition-transform duration-500">
                  <div className="w-full h-full bg-[#070708] rounded-[2.9rem] flex items-center justify-center overflow-hidden">
                    <img src={userData.avatar} alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                </div>
                <button className="absolute bottom-0 right-0 p-4 bg-[#E11D48] rounded-2xl border-4 border-[#111112] hover:scale-110 transition-all shadow-xl">
                  <Camera size={18} className="text-white" />
                </button>
              </div>

              <h3 className="text-2xl font-black uppercase italic tracking-tight text-white mb-1">{userData.name}</h3>
              <p className="text-[10px] font-bold text-[#E11D48] uppercase tracking-[0.3em] mb-8 italic">{userData.role}</p>

              <div className="flex gap-3 w-full">
                <button className="flex-1 py-4 bg-[#E11D48] hover:bg-[#C4183C] rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-lg shadow-[#E11D48]/20">
                  <Edit3 size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest italic">Editar Perfil</span>
                </button>
                <button className="p-4 bg-white/5 border border-white/10 hover:bg-white/10 rounded-2xl transition-all group shadow-inner">
                  <Lock size={18} className="text-gray-400 group-hover:text-white" />
                </button>
              </div>
            </div>

            {/* CARD DE GRADUAÇÃO */}
            <div className="bg-[#111112] border border-white/5 rounded-[3rem] p-10 relative overflow-hidden shadow-2xl">
               <div className="flex items-center gap-3 mb-8">
                  <Trophy size={20} className="text-[#E11D48]" />
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] italic text-white">Status Técnico</h3>
               </div>

               {/* REPRESENTAÇÃO DA FAIXA */}
               <div className={`w-full h-12 rounded-xl mb-8 flex items-center justify-between px-6 shadow-inner ${beltColors[userData.belt] || "bg-zinc-800"}`}>
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] italic">Faixa {userData.belt}</span>
                  <div className="flex gap-1.5">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className={`w-2 h-8 rounded-sm ${i < userData.stripes ? 'bg-white shadow-[0_0_5px_white]' : 'bg-black/20'}`}></div>
                    ))}
                  </div>
               </div>

               <div className="space-y-4">
                  <div className="flex justify-between items-center p-5 bg-white/5 rounded-2xl border border-white/5">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 italic">Grau Atual</span>
                    <span className="text-lg font-black italic text-white tracking-tighter">{userData.degree}</span>
                  </div>
                  <div className="flex justify-between items-center p-5 bg-white/5 rounded-2xl border border-white/5">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 italic">Última Graduação</span>
                    <span className="text-sm font-black italic text-white/80">{userData.lastPromotion}</span>
                  </div>
               </div>

               <div className="mt-8 pt-8 border-t border-white/5">
                  <p className="text-[9px] font-bold text-gray-600 uppercase tracking-[0.2em] italic leading-relaxed text-center">
                    A evolução contínua é o único caminho para a mestria. Mantenha o foco nos treinos.
                  </p>
               </div>
            </div>
          </div>

          {/* COLUNA DIREITA: DADOS DETALHADOS */}
          <div className="lg:col-span-8 space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
            
            {/* INFO GRID */}
            <div className="bg-[#111112] border border-white/5 rounded-[3rem] p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#E11D48]/5 blur-[100px] -mr-40 -mt-40"></div>
              
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                    <ShieldCheck size={20} className="text-[#E11D48]" />
                  </div>
                  <h3 className="text-xl font-black uppercase italic tracking-tighter text-white">Dados Pessoais</h3>
                </div>
                <div className="px-4 py-1.5 bg-[#00FF00]/10 border border-[#00FF00]/20 rounded-full flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00FF00] animate-pulse"></span>
                  <span className="text-[8px] font-black uppercase tracking-widest text-[#00FF00]">Conta Ativa</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 relative z-10">
                
                {/* NOME COMPLETO */}
                <div className="md:col-span-2">
                  <label className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em] italic mb-3 block">Nome Completo</label>
                  <div className="bg-white/5 border border-white/5 p-5 rounded-2xl flex items-center gap-4 group hover:border-[#E11D48]/30 transition-all">
                    <User size={18} className="text-[#E11D48]/50 group-hover:text-[#E11D48] transition-colors" />
                    <span className="text-base font-bold italic tracking-wide text-white/90">{userData.fullName}</span>
                  </div>
                </div>

                {/* EMAIL */}
                <div>
                  <label className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em] italic mb-3 block">Endereço de Email</label>
                  <div className="bg-white/5 border border-white/5 p-5 rounded-2xl flex items-center gap-4 group hover:border-[#E11D48]/30 transition-all">
                    <Mail size={18} className="text-[#E11D48]/50 group-hover:text-[#E11D48] transition-colors" />
                    <span className="text-sm font-bold italic text-white/80">{userData.email}</span>
                  </div>
                </div>

                {/* TELEFONE */}
                <div>
                  <label className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em] italic mb-3 block">Contacto Telefónico</label>
                  <div className="bg-white/5 border border-white/5 p-5 rounded-2xl flex items-center gap-4 group hover:border-[#E11D48]/30 transition-all">
                    <Phone size={18} className="text-[#E11D48]/50 group-hover:text-[#E11D48] transition-colors" />
                    <span className="text-sm font-bold italic text-white/80">{userData.phone}</span>
                  </div>
                </div>

                {/* DATA NASCIMENTO */}
                <div>
                  <label className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em] italic mb-3 block">Data de Nascimento</label>
                  <div className="bg-white/5 border border-white/5 p-5 rounded-2xl flex items-center gap-4 group hover:border-[#E11D48]/30 transition-all">
                    <Calendar size={18} className="text-[#E11D48]/50 group-hover:text-[#E11D48] transition-colors" />
                    <span className="text-sm font-bold italic text-white/80">{userData.birthDate}</span>
                  </div>
                </div>

                {/* SEXO */}
                <div>
                  <label className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em] italic mb-3 block">Sexo / Género</label>
                  <div className="bg-white/5 border border-white/5 p-5 rounded-2xl flex items-center gap-4 group hover:border-[#E11D48]/30 transition-all">
                    <Zap size={18} className="text-[#E11D48]/50 group-hover:text-[#E11D48] transition-colors" />
                    <span className="text-sm font-bold italic text-white/80">{userData.gender}</span>
                  </div>
                </div>

                {/* CPF */}
                <div>
                  <label className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em] italic mb-3 block">Documento Identificação (CPF)</label>
                  <div className="bg-white/5 border border-white/5 p-5 rounded-2xl flex items-center gap-4 group hover:border-[#E11D48]/30 transition-all">
                    <CreditCard size={18} className="text-[#E11D48]/50 group-hover:text-[#E11D48] transition-colors" />
                    <span className="text-sm font-bold italic text-white/80">{userData.cpf}</span>
                  </div>
                </div>

                {/* ACADEMIA */}
                <div>
                  <label className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em] italic mb-3 block">Unidade Principal</label>
                  <div className="bg-white/5 border border-white/5 p-5 rounded-2xl flex items-center gap-4 group hover:border-[#E11D48]/30 transition-all">
                    <Star size={18} className="text-[#E11D48]/50 group-hover:text-[#E11D48] transition-colors" />
                    <span className="text-sm font-bold italic text-white/80">{userData.academy}</span>
                  </div>
                </div>

                {/* ENDEREÇO */}
                <div className="md:col-span-2">
                  <label className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em] italic mb-3 block">Morada de Residência</label>
                  <div className="bg-white/5 border border-white/5 p-5 rounded-2xl flex items-center gap-4 group hover:border-[#E11D48]/30 transition-all">
                    <MapPin size={18} className="text-[#E11D48]/50 group-hover:text-[#E11D48] transition-colors" />
                    <span className="text-sm font-bold italic text-white/80">{userData.address}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SECÇÃO DE AJUDA */}
            <div className="bg-gradient-to-r from-[#E11D48]/20 to-transparent border border-[#E11D48]/20 rounded-[2.5rem] p-8 flex items-center justify-between group cursor-pointer hover:scale-[1.01] transition-all">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-[#E11D48] transition-colors">
                   <CheckCircle2 size={24} className="text-[#E11D48] group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-black uppercase italic tracking-tighter text-white">Privacidade de Dados</h4>
                  <p className="text-xs text-gray-500 font-medium italic mt-1 uppercase tracking-wider">O Nexora cumpre com a RGPD e os mais altos padrões de segurança de dados.</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-[#E11D48] group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </div>
      </main>

      <footer className="max-w-[1440px] mx-auto px-8 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left mt-20">
         <p className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-600 italic">© 2024 Nexora Global — Unified Combat Management</p>
         <div className="flex gap-10 text-[10px] font-black uppercase tracking-widest text-gray-600">
            <button className="hover:text-white transition-colors italic">Privacidade</button>
            <button className="hover:text-white transition-colors italic">Segurança</button>
            <button className="hover:text-white transition-colors italic">Suporte</button>
         </div>
      </footer>
    </div>
  );
}
