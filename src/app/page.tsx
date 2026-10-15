'use client';

import { useState } from 'react';
import ResumeModal from '@/components/ResumeModal';
import MotionExperience from '@/components/MotionExperience';
import CapabilityStack from '@/components/redesign/CapabilityStack';
import CareerTimeline from '@/components/redesign/CareerTimeline';
import CaseStudies from '@/components/redesign/CaseStudies';
import ContactStage from '@/components/redesign/ContactStage';
import JourneyStory from '@/components/redesign/JourneyStory';
import OperatingSystem from '@/components/redesign/OperatingSystem';
import PortfolioHero from '@/components/redesign/PortfolioHero';
import PortfolioNav from '@/components/redesign/PortfolioNav';

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <MotionExperience>
      <PortfolioNav onOpenResume={() => setIsResumeOpen(true)} />
      <main className="portfolio-v2">
        <PortfolioHero onOpenResume={() => setIsResumeOpen(true)} />
        <JourneyStory />
        <OperatingSystem />
        <CaseStudies />
        <CapabilityStack />
        <CareerTimeline />
        <ContactStage />
      </main>
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </MotionExperience>
  );
}
