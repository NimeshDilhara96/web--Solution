import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "CTO, TechFlow Inc.",
      content: "MommentX completely transformed our platform. Their technical expertise and agile process delivered exactly what we needed, ahead of schedule. The team is incredibly communicative.",
      rating: 5
    },
    {
      name: "David Chen",
      role: "Founder, GrowthSaaS",
      content: "Finding a reliable development partner is hard, but MommentX exceeded all expectations. They built our MVP in record time and the code quality is top-notch. Highly recommended for startups.",
      rating: 5
    },
    {
      name: "Michael Roberts",
      role: "Operations Manager, LogisticsPro",
      content: "The custom ERP system they built for us streamlined our entire supply chain. What used to take days now takes minutes. The ROI has been phenomenal.",
      rating: 5
    }
  ];

  return (
    <section className="section-wrapper-soft" style={{ background: '#f8fafc', padding: '80px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="section-label" style={{ display: 'block', width: 'max-content', margin: '0 auto 20px' }}>
          Client Success
        </div>
        <h2 style={{ 
          fontFamily: 'Syne', 
          fontSize: 'clamp(32px, 5vw, 48px)', 
          fontWeight: 800, 
          textAlign: 'center', 
          marginBottom: '48px',
          color: '#0a0d14'
        }}>
          What Our Clients Say
        </h2>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '32px' 
        }}>
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx} 
              style={{ 
                background: '#ffffff', 
                padding: '40px 32px', 
                borderRadius: '16px', 
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)'
              }}
            >
              <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} style={{ color: '#f59e0b', fontSize: '20px' }}>★</span>
                ))}
              </div>
              <p style={{ 
                fontSize: '16px', 
                color: '#475569', 
                lineHeight: 1.7, 
                marginBottom: '24px',
                fontStyle: 'italic'
              }}>
                "{testimonial.content}"
              </p>
              <div>
                <div style={{ fontWeight: 700, color: '#0a0d14', fontSize: '16px' }}>{testimonial.name}</div>
                <div style={{ color: '#64748b', fontSize: '14px' }}>{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
