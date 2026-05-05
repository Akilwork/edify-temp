'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

const parallelJourneys = [
  {
    period: '1970s – 1980s',
    index: '01',
    title: 'The Foundation',
    uae: {
      year: '1971',
      label: 'UAE',
      title: 'Formation of the UAE',
      desc: "Seven emirates united under one flag, founding one of the world's most ambitious nations.",
    },
    nims: {
      year: '1980',
      label: 'NIMS',
      title: 'NIMS Founded',
      desc: 'New Indian Model School opened its doors in Dubai with a small but determined founding class.',
    },
    image:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1400&auto=format&fit=crop',
  },
  {
    period: '1990s',
    index: '02',
    title: 'Infrastructure & Expansion',
    uae: {
      year: '1990s',
      label: 'UAE',
      title: 'Infrastructure Boom',
      desc: 'Rapid urbanisation transformed desert landscapes into world-class cities and economic hubs.',
    },
    nims: {
      year: '1990s',
      label: 'NIMS',
      title: 'Regional Expansion',
      desc: 'Growing demand led to new campuses across emirates, serving thousands of families.',
    },
    image:
      'https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?q=80&w=1400&auto=format&fit=crop',
  },
  {
    period: '2000s',
    index: '03',
    title: 'Global Hub & Multi-Campus',
    uae: {
      year: '2000s',
      label: 'UAE',
      title: 'Global Hub Rise',
      desc: 'Dubai and Abu Dhabi emerged as international centres for finance, tourism, and innovation.',
    },
    nims: {
      year: '2000s',
      label: 'NIMS',
      title: 'Multi-Campus Growth',
      desc: 'NIMS Group expanded its footprint with specialised schools and enhanced academic programmes.',
    },
    image:
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1400&auto=format&fit=crop',
  },
  {
    period: '2010s',
    index: '04',
    title: 'Knowledge & Excellence',
    uae: {
      year: '2010s',
      label: 'UAE',
      title: 'Knowledge Economy',
      desc: 'The UAE invested heavily in education, technology, and human capital to diversify beyond oil.',
    },
    nims: {
      year: '2010s',
      label: 'NIMS',
      title: 'Academic Excellence',
      desc: 'Consistent top rankings, international accreditations, and award-winning faculty joined the group.',
    },
    image:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1400&auto=format&fit=crop',
  },
  {
    period: 'Present & Future',
    index: '05',
    title: 'Innovation & Future Vision',
    uae: {
      year: '2020+',
      label: 'UAE',
      title: 'Future Vision',
      desc: 'UAE 2071 vision charts a course toward AI, space exploration, and sustainable development.',
    },
    nims: {
      year: 'Present',
      label: 'NIMS',
      title: 'Leading Education Group',
      desc: "NIMS Group stands as one of the UAE's most trusted education brands, shaping future generations.",
    },
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1400&auto=format&fit=crop',
  },
];

