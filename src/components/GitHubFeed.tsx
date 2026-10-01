'use client';

import { ArrowUpRight, GitBranch, Github, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

type Repository = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
};

const fallbackRepositories: Repository[] = [
  { name: 'Satwik0909 / public work', html_url: 'https://github.com/Satwik0909', description: 'See the latest public projects, experiments, and profile activity on GitHub.', language: 'GitHub', stargazers_count: 0, fork: false },
];

export default function GitHubFeed() {
  const [repositories, setRepositories] = useState<Repository[]>(fallbackRepositories);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    fetch('https://api.github.com/users/Satwik0909/repos?sort=updated&per_page=6', {
      headers: { Accept: 'application/vnd.github+json' },
      signal: controller.signal,
    })
      .then((response) => response.ok ? response.json() as Promise<Repository[]> : Promise.reject(new Error('GitHub feed unavailable')))
      .then((items) => {
        const visibleItems = items.filter((repository) => !repository.fork).slice(0, 6);
        if (visibleItems.length > 0) {
          setRepositories(visibleItems);
          setIsLive(true);
        }
      })
      .catch(() => undefined);

    return () => controller.abort();
  }, []);

  return (
    <section id="github" className="github-section section-padding" aria-labelledby="github-title">
      <div className="container">
        <header className="section-head github-head">
          <div>
            <span className="eyebrow">open_source / public_signal</span>
            <h2 id="github-title" className="section-heading">
              Let the code
              <br />
              <em>back up the story.</em>
            </h2>
          </div>
          <div className="github-intro">
            <p>Public work is where the patterns get reusable: system design notes, integration experiments, and the tools that make production lessons easier to share.</p>
            <a className="text-link" href="https://github.com/Satwik0909" target="_blank" rel="noreferrer">open GitHub profile <ArrowUpRight size={14} aria-hidden="true" /></a>
          </div>
        </header>

        <div className="github-status"><span className={isLive ? 'is-live' : ''} /><span>{isLive ? 'live activity feed' : 'profile link / activity feed loading'}</span><span className="github-status__source">github.com/Satwik0909</span></div>

        <div className="github-grid" aria-live="polite">
          {repositories.map((repository) => (
            <a className="github-card" href={repository.html_url} target="_blank" rel="noreferrer" key={repository.html_url}>
              <div className="github-card__topline"><Github size={15} aria-hidden="true" /><span>{repository.language ?? 'public repo'}</span><ArrowUpRight size={14} aria-hidden="true" /></div>
              <h3>{repository.name}</h3>
              <p>{repository.description ?? 'A public repository from Satwik Kukadolli.'}</p>
              <div className="github-card__meta"><span><GitBranch size={13} aria-hidden="true" /> repository</span><span><Star size={13} aria-hidden="true" /> {repository.stargazers_count}</span></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
