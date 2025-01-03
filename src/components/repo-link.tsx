import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import Link from 'next/link';

export function RepoLink() {
  return (
    <Button variant="link" size="icon" asChild>
      <Link
        href="https://github.com/uncle-Yevheniii/blog-next-app"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Git Hub Repository"
        className="inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
      >
        <Github className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Git Hub Repository</span>
      </Link>
    </Button>
  );
}
