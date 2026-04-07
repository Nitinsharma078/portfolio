'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SectionHeading({ title, highlight, subtitle }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div className="section-heading" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        style={{
          display: 'inline-block',
          background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.08), rgba(124, 58, 237, 0.08))',
          padding: '6px 20px',
          borderRadius: '20px',
          border: '1px solid rgba(0, 212, 255, 0.12)',
          marginBottom: '20px',
          fontSize: '0.82rem',
          fontWeight: 600,
          color: 'var(--accent-primary)',
          letterSpacing: '2px',
          textTransform: 'uppercase',
        }}
      >
        {title} {highlight}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {title} <span className="gradient-text">{highlight}</span>
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        className="section-divider"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.3 }}
      />
    </div>
  );
}
