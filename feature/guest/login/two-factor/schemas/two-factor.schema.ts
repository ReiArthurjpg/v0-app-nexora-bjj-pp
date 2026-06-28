import * as z from 'zod';

export const twoFactorSchema = z.object({
  code: z
    .string()
    .min(6, 'O código deve ter 6 dígitos')
    .max(6, 'O código deve ter 6 dígitos')
    .regex(/^\d+$/, 'O código deve conter apenas números'),
});

export type TwoFactorFormData = z.infer<typeof twoFactorSchema>;
