"use client";

import { motion } from "framer-motion";

interface Props {
  value: string;
  label: string;
  delay?: number;
  trend?: string;
  trendUp?: boolean;
}

export function StatCard({ value, label, delay = 0, trend, trendUp }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl p-6 bg-white border border-light-gray shadow-card-soft"
    >
      <div className="font-display text-3xl md:text-4xl font-bold text-primary-brand mb-1">
        {value}
      </div>
      <div className="text-xs uppercase tracking-widest text-ink-faint font-medium">{label}</div>
      {trend && (
        <div className={`text-xs mt-2 font-medium ${trendUp ? "text-success" : "text-amber"}`}>
          {trendUp ? "↑" : "↓"} {trend}
        </div>
      )}
    </motion.div>
  );
}
