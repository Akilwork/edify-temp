'use client';

import React, { useRef } from 'react';
import { motion, useInView, Variants, Transition } from 'motion/react';
import { cn } from '@/lib/utils';

interface TextAnimationProps {
  text: string;
  variants?: {
    hidden: any;
    visible: any;
  };
  classname?: string;
  as?: React.ElementType;
  letterAnime?: boolean;
  lineAnime?: boolean;
  direction?: 'up' | 'down' | 'left' | 'right';
  once?: boolean;
  delay?: number;
}

const defaultVariants: Variants = {
  hidden: (direction: string) => ({
    opacity: 0,
    y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
    x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0,
  }),
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function TextAnimation({
  text,
  variants,
  classname,
  as,
  letterAnime = false,
  lineAnime = false,
  direction = 'up',
  once = true,
  delay = 0,
}: TextAnimationProps) {
  const Component = (as || 'h1') as any;
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-20%' });

  const finalVariants = variants || defaultVariants;

  if (letterAnime) {
    const letters = text.split('');
    return (
      <Component ref={ref} className={cn('flex flex-wrap', classname)}>
        {letters.map((char, i) => (
          <motion.span
            key={i}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={finalVariants}
            custom={direction}
            transition={{
              delay: delay + i * 0.02,
            }}
            className={cn('inline-block', char === ' ' ? 'mr-[0.25em]' : '')}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </Component>
    );
  }

  if (lineAnime) {
    const lines = text.split('\n');
    return (
      <Component ref={ref} className={classname}>
        {lines.map((line, i) => (
          <div key={i} className="overflow-hidden">
            <motion.span
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={finalVariants}
              custom={direction}
              transition={{
                delay: delay + i * 0.1,
              }}
              className="inline-block"
            >
              {line}
            </motion.span>
          </div>
        ))}
      </Component>
    );
  }

  return (
    <Component ref={ref} className={classname}>
      <motion.span
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={finalVariants}
        custom={direction}
        transition={{ delay }}
        className="inline-block"
      >
        {text}
      </motion.span>
    </Component>
  );
}
