'use client';

import { featuresData } from "@/constants";
import { FadeIn, StaggerChildren } from "@/components/ui/animations";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function FeatureSections() {
  return (
    <section
      className="section-gap overflow-hidden"
      style={{ background: 'var(--surface-1)' }}
    >
      <div className="container-edify">

        {/* Header */}
        <FadeIn className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-12 md:mb-16">
          <div className="max-w-lg">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px" style={{ background: 'var(--accent-primary)' }} />
              <span
                className="text-[11px] font-semibold tracking-[0.25em] uppercase"
                style={{ color: 'var(--accent-primary)' }}
              >
                What We Do
              </span>
            </div>
            <h2
              className="leading-[1.05] mb-3"
              style={{ color: 'var(--text-primary)', fontFamily: "'Syne', sans-serif" }}
            >
              Comprehensive Solutions
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--text-muted)' }}
            >
              From academic governance to digital transformation, we provide end-to-end
              consultancy services that empower institutions to thrive.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{ background: 'var(--accent-primary)' }}
            >
              See all Services
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>

        {/* Cards */}
        <StaggerChildren
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          stagger={0.12}
        >
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 cursor-default"
              style={{
                background: 'var(--surface-0)',
                border: '1px solid var(--border-light)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 40px rgba(0,0,0,0.07)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = '';
                (e.currentTarget as HTMLElement).style.transform = '';
              }}
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  src={feature.image}
                  alt={feature.title}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300" />

                {/* Badge */}
                <span
                  className="absolute top-3 left-3 flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-full leading-none backdrop-blur-sm"
                  style={{
                    background: 'rgba(255,255,255,0.9)',
                    color: 'var(--text-primary)',
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: 'var(--accent-primary)' }}
                  />
                  {feature.title}
                </span>

                {/* Arrow button */}
                <button
                  className="absolute bottom-3 right-3 w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-md transition-all duration-200 hover:scale-105 cursor-pointer"
                  style={{ background: 'var(--accent-primary)' }}
                  aria-label={`View ${feature.title}`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              {/* Body */}
              <div className="px-5 py-5 flex flex-col gap-1.5">
                <h3
                  className="text-sm font-bold leading-snug"
                  style={{ color: 'var(--text-primary)', fontFamily: "'Syne', sans-serif" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-[13px] leading-relaxed"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
