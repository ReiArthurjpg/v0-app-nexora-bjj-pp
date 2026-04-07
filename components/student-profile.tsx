'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  FileText, 
  DollarSign, 
  GraduationCap, 
  Phone, 
  Mail, 
  User,
  CreditCard,
  Search,
  Plus,
  Folder,
  Edit3,
  Award,
  MapPin,
  ShieldAlert,
  Save,
  Package,
  Calendar,
  Tag,
  ArrowRight,
  TrendingUp,
  History,
  CheckCircle2,
  Download,
  Clock,
  FileCheck,
  Star,
  Zap,
  ChevronRight,
  Target,
  Trophy,
  Activity,
  ArrowLeft
} from 'lucide-react';

interface StudentProfileProps {
  studentId?: string;
}

export function StudentProfile({ studentId }: StudentProfileProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Resumo');

  const student = {
    id: studentId || '1',
    name: "GUERREIRO 1",
    belt: "Branca",
    degree: 4,
    email: "ATLETA1@NEXORA.COM",
    phone: "(11) 947356158",
    emergencyPhone: "(11) 99999-8888",
    address: "Rua das Lutas, 123 - São Paulo, SP",
    attendance: 70,
    lastTraining: "Há 2 dias",
    avatar: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=3387&auto=format&fit=crop",
    score: 1250,
    birthDate: "15/05/1992",
    joinDate: "10/01/2022",
    lastPayment: "05/03/2024",
    plan: "Black Belt VIP"
  };

  const graduationData = {
    currentBelt: "Branca",
    currentDegrees: 4,
    nextBelt: "Azul",
    totalLessonsInBelt: 120,
    requiredLessons: 150,
    timeInBelt: "14 meses",
    requiredTime: "18 meses",
    history: [
      { belt: "Branca", degree: 4, date: "15/02/2024", instructor: "Mestre Silva" },
      { belt: "Branca", degree: 3, date: "10/10/2023", instructor: "Mestre Silva" },
      { belt: "Branca", degree: 2, date: "05/06/2023", instructor: "Mestre Silva" },
      { belt: "Branca", degree: 1, date: "20/01/2023", instructor: "Mestre Silva" },
      { belt: "Branca", degree: 0, date: "10/01/2022", instructor: "Início" },
    ]
  };

  const financialStats = [
    { label: "Em atraso", value: "R$ 0,00", color: "text-red-500", icon: <ShieldAlert size={12} /> },
    { label: "Saldo devedor", value: "R$ 0,00", color: "text-green-500", icon: <DollarSign size={12} /> },
    { label: "Créditos", value: "R$ 150,00", color: "text-blue-400", icon: <Plus size={12} /> },
    { label: "Clube Nexora", value: "Ativo", color: "text-orange-400", icon: <Trophy size={12} /> },
    { label: "Próx. Vencimento", value: "10/04/24", color: "text-white", icon: <Calendar size={12} /> },
  ];

  const summaryCards = [
    { 
      title: "Contratos", 
      value: "1 Ativo", 
      status: "Renovação em 280 dias", 
      icon: <FileText className="text-blue-500" size={24} />,
      color: "border-blue-500/20"
    },
    { 
      title: "Categorias", 
      value: "Adulto / Pesado", 
      status: "Inscrito em 3 torneios", 
      icon: <Target className="text-[#E11D48]" size={24} />,
      color: "border-[#E11D48]/20"
    },
    { 
      title: "Clube de Recompensas", 
      value: "5.420 pts", 
      status: "Nível Prata", 
      icon: <Award className="text-yellow-500" size={24} />,
      color: "border-yellow-500/20"
    },
  ];

  const currentContract = {
    title: "Black Belt VIP - Anual",
    status: "Ativo",
    startDate: "10/01/2024",
    endDate: "10/01/2025",
    value: "R$ 2.400,00",
    installments: "12x R$ 200,00",
    benefits: [
      "Acesso livre a todas as unidades",
      "Treinos de Kimono e No-Gi ilimitados",
      "Desconto de 15% em produtos da loja",
      "Acesso à plataforma Nexora Online",
      "Seminários mensais inclusos"
    ]
  };

  const salesHistory = [
    { id: 1, item: "Whey Protein Isolado", detail: "900g - Baunilha", date: "12 Mar, 2024", price: "189,90", category: "Suplemento", icon: "🥛" },
    { id: 2, item: "Energético Monster", detail: "473ml - Original", date: "10 Mar, 2024", price: "12,50", category: "Bebida", icon: "⚡" },
    { id: 3, item: "Kimono Nexora Pro V2", detail: "Tamanho A2 - Azul", date: "25 Fev, 2024", price: "450,00", category: "Equipamento", icon: "🥋" },
    { id: 4, item: "Faixa Branca", detail: "Reforçada - Edição Hub", date: "10 Jan, 2022", price: "45,00", category: "Acessório", icon: "🎗️" },
    { id: 5, item: "Creatina Monohidratada", detail: "250g - Pura", date: "15 Dez, 2023", price: "95,00", category: "Suplemento", icon: "💪" },
  ];

  const menuItems = [
    { id: 'Resumo', icon: <User size={18} /> },
    { id: 'Editar', icon: <Edit3 size={18} /> },
    { id: 'Vendas', icon: <ShoppingCart size={18} /> },
    { id: 'Contratos', icon: <FileText size={18} /> },
    { id: 'Graduações', icon: <GraduationCap size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-[#070708] text-white font-sans selection:bg-[#E11D48] antialiased flex flex-col">
      
      {/* HEADER */}
      <header className="border-b border-white/5 bg-[#070708] px-8 py-4 sticky top-0 z-[60]">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center">
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-3 hover:text-[#E11D48] transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <div className="w-10 h-10 bg-[#E11D48] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(225,29,72,0.3)]">
              <LayoutDashboard size={20} className="text-white" />
            </div>
            <h1 className="text-2xl font-black italic uppercase tracking-tighter leading-none">
              NEXORA <span className="text-[#E11D48]">HUB</span>
            </h1>
          </button>
          
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-[11px] font-black uppercase italic tracking-widest text-white leading-none">Mestre Admin</p>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#E11D48] mt-1 text-right">Diretor Técnico</p>
            </div>
            <div className="relative text-white font-black text-sm border border-white/10 shadow-lg shadow-[#E11D48]/10 bg-gradient-to-tr from-[#E11D48] to-[#FF4D7D] w-11 h-11 rounded-2xl flex items-center justify-center">
              MA
              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#00FF00] border-[3px] border-[#070708] rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 max-w-[1600px] mx-auto w-full px-8 gap-8 pt-10">
        
        {/* MENU LATERAL */}
        <aside className="w-80 sticky top-28 h-fit">
          <div className="bg-[#111112] border border-white/5 rounded-[3rem] p-4 shadow-2xl overflow-hidden">
            <div className="flex flex-col gap-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`
                    flex items-center gap-4 px-6 py-4 rounded-2xl text-[10px] font-black uppercase italic tracking-[0.2em] transition-all group
                    ${activeTab === item.id 
                      ? 'bg-[#E11D48] text-white shadow-[0_10px_20px_rgba(225,29,72,0.2)] translate-x-2' 
                      : 'text-gray-500 hover:text-white hover:bg-white/5'}
                  `}
                >
                  <span className={`${activeTab === item.id ? 'text-white' : 'text-gray-600 group-hover:text-[#E11D48] transition-colors'}`}>
                    {item.icon}
                  </span>
                  {item.id}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* CONTEÚDO PRINCIPAL */}
        <main className="flex-1 space-y-8 pb-20">
          
          {/* CARD DO PERFIL */}
          <div className="bg-[#111112] border border-white/5 rounded-[3.5rem] p-8 shadow-2xl relative overflow-hidden">
            <div className="flex items-center gap-8 relative z-10">
              <div className="relative">
                <div className="w-32 h-32 rounded-[2.5rem] bg-gradient-to-tr from-[#E11D48] to-[#FF4D7D] p-[2px]">
                  <div className="w-full h-full bg-[#070708] rounded-[calc(2.5rem-2px)] overflow-hidden">
                    <img src={student.avatar} className="w-full h-full object-cover" alt="Perfil do Atleta" />
                  </div>
                </div>
                <div className="absolute bottom-1 right-1 bg-[#00FF00] border-4 border-[#111112] w-6 h-6 rounded-full"></div>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <h2 className="text-3xl font-black uppercase italic tracking-tighter">{student.name}</h2>
                  <div className="bg-white px-5 py-1.5 rounded-full text-[9px] font-black uppercase italic tracking-widest text-black">
                    Faixa {student.belt} — {student.degree}º Grau
                  </div>
                </div>
                
                <div className="flex gap-8">
                   <div className="flex items-center gap-3">
                      <Mail size={14} className="text-[#E11D48]" />
                      <span className="text-[10px] font-bold italic text-gray-400 uppercase tracking-wider">{student.email}</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <Phone size={14} className="text-[#E11D48]" />
                      <span className="text-[10px] font-bold italic text-gray-400 uppercase tracking-wider">{student.phone}</span>
                   </div>
                </div>
              </div>

              <div className="text-right">
                <p className="text-[10px] font-black uppercase italic tracking-widest text-gray-500 mb-1">Status Global</p>
                <div className="flex items-center gap-2 text-[#00FF00] justify-end">
                  <CheckCircle2 size={16} />
                  <span className="text-xl font-black italic uppercase tracking-tighter">Ativo</span>
                </div>
              </div>
            </div>
          </div>

          {/* ÁREA DO CONTEÚDO DINÂMICO */}
          <div className="bg-[#111112] border border-white/5 rounded-[3.5rem] p-10 min-h-[600px] shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4">
                <div className="w-2 h-7 bg-[#E11D48] rounded-full"></div>
                <h2 className="text-2xl font-black uppercase italic tracking-tighter">
                  Módulo: <span className="text-[#E11D48]">{activeTab}</span>
                </h2>
              </div>
            </div>

            {/* ABA RESUMO */}
            {activeTab === 'Resumo' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                
                {/* INDICADORES RÁPIDOS */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {financialStats.map((stat, idx) => (
                    <div key={idx} className="bg-[#070708] border border-white/5 rounded-3xl p-5 flex flex-col gap-2 shadow-inner group hover:border-white/20 transition-all">
                      <div className="flex items-center justify-between">
                        <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest italic">{stat.label}</p>
                        <span className={stat.color}>{stat.icon}</span>
                      </div>
                      <p className={`text-lg font-black italic tracking-tighter ${stat.color}`}>{stat.value}</p>
                    </div>
                  ))}
                </div>

                {/* MÉTRICAS PRINCIPAIS */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {summaryCards.map((card, idx) => (
                    <div key={idx} className={`bg-[#070708] border ${card.color} rounded-[2.5rem] p-8 shadow-xl hover:translate-y-[-4px] transition-all group`}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          {card.icon}
                        </div>
                        <div>
                          <p className="text-[9px] font-black uppercase italic tracking-widest text-gray-500">{card.title}</p>
                          <p className="text-xl font-black italic uppercase tracking-tighter">{card.value}</p>
                        </div>
                      </div>
                      <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                        <span className="text-[10px] font-bold text-gray-400 italic uppercase tracking-wider">{card.status}</span>
                        <ChevronRight size={14} className="text-gray-600 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* PAINEL DE PERFORMANCE */}
                <div className="bg-[#070708] border border-white/5 rounded-[3rem] p-10 overflow-hidden relative">
                  <div className="absolute top-0 right-0 p-10 opacity-[0.02] -mr-10 -mt-10">
                    <Activity size={300} />
                  </div>
                  
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 relative z-10">
                    <div>
                      <h4 className="text-[11px] font-black uppercase italic tracking-[0.4em] text-[#E11D48] mb-2">Engajamento & Performance</h4>
                      <p className="text-[10px] font-bold text-gray-500 uppercase italic tracking-widest">Métricas baseadas nos últimos 30 dias de atividade</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-white/5 px-6 py-3 rounded-2xl border border-white/10 flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#E11D48] rounded-full animate-pulse"></div>
                        <span className="text-[10px] font-black uppercase italic tracking-widest text-white">Nível de Foco: Alto</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
                    <div className="space-y-4">
                      <div className="flex justify-between items-end">
                        <p className="text-[10px] font-black uppercase italic tracking-widest text-gray-400">Assiduidade</p>
                        <p className="text-2xl font-black italic">{student.attendance}%</p>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#E11D48] to-[#FF4D7D]" style={{ width: `${student.attendance}%` }}></div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-end">
                        <p className="text-[10px] font-black uppercase italic tracking-widest text-gray-400">Pontuação Global</p>
                        <p className="text-2xl font-black italic text-yellow-500">{student.score}</p>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-yellow-500" style={{ width: '85%' }}></div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-end">
                        <p className="text-[10px] font-black uppercase italic tracking-widest text-gray-400">Progresso Faixa</p>
                        <p className="text-2xl font-black italic text-blue-400">80%</p>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-400" style={{ width: '80%' }}></div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-end">
                        <p className="text-[10px] font-black uppercase italic tracking-widest text-gray-400">Média de Treinos</p>
                        <p className="text-2xl font-black italic">4.2/sem</p>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PRÓXIMAS METAS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#070708] border border-white/5 rounded-[2.5rem] p-8 flex items-center justify-between group cursor-pointer hover:bg-white/[0.02] transition-all">
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-500">
                        <CheckCircle2 size={24} />
                      </div>
                      <div>
                        <h5 className="text-[11px] font-black uppercase italic tracking-widest">Próxima Graduação</h5>
                        <p className="text-[9px] font-bold text-gray-500 uppercase italic tracking-widest mt-1">Faltam 30 aulas para a faixa Azul</p>
                      </div>
                    </div>
                    <ArrowRight size={18} className="text-gray-600 group-hover:translate-x-2 transition-transform" />
                  </div>

                  <div className="bg-[#070708] border border-white/5 rounded-[2.5rem] p-8 flex items-center justify-between group cursor-pointer hover:bg-white/[0.02] transition-all">
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 bg-[#E11D48]/10 rounded-2xl flex items-center justify-center text-[#E11D48]">
                        <Star size={24} />
                      </div>
                      <div>
                        <h5 className="text-[11px] font-black uppercase italic tracking-widest">Recompensa Disponível</h5>
                        <p className="text-[9px] font-bold text-gray-500 uppercase italic tracking-widest mt-1">Resgate 15% OFF em produtos Nexora</p>
                      </div>
                    </div>
                    <ArrowRight size={18} className="text-gray-600 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            )}

            {/* ABA GRADUAÇÕES */}
            {activeTab === 'Graduações' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="bg-[#070708] border border-white/5 rounded-[3rem] p-8 relative overflow-hidden group">
                      <div className="flex justify-between items-start mb-12">
                        <div>
                          <p className="text-[10px] font-black uppercase italic tracking-[0.3em] text-[#E11D48] mb-2">Graduação Atual</p>
                          <h3 className="text-4xl font-black italic tracking-tighter uppercase">Faixa {graduationData.currentBelt}</h3>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] font-black uppercase italic tracking-[0.3em] text-gray-500 mb-2">Próximo Nível</p>
                          <h3 className="text-2xl font-black italic tracking-tighter uppercase text-white/40">Faixa {graduationData.nextBelt}</h3>
                        </div>
                      </div>

                      <div className="relative mb-16 px-4">
                        <div className="h-16 w-full bg-white rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.05)] flex items-center relative overflow-hidden">
                          <div className="absolute right-0 top-0 h-full w-48 bg-[#111111] flex items-center justify-around px-6 border-l-4 border-yellow-500/20">
                            {[...Array(4)].map((_, i) => (
                              <div key={i} className={`w-3 h-10 rounded-sm ${i < graduationData.currentDegrees ? 'bg-white shadow-[0_0_10px_white]' : 'bg-white/5'}`}></div>
                            ))}
                          </div>
                          <div className="ml-10">
                            <span className="text-black font-black italic uppercase tracking-tighter text-xl">NEXORA PRO SERIES</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <div className="flex justify-between items-end">
                            <span className="text-[10px] font-black uppercase italic tracking-widest text-gray-400">Aulas Frequentadas</span>
                            <span className="text-lg font-black italic">{graduationData.totalLessonsInBelt} / {graduationData.requiredLessons}</span>
                          </div>
                          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-[#E11D48] shadow-[0_0_15px_rgba(225,29,72,0.4)]" style={{ width: '80%' }}></div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="flex justify-between items-end">
                            <span className="text-[10px] font-black uppercase italic tracking-widest text-gray-400">Tempo de Permanência</span>
                            <span className="text-lg font-black italic">{graduationData.timeInBelt} / {graduationData.requiredTime}</span>
                          </div>
                          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.2)]" style={{ width: '77%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-[#070708] border border-white/5 rounded-[2.5rem] p-8 flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-[#E11D48]/10 rounded-2xl flex items-center justify-center text-[#E11D48] mb-6 shadow-inner">
                        <Zap size={30} fill="currentColor" />
                      </div>
                      <h4 className="text-[11px] font-black uppercase italic tracking-[0.3em] mb-3">Análise Técnica</h4>
                      <p className="text-[10px] font-bold text-gray-500 uppercase italic tracking-widest leading-relaxed mb-6">
                        Você atingiu 82% dos requisitos para o exame de graduação. Continue o foco nas aulas de No-Gi.
                      </p>
                      <div className="w-full pt-6 border-t border-white/5">
                        <button className="w-full py-4 bg-white/5 hover:bg-[#E11D48] border border-white/10 rounded-2xl text-[10px] font-black uppercase italic tracking-[0.2em] transition-all">
                          Ver Cronograma de Exames
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#070708] border border-white/5 rounded-[3rem] p-10">
                  <div className="flex items-center gap-3 mb-10">
                    <History size={18} className="text-[#E11D48]" />
                    <h3 className="text-[11px] font-black uppercase italic tracking-[0.4em]">Linha do Tempo de Evolução</h3>
                  </div>
                  <div className="space-y-4">
                    {graduationData.history.map((h, i) => (
                      <div key={i} className="flex items-center gap-6 p-5 rounded-[2rem] hover:bg-white/[0.02] transition-all border border-transparent hover:border-white/5 group">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-black italic border ${h.belt === 'Branca' ? 'bg-white text-black border-gray-200' : 'bg-blue-600 text-white border-blue-400'}`}>
                          {h.belt[0]}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-[11px] font-black uppercase italic tracking-tighter">
                            Faixa {h.belt} — {h.degree > 0 ? `${h.degree}º Grau` : 'Início da Jornada'}
                          </h4>
                          <p className="text-[9px] font-bold text-gray-600 uppercase italic tracking-widest mt-1">Instrutor Responsável: {h.instructor}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] font-black italic text-gray-400">{h.date}</p>
                          <div className="flex items-center gap-1 justify-end mt-1 text-[#00FF00]">
                            <CheckCircle2 size={10} />
                            <span className="text-[8px] font-black uppercase tracking-widest">Validado</span>
                          </div>
                        </div>
                        <div className="w-10 h-10 rounded-full flex items-center justify-center text-gray-800 group-hover:text-white transition-all">
                          <ChevronRight size={18} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ABA CONTRATOS */}
            {activeTab === 'Contratos' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    <div className="bg-[#070708] border border-white/5 rounded-[3rem] p-8 shadow-xl relative overflow-hidden group">
                       <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:scale-110 transition-transform duration-700">
                          <FileCheck size={180} />
                       </div>
                       <div className="flex justify-between items-start mb-10">
                          <div>
                             <span className="bg-[#E11D48]/10 text-[#E11D48] text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-[0.2em] mb-4 inline-block border border-[#E11D48]/20">Plano Atual</span>
                             <h3 className="text-3xl font-black italic tracking-tighter uppercase">{currentContract.title}</h3>
                          </div>
                          <div className="flex flex-col items-end">
                             <div className="flex items-center gap-2 text-[#00FF00] mb-1">
                                <CheckCircle2 size={14} />
                                <span className="text-[10px] font-black uppercase italic tracking-widest">{currentContract.status}</span>
                             </div>
                             <p className="text-[9px] font-bold text-gray-600 uppercase tracking-widest italic">Início: {currentContract.startDate}</p>
                          </div>
                       </div>
                       <div className="grid grid-cols-2 gap-8 mb-12">
                          <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
                             <p className="text-[8px] font-bold text-gray-500 uppercase tracking-widest mb-2 italic">Valor Total</p>
                             <p className="text-2xl font-black italic tracking-tighter">{currentContract.value}</p>
                          </div>
                          <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
                             <p className="text-[8px] font-bold text-gray-500 uppercase tracking-widest mb-2 italic">Condição</p>
                             <p className="text-2xl font-black italic tracking-tighter">{currentContract.installments}</p>
                          </div>
                       </div>
                       <div className="space-y-4 mb-10">
                          <h4 className="text-[10px] font-black uppercase italic tracking-[0.3em] text-[#E11D48]">Benefícios Inclusos</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                             {currentContract.benefits.map((benefit, i) => (
                                <div key={i} className="flex items-center gap-3 text-gray-400">
                                   <div className="w-1.5 h-1.5 bg-[#E11D48] rounded-full"></div>
                                   <span className="text-[10px] font-bold italic uppercase tracking-tight">{benefit}</span>
                                </div>
                             ))}
                          </div>
                       </div>
                       <div className="flex gap-4">
                          <button className="flex-1 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-[10px] font-black uppercase italic tracking-[0.2em] transition-all flex items-center justify-center gap-3">
                             <Download size={16} />
                             Baixar PDF
                          </button>
                          <button className="flex-1 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-[10px] font-black uppercase italic tracking-[0.2em] transition-all flex items-center justify-center gap-3">
                             <History size={16} />
                             Termos de Uso
                          </button>
                       </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-[#070708] border border-white/5 rounded-[2.5rem] p-8">
                       <div className="flex items-center gap-3 mb-8 text-[#E11D48]">
                          <Clock size={18} />
                          <h4 className="text-[11px] font-black uppercase italic tracking-[0.3em]">Vigência do Plano</h4>
                       </div>
                       <div className="relative h-2 bg-white/5 rounded-full mb-4 overflow-hidden">
                          <div className="absolute top-0 left-0 h-full w-[35%] bg-gradient-to-r from-[#E11D48] to-[#FF4D7D] shadow-[0_0_10px_rgba(225,29,72,0.5)]"></div>
                       </div>
                       <div className="flex justify-between items-center mb-10">
                          <span className="text-[9px] font-black text-gray-500 uppercase italic">Dia 60 / 365</span>
                          <span className="text-[9px] font-black text-[#E11D48] uppercase italic">Expira em 10 meses</span>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ABA VENDAS */}
            {activeTab === 'Vendas' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-10">
                   <div className="lg:col-span-3">
                      <div className="flex items-center gap-3 mb-6">
                         <History size={16} className="text-[#E11D48]" />
                         <span className="text-[10px] font-black uppercase italic tracking-[0.3em] text-gray-400">Histórico de Movimentações</span>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        {salesHistory.map((sale) => (
                          <div key={sale.id} className="bg-[#070708] hover:bg-white/[0.03] border border-white/5 rounded-[2rem] p-5 flex items-center justify-between group transition-all cursor-pointer">
                            <div className="flex items-center gap-6">
                              <div className="w-16 h-16 bg-[#111112] border border-white/10 rounded-2xl flex items-center justify-center text-2xl group-hover:border-[#E11D48]/30 group-hover:scale-105 transition-all">
                                {sale.icon}
                              </div>
                              <div>
                                <h3 className="text-[12px] font-black uppercase italic tracking-tighter text-white mb-1 group-hover:text-[#E11D48] transition-colors">{sale.item}</h3>
                                <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest italic">{sale.detail}</p>
                                <div className="flex items-center gap-3 mt-2">
                                   <span className="text-[8px] px-2 py-0.5 bg-white/5 rounded-full text-gray-400 font-bold uppercase tracking-widest">{sale.category}</span>
                                   <div className="flex items-center gap-1.5 text-gray-600">
                                      <Calendar size={10} />
                                      <span className="text-[8px] font-bold italic tracking-widest">{sale.date}</span>
                                   </div>
                                </div>
                              </div>
                            </div>
                            <div className="text-right flex items-center gap-8">
                               <div>
                                  <p className="text-[8px] font-bold text-gray-600 uppercase tracking-widest mb-1 italic">Total Pago</p>
                                  <p className="text-lg font-black italic text-white tracking-tighter group-hover:text-[#E11D48] transition-all">R$ {sale.price}</p>
                               </div>
                               <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-gray-700 group-hover:text-white group-hover:border-[#E11D48] transition-all">
                                  <ArrowRight size={14} />
                               </div>
                            </div>
                          </div>
                        ))}
                      </div>
                   </div>
                   <div className="space-y-6">
                      <div className="bg-gradient-to-br from-[#E11D48] to-[#991B1B] rounded-[2.5rem] p-8 shadow-[0_20px_40px_rgba(225,29,72,0.15)] relative overflow-hidden group">
                         <p className="text-[9px] font-black uppercase italic tracking-widest text-white/60 mb-2">Total Consumido</p>
                         <h3 className="text-4xl font-black italic tracking-tighter text-white mb-6">R$ 792,40</h3>
                      </div>
                   </div>
                </div>
              </div>
            )}

            {/* ESTADO VAZIO PARA EDITAR */}
            {activeTab === 'Editar' && (
              <div className="flex flex-col items-center justify-center py-32 animate-in zoom-in-95 duration-500">
                <div className="w-20 h-20 bg-[#E11D48]/5 rounded-full flex items-center justify-center mb-6 text-[#E11D48]/20 ring-4 ring-[#E11D48]/5">
                  <Edit3 size={40} />
                </div>
                <h3 className="text-base font-black uppercase italic tracking-[0.3em] text-white/40 mb-2">Módulo: Editar</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600 italic">Em desenvolvimento...</p>
              </div>
            )}
          </div>
        </main>
      </div>

      <footer className="w-full py-8 text-center border-t border-white/5">
        <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-gray-600 italic">
          © 2024 Nexora Hub — Gestão de Atletas de Elite
        </p>
      </footer>
    </div>
  );
}
