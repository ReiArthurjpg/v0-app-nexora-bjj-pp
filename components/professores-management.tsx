'use client';

import React, { useState } from 'react';
import { 
  Search, 
  LayoutGrid, 
  List, 
  ChevronLeft, 
  ChevronRight,
  Plus,
  ShieldCheck,
  X,
  Mail,
  Phone,
  Eye,
  MoreVertical,
  ExternalLink
} from 'lucide-react';

export function ProfessoresManagement() {
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const itemsPerPage = 12;

  const [professorsData] = useState(() => {
    const specializations = ["Jiu-Jitsu Clássico", "No-Gi / Grappling", "Defesa Pessoal", "Competição Elite", "Kids & Fundamentals"];
    const belts = ["Branca", "Azul", "Roxa", "Marrom", "Preta", "Coral", "Vermelha"];
    
    return Array.from({ length: 24 }, (_, i) => {
      const beltType = belts[i % belts.length];
      const degree = (i % 5) + 1;
      const status = Math.random() > 0.2 ? 'Ativo' : 'Inativo';
      
      return {
        id: i + 1,
        name: `GUERREIRO ${i + 1}`,
        belt: beltType,
        degree: degree,
        specialization: specializations[i % 5],
        status: status,
        email: `ATLETA${i + 1}@NEXORA.COM`,
        phone: `(11) 9${Math.floor(10000000 + Math.random() * 90000000)}`,
        studentsCount: Math.floor(Math.random() * 50) + 20,
        frequency: Math.floor(Math.random() * 30) + 70,
        avatar: `https://i.pravatar.cc/150?u=prof${i + 1}`
      };
    });
  });

  const getBeltStyles = (belt: string) => {
    switch (belt) {
      case "Branca": return "bg-white text-black font-black uppercase italic tracking-widest";
      case "Azul": return "bg-[#2563EB] text-white font-black uppercase italic tracking-widest";
      case "Roxa": return "bg-[#A855F7] text-white font-black uppercase italic tracking-widest";
      case "Marrom": return "bg-[#78350F] text-white font-black uppercase italic tracking-widest";
      case "Preta": return "bg-zinc-900 text-[#E11D48] border border-white/10 font-black uppercase italic tracking-widest";
      case "Coral": return "bg-gradient-to-r from-red-600 to-black text-white font-black uppercase italic tracking-widest";
      case "Vermelha": return "bg-red-700 text-white font-black uppercase italic tracking-widest";
      default: return "bg-zinc-800 text-white font-black uppercase italic tracking-widest";
    }
  };

  const filteredProfessors = professorsData.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.specialization.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProfessors.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const paginatedProfessors = filteredProfessors.slice(indexOfFirstItem, indexOfLastItem);

  const rangeStart = filteredProfessors.length === 0 ? 0 : indexOfFirstItem + 1;
  const rangeEnd = Math.min(indexOfLastItem, filteredProfessors.length);

  return (
    <div className="min-h-screen bg-[#070708] text-white font-sans selection:bg-[#E11D48] antialiased">
      
      {/* MODAL DE CADASTRO ATUALIZADO */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative w-full max-w-2xl bg-[#111112] border border-white/5 rounded-[3rem] p-10 animate-in fade-in zoom-in duration-300 shadow-2xl">
             
             {/* Header do Modal */}
             <div className="flex justify-between items-start mb-10">
                <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-[#E11D48]">
                        <Plus size={24} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-black uppercase italic tracking-tighter leading-none">NOVO <span className="text-[#E11D48]">GUERREIRO</span></h2>
                        <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mt-1 italic">CADASTRO DE INSTRUTOR NA BASE</p>
                    </div>
                </div>
                <button onClick={() => setIsModalOpen(false)} className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors group">
                    <X size={20} className="text-gray-500 group-hover:text-white transition-colors" />
                </button>
            </div>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
               {/* Nome Completo */}
               <div>
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] italic mb-3 block">NOME COMPLETO</label>
                  <input type="text" placeholder="EX: ANDERSON SILVA" className="w-full bg-[#070708] border border-white/5 rounded-2xl py-5 px-6 text-[11px] font-bold tracking-widest focus:outline-none focus:border-[#E11D48]/40 uppercase italic placeholder:text-zinc-800" />
               </div>

               {/* Grid Email e Telefone */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] italic mb-3 block">EMAIL</label>
                    <input type="email" placeholder="CONTATO@NEXORA.COM" className="w-full bg-[#070708] border border-white/5 rounded-2xl py-5 px-6 text-[11px] font-bold tracking-widest focus:outline-none focus:border-[#E11D48]/40 uppercase italic placeholder:text-zinc-800" />
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] italic mb-3 block">TELEFONE</label>
                    <input type="text" placeholder="(11) 99999-9999" className="w-full bg-[#070708] border border-white/5 rounded-2xl py-5 px-6 text-[11px] font-bold tracking-widest focus:outline-none focus:border-[#E11D48]/40 uppercase italic placeholder:text-zinc-800" />
                  </div>
               </div>

               {/* Grid Faixa e Grau */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] italic mb-3 block">FAIXA ATUAL</label>
                    <select className="w-full bg-[#070708] border border-white/5 rounded-2xl py-5 px-6 text-[11px] font-bold tracking-widest focus:outline-none focus:border-[#E11D48]/40 uppercase italic appearance-none cursor-pointer">
                        <option>BRANCA</option>
                        <option>AZUL</option>
                        <option>ROXA</option>
                        <option>MARROM</option>
                        <option>PRETA</option>
                        <option>CORAL</option>
                        <option>VERMELHA</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] italic mb-3 block">GRAU</label>
                    <select className="w-full bg-[#070708] border border-white/5 rounded-2xl py-5 px-6 text-[11px] font-bold tracking-widest focus:outline-none focus:border-[#E11D48]/40 uppercase italic appearance-none cursor-pointer">
                        <option>0º GRAU</option>
                        <option>1º GRAU</option>
                        <option>2º GRAU</option>
                        <option>3º GRAU</option>
                        <option>4º GRAU</option>
                        <option>5º GRAU</option>
                    </select>
                  </div>
               </div>

               {/* Footer do Modal (Botoes) */}
               <div className="flex gap-4 pt-6">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-5 bg-white/5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] italic hover:bg-white/10 transition-all">CANCELAR</button>
                  <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-5 bg-[#E11D48] rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] italic hover:bg-[#C4183C] transition-all shadow-[0_10px_30px_rgba(225,29,72,0.3)]">CADASTRAR ATLETA</button>
               </div>
            </form>
          </div>
        </div>
      )}

      {/* HEADER */}
      <header className="border-b border-white/10 bg-[#070708] px-8 py-4 sticky top-0 z-50">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#E11D48] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(225,29,72,0.3)]">
              <ShieldCheck size={20} className="text-white" />
            </div>
            <h1 className="text-2xl font-black italic uppercase tracking-tighter leading-none">NEXORA <span className="text-[#E11D48]">HUB</span></h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center text-white font-black text-sm border border-white/10">AD</div>
          </div>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto px-8 py-12">
        {/* FILTROS */}
        <section className="mb-12">
          <div className="bg-[#111112] border border-white/5 rounded-[3rem] p-8 shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
              <div className="w-full lg:max-w-xl">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] italic mb-4 block">Filtrar corpo docente</label>
                <div className="relative group">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-[#E11D48]" size={20} />
                  <input 
                    type="text" 
                    placeholder="BUSCAR MESTRE..."
                    value={searchQuery}
                    onChange={(e) => {setSearchQuery(e.target.value); setCurrentPage(1);}}
                    className="w-full bg-[#070708] border border-white/5 rounded-2xl py-5 pl-16 pr-8 text-[11px] font-bold tracking-widest focus:outline-none focus:border-[#E11D48]/40 transition-all uppercase italic"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="h-[62px] flex items-center gap-3 px-8 bg-[#E11D48] rounded-2xl hover:bg-[#C4183C] transition-all shadow-lg shadow-[#E11D48]/20"
                  >
                    <Plus size={18} />
                    <span className="text-[10px] font-black uppercase tracking-widest italic">Adicionar Mestre</span>
                </button>
                <div className="bg-[#070708] p-1.5 rounded-2xl border border-white/5 flex gap-1 h-[62px]">
                    <button onClick={() => setViewMode('grid')} className={`px-4 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-[#E11D48] text-white' : 'text-gray-600'}`}><LayoutGrid size={18} /></button>
                    <button onClick={() => setViewMode('list')} className={`px-4 rounded-xl transition-all ${viewMode === 'list' ? 'bg-[#E11D48] text-white' : 'text-gray-600'}`}><List size={18} /></button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LISTAGEM */}
        <section className="min-h-[600px]">
          <div className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" : "flex flex-col gap-4"}>
            {paginatedProfessors.map((prof) => (
              viewMode === 'grid' ? (
                <div 
                  key={prof.id} 
                  className={`bg-[#111112] border border-white/5 rounded-[3rem] p-8 flex flex-col items-center group transition-all duration-300 shadow-2xl relative overflow-hidden 
                    ${prof.status === 'Inativo' ? 'opacity-40 grayscale-[0.8] hover:opacity-100 hover:grayscale-0' : 'hover:border-white/10'}`}
                >
                  <div className="relative mb-6">
                    <div className={`w-24 h-24 rounded-full p-[2.5px] transition-colors duration-300 ${prof.status === 'Inativo' ? 'bg-zinc-700' : 'bg-gradient-to-tr from-[#E11D48] to-[#FF4D7D]'}`}>
                      <div className="w-full h-full bg-[#070708] rounded-full overflow-hidden flex items-center justify-center">
                        <img src={prof.avatar} alt={prof.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                      </div>
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-6 h-6 border-[4px] border-[#111112] rounded-full ${prof.status === 'Ativo' ? 'bg-[#00FF00]' : 'bg-zinc-600 group-hover:bg-[#00FF00]'}`}></div>
                  </div>
                  <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-4 text-white group-hover:text-[#E11D48] leading-none transition-colors">
                    {prof.name}
                  </h3>
                  <div className="flex flex-col items-center gap-2 mb-8">
                    <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-gray-400 italic uppercase"><Mail size={14} className="text-[#E11D48]" />{prof.email}</div>
                    <div className="flex items-center gap-2 text-[11px] font-bold tracking-widest text-gray-500 italic uppercase"><Phone size={14} className="text-[#E11D48]" />{prof.phone}</div>
                  </div>
                  <div className={`w-full py-4 rounded-2xl mb-4 text-[11px] text-center shadow-lg transition-all duration-300 group-hover:scale-[1.02] ${getBeltStyles(prof.belt)}`}>
                    FAIXA {prof.belt}
                  </div>
                  <div className="flex items-center gap-3 mb-6">
                     <div className="flex gap-1">
                        {[1,2,3,4].map(g => (<div key={g} className={`w-3 h-1.5 rounded-full ${g <= (prof.degree % 4 || 4) ? 'bg-white' : 'bg-white/10'}`}></div>))}
                     </div>
                     <span className="text-[10px] font-black italic uppercase text-gray-500">{prof.degree}º GRAU</span>
                  </div>
                  <div className="w-full pt-6 border-t border-white/5 flex justify-between items-center mb-6">
                    <div className="flex flex-col"><span className="text-[11px] font-black italic text-white">{prof.studentsCount}</span><span className="text-[8px] font-bold text-gray-600 uppercase">Alunos</span></div>
                    <div className="flex flex-col items-end"><span className="text-[11px] font-black italic text-[#E11D48]">{prof.specialization.split(' ')[0]}</span><span className="text-[8px] font-bold text-gray-600 uppercase">Foco</span></div>
                  </div>
                  <button className="w-full py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-[#E11D48] group/btn">
                    <Eye size={16} className="group-hover/btn:scale-110 transition-transform" />
                    <span className="text-[10px] font-black uppercase italic tracking-widest">Ver Perfil</span>
                  </button>
                </div>
              ) : (
                <div 
                  key={prof.id} 
                  className={`bg-[#111112] border border-white/5 rounded-[2rem] p-4 flex items-center group transition-all duration-300 shadow-xl relative
                    ${prof.status === 'Inativo' ? 'opacity-40 grayscale-[0.8] hover:opacity-100 hover:grayscale-0' : 'hover:border-white/10'}`}
                >
                  <div className="relative mr-6">
                    <div className={`w-14 h-14 rounded-2xl p-[2px] ${prof.status === 'Inativo' ? 'bg-zinc-700' : 'bg-gradient-to-tr from-[#E11D48] to-[#FF4D7D]'}`}>
                      <div className="w-full h-full bg-[#070708] rounded-[14px] overflow-hidden">
                        <img src={prof.avatar} alt={prof.name} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-4 h-4 border-[3px] border-[#111112] rounded-full ${prof.status === 'Ativo' ? 'bg-[#00FF00]' : 'bg-zinc-600 group-hover:bg-[#00FF00]'}`}></div>
                  </div>

                  <div className="flex-1 min-w-[200px]">
                    <h3 className="text-lg font-black uppercase italic tracking-tighter text-white mb-1 leading-none">{prof.name}</h3>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5 text-[9px] font-bold text-gray-500 uppercase tracking-widest italic"><Mail size={12} className="text-[#E11D48]" />{prof.email}</div>
                      <div className="flex items-center gap-1.5 text-[9px] font-bold text-gray-500 uppercase tracking-widest italic"><Phone size={12} className="text-[#E11D48]" />{prof.phone}</div>
                    </div>
                  </div>

                  <div className="w-[180px] flex flex-col items-center border-x border-white/5 px-4">
                    <div className={`w-full py-2 rounded-full text-[9px] text-center mb-2 shadow-lg ${getBeltStyles(prof.belt)}`}>
                      FAIXA {prof.belt}
                    </div>
                    <div className="flex gap-1.5">
                      {[1,2,3,4].map(g => (<div key={g} className={`w-3 h-1.5 rounded-full ${g <= (prof.degree % 4 || 4) ? 'bg-white' : 'bg-white/10'}`}></div>))}
                    </div>
                  </div>

                  <div className="w-[180px] px-8">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[8px] font-black uppercase tracking-[0.2em] text-gray-500 italic">Frequência</span>
                      <span className="text-[10px] font-black italic text-[#E11D48]">{prof.frequency}%</span>
                    </div>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-[#E11D48] rounded-full shadow-[0_0_10px_rgba(225,29,72,0.5)]" style={{ width: `${prof.frequency}%` }}></div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 ml-auto pr-4">
                    <button className="h-12 px-6 bg-[#1A1A1B] hover:bg-[#E11D48] text-[9px] font-black uppercase italic tracking-widest rounded-xl transition-all border border-white/5 flex items-center gap-2 group/listbtn">
                      PERFIL <ExternalLink size={12} className="group-hover/listbtn:translate-x-0.5 transition-transform" />
                    </button>
                    <button className="w-12 h-12 bg-[#1A1A1B] hover:bg-white/5 text-gray-500 rounded-xl transition-all border border-white/5 flex items-center justify-center">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </div>
              )
            ))}
          </div>

          {/* PAGINAÇÃO */}
          <div className="mt-16 flex items-center justify-between bg-[#111112] border border-white/5 rounded-[3rem] p-8">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 italic">
              Exibindo <span className="text-white">{rangeStart}—{rangeEnd}</span> de <span className="text-[#E11D48]">{filteredProfessors.length}</span>
            </p>
            <div className="flex gap-4">
              <button onClick={() => setCurrentPage(p => Math.max(1, p-1))} className="w-12 h-12 bg-[#070708] border border-white/5 rounded-xl flex items-center justify-center hover:border-[#E11D48]/50 disabled:opacity-30 transition-all"><ChevronLeft size={20} /></button>
              <button onClick={() => setCurrentPage(p => Math.min(totalPages, p+1))} className="w-12 h-12 bg-[#070708] border border-white/5 rounded-xl flex items-center justify-center hover:border-[#E11D48]/50 disabled:opacity-30 transition-all"><ChevronRight size={20} /></button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/5 text-center">
         <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-700 italic">© 2024 Nexora Hub — Gestão de Atletas de Elite</p>
      </footer>
    </div>
  );
}
