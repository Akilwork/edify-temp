'use client';

import React from 'react';
import TextAnimation from './ui/scroll-text';

export default function ScrollTextAnimation() {
  return (
    <section className="bg-slate-50">
      <div className="h-[40vh] flex items-center justify-center">
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-slate-300 to-transparent" />
      </div>

      <div className="h-[60vh] flex flex-col justify-center items-center text-center px-6">
        <TextAnimation
          text="Creative ideas start here."
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { ease: 'linear', duration: 0.8 },
            },
          }}
          classname="text-5xl md:text-7xl lg:text-8xl max-w-4xl mx-auto font-bold capitalize text-brand-black"
        />
      </div>

      <div className="h-[60vh] flex items-center text-left px-6 md:px-24">
        <TextAnimation
          as="p"
          letterAnime={true}
          text="Let's team up and turn ideas into reality ✨"
          classname="text-4xl md:text-6xl lg:text-7xl max-w-3xl lowercase font-medium text-slate-700"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.4,
              },
            },
          }}
        />
      </div>

      <div className="h-[60vh] flex justify-center items-center text-right px-6 md:px-24">
        <TextAnimation
          text="Turning concepts into reality"
          direction="right"
          classname="text-4xl md:text-6xl lg:text-7xl max-w-3xl ml-auto capitalize font-bold text-brand-black"
        />
      </div>

      <div className="h-[60vh] flex justify-center items-center text-center px-6">
        <TextAnimation
          text="Dream big, work hard & achieve greatness"
          direction="down"
          lineAnime={true}
          classname="text-4xl md:text-6xl lg:text-7xl max-w-4xl mx-auto capitalize font-black text-accent"
        />
      </div>

      <div className="h-[40vh] flex items-center justify-center">
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-slate-300 to-transparent" />
      </div>
    </section>
  );
}
