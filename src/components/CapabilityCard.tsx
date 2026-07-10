"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function CapabilityCard({ icon: Icon, title, description }: Props) {
  return (
    <motion.div
      whileHover={{ y: -6, borderColor: "rgba(167,139,250,0.4)" }}
      style={{ opacity: 1 }}
      className="group relative rounded-2xl p-7 overflow-hidden bg-white border border-light-gray shadow-card-soft hover:shadow-card-hover transition-all duration-300"
    >
      <div className="absolute -top-16 -left-16 w-40 h-40 rounded-full bg-primary-light/0 group-hover:bg-primary-light/60 blur-3xl transition-all duration-500 pointer-events-none" />
      <div className="relative w-11 h-11 rounded-xl bg-primary-light border border-primary-brand/10 flex items-center justify-center mb-5 group-hover:bg-gradient-primary-brand group-hover:border-transparent transition-all duration-300">
        <Icon className="w-5 h-5 text-primary-brand group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="font-display text-base font-semibold mb-2 relative" style={{ color: "#111827" }}>{title}</h3>
      <p className="text-sm leading-relaxed relative" style={{ color: "#4B5563" }}>{description}</p>
      <div className="absolute bottom-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-accent-purple/0 to-transparent group-hover:via-accent-purple/40 transition-all duration-500" />
    </motion.div>
  );
}
