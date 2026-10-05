'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Check, CircleDashed } from 'lucide-react';
import { useMemo, useState } from 'react';

type SkillStatus = 'Shipped' | 'Working';
type Skill = { name: string; status: SkillStatus; proof: string };
type SkillCluster = { name: string; description: string; skills: Skill[] };

const clusters: SkillCluster[] = [
  {
    name: 'Core engineering',
    description: 'The foundations I use to turn a customer problem into a dependable service.',
    skills: [
      { name: 'Python', status: 'Shipped', proof: 'Primary backend language across production Django services.' },
      { name: 'TypeScript / JavaScript', status: 'Shipped', proof: 'React and full-stack delivery.' },
      { name: 'SQL + PostgreSQL', status: 'Shipped', proof: 'Data modeling, query optimization, and tenant-aware workflows.' },
      { name: 'REST API design', status: 'Shipped', proof: 'Versioned workflows, validation, pagination, and integrations.' },
      { name: 'Auth + RBAC', status: 'Shipped', proof: 'JWT, role boundaries, and least-privilege access.' },
      { name: 'Data integration', status: 'Working', proof: 'Webhooks, third-party APIs, and messy customer data.' },
    ],
  },
  {
    name: 'Systems + delivery',
    description: 'The operational layer between code that works and software that stays useful.',
    skills: [
      { name: 'Django / DRF', status: 'Shipped', proof: 'Production SaaS backends and multi-role platforms.' },
      { name: 'Node.js / Express', status: 'Shipped', proof: 'Full-stack and MERN project delivery.' },
      { name: 'API testing', status: 'Shipped', proof: 'Structured tests, Postman workflows, and permission-boundary checks.' },
      { name: 'GitHub Actions + CI/CD', status: 'Shipped', proof: 'Automated checks and VPS deployment workflows.' },
      { name: 'Nginx + VPS', status: 'Shipped', proof: 'Reverse proxy, deployment, and production operations.' },
      { name: 'Queues + observability', status: 'Working', proof: 'Next system-design layer: retries, traces, and operational feedback.' },
    ],
  },
  {
    name: 'Frontend + product',
    description: 'Interfaces that make complicated workflows easier for people to complete correctly.',
    skills: [
      { name: 'React + Next.js', status: 'Shipped', proof: 'Responsive interfaces and this App Router portfolio.' },
      { name: 'Tailwind + CSS', status: 'Shipped', proof: 'Responsive UI systems and interaction states.' },
      { name: 'Accessibility', status: 'Working', proof: 'Keyboard states, semantic content, focus management, and reduced motion.' },
      { name: 'Motion design', status: 'Shipped', proof: 'Framer Motion transitions that support hierarchy, not noise.' },
      { name: 'System design', status: 'Working', proof: 'Writing down trade-offs for multi-role SaaS and integrations.' },
    ],
  },
  {
    name: 'Applied AI',
    description: 'The FDE roadmap: ship useful automation, then make it measurable and safe.',
    skills: [
      { name: 'LLM APIs + structured output', status: 'Working', proof: 'Building toward reliable tool use and typed responses.' },
      { name: 'RAG + citations', status: 'Working', proof: 'Learning retrieval, grounding, and permission-aware context.' },
      { name: 'Agents + MCP', status: 'Working', proof: 'Exploring integrations that can act on customer systems safely.' },
      { name: 'Evals + guardrails', status: 'Working', proof: 'Golden datasets, refusal behavior, and regression checks.' },
      { name: 'Workflow automation', status: 'Working', proof: 'WhatsApp notifications, referrals, and repeatable communication flows.' },
    ],
  },
];

const statusOrder: SkillStatus[] = ['Shipped', 'Working'];

function StatusIcon({ status }: { status: SkillStatus }) {
  if (status === 'Shipped') return <Check size={13} aria-hidden="true" />;
  return <CircleDashed size={13} aria-hidden="true" />;
}

export default function SkillMap() {
  const [view, setView] = useState<'constellation' | 'list'>('constellation');
  const [filter, setFilter] = useState<SkillStatus | 'All'>('All');
  const prefersReducedMotion = useReducedMotion();
  const visibleClusters = useMemo(() => clusters.map((cluster) => ({
    ...cluster,
    skills: filter === 'All' ? cluster.skills : cluster.skills.filter((skill) => skill.status === filter),
  })).filter((cluster) => cluster.skills.length > 0), [filter]);

  return (
    <section id="skills" className="skills-section section-padding" aria-labelledby="skills-title">
      <div className="container">
        <header className="section-head skills-head">
          <div>
            <span className="eyebrow">honest_skill_map</span>
            <h2 id="skills-title" className="section-heading">
              Shipped, working,
              <br />
              <em>still working.</em>
            </h2>
          </div>
          <p className="section-intro">
            A roadmap and a showcase. The label is part of the proof: shipped means I can point to real work; working means I am actively building in this area.
          </p>
        </header>

        <div className="skills-toolbar" aria-label="Skill map controls">
          <div className="skills-filters" role="group" aria-label="Filter skills by status">
            {(['All', ...statusOrder] as const).map((status) => (
              <button
                type="button"
                key={status}
                className={`skills-filter${filter === status ? ' is-active' : ''}`}
                aria-pressed={filter === status}
                onClick={() => setFilter(status)}
              >
                {status}
              </button>
            ))}
          </div>
          <div className="skills-view-toggle" role="group" aria-label="Skill map view">
            <button type="button" className={view === 'constellation' ? 'is-active' : ''} aria-pressed={view === 'constellation'} onClick={() => setView('constellation')}>constellation</button>
            <button type="button" className={view === 'list' ? 'is-active' : ''} aria-pressed={view === 'list'} onClick={() => setView('list')}>accessible list</button>
          </div>
        </div>

        <div className={`skills-map skills-map--${view}`}>
          {visibleClusters.map((cluster, clusterIndex) => (
            <motion.article
              className="skill-cluster"
              key={cluster.name}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.16 }}
              transition={{ delay: clusterIndex * 0.06, duration: 0.5 }}
            >
              <div className="skill-cluster__heading">
                <span className="skill-cluster__index">0{clusterIndex + 1}</span>
                <div>
                  <h3>{cluster.name}</h3>
                  <p>{cluster.description}</p>
                </div>
              </div>
              <ul className="skill-nodes">
                {cluster.skills.map((skill) => (
                  <li className={`skill-node skill-node--${skill.status.toLowerCase()}`} key={skill.name}>
                    <div className="skill-node__topline">
                      <span className="skill-node__name">{skill.name}</span>
                      <span className="skill-status"><StatusIcon status={skill.status} />{skill.status}</span>
                    </div>
                    <p>{skill.proof}</p>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
