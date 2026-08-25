"use client";
import React, { useEffect, useState, useRef } from "react";

const STATS_DATA = [
  { label: "Projects Delivered", value: 30, suffix: "+" },
  { label: "Client Satisfaction", value: 100, suffix: "%" },
  { label: "Global Clients", value: 15, suffix: "+" },
  { label: "Lines of Code", value: 1, suffix: "M+" }
];

const AnimatedNumber = ({ endValue }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp = null;
    const duration = 2000;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      // Use easeOutQuart for smooth deceleration
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOut * endValue));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, endValue]);

  return <span ref={nodeRef}>{count}</span>;
};

const Stats = () => {
  return (
    <section className="section-wrapper-soft" style={{ background: '#0a0d14', color: '#fff', padding: '60px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '40px' }}>
        {STATS_DATA.map((stat, i) => (
          <div key={i} style={{ textAlign: 'center', flex: '1 1 200px' }}>
            <div style={{ fontFamily: 'Syne', fontSize: 'clamp(40px, 5vw, 56px)', fontWeight: 800, color: '#3b82f6', marginBottom: '8px' }}>
              <AnimatedNumber endValue={stat.value} />{stat.suffix}
            </div>
            <div style={{ fontSize: '15px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
