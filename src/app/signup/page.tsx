import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui';
import { SignupForm } from './signup-form';

export default function Page() {
  return (
    <div className="w-full max-w-sm">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Join Us</CardTitle>
          <CardDescription>Enter your credentials below to register your account</CardDescription>
        </CardHeader>
        <CardContent>
          <SignupForm />
        </CardContent>
      </Card>
    </div>
  );
}
