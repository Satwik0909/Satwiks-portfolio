'use client';

import { ArrowUpRight, CornerDownLeft, Network, ShieldCheck } from 'lucide-react';
import { FormEvent, useState } from 'react';

type Answer = {
  keywords: string[];
  text: string;
  sources: { label: string; href: string }[];
};

const answers: Answer[] = [
  {
    keywords: ['art', 'competition', 'nas', 'sajre'],
    text: 'Satwik worked on the backend and API for Sajre’s NAS, a national-level online art competition. The platform brings together students, judges, institutions, and admins with enrollment, fees, artwork submission, AI-assisted validation, voting, certificates, event updates, WhatsApp notifications, and referrals.',
    sources: [{ label: 'Sajre’s NAS case study', href: '#sajres-nas-case-study' }, { label: 'Experience timeline', href: '#experience' }],
  },
  {
    keywords: ['stack', 'technology', 'tools', 'skill', 'learn'],
    text: 'The shipped core is Python, Django, Django REST Framework, PostgreSQL, JWT, React, TypeScript, API testing, CI/CD, VPS, and Git workflows. RAG, agents, MCP, evals, and guardrails are deliberately labeled Learning rather than presented as shipped client work.',
    sources: [{ label: 'FDE skill map', href: '#skills' }, { label: 'Services and delivery loop', href: '#process' }],
  },
  {
    keywords: ['fde', 'forward', 'deployed', 'work', 'process', 'how'],
    text: 'The working loop is: understand the gap, design the system, ship it live, automate the grind, and stay on call. It keeps discovery, architecture, delivery, automation, and production ownership in one feedback loop.',
    sources: [{ label: 'The FDE loop', href: '#process' }, { label: 'Experience timeline', href: '#experience' }],
  },
  {
    keywords: ['school', 'edusoft', 'erp', 'saas'],
    text: 'EduSoft is Sajre’s school-management SaaS for institutions across Karnataka. Its public scope covers admissions, attendance, fees, examinations, staff, communication, and transport; exact modules owned are kept precise-to-confirm rather than guessed.',
    sources: [{ label: 'EduSoft case study', href: '#edusoft-case-study' }, { label: 'Live product', href: 'https://sajreedutech.com/edusoft' }],
  },
];

const fallbackAnswer = 'I can only answer from the portfolio content currently indexed here. Try asking about the art competition, EduSoft, the FDE loop, or Satwik’s shipped versus learning skills.';

export default function PortfolioDemo() {
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState<Answer | null>(answers[0]);
  const [wasRefused, setWasRefused] = useState(false);

  const ask = (event?: FormEvent<HTMLFormElement>, suggestion?: string) => {
    event?.preventDefault();
    const nextQuery = (suggestion ?? query).trim().toLowerCase();
    if (!nextQuery) return;
    const match = answers.find((item) => item.keywords.some((keyword) => nextQuery.includes(keyword)));
    setAnswer(match ?? null);
    setWasRefused(!match);
    setQuery(suggestion ?? query);
  };

  return (
    <section id="ask" className="demo-section section-padding" aria-labelledby="demo-title">
      <div className="container">
        <div className="demo-shell">
          <div className="demo-copy">
            <span className="eyebrow">grounded_demo / no_api_key</span>
            <h2 id="demo-title">Ask my <em>portfolio.</em></h2>
            <p>
              A small, local proof of the boundary I use for AI systems: answer from source material, show the citation, and refuse questions outside the evidence. It is intentionally deterministic until a real retrieval backend is connected.
            </p>
            <div className="demo-safety-note"><ShieldCheck size={16} aria-hidden="true" /> grounded answers only</div>
          </div>

          <div className="demo-panel">
            <div className="demo-panel__topline"><span><i />portfolio_context</span><span>citation mode: on</span></div>
            <form className="demo-form" onSubmit={ask}>
              <label htmlFor="portfolio-question">Ask a question</label>
              <div className="demo-input-row">
                <input id="portfolio-question" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="What did Satwik build for the art competition?" />
                <button type="submit" aria-label="Ask portfolio question"><CornerDownLeft size={16} aria-hidden="true" /></button>
              </div>
            </form>
            <div className="demo-suggestions" aria-label="Example questions">
              {['What is the FDE loop?', 'What is shipped vs learning?', 'Tell me about EduSoft'].map((suggestion) => (
                <button type="button" key={suggestion} onClick={() => ask(undefined, suggestion)}>{suggestion}</button>
              ))}
            </div>
            <div className={`demo-answer${wasRefused ? ' demo-answer--refused' : ''}`} aria-live="polite">
              <div className="demo-answer__label"><Network size={14} aria-hidden="true" /> answer</div>
              <p>{answer?.text ?? fallbackAnswer}</p>
              {answer && !wasRefused && (
                <div className="demo-sources">
                  <span>sources</span>
                  {answer.sources.map((source) => <a href={source.href} key={source.href}>{source.label} <ArrowUpRight size={12} aria-hidden="true" /></a>)}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="demo-architecture" aria-label="Portfolio demo architecture">
          <span><b>01</b> question</span><i>→</i><span><b>02</b> portfolio content</span><i>→</i><span><b>03</b> grounded answer</span><i>→</i><span><b>04</b> source chip</span>
        </div>
      </div>
    </section>
  );
}
