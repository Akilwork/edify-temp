'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
  const pathname = usePathname();

  const isLightPage = pathname === '/services';
  const textShouldBeDark = scrolled || isLightPage;

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
              <div className="font-bold text-lg leading-none transition-colors duration-300" style={{ fontFamily: 'Playfair Display, serif', color: textShouldBeDark ? 'var(--green-800)' : 'white' }}>
                EDIFY
              </div>
              <div className={`text-xs font-medium tracking-widest uppercase leading-none mt-0.5 transition-colors duration-300 ${textShouldBeDark ? 'text-slate-500' : 'text-white/80'}`}>
                Management Consultancy
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className={`text-sm font-medium transition-colors ${textShouldBeDark ? 'text-slate-700 hover:text-green-800' : 'text-white/90 hover:text-white'}`}>
              Overview
            </Link>

            {/* Services Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className={`flex items-center gap-1 text-sm font-medium transition-colors ${textShouldBeDark ? (servicesOpen ? 'text-green-800' : 'text-slate-700 hover:text-green-800') : (servicesOpen ? 'text-white' : 'text-white/90 hover:text-white')}`}>
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

            <Link href="/team" className={`text-sm font-medium transition-colors ${textShouldBeDark ? 'text-slate-700 hover:text-green-800' : 'text-white/90 hover:text-white'}`}>
              Team
            </Link>
            <Link href="/companies" className={`text-sm font-medium transition-colors ${textShouldBeDark ? 'text-slate-700 hover:text-green-800' : 'text-white/90 hover:text-white'}`}>
              Group Companies
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:opacity-90 hover:shadow-md ${textShouldBeDark ? 'text-white' : 'text-green-900 bg-white hover:bg-white/90'}`}
              style={textShouldBeDark ? { background: 'var(--green-800)' } : {}}
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              className="lg:hidden p-2 rounded-xl transition-all active:scale-95 hover:bg-black/5"
              style={{ color: textShouldBeDark ? 'var(--green-800)' : 'white' }}
              aria-label="Open navigation menu"
            >
              <Menu className="w-7 h-7" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-[400px] p-0 bg-white border-l-0">
              <div className="flex flex-col h-full bg-white text-slate-900">
                <div className="p-8 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-green-900/10" style={{ background: 'var(--green-800)' }}>
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-bold text-xl tracking-tight" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--green-800)' }}>EDIFY</span>
                  </div>
                  <button onClick={() => setMobileOpen(false)} className="p-2 rounded-lg bg-slate-50 text-slate-400">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <nav className="flex-1 px-4 py-8 overflow-y-auto space-y-2">
                  <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center px-4 py-4 text-base font-semibold text-slate-700 hover:bg-slate-50 rounded-2xl transition-colors">Overview</Link>

                  <div className="space-y-1">
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="w-full flex items-center justify-between px-4 py-4 text-base font-semibold text-slate-700 hover:bg-slate-50 rounded-2xl transition-colors"
                    >
                      Our Services
                      <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileServicesOpen && (
                      <div className="mx-2 space-y-1 bg-slate-50/50 rounded-2xl p-2 mt-1">
                        {services.map((g) => (
                          <div key={g.category} className="py-2 first:pt-1 last:pb-1">
                            <p className="text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2 text-gold-500" style={{ color: 'var(--gold-500)' }}>{g.category}</p>
                            {g.items.map((item) => (
                              <Link 
                                key={item} 
                                href="/services" 
                                onClick={() => setMobileOpen(false)} 
                                className="block px-4 py-2 text-[14px] font-medium text-slate-600 hover:text-green-800 active:bg-white rounded-xl transition-all"
                              >
                                {item}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <Link href="/team" onClick={() => setMobileOpen(false)} className="flex items-center px-4 py-4 text-base font-semibold text-slate-700 hover:bg-slate-50 rounded-2xl transition-colors">Team</Link>
                  <Link href="/companies" onClick={() => setMobileOpen(false)} className="flex items-center px-4 py-4 text-base font-semibold text-slate-700 hover:bg-slate-50 rounded-2xl transition-colors">Group Companies</Link>
                </nav>

                <div className="p-8 border-t border-slate-100">
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center w-full text-base font-bold px-6 py-4 rounded-2xl text-white shadow-xl shadow-green-900/20 active:scale-[0.98] transition-all"
                    style={{ background: 'var(--green-800)' }}
                  >
                    Contact Us
                  </Link>
                  <p className="text-center text-xs text-slate-400 mt-6 font-medium">Empowering Educational Excellence</p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
