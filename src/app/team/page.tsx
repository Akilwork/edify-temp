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
      className="pt-40 pb-20 relative overflow-hidden"
      style={{ background: 'var(--green-900)' }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-[0.04]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, var(--gold-500), var(--gold-500) 1px, transparent 1px, transparent 50px)`,
          }}
        />
      </div>
      <div className="container-edify relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-10" style={{ background: 'var(--gold-500)' }} />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: 'var(--gold-400)' }}>
            The People Behind EDIFY
          </span>
        </div>
        <h1
          className="text-5xl md:text-6xl text-white mb-5 leading-tight"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Our Leadership
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
          Experienced professionals driving excellence — combining deep sector knowledge with a passion for transforming educational institutions.
        </p>

        {/* Department summary */}
        <div className="flex flex-wrap gap-6 mt-12 pt-10 border-t border-white/10">
          {departments.map((dept) => (
            <div key={dept.label} className="text-center">
              <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>{dept.count}</div>
              <div className="text-xs text-slate-400 mt-0.5">{dept.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function TeamPage() {
  return (
    <main>
      <PageHero />

      <section className="section-gap">
        <div className="container-edify">

          <TeamContent />

          {/* Join CTA */}
          <div
            className="mt-20 rounded-2xl p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative overflow-hidden grain-overlay"
            style={{ background: 'linear-gradient(135deg, var(--green-800), var(--green-900))' }}
          >
            <div className="relative z-10">
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--gold-400)' }}>
                Careers
              </p>
              <h2
                className="text-3xl text-white mb-3 leading-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Join a team that shapes education
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                We are always looking for passionate professionals in education, technology, HR, and operations to join the EDIFY family.
              </p>
            </div>
            <div className="relative z-10 flex md:justify-end">
              <a
                href="mailto:careers@edify.ae"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all hover:scale-105"
                style={{ background: 'var(--gold-500)', color: 'white' }}
              >
                <Mail className="w-4 h-4" />
                careers@edify.ae
              </a>
            </div>
            <div
              className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full opacity-10"
              style={{ background: 'var(--gold-500)' }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
