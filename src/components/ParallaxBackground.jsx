'use client';

import { motion } from 'framer-motion';

export default function ParallaxBackground() {
  return (
    <>
      <div className="bg-grid" />
      <div className="parallax-bg">
        <motion.div
          className="bg-orb"
          style={{
            width: 500,
            height: 500,
            background: 'var(--accent-primary)',
            top: '10%',
            right: '-10%',
          }}
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="bg-orb"
          style={{
            width: 400,
            height: 400,
            background: 'var(--accent-secondary)',
            bottom: '10%',
            left: '-5%',
          }}
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="bg-orb"
          style={{
            width: 300,
            height: 300,
            background: 'var(--accent-primary)',
            top: '50%',
            left: '40%',
          }}
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </>
  );
}
