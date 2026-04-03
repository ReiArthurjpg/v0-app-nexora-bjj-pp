'use client';

import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Layers, 
  ChevronRight, 
  ArrowLeft,
  LayoutDashboard,
  User,
  Trophy,
  Activity,
  Bell,
  Search,
  ChevronLeft,
  Calendar,
  MapPin,
  ExternalLink,
  AlertCircle,
  Megaphone,
  Zap,
  CheckCircle2,
  Handshake,
  HelpCircle,
  Award,
  BookOpen,
  Clock,
  Settings,
  DollarSign,
  MonitorPlay,
  History
} from 'lucide-react';

export function NexoraHub() {
  const [currentModule, setCurrentModule] = useState('dashboard');
  const [lastAccessedModule, setLastAccessedModule] = useState('alunos');
  const [currentTournamentSlide, setCurrentTournamentSlide] = useState(0);
  const [currentBannerSlide, setCurrentBannerSlide] = useState(0);
  const [currentPartnerSlide, setCurrentPartnerSlide] = useState(0);

  // Dados do usuário
  const userData = {
    name: "Mestre Admin",
    role: "Diretor Técnico",
    academy: "Alliance BJJ",
    initials: "MA",
    avatar: "https://ui-avatars.com/api/?name=MA&background=E11D48&color=fff"
  };

  // Módulos do Sistema
  const systemModules = [
    {
      id: 'alunos',
      title: 'Gestão de Alunos',
      description: 'Controle total de matrículas, dados biométricos e histórico de evolução dos atletas de todas as filiais.',
      status: 'Ativo',
      statusColor: 'text-[#00FF00]',
      dotColor: 'bg-[#00FF00]',
      badge: 'Essencial',
      icon: <Users size={24} />,
      image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 'professores',
      title: 'Gestão de Professores',
      description: 'Controle o corpo técnico, permissões de instrutores e vínculos de alunos por mestre responsável.',
      status: 'Ativo',
      statusColor: 'text-[#00FF00]',
      dotColor: 'bg-[#00FF00]',
      badge: 'Essencial',
      icon: <Users size={24} />,
      image: 'https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 'financeiro',
      title: 'Gestão Financeira',
      description: 'Controle de mensalidades, fluxo de caixa, inadimplência e emissão de cobranças automatizadas.',
      status: 'Ativo',
      statusColor: 'text-[#00FF00]',
      dotColor: 'bg-[#00FF00]',
      badge: 'Crítico',
      icon: <DollarSign size={24} />,
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 'graduacoes',
      title: 'Faixas e Graduação',
      description: 'Configure regras de promoção automática, carência de faixas e critérios técnicos para graus.',
      status: 'Configurar',
      statusColor: 'text-[#FF9100]',
      dotColor: 'bg-[#FF9100]',
      badge: 'Automação',
      icon: <Layers size={24} />,
      image: 'https://images.unsplash.com/photo-1552072805-2a9039d00e57?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 'aulas',
      title: 'Gestão de Aulas',
      description: 'Organize horários, check-ins em tempo real e lotação das turmas por categoria e faixa etária.',
      status: 'Ativo',
      statusColor: 'text-[#00FF00]',
      dotColor: 'bg-[#00FF00]',
      badge: 'Operacional',
      icon: <BookOpen size={24} />,
      image: 'https://images.unsplash.com/photo-1599058917233-3583688b5e72?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 'frequencia',
      title: 'Histórico e Frequências',
      description: 'Relatórios detalhados de presença para validação de tempo de carência e assiduidade nos treinos.',
      status: 'Ativo',
      statusColor: 'text-[#00FF00]',
      dotColor: 'bg-[#00FF00]',
      badge: 'Análise',
      icon: <Clock size={24} />,
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  const tournaments = [
    { id: 1, title: "Copa Prime Jiu-Jitsu", date: "15 OUT", location: "São Paulo, SP", status: "Inscrições Abertas", gradient: "from-[#E11D48] to-[#880E2F]" },
    { id: 2, title: "World Pro Abu Dhabi", date: "02 NOV", location: "Abu Dhabi, UAE", status: "Seletivas", gradient: "from-[#1e1b4b] to-[#4338ca]" },
    { id: 3, title: "International Open IBJJF", date: "12 DEZ", location: "Lisboa, PT", status: "Em breve", gradient: "from-[#065f46] to-[#064e3b]" }
  ];

  const systemBanners = [
    { id: 1, tag: "SISTEMA WEB", title: "Nova Interface Nexora v2.5", description: "Lançamos novas ferramentas de análise de desempenho e relatórios automatizados para sua gestão técnica.", icon: <Zap size={40} className="text-[#E11D48]" />, bgImage: "radial-gradient(circle at top right, rgba(225,29,72,0.15), transparent)", buttonText: "Explorar Versão" },
    { id: 2, tag: "AVISO TÉCNICO", title: "Manutenção Programada", description: "No próximo domingo, entre 02:00 e 04:00 AM, o sistema passará por atualizações de segurança.", icon: <AlertCircle size={40} className="text-yellow-500" />, bgImage: "radial-gradient(circle at top right, rgba(234,179,8,0.1), transparent)", buttonText: "Ver Detalhes" },
    { id: 3, tag: "EVENTO NEXORA", title: "Workshop de Gestão Esportiva", description: "Participe da nossa live exclusiva sobre como aumentar a retenção de alunos e faturamento.", icon: <Megaphone size={40} className="text-blue-500" />, bgImage: "radial-gradient(circle at top right, rgba(59,130,246,0.1), transparent)", buttonText: "Garantir Vaga" }
  ];

  const partners = [
    { id: 1, name: "Venom Fightwear", benefit: "20% OFF em Kimonos", description: "Desconto exclusivo para academias parceiras Nexora em toda linha oficial.", bg: "bg-zinc-900/50" },
    { id: 2, name: "Nutrition Pro", benefit: "Consultoria Grátis", description: "Planos nutricionais personalizados para atletas de alto rendimento da rede.", bg: "bg-zinc-900/50" },
    { id: 3, name: "PhysioCare", benefit: "Check-up Semestral", description: "Avaliação física completa para prevenção de lesões e performance.", bg: "bg-zinc-900/50" }
  ];

  useEffect(() => {
    const tournamentTimer = setInterval(() => setCurrentTournamentSlide((prev) => (prev + 1) % tournaments.length), 5000);
    const bannerTimer = setInterval(() => setCurrentBannerSlide((prev) => (prev + 1) % systemBanners.length), 7000);
    const partnerTimer = setInterval(() => setCurrentPartnerSlide((prev) => (prev + 1) % partners.length), 6000);
    return () => { clearInterval(tournamentTimer); clearInterval(bannerTimer); clearInterval(partnerTimer); };
  }, [tournaments.length, systemBanners.length, partners.length]);

  const handleModuleAccess = (moduleId: string) => {
    setLastAccessedModule(moduleId);
  };

  const nextTournament = () => setCurrentTournamentSlide((prev) => (prev + 1) % tournaments.length);
  const prevTournament = () => setCurrentTournamentSlide((prev) => (prev - 1 + tournaments.length) % tournaments.length);
  const nextBanner = () => setCurrentBannerSlide((prev) => (prev + 1) % systemBanners.length);
  const prevBanner = () => setCurrentBannerSlide((prev) => (prev - 1 + systemBanners.length) % systemBanners.length);
  const nextPartner = () => setCurrentPartnerSlide((prev) => (prev + 1) % partners.length);
  const prevPartner = () => setCurrentPartnerSlide((prev) => (prev - 1 + partners.length) % partners.length);

  return (
    <div className="min-h-screen bg-[#070708] text-white font-sans selection:bg-[#E11D48] antialiased">
      {/* HEADER */}
      <header className="border-b border-white/5 bg-[#070708]/90 backdrop-blur-xl sticky top-0 z-50 px-8 py-6">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer group" onClick={() => setCurrentModule('dashboard')}>
            <div className="w-12 h-12 bg-[#E11D48] rounded-[1rem] flex items-center justify-center -skew-x-12 shadow-[0_0_40px_rgba(225,29,72,0.5)] group-hover:scale-110 transition-all">
              <LayoutDashboard className="text-white" size={24} />
            </div>
            <h1 className="text-3xl font-black black italic tracking-tighter uppercase leading-none">Nexora <span className="text-[#E11D48]">Hub</span></h1>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-end hidden md:flex">
              <span className="text-[12px] font-black uppercase tracking-[0.2em] text-white italic">{userData.name}</span>
              <span className="text-[10px] font-bold text-[#E11D48] uppercase tracking-[0.3em] mt-1">{userData.role}</span>
            </div>
            <div className="relative group">
              <div className="w-14 h-14 rounded-[1.2rem] bg-gradient-to-tr from-[#E11D48] to-[#FF4D7D] p-[2px] cursor-pointer shadow-lg shadow-[#E11D48]/20">
                <div className="w-full h-full bg-[#070708] rounded-[1.1rem] flex items-center justify-center overflow-hidden">
                   <img src={userData.avatar} alt="Avatar" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#00FF00] border-4 border-[#070708] rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto px-8 py-16 space-y-20">
        
        {/* SEÇÃO 1: BOAS VINDAS E GRID PRINCIPAL */}
        <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#00FF00] animate-pulse shadow-[0_0_8px_#00FF00]"></span>
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] italic">Central de Comando</span>
                </div>
                <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-tight text-white">
                  Oss, <span className="text-[#E11D48]">{userData.name.split(' ')[0]}</span>
                </h2>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-2 italic flex items-center gap-2">
                  <CheckCircle2 size={12} className="text-[#E11D48]" />
                  Painel de Controle — {userData.academy}
                </p>
              </div>

              {/* GRUPO DE BOTÕES DE AÇÃO */}
              <div className="flex flex-col gap-3 min-w-[240px]">
                <button className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl hover:bg-[#E11D48] hover:border-[#E11D48] transition-all group active:scale-95 shadow-lg w-full">
                  <User size={18} className="text-[#E11D48] group-hover:text-white transition-colors" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] italic text-white">Perfil do Diretor</span>
                </button>
                <button 
                  onClick={() => handleModuleAccess(lastAccessedModule)}
                  className="flex items-center justify-between gap-3 bg-[#E11D48]/10 border border-[#E11D48]/20 px-6 py-4 rounded-2xl hover:bg-[#E11D48] transition-all group active:scale-95 shadow-xl w-full"
                >
                  <div className="flex items-center gap-3">
                    <Zap size={18} className="text-[#E11D48] group-hover:text-white transition-colors" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] italic text-white">Acesso Rápido</span>
                  </div>
                  <ChevronRight size={14} className="text-[#E11D48] group-hover:text-white" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* COLUNA ESQUERDA */}
              <div className="lg:col-span-8 space-y-10">
                {/* CARDS DE ESTATÍSTICA */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[
                    { label: 'Alunos Ativos', value: '142', icon: <Users size={22} />, color: 'text-blue-500', bg: 'bg-blue-500/5' },
                    { label: 'Aulas Hoje', value: '08', icon: <MonitorPlay size={22} />, color: 'text-[#E11D48]', bg: 'bg-[#E11D48]/5' },
                    { label: 'Graduações Mês', value: '12', icon: <Trophy size={22} />, color: 'text-yellow-500', bg: 'bg-yellow-500/5' },
                  ].map((stat, idx) => (
                    <div key={idx} className="bg-[#111112] border border-white/5 p-8 rounded-[2.5rem] group hover:border-[#E11D48]/30 transition-all relative overflow-hidden">
                      <div className={`absolute top-0 right-0 w-32 h-32 ${stat.bg} blur-[50px] -mr-8 -mt-8 opacity-50`}></div>
                      <div className={`${stat.color} mb-5 relative z-10 opacity-80 group-hover:opacity-100 transition-opacity`}>{stat.icon}</div>
                      <div className="text-4xl font-black italic text-white tracking-tighter mb-1 relative z-10">{stat.value}</div>
                      <div className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] relative z-10">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="relative bg-[#111112] border border-white/5 rounded-[3rem] overflow-hidden min-h-[350px] flex items-center group shadow-2xl">
                  <div className="absolute inset-0 opacity-40 transition-all duration-1000" style={{ background: systemBanners[currentBannerSlide].bgImage }} />
                  <div className="relative z-10 p-12 w-full flex flex-col md:flex-row items-center gap-10">
                    <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10 shrink-0 shadow-inner group-hover:scale-105 transition-transform duration-500">
                      {systemBanners[currentBannerSlide].icon}
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] animate-pulse"></span>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#E11D48] italic">{systemBanners[currentBannerSlide].tag}</span>
                      </div>
                      <h3 className="text-4xl font-black uppercase italic tracking-tighter text-white mb-5 leading-none">{systemBanners[currentBannerSlide].title}</h3>
                      <p className="text-base text-gray-400 font-medium italic leading-relaxed max-w-xl">"{systemBanners[currentBannerSlide].description}"</p>
                      <div className="flex items-center justify-center md:justify-start gap-5 mt-10">
                        <button className="px-10 py-4 bg-[#E11D48] rounded-2xl text-[10px] font-black uppercase tracking-widest italic hover:bg-[#C4183C] transition-all flex items-center gap-3">
                          {systemBanners[currentBannerSlide].buttonText} <ChevronRight size={14} />
                        </button>
                        <div className="flex gap-2">
                          <button onClick={prevBanner} className="p-3 bg-white/5 hover:bg-[#E11D48]/10 border border-white/5 rounded-xl transition-all"><ChevronLeft size={18} /></button>
                          <button onClick={nextBanner} className="p-3 bg-white/5 hover:bg-[#E11D48]/10 border border-white/5 rounded-xl transition-all"><ChevronRight size={18} /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* COLUNA DIREITA */}
              <div className="lg:col-span-4 space-y-8">
                <div className={`bg-gradient-to-br ${tournaments[currentTournamentSlide].gradient} rounded-[2.5rem] p-10 relative overflow-hidden shadow-2xl shadow-[#E11D48]/20 transition-all duration-700 h-[520px] flex flex-col justify-between group`}>
                  <div className="relative z-10">
                    <div className="bg-white/20 backdrop-blur-xl w-16 h-16 rounded-[1.5rem] flex items-center justify-center mb-10 border border-white/20 shadow-xl group-hover:rotate-12 transition-transform">
                      <Trophy size={32} className="text-white" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60 italic">{tournaments[currentTournamentSlide].status}</span>
                    <h4 className="text-3xl font-black uppercase italic text-white leading-tight mt-3 mb-10 min-h-[4.5rem] tracking-tighter">{tournaments[currentTournamentSlide].title}</h4>
                    <div className="space-y-6">
                      <div className="flex items-center gap-5 text-white/90">
                        <div className="p-3 bg-black/10 rounded-xl"><Calendar size={18} /></div>
                        <span className="text-[12px] font-black uppercase tracking-[0.1em]">{tournaments[currentTournamentSlide].date}</span>
                      </div>
                      <div className="flex items-center gap-5 text-white/90">
                        <div className="p-3 bg-black/10 rounded-xl"><MapPin size={18} /></div>
                        <span className="text-[12px] font-black uppercase tracking-[0.1em]">{tournaments[currentTournamentSlide].location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative z-10 flex items-center justify-between pt-6 border-t border-white/10">
                    <div className="flex gap-2">
                      {tournaments.map((_, idx) => (
                        <button key={idx} onClick={() => setCurrentTournamentSlide(idx)} className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentTournamentSlide ? 'w-10 bg-white' : 'w-2.5 bg-white/30'}`} />
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <button onClick={prevTournament} className="p-3 bg-black/20 hover:bg-black/40 rounded-xl text-white transition-all"><ChevronLeft size={20} /></button>
                      <button onClick={nextTournament} className="p-3 bg-black/20 hover:bg-black/40 rounded-xl text-white transition-all"><ChevronRight size={20} /></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>

        {/* SEÇÃO 2: PARCERIAS */}
        <section className="animate-in fade-in duration-1000">
            <div className="relative bg-[#111112] border border-white/5 rounded-[2.5rem] overflow-hidden p-10 group shadow-xl">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <Handshake size={20} className="text-[#E11D48]" />
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] italic text-white">Benefícios e Parcerias</h3>
                </div>
                <div className="flex gap-2">
                  <button onClick={prevPartner} className="p-2.5 bg-white/5 hover:bg-[#E11D48]/10 rounded-lg text-gray-500 hover:text-[#E11D48] transition-all"><ChevronLeft size={16} /></button>
                  <button onClick={nextPartner} className="p-2.5 bg-white/5 hover:bg-[#E11D48]/10 rounded-lg text-gray-500 hover:text-[#E11D48] transition-all"><ChevronRight size={16} /></button>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-10 animate-in fade-in duration-500" key={currentPartnerSlide}>
                <div className="w-full md:w-60 h-40 bg-white/5 rounded-[2rem] border border-white/5 flex items-center justify-center italic font-black text-gray-700 text-2xl tracking-tighter uppercase grayscale group-hover:grayscale-0 transition-all duration-700">
                  {partners[currentPartnerSlide].name}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-block px-4 py-1.5 bg-[#E11D48]/10 text-[#E11D48] text-[10px] font-black uppercase tracking-widest rounded-full mb-4">{partners[currentPartnerSlide].benefit}</div>
                  <h4 className="text-xl font-black text-white uppercase italic tracking-tight mb-3">{partners[currentPartnerSlide].name}</h4>
                  <p className="text-sm text-gray-500 font-medium italic leading-relaxed">{partners[currentPartnerSlide].description}</p>
                </div>
                <button className="px-8 py-4 bg-white/5 hover:bg-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-white transition-all whitespace-nowrap">Resgatar Cupom</button>
              </div>
            </div>
        </section>

        {/* SEÇÃO 3: MÓDULOS OPERACIONAIS */}
        <section className="animate-in fade-in duration-1000 pb-20">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-black uppercase italic tracking-tighter leading-tight text-white">
                Módulos <span className="text-[#E11D48]">Operacionais</span>
              </h2>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-2 italic">
                Ecossistema Integrado de Gestão
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {systemModules.map((mod) => (
              <div key={mod.id} className="bg-[#111112] border border-white/5 rounded-[2.5rem] overflow-hidden group flex flex-col hover:border-[#E11D48]/50 transition-all duration-500 shadow-2xl">
                <div className="h-48 overflow-hidden relative bg-black">
                  <img 
                    src={mod.image} 
                    alt={mod.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-40 group-hover:opacity-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111112] via-transparent to-black/20 opacity-90" />
                  <div className="absolute top-5 right-5">
                     <div className="bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-2xl">
                        <div className={`w-1.5 h-1.5 rounded-full ${mod.dotColor} shadow-[0_0_8px_currentColor]`} />
                        <span className={`text-[8px] font-black uppercase tracking-[0.2em] ${mod.statusColor}`}>
                          {mod.status}
                        </span>
                     </div>
                  </div>
                  <div className="absolute bottom-5 left-5 flex items-center gap-2">
                     <div className="p-3 bg-white text-black rounded-xl -skew-x-6 group-hover:bg-[#E11D48] group-hover:text-white transition-colors">
                        {mod.icon}
                     </div>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-black uppercase italic tracking-tighter group-hover:text-[#E11D48] transition-colors leading-none mb-4">{mod.title}</h3>
                  <p className="text-xs text-gray-400 font-medium leading-relaxed mb-8 flex-1 italic opacity-80 group-hover:opacity-100 transition-opacity">
                    {mod.description}
                  </p>
                  <div className="flex gap-3 mt-auto">
                    <button 
                      onClick={() => handleModuleAccess(mod.id)}
                      className="flex-1 py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all italic border shadow-sm bg-white text-black hover:bg-[#E11D48] hover:text-white border-white/10 hover:border-[#E11D48] active:scale-95"
                    >
                      {mod.status === 'Ativo' ? 'Gerenciar' : 'Configurar'}
                    </button>
                    <button className="px-5 py-4 bg-white/5 border border-white/5 rounded-xl hover:bg-[#E11D48]/10 hover:border-[#E11D48]/30 transition-all text-white/40 hover:text-[#E11D48]">
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="max-w-[1440px] mx-auto px-8 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
         <p className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-600 italic">© 2024 Nexora Global — Unified Combat Management</p>
         <div className="flex gap-10 text-[10px] font-black uppercase tracking-widest text-gray-600">
            <button className="hover:text-white transition-colors italic">Privacidade</button>
            <button className="hover:text-white transition-colors italic">Segurança</button>
            <button className="hover:text-white transition-colors italic">Central Técnica</button>
         </div>
      </footer>
    </div>
  );
}
