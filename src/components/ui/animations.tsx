'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export function FadeIn({ 
  children, 
  delay = 0, 
  y = 40, 
  duration = 0.8, 
  className = "",
  triggerOffset = "85%"
}: { 
  children: React.ReactNode; 
  delay?: number; 
  y?: number; 
  duration?: number; 
  className?: string;
  triggerOffset?: string;
}) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      container.current,
      { opacity: 0, y: y },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: `top ${triggerOffset}`,
        }
      }
    );
  }, { scope: container });

  return <div ref={container} className={className}>{children}</div>;
}

export function StaggerChildren({ 
  children, 
  stagger = 0.15, 
  y = 40, 
  duration = 0.8, 
  className = "",
  triggerOffset = "85%"
}: { 
  children: React.ReactNode; 
  stagger?: number; 
  y?: number; 
  duration?: number; 
  className?: string;
  triggerOffset?: string;
}) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!container.current) return;
    const childrenNodes = gsap.utils.toArray(container.current.children);
    
    gsap.fromTo(
      childrenNodes,
      { opacity: 0, y: y },
      {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: `top ${triggerOffset}`,
        }
      }
    );
  }, { scope: container });

  return <div ref={container} className={className}>{children}</div>;
}

export function ScaleIn({ 
  children, 
  delay = 0, 
  duration = 0.8, 
  className = "",
  triggerOffset = "85%"
}: { 
  children: React.ReactNode; 
  delay?: number; 
  duration?: number; 
  className?: string;
  triggerOffset?: string;
}) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      container.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: `top ${triggerOffset}`,
        }
      }
    );
  }, { scope: container });

  return <div ref={container} className={className}>{children}</div>;
}
