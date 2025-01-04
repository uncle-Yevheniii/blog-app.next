'use client';

import { ThemeButton } from './theme-button';
import { RepoLink } from './repo-link';
import { Logo } from './logo';
import { Separator, Button } from '@/components/ui';
import { Home, Search, Heart } from 'lucide-react';

export function MenuBar() {
  return (
    <header className="px-5 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Logo />
        <div className="flex-1">
          <nav className="flex items-center px-4">
            <div className="container mx-auto flex items-center justify-between">
              {/* Placeholder for potential left-side content */}
              <div className="w-24"></div>

              {/* Main Navigation */}
              <div className="flex items-center gap-8">
                <button className="inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  <Home className="h-[1.2rem] w-[1.2rem]" />
                </button>
                <button className="inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  <Search className="h-[1.2rem] w-[1.2rem]" />
                </button>
                <button className="inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  <Heart className="h-[1.2rem] w-[1.2rem]" />
                </button>
              </div>

              {/* Login Button */}
              <div className="w-32 flex justify-end">
                <Button
                  variant="default"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Sign In
                </Button>
              </div>
            </div>
          </nav>
        </div>
        <Separator className="h-6" orientation="vertical" />

        <div className="flex items-center space-x-2 px-4">
          <ThemeButton />
          <RepoLink />
        </div>
      </div>
    </header>
  );
}
