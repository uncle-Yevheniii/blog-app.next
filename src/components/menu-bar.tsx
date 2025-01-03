'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { Logo } from './logo';
import { UserNav } from './user-nav';

const navigationItems = [
  {
    title: 'Features',
    href: '/features',
  },
  {
    title: 'Pricing',
    href: '/pricing',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Contact',
    href: '/contact',
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
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <MobileNav />
            </SheetContent>
          </Sheet>
          <UserNav />
        </div>
      </div>
    </header>
  );
}

function MobileNav() {
  return (
    <div className="flex flex-col space-y-3 p-4">
      {navigationItems.map(item => (
        <Link
          key={item.title}
          href={item.href}
          className="text-muted-foreground hover:text-primary"
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
}
