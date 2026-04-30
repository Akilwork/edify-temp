'use client';

import { ArrowRight, CheckCircle2, Search, MessageSquare, UserPlus, Zap, BarChart3, Users2, ShieldCheck, Globe, CreditCard, Wallet, Banknote, Smartphone, TrendingUp, Package, Factory, Stethoscope, Laptop, Play } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { StaggerChildren, FadeIn } from '@/components/ui/animations';

// --- Components ---

function SectionHeader({ badge, title, description, center = true }: { badge?: string; title: string; description?: string; center?: boolean }) {
  return (
    <div className={`flex flex-col ${center ? 'items-center text-center' : 'items-start text-left'} mb-16`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-xs font-bold tracking-widest uppercase text-slate-500">{badge}</span>
        </div>
      )}
      <h2 className="tracking-tight max-w-3xl mb-6">{title}</h2>
      {description && <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">{description}</p>}
    </div>
  );
}

// 1. Service Hero Grid
const serviceCards = [
  { 
    title: 'Academic Consulting', 
    desc: 'Strategic planning, curriculum development, and accreditation support.',
    icon: '🎓',
    color: 'bg-violet-50 text-violet-600'
  },
  { 
    title: 'Student Support', 
    desc: 'Mental health, counseling, and specialized educational frameworks.',
    icon: '🤝',
    color: 'bg-blue-50 text-blue-600'
  },
  { 
    title: 'HR & Recruitment', 
    desc: 'Placing qualified educators and managing institutional staffing needs.',
    icon: '👥',
    color: 'bg-indigo-50 text-indigo-600'
  },
  { 
    title: 'Technology & Software', 
    desc: 'LMS implementation, custom dev, and STEM innovation programs.',
    icon: '💻',
    color: 'bg-teal-50 text-teal-600'
  },
  { 
    title: 'Operations & Facilities', 
    desc: 'Campus safety, vendor management, and infrastructure upkeep.',
    icon: '🏗️',
    color: 'bg-orange-50 text-orange-600'
  },
  { 
    title: 'Creative & Printing', 
    desc: 'School branding, signage, and high-quality prospectus production.',
    icon: '🎨',
    color: 'bg-pink-50 text-pink-600'
  }
];

