"use client";

import { motion } from "framer-motion";
import { X, Check, ChevronRight } from "lucide-react";

const comparisons = [
  {
    problem: "Siloed vendors with no cross-division visibility",
    solution: "Unified intelligence across all five capability layers",
  },
  {
    problem: "Ad-hoc talent placements without market intelligence",
    solution: "Precision-matched talent informed by real-time data",
  },
  {
    problem: "Manual compliance processes across multiple jurisdictions",
    solution: "Automated regulatory coverage across 14 countries",
  },
  {
    problem: "Slow cycle times and missed execution windows",
    solution: "48-hour SLA on standard requests, 2-week sprint launch",
  },
  {
    problem: "Fragmented education-to-employment pathways",
    solution: "End-to-end institutional mapping with live outcome tracking",
  },
];

const REPEAT_DELAY = comparisons.length * 0.1 + 0.5; // 1.0 s — full cascade + buffer

const arrowColors = [
  "text-primary-brand/50",
  "text-primary-brand/70",
  "text-primary-brand/90",
  "text-primary-brand",
] as const;

function CascadingArrows({ rowIndex }: { rowIndex: number }) {
  const arrowVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: rowIndex * 0.1 + i * 0.08,
        duration: 0.3,
        ease: "easeOut" as const,
        repeat: Infinity,
        repeatType: "loop" as const,
        repeatDelay: REPEAT_DELAY,
      },
    }),
  };

  return (
    <div className="flex items-center gap-0.5 px-2 md:px-3 justify-center">
      {([0, 1, 2, 3] as const).map((arrowIndex) => (
        <motion.div
          key={arrowIndex}
          custom={arrowIndex}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={arrowVariants}
        >
          <ChevronRight
            className={`w-6 h-6 ${arrowColors[arrowIndex]}`}
            strokeWidth={3}
          />
        </motion.div>
      ))}
    </div>
  );
}

function ProblemCard({
  item,
  index,
}: {
  item: (typeof comparisons)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white shadow-sm"
      style={{ border: '2px solid #f87171' }}
    >
      <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: '#fef2f2', border: '1px solid #fca5a5' }}>
        <X className="w-3 h-3 text-red-500" strokeWidth={2.5} />
      </div>
      <span className="text-sm text-ink-muted">{item.problem}</span>
    </motion.div>
  );
}

function SolutionCard({
  item,
  index,
}: {
  item: (typeof comparisons)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.1 + 0.3,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white shadow-sm"
      style={{ border: '2px solid #34d399' }}
    >
      <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: '#ecfdf5', border: '1px solid #6ee7b7' }}>
        <Check className="w-3 h-3 text-emerald-600" strokeWidth={2.5} />
      </div>
      <span className="text-sm font-medium text-ink">{item.solution}</span>
    </motion.div>
  );
}

export function ComparisonSection() {
  return (
    <section className="py-section-lg relative overflow-hidden">
      {/* Ambient tints: rose-left (problem side), purple-right (solution side) */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-red-50/40" />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-primary-light/25" />
      </div>

      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left: heading + body + pull quote */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="chip mb-5 inline-flex">The Challenge</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy tracking-tight leading-[1.1] mb-6">
              Fragmented Capabilities Create{" "}
              <span className="gradient-text">Execution Gaps</span>
            </h2>
            <p className="text-slate text-lg leading-relaxed mb-8">
              Organisations expanding across borders often rely on a patchwork
              of disconnected vendors — each covering one piece of a complex
              puzzle. The result is coordination overhead, inconsistent quality,
              and missed windows of opportunity.
            </p>
            <blockquote className="border-l-2 border-primary-brand/30 pl-6 italic text-ink-faint text-base leading-relaxed">
              &ldquo;The biggest risk in cross-border expansion isn&apos;t
              compliance — it&apos;s the gap between strategy and operational
              reality.&rdquo;
            </blockquote>
          </motion.div>

          {/* Right: comparison grid */}
          <div className="lg:col-span-7">
            {/* Column headers — hidden on mobile since grid collapses */}
            <div className="hidden md:grid grid-cols-[1fr_auto_1fr] mb-5 px-1">
              <span className="text-xs font-bold uppercase tracking-widest text-red-500">
                Without Luminyx
              </span>
              <span className="w-20" />
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                With Luminyx
              </span>
            </div>

            {/* Comparison rows */}
            <div className="space-y-3">
              {comparisons.map((item, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-2"
                >
                  <ProblemCard item={item} index={i} />
                  <CascadingArrows rowIndex={i} />
                  <SolutionCard item={item} index={i} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
