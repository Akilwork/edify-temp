'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'motion/react';

gsap.registerPlugin(ScrollTrigger);

// ─── Scene data ────────────────────────────────────────────────────────────────
const scenes = [
  {
    id: 'sunrise',
    bg: '/assets/Edify images/Frame 1.jpg',
    overlay: 'from-black/70 via-black/30 to-transparent',
    label: 'Est. 2018',
    headline: 'Built on Trust.',
    sub: 'Driven by Innovation.',
    accent: '#F97316',
    parallaxY: -80,
  },
  {
    id: 'corporate',
    bg: '/assets/Edify images/Frame 2.jpg',
    overlay: 'from-black/80 via-black/40 to-black/10',
    label: 'Our Environment',
    headline: 'Where Vision',
    sub: 'Meets Execution.',
    accent: '#6366F1',
    parallaxY: -60,
  },
  {
    id: 'uae-map',
    bg: '/assets/Edify images/Frame 3.jpg',
    overlay: 'from-slate-950/90 via-slate-950/50 to-transparent',
    label: 'UAE Presence',
    headline: 'Expanding',
    sub: 'Across the Emirates.',
    accent: '#F97316',
    parallaxY: -70,
  },
  {
    id: 'services',
    bg: '/assets/Edify images/Frame 4.jpg',
    overlay: 'from-black/85 via-black/40 to-transparent',
    label: 'Our Services',
    headline: 'Complete Solutions',
    sub: 'For Every Institution.',
    accent: '#6366F1',
    parallaxY: -50,
  },
  {
    id: 'leadership',
    bg: '/assets/Edify images/Frame 5.jpg',
    overlay: 'from-black/80 via-black/35 to-transparent',
    label: 'Leadership',
    headline: 'People Who',
    sub: 'Drive Change.',
    accent: '#F97316',
    parallaxY: -65,
  },
  {
    id: 'results',
    bg: '/assets/Edify images/Frame 6.jpg',
    overlay: 'from-black/75 via-black/30 to-transparent',
    label: 'Impact',
    headline: 'Measurable Results.',
    sub: 'Lasting Legacy.',
    accent: '#6366F1',
    parallaxY: -55,
  },
  {
    id: 'innovation',
    bg: '/assets/Edify images/Frame 7.jpg',
    overlay: 'from-black/80 via-black/35 to-transparent',
    label: 'Innovation',
    headline: 'Future-Ready',
    sub: 'Learning Spaces.',
    accent: '#F97316',
    parallaxY: -60,
  },
  {
    id: 'excellence',
    bg: '/assets/Edify images/Frame 8.jpg',
    overlay: 'from-black/80 via-black/35 to-transparent',
    label: 'Excellence',
    headline: 'Academic',
    sub: 'Excellence.',
    accent: '#6366F1',
    parallaxY: -70,
  },
  {
    id: 'digital',
    bg: '/assets/Edify images/Frame 9.jpg',
    overlay: 'from-black/80 via-black/35 to-transparent',
    label: 'Digital',
    headline: 'Smart',
    sub: 'Technology.',
    accent: '#F97316',
    parallaxY: -50,
  },
  {
    id: 'partnership',
    bg: '/assets/Edify images/Frame 11.jpg',
    overlay: 'from-black/80 via-black/35 to-transparent',
    label: 'Partnership',
    headline: 'Growing',
    sub: 'The Future.',
    accent: '#F97316',
    parallaxY: -55,
  },
];

const services = [
  { icon: '🎓', label: 'Education' },
  { icon: '💼', label: 'Consultancy' },
  { icon: '👥', label: 'HR Solutions' },
  { icon: '💻', label: 'IT & Tech' },
  { icon: '🤖', label: 'Robotics' },
  { icon: '🧠', label: 'Counselling' },
  { icon: '🎨', label: 'Branding' },
  { icon: '👔', label: 'Uniforms' },
  { icon: '🏢', label: 'Facilities' },
];

const stats = [
  { value: '50+', label: 'Institutions Served' },
  { value: '6+', label: 'UAE Emirates' },
  { value: '2018', label: 'Established' },
  { value: '9', label: 'Service Verticals' },
];

// ─── UAE Map Node Animation ────────────────────────────────────────────────────
const uaeNodes = [
  { x: '72%', y: '38%', city: 'Dubai', delay: 0 },
  { x: '55%', y: '28%', city: 'Abu Dhabi', delay: 0.3 },
  { x: '82%', y: '22%', city: 'Sharjah', delay: 0.6 },
  { x: '88%', y: '15%', city: 'Ajman', delay: 0.9 },
  { x: '78%', y: '10%', city: 'RAK', delay: 1.2 },
  { x: '65%', y: '18%', city: 'Fujairah', delay: 1.5 },
];

