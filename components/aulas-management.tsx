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
  Clock,
  Users,
  Eye,
  MoreVertical,
  Calendar,
  Flame,
  Award
} from 'lucide-react';

export function AulasManagement() {
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const itemsPerPage = 8;

  const [classesData] = useState(() => {
    const types = ["Jiu-Jitsu (GI)", "No-Gi / Grappling", "Fundamentos", "Competição", "Kids / Juvenil"];
    const levels = ["Iniciante", "Intermediário", "Avançado", "Todos os Níveis"];
    const professors = ["Mestre Silva", "Prof. Anderson", "Guerreiro 04", "Mestre Oliveira"];
    
    return Array.from({ length: 20 }, (_, i) => {
      const type = types[i % types.length];
      const hour = 7 + (i % 14);
      const isLive = i === 0;
      
      return {
        id: i + 1,
        title: `${type} - TURMA ${String.fromCharCode(65 + (i % 4))}`,
        professor: professors[i % professors.length],
        time: `${hour}:00`,
        duration: "90 min",
        level: levels[i % levels.length],
        category: type,
        capacity: 40,
        enrolled: Math.floor(Math.random() * 25) + 5,
        status: isLive ? 'AO VIVO' : 'Agendada',
        mats: (i % 3) + 1
      };
    });
  });

  const getLevelStyles = (level: string) => {
    switch (level) {
      case "Iniciante": return "border-white/20 text-white bg-white/5";
      case "Intermediário": return "border-blue-500/50 text-blue-400 bg-blue-500/10";
      case "Avançado": return "border-purple-500/50 text-purple-400 bg-purple-500/10";
      case "Todos os Níveis": return "border-[#E11D48]/50 text-[#E11D48] bg-[#E11D48]/10";
      default: return "border-zinc-800 text-zinc-500";
    }
  };

  const filteredClasses = classesData.filter(c => 
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.professor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredClasses.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const paginatedClasses = filteredClasses.slice(indexOfFirstItem, indexOfLastItem);

  const rangeStart = filteredClasses.length === 0 ? 0 : indexOfFirstItem + 1;
  const rangeEnd = Math.min(indexOfLastItem, filteredClasses.length);

  return (
    <div className="min-h-screen bg-[#070708] text-white font-sans selection:bg-[#E11D48] antialiased">
      
      {/* MODAL DE NOVA AULA */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative w-full max-w-2xl bg-[#111112] border border-white/5 rounded-[3rem] p-10 animate-in fade-in zoom-in duration-300 shadow-2xl">
             
             <div className="flex justify-between items-start mb-10">
                <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-[#E11D48]">
                        <Plus size={24} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-black uppercase italic tracking-tighter leading-none">NOVA <span className="text-[#E11D48]">AULA</span></h2>
                        <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mt-1 italic">PLANEJAMENTO DE GRADE HORÁRIA</p>
                    </div>
                </div>
                <button onClick={() => setIsModalOpen(false)} className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors group">
                    <X size={20} className="text-gray-500 group-hover:text-white transition-colors" />
                </button>
            </div>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] italic mb-3 block">TÍTULO DA TURMA</label>
                  <input type="text" placeholder="EX: JIU-JITSU AVANÇADO - TATAME 1" className="w-full bg-[#070708] border border-white/5 rounded-2xl py-5 px-6 text-[11px] font-bold tracking-widest focus:outline-none focus:border-[#E11D48]/40 uppercase italic placeholder:text-zinc-800" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] italic mb-3 block">INSTRUTOR RESPONSÁVEL</label>
                    <select className="w-full bg-[#070708] border border-white/5 rounded-2xl py-5 px-6 text-[11px] font-bold tracking-widest focus:outline-none focus:border-[#E11D48]/40 uppercase italic appearance-none cursor-pointer">
                        <option>MESTRE SILVA</option>
                        <option>PROF. ANDERSON</option>
                        <option>GUERREIRO 04</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] italic mb-3 block">HORÁRIO DE INÍCIO</label>
                    <input type="time" className="w-full bg-[#070708] border border-white/5 rounded-2xl py-5 px-6 text-[11px] font-bold tracking-widest focus:outline-none focus:border-[#E11D48]/40 uppercase italic" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] italic mb-3 block">CATEGORIA</label>
                    <select className="w-full bg-[#070708] border border-white/5 rounded-2xl py-5 px-6 text-[11px] font-bold tracking-widest focus:outline-none focus:border-[#E11D48]/40 uppercase italic appearance-none cursor-pointer">
                        <option>JIU-JITSU (GI)</option>
                        <option>NO-GI / GRAPPLING</option>
                        <option>DEFESA PESSOAL</option>
                        <option>FUNDAMENTOS</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] italic mb-3 block">NÍVEL EXIGIDO</label>
                    <select className="w-full bg-[#070708] border border-white/5 rounded-2xl py-5 px-6 text-[11px] font-bold tracking-widest focus:outline-none focus:border-[#E11D48]/40 uppercase italic appearance-none cursor-pointer">
                        <option>TODOS OS NÍVEIS</option>
                        <option>INICIANTE</option>
                        <option>INTERMEDIÁRIO</option>
                        <option>AVANÇADO</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-4 pt-6">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-5 bg-white/5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] italic hover:bg-white/10 transition-all">DESCARTAR</button>
                  <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-5 bg-[#E11D48] rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] italic hover:bg-[#C4183C] transition-all shadow-[0_10px_30px_rgba(225,29,72,0.3)]">PUBLICAR AULA</button>
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
          <div className="flex items-center gap-6">
            <div className="hidden md:flex flex-col items-end">
                <span className="text-[10px] font-black text-[#E11D48] italic uppercase tracking-widest leading-none">ADMINISTRADOR</span>
                <span className="text-[8px] font-bold text-gray-600 uppercase tracking-[0.2em] mt-1">SISTEMA ATIVO</span>
            </div>
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
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] italic mb-4 block">Gestão de Grade Horária</label>
                <div className="relative group">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-[#E11D48]" size={20} />
                  <input 
                    type="text" 
                    placeholder="BUSCAR POR TURMA OU MESTRE..."
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
                    <span className="text-[10px] font-black uppercase tracking-widest italic">Agendar Aula</span>
                </button>
                <div className="bg-[#070708] p-1.5 rounded-2xl border border-white/5 flex gap-1 h-[62px]">
                    <button onClick={() => setViewMode('grid')} className={`px-4 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-[#E11D48] text-white' : 'text-gray-600'}`}><LayoutGrid size={18} /></button>
                    <button onClick={() => setViewMode('list')} className={`px-4 rounded-xl transition-all ${viewMode === 'list' ? 'bg-[#E11D48] text-white' : 'text-gray-600'}`}><List size={18} /></button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LISTAGEM DE AULAS */}
        <section className="min-h-[600px]">
          <div className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" : "flex flex-col gap-4"}>
            {paginatedClasses.map((aula) => (
              viewMode === 'grid' ? (
                <div 
                  key={aula.id} 
                  className={`bg-[#111112] border border-white/5 rounded-[3rem] p-8 flex flex-col group transition-all duration-300 shadow-2xl relative overflow-hidden h-full
                    ${aula.status === 'AO VIVO' ? 'border-[#E11D48]/30 ring-1 ring-[#E11D48]/20' : 'hover:border-white/10'}`}
                >
                  {aula.status === 'AO VIVO' && (
                    <div className="absolute top-6 right-8 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                        <span className="text-[8px] font-black italic uppercase tracking-widest text-red-500">LIVE</span>
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-6 text-[#E11D48]">
                    <Clock size={18} />
                    <span className="text-xl font-black italic tracking-tighter">{aula.time}</span>
                    <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest ml-auto">{aula.duration}</span>
                  </div>

                  <h3 className="text-xl font-black uppercase italic tracking-tighter mb-2 text-white group-hover:text-[#E11D48] leading-tight transition-colors">
                    {aula.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-5 h-5 rounded-md bg-white/5 flex items-center justify-center border border-white/10">
                        <Award size={12} className="text-gray-500" />
                    </div>
                    <span className="text-[10px] font-black text-gray-500 uppercase italic tracking-widest">{aula.professor}</span>
                  </div>

                  <div className={`w-full py-3 rounded-2xl mb-6 text-[9px] font-black text-center tracking-[0.2em] uppercase italic border ${getLevelStyles(aula.level)} transition-all duration-300`}>
                    {aula.level}
                  </div>

                  <div className="flex items-center justify-between mb-8">
                     <div className="flex items-center gap-2">
                        <Users size={14} className="text-[#E11D48]" />
                        <span className="text-[11px] font-black italic text-white">{aula.enrolled} / {aula.capacity}</span>
                     </div>
                     <span className="text-[10px] font-black italic text-gray-600 uppercase tracking-tighter">TATAME {aula.mats}</span>
                  </div>

                  <div className="mt-auto space-y-3">
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                        <div 
                            className="h-full bg-[#E11D48] rounded-full shadow-[0_0_10px_rgba(225,29,72,0.5)] transition-all duration-1000" 
                            style={{ width: `${(aula.enrolled / aula.capacity) * 100}%` }}
                        ></div>
                    </div>
                    <button className="w-full py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 border border-white/10 bg-white/5 text-white hover:bg-[#E11D48] hover:border-[#E11D48] group/btn">
                        <Eye size={16} className="group-hover/btn:scale-110 transition-transform" />
                        <span className="text-[10px] font-black uppercase italic tracking-widest">Ver Detalhes</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div 
                  key={aula.id} 
                  className={`bg-[#111112] border border-white/5 rounded-[2rem] p-6 flex items-center group transition-all duration-300 shadow-xl relative
                    ${aula.status === 'AO VIVO' ? 'border-[#E11D48]/30' : 'hover:border-white/10'}`}
                >
                  <div className="flex flex-col items-center justify-center w-24 border-r border-white/5 mr-8">
                    <span className="text-2xl font-black italic tracking-tighter text-[#E11D48] leading-none">{aula.time}</span>
                    <span className="text-[8px] font-bold text-gray-600 uppercase tracking-widest mt-1">{aula.duration}</span>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-lg font-black uppercase italic tracking-tighter text-white leading-none">{aula.title}</h3>
                        {aula.status === 'AO VIVO' && <span className="bg-[#E11D48] text-white text-[8px] px-2 py-0.5 rounded-full font-black italic tracking-widest">LIVE</span>}
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5 text-[9px] font-bold text-gray-500 uppercase tracking-widest italic"><Award size={12} className="text-[#E11D48]" />{aula.professor}</div>
                      <div className="flex items-center gap-1.5 text-[9px] font-bold text-gray-500 uppercase tracking-widest italic"><Flame size={12} className="text-orange-500" />TATAME {aula.mats}</div>
                    </div>
                  </div>

                  <div className="w-[180px] flex flex-col items-center border-x border-white/5 px-4">
                    <div className={`w-full py-2 rounded-full text-[9px] font-black text-center mb-1 border ${getLevelStyles(aula.level)}`}>
                      {aula.level}
                    </div>
                  </div>

                  <div className="w-[200px] px-8">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[8px] font-black uppercase tracking-[0.2em] text-gray-500 italic">Ocupação</span>
                      <span className="text-[10px] font-black italic text-[#E11D48]">{aula.enrolled} ALUNOS</span>
                    </div>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-[#E11D48] rounded-full" style={{ width: `${(aula.enrolled / aula.capacity) * 100}%` }}></div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 ml-auto">
                    <button className="h-12 px-6 bg-[#1A1A1B] hover:bg-[#E11D48] text-[9px] font-black uppercase italic tracking-widest rounded-xl transition-all border border-white/5 flex items-center gap-2 group/listbtn">
                      GERENCIAR <Calendar size={12} className="group-hover/listbtn:translate-x-0.5 transition-transform" />
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
              Exibindo <span className="text-white">{rangeStart}—{rangeEnd}</span> de <span className="text-[#E11D48]">{filteredClasses.length}</span> Aulas
            </p>
            <div className="flex gap-4">
              <button onClick={() => setCurrentPage(p => Math.max(1, p-1))} className="w-12 h-12 bg-[#070708] border border-white/5 rounded-xl flex items-center justify-center hover:border-[#E11D48]/50 disabled:opacity-30 transition-all"><ChevronLeft size={20} /></button>
              <button onClick={() => setCurrentPage(p => Math.min(totalPages, p+1))} className="w-12 h-12 bg-[#070708] border border-white/5 rounded-xl flex items-center justify-center hover:border-[#E11D48]/50 disabled:opacity-30 transition-all"><ChevronRight size={20} /></button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
