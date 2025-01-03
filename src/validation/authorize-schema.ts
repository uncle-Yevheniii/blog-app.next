import { z } from 'zod';

export const SignInSchema = z.object({
  email: z.string().trim().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .trim()
    .min(8, {
      message: 'Password must be at least 8 characters long',
    })
    .max(30, {
      message: 'Password must be at most 30 characters long',
    })
    .regex(new RegExp(/[0-9]/), {
      message: 'Password must contain at least one number',
    })
    .regex(new RegExp(/[A-Z]/), {
      message: 'Password must contain at least one uppercase letter',
    })
    .regex(new RegExp(/[a-z]/), {
      message: 'Password must contain at least one lowercase letter',
    })
    .regex(new RegExp(/[^a-zA-Z0-9]/), {
      message: 'Password must contain at least one special character',
    }),
});

export const SignUpSchema = SignInSchema.extend({
  name: z
    .string()
    .trim()
    .min(3, {
      message: 'Name must be at least 3 characters long',
    })
    .max(50, {
      message: 'Name must be at most 50 characters long',
    }),
});
