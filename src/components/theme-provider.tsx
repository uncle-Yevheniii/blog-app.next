'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </body>
  );
}
