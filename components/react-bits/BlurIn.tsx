'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

interface BlurInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export default function BlurIn({
  children,
  className = '',
  delay = 0,
  duration = 0.7,
}: BlurInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: 'blur(12px)', y: 10 }}
      animate={isInView ? { opacity: 1, filter: 'blur(0px)', y: 0 } : {}}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
