import type { Metadata } from 'next';
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google';
import './globals.css';
import './portfolio.css';
import 'lenis/dist/lenis.css';
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

const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://itssatwik.in'),
  title: 'Satwik Kukadolli — Forward-Deployed × GTM Engineer',
  description:
    'Satwik Kukadolli turns customer and revenue friction into production systems through forward-deployed engineering, backend architecture, and GTM automation.',
  keywords: [
    'Satwik Kukadolli',
    'Forward Deployed Engineer',
    'GTM Engineer',
    'GTM Engineering',
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
    title: 'Satwik Kukadolli — Forward-Deployed × GTM Engineer',
    description:
      'I turn customer friction into production systems that ship, scale, and create growth.',
    url: 'https://itssatwik.in',
    siteName: 'Satwik Kukadolli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Satwik Kukadolli — Forward-Deployed × GTM Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Satwik Kukadolli — Forward-Deployed × GTM Engineer',
    description:
      'Customer discovery, production engineering, and GTM automation for real businesses.',
    images: ['/og-image.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Satwik Kukadolli',
  url: 'https://itssatwik.in',
  jobTitle: 'Forward-Deployed and GTM Engineer',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dharwad',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://www.linkedin.com/in/satwikkukadolli',
    'https://github.com/Satwik0909',
  ],
  knowsAbout: ['Forward-Deployed Engineering', 'GTM Engineering', 'Django', 'Python', 'REST APIs', 'PostgreSQL', 'React', 'Workflow Automation', 'SaaS'],
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
      <body className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
