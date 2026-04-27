import type { Metadata } from 'next';
import ServicesContent from './ServicesContent';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Comprehensive management solutions for educational institutions — academic, HR, operations, technology, specialized services, and business support.',
};

function PageHero() {
  return (
    <section className="pt-40 pb-20 relative overflow-hidden bg-[#F7F8FC]">
      {/* Background Shapes */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] rounded-full bg-purple-100/50 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] rounded-full bg-blue-100/50 blur-[120px] pointer-events-none" />

      <div className="container-edify relative z-10 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 mb-6">
          <span className="w-2 h-2 rounded-full bg-purple-400" />
          <span className="text-xs font-semibold tracking-widest uppercase text-slate-600">
            Our Services
          </span>
        </div>
        
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight max-w-4xl"
        >
          Comprehensive Solutions for Modern Education
        </h1>
        
        <p className="text-slate-500 text-lg md:text-xl max-w-2xl leading-relaxed">
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
