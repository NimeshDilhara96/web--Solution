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
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact">
      <div className="contact-inner">
        <div>
          <p className="section-label">Get In Touch</p>
          <h2 className="contact-title">Let's Start<br/>Your Project</h2>
          <p className="contact-p">Have a project in mind? Fill out the form and our team will reach out within one business day. No obligation, just a conversation.</p>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div><div className="contact-item-label">Email</div><div className="contact-item-val">mommentx@gmail.com</div></div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div><div className="contact-item-label">Location</div><div className="contact-item-val">Colombo, Sri Lanka</div></div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">⏰</span>
              <div><div className="contact-item-label">Response Time</div><div className="contact-item-val">Within 24 hours</div></div>
            </div>
          </div>
        </div>
        <div>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="form-stack">
              <div className="form-row">
                <input className="input-field" type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                <input className="input-field" type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
              </div>
              <select className="input-field" name="project" value={formData.project} onChange={handleChange}>
                <option value="">Project Type</option>
                <option>Website Development</option>
                <option>Web Application</option>
                <option>Mobile App</option>
                <option>UI/UX Design</option>
                <option>SEO & Performance</option>
                <option>Other</option>
              </select>
              <textarea className="input-field" name="message" placeholder="Tell us about your project..." value={formData.message} onChange={handleChange} rows="5" style={{ resize: 'vertical' }}></textarea>
              <button className="btn btn-primary btn-full" type="submit">Send Message →</button>
              <p className="form-note">We respect your privacy. No spam, ever.</p>
            </form>
          ) : (
            <div className="success-box">
              <div className="success-icon">✓</div>
              <h3 className="success-title">Message Sent!</h3>
              <p className="success-p">Thanks for reaching out. We'll get back to you within 24 hours.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
