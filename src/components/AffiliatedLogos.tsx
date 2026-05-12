'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { companies } from '@/constants';

export default function AffiliatedLogos() {
  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{ background: 'var(--surface-1)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}
    >
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 32s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Header */}
      <div className="container-edify mb-10">
        <div className="flex items-center justify-center gap-3">
          <span
            className="w-8 h-px"
            style={{ background: 'var(--accent-primary)' }}
          />
          <span
            className="text-[11px] font-semibold tracking-[0.25em] uppercase"
            style={{ color: 'var(--accent-primary)' }}
          >
            Our Network
          </span>
          <span
            className="w-8 h-px"
            style={{ background: 'var(--accent-primary)' }}
          />
        </div>
      </div>

      {/* Marquee */}
      <div
        className="w-full overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0px, black 100px, black calc(100% - 100px), transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0px, black 100px, black calc(100% - 100px), transparent 100%)',
        }}
      >
        <div className="marquee-track">
          {[...companies, ...companies].map((company, index) => (
            <Link
              key={index}
              href={company.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-shrink-0 mx-10 flex items-center justify-center cursor-pointer"
              aria-label={company.name}
            >
              <div
                className="relative transition-all duration-400"
                style={{
                  width: '120px',
                  height: '52px',
                  filter: 'grayscale(1)',
                  opacity: 0.4,
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.filter = 'grayscale(0)';
                  (e.currentTarget as HTMLElement).style.opacity = '1';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.filter = 'grayscale(1)';
                  (e.currentTarget as HTMLElement).style.opacity = '0.4';
                }}
              >
                <Image
                  src={`/assets/companies/${company.logo}`}
                  alt={company.name}
                  fill
                  sizes="120px"
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
