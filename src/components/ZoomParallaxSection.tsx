'use client';

import { ZoomParallax } from '@/components/ui/zoom-parallax';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
    alt: 'University campus aerial view',
  },
  {
    src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
    alt: 'Students in a modern classroom',
  },
  {
    src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
    alt: 'Academic library interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
    alt: 'Graduation ceremony',
  },
  {
    src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
    alt: 'Students collaborating on a project',
  },
  {
    src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
    alt: 'Stack of books on a desk',
  },
  {
    src: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
    alt: 'Teacher presenting to students',
  },
];

export default function ZoomParallaxSection() {
  return (
    <section className="relative bg-white">
      {/* Section header */}
      <div className="container-edify py-20 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12 bg-slate-200" />
          <span className="text-sm uppercase tracking-[0.2em] font-bold text-accent">
            Our World
          </span>
          <div className="h-px w-12 bg-slate-200" />
        </div>
        <h2 className="leading-[1.1] max-w-3xl mx-auto">
          Education Transformed{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-black to-slate-400">
            Across Every Campus
          </span>
        </h2>
        <p className="mt-6 text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Scroll to explore the institutions and communities we've helped shape — from classrooms to boardrooms.
        </p>
      </div>

      <ZoomParallax images={images} />

      <div className="h-24" />
    </section>
  );
}
