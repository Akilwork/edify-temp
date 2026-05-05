import type { Metadata } from 'next';
import { Mail } from 'lucide-react';
import TeamContent from './TeamContent';

export const metadata: Metadata = {
  title: 'Our Team',
  description:
    'Meet the experienced professionals leading EDIFY Management Consultancy — driving institutional excellence across education, operations, and technology.',
};

const departments = [
  { label: 'Leadership', count: 8 },
  { label: 'Academic', count: 14 },
  { label: 'Operations', count: 22 },
  { label: 'Technology', count: 11 },
  { label: 'Support', count: 18 },
];

function PageHero() {
  return (
    <section
      className="pt-44 pb-20 relative overflow-hidden"
      style={{ background: 'var(--brand-black)' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(232,98,42,0.07) 0%, transparent 70%)',
          transform: 'translate(20%, -30%)',
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-edify relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-8 h-px" style={{ background: 'var(--accent-primary)' }} />
          <span
            className="text-[11px] font-semibold tracking-[0.25em] uppercase"
            style={{ color: 'var(--accent-primary)' }}
          >
            The People Behind EDIFY
          </span>
        </div>

        <h1
          className="text-white mb-5 leading-[1.05] max-w-2xl"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Our Leadership
        </h1>

        <p
          className="text-base max-w-xl leading-relaxed mb-14"
          style={{ color: 'rgba(255,255,255,0.45)' }}
        >
          Experienced professionals driving excellence — combining deep sector knowledge with
          a passion for transforming educational institutions.
        </p>

        {/* Department stats */}
        <div
          className="flex flex-wrap gap-8 pt-10"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          {departments.map((dept) => (
            <div key={dept.label}>
              <div
                className="text-2xl font-bold text-white mb-0.5"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {dept.count}
              </div>
              <div
                className="text-xs font-medium tracking-wide"
                style={{ color: 'rgba(255,255,255,0.35)' }}
              >
                {dept.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function TeamPage() {
  return (
    <main style={{ background: 'var(--surface-1)' }}>
      <PageHero />

      <section className="section-gap">
        <div className="container-edify">
          <TeamContent />

          {/* Join CTA */}
          <div
            className="mt-16 rounded-3xl p-10 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative overflow-hidden"
            style={{ background: 'var(--brand-black)' }}
          >
            {/* Glow */}
            <div
              className="absolute bottom-0 right-0 w-64 h-64 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(232,98,42,0.08) 0%, transparent 70%)',
                transform: 'translate(30%, 30%)',
              }}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-6 h-px" style={{ background: 'var(--accent-primary)' }} />
                <span
                  className="text-[10px] font-semibold tracking-[0.25em] uppercase"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  Careers
                </span>
              </div>
              <h2
                className="text-2xl md:text-3xl text-white mb-3 leading-tight"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Join a team that shapes education
              </h2>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.4)' }}
              >
                We are always looking for passionate professionals in education, technology,
                HR, and operations to join the EDIFY family.
              </p>
            </div>

            <div className="relative z-10 flex md:justify-end">
              <a
                href="mailto:careers@edify.ae"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                style={{ background: 'var(--accent-primary)' }}
              >
                <Mail className="w-4 h-4" />
                careers@edify.ae
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
