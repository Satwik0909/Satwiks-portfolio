import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Satwik Kukadolli — Forward Deployed Engineer',
  description:
    'Satwik Kukadolli is a forward-deployed engineer building backend systems, AI-ready automations, and full-stack SaaS products for real businesses.',
  keywords: ['Forward Deployed Engineer', 'Django', 'Python', 'AI automation', 'SaaS', 'REST APIs', 'PostgreSQL', 'India'],
  authors: [{ name: 'Satwik Kukadolli' }],
  openGraph: {
    title: 'Satwik Kukadolli — Forward Deployed Engineer',
    description: 'I find the gap between what a business needs and what its software does, then I ship the fix.',
    type: 'website',
    siteName: 'Satwik Kukadolli / FDE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Satwik Kukadolli — Forward Deployed Engineer',
    description: 'Backend systems, AI-ready automations, and full-stack delivery for real businesses.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
