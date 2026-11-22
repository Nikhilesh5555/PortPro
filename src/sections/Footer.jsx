import React from 'react';
import { personal } from '../data/portfolio.js';
import './SectionStyles.css';

const Footer = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer" aria-label="Site Footer">
      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <div className="logo-initials-footer">{personal.initials}</div>
          <p>{personal.name}<br />{personal.degree}<br />{personal.university}</p>
        </div>

        {/* Navigation */}
        <div>
          <div className="footer-col-title">Navigate</div>
          <ul className="footer-links">
            {[
              { label: 'About', id: 'about' },
              { label: 'Expertise', id: 'expertise' },
              { label: 'Projects', id: 'projects' },
              { label: 'Background', id: 'milestones' },
              { label: 'Contact', id: 'contact' },
            ].map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => { e.preventDefault(); scrollTo(item.id); }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <div className="footer-col-title">Connect</div>
          <ul className="footer-links">
            <li><a href={personal.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href={personal.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href={`mailto:${personal.email}`}>{personal.email}</a></li>
            <li><a href={personal.resume} target="_blank" rel="noopener noreferrer">Résumé</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">
          © {new Date().getFullYear()} {personal.name} · Built with React & Vite · All rights reserved.
        </p>
        <div className="footer-socials">
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="GitHub">
            <i className="fa-brands fa-github" />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin-in" />
          </a>
          <a href={`mailto:${personal.email}`} className="footer-social" aria-label="Email">
            <i className="fa-solid fa-envelope" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

