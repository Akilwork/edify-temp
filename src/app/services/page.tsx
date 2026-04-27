import type { Metadata } from 'next';
import ServicesContent from './ServicesContent';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Comprehensive management solutions for educational institutions — academic, HR, operations, technology, specialized services, and business support.',
};

function PageHero() {
  return (
    <section className="pt-48 pb-24 relative overflow-hidden bg-ethereal">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(var(--slate-300) 0.5px, transparent 0.5px)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="container-edify relative z-10 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white shadow-sm border border-white/20 mb-8 transition-transform hover:scale-105">
          <span className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_8px_var(--accent-orange)]" />
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-slate-500">
            Our Services
          </span>
        </div>
        
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-black text-brand-black mb-8 leading-[1.1] max-w-5xl tracking-tight"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Comprehensive Solutions for <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-black via-slate-600 to-brand-black">Modern Education</span>
        </h1>
        
        <p className="text-slate-500 text-xl md:text-2xl max-w-3xl leading-relaxed font-medium">
          Integrated management and strategic support for the entire educational lifecycle, empowering institutions to thrive.
        </p>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <main>
      <PageHero />
      <ServicesContent />
    </main>
  );
}
