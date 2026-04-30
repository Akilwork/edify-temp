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
}

function StatItem({ end, suffix = '', prefix = '', label, description, isDynamic }: StatProps) {
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

  // Real-time visitor update simulation
  useEffect(() => {
    if (isDynamic) {
      const interval = setInterval(() => {
        setCount(prev => prev + Math.floor(Math.random() * 3));
        const locations = ['Dubai', 'Abu Dhabi', 'Sharjah', 'London', 'Singapore', 'Mumbai', 'New York'];
        setLatestVisitor(`${locations[Math.floor(Math.random() * locations.length)]}, ${locations[Math.floor(Math.random() * locations.length)] === 'London' ? 'UK' : 'UAE'}`);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isDynamic]);

  return (
    <div ref={ref} className="text-left group border-l-2 md:border-l-0 md:border-t-2 lg:border-t-0 lg:border-l-2 border-slate-100 pl-8 md:pl-0 md:pt-8 lg:pt-0 lg:pl-8 transition-all duration-500 hover:border-brand-black">
      <div className="text-4xl md:text-5xl font-extrabold mb-1 tracking-tight text-brand-black transition-all duration-300 group-hover:scale-105">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">{label}</div>
      <div className="text-xs text-slate-500 font-medium">{description}</div>
      {isDynamic && (
        <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-accent uppercase tracking-tighter animate-pulse">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          Latest visitor from: {latestVisitor}
        </div>
      )}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="section-gap bg-white">
      <div className="container-edify">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
