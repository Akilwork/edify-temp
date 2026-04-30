'use client';

import React from 'react';
import { turnoverData } from '@/constants';
import { FadeIn, ScaleIn } from './ui/animations';
import { TrendingUp, CheckCircle2 } from 'lucide-react';

/**
 * TurnoverSection - Redesigned to align with the "Enter" (Minimalist Inter) Design System.
 * Focuses on high contrast, crisp typography (Inter), and structured spacing.
 */
export default function TurnoverSection() {
  return (
    <section className="py-24 md:py-32 bg-black text-white relative overflow-hidden font-sans">
      {/* Subtle minimalist grid background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="container-edify relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
          {/* Left Column: Narrative */}
          <FadeIn className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 mb-8">
              <TrendingUp className="w-3 h-3" />
              Financial Performance
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-10 leading-[1.05] tracking-tight text-white">
              Driving Sustained <br />
              <span className="text-white/40">Economic Growth</span>
            </h2>
            
            <p className="text-xl text-white/50 mb-12 leading-relaxed max-w-xl">
              Our financial trajectory reflects our commitment to excellence and the trust our partners place in us. We maintain a robust fiscal foundation to fuel innovation and expansion.
            </p>

            <div className="space-y-8">
              {turnoverData.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-5 group">
                  <div className="mt-1.5 shrink-0 w-5 h-5 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/50 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>
                  <p className="text-lg text-white/70 group-hover:text-white transition-colors">{highlight}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Right Column: Key Metric Card */}
          <ScaleIn className="lg:w-1/2 w-full">
            <div className="relative group">
              {/* Subtle outer glow on hover */}
              <div className="absolute -inset-4 bg-white/5 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative bg-neutral-900 border border-white/10 rounded-[2.5rem] p-12 lg:p-20 text-center shadow-2xl">
                <p className="text-xs font-bold tracking-[0.4em] uppercase text-white/30 mb-6">Overall Turnover</p>
                
                <div className="text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-tighter">
                  {turnoverData.total}
                </div>
                
                <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white text-black font-bold text-sm shadow-xl hover:scale-105 transition-transform">
                  <TrendingUp className="w-4 h-4" />
                  {turnoverData.growth} Annual Growth
                </div>
                
                <div className="mt-16 grid grid-cols-2 gap-12 pt-16 border-t border-white/5">
                  <div className="text-left">
                    <p className="text-4xl font-bold text-white mb-2">10+</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">Business Verticals</p>
                  </div>
                  <div className="text-left">
                    <p className="text-4xl font-bold text-white mb-2">5+</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">Global Markets</p>
                  </div>
                </div>
              </div>
            </div>
          </ScaleIn>
        </div>
      </div>
    </section>
  );
}
