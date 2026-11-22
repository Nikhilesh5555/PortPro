import React from 'react';
import './SectionStyles.css';

const CHIPS = [
  { label: 'Python',          icon: 'fa-brands fa-python' },
  { label: 'JavaScript',      icon: 'fa-brands fa-js' },
  { label: 'React.js',        icon: 'fa-brands fa-react' },
  { label: 'Flask',           icon: 'fa-solid fa-server' },
  { label: 'Machine Learning',icon: 'fa-solid fa-brain' },
  { label: 'Scikit-learn',    icon: 'fa-solid fa-chart-line' },
  { label: 'Streamlit',       icon: 'fa-solid fa-bolt' },
  { label: 'PostgreSQL',      icon: 'fa-solid fa-database' },
  { label: 'Git & GitHub',    icon: 'fa-brands fa-git-alt' },
  { label: 'REST APIs',       icon: 'fa-solid fa-network-wired' },
  { label: 'HTML5',           icon: 'fa-brands fa-html5' },
  { label: 'CSS3',            icon: 'fa-brands fa-css3-alt' },
  { label: 'Pandas',          icon: 'fa-solid fa-table' },
  { label: 'Node.js',         icon: 'fa-brands fa-node-js' },
  { label: 'MongoDB',         icon: 'fa-solid fa-leaf' },
  { label: 'Tailwind CSS',    icon: 'fa-solid fa-wind' },
];

export default function TechStrip() {
  const double = [...CHIPS, ...CHIPS];
  return (
    <div className="tech-strip">
      <p className="marquee-label">Core Tech Stack & Platforms</p>
      <div className="marquee-track" aria-hidden="true">
        <div className="marquee-set">
          {double.map((chip, i) => (
            <span className="m-chip" key={i}>
              <i className={chip.icon} />
              {chip.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
