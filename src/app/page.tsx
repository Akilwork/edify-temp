'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { trustIndicators, aboutFeatures, companies, uaeCities, timeline } from '@/constants';
import StatsSection from '@/components/StatsSection';
import { FadeIn, StaggerChildren, ScaleIn } from '@/components/ui/animations';
import FeatureSections from '@/components/feature-sections';

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
        <div className="max-w-3xl">
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
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              EDIFY Management
              <br />
              <span style={{ color: 'var(--gold-400)' }}>Consultancy</span> LLP
            </h1>
          </FadeIn>

          <FadeIn y={20} delay={0.4}>
            <p className="text-xl text-slate-300 mb-4 leading-relaxed max-w-2xl font-light">
              Empowering Education &amp; Institutional Excellence
            </p>
            <p className="text-base text-slate-400 mb-12 leading-relaxed max-w-xl">
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

          {/* Trust indicators */}
          <FadeIn y={20} delay={0.8}>
            <div className="flex flex-wrap items-center gap-6 mt-14 pt-10 border-t border-white/10">
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
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left: Image & Floating Badge (demo.tsx style) */}
          <ScaleIn>
            <div className="relative shadow-2xl shadow-indigo-600/20 rounded-3xl overflow-hidden shrink-0 group">
              <img 
                className="max-w-lg w-full object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105"
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop"
                alt="Education Management" 
              />
              <div className="flex items-center gap-4 max-w-sm absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-white/50">
                <div className="flex -space-x-4 shrink-0">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200" alt="Executive" className="w-10 h-10 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-1" />
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200" alt="Consultant" className="w-10 h-10 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[2]" />
                  <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200" alt="Manager" className="w-10 h-10 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[3]" />
                  <div className="flex items-center justify-center text-xs font-bold text-white w-10 h-10 rounded-full border-[3px] border-white bg-indigo-600 hover:-translate-y-1 transition z-[4]">
                    50+
                  </div>
                </div>
                <div className="pr-2">
                  <p className="text-sm font-bold text-slate-800 leading-tight">Trusted by institutions</p>
                  <p className="text-xs text-slate-500 mt-0.5">Across the UAE</p>
                </div>
              </div>
            </div>
          </ScaleIn>

          {/* Right: Text Content */}
          <FadeIn className="text-sm text-slate-600 max-w-xl">
            <h1 className="text-sm uppercase tracking-widest font-bold text-indigo-600 mb-2">Who We Are</h1>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Built for the Future of Education
            </h2>
            <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF] my-8"></div>
            
            <p className="mt-8 text-lg text-slate-700 leading-relaxed">
              EDIFY Management Consultancy LLP is a premier education management firm incorporated under the <strong className="text-slate-900">MHUDA Trust</strong> — one of the region's most respected institutional foundations.
            </p>
            <p className="mt-4 text-base text-slate-500 leading-relaxed">
              We operate at the intersection of educational excellence and corporate rigor, offering institutions a single trusted partner for everything from academic governance to technology adoption. Our consultancy spans school management, HR, facilities, psychological services, and innovation.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aboutFeatures.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                  <span className="text-sm font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <button className="flex items-center gap-2 mt-10 hover:-translate-y-1 shadow-lg shadow-indigo-600/30 transition-all duration-300 bg-gradient-to-r from-indigo-600 to-[#8A7DFF] py-4 px-8 rounded-full text-white font-semibold">
              <span>Read more</span>
              <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z" fill="#fff" />
              </svg>
            </button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── Group Companies ────────────────────────────────────────────────────────────

function GroupCompaniesSection() {
  return (
    <section className="section-gap relative overflow-hidden bg-[#F7F8FC]">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-200/40 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-100/50 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="container-edify relative z-10">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 mb-6">
            <span className="w-2 h-2 rounded-full" style={{ background: 'var(--gold-500)' }} />
            <span className="text-xs font-bold tracking-widest uppercase text-slate-600">
              Our Ecosystem
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--green-900)' }}>
            Group Companies
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            A curated network of specialized entities operating under the EDIFY umbrella, driving innovation and excellence across every sector.
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8" stagger={0.1}>
          {companies.map((company) => (
            <a
              key={company.name}
              href={company.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 flex flex-col gap-4 overflow-hidden"
            >
              {/* Card Hover Glow */}
              <div 
                className="absolute -top-20 -right-20 w-48 h-48 rounded-full blur-[60px] opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" 
                style={{ background: 'var(--green-600)' }} 
              />
              
              <div className="flex justify-between items-start">
                {/* Logo Mark */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-2xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 shadow-md border border-white/20"
                  style={{ background: 'linear-gradient(135deg, var(--green-800), var(--green-600))', fontFamily: 'Playfair Display, serif' }}
                >
                  {company.name[0]}
                </div>
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-slate-400 opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 shadow-sm border border-slate-100 group-hover:text-green-800 group-hover:border-green-200">
                  <ExternalLink className="w-5 h-5" />
                </div>
              </div>
              
              <div className="mt-4 relative z-10">
                <h3 className="font-bold text-slate-900 text-xl group-hover:text-green-800 transition-colors mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{company.name}</h3>
                <p className="text-sm font-medium text-slate-500 leading-relaxed uppercase tracking-wider">{company.tagline}</p>
              </div>
            </a>
          ))}
        </StaggerChildren>

        <FadeIn className="text-center mt-16" delay={0.4}>
          <Link
            href="/companies"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg bg-white border border-slate-200 text-slate-700 hover:border-green-300 hover:text-green-900"
          >
            Explore All Companies <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── UAE Presence / Timeline ────────────────────────────────────────────────────

function UAEPresenceSection() {
  return (
    <section id="presence" className="section-gap">
      <div className="container-edify">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--gold-500)' }}>
              Our Journey
            </p>
            <h2 className="text-4xl md:text-5xl mb-6 gold-rule" style={{ color: 'var(--green-900)' }}>
              Growth in the UAE &amp; Beyond
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8 text-base">
              From a single Dubai office to a multi-country consultancy, our growth mirrors the ambition of the institutions we serve.
            </p>

            {/* Map visual placeholder */}
            <div
              className="group rounded-2xl p-8 relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              style={{ background: 'linear-gradient(135deg, var(--green-800), var(--green-900))', minHeight: '220px' }}
            >
              <div className="relative z-10">
                <p className="text-xs text-slate-400 uppercase tracking-widest mb-4">UAE Presence</p>
                <div className="grid grid-cols-2 gap-4">
                  {uaeCities.map((city) => (
                    <div key={city} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full shadow-[0_0_8px_rgba(201,162,74,0.6)] group-hover:animate-pulse" style={{ background: 'var(--gold-500)' }} />
                      <span className="text-sm text-white">{city}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full opacity-10 transition-transform duration-700 group-hover:scale-150"
                style={{ background: 'var(--gold-500)' }}
              />
            </div>
          </FadeIn>

          {/* Timeline */}
          <StaggerChildren className="space-y-0">
            {timeline.map((item, i) => (
              <div key={item.year} className="flex gap-4 group cursor-default">
                <div className="flex flex-col items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 transition-transform duration-500 group-hover:scale-125 shadow-md"
                    style={{ background: i % 2 === 0 ? 'var(--green-800)' : 'var(--gold-500)' }}
                  >
                    {item.year.slice(2)}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 mt-1 transition-colors duration-300 group-hover:bg-slate-400" style={{ background: 'var(--slate-200)', minHeight: '40px' }} />
                  )}
                </div>
                <div className="pb-8 pt-1.5 transition-transform duration-300 group-hover:translate-x-2">
                  <p className="text-xs font-semibold tracking-wider uppercase mb-1" style={{ color: 'var(--gold-500)' }}>
                    {item.year}
                  </p>
                  <h4 className="text-base font-semibold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors">{item.desc}</p>
                </div>
              </div>
            ))}
          </StaggerChildren>
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
          className="text-4xl md:text-5xl text-white mb-6 max-w-2xl mx-auto leading-tight"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Partner with us for educational excellence
        </h2>
        <p className="text-slate-300 text-base mb-10 max-w-xl mx-auto leading-relaxed">
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
      <AboutSection />
      <GroupCompaniesSection />
      <UAEPresenceSection />
      <StatsSection />
      <FeatureSections />
      <CTABanner />
    </main>
  );
}
