'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
  stack: string[];
  badges?: string[];
};

const experiences: ExperienceEntry[] = [
  {
    company: 'Sajre Edutech Private Limited',
    role: 'Software Developer',
    period: 'Jan 2026 – Apr 2026',
    location: 'Dharwad, Karnataka · On-site',
    summary: 'Owned backend architecture, API design, and production reliability for a nationally accessible SaaS platform from design through deployment.',
    bullets: [
      'Built scalable services with Django and Django REST Framework with a focus on performance, security, and maintainability.',
      'Designed REST APIs and backend workflows serving real users across web and mobile.',
      'Improved reliability through structured API testing, CI/CD pipelines, and monitoring.',
      'Worked directly with clients and internal stakeholders to turn business requirements into production-ready solutions.',
      'Prioritized scalability, automation, and clean system design over short-term fixes.',
    ],
    stack: ['Django', 'DRF', 'PostgreSQL', 'REST', 'CI/CD', 'API testing', 'VPS'],
    badges: ['Customer-facing', 'Owned in production'],
  },
  {
    company: 'Sajre Edutech Private Limited',
    role: 'Back End Developer',
    period: 'Dates to confirm',
    location: 'Dharwad, Karnataka · On-site',
    summary: 'Built the backend of a national-level art competition platform used by students, judges, institutions, and administrators.',
    bullets: [
      'Architected a multi-role portal with secure JWT authentication, role-based access, and dynamic dashboards.',
      'Implemented enrollment workflows, fee management, and a star-based progression system that tracks artist growth.',
      'Built artwork submission, AI-assisted validation, voting, certificate generation, and real-time event modules.',
      'Integrated WhatsApp notifications, a referral engine, and automated communication pipelines.',
      'Kept the platform stable with API testing, PostgreSQL query optimization, CI/CD automation, and server monitoring.',
    ],
    stack: ['Python', 'Django', 'DRF', 'PostgreSQL', 'JWT', 'CI/CD', 'VPS', 'Shell scripting'],
    badges: ['Customer-facing', 'Owned in production'],
  },
  {
    company: 'Ironhawks Technologies',
    role: 'Full-stack Developer',
    period: 'Dates to confirm',
    location: 'Full-time',
    summary: "Built and deployed the company's official website from scratch while helping the development team move toward clearer, faster delivery.",
    bullets: [
      'Led development through technical guidance and task allocation.',
      'Aligned the site with business goals and brand identity by working directly with stakeholders.',
      'Improved load times and user experience through focused performance optimization.',
      'Applied coding, security, and SEO practices for a maintainable public site.',
    ],
    stack: ['MERN', 'React', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    company: 'LetzStepIn Private Limited',
    role: 'Full-stack Developer · Internship',
    period: 'Nov 2024 – Mar 2025',
    location: 'Internship',
    summary: 'Built UI for a VR-enabled travel and real-estate platform in a collaborative Git and PR workflow.',
    bullets: [
      'Delivered responsive layouts and dynamic routes for cross-browser and cross-device support.',
      'Worked with Git, pull requests, daily standups, sprint retrospectives, and code reviews.',
    ],
    stack: ['React.js', 'Bootstrap', 'Git', 'Agile'],
  },
];

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="experience" className="experience-section section-padding" aria-labelledby="experience-title">
      <div className="container">
        <header className="section-head experience-head">
          <div>
            <span className="eyebrow">production_timeline</span>
            <h2 id="experience-title" className="section-heading">
              Close to the problem,
              <br />
              <em>responsible for the result.</em>
            </h2>
          </div>
          <p className="section-intro">
            FDE signals are not a job title. They are the pattern: listen to the customer, make the trade-off, ship the system, and own what happens next.
          </p>
        </header>

        <div className="experience-timeline">
          {experiences.map((experience, index) => {
            const isOpen = openIndex === index;
            const panelId = `experience-panel-${index}`;

            return (
              <motion.article
                className={`experience-entry${isOpen ? ' is-open' : ''}`}
                key={`${experience.company}-${experience.role}`}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.06, duration: 0.55 }}
              >
                <span className="experience-entry__marker" aria-hidden="true" />
                <button
                  type="button"
                  className="experience-entry__trigger"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="experience-entry__period">{experience.period}</span>
                  <span className="experience-entry__heading">
                    <span className="experience-entry__role">{experience.role}</span>
                    <span className="experience-entry__company">{experience.company}</span>
                  </span>
                  <span className="experience-entry__location">{experience.location}</span>
                  <ChevronDown className="experience-entry__icon" aria-hidden="true" />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      className="experience-entry__panel"
                      initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: prefersReducedMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="experience-entry__summary">{experience.summary}</p>
                      <ul className="experience-entry__bullets">
                        {experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                      </ul>
                      <div className="experience-entry__footer">
                        <div className="experience-badges" aria-label="Role signals">
                          {experience.badges?.map((badge) => <span key={badge} className="experience-badge">{badge}</span>)}
                        </div>
                        <ul className="experience-stack" aria-label={`${experience.role} technology stack`}>
                          {experience.stack.map((technology) => <li key={technology}>{technology}</li>)}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>

        <p className="experience-note"><span aria-hidden="true">↳</span> One Sajre role&apos;s exact LinkedIn dates are intentionally left for confirmation rather than inferred.</p>
      </div>
    </section>
  );
}
