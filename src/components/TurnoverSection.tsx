'use client';

import React from 'react';
import { turnoverData } from '@/constants';
import { FadeIn, ScaleIn } from './ui/animations';
import { TrendingUp, ArrowUpRight } from 'lucide-react';

export default function TurnoverSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A]">
      {/* Warm ambient glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(232,98,42,0.08) 0%, transparent 70%)',
          transform: 'translate(20%, -20%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)',
          transform: 'translate(-30%, 30%)',
        }}
      />

      <div className="container-edify relative z-10 py-24 md:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Left: Narrative ── */}
          <FadeIn>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-10">
              <span
                className="w-8 h-px"
                style={{ background: 'var(--accent-primary)' }}
              />
              <span
                className="text-[11px] font-semibold tracking-[0.25em] uppercase"
                style={{ color: 'var(--accent-primary)' }}
              >
                Financial Performance
              </span>
            </div>

            {/* Headline */}
            <h2
              className="text-white mb-8 leading-[1.05]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Driving Sustained{' '}
              <span style={{ color: 'rgba(255,255,255,0.25)' }}>
                Economic Growth
              </span>
            </h2>

            {/* Body */}
            <p className="text-base leading-relaxed mb-12" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Our financial trajectory reflects our commitment to excellence and the trust our
              partners place in us. We maintain a robust fiscal foundation to fuel innovation
              and expansion.
            </p>

            {/* Highlights */}
            <div className="space-y-5">
              {turnoverData.highlights.map((highlight, i) => (
                <div key={i} className="flex items-start gap-4 group cursor-default">
                  <div
                    className="mt-1.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center transition-colors duration-300"
                    style={{ border: '1px solid rgba(255,255,255,0.15)' }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: 'var(--accent-primary)' }}
                    />
                  </div>
                  <p
                    className="text-sm leading-relaxed transition-colors duration-300 group-hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                  >
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* ── Right: Metric Card ── */}
          <ScaleIn>
            <div className="relative">
              {/* Card */}
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, #1A1A1A 0%, #141414 100%)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(232,98,42,0.6), transparent)',
                  }}
                />

                <div className="p-10 lg:p-14">
                  {/* Label */}
                  <p
                    className="text-[10px] font-bold tracking-[0.35em] uppercase mb-8"
                    style={{ color: 'rgba(255,255,255,0.25)' }}
                  >
                    Overall Turnover
                  </p>

                  {/* Big number */}
                  <div
                    className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-none"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {turnoverData.total}
                  </div>

                  {/* Growth badge */}
                  <div
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold mb-12"
                    style={{
                      background: 'rgba(232,98,42,0.12)',
                      border: '1px solid rgba(232,98,42,0.25)',
                      color: 'var(--accent-primary)',
                    }}
                  >
                    <TrendingUp className="w-4 h-4" />
                    {turnoverData.growth} Annual Growth
                  </div>

                  {/* Divider */}
                  <div
                    className="w-full h-px mb-10"
                    style={{ background: 'rgba(255,255,255,0.05)' }}
                  />

                  {/* Stats row */}
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <p
                        className="text-4xl font-bold text-white mb-1.5 leading-none"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        10+
                      </p>
                      <p
                        className="text-[10px] font-semibold tracking-[0.2em] uppercase"
                        style={{ color: 'rgba(255,255,255,0.25)' }}
                      >
                        Business Verticals
                      </p>
                    </div>
                    <div>
                      <p
                        className="text-4xl font-bold text-white mb-1.5 leading-none"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        5+
                      </p>
                      <p
                        className="text-[10px] font-semibold tracking-[0.2em] uppercase"
                        style={{ color: 'rgba(255,255,255,0.25)' }}
                      >
                        Global Markets
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom corner accent */}
                <div
                  className="absolute bottom-0 right-0 w-32 h-32 rounded-full pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, rgba(232,98,42,0.06) 0%, transparent 70%)',
                    transform: 'translate(30%, 30%)',
                  }}
                />
              </div>

              {/* Floating badge */}
              <div
                className="absolute -top-4 -right-4 flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-white shadow-xl"
                style={{ background: 'var(--accent-primary)' }}
              >
                <ArrowUpRight className="w-3.5 h-3.5" />
                Since 2018
              </div>
            </div>
          </ScaleIn>
        </div>
      </div>
    </section>
  );
}
