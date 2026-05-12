import * as z from 'zod';

export const signupSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('E-mail profissional inválido'),
  academyName: z.string().min(2, 'Informe o nome da sua academia'),
  phone: z.string().optional(),
  birthDate: z.string().optional(),
  gender: z.string().optional(),
  cpf: z.string().optional(),
  address: z.string().optional(),
  belt: z.string().optional(),
  degree: z.string().optional(),
  lastGraduation: z.string().optional(),
  password: z.string()
    .min(8, 'A senha deve ter pelo menos 8 caracteres')
    .regex(/[a-z]/, 'Deve conter ao menos uma letra minúscula')
    .regex(/[A-Z]/, 'Deve conter ao menos uma letra maiúscula')
    .regex(/\d/, 'Deve conter ao menos um número')
    .regex(/[^a-zA-Z0-9\s]/, 'Deve conter ao menos um símbolo'),
  confirmPassword: z.string().min(1, 'Confirmação de senha é obrigatória'),
  terms: z.boolean().refine(val => val === true, {
    message: 'Você deve aceitar os termos para continuar',
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ["confirmPassword"],
});

export type SignupFormData = z.infer<typeof signupSchema>;
