"use client";

import { motion } from "framer-motion";
import { Layers, Users, Shield, Zap, Globe, Handshake } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface CardData {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const CARDS: CardData[] = [
  {
    number: "01",
    icon: Layers,
    title: "Cross-Division Leverage",
    description:
      "Our five capability layers are designed to compound. Each division feeds intelligence to the others, generating insights no single-service firm can replicate.",
  },
  {
    number: "02",
    icon: Users,
    title: "Embedded Execution",
    description:
      "We operate inside your teams, not beside them. Luminyx advisors are embedded in leadership workflows throughout every engagement.",
  },
  {
    number: "03",
    icon: Shield,
    title: "Regulatory Depth",
    description:
      "14-country compliance coverage, continuously updated. We flag regulatory changes across your active markets before they become operational risks.",
  },
  {
    number: "04",
    icon: Zap,
    title: "Speed to Impact",
    description:
      "48-hour SLA on standard requests. New engagements move from intake call to active deployment in under two weeks.",
  },
  {
    number: "05",
    icon: Globe,
    title: "African-Native Intelligence",
    description:
      "Ground-level networks built over 18 years across East, North, and West Africa that no externally positioned firm can replicate quickly.",
  },
  {
    number: "06",
    icon: Handshake,
    title: "Long-Range Partnership",
    description:
      "We are structured for 3-year-plus engagements, not one-off contracts. Our business model rewards compounding client success.",
  },
];

function LightCard({ data, index }: { data: CardData; index: number }) {
  const Icon = data.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group relative rounded-3xl p-8 bg-white border border-primary-brand/[0.08] overflow-hidden cursor-default"
      style={{ boxShadow: "0 2px 20px -4px rgba(109,40,217,0.06)" }}
    >
      {/* Hover glow */}
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-transparent group-hover:bg-primary-brand/[0.06] blur-3xl transition-all duration-500 pointer-events-none" />

      {/* Large faint background number */}
      <div className="absolute bottom-4 right-6 font-display text-8xl font-bold text-primary-light leading-none select-none pointer-events-none">
        {data.number}
      </div>

      {/* Small number top */}
      <div className="text-xs font-mono text-primary-brand/60 mb-4">{data.number}</div>

      {/* Icon */}
      <div className="w-12 h-12 rounded-2xl bg-primary-light flex items-center justify-center mb-5 group-hover:bg-primary-brand group-hover:shadow-[0_8px_20px_-4px_rgba(109,40,217,0.4)] transition-all duration-300">
        <Icon className="w-5 h-5 text-primary-brand group-hover:text-white transition-colors duration-300" />
      </div>

      <h3 className="font-display text-lg font-bold text-ink mb-3 relative">{data.title}</h3>
      <p className="text-sm text-ink-muted leading-relaxed relative">{data.description}</p>
    </motion.div>
  );
}

function DarkCard({ data, index }: { data: CardData; index: number }) {
  const Icon = data.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group relative rounded-3xl p-8 overflow-hidden cursor-default"
      style={{ background: "linear-gradient(135deg, #3B0764, #6D28D9, #7C3AED)" }}
    >
      {/* Background blobs */}
      <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-accent-purple/20 blur-2xl pointer-events-none" />

      {/* Large faint background number */}
      <div className="absolute bottom-4 right-6 font-display text-8xl font-bold text-white/10 leading-none select-none pointer-events-none">
        {data.number}
      </div>

      <div className="text-xs font-mono text-white/50 mb-4">{data.number}</div>

      <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-5">
        <Icon className="w-5 h-5 text-white" />
      </div>

      <h3 className="font-display text-lg font-bold text-white mb-3 relative">{data.title}</h3>
      <p className="text-sm text-white/70 leading-relaxed relative">{data.description}</p>

      {/* Bottom tag */}
      <div className="mt-6 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20">
        <div className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
        <span className="text-xs text-white/70">Core advantage</span>
      </div>
    </motion.div>
  );
}

export function WhyChooseSection() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Soft ambient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-light/20 to-white pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: "rgba(109,40,217,0.04)" }}
      />

      <div className="container-xl relative">
        {/* Section heading */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="chip mb-5 inline-flex">Why Luminyx</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy tracking-tight leading-[1.1] mb-4">
              Why Institutions{" "}
              <span className="gradient-text">Choose Luminyx</span>
            </h2>

            {/* Live stat dots */}
            <div className="flex items-center justify-center gap-8 mt-6 flex-wrap">
              <div className="flex items-center gap-2 text-sm text-ink-muted">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                18+ Government partnerships active
              </div>
              <div className="flex items-center gap-2 text-sm text-ink-muted">
                <div className="w-2 h-2 rounded-full bg-primary-brand animate-pulse shrink-0" />
                Operating across 14 countries
              </div>
              <div className="flex items-center gap-2 text-sm text-ink-muted">
                <div className="w-2 h-2 rounded-full bg-accent-purple animate-pulse shrink-0" />
                $4.2T addressable market
              </div>
            </div>
          </motion.div>
        </div>

        {/* Card grid — diagonal featured pattern */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Row 1: dark, light, light */}
          <DarkCard data={CARDS[0]} index={0} />
          <LightCard data={CARDS[1]} index={1} />
          <LightCard data={CARDS[2]} index={2} />
          {/* Row 2: light, light, dark */}
          <LightCard data={CARDS[3]} index={3} />
          <LightCard data={CARDS[4]} index={4} />
          <DarkCard data={CARDS[5]} index={5} />
        </div>
      </div>
    </section>
  );
}
