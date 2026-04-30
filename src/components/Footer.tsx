'use client';

import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Globe,
  Share2,
  Rss,
} from 'lucide-react';

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

const socialLinks = [
  { icon: Globe, href: '#', label: 'Website' },
  { icon: Share2, href: '#', label: 'Social' },
  { icon: Rss, href: '#', label: 'Updates' },
  { icon: Mail, href: 'mailto:info@edify.ae', label: 'Email' },
];

// ─── Animation wrapper ────────────────────────────────────────────────────────

type AnimatedContainerProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>['className'];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: AnimatedContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white pt-24">
      {/* Subtle top glow */}
      <div className="relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-white/20 blur rounded-full" />
      </div>

      {/* Main footer grid */}
      <div className="container-edify pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

          {/* Brand column */}
          <AnimatedContainer delay={0.1} className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-accent">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-2xl leading-none tracking-tight">
                  EDIFY
                </div>
                <div className="text-[10px] text-slate-500 font-bold tracking-[0.3em] uppercase leading-none mt-1.5">
                  Consultancy
                </div>
              </div>
            </div>

            <p className="text-base text-slate-400 leading-relaxed mb-8 font-medium">
              Empowering education and institutional excellence. Under the MHUDA Trust, we deliver comprehensive solutions for educational institutions worldwide.
            </p>

            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-accent hover:bg-accent transition-all duration-300 cursor-pointer"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </AnimatedContainer>

          {/* Company links */}
          <AnimatedContainer delay={0.2}>
            <h4 className="text-sm font-bold tracking-[0.2em] uppercase mb-8 text-accent">
              Company
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-base text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group font-medium cursor-pointer"
                  >
                    {link.label}
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </AnimatedContainer>

          {/* Services links */}
          <AnimatedContainer delay={0.3}>
            <h4 className="text-sm font-bold tracking-[0.2em] uppercase mb-8 text-accent">
              Services
            </h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-base text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group font-medium cursor-pointer"
                  >
                    {link.label}
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </AnimatedContainer>

          {/* Contact */}
          <AnimatedContainer delay={0.4}>
            <h4 className="text-sm font-bold tracking-[0.2em] uppercase mb-8 text-accent">
              Dubai Office
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <span className="text-base text-slate-400 leading-relaxed font-medium">
                  Business Bay, Dubai,<br />United Arab Emirates
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <a
                  href="tel:+97100000000"
                  className="text-base text-slate-400 hover:text-white transition-colors duration-200 font-medium cursor-pointer"
                >
                  +971 00 000 0000
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <a
                  href="mailto:info@edify.ae"
                  className="text-base text-slate-400 hover:text-white transition-colors duration-200 font-medium cursor-pointer"
                >
                  info@edify.ae
                </a>
              </li>
            </ul>
          </AnimatedContainer>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container-edify py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-slate-500 font-medium">
            © {new Date().getFullYear()} EDIFY Management Consultancy LLP.
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="#"
              className="text-sm text-slate-500 hover:text-white transition-colors duration-200 font-medium cursor-pointer"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-slate-500 hover:text-white transition-colors duration-200 font-medium cursor-pointer"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
