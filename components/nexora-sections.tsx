'use client'

import {
  TrendingUp,
  ShieldCheck,
  Clock,
  HeartPulse,
  Layers,
  Calendar,
  History,
  Target,
  Medal,
  MessageSquare,
  UserPlus,
  LogIn,
  Sparkles,
  Users,
  QrCode,
  Trophy,
  LayoutDashboard,
  Send,
  ChevronUp,
} from 'lucide-react'
import { BenefitCard, FeatureCard, StepCard, PriceCard, MVPBlock, DiffItem } from './nexora-cards'
import { useState } from 'react'

export function BenefitSection() {
  return (
    <section id="beneficios" className="py-32 px-6 bg-white text-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] mb-6">
              Menos tempo no PC, <br />
              <span className="text-[#E11D48]">Mais tempo no Tatame.</span>
            </h2>
            <p className="text-xl text-gray-600 font-medium">
              Desenvolvemos o Nexora para que você foque na técnica dos seus alunos enquanto o sistema cuida do resto.
            </p>
          </div>
          <div className="bg-[#070708] text-white p-6 rounded-lg -skew-x-6 hidden lg:block shadow-2xl">
            <p className="text-xs font-black uppercase tracking-[0.2em]">Resultado Médio</p>
            <p className="text-3xl font-black italic">+30% faturamento</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <BenefitCard
            icon={<TrendingUp size={40} />}
            title="Aumento de Retenção"
            description="Com o sistema de graduação automática, o aluno visualiza o progresso e sente-se motivado a não faltar aos treinos. Menos desistências, mais mensalidades."
          />
          <BenefitCard
            icon={<ShieldCheck size={40} />}
            title="Inadimplência Zero"
            description="Automação completa de cobranças recorrentes via cartão ou boleto. O sistema bloqueia o check-in de alunos com pagamentos pendentes automaticamente."
          />
          <BenefitCard
            icon={<Clock size={40} />}
            title="Economia de 10h/semana"
            description="Elimine planilhas manuais e o tempo gasto conferindo quem pagou ou quem deve subir de grau. Tudo é processado em tempo real."
          />
          <BenefitCard
            icon={<HeartPulse size={40} />}
            title="Saúde do Aluno"
            description="Histórico de lesões e anamnese integrados. Proteja seus atletas e a sua academia com termos de responsabilidade assinados digitalmente."
          />
        </div>
      </div>
    </section>
  )
}

export function FeatureSection() {
  return (
    <section id="funcionalidades" className="py-32 px-6 bg-[#070708] relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center lg:text-left">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4 text-white">
            Performance <span className="text-[#E11D48]">Suave.</span>
          </h2>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Ferramentas técnicas para academias de alto nível.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <FeatureCard icon={<Layers />} title="Graduação Automática" description="Configure o tempo de carência e número de aulas para cada faixa. O sistema avisa quem está pronto para o próximo grau." />
          <FeatureCard icon={<Calendar />} title="Presença Gi e NoGi" description="Chamada rápida. Saiba quem está vestindo o quimono e quem está no NoGi com métricas separadas por modalidade." />
          <FeatureCard icon={<History />} title="Histórico do Lutador" description="O registro completo: da branca à preta. Lesões, competições e frequência histórica em um só lugar." />
          <FeatureCard icon={<Target />} title="Turmas Segmentadas" description="Separe turmas de Iniciantes, Avançados, Infantil e Competição. Gestão de horários focada na sua grade de aulas." />
          <FeatureCard icon={<Medal />} title="Ranking da Academia" description="Engaje seus alunos com um ranking interno de assiduidade. Quem mais treina, mais aparece no topo." />
          <FeatureCard icon={<MessageSquare />} title="Avaliação Técnica" description="Módulo de feedback onde o professor registra pontos de melhoria técnica de cada atleta individualmente." />
        </div>
      </div>
    </section>
  )
}

export function StepsSection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-transparent to-[#0F0F11]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4 text-white">
            Use em menos de <span className="text-[#E11D48]">5 minutos.</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#E11D48] mx-auto -skew-x-12" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <StepCard number="1" icon={<UserPlus size={32} />} title="Registre-se" description="Acesse a página inicial do sistema. Preencha o formulário de registro em menos de 3 minutos." />
          <StepCard number="2" icon={<LogIn size={32} />} title="Acesse" description="Com as informações que acabou de preencher, autentique-se no sistema por qualquer dispositivo." />
          <StepCard number="3" icon={<Sparkles size={32} />} title="Surpreenda-se" description="Com o Guia BJJ Control você irá aproveitar ao máximo os benefícios do sistema." />
        </div>
      </div>
    </section>
  )
}

export function PricingSection() {
  return (
    <section id="precos" className="py-32 px-6 bg-[#070708] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#E11D48]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4 text-white">
            Investimento <span className="text-[#E11D48]">Justo.</span>
          </h2>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Preço de lançamento para os primeiros parceiros.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <PriceCard
            tier="White Belt"
            price="69"
            description="Ideal para professores que estão começando o seu próprio horário."
            features={['Até 40 alunos', 'Gestão de graduação', 'Check-in simples', 'Suporte via email']}
          />
          <PriceCard
            tier="Black Belt"
            price="129"
            featured={true}
            description="O controle completo para academias profissionais que querem crescer."
            features={[
              'Alunos ilimitados',
              'Financeiro automatizado',
              'Módulo NoGi separado',
              'Ranking da academia',
              'Suporte prioritário WhatsApp',
              'Relatórios de performance',
            ]}
          />
          <PriceCard
            tier="Gracie Master"
            price="249"
            description="Para redes de academias ou filiais que buscam padronização total."
            features={[
              'Até 5 unidades',
              'Dashboard centralizado',
              'Migração de dados grátis',
              'Treinamento de equipe',
              'API para site próprio',
            ]}
          />
        </div>

        <p className="text-center mt-12 text-gray-500 text-xs font-bold uppercase tracking-widest">
          Sem fidelidade. Cancele quando quiser. <span className="text-white">Garantia de 7 dias ou seu dinheiro de volta.</span>
        </p>
      </div>
    </section>
  )
}

