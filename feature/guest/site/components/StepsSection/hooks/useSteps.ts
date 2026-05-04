import { UserPlus, LogIn, Sparkles } from 'lucide-react'

export function useSteps() {
  const steps = [
    {
      number: '1',
      icon: UserPlus,
      title: 'Registre-se',
      description:
        'Acesse a página inicial do sistema. Preencha o formulário de registro em menos de 3 minutos.',
    },
    {
      number: '2',
      icon: LogIn,
      title: 'Acesse',
      description:
        'Com as informações que acabou de preencher, autentique-se no sistema por qualquer dispositivo.',
    },
    {
      number: '3',
      icon: Sparkles,
      title: 'Surpreenda-se',
      description:
        'Com o Guia BJJ Control você irá aproveitar ao máximo os benefícios do sistema.',
    },
  ]

  return { steps }
}
