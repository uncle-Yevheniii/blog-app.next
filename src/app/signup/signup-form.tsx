import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

export function SignupForm() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Join Us</CardTitle>
          <CardDescription>Enter your email below to authorize to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="text">Username</Label>
                <Input id="text" type="text" placeholder="Example Name" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="name@example.com" required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" placeholder="Your strong password" required />
              </div>
              <Button type="submit" className="w-full">
                Create account
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{' '}
              <Link href="/signin" className="underline underline-offset-4">
                Log In
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
