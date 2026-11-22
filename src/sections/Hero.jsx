import React, { useEffect, useRef, useState } from 'react';
import { personal, stats } from '../data/portfolio.js';
import './SectionStyles.css';

const ROLES = [
  'Full-Stack Developer',
  'Machine Learning Engineer',
  'Co-Founder @ AgroScope',
  'CSE @ SRMIST',
];

function useTypewriter(words, speed = 90, pause = 1800) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx % words.length];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, display.length + 1));
        if (display.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        setDisplay(current.slice(0, display.length - 1));
        if (display.length - 1 === 0) {
          setDeleting(false);
          setWordIdx(i => i + 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [display, deleting, wordIdx, words, speed, pause]);

  return display;
}

function useCounter(end, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const startTime = performance.now();
        const isDecimal = String(end).includes('.');
        const endNum = parseFloat(end);
        const raf = (now) => {
          const p = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          const val = eased * endNum;
          setCount(isDecimal ? val.toFixed(2) : Math.floor(val));
          if (p < 1) requestAnimationFrame(raf);
          else setCount(isDecimal ? endNum.toFixed(2) : endNum);
        };
        requestAnimationFrame(raf);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [end, duration]);

  return { count, ref };
}

function MetricCell({ value, suffix, label }) {
  const numericEnd = parseFloat(value);
  const { count, ref } = useCounter(numericEnd);
  const isDecimal = String(value).includes('.');

  return (
    <div className="metric-cell" ref={ref}>
      <span className="metric-num">
        {isDecimal ? parseFloat(count).toFixed(2) : count}
        {suffix && <span className="metric-suffix">{suffix}</span>}
      </span>
      <div className="metric-desc">{label}</div>
    </div>
  );
}

export default function Hero() {
  const role = useTypewriter(ROLES);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.07 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="hero-section" aria-label="Introduction" ref={sectionRef}>
      <div className="hero-content">
        {/* Left */}
        <div className="hero-left">
          <div className="hero-available-tag reveal">
            <span className="pulse" />
            Open to Opportunities · B.Tech CSE @ SRMIST
          </div>

          <h1 className="hero-name reveal" style={{ transitionDelay: '0.1s' }}>
            R.&nbsp;Nethra
            <span className="hero-name-line2">Nikhilesh.</span>
          </h1>

          <div className="hero-role-wrap reveal" style={{ transitionDelay: '0.18s' }}>
            <span className="hero-role-line" />
            <span className="hero-role" aria-label="Current role">
              {role}<span className="cursor" aria-hidden="true" />
            </span>
          </div>

          <p className="hero-bio reveal" style={{ transitionDelay: '0.24s' }}>
            Computer Science Engineering student at{' '}
            <strong>SRM Institute of Science and Technology</strong> (CGPA {personal.cgpa}).
            Co-Founder of <strong>AgroScope</strong> — AI-powered agricultural waste marketplace,
            incubated at SRM's DEI cell.
          </p>

          <div className="hero-actions reveal" style={{ transitionDelay: '0.3s' }}>
            <a href="#projects" className="btn btn-primary"
              onClick={e => { e.preventDefault(); go('projects'); }}>
              <span>View My Work</span>
              <i className="fa-solid fa-arrow-right" />
            </a>
            <a href="#contact" className="btn btn-secondary"
              onClick={e => { e.preventDefault(); go('contact'); }}>
              <i className="fa-regular fa-envelope" />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>

        {/* Right — portrait */}
        <div className="hero-right reveal" style={{ transitionDelay: '0.1s' }}>
          {/* Location badge — ABOVE portrait, not touching */}
          <div className="hero-location-badge">
            <i className="fa-solid fa-location-dot" style={{ color: '#2563EB', fontSize: '0.95rem' }} />
            <span>Chennai, Tamil Nadu</span>
          </div>

          {/* Portrait card */}
          <div className="hero-portrait-card">
            <img
              src="/profile.png"
              alt={`${personal.name} — profile`}
              onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex'; }}
            />
            <div className="hero-portrait-fallback" style={{ display: 'none' }}>RN²</div>
          </div>

          <div className="hero-float-card card-bottom">
            <i className="fa-solid fa-graduation-cap" />
            CGPA {personal.cgpa} · SRMIST
          </div>
        </div>
      </div>

      {/* Metrics strip */}
      <div className="hero-metrics">
        <div className="hero-metrics-inner">
          {stats.map((s, i) => (
            <MetricCell key={i} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