export function MVPSection() {
  return (
    <section id="mvp" className="py-32 px-6 bg-[#0F0F11] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-none mb-6 text-white">
              Controle <br />
              do <span className="text-[#E11D48]">Tatame.</span>
            </h2>
            <p className="text-gray-600 font-medium mb-8">
              Desenvolvemos o Nexora para resolver a desorganização que impede sua academia de crescer. Gestão focada no que o mestre precisa.
            </p>
            <button className="bg-[#E11D48] text-white px-8 py-4 rounded font-black uppercase italic tracking-tighter hover:bg-white hover:text-black transition-colors">
              Experimentar Grátis
            </button>
          </div>

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            <MVPBlock icon={<Users />} title="Gestão de Alunos" items={['Ficha técnica completa', 'Cor da faixa e graus', 'Status (Ativo/Inativo)', 'Controle de exames']} />
            <MVPBlock icon={<QrCode />} title="Presença Inteligente" items={['Check-in via QR Code', 'Histórico de treinos', 'Frequência por quimono/NoGi']} />
            <MVPBlock icon={<Trophy />} title="Promoção de Faixa" items={['Regras por n° de aulas', 'Contagem de carência', 'Sugestão de promoção']} />
            <MVPBlock icon={<LayoutDashboard />} title="Dashboard do Mestre" items={['Alunos no tatame', 'Evolução do faturamento', 'Previsão de graduações']} />
          </div>
        </div>
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section id="contato" className="py-32 px-6 bg-white text-black relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">
          Pronto para <span className="text-[#E11D48]">Dominar?</span>
        </h2>
        <p className="text-gray-600 font-bold uppercase tracking-widest text-sm mb-12">Preencha os dados da sua academia e nossa equipe entrará em contato.</p>

        <form className="grid md:grid-cols-2 gap-4 text-left">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest ml-1">Nome do Responsável</label>
            <input type="text" className="w-full bg-gray-50 border-2 border-gray-100 p-4 rounded font-bold focus:border-[#E11D48] outline-none transition-all" placeholder="Ex: Mestre Hélio" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest ml-1">Nome da Academia</label>
            <input type="text" className="w-full bg-gray-50 border-2 border-gray-100 p-4 rounded font-bold focus:border-[#E11D48] outline-none transition-all" placeholder="Ex: Alliance Jiu-Jitsu" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest ml-1">WhatsApp de Contato</label>
            <input type="tel" className="w-full bg-gray-50 border-2 border-gray-100 p-4 rounded font-bold focus:border-[#E11D48] outline-none transition-all" placeholder="(00) 00000-0000" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest ml-1">Número de Alunos</label>
            <select className="w-full bg-gray-50 border-2 border-gray-100 p-4 rounded font-bold focus:border-[#E11D48] outline-none transition-all appearance-none cursor-pointer">
              <option>Até 50 alunos</option>
              <option>51 a 150 alunos</option>
              <option>Mais de 150 alunos</option>
            </select>
          </div>
          <div className="md:col-span-2 mt-4">
            <button className="w-full bg-[#E11D48] text-white py-5 rounded font-black text-xl uppercase italic tracking-tighter hover:bg-black transition-all flex items-center justify-center gap-3">
              Solicitar Demonstração <Send size={24} />
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export function DiffSection() {
  return (
    <section className="py-20 px-6 border-t border-white/5 bg-[#070708]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <DiffItem text="Feito 100% para Jiu-Jitsu e NoGi" />
          <DiffItem text="A evolução técnica em tempo real" />
          <DiffItem text="Terminologia oficial (IBJJF/CBJJ)" />
          <DiffItem text="Foco na retenção do seu aluno" />
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <footer className="py-20 px-6 border-t border-white/5 bg-black text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-center">
          <div>
            <span className="text-xl font-black italic tracking-tighter uppercase">
              NEXORA <span className="text-[#E11D48]">BJJ</span>
            </span>
            <p className="text-[10px] text-gray-600 mt-4 uppercase font-bold tracking-[0.2em]">O sistema definitivo para academias de arte suave.</p>
          </div>
          <div className="flex justify-center gap-8 text-[10px] font-black uppercase tracking-widest text-gray-500">
            <a href="#" className="hover:text-white transition-colors">
              Suporte
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacidade
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Central BJJ
            </a>
          </div>
          <div className="md:text-right">
            <p className="text-[10px] text-gray-700 font-bold uppercase tracking-[0.1em]">
              © 2024 Nexora Fight System. <br />
              Respeito e Gestão.
            </p>
          </div>
        </div>
      </footer>

      {/* BOTÃO SCROLL TO TOP */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-24 md:bottom-10 right-6 z-50 p-4 bg-[#E11D48] text-white rounded-full shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 group opacity-100 translate-y-0"
      >
        <ChevronUp size={24} strokeWidth={3} className="group-hover:-translate-y-1 transition-transform" />
      </button>

      {/* MOBILE CTA */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
        <button className="w-full bg-[#E11D48] py-5 rounded font-black text-lg uppercase italic shadow-2xl shadow-[#E11D48]/40 border-t border-white/20 text-white hover:bg-white hover:text-[#E11D48] transition-all">
          Acessar Meu Tatame
        </button>
      </div>
    </>
  )
}
