import { Users, QrCode, Trophy, LayoutDashboard } from 'lucide-react'

export function useMVPFeatures() {
  const mvpBlocks = [
    {
      icon: Users,
      title: 'Gestão de Alunos',
      items: [
        'Ficha técnica completa',
        'Cor da faixa e graus',
        'Status (Ativo/Inativo)',
        'Controle de exames',
      ],
    },
    {
      icon: QrCode,
      title: 'Presença Inteligente',
      items: [
        'Check-in via QR Code',
        'Histórico de treinos',
        'Frequência por quimono/NoGi',
      ],
    },
    {
      icon: Trophy,
      title: 'Promoção de Faixa',
      items: [
        'Regras por n° de aulas',
        'Contagem de carência',
        'Sugestão de promoção',
      ],
    },
    {
      icon: LayoutDashboard,
      title: 'Dashboard do Mestre',
      items: [
        'Alunos no tatame',
        'Evolução do faturamento',
        'Previsão de graduações',
      ],
    },
  ]

  return { mvpBlocks }
}
