import { ThemeProvider, MenuBar } from '@/components';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider disableTransitionOnChange defaultTheme="system" attribute="class" enableSystem>
        <MenuBar />

        <div className="flex min-h-[calc(100vh-56.8px)] w-full items-center justify-center ">
          {children}
        </div>
      </ThemeProvider>
    </html>
  );
}
