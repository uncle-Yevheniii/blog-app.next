import { Input, Label } from './ui';

export function AuthInput({ id, label, type = 'text', placeholder }) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>Email</Label>
      <Input id={id} type={type} placeholder={placeholder} required />
    </div>
  );
}
