'use client';

import { ExternalLink, Mail } from 'lucide-react';

const leaders = [
  {
    name: 'Mohammed Al Hamdan',
    role: 'Chairman & Founder',
    background:
      '25+ years in institutional governance and education policy across the GCC. Founded MHUDA Trust with a vision for scalable educational excellence.',
    initials: 'MH',
    color: 'var(--green-800)',
  },
  {
    name: 'Dr. Sara Khalid',
    role: 'Chief Executive Officer',
    background:
      'PhD in Educational Leadership. Previously held senior roles at UAE Ministry of Education. Drives strategic growth and institutional partnerships.',
    initials: 'SK',
    color: 'var(--gold-500)',
  },
  {
    name: 'Rashid Al Mansoori',
    role: 'Chief Operations Officer',
    background:
      'Operations veteran with 18 years managing multi-campus school networks. Expert in facilities, transport, and process optimisation.',
    initials: 'RM',
    color: '#2d6e8f',
  },
  {
    name: 'Priya Nair',
    role: 'Director — HR & Recruitment',
    background:
      'CIPD-certified HR leader with deep expertise in education sector talent acquisition and workforce development across South Asia and the Middle East.',
    initials: 'PN',
    color: '#5b4a9a',
  },
  {
    name: 'Ahmed Al Farsi',
    role: 'Director — Technology & Innovation',
    background:
      'EdTech architect who has deployed learning management systems for over 30 institutions. Leads our Software and Robotics verticals.',
    initials: 'AF',
    color: '#1a6b4a',
  },
  {
    name: 'Dr. Layla Osman',
    role: 'Head — Psychological & Therapeutic Services',
    background:
      'Clinical psychologist with 15 years of school-based practice. Specialises in inclusive education frameworks and student wellbeing programmes.',
    initials: 'LO',
    color: '#8a3a5c',
  },
  {
    name: 'Sanjay Mehta',
    role: 'Director — Financial Services',
    background:
      'CA with extensive experience in institutional finance, audit, and compliance. Has managed financial portfolios for school groups across 4 countries.',
    initials: 'SM',
    color: '#6b4a1a',
  },
  {
    name: 'Fatima Al Zaabi',
    role: 'Head — Academic Services',
    background:
      'Former school principal and curriculum specialist. Leads EDIFY\'s academic governance, accreditation, and quality assurance engagements.',
    initials: 'FZ',
    color: '#2d5a8a',
  },
];

function TeamCard({
  name,
  role,
  background,
  initials,
  color,
}: {
  name: string;
  role: string;
  background: string;
  initials: string;
  color: string;
}) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300">
      {/* Avatar area */}
      <div
        className="relative h-52 flex items-end p-6 overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${color}22, ${color}44)` }}
      >
        {/* Large initials */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg transition-transform duration-300 group-hover:scale-105"
          style={{ background: color, fontFamily: 'Playfair Display, serif' }}
        >
          {initials}
        </div>
        {/* Decorative circle */}
        <div
          className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-15"
          style={{ background: color }}
        />
        {/* Role badge */}
        <div className="relative z-10">
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full text-white"
            style={{ background: color }}
          >
            {role}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-slate-900 mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
          {name}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed mb-5">{background}</p>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
          <button
            className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-white hover:border-transparent transition-all"
            style={{ ['--hover-bg' as string]: color }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = color;
              (e.currentTarget as HTMLElement).style.color = 'white';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = '';
              (e.currentTarget as HTMLElement).style.color = '';
            }}
            aria-label={`Connect with ${name} on LinkedIn`}
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
          <button
            className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-white hover:border-transparent transition-all"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = color;
              (e.currentTarget as HTMLElement).style.color = 'white';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = '';
              (e.currentTarget as HTMLElement).style.color = '';
            }}
            aria-label={`Email ${name}`}
          >
            <Mail className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function TeamContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {leaders.map((member) => (
        <TeamCard key={member.name} {...member} />
      ))}
    </div>
  );
}