function ServiceHeroGrid() {
  return (
    <section className="section-gap pt-0">
      <div className="container-edify">
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.1}>
          {serviceCards.map((card, i) => (
            <div key={i} className="group p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500">
              <div className={`w-14 h-14 rounded-2xl ${card.color} flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform duration-500`}>
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{card.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{card.desc}</p>
              <Link href="#" className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

// 2. Sales Activity Section (Featured Showcase)
function SalesActivitySection() {
  return (
    <section className="section-gap">
      <div className="container-edify">
        <div className="rounded-[3.5rem] bg-[#E0E7FF]/50 p-8 md:p-16 lg:p-24 relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="mb-8 leading-[1.1]">Maximize Institutional Efficiency and Output</h2>
              <p className="text-slate-600 text-lg mb-12 leading-relaxed">
                Integrated management systems designed to save time and keep your academic data organized. Streamline operations with our advanced administrative toolkit.
              </p>
              <button className="bg-accent text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform mb-12 shadow-lg shadow-orange-500/20">
                Get started for free
              </button>
              
              <ul className="space-y-6">
                {[
                  { icon: TrendingUp, title: 'Activity Tracking', text: 'Monitor progress across all departments in real-time.' },
                  { icon: UserPlus, title: 'Student Discovery', text: 'Advanced systems for enrollment and lead management.' },
                  { icon: MessageSquare, title: 'Integrated Messaging', text: 'Seamless communication between staff, parents, and students.' }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/20 p-2">
                <Image 
                  src="/services_mockup_1.png" 
                  alt="Dashboard Mockup" 
                  width={800} 
                  height={600} 
                  className="rounded-2xl"
                />
              </div>
              {/* Floating accents */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-400/20 blur-3xl rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-400/20 blur-3xl rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 3. Bento Workflow Section
function BentoWorkflow() {
  return (
    <section className="section-gap bg-slate-50/50">
      <div className="container-edify">
        <SectionHeader 
          title="Elevate Your Daily Workflow"
          description="Integrated features designed to boost productivity and simplify the most complex educational tasks."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
          {/* Card 1: Employee Management */}
          <div className="md:col-span-4 rounded-[2.5rem] bg-white border border-slate-100 p-8 flex flex-col gap-8 shadow-sm hover:shadow-xl transition-shadow">
            <div className="flex-1">
              <h3 className="text-xl mb-4">Employee Management</h3>
              <p className="text-slate-500 text-sm">Effectively organize and access your comprehensive employee records.</p>
            </div>
            <div className="relative h-64 bg-slate-50 rounded-2xl overflow-hidden flex items-center justify-center border border-slate-100">
               <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white" />
               {/* Mock UI bits */}
               <div className="w-4/5 space-y-3 relative z-10">
                  <div className="h-10 bg-white rounded-lg shadow-sm border border-slate-100 flex items-center px-4 gap-3">
                    <div className="w-6 h-6 rounded-full bg-slate-200" />
                    <div className="h-2 w-24 bg-slate-200 rounded" />
                  </div>
                  <div className="h-10 bg-white rounded-lg shadow-sm border border-slate-100 flex items-center px-4 gap-3">
                    <div className="w-6 h-6 rounded-full bg-indigo-100" />
                    <div className="h-2 w-32 bg-slate-200 rounded" />
                  </div>
                  <div className="h-10 bg-white rounded-lg shadow-sm border border-slate-100 flex items-center px-4 gap-3">
                    <div className="w-6 h-6 rounded-full bg-slate-200" />
                    <div className="h-2 w-20 bg-slate-200 rounded" />
                  </div>
               </div>
            </div>
          </div>
          
          {/* Card 2: Status Dashboard */}
          <div className="md:col-span-4 rounded-[2.5rem] bg-white border border-slate-100 p-8 flex flex-col gap-8 shadow-sm hover:shadow-xl transition-shadow">
            <div className="flex-1">
              <h3 className="text-xl mb-4">Status Dashboard</h3>
              <p className="text-slate-500 text-sm">Perform multiple tasks at once for maximum efficiency.</p>
            </div>
            <div className="relative h-64 bg-slate-50 rounded-2xl overflow-hidden flex items-center justify-center border border-slate-100">
               <div className="absolute inset-0 bg-gradient-to-tr from-emerald-50 to-white" />
               <div className="w-3/4 h-3/4 bg-white rounded-2xl shadow-xl p-4 space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="h-2 w-12 bg-slate-200 rounded" />
                    <div className="w-4 h-4 rounded-full bg-emerald-400" />
                  </div>
                  <div className="h-16 w-full bg-slate-50 rounded-lg" />
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-8 bg-slate-50 rounded" />
                    <div className="h-8 bg-slate-50 rounded" />
                  </div>
               </div>
            </div>
          </div>
          
          {/* Card 3: Progress Tracking */}
          <div className="md:col-span-4 rounded-[2.5rem] bg-white border border-slate-100 p-8 flex flex-col gap-8 shadow-sm hover:shadow-xl transition-shadow">
            <div className="flex-1">
              <h3 className="text-xl mb-4">Progress Tracking</h3>
              <p className="text-slate-500 text-sm">Monitor goals and milestones with real-time updates.</p>
            </div>
            <div className="relative h-64 bg-slate-50 rounded-2xl overflow-hidden flex items-center justify-center border border-slate-100">
               <div className="w-32 h-32 rounded-full border-[10px] border-slate-100 border-t-accent flex items-center justify-center text-xl font-bold text-slate-900">
                  78%
               </div>
            </div>
          </div>
          
          {/* Card 4: Long Bottom Card (98% Growth) */}
          <div className="md:col-span-8 rounded-[2.5rem] bg-brand-black p-12 flex flex-col md:flex-row items-center gap-12 text-white overflow-hidden relative group">
             <div className="relative z-10 flex-1">
               <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest mb-6">Fastest Growth</span>
               <h3 className="text-4xl md:text-5xl mb-6">98% Success</h3>
               <p className="text-slate-400 text-lg max-w-md">Increase in institutional performance across our partner network.</p>
               <div className="flex items-center gap-4 mt-8">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-slate-300" />)}
                  </div>
                  <span className="text-sm text-slate-400">Trusted by 500+ Institutions</span>
               </div>
             </div>
             <div className="relative z-10 flex-shrink-0">
                <div className="w-48 h-48 rounded-full bg-accent/20 flex items-center justify-center relative">
                   <div className="w-32 h-32 rounded-full bg-accent flex items-center justify-center shadow-[0_0_50px_rgba(249,115,22,0.5)]">
                      <TrendingUp className="w-12 h-12 text-white" />
                   </div>
                   {/* Orbiting dots */}
                   <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]" />
                </div>
             </div>
             <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/10 to-transparent pointer-events-none" />
          </div>
          
          {/* Card 5: Smaller Side Card */}
          <div className="md:col-span-4 rounded-[2.5rem] bg-[#EEF2FF] p-8 flex flex-col justify-between shadow-sm border border-indigo-100">
            <h3 className="text-xl mb-4">Fastest Launch</h3>
            <p className="text-slate-500 mb-8">Go live in as little as 2 weeks with our streamlined implementation process.</p>
            <div className="bg-white rounded-2xl p-6 shadow-xl shadow-indigo-200/50">
               <div className="flex justify-between items-end">
                  <div className="space-y-2">
                    <div className="h-1 w-12 bg-indigo-100 rounded" />
                    <div className="h-1 w-8 bg-indigo-100 rounded" />
                  </div>
                  <div className="text-3xl font-bold text-indigo-600">14<span className="text-sm">days</span></div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 4. Finances/Nicepay Section
function FinancesSection() {
  return (
    <section className="section-gap">
      <div className="container-edify">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
             <Image 
               src="/services_mockup_3.png" 
               alt="Mobile Finance App" 
               width={500} 
               height={1000} 
               className="mx-auto"
             />
          </div>
          <div className="order-1 lg:order-2">
             <SectionHeader 
               badge="Finances"
               title="Boost your institution's finances"
               description="Integrated payment solutions for tuition, payroll, and procurement. Manage your school's economy with ease."
               center={false}
             />
             
             <div className="grid sm:grid-cols-2 gap-10 mt-12">
                {[
                  { icon: CreditCard, title: 'Tuition Transfers', text: 'Secure automated billing and payment collection for parents.' },
                  { icon: Wallet, title: 'Personalized Deposits', text: 'Manage staff payroll and vendor payments in one place.' },
                  { icon: ShieldCheck, title: 'Dedicated Support', text: '24/7 financial support for institutional transactions.' },
                  { icon: Banknote, title: 'Custom Reporting', text: 'Deep insights into your financial health and cash flow.' }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-accent border border-slate-100">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 5. Circular Transform Section
function CircularTransform() {
  const icons = [
    { icon: Globe, label: 'Global Access', angle: 0 },
    { icon: ShieldCheck, label: 'High Security', angle: 60 },
    { icon: TrendingUp, label: 'Analytics', angle: 120 },
    { icon: Smartphone, label: 'Mobile First', angle: 180 },
    { icon: Zap, label: 'Fast Setup', angle: 240 },
    { icon: Users2, label: 'Team Support', angle: 300 }
  ];

  return (
    <section className="section-gap bg-slate-50/30">
      <div className="container-edify flex flex-col items-center">
        <SectionHeader 
          title="Ready to transform your educational management?"
          description="Our integrated ecosystem connects every aspect of your institution in one seamless experience."
        />
        
        <div className="relative w-full max-w-[600px] h-[600px] mt-12">
          {/* Concentric rings */}
          <div className="absolute inset-0 border border-slate-200 rounded-full scale-[0.6]" />
          <div className="absolute inset-0 border border-slate-100 rounded-full scale-[0.8]" />
          <div className="absolute inset-0 border border-slate-50 rounded-full" />
          
          {/* Central Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-[2rem] bg-accent flex items-center justify-center z-20 shadow-[0_0_50px_rgba(249,115,22,0.3)]">
             <div className="grid grid-cols-2 gap-1">
               <div className="w-3 h-3 rounded-sm bg-white" />
               <div className="w-3 h-3 rounded-sm bg-white/60" />
               <div className="w-3 h-3 rounded-sm bg-white/60" />
               <div className="w-3 h-3 rounded-sm bg-white" />
             </div>
          </div>
          
          {/* Floating Icons */}
          {icons.map((item, i) => {
            const radius = 250;
            const x = Math.cos((item.angle * Math.PI) / 180) * radius;
            const y = Math.sin((item.angle * Math.PI) / 180) * radius;
            return (
              <div 
                key={i} 
                className="absolute w-20 h-20 -mt-10 -ml-10 flex flex-col items-center gap-2 group"
                style={{ top: `calc(50% + ${y}px)`, left: `calc(50% + ${x}px)` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-white shadow-xl border border-slate-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <item.icon className="w-7 h-7" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// 6. Logistics Section
function LogisticsSection() {
  const categories = [
    { title: 'Retail & Ecommerce', icon: Package, image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600' },
    { title: 'Manufacturing', icon: Factory, image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600' },
    { title: 'Healthcare & Pharma', icon: Stethoscope, image: 'https://images.unsplash.com/photo-1538108149393-fdfd81895907?auto=format&fit=crop&q=80&w=600' },
    { title: 'Tech & Electronics', icon: Laptop, image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600' }
  ];

  return (
    <section className="section-gap">
      <div className="container-edify">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <SectionHeader 
            title="Tailored Logistics for Every Business"
            center={false}
          />
          <div className="flex gap-4 mb-12">
             <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
                <ArrowRight className="w-5 h-5 rotate-180" />
             </button>
             <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
                <ArrowRight className="w-5 h-5" />
             </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           {categories.map((cat, i) => (
             <div key={i} className="group relative h-[400px] rounded-[2.5rem] overflow-hidden bg-slate-900 shadow-2xl">
                <Image 
                  src={cat.image} 
                  alt={cat.title} 
                  fill 
                  className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                   <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-6">
                      <cat.icon className="w-5 h-5 text-white" />
                   </div>
                   <h3 className="text-white text-xl leading-tight">{cat.title}</h3>
                   <div className="h-1 w-0 bg-accent mt-4 group-hover:w-full transition-all duration-500" />
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}

// 7. Final CTA Section
function ContactCTA() {
  return (
    <section className="section-gap">
      <FadeIn className="container-edify">
        <div className="rounded-[3rem] p-16 md:p-24 text-center relative overflow-hidden bg-brand-black shadow-2xl shadow-black/20">
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
            <h2 className="text-white mb-10 tracking-tight leading-tight">
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
    </section>
  );
}

export default function ServicesContent() {
  return (
    <div className="bg-white">
      <ServiceHeroGrid />
      <SalesActivitySection />
      <BentoWorkflow />
      <FinancesSection />
      <CircularTransform />
      <LogisticsSection />
      <ContactCTA />
    </div>
  );
}
