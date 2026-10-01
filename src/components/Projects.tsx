'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: 'School ERP SaaS',
        category: 'Backend / Full-Stack',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
        year: '2025',
        scope: 'Platform architecture',
        status: 'Production system',
        focus: 'Role-based operations',
        stack: ['Django', 'REST API', 'RBAC'],
        description: 'A role-aware school operations platform that brings complex academic workflows into one dependable system.',
    },
    {
        id: 2,
        title: 'Fitness Membership',
        category: 'Management System',
        image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1587&auto=format&fit=crop',
        year: '2024',
        scope: 'Product system',
        status: 'Operations ready',
        focus: 'Member lifecycle',
        stack: ['React', 'Django', 'Payments'],
        description: 'A focused membership system for managing plans, people, and the everyday pulse of a fitness business.',
    },
    {
        id: 3,
        title: 'Banquet Booking',
        category: 'E-commerce',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop',
        year: '2024',
        scope: 'Commerce flow',
        status: 'Booking flow',
        focus: 'Availability & checkout',
        stack: ['React', 'REST API', 'Bookings'],
        description: 'A clear booking flow that turns venue availability into a simpler, conversion-ready experience.',
    },
];

export default function Projects() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <section id="projects" className="projects-section section-padding" aria-labelledby="projects-title">
            <div className="projects-section__glow projects-section__glow--one" aria-hidden="true" />
            <div className="projects-section__glow projects-section__glow--two" aria-hidden="true" />

            <div className="container projects-container">
                <header className="projects-header">
                    <div className="projects-header__intro">
                        <div className="projects-kicker" aria-label="Section 02: Selected case studies">
                            <span className="projects-kicker__index">02</span>
                            <span>Selected case studies</span>
                            <span className="projects-kicker__line" aria-hidden="true" />
                        </div>

                        <div className="projects-heading">
                            <h2 id="projects-title">
                                Built for <span>the hard parts.</span>
                            </h2>
                            <p>
                                Production-minded systems where the interface stays calm and the architecture does the heavy lifting.
                            </p>
                        </div>
                    </div>

                    <a className="projects-header__link" href="#contact">
                        <span className="projects-header__question">Have a system in mind?</span>
                        <span className="projects-header__action">
                            Let&apos;s talk
                            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 13L13 3M13 3H5.5M13 3V10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </a>
                </header>

                <ul className="projects-grid" aria-label="Selected project case studies">
                    {projects.map((project, index) => (
                        <motion.li
                            key={project.id}
                            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.18 }}
                            transition={prefersReducedMotion ? { duration: 0 } : {
                                delay: index * 0.1,
                                duration: 0.7,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <article className="project-card" aria-labelledby={`project-${project.id}-title`}>
                                <div className="project-card__topline">
                                    <span className="project-card__index">CASE / {String(project.id).padStart(2, '0')}</span>
                                    <span className="project-card__category">{project.category}</span>
                                </div>

                                <figure className="project-card__visual">
                                    <Image
                                        src={project.image}
                                        alt={`${project.title} visual preview`}
                                        className="project-card__image"
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 40vw"
                                        loading={index === 0 ? 'eager' : 'lazy'}
                                        unoptimized
                                    />
                                    <span className="project-card__visual-wash" aria-hidden="true" />
                                    <span className="project-card__visual-grid" aria-hidden="true" />
                                    <figcaption className="project-card__visual-caption">
                                        <span>SYS_{String(project.id).padStart(2, '0')}</span>
                                        <span>{project.year}</span>
                                    </figcaption>
                                    <span className="project-card__visual-corner" aria-hidden="true">↗</span>
                                </figure>

                                <div className="project-card__content">
                                    <div className="project-card__heading">
                                        <div>
                                            <p className="project-card__scope">{project.scope}</p>
                                            <h3 id={`project-${project.id}-title`}>{project.title}</h3>
                                        </div>
                                        <span className="project-card__status">
                                            <span className="project-card__status-dot" aria-hidden="true" />
                                            {project.status}
                                        </span>
                                    </div>

                                    <p className="project-card__description">{project.description}</p>

                                    <dl className="project-card__meta">
                                        <div>
                                            <dt>Focus</dt>
                                            <dd>{project.focus}</dd>
                                        </div>
                                        <div>
                                            <dt>Stack</dt>
                                            <dd>{project.stack.join(' · ')}</dd>
                                        </div>
                                    </dl>

                                    <div className="project-card__footer">
                                        <ul className="project-card__tags" aria-label={`${project.title} technologies`}>
                                            {project.stack.map((technology) => (
                                                <li key={technology}>{technology}</li>
                                            ))}
                                        </ul>
                                        <a
                                            className="project-card__link"
                                            href="#contact"
                                            aria-label={`Discuss the ${project.title} case study`}
                                        >
                                            <span>Discuss build</span>
                                            <svg aria-hidden="true" width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </article>
                        </motion.li>
                    ))}
                </ul>

                <footer className="projects-footer">
                    <span className="projects-footer__note">
                        <span className="projects-footer__signal" aria-hidden="true" />
                        Open to the next interesting problem
                    </span>
                    <span className="projects-footer__count">03 systems / one approach</span>
                </footer>
            </div>

            <style jsx>{`
                .projects-section {
                    --case-bg: #141210;
                    --case-surface: #1b1815;
                    --case-surface-hover: #211d19;
                    --case-ink: #f4eee6;
                    --case-muted: #a99e92;
                    --case-faint: #756b62;
                    --case-border: rgba(244, 238, 230, 0.13);
                    --case-border-strong: rgba(244, 238, 230, 0.26);
                    --case-accent: #d7ff87;
                    position: relative;
                    overflow: hidden;
                    isolation: isolate;
                    padding: clamp(82px, 10vw, 148px) 0 clamp(60px, 8vw, 108px);
                    color: var(--case-ink);
                    background: var(--case-bg);
                }

                .projects-section::before,
                .projects-section::after {
                    position: absolute;
                    inset: 0;
                    z-index: -1;
                    pointer-events: none;
                    content: '';
                }

                .projects-section::before {
                    opacity: 0.3;
                    background-image: linear-gradient(rgba(244, 238, 230, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(244, 238, 230, 0.04) 1px, transparent 1px);
                    background-size: 72px 72px;
                    mask-image: linear-gradient(to bottom, black, transparent 72%);
                }

                .projects-section::after {
                    background: linear-gradient(180deg, rgba(20, 18, 16, 0.15) 0%, rgba(20, 18, 16, 0.8) 92%);
                }

                .projects-section__glow {
                    position: absolute;
                    z-index: -1;
                    width: min(44vw, 680px);
                    height: min(44vw, 680px);
                    border-radius: 50%;
                    pointer-events: none;
                    filter: blur(80px);
                    opacity: 0.08;
                }

                .projects-section__glow--one {
                    top: -18%;
                    right: -12%;
                    background: #d7ff87;
                }

                .projects-section__glow--two {
                    bottom: 4%;
                    left: -22%;
                    background: #b47c59;
                }

                .projects-container {
                    position: relative;
                    z-index: 1;
                }

                .projects-header {
                    display: grid;
                    grid-template-columns: minmax(0, 1fr) auto;
                    align-items: end;
                    gap: clamp(32px, 8vw, 120px);
                    padding-bottom: clamp(32px, 5vw, 64px);
                    border-bottom: 1px solid var(--case-border);
                }

                .projects-kicker {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    color: var(--case-muted);
                    font-family: var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, monospace;
                    font-size: 10px;
                    font-weight: 600;
                    letter-spacing: 0.15em;
                    line-height: 1;
                    text-transform: uppercase;
                }

                .projects-kicker__index {
                    color: var(--case-accent);
                }

                .projects-kicker__line {
                    display: block;
                    width: clamp(32px, 8vw, 92px);
                    height: 1px;
                    margin-left: 4px;
                    background: var(--case-border-strong);
                }

                .projects-heading {
                    max-width: 820px;
                    margin-top: clamp(28px, 4vw, 48px);
                }

                .projects-heading h2 {
                    max-width: 800px;
                    margin: 0;
                    color: var(--case-ink);
                    font-size: clamp(2.9rem, 7vw, 6.5rem);
                    font-weight: 600;
                    letter-spacing: -0.075em;
                    line-height: 0.94;
                }

                .projects-heading h2 span {
                    color: var(--case-muted);
                }

                .projects-heading p {
                    max-width: 520px;
                    margin: clamp(24px, 3vw, 34px) 0 0;
                    color: var(--case-muted);
                    font-size: clamp(0.95rem, 1.5vw, 1.08rem);
                    line-height: 1.7;
                }

                .projects-header__link {
                    display: flex;
                    min-width: 196px;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 16px;
                    padding: 18px 20px;
                    border: 1px solid var(--case-border);
                    border-radius: 12px;
                    color: var(--case-ink);
                    font-family: var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, monospace;
                    text-decoration: none;
                    transition: border-color 220ms ease, background-color 220ms ease, transform 220ms ease;
                }

                .projects-header__link:hover {
                    opacity: 1;
                    border-color: var(--case-border-strong);
                    background: rgba(244, 238, 230, 0.05);
                    transform: translateY(-3px);
                }

                .projects-header__link:focus-visible,
                .project-card__link:focus-visible {
                    outline: 2px solid var(--case-accent);
                    outline-offset: 4px;
                }

                .projects-header__question {
                    color: var(--case-muted);
                    font-size: 10px;
                    letter-spacing: 0.04em;
                }

                .projects-header__action {
                    display: inline-flex;
                    align-items: center;
                    gap: 9px;
                    color: var(--case-accent);
                    font-family: var(--font-geist-sans), Inter, system-ui, sans-serif;
                    font-size: 15px;
                    font-weight: 600;
                    letter-spacing: -0.02em;
                }

                .projects-header__action svg,
                .project-card__link svg {
                    transition: transform 220ms ease;
                }

                .projects-header__link:hover .projects-header__action svg,
                .project-card__link:hover svg {
                    transform: translate(3px, -3px);
                }

                .projects-grid {
                    display: grid;
                    grid-template-columns: repeat(4, minmax(0, 1fr));
                    gap: 18px;
                    margin: clamp(28px, 5vw, 64px) 0 0;
                    padding: 0;
                    list-style: none;
                }

                .projects-grid > li {
                    min-width: 0;
                }

                .projects-grid > li:first-child {
                    grid-column: span 2;
                }

                .project-card {
                    display: flex;
                    height: 100%;
                    flex-direction: column;
                    overflow: hidden;
                    border: 1px solid var(--case-border);
                    border-radius: 18px;
                    background: var(--case-surface);
                    transition: transform 300ms cubic-bezier(0.22, 1, 0.36, 1), border-color 220ms ease, background-color 220ms ease, box-shadow 300ms ease;
                }

                .project-card:hover {
                    border-color: var(--case-border-strong);
                    background: var(--case-surface-hover);
                    box-shadow: 0 18px 45px rgba(0, 0, 0, 0.18);
                    transform: translateY(-5px);
                }

                .project-card__topline {
                    display: flex;
                    min-height: 48px;
                    align-items: center;
                    gap: 12px;
                    padding: 14px 18px 13px;
                    border-bottom: 1px solid var(--case-border);
                    font-family: var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, monospace;
                    font-size: 9px;
                    font-weight: 600;
                    letter-spacing: 0.1em;
                    line-height: 1.2;
                    text-transform: uppercase;
                }

                .project-card__index {
                    color: var(--case-accent);
                    white-space: nowrap;
                }

                .project-card__category {
                    overflow: hidden;
                    margin-left: auto;
                    color: var(--case-faint);
                    text-align: right;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .project-card__visual {
                    position: relative;
                    aspect-ratio: 1.18;
                    margin: 0;
                    overflow: hidden;
                    background: #29231e;
                }

                .projects-grid > li:first-child .project-card__visual {
                    aspect-ratio: 1.72;
                }

                .project-card__image {
                    display: block;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: grayscale(0.85) sepia(0.18) saturate(0.7) contrast(1.05);
                    transform: scale(1.01);
                    transition: transform 700ms cubic-bezier(0.22, 1, 0.36, 1), filter 500ms ease;
                }

                .project-card:hover .project-card__image {
                    filter: grayscale(0.2) sepia(0.12) saturate(0.9) contrast(1.05);
                    transform: scale(1.06);
                }

                .project-card__visual-wash,
                .project-card__visual-grid {
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                }

                .project-card__visual-wash {
                    background: linear-gradient(145deg, rgba(27, 24, 21, 0.35), transparent 42%, rgba(20, 18, 16, 0.6));
                }

                .project-card__visual-grid {
                    opacity: 0.28;
                    background-image: linear-gradient(rgba(255, 255, 255, 0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.25) 1px, transparent 1px);
                    background-size: 48px 48px;
                    mix-blend-mode: soft-light;
                }

                .project-card__visual-caption {
                    position: absolute;
                    top: 14px;
                    left: 14px;
                    right: 14px;
                    display: flex;
                    justify-content: space-between;
                    color: rgba(244, 238, 230, 0.8);
                    font-family: var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, monospace;
                    font-size: 9px;
                    font-weight: 600;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                }

                .project-card__visual-corner {
                    position: absolute;
                    right: 14px;
                    bottom: 12px;
                    display: grid;
                    width: 30px;
                    height: 30px;
                    place-items: center;
                    border: 1px solid rgba(244, 238, 230, 0.4);
                    border-radius: 50%;
                    color: var(--case-ink);
                    font-size: 16px;
                    line-height: 1;
                    transition: background-color 220ms ease, color 220ms ease, transform 220ms ease;
                }

                .project-card:hover .project-card__visual-corner {
                    color: var(--case-bg);
                    background: var(--case-accent);
                    border-color: var(--case-accent);
                    transform: rotate(45deg);
                }

                .project-card__content {
                    display: flex;
                    flex: 1;
                    flex-direction: column;
                    padding: clamp(18px, 2.2vw, 28px);
                }

                .project-card__heading {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 16px;
                }

                .project-card__scope {
                    margin: 0 0 9px;
                    color: var(--case-accent);
                    font-family: var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, monospace;
                    font-size: 9px;
                    font-weight: 600;
                    letter-spacing: 0.12em;
                    line-height: 1.2;
                    text-transform: uppercase;
                }

                .project-card h3 {
                    margin: 0;
                    color: var(--case-ink);
                    font-size: clamp(1.4rem, 2.4vw, 2.25rem);
                    font-weight: 600;
                    letter-spacing: -0.06em;
                    line-height: 1.02;
                }

                .project-card__status {
                    display: inline-flex;
                    flex-shrink: 0;
                    align-items: center;
                    gap: 6px;
                    padding: 6px 8px;
                    border: 1px solid var(--case-border);
                    border-radius: 999px;
                    color: var(--case-faint);
                    font-family: var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, monospace;
                    font-size: 8px;
                    letter-spacing: 0.04em;
                    line-height: 1;
                    white-space: nowrap;
                }

                .project-card__status-dot,
                .projects-footer__signal {
                    display: inline-block;
                    width: 6px;
                    height: 6px;
                    flex-shrink: 0;
                    border-radius: 50%;
                    background: var(--case-accent);
                    box-shadow: 0 0 0 3px rgba(215, 255, 135, 0.08);
                }

                .project-card__description {
                    max-width: 540px;
                    margin: 18px 0 24px;
                    color: var(--case-muted);
                    font-size: 13px;
                    line-height: 1.7;
                }

                .project-card__meta {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    margin: auto 0 18px;
                    border-top: 1px solid var(--case-border);
                    border-bottom: 1px solid var(--case-border);
                }

                .project-card__meta > div {
                    min-width: 0;
                    padding: 14px 12px 14px 0;
                }

                .project-card__meta > div + div {
                    padding-right: 0;
                    padding-left: 12px;
                    border-left: 1px solid var(--case-border);
                }

                .project-card__meta dt {
                    color: var(--case-faint);
                    font-family: var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, monospace;
                    font-size: 8px;
                    font-weight: 600;
                    letter-spacing: 0.12em;
                    line-height: 1.2;
                    text-transform: uppercase;
                }

                .project-card__meta dd {
                    margin: 7px 0 0;
                    color: var(--case-ink);
                    font-size: 11px;
                    line-height: 1.45;
                }

                .project-card__footer {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 12px;
                }

                .project-card__tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 5px;
                    margin: 0;
                    padding: 0;
                    list-style: none;
                }

                .project-card__tags li {
                    padding: 5px 7px;
                    border: 1px solid var(--case-border);
                    border-radius: 5px;
                    color: var(--case-faint);
                    font-family: var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, monospace;
                    font-size: 8px;
                    line-height: 1;
                }

                .project-card__link {
                    display: inline-flex;
                    flex-shrink: 0;
                    align-items: center;
                    gap: 7px;
                    color: var(--case-ink);
                    font-size: 11px;
                    font-weight: 600;
                    letter-spacing: -0.01em;
                    text-decoration: none;
                    transition: color 200ms ease;
                }

                .project-card__link:hover {
                    opacity: 1;
                    color: var(--case-accent);
                }

                .projects-footer {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 20px;
                    margin-top: clamp(28px, 5vw, 58px);
                    padding-top: 18px;
                    border-top: 1px solid var(--case-border);
                    color: var(--case-faint);
                    font-family: var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, monospace;
                    font-size: 9px;
                    letter-spacing: 0.1em;
                    line-height: 1.5;
                    text-transform: uppercase;
                }

                .projects-footer__note {
                    display: inline-flex;
                    align-items: center;
                    gap: 9px;
                }

                .projects-footer__count {
                    color: var(--case-muted);
                }

                @media (max-width: 1100px) {
                    .projects-grid {
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                    }

                    .projects-grid > li:first-child {
                        grid-column: span 2;
                    }

                    .projects-grid > li:first-child .project-card__visual {
                        aspect-ratio: 1.9;
                    }
                }

                @media (max-width: 820px) {
                    .projects-header {
                        grid-template-columns: 1fr;
                        align-items: start;
                        gap: 30px;
                    }

                    .projects-header__link {
                        width: max-content;
                    }
                }

                @media (max-width: 640px) {
                    .projects-section {
                        padding-top: 72px;
                        padding-bottom: 56px;
                    }

                    .projects-section::before {
                        background-size: 48px 48px;
                    }

                    .projects-grid {
                        grid-template-columns: 1fr;
                        gap: 14px;
                    }

                    .projects-grid > li:first-child {
                        grid-column: span 1;
                    }

                    .projects-grid > li:first-child .project-card__visual,
                    .project-card__visual {
                        aspect-ratio: 1.38;
                    }

                    .projects-header__link {
                        width: 100%;
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-between;
                    }

                    .project-card__heading {
                        flex-direction: column;
                        gap: 14px;
                    }

                    .project-card__status {
                        align-self: flex-start;
                    }

                    .project-card__footer {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .project-card__link {
                        padding-top: 3px;
                    }

                    .projects-footer {
                        align-items: flex-start;
                        flex-direction: column;
                        gap: 8px;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .project-card,
                    .project-card__image,
                    .project-card__visual-corner,
                    .projects-header__link,
                    .projects-header__action svg,
                    .project-card__link,
                    .project-card__link svg {
                        transition: none;
                    }
                }
            `}</style>
        </section>
    );
}
