'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import {
  BookOpen, Users, Truck, Brain, Cpu, Briefcase,
  GraduationCap, HeartHandshake, Settings, Wrench,
  UtensilsCrossed, Stethoscope, Code, Bot, DollarSign,
  Printer, ShoppingBag, UserSearch, Building,
  LucideIcon
} from 'lucide-react';
import { StaggerChildren, FadeIn } from '@/components/ui/animations';

const serviceCategories = [
  {
    id: 'academic',
    label: 'Academic & Educational',
    accent: '#8B5CF6', // Violet
    services: [
      { icon: BookOpen, title: 'Educational Consultancy', desc: 'Strategic advisory for school boards, institutional planning, and policy development.' },
      { icon: Building, title: 'School Management Services', desc: 'End-to-end school operations management — from enrolment systems to staff governance.' },
      { icon: GraduationCap, title: 'Curriculum & Accreditation', desc: 'Curriculum design, assessment frameworks, quality assurance, and academic programme accreditation.' },
    ],
  },
  {
    id: 'student',
    label: 'Student Support',
    accent: '#3B82F6', // Blue
    services: [
      { icon: Brain, title: 'Psychological Counselling', desc: 'On-campus mental health programmes, counsellor placement, and student wellbeing strategies.' },
      { icon: HeartHandshake, title: 'Special Needs Counseling', desc: 'Inclusive education frameworks, IEP development, and specialist support staff training.' },
      { icon: Stethoscope, title: 'Therapeutic Consultancy', desc: 'Speech, occupational, and behavioural therapy programme setup and management.' },
    ],
  },
  {
    id: 'hr',
    label: 'HR & Recruitment',
    accent: '#6366F1', // Indigo
    services: [
      { icon: Users, title: 'Human Resource Services', desc: 'Payroll, performance management, HR policy creation, and compliance for educational institutions.' },
      { icon: UserSearch, title: 'Recruitment Services', desc: 'Sourcing and placing qualified educators, administrators, and support staff across the region.' },
    ],
  },
  {
    id: 'technology',
    label: 'Technology & Software',
    accent: '#0D9488', // Teal
    services: [
      { icon: Code, title: 'Software Consultancy', desc: 'EdTech platform evaluation, ERP selection, LMS implementation, and digital transformation roadmaps.' },
      { icon: Cpu, title: 'Software Development', desc: 'Custom school management systems, parent portals, and administrative tools built to specification.' },
      { icon: Bot, title: 'Robotics & Innovation', desc: 'STEM lab setup, robotics curriculum, and innovation challenge programme design.' },
    ],
  },
  {
    id: 'operations',
    label: 'Operations & Facilities',
    accent: '#EA580C', // Orange
    services: [
      { icon: Wrench, title: 'Facilities Management', desc: 'Maintenance, infrastructure upkeep, campus safety audits, and vendor coordination.' },
      { icon: UtensilsCrossed, title: 'F&B Services', desc: 'Cafeteria and nutrition programme management with HACCP-compliant vendor oversight.' },
    ],
  },
  {
    id: 'transport',
    label: 'Transport & Vehicle',
    accent: '#E11D48', // Rose
    services: [
      { icon: Truck, title: 'Transport Services', desc: 'Fleet management, route planning, and student transport safety compliance.' },
      { icon: Settings, title: 'Vehicle Maintenance', desc: 'Scheduled servicing, breakdown response, and fleet condition reporting.' },
    ],
  },
  {
    id: 'creative',
    label: 'Creative & Printing',
    accent: '#DB2777', // Pink
    services: [
      { icon: Printer, title: 'Designing & Printing', desc: 'School branding, prospectus design, signage, and communication material production.' },
    ],
  },
  {
    id: 'financial',
    label: 'Financial & Business',
    accent: '#059669', // Emerald
    services: [
      { icon: DollarSign, title: 'Financial Services', desc: 'Fee management, budgeting, financial reporting, and audit preparation for institutions.' },
      { icon: ShoppingBag, title: 'Uniform & Office Supplies', desc: 'Managed procurement and supply chain for uniforms, stationery, and administrative consumables.' },
    ],
  },
];

function ServiceCard({ icon: Icon, title, desc, accent }: { icon: LucideIcon; title: string; desc: string; accent: string }) {
  return (
    <div className="group relative bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-white/80 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300 flex flex-col gap-4 overflow-hidden h-full">
      {/* Soft gradient background glow */}
      <div 
        className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[50px] opacity-20 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" 
        style={{ backgroundColor: accent }}
      />
      
      <div 
        className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 shadow-sm border"
        style={{ color: accent, backgroundColor: accent + '15', borderColor: accent + '30' }}
      >
        <Icon className="w-6 h-6" />
      </div>
      
      <h3 className="font-bold text-slate-900 text-xl leading-tight mt-2 z-10">{title}</h3>
      <p className="text-slate-600 leading-relaxed flex-1 z-10">{desc}</p>
      
      <div 
        className="flex items-center gap-2 text-sm font-semibold mt-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-10"
        style={{ color: accent }}
      >
        Explore Service <ArrowRight className="w-4 h-4" />
      </div>
    </div>
  );
}

export default function ServicesContent() {
  return (
    <div className="bg-white pb-32">
      {/* Service categories */}
      <div className="section-gap pt-0">
        <div className="container-edify space-y-32">
          {serviceCategories.map((category) => (
            <section key={category.id} id={category.id}>
              <div className="flex flex-col items-center text-center mb-16">
                <div className="h-1.5 w-16 rounded-full bg-accent mb-6" />
                <h2 className="text-4xl md:text-5xl font-black text-brand-black tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {category.label}
                </h2>
              </div>
              <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10" stagger={0.1}>
                {category.services.map((svc) => (
                  <ServiceCard key={svc.title} {...svc} accent={category.accent} />
                ))}
              </StaggerChildren>
            </section>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <FadeIn className="container-edify">
        <div className="rounded-[3rem] p-16 md:p-24 text-center relative overflow-hidden bg-brand-black shadow-2xl shadow-black/20">
          {/* Glowing Accents */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            <div
              className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full blur-[100px]"
              style={{ background: 'var(--accent-orange)' }}
            />
            <div
              className="absolute -bottom-10 -left-10 w-[300px] h-[300px] rounded-full blur-[80px]"
              style={{ background: 'var(--accent-blue)' }}
            />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tight leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Looking for the right solution <br /> for your institution?
            </h2>
            <p className="text-slate-400 text-xl mb-14 max-w-3xl mx-auto leading-relaxed font-medium">
              Our team of experts will work closely with you to understand your institution's unique needs and design the perfect integrated service package.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-12 py-5 rounded-full text-white font-bold transition-all duration-300 hover:scale-105 bg-accent shadow-2xl shadow-orange-500/20"
            >
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
