import Link from 'next/link';
import { GraduationCap, Mail, Phone, MapPin, ArrowUpRight, Globe } from 'lucide-react';

const footerLinks = {
  company: [
    { label: 'Overview', href: '/' },
    { label: 'Our Story', href: '/#about' },
    { label: 'Leadership Team', href: '/team' },
    { label: 'Group Companies', href: '/companies' },
    { label: 'UAE Presence', href: '/#presence' },
  ],
  services: [
    { label: 'Academic Services', href: '/services' },
    { label: 'HR & Recruitment', href: '/services' },
    { label: 'Technology & Innovation', href: '/services' },
    { label: 'Facilities Management', href: '/services' },
    { label: 'Financial Services', href: '/services' },
    { label: 'Specialized Services', href: '/services' },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: 'var(--green-900)', color: 'var(--white)' }}>
      {/* Main footer */}
      <div className="container-edify py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-sm flex items-center justify-center" style={{ background: 'var(--gold-500)' }}>
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-lg leading-none text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                  EDIFY
                </div>
                <div className="text-xs text-slate-400 font-medium tracking-widest uppercase leading-none mt-0.5">
                  Management Consultancy
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Empowering education and institutional excellence. Under the MHUDA Trust, we deliver comprehensive solutions for educational institutions worldwide.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" aria-label="X / Twitter" className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="mailto:info@edify.ae" aria-label="Email" className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: 'var(--gold-500)' }}>Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1 group">
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: 'var(--gold-500)' }}>Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1 group">
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: 'var(--gold-500)' }}>Dubai Office</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--gold-500)' }} />
                <span className="text-sm text-slate-400 leading-relaxed">Business Bay, Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--gold-500)' }} />
                <a href="tel:+97100000000" className="text-sm text-slate-400 hover:text-white transition-colors">+971 00 000 0000</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--gold-500)' }} />
                <a href="mailto:info@edify.ae" className="text-sm text-slate-400 hover:text-white transition-colors">info@edify.ae</a>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-slate-800">
              <p className="text-xs text-slate-500 mb-1">Under the umbrella of</p>
              <p className="text-sm font-semibold text-slate-300">MHUDA Trust</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="container-edify py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} EDIFY Management Consultancy LLP. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-slate-500 hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-xs text-slate-500 hover:text-slate-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
