'use client';

import { useState } from 'react';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Process from '@/components/Process';
import Projects from '@/components/Projects';
import ResumeModal from '@/components/ResumeModal';
import Services from '@/components/Services';

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <Projects />
        <Process />
        <Services />
        <Achievements />
        <FAQ />
        <Contact />
      </main>
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}
