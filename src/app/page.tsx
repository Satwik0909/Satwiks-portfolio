'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Process from '@/components/Process';
import Services from '@/components/Services';
import Achievements from '@/components/Achievements';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import ResumeModal from '@/components/ResumeModal';

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <main>
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />
      <Hero onOpenResume={() => setIsResumeOpen(true)} />
      <Projects />
      <Process />
      <Services />
      <Achievements />
      <FAQ />
      <Contact />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </main>
  );
}
