"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { Search, PenTool, Rocket, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Stage {
  icon: LucideIcon;
  stage: string;
  number: string;
  title: string;
  description: string;
  metric: string;
}

const STAGES: Stage[] = [
  {
    icon: Search,
    stage: "STAGE 01",
    number: "01",
    title: "Discover",
    description:
      "We audit your operating context, talent landscape, and technology stack across all relevant markets.",
    metric: "~2 week audit",
  },
  {
    icon: PenTool,
    stage: "STAGE 02",
    number: "02",
    title: "Design",
    description:
      "A tailored intelligence blueprint is co-created with your leadership team, covering all five capability layers.",
    metric: "5 capability layers mapped",
  },
  {
    icon: Rocket,
    stage: "STAGE 03",
    number: "03",
    title: "Deploy",
    description:
      "Phased rollout across divisions with embedded Luminyx leads ensuring continuity and momentum.",
    metric: "14 country coverage",
  },
  {
    icon: TrendingUp,
    stage: "STAGE 04",
    number: "04",
    title: "Compound",
    description:
      "Quarterly reviews unlock cross-division leverage — each capability amplifies the others over time.",
    metric: "3× avg. engagement ROI",
  },
];

const CYCLE_SECS = 3;

// ── Progress bar ──────────────────────────────────────────────────────────────
// Mounts fresh each time a card becomes active. Pausing resets to 0 and holds.
function ProgressBar({ isPaused }: { isPaused: boolean }) {
  const controls = useAnimationControls();

  useEffect(() => {
    if (isPaused) {
      void controls.start({ width: "0%" }, { duration: 0.15, ease: "easeOut" });
    } else {
      void controls.start(
        { width: "100%" },
        { duration: CYCLE_SECS, ease: "linear" }
      );
    }
  }, [isPaused, controls]);

  return (
    <div className="absolute bottom-0 left-0 right-0 h-[3px] overflow-hidden rounded-b-2xl bg-primary-brand/10">
      <motion.div
        animate={controls}
        style={{ width: "0%" }}
        className="h-full bg-gradient-to-r from-primary-brand to-accent-purple"
      />
    </div>
  );
}

// ── Connector line between cards ──────────────────────────────────────────────
function ConnectorLine() {
  return (
    <div className="hidden lg:block flex-shrink-0 self-start mt-[72px] w-8">
      <div className="relative flex items-center h-3">
        <div
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-0"
          style={{ borderTop: "2px dashed rgba(109,40,217,0.3)" }}
        />
        <motion.div
          className="absolute w-2.5 h-2.5 rounded-full bg-primary-brand"
          style={{ left: -5, boxShadow: "0 0 8px rgba(109,40,217,0.55)" }}
          animate={{ x: [0, 42] }}
          transition={{
            duration: 0.75,
            repeat: Infinity,
            repeatDelay: 1.4,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}

// ── Individual stage card ─────────────────────────────────────────────────────
function StageCard({
  stage,
  index,
  isActive,
  isPaused,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: {
  stage: Stage;
  index: number;
  isActive: boolean;
  isPaused: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const Icon = stage.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="flex-1 min-w-0"
    >
      <div
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={cn(
          "relative rounded-2xl p-7 cursor-pointer overflow-hidden h-full",
          isActive
            ? "border border-primary-brand/40 shadow-[0_8px_36px_-4px_rgba(109,40,217,0.18)]"
            : "border border-gray-100 shadow-sm hover:border-primary-brand/20 hover:shadow-md"
        )}
        style={{
          background: isActive
            ? "linear-gradient(145deg,#EDE9FE 0%,#F5F3FF 45%,#FFFFFF 100%)"
            : "#FFFFFF",
          transform: isActive ? "scale(1.02)" : "scale(1)",
          transition: "all 0.45s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {/* Faint background step number */}
        <div className="absolute top-4 right-5 font-display text-7xl font-bold leading-none select-none pointer-events-none text-primary-light">
          {stage.number}
        </div>

        <div className="relative">
          {/* Stage label */}
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-brand mb-4">
            {stage.stage}
          </div>

          {/* Icon — pulses on activation */}
          <motion.div
            animate={isActive ? { scale: [1, 1.18, 1] } : { scale: 1 }}
            transition={
              isActive
                ? { duration: 0.45, ease: "easeInOut" }
                : { duration: 0.3 }
            }
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
            style={
              isActive
                ? {
                    background: "linear-gradient(135deg,#6D28D9,#A78BFA)",
                    boxShadow: "0 4px 18px rgba(109,40,217,0.38)",
                  }
                : {
                    background: "#EDE9FE",
                    border: "1px solid rgba(109,40,217,0.12)",
                  }
            }
          >
            <Icon
              className={cn(
                "w-5 h-5 transition-colors duration-300",
                isActive ? "text-white" : "text-primary-brand"
              )}
            />
          </motion.div>

          {/* Title */}
          <h3
            className={cn(
              "font-display text-xl font-bold mb-3 transition-colors duration-300",
              isActive ? "text-primary-brand" : "text-ink"
            )}
          >
            {stage.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-slate leading-relaxed mb-6">
            {stage.description}
          </p>

          {/* Metric pill */}
          <span
            className={cn(
              "inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300",
              isActive
                ? "bg-primary-brand text-white shadow-sm"
                : "bg-primary-light text-primary-brand"
            )}
          >
            {stage.metric}
          </span>
        </div>

        {/* Progress bar — only mounted when this card is active */}
        {isActive && <ProgressBar isPaused={isPaused} />}
      </div>
    </motion.div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────
export function EngagementTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startCycle = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % STAGES.length);
    }, CYCLE_SECS * 1000);
  }, []);

  const stopCycle = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!isPaused) {
      startCycle();
    } else {
      stopCycle();
    }
    return stopCycle;
  }, [isPaused, startCycle, stopCycle]);

  const handleCardClick = useCallback(
    (index: number) => {
      setActiveIndex(index);
      if (!isPaused) startCycle();
    },
    [isPaused, startCycle]
  );

  const handleMouseEnter = useCallback((index: number) => {
    setActiveIndex(index);
    setIsPaused(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsPaused(false);
  }, []);

  return (
    <section className="py-section-lg relative overflow-hidden">
      {/* Soft ambient purple glow behind cards */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(ellipse,rgba(109,40,217,0.06),transparent 70%)" }}
        />
      </div>

      <div className="container-xl">
        {/* Section heading */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="chip mb-5 inline-flex">How It Works</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy tracking-tight leading-[1.1] mb-5">
              How Engagements Typically Unfold
            </h2>
            <p className="text-slate max-w-xl mx-auto text-lg leading-relaxed">
              From initial conversation to compounding impact — a typical
              partnership moves through four stages.
            </p>
          </motion.div>
        </div>

        {/* Cards + connectors */}
        <div className="flex flex-col lg:flex-row items-stretch gap-4 lg:gap-0">
          {STAGES.flatMap((stage, i) => {
            const els: React.ReactNode[] = [
              <StageCard
                key={`card-${i}`}
                stage={stage}
                index={i}
                isActive={activeIndex === i}
                isPaused={isPaused}
                onClick={() => handleCardClick(i)}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
              />,
            ];
            if (i < STAGES.length - 1) {
              els.push(<ConnectorLine key={`conn-${i}`} />);
            }
            return els;
          })}
        </div>
      </div>
    </section>
  );
}
