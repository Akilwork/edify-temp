import type { Metadata } from 'next';
import CompaniesContent from './CompaniesContent';

export const metadata: Metadata = {
  title: 'Group Companies',
  description:
    'Explore the EDIFY ecosystem — a network of 10+ specialized companies across education, technology, design, and business services.',
};

function PageHero() {
  return (
    <section
      className="pt-48 pb-20 relative overflow-hidden bg-brand-black"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-[0.04]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, var(--gold-500), var(--gold-500) 1px, transparent 1px, transparent 50px)`,
          }}
        />
        <div
          className="absolute -left-20 bottom-0 w-96 h-96 rounded-full opacity-[0.04]"
          style={{ background: 'var(--gold-500)' }}
        />
      </div>
      <div className="container-edify relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-10" style={{ background: 'var(--gold-500)' }} />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: 'var(--gold-400)' }}>
            Our Ecosystem
          </span>
        </div>
        <h1 className="text-white mb-5 leading-tight">
          Group Companies
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
          Ten specialized entities united under the EDIFY umbrella — each focused, each expert, together comprehensive.
        </p>

        {/* Quick stats */}
        <div className="flex flex-wrap gap-10 mt-12 pt-10 border-t border-white/10">
          {[
            { num: '10+', label: 'Group Companies' },
            { num: '5', label: 'Countries' },
            { num: '50+', label: 'Institutions Served' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-white">{s.num}</div>
              <div className="text-xs text-slate-400 mt-1 tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CompaniesPage() {
  return (
    <main>
      <PageHero />
      <CompaniesContent />
    </main>
  );
}
