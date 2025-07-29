'use client';

import { motion } from 'framer-motion';

export default function AnimatedGradient() {
  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-indigo-900 via-black to-zinc-800 opacity-50 -z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
}
