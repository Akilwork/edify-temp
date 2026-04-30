'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, GraduationCap, ArrowRight, BookOpen, Users2, Building, Cpu, Heart, Briefcase } from 'lucide-react';
import { services } from '@/constants';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import ButtonWithIcon from '@/components/ui/button-with-icon';

// Map each service category to a Lucide icon
const categoryIcons: Record<string, React.ReactNode> = {
  'Academic & Education':   <BookOpen  className="w-4 h-4" />,
  'HR & Recruitment':       <Users2    className="w-4 h-4" />,
  'Operations & Facilities':<Building  className="w-4 h-4" />,
  'Technology & Innovation':<Cpu       className="w-4 h-4" />,
  'Specialized Services':   <Heart     className="w-4 h-4" />,
  'Business Support':       <Briefcase className="w-4 h-4" />,
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(services[0].category);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  const isHomePage = pathname === '/';
  const shouldBeTransparent = isHomePage && !scrolled;
  const textColorClass = shouldBeTransparent ? 'text-white' : 'text-brand-black';
  const navTextColorClass = shouldBeTransparent ? 'text-white/80 hover:text-white' : 'text-slate-600 hover:text-brand-black';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Debounced open/close to prevent flicker when moving between trigger and panel
  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  const activeGroup = services.find((s) => s.category === activeCategory) ?? services[0];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 transition-all duration-300 mx-auto px-4">
      <div
        className={`container-edify transition-all duration-300 border border-white/20 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] !px-6 md:!px-8 ${
          shouldBeTransparent
            ? 'bg-black/20 backdrop-blur-md border-white/10'
            : 'bg-white/80 backdrop-blur-xl'
        }`}
      >
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
              style={{ background: 'linear-gradient(135deg, var(--accent-orange), #fb923c)' }}
            >
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div className={`font-bold text-xl tracking-tight transition-colors ${textColorClass}`}>
              EDIFY
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className={`text-sm font-medium transition-colors ${navTextColorClass}`}>
              Overview
            </Link>

            {/* ── Services Mega Menu ── */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                className={`flex items-center gap-1 text-sm font-medium transition-colors cursor-pointer ${
                  servicesOpen
                    ? shouldBeTransparent ? 'text-white' : 'text-brand-black'
                    : navTextColorClass
                }`}
              >
                Our Services
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Panel */}
              <div
                className={`absolute top-full mt-4 z-50 transition-all duration-200 origin-top ${
                  servicesOpen
                    ? 'opacity-100 scale-y-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none'
                }`}
                style={{ left: '50%', transform: servicesOpen ? 'translateX(-50%) scaleY(1)' : 'translateX(-50%) scaleY(0.95)' }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* Arrow pointer */}
                <div className="flex justify-center mb-0">
                  <div className="w-3 h-3 bg-white border-l border-t border-slate-100 rotate-45 -mb-1.5 shadow-[-2px_-2px_4px_rgba(0,0,0,0.03)]" />
                </div>

                <div className="w-[820px] bg-white rounded-[1.75rem] shadow-[0_24px_60px_rgba(0,0,0,0.10)] border border-slate-100 overflow-hidden flex">

                  {/* Left: category tabs */}
                  <div className="w-[240px] bg-slate-50/70 border-r border-slate-100 p-4 flex flex-col gap-1 shrink-0">
                    <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-slate-400 px-3 mb-2">
                      Service Areas
                    </p>
                    {services.map((group) => (
                      <button
                        key={group.category}
                        onMouseEnter={() => setActiveCategory(group.category)}
                        onClick={() => setActiveCategory(group.category)}
                        className={`flex items-center gap-2.5 w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 cursor-pointer group/tab ${
                          activeCategory === group.category
                            ? 'bg-white text-brand-black shadow-sm border border-slate-100'
                            : 'text-slate-500 hover:text-slate-800 hover:bg-white/60'
                        }`}
                      >
                        <span
                          className={`flex-shrink-0 transition-colors ${
                            activeCategory === group.category ? 'text-accent' : 'text-slate-400 group-hover/tab:text-slate-600'
                          }`}
                        >
                          {categoryIcons[group.category]}
                        </span>
                        {group.category}
                        {activeCategory === group.category && (
                          <ArrowRight className="w-3.5 h-3.5 ml-auto text-accent" />
                        )}
                      </button>
                    ))}

                    {/* Explore all CTA */}
                    <div className="mt-auto pt-4 border-t border-slate-200">
                      <Link
                        href="/services"
                        onClick={() => setServicesOpen(false)}
                        className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold text-accent hover:bg-orange-50 transition-colors group/cta"
                      >
                        <span>View All Services</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/cta:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Right: active category items */}
                  <div className="flex-1 p-7">
                    <div className="flex items-center gap-2.5 mb-5">
                      <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm" style={{ background: 'var(--accent-orange)' }}>
                        {categoryIcons[activeGroup.category]}
                      </span>
                      <div>
                        <p className="text-xs font-bold tracking-widest uppercase text-accent leading-none mb-0.5">
                          {activeGroup.category}
                        </p>
                        <p className="text-[11px] text-slate-400">
                          {activeGroup.items.length} services available
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {activeGroup.items.map((item) => (
                        <Link
                          key={item}
                          href="/services"
                          onClick={() => setServicesOpen(false)}
                          className="group/item flex items-center gap-3 px-4 py-3 rounded-xl border border-transparent hover:border-slate-100 hover:bg-slate-50 transition-all duration-150 cursor-pointer"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/item:bg-accent transition-colors flex-shrink-0" />
                          <span className="text-sm text-slate-600 group-hover/item:text-brand-black font-medium transition-colors">
                            {item}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 ml-auto text-slate-300 opacity-0 group-hover/item:opacity-100 group-hover/item:text-accent transition-all" />
                        </Link>
                      ))}
                    </div>

                    {/* Bottom promo strip */}
                    <div className="mt-6 rounded-xl p-4 flex items-center justify-between" style={{ background: 'linear-gradient(135deg, #FFF5F1, #FFF)' }}>
                      <div>
                        <p className="text-sm font-semibold text-brand-black">Explore our full offering</p>
                        <p className="text-xs text-slate-500 mt-0.5">Tailored solutions for educational institutions</p>
                      </div>
                      <Link
                        href="/services"
                        onClick={() => setServicesOpen(false)}
                        className="flex items-center gap-1.5 text-xs font-semibold text-white px-4 py-2 rounded-full transition-opacity hover:opacity-90 cursor-pointer"
                        style={{ background: 'var(--accent-orange)' }}
                      >
                        See Services
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/team" className={`text-sm font-medium transition-colors ${navTextColorClass}`}>
              Team
            </Link>

            <Link href="/companies" className={`text-sm font-medium transition-colors ${navTextColorClass}`}>
              Group Companies
            </Link>

            <Link href="/contact">
              <ButtonWithIcon
                label="Contact Us"
                variant={shouldBeTransparent ? 'light' : 'dark'}
              />
            </Link>
          </nav>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              className={`lg:hidden p-2 rounded-xl transition-all active:scale-95 ${textColorClass}`}
              aria-label="Open navigation menu"
            >
              <Menu className="w-7 h-7" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-[400px] p-0 bg-white border-l-0">
              <div className="flex flex-col h-full bg-white text-slate-900">
                <div className="p-8 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/10"
                      style={{ background: 'var(--accent-orange)' }}
                    >
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-brand-black">EDIFY</span>
                  </div>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2 rounded-lg bg-slate-50 text-slate-400 cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex-1 px-4 py-8 overflow-y-auto space-y-2">
                  <Link
                    href="/"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center px-4 py-4 text-base font-semibold text-slate-700 hover:bg-slate-50 rounded-2xl transition-colors"
                  >
                    Overview
                  </Link>

                  {/* Mobile Services accordion */}
                  <div className="space-y-1">
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="w-full flex items-center justify-between px-4 py-4 text-base font-semibold text-slate-700 hover:bg-slate-50 rounded-2xl transition-colors cursor-pointer"
                    >
                      Our Services
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {mobileServicesOpen && (
                      <div className="mx-2 mt-1 rounded-2xl border border-slate-100 overflow-hidden">
                        {services.map((g, idx) => (
                          <div
                            key={g.category}
                            className={`${idx !== 0 ? 'border-t border-slate-100' : ''}`}
                          >
                            <button
                              onClick={() =>
                                setActiveCategory(activeCategory === g.category ? '' : g.category)
                              }
                              className="w-full flex items-center gap-3 px-4 py-3 bg-slate-50/60 hover:bg-slate-100/60 transition-colors cursor-pointer"
                            >
                              <span className="text-accent">{categoryIcons[g.category]}</span>
                              <span className="text-[13px] font-bold tracking-wide uppercase text-slate-600 flex-1 text-left">
                                {g.category}
                              </span>
                              <ChevronDown
                                className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                                  activeCategory === g.category ? 'rotate-180' : ''
                                }`}
                              />
                            </button>
                            {activeCategory === g.category && (
                              <div className="bg-white px-4 py-2 space-y-0.5">
                                {g.items.map((item) => (
                                  <Link
                                    key={item}
                                    href="/services"
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center gap-2 px-2 py-2.5 text-[14px] font-medium text-slate-600 hover:text-brand-black hover:bg-slate-50 rounded-lg transition-all"
                                  >
                                    <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                                    {item}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}

                        <div className="border-t border-slate-100 p-3">
                          <Link
                            href="/services"
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-accent hover:bg-orange-50 rounded-xl transition-colors"
                          >
                            View All Services
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>

                  <Link
                    href="/team"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center px-4 py-4 text-base font-semibold text-slate-700 hover:bg-slate-50 rounded-2xl transition-colors"
                  >
                    Team
                  </Link>
                  <Link
                    href="/companies"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center px-4 py-4 text-base font-semibold text-slate-700 hover:bg-slate-50 rounded-2xl transition-colors"
                  >
                    Group Companies
                  </Link>
                </nav>

                <div className="p-8 border-t border-slate-100">
                  <Link href="/contact" onClick={() => setMobileOpen(false)} className="flex justify-center w-full">
                    <ButtonWithIcon label="Contact Us" className="w-full justify-center active:scale-[0.98]" />
                  </Link>
                  <p className="text-center text-xs text-slate-400 mt-6 font-medium">
                    Empowering Educational Excellence
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
