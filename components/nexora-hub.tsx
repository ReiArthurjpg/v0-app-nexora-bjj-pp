'use client';

import { useState } from 'react';
import { 
  Users, 
  Layers, 
  Settings, 
  ChevronRight, 
  Plus, 
  Trash2, 
  Save, 
  Zap,
  AlertCircle,
  MoreVertical,
  Award,
  ArrowLeft,
  ExternalLink,
  HelpCircle,
  Trophy
} from 'lucide-react';

export function NexoraHub() {
  const [currentModule, setCurrentModule] = useState('hub');

  const modules = [
    {
      id: 'professores',
      title: 'Gestão de Professores',
      description: 'Controle o corpo técnico, permissões de instrutores e vínculos de alunos por mestre.',
      status: 'Ativo',
      statusColor: 'text-[#00FF00]',
      dotColor: 'bg-[#00FF00]',
      badge: 'Essencial',
      icon: <Users size={24} />,
      image: 'https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 'graduacoes',
      title: 'Faixas e Graduação',
      description: 'Configure regras de promoção automática, carência de faixas e critérios de graus.',
      status: 'Configurar',
      statusColor: 'text-[#FF9100]',
      dotColor: 'bg-[#FF9100]',
      badge: 'Automação',
      icon: <Layers size={24} />,
      image: 'https://images.unsplash.com/photo-1552072805-2a9039d00e57?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 'analises',
      title: 'Performance Técnica',
      description: 'Relatórios de evolução técnica e frequência média para exames de faixa.',
      status: 'Indisponível',
      statusColor: 'text-gray-400',
      dotColor: 'bg-gray-500',
      badge: 'Premium',
      icon: <Zap size={24} />,
      image: 'https://images.unsplash.com/photo-1599058917233-3583688b5e72?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  const renderContent = () => {
    switch (currentModule) {
      case 'professores': 
        return <ProfessoresSection onBack={() => setCurrentModule('hub')} />;
      case 'graduacoes': 
        return <GraduacoesSection onBack={() => setCurrentModule('hub')} />;
      default: 
        return (
          <div className="animate-in fade-in duration-500">
            <div className="mb-10">
              <h2 className="text-3xl font-black uppercase italic tracking-tighter leading-tight text-white">
                Módulos de <span className="text-[#E11D48]">Configuração</span>
              </h2>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-2 italic">
                Nexora Ecosystem — Gestão Profissional de Lutas
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((mod) => (
                <div key={mod.id} className="bg-[#111112] border border-white/5 rounded-2xl overflow-hidden group flex flex-col hover:border-[#E11D48]/50 transition-all duration-300">
                  <div className="h-48 overflow-hidden relative bg-black">
                    <img 
                      src={mod.image} 
                      alt={mod.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-40 group-hover:opacity-100" 
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop';
                      }}
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111112] via-transparent to-black/20 opacity-90" />
                    
                    <div className="absolute top-4 right-4 bg-black/50 p-2 rounded-full backdrop-blur-md border border-white/10 text-white/60 hover:text-white transition-colors cursor-help">
                      <HelpCircle size={16} />
                    </div>

                    <div className="absolute bottom-4 left-4">
                       <div className="bg-black/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-2xl">
                          <div className={`w-2.5 h-2.5 rounded-full ${mod.dotColor} shadow-[0_0_10px_currentColor]`} />
                          <span className={`text-[10px] font-black uppercase tracking-[0.15em] ${mod.statusColor}`}>
                            {mod.status}
                          </span>
                       </div>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-black uppercase italic tracking-tighter group-hover:text-[#E11D48] transition-colors leading-none">{mod.title}</h3>
                      <div className="text-[9px] font-bold text-gray-400 border border-white/10 px-2 py-0.5 rounded-full uppercase tracking-tighter bg-white/5">
                        {mod.badge}
                      </div>
                    </div>
                    
                    <p className="text-[11px] text-gray-400 font-medium leading-relaxed mb-8 flex-1 italic opacity-80 group-hover:opacity-100 transition-opacity">
                      {mod.description}
                    </p>

                    <div className="flex gap-2 mt-auto">
                      <button 
                        onClick={() => mod.id !== 'analises' && setCurrentModule(mod.id)}
                        disabled={mod.id === 'analises'}
                        className={`flex-1 py-4 rounded-xl text-[11px] font-black uppercase tracking-[0.2em] transition-all italic border shadow-sm ${
                          mod.id === 'analises' 
                          ? 'opacity-20 cursor-not-allowed border-white/5 text-gray-500' 
                          : 'bg-white text-black hover:bg-[#E11D48] hover:text-white border-white/10 hover:border-[#E11D48] active:scale-95'
                        }`}
                      >
                        {mod.status === 'Ativo' ? 'EDITAR' : 'CONFIGURAR'}
                      </button>
                      <button className="px-4 py-4 bg-white/5 border border-white/5 rounded-xl hover:bg-[#E11D48]/10 hover:border-[#E11D48]/30 transition-all text-white/40 hover:text-[#E11D48]">
                        {mod.id === 'professores' ? <Trophy size={18} /> : <ExternalLink size={18} />}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#070708] text-white font-sans selection:bg-[#E11D48]">
      <header className="border-b border-white/5 bg-[#070708]/80 backdrop-blur-md sticky top-0 z-30 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#E11D48] rounded flex items-center justify-center -skew-x-12 shadow-[0_0_20px_rgba(225,29,72,0.5)]">
              <Settings className="text-white" size={18} />
            </div>
            <h1 className="text-xl font-black italic tracking-tighter uppercase">Nexora <span className="text-[#E11D48]">Hub</span></h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end mr-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-white italic">Mestre Admin</span>
              <span className="text-[9px] font-bold text-[#E11D48] uppercase tracking-tighter">Alliance BJJ</span>
            </div>
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[12px] font-black italic hover:border-[#E11D48] transition-all cursor-pointer shadow-md overflow-hidden">
               <img src="https://ui-avatars.com/api/?name=MA&background=E11D48&color=fff" alt="Avatar" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {renderContent()}
      </main>
    </div>
  );
}

const ProfessoresSection = ({ onBack }) => (
  <div className="animate-in slide-in-from-bottom-4 duration-500">
    <button onClick={onBack} className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-8 group">
      <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
      <span className="text-[10px] font-black uppercase tracking-widest italic">Voltar ao Painel</span>
    </button>
    <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/5 italic">
      <Users className="mx-auto mb-4 text-[#E11D48]" size={48} />
      <h2 className="text-2xl font-black uppercase tracking-tighter">Módulo de Professores</h2>
      <p className="text-gray-500 mt-2 uppercase text-[10px] font-bold tracking-widest">Interface de listagem e permissões</p>
    </div>
  </div>
);

const GraduacoesSection = ({ onBack }) => (
  <div className="animate-in slide-in-from-bottom-4 duration-500">
    <button onClick={onBack} className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-8 group">
      <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
      <span className="text-[10px] font-black uppercase tracking-widest italic">Voltar ao Painel</span>
    </button>
    <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/5 italic">
      <Layers className="mx-auto mb-4 text-[#E11D48]" size={48} />
      <h2 className="text-2xl font-black uppercase tracking-tighter">Módulo de Graduações</h2>
      <p className="text-gray-500 mt-2 uppercase text-[10px] font-bold tracking-widest">Configuração de regras de mérito</p>
    </div>
  </div>
);
