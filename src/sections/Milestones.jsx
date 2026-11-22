import React, { useState, useEffect, useRef } from 'react';
import { achievements } from '../data/portfolio.js';
import './SectionStyles.css';

const Milestones = () => {
  const [openId, setOpenId] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.07 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section id="milestones" className="milestones-section" ref={sectionRef} aria-label="Achievements & Background">
      <div className="container">
        <div className="milestones-header">
          <div>
            <div className="section-label reveal">
              <span className="section-label-dot" />
              Recognition & Background
            </div>
            <h2 className="section-heading reveal" style={{ transitionDelay: '0.1s' }}>
              Hackathons,<br />awards & milestones.
            </h2>
          </div>
          <div className="reveal" style={{ transitionDelay: '0.15s' }}>
            <p className="section-desc">
              National and institutional milestones earned through competitive hackathons, innovation challenges, and engineering sprints.
            </p>
          </div>
        </div>

        <div className="accordion-list">
          {achievements.map((item, idx) => (
            <div
              key={item.id}
              className={`accordion-item${openId === item.id ? ' open' : ''} reveal`}
              style={{ transitionDelay: `${idx * 0.08}s` }}
            >
              <button
                className="accordion-trigger"
                onClick={() => toggle(item.id)}
                aria-expanded={openId === item.id}
                aria-controls={`acc-body-${item.id}`}
              >
                <div className="acc-left">
                  <span className="acc-icon">{item.icon}</span>
                  <span className="acc-title">{item.title}</span>
                  <span className={`acc-badge ${item.badgeClass}`}>{item.badge}</span>
                </div>
                <i className="fa-solid fa-chevron-down acc-chevron" aria-hidden="true" style={{ fontSize: '0.8rem', color: '#A3A3A3', flexShrink: 0, transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)' }} />
              </button>

              <div
                className="accordion-body"
                id={`acc-body-${item.id}`}
                role="region"
                aria-labelledby={`acc-trigger-${item.id}`}
              >
                <div className="accordion-content">
                  <p className="accordion-desc">{item.description}</p>
                  {item.verifyUrl && (
                    <a
                      href={item.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="acc-verify-link"
                      aria-label={`Verify credential for ${item.title}`}
                    >
                      Verify Credential
                      <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '0.75rem' }} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;

