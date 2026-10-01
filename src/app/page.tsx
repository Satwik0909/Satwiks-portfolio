'use client';

import { useState } from 'react';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import GitHubFeed from '@/components/GitHubFeed';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import PortfolioDemo from '@/components/PortfolioDemo';
import Process from '@/components/Process';
import Projects from '@/components/Projects';
import ResumeModal from '@/components/ResumeModal';
import SkillMap from '@/components/SkillMap';

const portfolioStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Satwik Kukadolli',
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

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioStructuredData) }} />
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <Process />
        <Projects />
        <Experience />
        <SkillMap />
        <PortfolioDemo />
        <GitHubFeed />
        <Contact />
      </main>
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}