// ─── Component ─────────────────────────────────────────────────────────────────
export default function CinematicScrollSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  // Scene panel refs
  const sceneRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const labelRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const headlineRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const subRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalScenes = scenes.length;

      // ── Master timeline pinned to the sticky container ──
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.2,
          pin: stickyRef.current,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (progressBarRef.current) {
              progressBarRef.current.style.width = `${self.progress * 100}%`;
            }
          },
        },
      });

      // ── Animate each scene in/out ──
      scenes.forEach((_, i) => {
        const scene = sceneRefs.current[i];
        const bg = bgRefs.current[i];
        const content = contentRefs.current[i];
        const label = labelRefs.current[i];
        const headline = headlineRefs.current[i];
        const sub = subRefs.current[i];

        if (!scene) return;

        const segmentDuration = 1 / totalScenes;
        const start = i * segmentDuration;
        const mid = start + segmentDuration * 0.35;
        const end = start + segmentDuration;

        // Scene enter
        masterTl.fromTo(
          scene,
          { opacity: 0 },
          { opacity: 1, duration: segmentDuration * 0.3, ease: 'power2.inOut' },
          start
        );

        // Parallax, Pan and Zoom effect
        if (bg) {
          const isEven = i % 2 === 0;
          masterTl.fromTo(
            bg,
            { 
              yPercent: 0, 
              xPercent: isEven ? -4 : 4,
              scale: 1.1 
            },
            { 
              yPercent: 10, 
              xPercent: isEven ? 4 : -4,
              scale: 1,
              ease: 'none', 
              duration: segmentDuration 
            },
            start
          );
        }

        // Content entrance
        if (label) {
          masterTl.fromTo(
            label,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: segmentDuration * 0.25, ease: 'power3.out' },
            start + segmentDuration * 0.05
          );
        }
        if (headline) {
          masterTl.fromTo(
            headline,
            { opacity: 0, y: 40, clipPath: 'inset(0 0 100% 0)' },
            { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: segmentDuration * 0.3, ease: 'power3.out' },
            start + segmentDuration * 0.08
          );
        }
        if (sub) {
          masterTl.fromTo(
            sub,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: segmentDuration * 0.25, ease: 'power3.out' },
            start + segmentDuration * 0.14
          );
        }

        // Content exit (except last scene)
        if (i < totalScenes - 1) {
          if (content) {
            masterTl.to(
              content,
              { opacity: 0, y: -30, duration: segmentDuration * 0.2, ease: 'power2.in' },
              mid
            );
          }
          // Scene fade out
          masterTl.to(
            scene,
            { opacity: 0, duration: segmentDuration * 0.15, ease: 'power2.in' },
            end - segmentDuration * 0.15
          );
        }
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="relative"
      style={{ height: `${scenes.length * 120}vh` }}
      aria-label="Cinematic story scroll"
    >
      {/* ── Sticky viewport ── */}
      <div
        ref={stickyRef}
        className="sticky top-0 w-full h-screen overflow-hidden bg-slate-900"
      >
        {/* ── Progress bar ── */}
        <div className="absolute top-0 left-0 right-0 z-50 h-[2px] bg-white/10">
          <div
            ref={progressBarRef}
            className="h-full bg-gradient-to-r from-orange-500 to-indigo-500 transition-none"
            style={{ width: '0%' }}
          />
        </div>

        {/* ── Scene panels ── */}
        {scenes.map((scene, i) => (
          <div
            key={scene.id}
            ref={(el) => { sceneRefs.current[i] = el; }}
            className="absolute inset-0 w-full h-full"
            style={{ opacity: i === 0 ? 1 : 0 }}
          >
            {/* Parallax background */}
            <div
              ref={(el) => { bgRefs.current[i] = el; }}
              className="absolute inset-0 will-change-transform bg-slate-800"
              style={{ 
                height: '130%', 
                width: '115%',
                top: '-15%', 
                left: '-7.5%'
              }}
            >
              <img
                src={scene.bg}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover"
                loading="eager"
                draggable={false}
              />
            </div>

            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r ${scene.overlay}`} />

            {/* Cinematic letterbox bars */}
            <div className="absolute top-0 left-0 right-0 h-[6vh] bg-gradient-to-b from-black/40 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-[6vh] bg-gradient-to-t from-black/40 to-transparent z-10" />



            {/* Content */}
            <div
              ref={(el) => { contentRefs.current[i] = el; }}
              className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-[6vh] pb-[6vh]"
            >
              <div className="max-w-3xl">
                {/* Label */}
                <span
                  ref={(el) => { labelRefs.current[i] = el; }}
                  className="inline-flex items-center gap-2 text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-6 px-4 py-2 rounded-full border backdrop-blur-md"
                  style={{
                    color: scene.accent,
                    borderColor: `${scene.accent}40`,
                    backgroundColor: `${scene.accent}15`,
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ backgroundColor: scene.accent }}
                  />
                  {scene.label}
                </span>

                {/* Headline */}
                <h2
                  ref={(el) => { headlineRefs.current[i] = el; }}
                  className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.0] tracking-tight mb-4"
                  style={{ fontFamily: "'Jost', sans-serif" }}
                >
                  {scene.headline}
                </h2>

                {/* Sub */}
                <p
                  ref={(el) => { subRefs.current[i] = el; }}
                  className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight"
                  style={{ color: scene.accent, fontFamily: "'Jost', sans-serif" }}
                >
                  {scene.sub}
                </p>
              </div>
            </div>

            {/* Scene-specific overlays */}
            {scene.id === 'uae-map' && <UAEMapOverlay />}
            {scene.id === 'services' && <ServicesHubOverlay />}
            {scene.id === 'results' && <StatsOverlay />}
          </div>
        ))}

        {/* ── Watermark ── */}
        <div
          className="absolute bottom-[10vh] left-8 md:left-16 z-30 pointer-events-none select-none"
          aria-hidden="true"
        >
          <p
            className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-white/20"
          >
            EDIFY Management Consultancy LLP
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── UAE Map Overlay ───────────────────────────────────────────────────────────
function UAEMapOverlay() {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
      {/* Connection lines SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {uaeNodes.map((node, i) =>
          uaeNodes.slice(i + 1).map((target, j) => (
            <motion.line
              key={`${i}-${j}`}
              x1={node.x}
              y1={node.y}
              x2={target.x}
              y2={target.y}
              stroke="#F97316"
              strokeWidth="0.3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 1.5, delay: node.delay + 0.5, ease: 'easeOut' }}
            />
          ))
        )}
      </svg>

      {/* City nodes */}
      {uaeNodes.map((node, i) => (
        <motion.div
          key={node.city}
          className="absolute flex flex-col items-center gap-1"
          style={{ left: node.x, top: node.y, transform: 'translate(-50%, -50%)' }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: node.delay, type: 'spring', stiffness: 200 }}
        >
          {/* Pulse ring */}
          <motion.div
            className="absolute rounded-full border border-orange-400/60"
            style={{ width: 32, height: 32 }}
            animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: node.delay }}
          />
          {/* Dot */}
          <div className="w-3 h-3 rounded-full bg-orange-400 shadow-lg shadow-orange-500/50 z-10" />
          {/* Label */}
          <span className="text-[10px] md:text-xs font-bold text-white/80 tracking-wider whitespace-nowrap mt-1">
            {node.city}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

// ─── Services Hub Overlay ──────────────────────────────────────────────────────
function ServicesHubOverlay() {
  return (
    <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
      <div className="grid grid-cols-3 gap-3 md:gap-4">
        {services.map((svc, i) => (
          <motion.div
            key={svc.label}
            className="flex flex-col items-center gap-2 px-3 py-4 rounded-2xl border border-white/10 backdrop-blur-md bg-white/5"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              type: 'spring',
              stiffness: 150,
            }}
          >
            <span className="text-2xl" role="img" aria-label={svc.label}>{svc.icon}</span>
            <span className="text-[10px] md:text-xs font-semibold text-white/80 text-center leading-tight">
              {svc.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── Stats Overlay ─────────────────────────────────────────────────────────────
function StatsOverlay() {
  return (
    <div className="absolute bottom-[12vh] left-0 right-0 z-20 px-8 md:px-16 lg:px-24 pointer-events-none">
      <div className="flex flex-wrap gap-6 md:gap-10">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
          >
            <span
              className="text-4xl md:text-5xl font-extrabold leading-none"
              style={{ color: i % 2 === 0 ? '#F97316' : '#6366F1', fontFamily: "'Jost', sans-serif" }}
            >
              {stat.value}
            </span>
            <span className="text-xs md:text-sm font-medium text-white/60 mt-1 tracking-wide">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
