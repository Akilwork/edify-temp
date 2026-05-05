'use client';

import { useEffect, useRef, useState } from 'react';
import { stats } from '@/constants';

interface StatProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
  isDynamic?: boolean;
  index: number;
}

function StatItem({ end, suffix = '', prefix = '', label, description, isDynamic, index }: StatProps) {
  const [count, setCount] = useState(0);
  const [latestVisitor, setLatestVisitor] = useState<string>('Dubai, UAE');
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

  useEffect(() => {
    if (isDynamic) {
      const interval = setInterval(() => {
        setCount(prev => prev + Math.floor(Math.random() * 3));
        const locations = ['Dubai', 'Abu Dhabi', 'Sharjah', 'London', 'Singapore', 'Mumbai', 'New York'];
        setLatestVisitor(`${locations[Math.floor(Math.random() * locations.length)]}`);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isDynamic]);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="group relative p-8 rounded-2xl transition-all duration-500 cursor-default"
      style={{
        background: isEven ? 'var(--surface-1)' : 'var(--surface-0)',
        border: '1px solid var(--border-light)',
      }}
    >
      {/* Hover accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'var(--accent-primary)' }}
      />

      <div
        className="text-4xl md:text-5xl font-bold mb-2 tracking-tight transition-all duration-300"
        style={{
          fontFamily: "'Syne', sans-serif",
          color: 'var(--text-primary)',
        }}
      >
        {prefix}{count.toLocaleString()}{suffix}
      </div>

      <div
        className="text-xs font-bold uppercase tracking-[0.18em] mb-1.5"
        style={{ color: 'var(--accent-primary)' }}
      >
        {label}
      </div>

      <div
        className="text-sm"
        style={{ color: 'var(--text-muted)' }}
      >
        {description}
      </div>

      {isDynamic && (
        <div
          className="mt-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider"
          style={{ color: 'var(--accent-primary)' }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: 'var(--accent-primary)' }}
          />
          Live · {latestVisitor}
        </div>
      )}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="section-gap" style={{ background: 'var(--surface-0)' }}>
      <div className="container-edify">
        {/* Header */}
        <div className="flex items-center gap-3 mb-12">
          <span
            className="w-8 h-px"
            style={{ background: 'var(--accent-primary)' }}
          />
          <span
            className="text-[11px] font-semibold tracking-[0.25em] uppercase"
            style={{ color: 'var(--accent-primary)' }}
          >
            By the Numbers
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <StatItem key={s.label} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
