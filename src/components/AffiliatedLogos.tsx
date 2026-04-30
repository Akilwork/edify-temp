'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { companies } from '@/constants';
import { FadeIn } from './ui/animations';

export default function AffiliatedLogos() {
  return (
    <section className="py-20 bg-white/50 backdrop-blur-sm relative">
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Heading */}
      <div className="container-edify mb-12">
        <FadeIn className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-orange-400/40" />
            <span className="text-sm uppercase tracking-[0.3em] font-bold text-orange-500">Our Network</span>
            <div className="h-px w-8 bg-orange-400/40" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Affiliated Organizations</h2>
        </FadeIn>
      </div>

      {/* Marquee */}
      <div
        className="w-full overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0px, black 120px, black calc(100% - 120px), transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0px, black 120px, black calc(100% - 120px), transparent 100%)',
        }}
      >
        {/* Single track containing 2× the logos for seamless loop */}
        <div className="marquee-track">
          {[...companies, ...companies].map((company, index) => (
            <Link
              key={index}
              href={company.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-shrink-0 mx-10 flex items-center justify-center"
              aria-label={company.name}
            >
              <div
                className="relative grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                style={{ width: '130px', height: '56px' }}
              >
                <Image
                  src={`/assets/companies/${company.logo}`}
                  alt={company.name}
                  fill
                  sizes="130px"
                  className="object-contain"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
