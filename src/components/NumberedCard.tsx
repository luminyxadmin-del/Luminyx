"use client";

import { motion } from "framer-motion";

interface Props {
  number: string;
  title: string;
  description: string;
  delay?: number;
}

export function NumberedCard({ number, title, description }: Props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      style={{ opacity: 1 }}
      className="relative rounded-2xl p-7 bg-white border border-light-gray shadow-card-soft overflow-hidden"
    >
      <div
        className="absolute top-3 right-4 font-display text-7xl font-bold select-none leading-none"
        style={{ color: "#EDE9FE" }}
      >
        {number}
      </div>
      <div className="relative">
        <div className="text-xs font-mono text-primary-brand font-bold tracking-widest mb-3">
          {number}
        </div>
        <h3 className="font-display text-base font-semibold mb-2" style={{ color: "#111827" }}>{title}</h3>
        <p className="text-sm leading-relaxed" style={{ color: "#4B5563" }}>{description}</p>
      </div>
    </motion.div>
  );
}
