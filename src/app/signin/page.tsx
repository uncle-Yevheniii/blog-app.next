import { SigninForm } from './signin-form';

export default function Page() {
  return (
    <div className="flex min-h-[calc(100vh-56.8px)] w-full items-center justify-center">
      <div className="w-full max-w-sm">
        <SigninForm />
      </div>
    </div>
  );
}
