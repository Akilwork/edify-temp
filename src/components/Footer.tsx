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

const contactItems = [
  {
    icon: MapPin,
    href: '#',
    label: 'Business Bay, Dubai, United Arab Emirates',
  },
  {
    icon: Phone,
    href: 'tel:+97100000000',
    label: '+971 00 000 0000',
  },
  {
    icon: Mail,
    href: 'mailto:info@edify.ae',
    label: 'info@edify.ae',
  },
];

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
    <footer className="text-white overflow-hidden" style={{ background: 'var(--brand-black)' }}>

      {/* ── Top section: tagline left + nav columns right ── */}
      <div className="container-edify pt-20 pb-16">
        <div className="flex flex-col lg:flex-row lg:items-start gap-16 lg:gap-0">

          {/* Left — brand badge + editorial tagline + socials */}
          <AnimatedContainer delay={0.1} className="lg:w-1/2 lg:pr-16">

            {/* Brand badge */}
            <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 mb-10">
              <GraduationCap className="w-3.5 h-3.5 text-white/60" />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-white/60">
                EDIFY Consultancy
              </span>
            </div>

            {/* Editorial tagline */}
            <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
              Empowering education{' '}
              <span className="font-normal text-white/50">and institutional</span>
              <br />
              <span className="font-normal text-white/50">excellence</span>
            </h2>
          </AnimatedContainer>

          {/* Right — nav columns */}
          <div className="lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-10 lg:gap-8 lg:pt-2">

            {/* Company */}
            <AnimatedContainer delay={0.2}>
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/30 mb-6">
                Explore
              </p>
              <ul className="space-y-3.5">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/55 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group cursor-pointer"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </AnimatedContainer>

            {/* Services */}
            <AnimatedContainer delay={0.3}>
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/30 mb-6">
                Services
              </p>
              <ul className="space-y-3.5">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/55 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group cursor-pointer"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </AnimatedContainer>

            {/* Quick links / Dubai Office */}
            <AnimatedContainer delay={0.4} className="col-span-2 md:col-span-1">
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/30 mb-6">
                Dubai Office
              </p>
              <ul className="space-y-3.5">
                {contactItems.map(({ icon: Icon, href, label }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-white/55 hover:text-white transition-colors duration-200 flex items-start gap-2 group cursor-pointer"
                    >
                      <Icon className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-white/30 group-hover:text-[var(--accent-primary)] transition-colors duration-200" />
                      <span>{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </AnimatedContainer>

          </div>
        </div>
      </div>

      {/* ── Oversized brand wordmark — centred, bottom 50% visible ── */}
      <AnimatedContainer delay={0.15}>
        <div className="relative select-none border-t border-white/[0.06]">
          {/*
            The text is rendered at full height, then the wrapper clips to
            exactly half that height so only the bottom half of the glyphs show.
            font-size ≈ clamp(5rem, 20vw, 18rem), line-height = 1 (leading-none)
            → wrapper height = font-size / 2
          */}
          <div
            className="overflow-hidden w-full"
            style={{ height: 'clamp(3.75rem, 15vw, 13.5rem)' }}
          >
            <div
              className="text-[clamp(5rem,20vw,18rem)] font-bold leading-none tracking-tighter text-white text-center w-full"
              aria-hidden="true"
            >
              EDIFY
            </div>
          </div>
        </div>
      </AnimatedContainer>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/[0.06]">
        <div className="container-edify py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] tracking-[0.15em] uppercase text-white/25 font-medium">
            © {new Date().getFullYear()} EDIFY Management Consultancy LLP. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-[11px] tracking-[0.1em] uppercase text-white/25 hover:text-white/60 transition-colors duration-200 font-medium cursor-pointer"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-[11px] tracking-[0.1em] uppercase text-white/25 hover:text-white/60 transition-colors duration-200 font-medium cursor-pointer"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
