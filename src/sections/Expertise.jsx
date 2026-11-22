import React, { useEffect, useRef } from 'react';
import './SectionStyles.css';

const expertiseData = [
  {
    num: '01.',
    name: 'Backend & API Engineering',
    desc: 'Building robust server-side systems with Python, Flask, and REST APIs. Designing scalable, clean architectures with PostgreSQL and JWT authentication.',
    tags: ['Python', 'Flask', 'REST APIs', 'PostgreSQL', 'JWT Auth', 'Node.js'],
  },
  {
    num: '02.',
    name: 'Machine Learning & Data Systems',
    desc: 'End-to-end ML pipelines using Scikit-learn, Pandas, and TF-IDF. Content-based recommendation engines, computer vision models, and agricultural AI.',
    tags: ['Scikit-learn', 'Pandas', 'Streamlit', 'TF-IDF', 'Cosine Similarity', 'Computer Vision'],
  },
  {
    num: '03.',
    name: 'Full-Stack Web Applications',
    desc: 'Crafting responsive, interactive web applications from React.js frontends to production deployments. Spatial data visualisation with Leaflet.js.',
    tags: ['React.js', 'JavaScript', 'HTML5 & CSS3', 'Tailwind CSS', 'Leaflet.js', 'MongoDB'],
  },
  {
    num: '04.',
    name: 'Product Engineering & Entrepreneurship',
    desc: "Co-founded AgroScope — an AI-powered agricultural waste marketplace incubated at SRM's DEI cell. From idea to production: full ownership of architecture, frontend, and ML pipeline.",
    tags: ['AgroScope', 'SRM DEI Incubated', 'AI Marketplace', 'Full Ownership', 'Startup'],
  },
];

const Expertise = () => {
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
    <section id="expertise" className="expertise-section" ref={sectionRef} aria-label="Core Expertise">
      <div className="container">
        <div className="reveal">
          <div className="eyebrow">Core Expertise</div>
          <h2 className="section-heading" style={{ color: '#FAFAFA' }}>
            What I build<br />& how I think.
          </h2>
        </div>

        <div className="expertise-grid">
          {expertiseData.map((item, idx) => (
            <div
              className="expertise-row reveal"
              key={item.num}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="expertise-num">{item.num}</div>
              <div className="expertise-body">
                <div className="expertise-name">{item.name}</div>
                <div className="expertise-desc">{item.desc}</div>
                <div className="expertise-tags">
                  {item.tags.map((t) => (
                    <span key={t} className="expertise-tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className="expertise-arrow" aria-hidden="true">↗</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;

