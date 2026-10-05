import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@vercel/analytics/react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://itssatwik.in'),
  title: 'Satwik Kukadolli — Forward Deployed Engineer',
  description:
    'Satwik Kukadolli is a forward-deployed engineer building backend systems, AI-ready automations, and full-stack SaaS products for real businesses.',
  keywords: [
    'Satwik Kukadolli',
    'Forward Deployed Engineer',
    'Django',
    'Python',
    'AI automation',
    'SaaS',
    'REST APIs',
    'PostgreSQL',
    'Full Stack Developer',
    'India',
  ],
  authors: [{ name: 'Satwik Kukadolli' }],
  alternates: {
    canonical: 'https://itssatwik.in',
  },
  openGraph: {
    title: 'Satwik Kukadolli — Forward Deployed Engineer',
    description:
      'I find the gap between what a business needs and what its software does, then I ship the fix.',
    url: 'https://itssatwik.in',
    siteName: 'Satwik Kukadolli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Satwik Kukadolli — Forward Deployed Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Satwik Kukadolli — Forward Deployed Engineer',
    description:
      'Backend systems, AI-ready automations, and full-stack delivery for real businesses.',
    images: ['/og-image.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Satwik Kukadolli',
  url: 'https://itssatwik.in',
  jobTitle: 'Forward Deployed Engineer',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dharwad',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://www.linkedin.com/in/satwikkukadolli',
    'https://github.com/Satwik0909',
  ],
  knowsAbout: ['Django', 'Python', 'REST APIs', 'PostgreSQL', 'React', 'AI automation', 'SaaS'],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
