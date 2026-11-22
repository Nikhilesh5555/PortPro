import React, { useState, useEffect } from 'react';
import { personal } from '../data/portfolio.js';
import './ComponentStyles.css';

const navItems = [
  { label: 'About',      id: 'about' },
  { label: 'Work',       id: 'projects' },
  { label: 'Expertise',  id: 'expertise' },
  { label: 'Background', id: 'milestones' },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [active, setActive]         = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const ids = ['hero', 'about', 'projects', 'expertise', 'milestones', 'contact'];
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActive(ids[i]); break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className={`navbar${scrolled ? ' scrolled' : ''}`} role="banner">
        <div className="nav-inner">
          <a href="#hero" className="nav-logo" onClick={e => { e.preventDefault(); go('hero'); }} aria-label="Home">
            <span className="logo-mark">RN²</span>
            <span className="logo-name">{personal.name.split(' ').slice(-1)[0]}</span>
          </a>

          <nav aria-label="Main navigation">
            <ul className="nav-links">
              {navItems.map(item => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`nav-link${active === item.id ? ' active' : ''}`}
                    onClick={e => { e.preventDefault(); go(item.id); }}
                  >{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <a href="#contact" className="nav-cta" onClick={e => { e.preventDefault(); go('contact'); }}>
            <span>Get in Touch</span>
            <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.75rem', position: 'relative', zIndex: 1 }} />
          </a>

          <button className="mobile-toggle" onClick={() => setMobileOpen(v => !v)} aria-label="Menu">
            <i className={`fa-solid ${mobileOpen ? 'fa-xmark' : 'fa-bars'}`} />
          </button>
        </div>
      </header>

      <div className={`mobile-drawer${mobileOpen ? ' open' : ''}`} aria-hidden={!mobileOpen}>
        <ul className="mobile-nav-list">
          {navItems.map(item => (
            <li key={item.id}>
              <a href={`#${item.id}`} className={`mobile-nav-link${active === item.id ? ' active' : ''}`}
                onClick={e => { e.preventDefault(); go(item.id); }}>{item.label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className="mobile-nav-link cta-mobile" onClick={e => { e.preventDefault(); go('contact'); }}>
              Get in Touch
            </a>
          </li>
        </ul>
      </div>
      {mobileOpen && <div className="mobile-backdrop" onClick={() => setMobileOpen(false)} />}
    </>
  );
}
