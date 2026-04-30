'use client';

import { useTransform, motion, useScroll, MotionValue } from 'motion/react';
import { useRef } from 'react';
import Image from 'next/image';
import { Flag, GraduationCap } from 'lucide-react';

const parallelJourneys = [
  {
    period: '1970s - 1980s',
    title: 'The Foundation',
    uae: {
      year: '1971',
      title: 'Formation of the UAE',
      desc: 'Seven emirates united under one flag, founding one of the world\'s most ambitious nations.',
      icon: <Flag className="w-6 h-6 text-red-500" />,
    },
    nims: {
      year: '1980',
      title: 'NIMS Founded',
      desc: 'New Indian Model School opened its doors in Dubai with a small but determined founding class.',
      icon: <GraduationCap className="w-6 h-6 text-accent" />,
    },
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop',
    color: '#080C1C',
  },
  {
    period: '1990s',
    title: 'Infrastructure & Expansion',
    uae: {
      year: '1990s',
      title: 'Infrastructure Boom',
      desc: 'Rapid urbanisation transformed desert landscapes into world-class cities and economic hubs.',
      icon: <Flag className="w-6 h-6 text-red-500" />,
    },
    nims: {
      year: '1990s',
      title: 'Regional Expansion',
      desc: 'Growing demand led to new campuses across emirates, serving thousands of families.',
      icon: <GraduationCap className="w-6 h-6 text-accent" />,
    },
    image: 'https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?q=80&w=1000&auto=format&fit=crop',
    color: '#0D1530',
  },
  {
    period: '2000s',
    title: 'Global Hub & Multi-Campus',
    uae: {
      year: '2000s',
      title: 'Global Hub Rise',
      desc: 'Dubai and Abu Dhabi emerged as international centres for finance, tourism, and innovation.',
      icon: <Flag className="w-6 h-6 text-red-500" />,
    },
    nims: {
      year: '2000s',
      title: 'Multi-Campus Growth',
      desc: 'NIMS Group expanded its footprint with specialised schools and enhanced academic programmes.',
      icon: <GraduationCap className="w-6 h-6 text-accent" />,
    },
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1000&auto=format&fit=crop',
    color: '#080C1C',
  },
  {
    period: '2010s',
    title: 'Knowledge & Excellence',
    uae: {
      year: '2010s',
      title: 'Knowledge Economy',
      desc: 'The UAE invested heavily in education, technology, and human capital to diversify beyond oil.',
      icon: <Flag className="w-6 h-6 text-red-500" />,
    },
    nims: {
      year: '2010s',
      title: 'Academic Excellence',
      desc: 'Consistent top rankings, international accreditations, and award-winning faculty joined the group.',
      icon: <GraduationCap className="w-6 h-6 text-accent" />,
    },
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop',
    color: '#0D1530',
  },
  {
    period: 'Present & Future',
    title: 'Innovation & Future Vision',
    uae: {
      year: '2020+',
      title: 'Future Vision',
      desc: 'UAE 2071 vision charts a course toward AI, space exploration, and sustainable development.',
      icon: <Flag className="w-6 h-6 text-red-500" />,
    },
    nims: {
      year: 'Present',
      title: 'Leading Education Group',
      desc: 'NIMS Group stands as one of the UAE\'s most trusted education brands, shaping future generations.',
      icon: <GraduationCap className="w-6 h-6 text-accent" />,
    },
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop',
    color: '#080C1C',
  },
];

export default function ParallelEvolutionSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
      <section className="bg-slate-950 relative" ref={container}>
        {/* Intro Section */}
        <div className="h-[40vh] w-full flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold tracking-[0.2em] uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Parallel Journey
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              A Shared Vision <br />
              <span className="text-transparent bg-clip-text bg-orange-300">UAE & NIMS</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Witness the synchronized growth of a nation and its pioneering educational institution through the decades.
            </p>
          </motion.div>
        </div>

        {/* Stacking Cards Section */}
        <div className="pb-[5vh]">
          {parallelJourneys.map((journey, i) => {
            const targetScale = 1 - (parallelJourneys.length - i) * 0.05;
            return (
              <JourneyCard
                key={i}
                i={i}
                journey={journey}
                progress={scrollYProgress}
                range={[i * 0.2, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </section>
  );
}

interface JourneyCardProps {
  i: number;
  journey: typeof parallelJourneys[0];
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const JourneyCard: React.FC<JourneyCardProps> = ({
  i,
  journey,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-[80vh] flex items-center justify-center sticky top-0 px-4 md:px-0"
    >
      <motion.div
        style={{
          backgroundColor: journey.color,
          scale,
          top: `calc(5vh + ${i * 25}px)`,
        }}
        className="flex flex-col md:flex-row relative h-[auto] min-h-[450px] md:h-[500px] w-full max-w-5xl rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/50 origin-top"
      >
        {/* Left: Content */}
        <div className="flex-1 p-8 md:p-12 flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <span className="text-accent font-black tracking-widest text-lg md:text-xl uppercase">
              {journey.period}
            </span>
            <span className="text-white/20 text-xs font-bold tracking-[0.3em] uppercase">
              Milestone {i + 1}
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-white mb-10 leading-tight">
            {journey.title}
          </h3>

          <div className="space-y-8 flex-1">
            {/* UAE Side */}
            <div className="flex gap-5 group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-red-500/10 group-hover:border-red-500/20">
                {journey.uae.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest">UAE</span>
                  <span className="text-white/40 text-xs">—</span>
                  <span className="text-white font-bold text-sm">{journey.uae.year}</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{journey.uae.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{journey.uae.desc}</p>
              </div>
            </div>

            {/* NIMS Side */}
            <div className="flex gap-5 group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-accent/10 group-hover:border-accent/20">
                {journey.nims.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest">NIMS</span>
                  <span className="text-white/40 text-xs">—</span>
                  <span className="text-white font-bold text-sm">{journey.nims.year}</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{journey.nims.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{journey.nims.desc}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-[45%] h-[300px] md:h-full relative overflow-hidden border-t md:border-t-0 md:border-l border-white/10">
          <motion.div
            className="w-full h-full"
            style={{ scale: imageScale }}
          >
            <Image
              fill
              src={journey.image}
              alt={journey.title}
              className="object-cover transition-all duration-700 hover:scale-110"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
};
