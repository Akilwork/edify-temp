'use client';

import Link from 'next/link';
import TextAnimation from '@/components/ui/scroll-text';
import { FadeIn } from '@/components/ui/animations';

// ─── Main Hero ─────────────────────────────────────────────────────────────────
export default function HeroSection() {
  return (
    <>
      <section className="relative min-h-screen flex flex-col overflow-hidden bg-black">
        {/* ── Video Background ── */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/assets/hero/Untitled design.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* ── Dark Gradient Overlay for text readability ── */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20 pointer-events-none" />

        {/* ── Spacing for Global Header ── */}
        <div className="h-20 sm:h-24 md:h-32" />

        {/* ── Hero Content ── */}
        <div className="relative z-10 flex-1 flex flex-col justify-end px-4 sm:px-6 md:px-12 lg:px-16 pb-8 sm:pb-12 lg:pb-16">
          <div className="flex flex-col lg:grid lg:grid-cols-12 lg:items-end gap-6 lg:gap-12">

            {/* Left Column */}
            <div className="lg:col-span-8 xl:col-span-9">
              <FadeIn delay={400}>
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 sm:mb-8">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-white/90">Est. 2018 | MHUDA Trust</span>
                </div>
              </FadeIn>

              <TextAnimation
                text={"Powering Institutions.\nEnabling Growth. Scaling Impact."}
                lineAnime={true}
                classname="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] sm:leading-[1.1] md:leading-[1.1] lg:leading-[1.1] xl:leading-[1.1] font-bold text-white mb-4 sm:mb-6 drop-shadow-lg"
                delay={0.2}
              />

              <TextAnimation
                as="p"
                text="Edify Management Consultancy LLC is a multi-disciplinary ecosystem enabling educational institutions and businesses across the UAE through integrated services, operational excellence, and forward-thinking innovation."
                classname="text-sm sm:text-base md:text-lg text-white/80 mb-6 sm:mb-8 max-w-2xl leading-relaxed drop-shadow"
                delay={0.8}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { ease: 'linear', duration: 0.5 },
                  },
                }}
              />

              <FadeIn delay={1200} duration={1000}>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto text-center bg-white text-black px-6 sm:px-8 py-3 rounded-lg font-semibold cursor-pointer hover:bg-gray-100 transition-colors duration-200 shadow-lg"
                  >
                    Start a Chat
                  </Link>
                  <Link
                    href="#"
                    className="w-full sm:w-auto text-center liquid-glass border border-white/30 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold cursor-pointer hover:bg-white hover:text-black transition-all duration-200"
                  >
                    Explore Now
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Right Column — Tag */}
            <FadeIn delay={1400} duration={1000} className="lg:col-span-4 xl:col-span-3 flex items-end justify-start lg:justify-end mt-4 sm:mt-8 lg:mt-0">
              <div className="liquid-glass border border-white/20 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl">
                <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-light text-white whitespace-nowrap">
                  Investing. Building. Advisory.
                </p>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>
    </>
  );
}