/* ─── Individual text entry ─────────────────────────────────────────── */
function JourneyEntry({
  journey,
  isActive,
  entryRef,
}: {
  journey: (typeof parallelJourneys)[0];
  isActive: boolean;
  entryRef: (el: HTMLDivElement | null) => void;
}) {
  return (
    <div
      ref={entryRef}
      className="py-8 md:py-12 border-b border-neutral-200 last:border-b-0 transition-opacity duration-500"
      style={{ opacity: isActive ? 1 : 0.35 }}
    >
      <div className="flex items-center gap-4 mb-4">
        <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-neutral-400">
          {journey.index}
        </span>
        <span className="h-px flex-1 bg-neutral-200" />
        <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-neutral-400">
          {journey.period}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 leading-tight tracking-tight">
        {journey.title}
      </h3>

      {/* Two-column entries */}
      <div className="grid grid-cols-1 gap-6">
        {/* UAE */}
        <div className="flex gap-6">
          <div className="flex flex-col items-center gap-2 pt-1">
            <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
            <span className="w-px flex-1 bg-neutral-200" />
          </div>
          <div className="pb-2">
            <div className="flex items-baseline gap-3 mb-3">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-red-500">
                UAE
              </span>
              <span className="text-xs text-neutral-400 font-medium">{journey.uae.year}</span>
            </div>
            <p className="text-base font-semibold text-neutral-800 mb-2 leading-snug">
              {journey.uae.title}
            </p>
            <p className="text-sm text-neutral-500 leading-relaxed">{journey.uae.desc}</p>
          </div>
        </div>

        {/* NIMS */}
        <div className="flex gap-6">
          <div className="flex flex-col items-center gap-2 pt-1">
            <span
              className="w-2 h-2 rounded-full shrink-0"
              style={{ backgroundColor: 'var(--accent-orange)' }}
            />
            <span className="w-px flex-1 bg-neutral-200" />
          </div>
          <div className="pb-2">
            <div className="flex items-baseline gap-3 mb-3">
              <span
                className="text-[10px] font-bold tracking-[0.3em] uppercase"
                style={{ color: 'var(--accent-orange)' }}
              >
                NIMS
              </span>
              <span className="text-xs text-neutral-400 font-medium">{journey.nims.year}</span>
            </div>
            <p className="text-base font-semibold text-neutral-800 mb-2 leading-snug">
              {journey.nims.title}
            </p>
            <p className="text-sm text-neutral-500 leading-relaxed">{journey.nims.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Sticky image panel ─────────────────────────────────────────────── */
function StickyImagePanel({ activeIndex }: { activeIndex: number }) {
  const journey = parallelJourneys[activeIndex];

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden bg-neutral-100">
      {parallelJourneys.map((j, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: i === activeIndex ? 1 : 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Image
            src={j.image}
            alt={j.title}
            fill
            className="object-cover"
            sizes="50vw"
            priority={i === 0}
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>
      ))}

      {/* Bottom caption */}
      <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/50 to-transparent">
        <motion.p
          key={activeIndex}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-white/90 text-sm font-medium tracking-wide"
        >
          {journey.period} — {journey.title}
        </motion.p>
      </div>

      {/* Progress dots */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3">
        {parallelJourneys.map((_, i) => (
          <span
            key={i}
            className="block rounded-full transition-all duration-300"
            style={{
              width: i === activeIndex ? '6px' : '4px',
              height: i === activeIndex ? '24px' : '4px',
              backgroundColor:
                i === activeIndex ? 'var(--accent-orange)' : 'rgba(255,255,255,0.4)',
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Main section ───────────────────────────────────────────────────── */
export default function ParallelEvolutionSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const entryRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const viewportMid = window.innerHeight / 2;
      let closestIndex = 0;
      let closestDist = Infinity;

      entryRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elMid = rect.top + rect.height / 2;
        const dist = Math.abs(elMid - viewportMid);
        if (dist < closestDist) {
          closestDist = dist;
          closestIndex = i;
        }
      });

      setActiveIndex(closestIndex);
    };

    // Run once on mount to set correct initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bg-white">
      {/* ── Section header ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-2">
        <div className="flex items-center gap-4 mb-6">
          <span
            className="w-6 h-px"
            style={{ backgroundColor: 'var(--accent-orange)' }}
          />
          <span
            className="text-[11px] font-bold tracking-[0.3em] uppercase"
            style={{ color: 'var(--accent-orange)' }}
          >
            Parallel Journey
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-neutral-900 leading-tight tracking-tight max-w-2xl">
          A Shared Vision
          <br />
          <span style={{ color: 'var(--accent-orange)' }}>UAE &amp; NIMS</span>
        </h2>
        <p className="mt-4 text-sm text-neutral-500 max-w-lg leading-relaxed">
          Witness the synchronised growth of a nation and its pioneering educational institution
          through the decades.
        </p>
      </div>

      {/* ── Split layout ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-0 md:gap-16 lg:gap-24">
          {/* Left: scrolling text */}
          <div className="w-full md:w-1/2 lg:w-[45%]">
            {parallelJourneys.map((journey, i) => (
              <JourneyEntry
                key={i}
                journey={journey}
                isActive={activeIndex === i}
                entryRef={(el) => {
                  entryRefs.current[i] = el;
                }}
              />
            ))}
            {/* Bottom spacer so last entry can become active */}
            <div className="h-[10vh]" />
          </div>

          {/* Right: sticky image — hidden on mobile, shown md+ */}
          <div className="hidden md:block w-1/2 lg:w-[55%]">
            <StickyImagePanel activeIndex={activeIndex} />
          </div>
        </div>
      </div>
    </section>
  );
}
