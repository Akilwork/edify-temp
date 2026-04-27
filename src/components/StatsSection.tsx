'use client';

import { useEffect, useRef, useState } from 'react';
import { stats } from '@/constants';

interface StatProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
}

function StatItem({ end, suffix = '', prefix = '', label, description }: StatProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const observed = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !observed.current) {
          observed.current = true;
          const duration = 2000;
          const start = performance.now();
          const tick = (now: number) => {
            const elapsed = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - elapsed, 3);
            setCount(Math.round(eased * end));
            if (elapsed < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center group">
      <div className="text-5xl font-bold mb-2 transition-all duration-300 group-hover:scale-105" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--green-800)' }}>
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-base font-semibold text-slate-800 mb-1">{label}</div>
      <div className="text-sm text-slate-500">{description}</div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="section-gap" style={{ background: 'var(--green-50)' }}>
      <div className="container-edify">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--gold-500)' }}>
            By the Numbers
          </p>
          <h2 className="text-3xl md:text-4xl mb-4 gold-rule-center" style={{ color: 'var(--green-900)' }}>
            Our Scale & Impact
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((s) => (
            <div key={s.label} className="relative">
              <StatItem {...s} />
              {/* Vertical divider – hide on last */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
