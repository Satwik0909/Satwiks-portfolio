'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ChevronDown, ExternalLink } from 'lucide-react';
import { useState } from 'react';

type Project = {
  slug: string;
  index: string;
  title: string;
  category: string;
  url: string;
  urlLabel: string;
  scope: string;
  status: string;
  focus: string;
  description: string;
  stack: string[];
  preview: string[];
  caseStudy: {
    problem: string;
    gap: string;
    build: string;
    deploy: string;
    outcome: string;
  };
};

const projects: Project[] = [
  {
    slug: 'sajres-nas',
    index: '01',
    title: "Sajre's NAS",
    category: 'Live product / National art competition',
    url: 'https://sajrenas.com/',
    urlLabel: 'sajrenas.com',
    scope: 'Backend architecture + API',
    status: 'live / public',
    focus: 'Multi-role competition workflows',
    description: 'A national-level online drawing and painting competition where students, judges, institutions, and admins each get workflows built for their role. The backend covers secure auth, enrollment and fees, artwork submission, AI-assisted validation, voting, certificates, event updates, WhatsApp notifications, and referrals.',
    stack: ['Django', 'DRF', 'PostgreSQL', 'JWT', 'WhatsApp', 'AI validation', 'CI/CD', 'VPS'],
    preview: ['students', 'judges', 'admins'],
    caseStudy: {
      problem: 'Organizers needed one dependable system for a national competition instead of coordinating enrollment, fees, submissions, judging, and communication as separate workflows.',
      gap: 'The precise manual process and baseline metrics are not published here until they are confirmed with the team.',
      build: 'A multi-role portal with authenticated dashboards, competition workflows, progression, validation, voting, certificates, and communication integrations.',
      deploy: 'VPS deployment with CI/CD, API testing, PostgreSQL tuning, and production monitoring.',
      outcome: 'The product is live at sajrenas.com. Usage and time-saved metrics are intentionally not invented.',
    },
  },
  {
    slug: 'edusoft',
    index: '02',
    title: 'EduSoft',
    category: 'Live product / School ERP SaaS',
    url: 'https://sajreedutech.com/edusoft',
    urlLabel: 'sajreedutech.com/edusoft',
    scope: 'Backend systems + tenant workflows',
    status: 'live / public',
    focus: 'School operations in one system',
    description: 'A school-management SaaS for institutions across Karnataka, bringing admissions, attendance, fees, examinations, staff, communication, and transport into one platform. The work is framed around tenant-aware backend workflows, secure access, and APIs that keep daily school operations moving.',
    stack: ['Django', 'DRF', 'PostgreSQL', 'REST APIs', 'SaaS', 'RBAC'],
    preview: ['admissions', 'attendance', 'fees'],
    caseStudy: {
      problem: 'Schools need the operational picture in one place instead of splitting admissions, attendance, fees, exams, and communication across disconnected tools.',
      gap: 'Exact modules owned and the before-state are kept deliberately narrow until the project scope is confirmed.',
      build: 'A school ERP foundation for role-aware workflows, structured APIs, and institution-level data boundaries.',
      deploy: 'Production-focused API testing, CI/CD, PostgreSQL, and VPS operations are part of the delivery context.',
      outcome: 'The Sajre EduSoft product is live at the linked address; no unverified adoption metric is shown.',
    },
  },
  {
    slug: 'sirorder',
    index: '03',
    title: 'SirOrder',
    category: 'Live product / Restaurant software',
    url: 'https://sirorder.com/',
    urlLabel: 'sirorder.com',
    scope: 'Product delivery',
    status: 'live / public',
    focus: 'Restaurant workflow, details to confirm',
    description: 'SirOrder is a live product for the restaurant space. The menu → order → kitchen → billing flow and my exact contribution are kept intentionally precise-to-confirm rather than guessed from the public URL.',
    stack: ['SaaS', 'REST APIs', 'Operations', 'Production'],
    preview: ['menu', 'order', 'operations'],
    caseStudy: {
      problem: 'Restaurant teams need software that makes the path from customer intent to an actionable order clear and dependable.',
      gap: 'The public product details are not reliable enough to describe the exact workflow without confirmation.',
      build: 'The case study will be expanded after the owner-facing flow and my contribution are confirmed.',
      deploy: 'Live at sirorder.com; deployment details are not claimed here without a verified project brief.',
      outcome: 'A live link is available. Product and usage outcomes remain to be documented honestly.',
    },
  },
];

