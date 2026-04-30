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
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* ── Spacing for Global Header ── */}
        <div className="h-24 md:h-32" />

        {/* ── Hero Content ── */}
        <div className="relative z-10 flex-1 flex flex-col justify-end px-6 md:px-12 lg:px-16 pb-12 lg:pb-16">
          <div className="lg:grid lg:grid-cols-2 lg:items-end">

            {/* Left Column */}
            <div>
              <FadeIn delay={400}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-sm font-bold tracking-[0.2em] uppercase text-white/80">Est. 2018 | MHUDA Trust</span>
                </div>
              </FadeIn>

              <TextAnimation
                text="Shaping tomorrow\nwith vision and action."
                lineAnime={true}
                classname="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white mb-4"
                delay={0.2}
              />

              <TextAnimation
                as="p"
                text="We back visionaries and craft ventures that define what comes next."
                classname="text-base md:text-lg text-gray-300 mb-5"
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
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-black px-8 py-3 rounded-lg font-medium cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                  >
                    Start a Chat
                  </Link>
                  <Link
                    href="#"
                    className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium cursor-pointer hover:bg-white hover:text-black transition-all duration-200"
                  >
                    Explore Now
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Right Column — Tag */}
            <FadeIn delay={1400} duration={1000} className="flex items-end justify-start lg:justify-end mt-8 lg:mt-0">
              <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl">
                <p className="text-lg md:text-xl lg:text-2xl font-light text-white">
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
