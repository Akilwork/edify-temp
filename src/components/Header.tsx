'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, GraduationCap } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

const services = [
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

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200'
          : 'bg-transparent'
      }`}
    >
      <div className="container-edify">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-sm flex items-center justify-center" style={{ background: 'var(--green-800)' }}>
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-bold text-lg leading-none" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--green-800)' }}>
                EDIFY
              </div>
              <div className="text-xs text-slate-500 font-medium tracking-widest uppercase leading-none mt-0.5">
                Management Consultancy
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-slate-700 hover:text-green-800 transition-colors" style={{ '--tw-text-opacity': '1' } as React.CSSProperties}>
              Overview
            </Link>

            {/* Services Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-green-800 transition-colors" style={{ color: servicesOpen ? 'var(--green-800)' : undefined }}>
                Our Services
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[760px] bg-white rounded-xl shadow-2xl border border-slate-100 p-6 grid grid-cols-3 gap-6 z-50">
                  {/* Decorative accent */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white" />
                  {services.map((group) => (
                    <div key={group.category}>
                      <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--gold-500)' }}>
                        {group.category}
                      </p>
                      <ul className="space-y-1.5">
                        {group.items.map((item) => (
                          <li key={item}>
                            <Link
                              href="/services"
                              className="text-sm text-slate-600 hover:text-green-800 transition-colors block py-0.5"
                              style={{ '--tw-text-opacity': '1' } as React.CSSProperties}
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="col-span-3 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-400">Comprehensive solutions for educational institutions</span>
                    <Link href="/services" className="text-xs font-semibold px-4 py-2 rounded-full text-white transition-colors" style={{ background: 'var(--green-800)' }}>
                      View All Services →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/team" className="text-sm font-medium text-slate-700 hover:text-green-800 transition-colors">
              Team
            </Link>
            <Link href="/companies" className="text-sm font-medium text-slate-700 hover:text-green-800 transition-colors">
              Group Companies
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold px-5 py-2.5 rounded-full text-white transition-all hover:opacity-90 hover:shadow-md"
              style={{ background: 'var(--green-800)' }}
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              className="lg:hidden p-2 rounded-lg"
              style={{ color: 'var(--green-800)' } as React.CSSProperties}
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-sm flex items-center justify-center" style={{ background: 'var(--green-800)' }}>
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--green-800)' }}>EDIFY</span>
                  </div>
                </div>
                <nav className="flex-1 p-6 space-y-1">
                  <Link href="/" onClick={() => setMobileOpen(false)} className="block px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg">Overview</Link>

                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
                  >
                    Our Services
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileServicesOpen && (
                    <div className="ml-4 space-y-2">
                      {services.map((g) => (
                        <div key={g.category}>
                          <p className="text-xs font-semibold tracking-wider uppercase px-3 py-1" style={{ color: 'var(--gold-500)' }}>{g.category}</p>
                          {g.items.map((item) => (
                            <Link key={item} href="/services" onClick={() => setMobileOpen(false)} className="block px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-50 rounded-lg">{item}</Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                  <Link href="/team" onClick={() => setMobileOpen(false)} className="block px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg">Team</Link>
                  <Link href="/companies" onClick={() => setMobileOpen(false)} className="block px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg">Group Companies</Link>
                </nav>
                <div className="p-6 border-t border-slate-100">
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="block text-center text-sm font-semibold px-5 py-3 rounded-full text-white"
                    style={{ background: 'var(--green-800)' }}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
