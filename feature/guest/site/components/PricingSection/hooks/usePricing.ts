export function usePricing() {
  const plans = [
    {
      tier: 'White Belt',
      price: '69',
      description:
        'Ideal para professores que estão começando o seu próprio horário.',
      features: [
        'Até 40 alunos',
        'Gestão de graduação',
        'Check-in simples',
        'Suporte via email',
      ],
    },
    {
      tier: 'Black Belt',
      price: '129',
      featured: true,
      description:
        'O controle completo para academias profissionais que querem crescer.',
      features: [
        'Alunos ilimitados',
        'Financeiro automatizado',
        'Módulo NoGi separado',
        'Ranking da academia',
        'Suporte prioritário WhatsApp',
        'Relatórios de performance',
      ],
    },
    {
      tier: 'Gracie Master',
      price: '249',
      description:
        'Para redes de academias ou filiais que buscam padronização total.',
      features: [
        'Até 5 unidades',
        'Dashboard centralizado',
        'Migração de dados grátis',
        'Treinamento de equipe',
        'API para site próprio',
      ],
    },
  ]

  return { plans }
}
