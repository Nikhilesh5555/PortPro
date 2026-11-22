import React, { useState, useEffect, useRef } from 'react';
import { personal } from '../data/portfolio.js';
import './SectionStyles.css';

const Contact = () => {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.07 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSent(true);
  };

  return (
    <section id="contact" className="contact-section" ref={sectionRef} aria-label="Contact">
      <div className="container">
        <div className="contact-inner">
          {/* Left — CTA + details */}
          <div>
            <div className="section-label reveal" style={{ color: '#666666', borderColor: 'rgba(255,255,255,0.1)' }}>
              <span className="section-label-dot" style={{ background: '#FAFAFA' }} />
              Get In Touch
            </div>
            <h2 className="contact-cta-heading reveal" style={{ transitionDelay: '0.1s' }}>
              Let's build<br />something <em>meaningful</em><br />together.
            </h2>
            <p className="contact-desc reveal" style={{ transitionDelay: '0.15s' }}>
              Open to software engineering and machine learning internships, technical roles, campus placements, and collaborative ventures.
            </p>

            <div className="contact-email-block reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="contact-email-label">Direct Email</div>
              <a href={`mailto:${personal.email}`} className="contact-email-link">
                {personal.email}
              </a>
            </div>

            <div className="contact-socials reveal" style={{ transitionDelay: '0.25s' }}>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn"
                aria-label="GitHub"
              >
                <i className="fa-brands fa-github" /> GitHub
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in" /> LinkedIn
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="contact-social-btn"
                aria-label="Email"
              >
                <i className="fa-solid fa-envelope" /> Email
              </a>
            </div>

            {/* Additional details */}
            <div className="reveal" style={{ transitionDelay: '0.3s', marginTop: '2.5rem' }}>
              <div className="contact-detail-row">
                <div className="contact-icon-box">
                  <i className="fa-solid fa-phone" />
                </div>
                <div>
                  <div className="contact-lbl">Phone</div>
                  <div className="contact-val">
                    <a href={`tel:${personal.phone}`}>{personal.phone}</a>
                  </div>
                </div>
              </div>
              <div className="contact-detail-row">
                <div className="contact-icon-box">
                  <i className="fa-solid fa-location-dot" />
                </div>
                <div>
                  <div className="contact-lbl">Location</div>
                  <div className="contact-val">{personal.location}</div>
                </div>
              </div>
              <div className="contact-detail-row">
                <div className="contact-icon-box">
                  <i className="fa-solid fa-graduation-cap" />
                </div>
                <div>
                  <div className="contact-lbl">University</div>
                  <div className="contact-val">{personal.university}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="contact-form-wrap reveal" style={{ transitionDelay: '0.1s' }}>
            {formSent ? (
              <div className="form-success">
                <div className="form-success-icon">
                  <i className="fa-solid fa-circle-check" />
                </div>
                <h3>Message Received!</h3>
                <p>
                  Thank you for reaching out. I'll get back to you promptly at <strong style={{ color: '#FAFAFA' }}>{formData.email}</strong>.
                </p>
                <button
                  type="button"
                  className="btn-pill btn-pill-outline"
                  style={{ marginTop: '1.75rem', borderColor: 'rgba(255,255,255,0.3)', color: '#CCCCCC' }}
                  onClick={() => { setFormSent(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} aria-label="Contact Form">
                <div className="form-group">
                  <label className="form-label" htmlFor="cf-name">Your Name</label>
                  <input
                    id="cf-name"
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="cf-email">Email Address</label>
                  <input
                    id="cf-email"
                    type="email"
                    required
                    placeholder="alex@company.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="cf-subject">Subject</label>
                  <input
                    id="cf-subject"
                    type="text"
                    placeholder="Internship / Full-time / Project Collaboration"
                    className="form-input"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="cf-message">Message</label>
                  <textarea
                    id="cf-message"
                    required
                    rows="5"
                    placeholder="Briefly describe your opportunity or inquiry..."
                    className="form-input"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button type="submit" className="form-submit">
                  <i className="fa-solid fa-paper-plane" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
