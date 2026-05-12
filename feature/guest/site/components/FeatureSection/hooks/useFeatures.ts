import {
  Layers,
  Calendar,
  History,
  Target,
  Medal,
  MessageSquare,
} from 'lucide-react'

export function useFeatures() {
  const features = [
    {
      icon: Layers,
      title: 'Graduação Automática',
      description:
        'Configure o tempo de carência e número de aulas para cada faixa. O sistema avisa quem está pronto para o próximo grau.',
    },
    {
      icon: Calendar,
      title: 'Presença Gi e NoGi',
      description:
        'Chamada rápida. Saiba quem está vestindo o quimono e quem está no NoGi com métricas separadas por modalidade.',
    },
    {
      icon: History,
      title: 'Histórico do Lutador',
      description:
        'O registro completo: da branca à preta. Lesões, competições e frequência histórica em um só lugar.',
    },
    {
      icon: Target,
      title: 'Turmas Segmentadas',
      description:
        'Separe turmas de Iniciantes, Avançados, Infantil e Competição. Gestão de horários focada na sua grade de aulas.',
    },
    {
      icon: Medal,
      title: 'Ranking da Academia',
      description:
        'Engaje seus alunos com um ranking interno de assiduidade. Quem mais treina, mais aparece no topo.',
    },
    {
      icon: MessageSquare,
      title: 'Avaliação Técnica',
      description:
        'Módulo de feedback onde o professor registra pontos de melhoria técnica de cada atleta individualmente.',
    },
  ]

  return { features }
}
