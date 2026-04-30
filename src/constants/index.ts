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

export const companies: { name: string; tagline: string; href: string; logo: string }[] = [
  { name: 'NIMS Schools', tagline: 'National Institutions Management', href: 'https://nimsschool.com', logo: '1.png' },
  { name: 'ZASA', tagline: 'Education Solutions', href: 'https://zasauae.com', logo: '2.png' },
  { name: 'SeeD', tagline: 'Student Excellence & Dev.', href: 'https://seed.ae', logo: '3.png' },
  { name: 'Loyaltri', tagline: 'Loyalty & Engagement Platform', href: 'https://loyaltri.com', logo: 'image 711.png' },
  { name: 'Safetri', tagline: 'Safety & Security Solutions', href: 'https://safetri.com', logo: '4.png' },
  { name: 'EMKE Garage', tagline: 'Innovation & Technology', href: 'https://emkegarage.com', logo: '5.png' },
  { name: 'IMPRINTES', tagline: 'Design & Communication', href: '#', logo: '7.png' },
  { name: 'Toss Techo', tagline: 'EdTech Solutions', href: 'https://tosstecho.com', logo: '8.png' },
  { name: 'UniDezine', tagline: 'Branding & Visual Identity', href: 'https://unidezine.com', logo: '9.png' },
  { name: 'Company', tagline: '', href: '#', logo: '10.png' },
];

export const turnoverData = {
  total: 'AED 500M+',
  growth: '25%',
  highlights: [
    'Consistent year-on-year financial growth since 2018',
    'Diversified revenue streams across 10+ business verticals',
    'Strong capital reserve for upcoming regional expansions'
  ]
};

export const uaeCities: string[] = ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman'];

export const timeline: { year: string; title: string; desc: string }[] = [
  { year: '2018', title: 'Founded in Dubai', desc: 'EDIFY Management Consultancy LLP incorporated under MHUDA Trust in Dubai, UAE.' },
  { year: '2019', title: 'First Institutional Partner', desc: 'Onboarded our first school management contract, establishing NIMS as our anchor institution brand.' },
  { year: '2021', title: 'Regional Expansion', desc: 'Extended operations to cover multiple UAE emirates. HR & Recruitment arm launched.' },
  { year: '2022', title: 'Technology Vertical', desc: 'Launched Software Consultancy and Robotics & Innovation services. Techno Alliance formed.' },
  { year: '2023', title: 'Multi-Country Reach', desc: 'Operations expanded to 5+ countries. Group Companies ecosystem scaled to 10+ entities.' },
  { year: '2024', title: 'Growth Phase', desc: 'Over 50 institutions in portfolio. New specialized services and facilities management launched.' },
];

export const stats: { end: number; suffix?: string; prefix?: string; label: string; description: string; isDynamic?: boolean }[] = [
  { end: 50, suffix: '+', label: 'Institutions', description: 'Currently operational in UAE' },
  { end: 120, suffix: '+', label: 'Pipeline', description: 'Institutions in pipeline' },
  { end: 15420, label: 'Visitors', description: 'Real-time visitor count', isDynamic: true },
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

export const services = [
  {
    category: 'Academic & Education',
    items: ['Academic Services', 'Educational Consultancy', 'School Management'],
  },
  {
    category: 'HR & Recruitment',
    items: ['Human Resource Services', 'Recruitment Services'],
  },
  {
    category: 'Operations & Facilities',
    items: ['Transport Services', 'Facilities Management', 'F&B Services'],
  },
  {
    category: 'Technology & Innovation',
    items: ['Software Consultancy', 'Software Development', 'Robotics & Innovation'],
  },
  {
    category: 'Specialized Services',
    items: ['Psychological Counselling', 'Therapeutic Consultancy', 'Special Needs'],
  },
  {
    category: 'Business Support',
    items: ['Financial Services', 'Designing & Printing', 'Uniform & Office Supplies'],
  },
];