function ProjectPreview({ project }: { project: Project }) {
  return (
    <div className={`work-browser work-browser--${project.slug}`} aria-hidden="true">
      <div className="work-browser__bar">
        <span className="work-browser__dots"><i /><i /><i /></span>
        <span className="work-browser__url">{project.urlLabel}</span>
        <span className="work-browser__secure">● live</span>
      </div>
      <div className="work-browser__canvas">
        <div className="work-browser__header">
          <span className="work-browser__mark">{project.title.slice(0, 2).toUpperCase()}</span>
          <span className="work-browser__rule" />
          <span className="work-browser__menu">•••</span>
        </div>
        <div className="work-browser__nodes">
          {project.preview.map((label, index) => (
            <span key={label} className={`work-browser__node work-browser__node--${index + 1}`}>
              <i />{label}
            </span>
          ))}
        </div>
        <div className="work-browser__footer-line"><span /> <span /> <span /></div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [openProject, setOpenProject] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="projects" className="work-section section-padding" aria-labelledby="projects-title">
      <div className="container">
        <header className="section-head work-head">
          <div>
            <span className="eyebrow">selected_work / live_products</span>
            <h2 id="projects-title" className="section-heading">
              Systems built for
              <br />
              <em>the hard parts.</em>
            </h2>
          </div>
          <p className="section-intro">
            Three live products, one consistent approach: understand the operational gap, make the workflow legible, and ship the backend that keeps it moving.
          </p>
        </header>

        <ul className="work-grid" aria-label="Selected live projects">
          {projects.map((project, index) => {
            const isOpen = openProject === project.slug;
            const panelId = `${project.slug}-case-study`;

            return (
              <motion.li
                className="work-grid__item"
                key={project.slug}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={prefersReducedMotion ? { duration: 0 } : { delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <article className={`work-card${isOpen ? ' is-open' : ''}`}>
                  <div className="work-card__topline">
                    <span className="work-card__index">CASE / {project.index}</span>
                    <span>{project.category}</span>
                  </div>
                  <ProjectPreview project={project} />
                  <div className="work-card__content">
                    <div className="work-card__heading">
                      <div>
                        <p className="work-card__scope">{project.scope}</p>
                        <h3>{project.title}</h3>
                      </div>
                      <span className="work-card__status"><i />{project.status}</span>
                    </div>
                    <p className="work-card__description">{project.description}</p>
                    <dl className="work-card__meta">
                      <div><dt>Focus</dt><dd>{project.focus}</dd></div>
                      <div><dt>Stack</dt><dd>{project.stack.slice(0, 3).join(' · ')}</dd></div>
                    </dl>
                    <div className="work-card__footer">
                      <ul className="work-card__tags" aria-label={`${project.title} technologies`}>
                        {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
                      </ul>
                      <a className="work-card__visit" href={project.url} target="_blank" rel="noreferrer">
                        visit live <ExternalLink size={14} aria-hidden="true" />
                      </a>
                    </div>
                    <button
                      type="button"
                      className="work-card__case-button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenProject(isOpen ? null : project.slug)}
                    >
                      <span>{isOpen ? 'close case study' : 'open case study'}</span>
                      <ChevronDown size={15} aria-hidden="true" />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={panelId}
                          className="work-case-study"
                          initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
                          transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <div className="work-case-study__architecture" aria-label="Simplified architecture flow">
                            <span>users</span><i>→</i><span>API</span><i>→</i><span>data</span><i>→</i><span>outcome</span>
                          </div>
                          <dl className="work-case-study__facts">
                            <div><dt>Problem</dt><dd>{project.caseStudy.problem}</dd></div>
                            <div><dt>Gap</dt><dd>{project.caseStudy.gap}</dd></div>
                            <div><dt>Build</dt><dd>{project.caseStudy.build}</dd></div>
                            <div><dt>Deploy</dt><dd>{project.caseStudy.deploy}</dd></div>
                            <div><dt>Outcome</dt><dd>{project.caseStudy.outcome}</dd></div>
                          </dl>
                          <a className="work-case-study__link" href={project.url} target="_blank" rel="noreferrer">
                            open {project.urlLabel} <ArrowUpRight size={14} aria-hidden="true" />
                          </a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </article>
              </motion.li>
            );
          })}
        </ul>

        <footer className="work-footer">
          <span><i />All three links are live; metrics are shown only when verified.</span>
          <span>03 products / one approach</span>
        </footer>
      </div>
    </section>
  );
}
