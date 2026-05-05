'use client';

import { GlobePulse, type PulseMarker } from '@/components/ui/cobe-globe-pulse';
import { FadeIn } from '@/components/ui/animations';

const presenceLocations = [
  { name: 'Dubai',       location: [25.2048,  55.2708] as [number, number] },
  { name: 'Abu Dhabi',   location: [24.4539,  54.3773] as [number, number] },
  { name: 'Sharjah',     location: [25.3463,  55.4209] as [number, number] },
  { name: 'Ajman',       location: [25.4052,  55.5136] as [number, number] },
  { name: 'Mumbai',      location: [19.076,   72.8777] as [number, number] },
  { name: 'New Delhi',   location: [28.6139,  77.209 ] as [number, number] },
  { name: 'London',      location: [51.5074,  -0.1278] as [number, number] },
  { name: 'Singapore',   location: [ 1.3521, 103.8198] as [number, number] },
  { name: 'Nairobi',     location: [-1.2921,  36.8219] as [number, number] },
  { name: 'Sydney',      location: [-33.8688,151.2093] as [number, number] },
  { name: 'Toronto',     location: [43.6532, -79.3832] as [number, number] },
  { name: 'Riyadh',      location: [24.7136,  46.6753] as [number, number] },
];

const GLOBE_MARKERS: PulseMarker[] = presenceLocations.map((loc, i) => ({
  id:       `marker-${i}`,
  location: loc.location,
  delay:    i * 0.25,
  label:    loc.name,
}));

export default function GlobalPresenceSection() {
  return (
    <section id="presence" className="py-8 md:py-12 lg:py-16 relative bg-white overflow-hidden">
      <div className="container-edify">

        {/* ── Header ─────────────────────────────────────────────── */}
        <FadeIn className="text-center mb-8 lg:mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-slate-200" />
            <span className="text-sm uppercase tracking-[0.2em] font-bold text-accent">
              Global Footprint
            </span>
            <div className="h-px w-12 bg-slate-200" />
          </div>
          <h2 className="leading-[1.1] mb-6">
            Scale and Impact <br />
            <span className="text-black to-slate-400">
              Across the Globe
            </span>
          </h2>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
            From our strategic hubs in the UAE to a growing international presence, we are committed to elevating educational standards worldwide.
          </p>
        </FadeIn>

        {/* ── Globe ──────────────────────────────────────────────── */}
        <FadeIn>
          <div className="mx-auto w-full max-w-[700px]">
            <GlobePulse markers={GLOBE_MARKERS} speed={0.003} />
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
