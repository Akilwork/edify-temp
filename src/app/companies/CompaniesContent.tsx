'use client';

import { ExternalLink, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const companies = [
  {
    name: 'NIMS',
    fullName: 'National Institutions Management Services',
    tagline: 'Multi-campus school management across UAE',
    desc: 'NIMS is our flagship school management brand, operating multiple branches across UAE emirates. It delivers end-to-end institutional management including governance, HR, operations, and academic oversight.',
    tags: ['School Management', 'Multi-Campus', 'UAE'],
    href: '#',
    color: 'var(--green-800)',
    branches: 'Dubai · Abu Dhabi · Sharjah',
  },
  {
    name: 'Golden Cosmos',
    fullName: 'Golden Cosmos Education Group',
    tagline: 'Premium educational institution network',
    desc: 'A premium private school network offering internationally aligned curricula. Golden Cosmos institutions are known for academic excellence and a holistic approach to student development.',
    tags: ['Private Schools', 'International Curriculum'],
    href: '#',
    color: '#b8861e',
  },
  {
    name: 'Techno Alliance',
    fullName: 'Techno Alliance Solutions',
    tagline: 'EdTech development & digital transformation',
    desc: 'Our technology arm specialises in software development, ERP implementation, and digital transformation for educational institutions. Techno Alliance builds tools that power the EDIFY ecosystem.',
    tags: ['EdTech', 'Software', 'ERP'],
    href: '#',
    color: '#1a6b8a',
  },
  {
    name: 'SEED',
    fullName: 'Student Excellence & Educational Development',
    tagline: 'Student enrichment & co-curricular programmes',
    desc: 'SEED designs and delivers enrichment programmes, after-school activities, and talent development initiatives for schools across the region.',
    tags: ['Enrichment', 'Student Dev', 'Co-curricular'],
    href: '#',
    color: '#3b7a3b',
  },
  {
    name: 'TOSS Academy',
    fullName: 'Training & Organisational Skills School',
    tagline: 'Professional development for educators',
    desc: 'TOSS Academy provides CPD, leadership training, and skills certification for teachers, school administrators, and education sector professionals.',
    tags: ['CPD', 'Teacher Training', 'Certification'],
    href: '#',
    color: '#5b4a9a',
  },
  {
    name: 'EMKE Garage',
    fullName: 'EMKE Innovation & Technology Garage',
    tagline: 'Robotics, STEM & innovation labs',
    desc: 'EMKE Garage builds STEM labs and robotics centres for schools, and runs innovation challenges that prepare students for a technology-driven future.',
    tags: ['Robotics', 'STEM', 'Innovation'],
    href: '#',
    color: '#8a3a5c',
  },
  {
    name: 'Imprint',
    fullName: 'Imprint Design & Communication',
    tagline: 'Branding, design & print for institutions',
    desc: 'Imprint handles all creative and communication needs — from school branding identity and prospectus design to signage, uniforms, and marketing collateral.',
    tags: ['Branding', 'Design', 'Print'],
    href: '#',
    color: '#6b4a1a',
  },
  {
    name: 'UniDesign',
    fullName: 'UniDesign Visual Identity Studio',
    tagline: 'Visual identity & campus experience design',
    desc: 'A specialist studio focused on the visual and spatial experience of educational institutions — from logos and brand books to wayfinding and campus identity systems.',
    tags: ['Identity', 'Campus Design', 'Wayfinding'],
    href: '#',
    color: '#2d5a8a',
  },
  {
    name: 'Educraft',
    fullName: 'Educraft Learning Solutions',
    tagline: 'Curriculum design & academic publishing',
    desc: 'Educraft develops bespoke curricula, teaching materials, and academic publications tailored to specific institutional needs and regulatory frameworks.',
    tags: ['Curriculum', 'Publishing', 'Academic'],
    href: '#',
    color: '#4a6b2d',
  },
  {
    name: 'Loyaltri',
    fullName: 'Loyaltri Engagement Platform',
    tagline: 'Parent & student loyalty & engagement',
    desc: 'A digital platform that helps schools build loyalty with parents and students through rewards, communications, and data-driven engagement programmes.',
    tags: ['Platform', 'Engagement', 'SaaS'],
    href: '#',
    color: '#8a1a4a',
  },
];

import { StaggerChildren, FadeIn } from '@/components/ui/animations';

function CompanyCard({ company }: { company: typeof companies[0] }) {
  return (
    <div className="group relative rounded-3xl overflow-hidden bg-slate-50 transition-all duration-700 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 h-full">
      {/* Gradient Background Mesh / Glow */}
      <div 
        className="absolute -top-32 -right-32 w-64 h-64 rounded-full blur-[80px] opacity-20 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none" 
        style={{ background: company.color }} 
      />
      
      <div className="relative p-8 md:p-10 h-full flex flex-col z-10 border border-slate-200/50 rounded-3xl bg-white/40 backdrop-blur-md group-hover:bg-white/80 transition-colors duration-500">
        
        <div className="flex justify-between items-start mb-10">
          <div className="flex items-center gap-4">
             {/* Logo Mark - Circular and bold */}
             <div 
               className="w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl shadow-md transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110"
               style={{ background: company.color }}
             >
               {company.name[0]}
             </div>
             <div>
                <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                  {company.name}
                </h3>
               {company.fullName && (
                 <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase mt-1">{company.fullName}</p>
               )}
             </div>
          </div>
          
          <a
            href={company.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full flex items-center justify-center bg-white border border-slate-200 text-slate-400 hover:text-white transition-all duration-500 hover:-translate-y-1 hover:scale-105 shadow-sm group-hover:shadow-md"
            style={{ '--hover-bg': company.color } as React.CSSProperties}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = company.color;
              (e.currentTarget as HTMLElement).style.borderColor = company.color;
              (e.currentTarget as HTMLElement).style.color = 'white';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = '';
              (e.currentTarget as HTMLElement).style.borderColor = '';
              (e.currentTarget as HTMLElement).style.color = '';
            }}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="flex-grow">
          <p className="text-sm font-bold mb-4 tracking-wide uppercase" style={{ color: company.color }}>
            {company.tagline}
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mb-8 group-hover:text-slate-900 transition-colors duration-500">
            {company.desc}
          </p>
        </div>

        {/* Footer info */}
        <div className="mt-auto pt-6 border-t border-slate-200/60 flex items-end justify-between">
          <div className="flex flex-wrap gap-2">
            {company.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] uppercase tracking-widest px-3 py-1.5 rounded font-bold"
                style={{ background: `${company.color}15`, color: company.color }}
              >
                {tag}
              </span>
            ))}
          </div>

          {company.branches && (
            <div className="text-xs text-slate-400 font-medium flex items-center gap-2 group-hover:text-slate-600 transition-colors">
               <span className="w-2 h-2 rounded-full" style={{ background: company.color }} />
               {company.branches.split(' • ').length} Locations
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default function CompaniesContent() {
  return (
    <section className="section-gap">
      <div className="container-edify">
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" stagger={0.1}>
          {companies.map((company) => (
            <CompanyCard key={company.name} company={company} />
          ))}
        </StaggerChildren>

        {/* Partnership CTA */}
        <FadeIn delay={0.3} className="mt-20 grid grid-cols-1 md:grid-cols-5 gap-6">
          <div
            className="md:col-span-3 rounded-3xl p-10 relative overflow-hidden group"
            style={{ background: 'linear-gradient(135deg, var(--green-800), var(--green-900))' }}
          >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            <div className="relative z-10">
              <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'var(--gold-400)' }}>
                Partnership
              </p>
              <h2 className="text-3xl text-white mb-4">
                Interested in joining our ecosystem?
              </h2>
              <p className="text-slate-200 text-sm leading-relaxed mb-8 max-w-lg">
                We partner with specialist firms that align with our mission of institutional excellence. If your organisation complements our network, let's talk.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(201,162,74,0.4)]"
                style={{ background: 'var(--gold-500)', color: 'white' }}
              >
                Partner With Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full opacity-20 blur-3xl transition-transform duration-700 group-hover:scale-150" style={{ background: 'var(--gold-500)' }} />
          </div>

          <div
            className="md:col-span-2 rounded-3xl p-10 flex flex-col justify-between border border-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden"
            style={{ background: 'white' }}
          >
             <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10 blur-xl pointer-events-none" style={{ background: 'var(--green-600)' }} />
            <div className="relative z-10">
              <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'var(--gold-500)' }}>
                Under MHUDA Trust
              </p>
              <h3 className="text-2xl font-bold mb-4 leading-tight text-brand-black">
                A unified institutional vision
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                All group companies operate under the MHUDA Trust framework — ensuring shared values, governance standards, and a collective commitment to educational excellence.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-100 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-md" style={{ background: 'var(--green-800)' }}>M</div>
                <div>
                  <p className="text-sm font-bold text-slate-900">MHUDA Trust</p>
                  <p className="text-xs font-medium tracking-wide uppercase text-slate-400 mt-1">Parent Organisation</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
