'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { aboutFeatures } from '@/constants';
import StatsSection from '@/components/StatsSection';
import { FadeIn, ScaleIn } from '@/components/ui/animations';
import FeatureSections from '@/components/feature-sections';
import HeroSection from '@/components/HeroSection';
import ParallelEvolutionSection from '@/components/ParallelEvolutionSection';
import BackgroundWatermark from '@/components/BackgroundWatermark';
import AffiliatedLogos from '@/components/AffiliatedLogos';
import TurnoverSection from '@/components/TurnoverSection';
import ZoomParallaxSection from '@/components/ZoomParallaxSection';
import GlobalPresenceSection from '@/components/GlobalPresenceSection';
import CinematicScrollSection from '@/components/CinematicScrollSection';

function AboutSection() {
  return (
    <section id="about" className="section-gap bg-slate-50 overflow-hidden">
      <div className="container-edify">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Image & Floating Badge */}
          <ScaleIn className="lg:w-1/2">
            <div className="relative shadow-2xl shadow-black/5 rounded-[3rem] overflow-hidden group">
              <img 
                className="w-full h-auto object-cover rounded-[3rem] transition-transform duration-700 group-hover:scale-105"
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop"
                alt="Education Management" 
              />
              <div className="flex items-center gap-4 max-w-sm absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-[2rem] shadow-xl border border-white/50">
                <div className="flex -space-x-4 shrink-0">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200" alt="Executive" className="w-12 h-12 rounded-full border-[3px] border-white z-1" />
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200" alt="Consultant" className="w-12 h-12 rounded-full border-[3px] border-white z-[2]" />
                  <div className="flex items-center justify-center text-sm font-bold text-white w-12 h-12 rounded-full border-[3px] border-white bg-brand-black z-[3]">
                    50+
                  </div>
                </div>
                <div className="pr-4">
                  <p className="text-sm font-bold text-brand-black leading-tight">Trusted by institutions</p>
                  <p className="text-xs text-slate-500 mt-1">Across the UAE</p>
                </div>
              </div>
            </div>
          </ScaleIn>

          {/* Right: Text Content */}
          <FadeIn className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sm uppercase tracking-[0.2em] font-bold text-accent">Our Mission</span>
              <div className="h-px w-12 bg-slate-200" />
            </div>
            
            <h2 className="leading-[1.1]">
              Strategic Excellence for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-black to-slate-950">Modern Institutions</span>
            </h2>
            
            <div className="w-24 h-1.5 rounded-full bg-accent my-10"></div>
            
            <div className="space-y-6">
              <p className="text-xl text-slate-700 leading-relaxed font-medium">
                Incorporated in <strong className="text-brand-black">2018</strong>, EDIFY Management Consultancy LLP is a premier education management firm under the umbrella of the <strong className="text-brand-black">MHUDA Trust</strong>.
              </p>
              <p className="text-lg text-slate-500 leading-relaxed">
                We bridge the gap between academic vision and operational reality. Our multidisciplinary approach provides institutions with a single, trusted partner for everything from academic governance and HR to digital innovation and facilities management.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {aboutFeatures.map((item) => (
                <div key={item} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-orange-50 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                    <CheckCircle2 className="w-4 h-4 text-accent group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-base font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}



// ─── CTA Banner ────────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section
      className="relative py-32 overflow-hidden bg-brand-black"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div
          className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full blur-[100px]"
          style={{ background: 'var(--accent-orange)' }}
        />
        <div
          className="absolute -bottom-10 -left-10 w-[400px] h-[400px] rounded-full blur-[80px]"
          style={{ background: 'var(--accent-blue)' }}
        />
      </div>

      <FadeIn className="container-edify relative z-10 text-center" y={40}>
        <p className="text-sm font-bold tracking-[0.2em] uppercase mb-6 text-accent">
          Let's Collaborate
        </p>
        <h2 className="text-white mb-10 max-w-4xl mx-auto leading-tight">
          Partner with us for <br /> educational excellence
        </h2>
        <p className="text-slate-400 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
          Whether you're looking to transform a school, scale an institution, or build a world-class education ecosystem — we're the partner you need.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105 bg-accent text-white"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-lg font-bold text-white border-2 border-white/10 hover:bg-white/5 transition-all hover:scale-105"
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
      {/* <BackgroundWatermark /> */}
      {/* <HeroSection /> */}
      <CinematicScrollSection />
      <AffiliatedLogos />
      <AboutSection />
      <TurnoverSection />
      <GlobalPresenceSection />
      <ParallelEvolutionSection />
      <StatsSection />
      <FeatureSections />
      {/* <ScrollTextAnimation /> */}
      {/* <ZoomParallaxSection /> */}
      <CTABanner />
    </main>
  );
}
