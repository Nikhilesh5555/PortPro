import React, { useEffect, useRef } from 'react';
import { personal, education, certifications, languages } from '../data/portfolio.js';
import './SectionStyles.css';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.07 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef} aria-label="About">
      <div className="container">
        <div className="about-inner">
          {/* Left — photo + meta */}
          <div className="about-photo-wrap reveal">
            <div className="about-photo-frame">
              <img
                src="/profile.png"
                alt={`${personal.name} profile`}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextSibling.style.display = 'flex';
                }}
              />
              <div
                className="about-photo-fallback"
                style={{ display: 'none', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', fontSize: '6rem', color: '#CCCCCC', fontWeight: 900 }}
              >
                {personal.initials}
              </div>
            </div>

            <div className="about-photo-meta">
              <div className="about-meta-pill">
                <span className="meta-label">Location</span>
                <span className="meta-val">{personal.location}</span>
              </div>
              <div className="about-meta-pill">
                <span className="meta-label">Status</span>
                <span className="meta-val" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', display: 'inline-block', flexShrink: 0 }} />
                  {personal.status}
                </span>
              </div>
              <div className="about-meta-pill">
                <span className="meta-label">CGPA</span>
                <span className="meta-val">{personal.cgpa} / 10.0</span>
              </div>
              <div className="about-meta-pill">
                <span className="meta-label">Batch</span>
                <span className="meta-val">{personal.batch}</span>
              </div>
            </div>
          </div>

          {/* Right — content */}
          <div className="about-content">
            <div className="section-label reveal">
              <span className="section-label-dot" />
              About Me
            </div>
            <h2 className="section-heading reveal" style={{ transitionDelay: '0.1s', marginBottom: '1.5rem' }}>
              Engineering impact &<br />solving real problems.
            </h2>

            <div className="about-bio reveal" style={{ transitionDelay: '0.15s', marginBottom: '2rem' }}>
              {personal.bio.map((p, i) => <p key={i}>{p}</p>)}
            </div>

            {/* Highlights */}
            <ul className="about-highlights reveal" style={{ transitionDelay: '0.2s' }}>
              <li className="about-highlight-item">
                <span className="hl-arrow">→</span>
                Co-Founder of <strong>AgroScope</strong> — AI-powered agricultural waste marketplace, incubated at SRM's DEI cell with a live production deployment.
              </li>
              <li className="about-highlight-item">
                <span className="hl-arrow">→</span>
                Built <strong>CINI</strong>, a Streamlit-deployed ML recommendation engine using TF-IDF vectorisation and cosine similarity.
              </li>
              <li className="about-highlight-item">
                <span className="hl-arrow">→</span>
                Winner at <strong>Hack Mind</strong> and <strong>RED-HAT</strong>; Smart India Hackathon qualifier.
              </li>
              <li className="about-highlight-item">
                <span className="hl-arrow">→</span>
                Actively seeking software engineering and ML internships and high-impact technical roles.
              </li>
            </ul>

            {/* Education */}
            <div className="about-edu-block reveal" style={{ transitionDelay: '0.25s' }}>
              <h4>Academic Journey</h4>
              {education.map((edu, i) => (
                <div className="edu-row" key={i}>
                  <div className="edu-left">
                    <div className="edu-degree">{edu.degree}</div>
                    <div className="edu-school">{edu.school}</div>
                  </div>
                  <div className="edu-right">
                    <div className="edu-year">{edu.year}</div>
                    <div className="edu-score">{edu.score}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="about-certs reveal" style={{ transitionDelay: '0.3s' }}>
              <h4>Certifications</h4>
              {certifications.map((cert, i) => (
                <div className="cert-row" key={i}>
                  <span className="cert-icon">{cert.icon}</span>
                  <div>
                    <div className="cert-name">{cert.name}</div>
                    <div className="cert-issuer">{cert.issuer}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Resume CTA */}
            <div className="reveal" style={{ transitionDelay: '0.35s' }}>
              <a
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-pill-dark"
              >
                <i className="fa-solid fa-file-arrow-down" />
                <span className="roll-wrap"><span>Download Résumé</span><span>Download Résumé</span></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

