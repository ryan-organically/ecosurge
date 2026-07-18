'use client';

import { useEffect, useRef, useState } from 'react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'mission', label: 'Mission' },
  { id: 'living-record', label: 'Species' },
  { id: 'ocean-tech', label: 'Ocean' },
  { id: 'cryosphere', label: 'Ice' },
  { id: 'terrestrial', label: 'Land' },
  { id: 'firewatch', label: 'Fire' },
  { id: 'thesis', label: 'Thesis' },
  { id: 'impact', label: 'Impact' },
  { id: 'research', label: 'Research' },
  { id: 'join', label: 'Join' },
];

export default function FloatingNav() {
  const [active, setActive] = useState('hero');
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    const handleScroll = () => {
      if (!progressRef.current) return;
      const pct =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;
      progressRef.current.style.width = pct + '%';
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      observers.forEach((o) => o.disconnect());
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="scroll-progress-bar"
        ref={progressRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: 3,
          background: '#059669',
          zIndex: 9999,
          width: '0%',
          transition: 'width 0.1s linear',
        }}
      />
      <nav className="floating-nav">
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`nav-dot${active === id ? ' active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="nav-label">{label}</span>
          </a>
        ))}
      </nav>
    </>
  );
}
