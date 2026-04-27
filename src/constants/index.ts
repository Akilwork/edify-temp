import { Building2, Globe, Users, Award, LucideIcon } from 'lucide-react';

export const trustIndicators: { icon: LucideIcon; label: string }[] = [
  { icon: Building2, label: 'Dubai HQ' },
  { icon: Globe, label: '8 Countries' },
  { icon: Users, label: '50+ Institutions' },
  { icon: Award, label: 'MHUDA Trust' },
];

export const aboutFeatures: string[] = [
  'Multi-sector expertise',
  'Global reach',
  'Trusted by 50+ clients',
  'MHUDA Trust network',
];

export const companies: { name: string; tagline: string; href: string }[] = [
  { name: 'NIMS', tagline: 'National Institutions Management', href: '#' },
  { name: 'ZASA', tagline: 'Education Solutions', href: '#' },
  { name: 'SEED', tagline: 'Student Excellence & Dev.', href: '#' },
  { name: 'Loyaltri', tagline: 'Loyalty & Engagement Platform', href: '#' },
  { name: 'Imprint', tagline: 'Design & Communication', href: '#' },
  { name: 'EMKE Garage', tagline: 'Innovation & Technology', href: '#' },
  { name: 'Techno Alliance', tagline: 'EdTech Solutions', href: '#' },
  { name: 'UniDesign', tagline: 'Branding & Visual Identity', href: '#' },
];

export const uaeCities: string[] = ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman'];

export const timeline: { year: string; title: string; desc: string }[] = [
  { year: '2018', title: 'Founded in Dubai', desc: 'EDIFY Management Consultancy LLP incorporated under MHUDA Trust in Dubai, UAE.' },
  { year: '2019', title: 'First Institutional Partner', desc: 'Onboarded our first school management contract, establishing NIMS as our anchor institution brand.' },
  { year: '2021', title: 'Regional Expansion', desc: 'Extended operations to cover multiple UAE emirates. HR & Recruitment arm launched.' },
  { year: '2022', title: 'Technology Vertical', desc: 'Launched Software Consultancy and Robotics & Innovation services. Techno Alliance formed.' },
  { year: '2023', title: 'Multi-Country Reach', desc: 'Operations expanded to 5+ countries. Group Companies ecosystem scaled to 10+ entities.' },
  { year: '2024', title: 'Growth Phase', desc: 'Over 50 institutions in portfolio. New specialized services and facilities management launched.' },
];

export const stats: { end: number; suffix?: string; prefix?: string; label: string; description: string }[] = [
  { end: 50, suffix: '+', label: 'Institutions', description: 'Managed & Supported' },
  { end: 120, suffix: '+', label: 'Projects in Pipeline', description: 'Across 5 countries' },
  { end: 25000, suffix: '+', label: 'Students Impacted', description: 'Every academic year' },
  { end: 8, label: 'Countries', description: 'Our global footprint' },
];

export const featuresData: { image: string; title: string; desc: string }[] = [
  {
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    title: 'Academic Excellence',
    desc: 'Standardizing curriculum and elevating teaching quality to build world-class educational institutions.',
  },
  {
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    title: 'Operational Efficiency',
    desc: 'Streamlining administration, human resources, and facility management for optimal performance.',
  },
  {
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    title: 'Technology Integration',
    desc: 'Deploying cutting-edge EdTech and robust digital infrastructure to future-proof learning.',
  },
];
