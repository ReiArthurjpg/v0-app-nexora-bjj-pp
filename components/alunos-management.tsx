'use client';

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Search, 
  LayoutGrid, 
  List, 
  ChevronLeft, 
  ChevronRight,
  Plus,
  LayoutDashboard,
  MoreVertical,
  Star,
  Users,
  GraduationCap,
  Phone,
  Mail,
  Circle,
  ExternalLink,
  X,
  ArrowLeft
} from 'lucide-react';

export function AlunosManagement() {
  const router = useRouter();
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const itemsPerPage = 12;

  const [studentsData, setStudentsData] = useState(() => {
    const belts = ["Branca", "Azul", "Roxa", "Marrom", "Preta"];
    return Array.from({ length: 48 }, (_, i) => ({
      id: i + 1,
      name: `GUERREIRO ${i + 1}`,
      fullName: `Atleta Profissional de Elite ${i + 1}`,
      belt: belts[i % 5],
      degree: Math.floor(Math.random() * 5),
      status: Math.random() > 0.1 ? 'Ativo' : 'Inativo',
      email: `ATLETA${i + 1}@NEXORA.COM`,
      phone: `(11) 9${Math.floor(10000000 + Math.random() * 90000000)}`,
      attendance: Math.floor(Math.random() * 40) + 60,
      lastTraining: "Há 2 dias",
      avatar: `https://i.pravatar.cc/150?u=${i + 1}`,
      score: 1000 - (i * 10)
    }));
  });

  const beltColors = {
    "Branca": "bg-white text-black",
    "Azul": "bg-blue-600 text-white",
    "Roxa": "bg-purple-700 text-white",
    "Marrom": "bg-amber-900 text-white",
    "Preta": "bg-zinc-900 text-[#E11D48] border border-white/10"
  };

  const filteredStudents = studentsData.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.belt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const topGraduatingSoon = [...studentsData]
    .sort((a, b) => b.attendance - a.attendance)
    .slice(0, 5);

  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const paginatedStudents = filteredStudents.slice(indexOfFirstItem, indexOfLastItem);

  const rangeStart = filteredStudents.length === 0 ? 0 : indexOfFirstItem + 1;
  const rangeEnd = Math.min(indexOfLastItem, filteredStudents.length);

  return (
    <div className="min-h-screen bg-[#070708] text-white font-sans selection:bg-[#E11D48] antialiased">
      
      {/* MODAL DE CADASTRO */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          <div className="relative w-full max-w-xl bg-[#111112] border border-white/10 rounded-[3rem] p-10 shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#E11D48]/10 to-transparent pointer-events-none"></div>
            
            <div className="flex justify-between items-center mb-8 relative">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#E11D48]/10 rounded-xl flex items-center justify-center border border-[#E11D48]/20">
                  <Plus size={20} className="text-[#E11D48]" />
                </div>
                <div>
                  <h2 className="text-xl font-black uppercase italic tracking-tighter leading-none">Novo <span className="text-[#E11D48]">Guerreiro</span></h2>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Cadastro de aluno na base</p>
                </div>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <X size={20} className="text-gray-500" />
              </button>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                <div>
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] italic mb-2 block">Nome Completo</label>
                  <input 
                    type="text" 
                    placeholder="EX: ANDERSON SILVA"
                    className="w-full bg-[#070708] border border-white/5 rounded-2xl py-4 px-6 text-[11px] font-bold tracking-widest focus:outline-none focus:border-[#E11D48]/40 transition-all uppercase italic"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] italic mb-2 block">Email</label>
                    <input 
                      type="email" 
                      placeholder="CONTATO@NEXORA.COM"
                      className="w-full bg-[#070708] border border-white/5 rounded-2xl py-4 px-6 text-[11px] font-bold tracking-widest focus:outline-none focus:border-[#E11D48]/40 transition-all uppercase italic"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] italic mb-2 block">Telefone</label>
                    <input 
                      type="text" 
                      placeholder="(11) 99999-9999"
                      className="w-full bg-[#070708] border border-white/5 rounded-2xl py-4 px-6 text-[11px] font-bold tracking-widest focus:outline-none focus:border-[#E11D48]/40 transition-all uppercase italic"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] italic mb-2 block">Faixa Atual</label>
                    <select className="w-full bg-[#070708] border border-white/5 rounded-2xl py-4 px-6 text-[11px] font-bold tracking-widest focus:outline-none focus:border-[#E11D48]/40 transition-all uppercase italic appearance-none cursor-pointer">
                      <option>BRANCA</option>
                      <option>AZUL</option>
                      <option>ROXA</option>
                      <option>MARROM</option>
                      <option>PRETA</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] italic mb-2 block">Grau</label>
                    <select className="w-full bg-[#070708] border border-white/5 rounded-2xl py-4 px-6 text-[11px] font-bold tracking-widest focus:outline-none focus:border-[#E11D48]/40 transition-all uppercase italic appearance-none cursor-pointer">
                      <option>0º GRAU</option>
                      <option>1º GRAU</option>
                      <option>2º GRAU</option>
                      <option>3º GRAU</option>
                      <option>4º GRAU</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col md:flex-row gap-4">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-5 bg-white/5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] italic hover:bg-white/10 transition-all"
                >
                  Cancelar
                </button>
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-5 bg-[#E11D48] rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] italic hover:bg-[#C4183C] transition-all shadow-lg shadow-[#E11D48]/20"
                >
                  Cadastrar Atleta
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* HEADER */}
      <header className="border-b border-white/10 bg-[#070708] px-8 py-4 sticky top-0 z-50">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button onClick={() => router.back()} className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all">
              <ArrowLeft size={20} className="text-gray-400" />
            </button>
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-10 h-10 bg-[#E11D48] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(225,29,72,0.3)]">
                <LayoutDashboard size={20} className="text-white" />
              </div>
              <h1 className="text-2xl font-black italic uppercase tracking-tighter leading-none">
                NEXORA <span className="text-[#E11D48]">ALUNOS</span>
              </h1>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-[11px] font-black uppercase italic tracking-widest text-white leading-none">Mestre Admin</p>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#E11D48] mt-1">Diretor Técnico</p>
            </div>
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-tr from-[#E11D48] to-[#FF4D7D] rounded-2xl flex items-center justify-center text-white font-black text-sm border border-white/10 shadow-lg shadow-[#E11D48]/10">
                MA
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-[#00FF00] border-[3px] border-[#070708] rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto px-8 py-12">

        {/* TOP 5 GRADUAÇÃO */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6 px-2">
             <GraduationCap size={16} className="text-[#E11D48]" />
             <h3 className="text-[11px] font-black uppercase italic tracking-[0.4em] text-white">Próximos a Graduar</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {topGraduatingSoon.map((student, idx) => (
              <div key={student.id} className="bg-[#111112] border border-white/5 rounded-[2.5rem] p-7 group relative overflow-hidden shadow-2xl transition-all hover:bg-[#161618]">
                <div className="absolute top-0 left-0 p-4">
                  <div className="w-8 h-8 bg-[#E11D48]/10 rounded-lg flex items-center justify-center border border-[#E11D48]/20">
                    <span className="text-[12px] font-black italic text-[#E11D48]">#{idx + 1}</span>
                  </div>
                </div>

                <div className="absolute top-0 right-0 p-4">
                  <div className="w-10 h-10 bg-black/40 backdrop-blur-md flex items-center justify-center rounded-full border border-white/5">
                    <Star size={12} className="text-[#E11D48]" fill="#E11D48" />
                  </div>
                </div>

                <div className="w-[80px] h-[80px] bg-gradient-to-tr from-[#E11D48] to-[#FF4D7D] rounded-[2.2rem] flex items-center justify-center p-0.5 mb-6 shadow-lg shadow-[#E11D48]/20">
                  <div className="w-full h-full bg-[#070708] rounded-[2.1rem] flex items-center justify-center overflow-hidden border-4 border-[#070708]">
                    <img src={student.avatar} alt={student.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                <h4 className="text-base font-black uppercase italic tracking-tight text-white mb-1 truncate w-full">{student.name}</h4>
                <div className="mb-4">
                  <span className={`px-4 py-1 rounded-xl text-[8px] font-black uppercase italic tracking-widest ${beltColors[student.belt]}`}>
                    {student.belt}
                  </span>
                </div>

                <div className="flex flex-col gap-1.5 mb-6">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Mail size={10} className="text-[#E11D48]" />
                    <span className="text-[8px] font-bold uppercase tracking-widest truncate">{student.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Phone size={10} className="text-[#E11D48]" />
                    <span className="text-[8px] font-bold uppercase tracking-widest">{student.phone}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-gray-500 italic">
                    <span>Prontidão</span>
                    <span className="text-[#E11D48] font-black">{student.attendance}%</span>
                  </div>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#E11D48] transition-all duration-1000" 
                      style={{ width: `${student.attendance}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BARRA DE FILTROS */}
        <section className="mb-12">
          <div className="bg-[#111112] border border-white/5 rounded-[3rem] p-8 shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
              <div className="w-full lg:max-w-xl">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] italic mb-4 block">Procurar aluno na base</label>
                <div className="relative group">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-[#E11D48]" size={20} />
                  <input 
                    type="text" 
                    placeholder="NOME, FAIXA OU EMAIL..."
                    value={searchQuery}
                    onChange={(e) => {setSearchQuery(e.target.value); setCurrentPage(1);}}
                    className="w-full bg-[#070708] border border-white/5 rounded-2xl py-5 pl-16 pr-8 text-[11px] font-bold tracking-widest focus:outline-none focus:border-[#E11D48]/40 transition-all uppercase italic"
                  />
                </div>
                <div className="mt-4 px-2">
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 italic">
                    Mostrando <span className="text-white">{rangeStart}-{rangeEnd}</span> de <span className="text-[#E11D48]">{filteredStudents.length}</span> GUERREIROS
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 justify-end self-start mt-8 lg:mt-0">
                <div className="flex flex-col items-end">
                  <label className="text-[9px] font-black text-gray-600 uppercase tracking-[0.3em] italic mb-3">Novo Cadastro</label>
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="h-[62px] flex items-center gap-3 px-6 bg-[#E11D48] rounded-2xl hover:bg-[#C4183C] transition-all shadow-lg shadow-[#E11D48]/20 group"
                  >
                    <Plus size={18} className="group-hover:rotate-90 transition-transform" />
                    <span className="text-[10px] font-black uppercase tracking-widest italic text-white">Adicionar Aluno</span>
                  </button>
                </div>

                <div className="flex flex-col items-end">
                   <label className="text-[9px] font-black text-gray-600 uppercase tracking-[0.3em] italic mb-3">Visualização</label>
                   <div className="bg-[#070708] p-1.5 rounded-2xl border border-white/5 flex gap-1 h-[62px]">
                    <button onClick={() => setViewMode('grid')} className={`px-4 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-[#E11D48] text-white shadow-lg shadow-[#E11D48]/10' : 'text-gray-600 hover:text-white'}`}><LayoutGrid size={18} /></button>
                    <button onClick={() => setViewMode('list')} className={`px-4 rounded-xl transition-all ${viewMode === 'list' ? 'bg-[#E11D48] text-white shadow-lg shadow-[#E11D48]/10' : 'text-gray-600 hover:text-white'}`}><List size={18} /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LISTAGEM */}
        <section className="min-h-[600px]">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {paginatedStudents.map((student) => (
                <div 
                  key={student.id} 
                  className={`bg-[#111112] border border-white/5 rounded-[3rem] p-8 flex flex-col items-center text-center relative overflow-hidden group hover:scale-[1.02] transition-all shadow-2xl ${student.status === 'Inativo' ? 'opacity-40 grayscale hover:opacity-100 hover:grayscale-0' : 'opacity-100'}`}
                >
                  <div className="absolute top-6 right-8 flex items-center gap-1.5">
                    <div className={`w-1.5 h-1.5 rounded-full ${student.status === 'Ativo' ? 'bg-[#00FF00]' : 'bg-gray-600'}`}></div>
                    <span className="text-[8px] font-black uppercase tracking-widest text-gray-400 italic">{student.status}</span>
                  </div>

                  <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#E11D48]/5 to-transparent"></div>
                  
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-[1.5rem] bg-gradient-to-tr from-[#E11D48] to-[#FF4D7D] p-[2px]">
                      <div className="w-full h-full bg-[#070708] rounded-[1.4rem] overflow-hidden flex items-center justify-center">
                        <img src={student.avatar} alt={student.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-black uppercase italic tracking-tight text-white mb-1 group-hover:text-[#E11D48] transition-colors">{student.name}</h3>
                  
                  <div className="flex flex-col gap-1 mb-6">
                    <div className="flex items-center justify-center gap-2 text-gray-500">
                      <Mail size={10} className="text-[#E11D48]" />
                      <span className="text-[9px] font-bold uppercase tracking-widest truncate max-w-[150px]">{student.email}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-500">
                      <Phone size={10} className="text-[#E11D48]" />
                      <span className="text-[9px] font-bold uppercase tracking-widest">{student.phone}</span>
                    </div>
                  </div>

                  <div className={`w-full py-2 rounded-xl mb-3 text-[10px] font-black uppercase italic ${beltColors[student.belt]}`}>
                    Faixa {student.belt}
                  </div>

                  <div className="flex gap-1 mb-6">
                    {[...Array(4)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-3 h-1.5 rounded-sm ${i < student.degree ? 'bg-white' : 'bg-white/10'}`}
                      />
                    ))}
                    <span className="text-[8px] font-black text-gray-500 uppercase ml-2 italic">{student.degree}º Grau</span>
                  </div>

                  <div className="w-full space-y-2 mb-6">
                    <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-widest text-gray-500 italic">
                      <span>Assiduidade</span>
                      <span className="text-[#E11D48]">{student.attendance}%</span>
                    </div>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-[#E11D48]" style={{ width: `${student.attendance}%` }}></div>
                    </div>
                  </div>

                  <button className="w-full py-3 bg-white/5 border border-white/10 hover:bg-[#E11D48] hover:border-[#E11D48] rounded-2xl text-[9px] font-black uppercase tracking-widest italic transition-all">
                    Ver Perfil
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {paginatedStudents.map((student) => (
                <div 
                  key={student.id} 
                  className={`bg-[#111112] border border-white/5 rounded-[2rem] p-5 flex items-center justify-between group hover:bg-[#161618] hover:border-white/10 transition-all shadow-xl ${student.status === 'Inativo' ? 'opacity-40 grayscale hover:opacity-100 hover:grayscale-0' : 'opacity-100'}`}
                >
                  
                  <div className="flex items-center gap-6 flex-1 min-w-0">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#E11D48] to-[#FF4D7D] p-[2px] rotate-3 group-hover:rotate-0 transition-transform">
                        <div className="w-full h-full bg-[#070708] rounded-[calc(1rem-1px)] overflow-hidden">
                          <img src={student.avatar} alt="" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                      <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-4 border-[#111112] ${student.status === 'Ativo' ? 'bg-[#00FF00]' : 'bg-gray-600'}`}></div>
                    </div>
                    
                    <div className="min-w-0">
                      <h3 className="text-base font-black uppercase italic tracking-tight text-white mb-1 group-hover:text-[#E11D48] transition-colors truncate">
                        {student.name}
                      </h3>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5 text-[9px] font-bold text-gray-500 uppercase tracking-widest">
                          <Mail size={12} className="text-[#E11D48]" />
                          <span className="truncate">{student.email}</span>
                        </div>
                        <span className="w-1 h-1 rounded-full bg-white/10"></span>
                        <div className="flex items-center gap-1.5 text-[9px] font-bold text-gray-500 uppercase tracking-widest">
                          <Phone size={12} className="text-[#E11D48]" />
                          <span>{student.phone}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-12 flex-1 justify-center px-8 border-x border-white/5">
                    <div className="flex flex-col items-center gap-2">
                       <span className={`px-5 py-1.5 rounded-xl text-[9px] font-black uppercase italic tracking-widest shadow-lg ${beltColors[student.belt]}`}>
                          Faixa {student.belt}
                       </span>
                       <div className="flex gap-1">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className={`w-3 h-1.5 rounded-sm ${i < student.degree ? 'bg-white' : 'bg-white/10'}`} />
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 w-32">
                      <div className="flex justify-between items-center text-[8px] font-black uppercase tracking-[0.2em] text-gray-500 italic">
                        <span>Frequência</span>
                        <span className="text-[#E11D48]">{student.attendance}%</span>
                      </div>
                      <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-[#E11D48]" style={{ width: `${student.attendance}%` }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pl-8">
                    <button className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/5 rounded-xl hover:bg-[#E11D48] hover:border-[#E11D48] transition-all group/btn">
                      <span className="text-[9px] font-black uppercase tracking-widest italic">Perfil</span>
                      <ExternalLink size={14} className="text-gray-500 group-hover/btn:text-white" />
                    </button>
                    <button className="p-3 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-all">
                      <MoreVertical size={18} className="text-gray-500" />
                    </button>
                  </div>

                </div>
              ))}
            </div>
          )}

          {/* PAGINAÇÃO */}
          <div className="mt-16 bg-[#111112] border border-white/5 rounded-[3rem] p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-[#E11D48]/5 to-transparent pointer-events-none"></div>
             
             <div className="flex flex-col gap-1 z-10">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 italic">Navegação da Base</p>
                <p className="text-[12px] font-bold uppercase tracking-widest text-white/60 italic">
                  Mostrando <span className="text-white font-black">{rangeStart}—{rangeEnd}</span> de <span className="text-[#E11D48] font-black">{filteredStudents.length}</span> Guerreiros
                </p>
             </div>

             <div className="flex items-center gap-4 z-10">
                <button 
                  onClick={() => { setCurrentPage(prev => Math.max(1, prev - 1)); window.scrollTo({top: 0, behavior: 'smooth'}); }}
                  disabled={currentPage === 1}
                  className="w-14 h-14 bg-[#070708] border border-white/5 rounded-2xl flex items-center justify-center hover:border-[#E11D48]/50 disabled:opacity-20 transition-all group shadow-xl">
                  <ChevronLeft size={20} className="text-gray-400 group-hover:text-[#E11D48]" />
                </button>

                <div className="flex items-center gap-2 bg-[#070708] p-1.5 rounded-[1.5rem] border border-white/5">
                   {[...Array(totalPages)].map((_, i) => (
                      <button 
                        key={i}
                        onClick={() => { setCurrentPage(i + 1); window.scrollTo({top: 0, behavior: 'smooth'}); }}
                        className={`w-11 h-11 rounded-xl font-black italic text-[10px] uppercase tracking-widest transition-all border ${currentPage === i + 1 ? 'bg-[#E11D48] border-[#E11D48] text-white shadow-[0_0_15px_rgba(225,29,72,0.3)]' : 'bg-transparent border-transparent text-gray-600 hover:text-white hover:bg-white/5'}`}>
                        {i + 1}
                      </button>
                   ))}
                </div>

                <button 
                  onClick={() => { setCurrentPage(prev => Math.min(totalPages, prev + 1)); window.scrollTo({top: 0, behavior: 'smooth'}); }}
                  disabled={currentPage === totalPages}
                  className="w-14 h-14 bg-[#070708] border border-white/5 rounded-2xl flex items-center justify-center hover:border-[#E11D48]/50 disabled:opacity-20 transition-all group shadow-xl">
                  <ChevronRight size={20} className="text-gray-400 group-hover:text-[#E11D48]" />
                </button>
             </div>
          </div>
        </section>
      </main>

      <footer className="max-w-[1440px] mx-auto px-8 py-12 border-t border-white/5 flex justify-center items-center mt-20">
         <p className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-600 italic">© 2024 Nexora Hub — Base de Guerreiros</p>
      </footer>
    </div>
  );
}
