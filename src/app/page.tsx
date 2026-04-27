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
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--green-900)' }}
    >
      {/* Geometric background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-2/3 h-full opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              var(--gold-500),
              var(--gold-500) 1px,
              transparent 1px,
              transparent 60px
            )`,
          }}
        />
        {/* Large decorative circle */}
        <div
          className="absolute -right-40 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-5"
          style={{ border: '80px solid var(--gold-500)' }}
        />
        <div
          className="absolute -right-60 top-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-[0.03]"
          style={{ border: '60px solid var(--gold-400)' }}
        />
      </div>

      {/* Gold accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--gold-500), transparent)' }}
      />

      <div className="container-edify relative z-10 py-32">
        <div className="max-w-7xl">
          <FadeIn y={20} duration={1}>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12" style={{ background: 'var(--gold-500)' }} />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: 'var(--gold-400)' }}>
                MHUDA Trust Initiative
              </span>
            </div>
          </FadeIn>

          <FadeIn y={30} delay={0.2} duration={1.2}>
            <h1
              className="text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-10 leading-[1.05]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              EDIFY Management <span style={{ color: 'var(--gold-400)' }}>Consultancy</span> LLP
            </h1>
          </FadeIn>

          <FadeIn y={20} delay={0.4}>
            <p className="text-xl md:text-3xl text-slate-300 mb-8 leading-relaxed max-w-4xl font-light">
              Empowering Education &amp; Institutional Excellence
            </p>
            <p className="text-base md:text-xl text-slate-400 mb-16 leading-relaxed max-w-3xl">
              A full-spectrum management consultancy serving educational institutions across the UAE and beyond — from academic governance to operational infrastructure.
            </p>
          </FadeIn>

          <FadeIn y={20} delay={0.6}>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-green-900/30 overflow-hidden relative"
                style={{ background: 'var(--gold-500)' }}
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                <span className="relative z-10">Explore Services</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-white border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </FadeIn>

        </div>
      </div>

      {/* Bottom Anchor: Trust indicators */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pb-12">
        <div className="container-edify">
          <FadeIn y={20} delay={0.8}>
            <div className="flex flex-wrap items-center gap-x-12 gap-y-6 pt-10 border-t border-white/10">
              {trustIndicators.map(({ icon: Icon, label }) => (
                <div key={label} className="group flex items-center gap-2 text-sm text-slate-400 cursor-default">
                  <Icon className="w-4 h-4 transition-transform group-hover:scale-110" style={{ color: 'var(--gold-500)' }} />
                  <span className="group-hover:text-white transition-colors">{label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-12 animate-pulse" style={{ background: 'linear-gradient(to bottom, var(--gold-500), transparent)' }} />
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="section-gap bg-[#F7F8FC] overflow-hidden">
      <div className="container-edify">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Image & Floating Badge (demo.tsx style) */}
          <ScaleIn className="lg:w-1/2">
            <div className="relative shadow-2xl shadow-indigo-600/20 rounded-3xl overflow-hidden group">
              <img 
                className="w-full h-auto object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105"
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop"
                alt="Education Management" 
              />
              <div className="flex items-center gap-4 max-w-sm absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm p-5 rounded-2xl shadow-xl border border-white/50">
                <div className="flex -space-x-4 shrink-0">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200" alt="Executive" className="w-12 h-12 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-1" />
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200" alt="Consultant" className="w-12 h-12 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[2]" />
                  <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200" alt="Manager" className="w-12 h-12 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[3]" />
                  <div className="flex items-center justify-center text-sm font-bold text-white w-12 h-12 rounded-full border-[3px] border-white bg-indigo-600 hover:-translate-y-1 transition z-[4]">
                    50+
                  </div>
                </div>
                <div className="pr-4">
                  <p className="text-sm font-bold text-slate-800 leading-tight">Trusted by institutions</p>
                  <p className="text-xs text-slate-500 mt-1">Across the UAE</p>
                </div>
              </div>
            </div>
          </ScaleIn>

          {/* Right: Text Content */}
          <FadeIn className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sm uppercase tracking-[0.2em] font-bold text-indigo-600">Who We Are</span>
              <div className="h-px w-12 bg-indigo-200" />
            </div>
            
            <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.1]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Built for the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400">Future of Education</span>
            </h2>
            
            <div className="w-24 h-1.5 rounded-full bg-indigo-600 my-10"></div>
            
            <div className="space-y-6">
              <p className="text-xl md:text-xl text-slate-700 leading-relaxed font-medium">
                EDIFY Management Consultancy LLP is a premier education management firm incorporated under the <strong className="text-indigo-900">MHUDA Trust</strong> — one of the region's most respected institutional foundations.
              </p>
              <p className="text-.5g text-slate-500 leading-relaxed">
                We operate at the intersection of educational excellence and corporate rigor, offering institutions a single trusted partner for everything from academic governance to technology adoption. Our consultancy spans school management, HR, facilities, psychological services, and innovation.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {aboutFeatures.map((item) => (
                <div key={item} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 group-hover:text-white transition-colors" />
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
    <section className="py-8 relative overflow-hidden bg-white">
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
    <section id="presence" className="section-gap relative">
      <div className="container-edify">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left: Sticky Content */}
          <div className="lg:sticky lg:top-32 lg:h-fit lg:w-1/2 space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sm uppercase tracking-[0.2em] font-bold" style={{ color: 'var(--gold-500)' }}>
                  Our Journey
                </span>
                <div className="h-px w-12" style={{ background: 'var(--gold-500)' }} />
              </div>
              
              <h2 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1]" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--green-900)' }}>
                Growth in the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r" style={{ backgroundImage: 'linear-gradient(to r, var(--green-700), var(--green-900))' }}>UAE & Beyond</span>
              </h2>
              
              <p className="text-xl text-slate-500 leading-relaxed max-w-lg">
                From a single Dubai office to a multi-country consultancy, our growth mirrors the ambition of the institutions we serve.
              </p>
            </div>

            {/* Map visual placeholder - Styled like a premium dashboard widget */}
            <FadeIn>
              <div
                className="group rounded-[2rem] p-10 relative overflow-hidden transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 border border-white/20"
                style={{ background: 'linear-gradient(135deg, var(--green-800), var(--green-900))' }}
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-8">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-slate-300 uppercase tracking-[0.2em] font-bold">Active Hubs</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-y-6 gap-x-12">
                    {uaeCities.map((city) => (
                      <div key={city} className="flex items-center gap-4 group/city">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center transition-all duration-300 group-hover/city:bg-white/10 group-hover/city:scale-110">
                          <div className="w-2 h-2 rounded-full shadow-[0_0_12px_var(--gold-500)]" style={{ background: 'var(--gold-500)' }} />
                        </div>
                        <span className="text-lg font-medium text-white/90 group-hover/city:text-white transition-colors">{city}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Background Decoration */}
                <div
                  className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full opacity-10 transition-transform duration-1000 group-hover:scale-125"
                  style={{ background: 'var(--gold-500)' }}
                />
              </div>
            </FadeIn>
          </div>

          {/* Right: Scrolling Timeline Cards */}
          <div className="lg:w-1/2 space-y-10 lg:pt-8">
            {timeline.map((item, i) => (
              <FadeIn key={item.year} delay={i * 0.1}>
                <div className="group relative bg-white rounded-[2.5rem] p-10 lg:p-12 border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  {/* Subtle index number (Assistantly style) */}
                  <div className="absolute top-10 right-10 text-xs font-mono text-slate-300 uppercase tracking-widest">
                    Milestone - 00{i + 1}
                  </div>
                  
                  <div className="relative z-10">
                    <div 
                      className="w-20 h-20 rounded-3xl flex items-center justify-center text-2xl font-bold mb-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm border border-slate-50"
                      style={{ 
                        background: i % 2 === 0 ? 'var(--green-50)' : 'var(--gold-50)',
                        color: i % 2 === 0 ? 'var(--green-800)' : 'var(--gold-600)'
                      }}
                    >
                      {item.year}
                    </div>
                    
                    <h3 className="text-3xl font-extrabold text-slate-900 mb-6 leading-tight group-hover:text-green-900 transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {item.title}
                    </h3>
                    
                    <p className="text-lg text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors">
                      {item.desc}
                    </p>
                  </div>

                  {/* Corner Accent */}
                  <div 
                    className="absolute bottom-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none"
                    style={{ background: 'var(--green-900)', borderRadius: '100% 0 0 0' }}
                  />
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
      className="relative py-24 overflow-hidden grain-overlay"
      style={{ background: 'linear-gradient(135deg, var(--green-800), var(--green-900))' }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'var(--gold-500)' }}
        />
        <div
          className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full opacity-5"
          style={{ background: 'var(--gold-300)' }}
        />
      </div>

      <FadeIn className="container-edify relative z-10 text-center" y={40}>
        <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: 'var(--gold-400)' }}>
          Let's Collaborate
        </p>
        <h2
          className="text-4xl md:text-6xl text-white mb-6 max-w-4xl mx-auto leading-tight"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Partner with us for educational excellence
        </h2>
        <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
          Whether you're looking to transform a school, scale an institution, or build a world-class education ecosystem — we're the partner you need.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-all hover:shadow-xl hover:scale-105"
            style={{ background: 'var(--gold-500)', color: 'white' }}
          >
            Get in Touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white border border-white/25 hover:bg-white/10 transition-all hover:scale-105"
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
