<p align="center">
  <strong>⚡ NEXORA BJJ</strong>
</p>

<p align="center">
  O único sistema de gestão desenhado exclusivamente para a rotina do Jiu-Jitsu.
</p>

---

## 🥋 O que é o Nexora BJJ?

**Nexora BJJ** é uma plataforma web de gestão completa para academias de Jiu-Jitsu Brasileiro (Gi e NoGi). Desenvolvida para resolver a desorganização que impede academias de crescerem, o sistema permite que mestres e professores foquem no tatame enquanto a tecnologia cuida do administrativo.

> _"O tatame quer ordem. A Nexora entrega."_

### O problema que resolvemos

Donos de academias de Jiu-Jitsu perdem em média **10 horas por semana** com tarefas administrativas manuais: planilhas de controle de alunos, conferência de pagamentos, registro de graduações, controle de presença e acompanhamento de evolução técnica. O Nexora automatiza tudo isso em uma interface moderna, intuitiva e acessível de qualquer dispositivo.

---

## ✨ Funcionalidades Principais

### 📋 Gestão de Alunos
- Ficha técnica completa de cada atleta
- Controle de faixa e graus (da branca à preta)
- Status de matrícula (Ativo / Inativo)
- Histórico de lesões e anamnese integrados
- Termos de responsabilidade assinados digitalmente

### 🎓 Graduação Automática
- Configuração de tempo de carência e número de aulas por faixa
- Notificação automática de alunos prontos para promoção
- Contagem inteligente de carência
- Sugestão de promoção baseada em regras configuráveis

### 📲 Presença Inteligente
- Check-in via QR Code
- Chamada rápida com métricas separadas por modalidade (Gi / NoGi)
- Histórico completo de treinos e frequência

### 🏆 Ranking e Engajamento
- Ranking interno de assiduidade da academia
- Módulo de avaliação técnica individual por professor
- Feedback de pontos de melhoria por atleta

### 🏫 Turmas Segmentadas
- Separação por nível: Iniciantes, Avançados, Infantil e Competição
- Gestão de horários focada na grade de aulas

### 📊 Dashboard do Mestre
- Visão geral de alunos ativos no tatame
- Evolução de faturamento
- Previsão de graduações
- Relatórios de performance

---

## 💰 Planos

| Plano | Preço | Ideal para |
|---|---|---|
| **White Belt** | R$ 69/mês | Professores começando seu próprio horário (até 40 alunos) |
| **Black Belt** | R$ 129/mês | Academias profissionais que querem crescer (alunos ilimitados) |
| **Gracie Master** | R$ 249/mês | Redes de academias ou filiais (até 5 unidades) |

> Sem fidelidade. Cancele quando quiser. Garantia de 7 dias ou seu dinheiro de volta.

---

## 🛠️ Stack Tecnológica

| Tecnologia | Uso |
|---|---|
| [Next.js 14](https://nextjs.org) | Framework React com SSR/SSG |
| [React 18](https://react.dev) | Biblioteca de UI |
| [TypeScript](https://www.typescriptlang.org) | Tipagem estática |
| [Tailwind CSS 4](https://tailwindcss.com) | Estilização utility-first |
| [Framer Motion](https://www.framer.com/motion) | Animações e transições |
| [Radix UI](https://www.radix-ui.com) | Componentes acessíveis e headless |
| [Lucide React](https://lucide.dev) | Biblioteca de ícones |
| [Recharts](https://recharts.org) | Gráficos e visualização de dados |
| [Zod](https://zod.dev) | Validação de schemas |
| [React Hook Form](https://react-hook-form.com) | Gerenciamento de formulários |

---

## 📁 Estrutura do Projeto

O projeto segue a arquitetura **Feature Driven Development (FDD)**:

```
nexora-bjj/
├── app/                        # Rotas do Next.js (App Router)
│   ├── page.tsx                # Landing page (ponto de entrada)
│   ├── layout.tsx              # Layout raiz
│   ├── login/                  # Autenticação
│   ├── hub/                    # Dashboard principal
│   ├── alunos/                 # Gestão de alunos
│   ├── aulas/                  # Gestão de aulas
│   ├── professores/            # Gestão de professores
│   └── profile/                # Perfil do usuário
├── feature/                    # Módulos por domínio (FDD)
│   ├── guest/                  # Funcionalidades públicas
│   │   └── site/               # Landing page
│   │       ├── components/     # Componentes da LP
│   │       ├── controller/     # Controller da LP
│   │       └── hooks/          # Hooks customizados
│   └── system/                 # Funcionalidades do sistema
├── components/                 # Componentes compartilhados (shadcn/ui)
├── hooks/                      # Hooks globais
├── lib/                        # Utilitários e helpers
├── styles/                     # Estilos globais
└── public/                     # Assets estáticos
```

---

## 🚀 Getting Started

### Pré-requisitos

- [Node.js](https://nodejs.org) 18+
- npm, yarn ou pnpm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/ReiArthurjpg/v0-app-nexora-bjj-pp.git

# Entre no diretório
cd v0-app-nexora-bjj-pp

# Instale as dependências
npm install
```

### Rodando o servidor de desenvolvimento

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

### Build de produção

```bash
npm run build
npm start
```

---

## 📚 Links Úteis

- [Documentação do Next.js](https://nextjs.org/docs) — Funcionalidades e API do Next.js
- [Aprenda Next.js](https://nextjs.org/learn) — Tutorial interativo

---

<p align="center">
  Feito com 🔴 para a comunidade do Jiu-Jitsu
</p>
