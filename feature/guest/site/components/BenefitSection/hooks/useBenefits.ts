import { TrendingUp, ShieldCheck, Clock, HeartPulse } from 'lucide-react'

export function useBenefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Aumento de Retenção',
      description:
        'Com o sistema de graduação automática, o aluno visualiza o progresso e sente-se motivado a não faltar aos treinos. Menos desistências, mais mensalidades.',
    },
    {
      icon: ShieldCheck,
      title: 'Inadimplência Zero',
      description:
        'Automação completa de cobranças recorrentes via cartão ou boleto. O sistema bloqueia o check-in de alunos com pagamentos pendentes automaticamente.',
    },
    {
      icon: Clock,
      title: 'Economia de 10h/semana',
      description:
        'Elimine planilhas manuais e o tempo gasto conferindo quem pagou ou quem deve subir de grau. Tudo é processado em tempo real.',
    },
    {
      icon: HeartPulse,
      title: 'Saúde do Aluno',
      description:
        'Histórico de lesões e anamnese integrados. Proteja seus atletas e a sua academia com termos de responsabilidade assinados digitalmente.',
    },
  ]

  return { benefits }
}
