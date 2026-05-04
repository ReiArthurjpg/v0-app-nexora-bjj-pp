import { TrendingUp, ShieldCheck, Clock, HeartPulse } from 'lucide-react'

export function useBenefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Aumento de Retenção',
      metric: '+45%',
      description:
        'Com o sistema de graduação automática, o aluno visualiza o progresso e sente-se motivado a não faltar aos treinos.',
    },
    {
      icon: ShieldCheck,
      title: 'Inadimplência Zero',
      metric: 'R$ 0',
      description:
        'Automação completa de cobranças recorrentes. O sistema bloqueia check-ins de alunos com pagamentos pendentes.',
    },
    {
      icon: Clock,
      title: 'Economia Semanal',
      metric: '10H',
      description:
        'Elimine planilhas manuais e o tempo gasto conferindo pagamentos ou quem deve subir de grau. Tudo em tempo real.',
    },
    {
      icon: HeartPulse,
      title: 'Saúde do Aluno',
      metric: '100%',
      description:
        'Histórico de lesões e anamnese integrados. Proteja seus atletas com termos de responsabilidade digitais.',
    },
  ]

  return { benefits }
}
