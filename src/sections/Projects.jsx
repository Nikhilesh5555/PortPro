import React, { useEffect, useRef } from 'react';
import { projects } from '../data/portfolio.js';
import { personal } from '../data/portfolio.js';
import './SectionStyles.css';

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects-section" ref={sectionRef} aria-label="Selected Projects">
      <div className="container">
        {/* Header */}
        <div className="projects-header">
          <div>
            <div className="section-label reveal">
              <span className="section-label-dot" />
              Selected Work
            </div>
            <h2 className="section-heading reveal" style={{ transitionDelay: '0.1s' }}>
              Turning ideas<br />into real outcomes.
            </h2>
          </div>
          <div className="projects-header-right reveal" style={{ transitionDelay: '0.15s' }}>
            <p className="section-desc">
              Engineered machine learning systems and production full-stack web applications — from agricultural AI to content-based recommendation engines.
            </p>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill btn-pill-ghost"
            >
              <i className="fa-brands fa-github" />
              <span className="roll-wrap"><span>View on GitHub</span><span>View on GitHub</span></span>
              <i className="fa-solid fa-arrow-up-right" style={{ fontSize: '0.75rem' }} />
            </a>
          </div>
        </div>

        {/* Project list */}
        <div className="projects-grid">
          {projects.map((project, idx) => {
            const hasDemo = Boolean(project.demo && project.demo.trim() && project.demo !== '#');
            const hasGithub = Boolean(project.github && project.github.trim());

            return (
              <article
                key={project.id}
                className="project-card reveal"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="project-num">{project.number}</div>

                <div className="project-body">
                  <div className="project-top-row">
                    <span className="project-title-link">{project.title}</span>
                    <span className="project-badge-pill">{project.badge}</span>
                  </div>

                  <div className="project-subtitle">{project.subtitle}</div>
                  <p className="project-desc">{project.description}</p>

                  <div className="project-tech-tags">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    {hasDemo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-btn link-btn-primary"
                        aria-label={`Live demo — ${project.title}`}
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square" />
                        Live Demo
                      </a>
                    )}
                    {hasGithub && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-btn"
                        aria-label={`GitHub — ${project.title}`}
                      >
                        <i className="fa-brands fa-github" />
                        Source
                      </a>
                    )}
                  </div>
                </div>

                <div className="project-card-right">
                  <div className="arrow-badge" aria-hidden="true">↗</div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

