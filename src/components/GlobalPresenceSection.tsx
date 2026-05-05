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

const regions = [
  { label: 'UAE', count: '4 Emirates', dot: '#E8622A' },
  { label: 'South Asia', count: 'India', dot: '#C9A84C' },
  { label: 'Europe', count: 'UK', dot: '#6366F1' },
  { label: 'APAC', count: 'Singapore · Australia', dot: '#22C55E' },
];

export default function GlobalPresenceSection() {
  return (
    <section
      id="presence"
      className="relative overflow-hidden"
      style={{ background: 'var(--surface-1)' }}
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'var(--border-light)' }} />

      <div className="container-edify py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Text ── */}
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px" style={{ background: 'var(--accent-primary)' }} />
              <span
                className="text-[11px] font-semibold tracking-[0.25em] uppercase"
                style={{ color: 'var(--accent-primary)' }}
              >
                Global Footprint
              </span>
            </div>

            <h2
              className="mb-6 leading-[1.05]"
              style={{ color: 'var(--text-primary)', fontFamily: "'Syne', sans-serif" }}
            >
              Scale and Impact{' '}
              <span style={{ color: 'var(--text-muted)' }}>
                Across the Globe
              </span>
            </h2>

            <p
              className="text-base leading-relaxed mb-12 max-w-lg"
              style={{ color: 'var(--text-secondary)' }}
            >
              From our strategic hubs in the UAE to a growing international presence, we are
              committed to elevating educational standards worldwide.
            </p>

            {/* Region pills */}
            <div className="grid grid-cols-2 gap-3">
              {regions.map((r) => (
                <div
                  key={r.label}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 cursor-default"
                  style={{
                    background: 'var(--surface-0)',
                    border: '1px solid var(--border-light)',
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ background: r.dot }}
                  />
                  <div>
                    <p className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>
                      {r.label}
                    </p>
                    <p className="text-[11px]" style={{ color: 'var(--text-muted)' }}>
                      {r.count}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* ── Right: Globe ── */}
          <FadeIn>
            <div className="mx-auto w-full max-w-[560px]">
              <GlobePulse markers={GLOBE_MARKERS} speed={0.003} />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
