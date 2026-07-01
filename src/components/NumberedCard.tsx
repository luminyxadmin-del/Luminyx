"use client";

import { motion } from "framer-motion";

interface Props {
  number: string;
  title: string;
  description: string;
  delay?: number;
}

export function NumberedCard({ number, title, description, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className="relative rounded-2xl p-7 bg-white border border-light-gray shadow-card-soft overflow-hidden"
    >
      <div className="absolute top-3 right-4 font-display text-7xl font-bold text-primary-light select-none leading-none">
        {number}
      </div>
      <div className="relative">
        <div className="text-xs font-mono text-primary-brand font-bold tracking-widest mb-3">
          {number}
        </div>
        <h3 className="font-display text-base font-semibold text-navy mb-2">{title}</h3>
        <p className="text-sm text-slate leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
