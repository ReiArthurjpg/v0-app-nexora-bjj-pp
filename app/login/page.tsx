import { LoginForm } from '@/feature/guest/login/signin/components/login-form';
import { TestimonialsCarousel } from '@/feature/guest/login/signin/components/testimonials-carousel';
import { MetricBox } from '@/feature/guest/login/shared/components';
import { Users, Activity, Trophy } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#070708] text-white font-sans selection:bg-[#E11D48] selection:text-white flex overflow-hidden">
      <LoginForm />

      {/* COLUNA DIREITA: CONTEÚDO VISUAL / CARROSSEL */}
      <div className="hidden lg:flex lg:w-[55%] flex-col relative overflow-hidden bg-gradient-to-br from-[#070708] via-[#0F0F11] to-[#E11D48]/20 p-16 justify-center">
        {/* Efeito de luz ambiente */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E11D48]/20 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-none mb-4">
            Acesse sua <br />
            <span className="text-[#E11D48]">Plataforma Digital</span> <br />
            com segurança.
          </h2>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-16">
            Acesso rápido, confiável e seguro para o seu negócio.
          </p>

          <TestimonialsCarousel />

          {/* MÉTRICAS DE IMPACTO */}
          <div className="grid grid-cols-3 gap-6">
            <MetricBox icon={<Users size={18} />} val="10k+" label="Usuários ativos" />
            <MetricBox icon={<Activity size={18} />} val="2M+" label="Check-ins realizados" />
            <MetricBox icon={<Trophy size={18} />} val="98%" label="Alunos satisfeitos" />
          </div>
        </div>
      </div>
    </div>
  );
}
