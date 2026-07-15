import * as z from 'zod';

export const editProfileSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  academy_name: z.string().min(2, 'Informe o nome da academia').optional().or(z.literal('')),
  phone: z.string().optional(),
  birth_date: z.string().optional(),
  gender: z.string().optional(),
  cpf: z.string().optional(),
  address: z.string().optional(),
  belt: z.string().optional(),
  degree: z.string().optional(),
  last_graduation: z.string().optional(),
});

export type EditProfileFormData = z.infer<typeof editProfileSchema>;
