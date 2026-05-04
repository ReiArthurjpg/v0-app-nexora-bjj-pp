'use client';

import { useMemo, useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SplitTextProps {
  text?: string;
  className?: string;
  delay?: number;
  animationFrom?: { opacity: number; transform: string };
  animationTo?: { opacity: number; transform: string };
  easing?: string;
  threshold?: number;
  rootMargin?: string;
  textAlign?: 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit';
  onLetterAnimationComplete?: () => void;
}

export default function SplitText({
  text = '',
  className = '',
  delay = 0,
  animationFrom = { opacity: 0, transform: 'translate3d(0,40px,0)' },
  animationTo = { opacity: 1, transform: 'translate3d(0,0,0)' },
  easing = 'easeOut',
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  onLetterAnimationComplete,
}: SplitTextProps) {
  const words = useMemo(() => text.split(' '), [text]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold, margin: rootMargin });
  const [animatedCount, setAnimatedCount] = useState(0);

  const handleAnimationComplete = () => {
    setAnimatedCount((prev) => prev + 1);
  };

  useEffect(() => {
    if (animatedCount === text.replace(/\s/g, '').length && onLetterAnimationComplete) {
      onLetterAnimationComplete();
    }
  }, [animatedCount, text, onLetterAnimationComplete]);

  return (
    <span
      ref={ref}
      className={`split-parent ${className}`}
      style={{ textAlign, display: 'inline', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
    >
      {words.map((word, wordIndex) => {
        const letters = word.split('');
        return (
          <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            {letters.map((letter, letterIndex) => {
              const index = words.slice(0, wordIndex).join('').length + letterIndex;
              return (
                <motion.span
                  key={index}
                  initial={animationFrom}
                  animate={isInView ? animationTo : animationFrom}
                  transition={{
                    duration: 0.6,
                    delay: delay + index * 0.03,
                    ease: easing,
                  }}
                  onAnimationComplete={handleAnimationComplete}
                  style={{ display: 'inline-block', willChange: 'transform, opacity' }}
                >
                  {letter}
                </motion.span>
              );
            })}
            <span style={{ display: 'inline-block' }}>&nbsp;</span>
          </span>
        );
      })}
    </span>
  );
}
