import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Please fill in all required fields');
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', project: '', message: '' });
    }, 5000);
  };

  const contactInfoItems = [
    { icon: '📧', label: 'Email', value: 'mommentx@gmail.com' },
    { icon: '📍', label: 'Location', value: 'Colombo, Sri Lanka' },
    { icon: '⏱️', label: 'Response Time', value: 'Within 24 hours' },
  ];

  return (
    <section id="contact" className="section-wrapper-soft">
      <div className="contact-inner">
        {/* Left — Info */}
        <div>
          <div className="section-label" style={{ marginBottom: '20px' }}>Get In Touch</div>
          <h2 className="contact-title">
            Let's Start<br />Your Project
          </h2>
          <p className="contact-sub">
            Have a project in mind? Fill out the form and our team will reach out within
            one business day. No obligation — just a conversation about how we can help.
          </p>

          <div className="contact-info-list">
            {contactInfoItems.map((item) => (
              <div key={item.label} className="contact-info-item">
                <div className="contact-info-icon">{item.icon}</div>
                <div>
                  <div className="contact-info-label">{item.label}</div>
                  <div className="contact-info-val">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust note */}
          <div style={{
            marginTop: '28px',
            padding: '16px 20px',
            background: '#eff6ff',
            borderRadius: '8px',
            border: '1px solid #bfdbfe',
            display: 'flex',
            gap: '10px',
            alignItems: 'flex-start',
          }}>
            <span style={{ fontSize: '16px' }}>🔒</span>
            <p style={{ fontSize: '13px', color: '#1e40af', lineHeight: 1.6 }}>
              Your information is strictly confidential. We sign NDAs on request
              and never share project details with third parties.
            </p>
          </div>
        </div>

        {/* Right — Form */}
        <div>
          {!submitted ? (
            <div className="contact-form-card">
              <h3 style={{ fontFamily: 'Syne', fontSize: '20px', fontWeight: 700, color: '#0a0d14', marginBottom: '24px' }}>
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="form-stack">
                <div className="form-row">
                  <div>
                    <label className="form-label">Your Name *</label>
                    <input
                      className="input-field"
                      type="text"
                      name="name"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="form-label">Email Address *</label>
                    <input
                      className="input-field"
                      type="email"
                      name="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label">Project Type</label>
                  <select
                    className="input-field"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    style={{ cursor: 'pointer' }}
                  >
                    <option value="">Select project type...</option>
                    <option>Full-Stack Web Application</option>
                    <option>AI / ML Solution</option>
                    <option>UI/UX Design</option>
                    <option>Enterprise System</option>
                    <option>SaaS Product Development</option>
                    <option>Consulting & Strategy</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="form-label">Project Details</label>
                  <textarea
                    className="input-field"
                    name="message"
                    placeholder="Tell us about your project, goals, and timeline..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <button className="btn btn-primary btn-full" type="submit" style={{ marginTop: '4px' }}>
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <p className="form-note">We respect your privacy. No spam, ever.</p>
              </form>
            </div>
          ) : (
            <div className="success-box">
              <div className="success-icon">✓</div>
              <h3 className="success-title">Message Sent!</h3>
              <p className="success-p">
                Thanks for reaching out. Our team will get back to you within 24 hours.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
