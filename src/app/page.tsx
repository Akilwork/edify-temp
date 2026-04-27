'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { trustIndicators, aboutFeatures, companies, uaeCities, timeline } from '@/constants';
import StatsSection from '@/components/StatsSection';
import { FadeIn, StaggerChildren, ScaleIn } from '@/components/ui/animations';
import FeatureSections from '@/components/feature-sections';
import { InfinityBrand } from '@/components/ui/infinity-brand';

// ─── Hero Section ──────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-ethereal pt-20"
    >
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(var(--slate-300) 0.5px, transparent 0.5px)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="container-edify relative z-10 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn y={20} duration={1}>
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-accent">
                MHUDA TRUST INITIATIVE
              </span>
            </div>
          </FadeIn>

          <FadeIn y={30} delay={0.2} duration={1.2}>
            <h1
              className="text-6xl md:text-5xl lg:text-7xl font-extrabold text-brand-black mb-10 leading-[1.05] tracking-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Empowering Education & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-black via-slate-600 to-brand-black">Institutional Excellence</span>
            </h1>
          </FadeIn>

          <FadeIn y={20} delay={0.4}>
            <p className="text-xl md:text-2xl text-slate-500 mb-14 leading-relaxed max-w-4xl mx-auto font-medium">
              A full-spectrum management consultancy serving educational institutions across the UAE and beyond — from academic governance to operational infrastructure.
            </p>
          </FadeIn>

          <FadeIn y={20} delay={0.6}>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2.5 px-10 py-5 rounded-full text-lg font-bold text-white bg-brand-black transition-all hover:scale-105 shadow-2xl shadow-black/20"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-10 py-5 rounded-full text-lg font-bold text-brand-black border-2 border-slate-200 hover:bg-white hover:border-brand-black transition-all"
              >
                Book A Free Call
              </Link>
            </div>
          </FadeIn>

        </div>
      </div>

      {/* Bottom Anchor: Trusted indicators */}
      <div className="absolute bottom-12 left-0 right-0 z-20">
        <div className="container-edify">
          <FadeIn y={20} delay={0.8}>
            <div className="flex flex-col items-center gap-6">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">As seen on</span>
              <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
                {trustIndicators.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 text-sm text-slate-600">
                    <Icon className="w-5 h-5 text-brand-black" />
                    <span className="font-semibold">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-12 animate-pulse" style={{ background: 'linear-gradient(to bottom, var(--accent-orange), transparent)' }} />
      </div>
    </section>
  );
}

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
            
            <h2 className="text-5xl md:text-5.5xl font-extrabold text-brand-black leading-[1.1]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Strategic Excellence for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-black to-slate-950">Modern Institutions</span>
            </h2>
            
            <div className="w-24 h-1.5 rounded-full bg-accent my-10"></div>
            
            <div className="space-y-6">
              <p className="text-xl text-slate-700 leading-relaxed font-medium">
                EDIFY Management Consultancy LLP is a premier education management firm under the umbrella of the <strong className="text-brand-black">MHUDA Trust</strong>.
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

// ─── Group Companies ────────────────────────────────────────────────────────────

function GroupCompaniesSection() {
  return (
    <section className="py-16 relative overflow-hidden bg-white">
      <div className="container-edify relative z-10">
        <FadeIn delay={0.2}>
          <InfinityBrand />
        </FadeIn>
      </div>
    </section>
  );
}

function UAEPresenceSection() {
  return (
    <section id="presence" className="section-gap relative bg-white">
      <div className="container-edify">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left: Sticky Content */}
          <div className="lg:sticky lg:top-32 lg:h-fit lg:w-1/2 space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sm uppercase tracking-[0.2em] font-bold text-accent">
                  Regional Impact
                </span>
                <div className="h-px w-12 bg-slate-200" />
              </div>
              
              <h2 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] text-brand-black" style={{ fontFamily: 'Playfair Display, serif' }}>
                Scale and Impact <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-black to-slate-400">Across the Region</span>
              </h2>
              
              <p className="text-xl text-slate-500 leading-relaxed max-w-lg">
                From our strategic hubs in the UAE to our growing international presence, we are committed to elevating educational standards worldwide.
              </p>
            </div>

            {/* Map visual placeholder */}
            <FadeIn>
              <div
                className="group rounded-[3rem] p-12 relative overflow-hidden transition-all duration-700 hover:shadow-2xl border border-slate-100 bg-slate-50"
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                    <span className="text-xs text-slate-500 uppercase tracking-[0.2em] font-bold">Active Hubs</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-y-8 gap-x-12">
                    {uaeCities.map((city) => (
                      <div key={city} className="flex items-center gap-4 group/city">
                        <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm transition-all duration-300 group-hover/city:shadow-md group-hover/city:scale-110">
                          <div className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_12px_var(--accent-orange)]" />
                        </div>
                        <span className="text-lg font-bold text-slate-700 group-hover/city:text-brand-black transition-colors">{city}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: Scrolling Timeline Cards */}
          <div className="lg:w-1/2 space-y-10 lg:pt-8">
            {timeline.map((item, i) => (
              <FadeIn key={item.year} delay={i * 0.1}>
                <div className="group relative bg-slate-50 rounded-[2.5rem] p-10 lg:p-12 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  <div className="absolute top-10 right-10 text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">
                    Milestone - 00{i + 1}
                  </div>
                  
                  <div className="relative z-10">
                    <div 
                      className="w-20 h-20 rounded-[2rem] flex items-center justify-center text-2xl font-black mb-10 transition-transform duration-500 group-hover:scale-110 bg-white shadow-sm text-brand-black border border-slate-100"
                    >
                      {item.year}
                    </div>
                    
                    <h3 className="text-3xl font-extrabold text-brand-black mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {item.title}
                    </h3>
                    
                    <p className="text-lg text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
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
        <h2
          className="text-5xl md:text-7xl text-white font-extrabold mb-10 max-w-4xl mx-auto leading-tight"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Partner with us for <br /> educational excellence
        </h2>
        <p className="text-slate-400 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
          Whether you're looking to transform a school, scale an institution, or build a world-class education ecosystem — we're the partner you need.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105 bg-accent text-white shadow-2xl shadow-orange-500/20"
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
    <main>
      <HeroSection />
      <GroupCompaniesSection />
      <AboutSection />
      <UAEPresenceSection />
      <StatsSection />
      <FeatureSections />
      <CTABanner />
    </main>
  );
}
