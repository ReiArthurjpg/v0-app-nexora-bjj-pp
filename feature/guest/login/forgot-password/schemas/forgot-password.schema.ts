import * as z from 'zod';

export const forgotPasswordSchema = z.object({
  email: z.string().email('E-mail profissional inválido'),
});

export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
