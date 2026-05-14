import React from 'react';

const Services = () => {
  const services = [
    { icon: '🌐', title: 'Web Development', desc: 'Custom, high-performance websites built with modern tech stacks. From landing pages to complex web applications.', tags: ['React', 'Next.js', 'Node.js'] },
    { icon: '📱', title: 'Mobile Apps', desc: 'Cross-platform mobile apps that feel native. Beautiful UX on both iOS and Android with a single codebase.', tags: ['React Native', 'Flutter'] },
    { icon: '🎨', title: 'UI/UX Design', desc: 'User-centered design that converts. We craft interfaces that are as intuitive as they are visually striking.', tags: ['Figma', 'Prototyping'] },
    { icon: '⚙️', title: 'Backend & APIs', desc: 'Scalable server architecture, RESTful APIs, and cloud integrations that power your digital products.', tags: ['AWS', 'Firebase', 'PostgreSQL'] },
    { icon: '🚀', title: 'SEO & Performance', desc: 'Technical SEO audits and performance optimization. We make sure clients find you and stay when they do.', tags: ['Core Web Vitals', 'Analytics'] },
    { icon: '🤝', title: 'Digital Strategy', desc: 'From ideation to launch and beyond. Strategic consulting to align your digital presence with business goals.', tags: ['Roadmapping', 'Consulting'] },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services">
      <div className="section-inner">
        <div className="section-head">
          <div>
            <p className="section-label">What We Do</p>
            <h2 className="section-title">Services Built<br/>for <em>Impact</em></h2>
          </div>
          <p className="section-desc">From concept to launch, we provide end-to-end software solutions that help businesses compete in the digital age.</p>
        </div>
        <div className="services-grid">
          {services.map((service, idx) => (
            <div key={idx} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              <div className="tags">
                {service.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;