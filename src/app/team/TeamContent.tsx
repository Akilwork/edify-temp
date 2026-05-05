'use client';

import { ExternalLink, Mail } from 'lucide-react';

const leaders = [
  {
    name: 'Mohammed Al Hamdan',
    role: 'Chairman & Founder',
    background:
      '25+ years in institutional governance and education policy across the GCC. Founded MHUDA Trust with a vision for scalable educational excellence.',
    initials: 'MH',
    color: '#2D6A4F',
  },
  {
    name: 'Dr. Sara Khalid',
    role: 'Chief Executive Officer',
    background:
      'PhD in Educational Leadership. Previously held senior roles at UAE Ministry of Education. Drives strategic growth and institutional partnerships.',
    initials: 'SK',
    color: '#C9A84C',
  },
  {
    name: 'Rashid Al Mansoori',
    role: 'Chief Operations Officer',
    background:
      'Operations veteran with 18 years managing multi-campus school networks. Expert in facilities, transport, and process optimisation.',
    initials: 'RM',
    color: '#2D6E8F',
  },
  {
    name: 'Priya Nair',
    role: 'Director — HR & Recruitment',
    background:
      'CIPD-certified HR leader with deep expertise in education sector talent acquisition and workforce development across South Asia and the Middle East.',
    initials: 'PN',
    color: '#5B4A9A',
  },
  {
    name: 'Ahmed Al Farsi',
    role: 'Director — Technology & Innovation',
    background:
      'EdTech architect who has deployed learning management systems for over 30 institutions. Leads our Software and Robotics verticals.',
    initials: 'AF',
    color: '#1A6B4A',
  },
  {
    name: 'Dr. Layla Osman',
    role: 'Head — Psychological & Therapeutic Services',
    background:
      'Clinical psychologist with 15 years of school-based practice. Specialises in inclusive education frameworks and student wellbeing programmes.',
    initials: 'LO',
    color: '#8A3A5C',
  },
  {
    name: 'Sanjay Mehta',
    role: 'Director — Financial Services',
    background:
      'CA with extensive experience in institutional finance, audit, and compliance. Has managed financial portfolios for school groups across 4 countries.',
    initials: 'SM',
    color: '#7A5C2A',
  },
  {
    name: 'Fatima Al Zaabi',
    role: 'Head — Academic Services',
    background:
      "Former school principal and curriculum specialist. Leads EDIFY's academic governance, accreditation, and quality assurance engagements.",
    initials: 'FZ',
    color: '#2D5A8A',
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
    <div
      className="group relative rounded-2xl overflow-hidden transition-all duration-300 cursor-default"
      style={{
        background: 'var(--surface-0)',
        border: '1px solid var(--border-light)',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 40px rgba(0,0,0,0.08)';
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = '';
        (e.currentTarget as HTMLElement).style.transform = '';
      }}
    >
      {/* Top accent line on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: color }}
      />

      {/* Avatar area */}
      <div
        className="relative h-44 flex items-end p-6 overflow-hidden"
        style={{ background: `${color}12` }}
      >
        {/* Large initials circle */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg transition-transform duration-300 group-hover:scale-105"
          style={{ background: color, fontFamily: "'Syne', sans-serif" }}
        >
          {initials}
        </div>

        {/* Decorative circle */}
        <div
          className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full opacity-10"
          style={{ background: color }}
        />

        {/* Role badge */}
        <div className="relative z-10">
          <span
            className="text-[11px] font-semibold px-3 py-1 rounded-full text-white"
            style={{ background: color }}
          >
            {role}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className="text-base font-bold mb-2"
          style={{ color: 'var(--text-primary)', fontFamily: "'Syne', sans-serif" }}
        >
          {name}
        </h3>
        <p
          className="text-sm leading-relaxed mb-5"
          style={{ color: 'var(--text-muted)' }}
        >
          {background}
        </p>

        {/* Actions */}
        <div
          className="flex items-center gap-2.5 pt-4"
          style={{ borderTop: '1px solid var(--border-light)' }}
        >
          <button
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer"
            style={{
              border: '1px solid var(--border-medium)',
              color: 'var(--text-muted)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = color;
              (e.currentTarget as HTMLElement).style.color = 'white';
              (e.currentTarget as HTMLElement).style.borderColor = color;
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = '';
              (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)';
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-medium)';
            }}
            aria-label={`Connect with ${name} on LinkedIn`}
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
          <button
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer"
            style={{
              border: '1px solid var(--border-medium)',
              color: 'var(--text-muted)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = color;
              (e.currentTarget as HTMLElement).style.color = 'white';
              (e.currentTarget as HTMLElement).style.borderColor = color;
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = '';
              (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)';
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-medium)';
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {leaders.map((member) => (
        <TeamCard key={member.name} {...member} />
      ))}
    </div>
  );
}
