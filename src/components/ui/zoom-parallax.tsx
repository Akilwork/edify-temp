'use client';

import { useScroll, useTransform, motion, useMotionValue, useMotionValueEvent } from 'motion/react';
import { useRef } from 'react';

interface ZoomImage {
  src: string;
  alt?: string;
}

interface ZoomParallaxProps {
  images: ZoomImage[];
}

// Each tile's position and size within the sticky viewport.
// All tiles are absolutely positioned inside the 100vw × 100vh sticky container.
// top/left are offsets from the container's top-left corner.
const TILES: React.CSSProperties[] = [
  // index 0 — center
  { top: 'calc(50% - 12.5vh)', left: 'calc(50% - 12.5vw)', height: '25vh', width: '25vw' },
  // index 1 — top right
  { top: 'calc(50% - 30vh)', left: 'calc(50% + 5vw)',       height: '30vh', width: '35vw' },
  // index 2 — left
  { top: 'calc(50% - 22.5vh)', left: 'calc(50% - 45vw)',    height: '45vh', width: '20vw' },
  // index 3 — right mid
  { top: 'calc(50% - 12.5vh)', left: 'calc(50% + 27.5vw)',  height: '25vh', width: '25vw' },
  // index 4 — bottom right
  { top: 'calc(50% + 2.5vh)',  left: 'calc(50% + 5vw)',     height: '25vh', width: '20vw' },
  // index 5 — bottom left
  { top: 'calc(50% + 2.5vh)',  left: 'calc(50% - 52.5vw)',  height: '25vh', width: '30vw' },
  // index 6 — far right bottom
  { top: 'calc(50% + 7.5vh)',  left: 'calc(50% + 25vw)',    height: '15vh', width: '15vw' },
];

const END_SCALES = [4, 5, 6, 5, 6, 8, 9];

export function ZoomParallax({ images }: ZoomParallaxProps) {
  const container = useRef<HTMLDivElement>(null);

  // A single MotionValue for raw progress [0..1] — no setState, no re-renders
  const progressMV = useMotionValue(0);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const el = container.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const offsetTop = latest + rect.top;          // container top in document coords
    const scrollable = rect.height - window.innerHeight; // how many px we can scroll through
    if (scrollable <= 0) return;
    const scrolled = latest - offsetTop;
    progressMV.set(Math.min(1, Math.max(0, scrolled / scrollable)));
  });

  return (
    <div ref={container} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {images.slice(0, 7).map(({ src, alt }, index) => {
          const endScale = END_SCALES[index] ?? 4;
          // useTransform on the shared MotionValue — zero re-renders
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const scale = useTransform(progressMV, [0, 1], [1, endScale]);
          const tilePos = TILES[index] ?? TILES[0];

          return (
            <motion.div
              key={index}
              style={{
                scale,
                position: 'absolute',
                transformOrigin: 'center center',
                ...tilePos,
              }}
            >
              <img
                src={src}
                alt={alt || `Parallax image ${index + 1}`}
                className="h-full w-full object-cover"
                draggable={false}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
