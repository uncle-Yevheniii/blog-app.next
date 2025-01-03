'use client';

import { ThemeButton } from './theme-button';
import { RepoLink } from './repo-link';
import { cn } from '@/lib/utils';
import { Logo } from './logo';
import {
  Separator,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui';

const navigationItems = [
  {
    title: 'Sign In',
    href: '/signin',
  },
  {
    title: 'Sign Up',
    href: '/signup',
  },
];

export function MenuBar() {
  return (
    <header className="px-5 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Logo />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map(item => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuLink
                      href={item.href}
                      className={cn(
                        'group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50',
                      )}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          <Separator className="h-6" orientation="vertical" />

          <div className="flex items-center space-x-2">
            <ThemeButton />
            <RepoLink />
          </div>
        </div>
      </div>
    </header>
  );
}
