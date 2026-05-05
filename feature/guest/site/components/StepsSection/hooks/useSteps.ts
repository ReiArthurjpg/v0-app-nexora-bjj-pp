import { UserPlus, LogIn, Sparkles } from 'lucide-react'

export function useSteps() {
  const steps = [
    {
      number: '01',
      icon: UserPlus,
      title: 'Registre-se',
      description:
        'Acesse a página inicial do sistema. Preencha o formulário de registro em menos de 3 minutos.',
    },
    {
      number: '02',
      icon: LogIn,
      title: 'Acesse',
      description:
        'Com as informações que acabou de preencher, autentique-se no sistema por qualquer dispositivo.',
    },
    {
      number: '03',
      icon: Sparkles,
      title: 'Surpreenda-se',
      description:
        'Com o sistema Nexora você irá aproveitar ao máximo os benefícios de uma gestão moderna.',
    },
  ]

  return { steps }
}
