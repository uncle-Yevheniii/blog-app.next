'use client';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input, Button } from '@/components/ui';
import { SignUpSchema } from '@/validation';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { z } from 'zod';

export function SignupForm() {
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  function onSubmit(data: z.infer<typeof SignUpSchema>) {
    console.log(data);
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="This is your public display name." />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
            Create account
          </Button>

          <div className="mt-4 text-center text-sm">
            Already have an account?{' '}
            <Link href="/signin" className="underline underline-offset-4">
              Log In
            </Link>
          </div>
        </form>
      </Form>
    </>
  );
}
