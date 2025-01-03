'use client';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input, Button } from '@/components/ui';
import { SignInSchema } from '@/validation';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { z } from 'zod';
import { userSignIn } from '@/api/user-actions';

export function SigninForm() {
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: 'example@emai.com',
      password: 'Example_password123',
    },
  });

  function onSubmit(data: z.infer<typeof SignInSchema>) {
    userSignIn(data).then(res => {
      console.log(res);
    });
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} type="email" placeholder="This is your account email." />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input {...field} type="password" placeholder="This is your password." />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Log In
          </Button>

          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="underline underline-offset-4">
              Sign up
            </Link>
          </div>
        </form>
      </Form>
    </>
  );
}
