'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { aboutFeatures } from '@/constants';
import StatsSection from '@/components/StatsSection';
import { FadeIn, ScaleIn } from '@/components/ui/animations';
import FeatureSections from '@/components/feature-sections';
import ParallelEvolutionSection from '@/components/ParallelEvolutionSection';
import AffiliatedLogos from '@/components/AffiliatedLogos';
import TurnoverSection from '@/components/TurnoverSection';
import GlobalPresenceSection from '@/components/GlobalPresenceSection';
import CinematicScrollSection from '@/components/CinematicScrollSection';

function AboutSection() {
  return (
    <section
      id="about"
      className="section-gap relative overflow-hidden"
      style={{ background: 'var(--surface-0)' }}
    >
      <div className="container-edify">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left: Image */}
          <ScaleIn className="lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden group shadow-2xl shadow-black/8">
              <img
                className="w-full h-auto object-cover rounded-3xl transition-transform duration-700 group-hover:scale-[1.03]"
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop"
                alt="Education Management"
              />
              {/* Floating badge */}
              <div
                className="absolute bottom-6 left-6 flex items-center gap-4 px-5 py-4 rounded-2xl backdrop-blur-md shadow-xl"
                style={{
                  background: 'rgba(255,255,255,0.92)',
                  border: '1px solid rgba(255,255,255,0.6)',
                }}
              >
                <div className="flex -space-x-3 shrink-0">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200" alt="Executive" className="w-10 h-10 rounded-full border-2 border-white z-[1]" />
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200" alt="Consultant" className="w-10 h-10 rounded-full border-2 border-white z-[2]" />
                  <div
                    className="flex items-center justify-center text-xs font-bold text-white w-10 h-10 rounded-full border-2 border-white z-[3]"
                    style={{ background: 'var(--brand-black)' }}
                  >
                    50+
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>
                    Trusted by institutions
                  </p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    Across the UAE
                  </p>
                </div>
              </div>
            </div>
          </ScaleIn>

          {/* Right: Text */}
          <FadeIn className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px" style={{ background: 'var(--accent-primary)' }} />
              <span
                className="text-[11px] font-semibold tracking-[0.25em] uppercase"
                style={{ color: 'var(--accent-primary)' }}
              >
                Our Mission
              </span>
            </div>

            <h2
              className="mb-8 leading-[1.05]"
              style={{ color: 'var(--text-primary)', fontFamily: "'Syne', sans-serif" }}
            >
              Strategic Excellence for{' '}
              <span style={{ color: 'var(--text-muted)' }}>
                Modern Institutions
              </span>
            </h2>

            <div
              className="w-10 h-0.5 rounded-full mb-8"
              style={{ background: 'var(--accent-primary)' }}
            />

            <div className="space-y-5 mb-10">
              <p
                className="text-lg leading-relaxed font-medium"
                style={{ color: 'var(--text-secondary)' }}
              >
                Incorporated in{' '}
                <strong style={{ color: 'var(--text-primary)' }}>2018</strong>,
                EDIFY Management Consultancy LLP is a premier education management firm under
                the umbrella of the{' '}
                <strong style={{ color: 'var(--text-primary)' }}>MHUDA Trust</strong>.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-muted)' }}
              >
                We bridge the gap between academic vision and operational reality. Our
                multidisciplinary approach provides institutions with a single, trusted partner
                for everything from academic governance and HR to digital innovation and
                facilities management.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {aboutFeatures.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl group cursor-default transition-all duration-200"
                  style={{
                    background: 'var(--surface-1)',
                    border: '1px solid var(--border-light)',
                  }}
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200"
                    style={{ background: 'rgba(232,98,42,0.1)' }}
                  >
                    <CheckCircle2
                      className="w-3.5 h-3.5"
                      style={{ color: 'var(--accent-primary)' }}
                    />
                  </div>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'var(--brand-black)' }}
    >
      {/* Ambient glows */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(232,98,42,0.07) 0%, transparent 70%)',
          transform: 'translate(20%, -20%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)',
          transform: 'translate(-30%, 30%)',
        }}
      />

      <FadeIn className="container-edify relative z-10 py-28 md:py-36 text-center" y={30}>
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="w-8 h-px" style={{ background: 'var(--accent-primary)' }} />
          <span
            className="text-[11px] font-semibold tracking-[0.25em] uppercase"
            style={{ color: 'var(--accent-primary)' }}
          >
            Let's Collaborate
          </span>
          <span className="w-8 h-px" style={{ background: 'var(--accent-primary)' }} />
        </div>

        <h2
          className="text-white mb-6 max-w-3xl mx-auto leading-[1.05]"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Partner with us for{' '}
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>
            educational excellence
          </span>
        </h2>

        <p
          className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.4)' }}
        >
          Whether you're looking to transform a school, scale an institution, or build a
          world-class education ecosystem — we're the partner you need.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
            style={{ background: 'var(--accent-primary)' }}
          >
            Get in Touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02]"
            style={{ border: '1px solid rgba(255,255,255,0.12)' }}
          >
            View Services
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="relative">
      <CinematicScrollSection />
      <AffiliatedLogos />
      <AboutSection />
      <TurnoverSection />
      <GlobalPresenceSection />
      <ParallelEvolutionSection />
      <StatsSection />
      <FeatureSections />
      <CTABanner />
    </main>
  );
}
