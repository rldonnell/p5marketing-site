'use client';

import { useEffect, useRef } from 'react';

interface FadeUpProps {
  children: React.ReactNode;
  className?: string;
}

export default function FadeUp({ children, className = '' }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && ref.current) {
          ref.current.classList.add('p5-visible');
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`p5-fade-up ${className}`}>
      {children}
    </div>
  );
}
