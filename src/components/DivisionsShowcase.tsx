"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  BrainCircuit,
  GraduationCap,
  Users,
  Plane,
  Cpu,
  ArrowUpRight,
  Check,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Division {
  number: string;
  icon: LucideIcon;
  name: string;
  tagline: string;
  description: string;
  capabilities: string[];
  stat: { value: string; label: string };
  href: string;
}

const DIVISIONS: Division[] = [
  {
    number: "01",
    icon: BrainCircuit,
    name: "AI Advisory",
    tagline: "Strategy & institutional intelligence",
    description:
      "We advise governments, development finance institutions, and large enterprises on workforce strategy, policy frameworks, and AI-led transformation across emerging markets.",
    capabilities: [
      "Workforce strategy & policy design",
      "Institutional transformation",
      "Innovation ecosystem design",
    ],
    stat: { value: "18", label: "Government engagements" },
    href: "/ecosystem/advisory",
  },
  {
    number: "02",
    icon: GraduationCap,
    name: "Education Advisory",
    tagline: "Connecting institutions to employment",
    description:
      "Luminyx Education Advisory maps the full journey from institutional programme design to graduate employment — using AI to align curricula with live market requirements across Africa and India.",
    capabilities: [
      "Institutional partnership & audit",
      "AI-powered pathway mapping",
      "Graduate outcome intelligence",
    ],
    stat: { value: "1,000+", label: "Partner institutions" },
    href: "/ecosystem/education",
  },
  {
    number: "03",
    icon: Users,
    name: "Talent",
    tagline: "Precision hiring for growth-market organisations",
    description:
      "Two decades of specialist recruitment expertise, now enhanced by the Luminyx AI Platform — delivering smarter candidate matching, faster hiring cycles, and deeper market intelligence.",
    capabilities: [
      "Leadership & mid-management hiring",
      "Cross-border talent acquisition",
      "AI-enhanced candidate screening",
    ],
    stat: { value: "3M+", label: "Talent profiles indexed" },
    href: "/ecosystem/talent",
  },
  {
    number: "04",
    icon: Plane,
    name: "Travel",
    tagline: "Kenya · Tanzania · Uganda",
    description:
      "Curated East Africa experiences built on real ground knowledge, not assembled from a brochure. Conservancy-led itineraries, private reserve access, and end-to-end trip management across three countries.",
    capabilities: [
      "Conservancy and private reserve access",
      "B2B trade and corporate travel programmes",
      "Multi-country itinerary design",
    ],
    stat: { value: "40+", label: "Destination countries" },
    href: "/ecosystem/travel",
  },
  {
    number: "05",
    icon: Cpu,
    name: "Technology",
    tagline: "AI platform powering all divisions",
    description:
      "A unified AI platform that aggregates data across all divisions — surfacing insights, automating workflows, and ensuring every engagement benefits from the full weight of cross-divisional intelligence.",
    capabilities: [
      "AI-driven matching & routing",
      "Workforce analytics & forecasting",
      "Education-to-employment mapping",
    ],
    stat: { value: "3M+", label: "Profiles indexed" },
    href: "/ecosystem/technology",
  },
];

const CYCLE_SECS = 4;

// ── Detail panel — fills whatever absolute container it is placed inside ──────
// Does NOT set its own padding or height; the parent motion.div owns those.
function DetailPanel({ division }: { division: Division }) {
  const Icon = division.icon;
  return (
    <>
      {/* Faint background number — absolute within the parent motion.div */}
      <div
        className="absolute top-5 right-7 font-display leading-none select-none pointer-events-none text-primary-light"
        style={{ fontSize: "7rem", fontWeight: 700 }}
      >
        {division.number}
      </div>

      {/* Corner glow */}
      <div
        className="absolute bottom-0 right-0 w-72 h-72 rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(109,40,217,0.10),transparent 70%)" }}
      />

      <div className="relative h-full flex flex-col">
        {/* Division chip */}
        <div className="self-start inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] text-primary-brand bg-primary-light border border-primary-brand/10 mb-6">
          Division {division.number}
        </div>

        {/* Icon + title */}
        <div className="flex items-start gap-5 mb-5">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
            style={{
              background: "linear-gradient(135deg,#6D28D9,#A78BFA)",
              boxShadow: "0 8px 24px -4px rgba(109,40,217,0.45)",
            }}
          >
            <Icon className="w-7 h-7 text-white" />
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-navy leading-tight">
              {division.name}
            </h2>
            <p className="text-sm text-ink-muted mt-1">{division.tagline}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate leading-relaxed mb-7 max-w-xl">
          {division.description}
        </p>

        {/* Capabilities — refined check-in-circle treatment */}
        <div className="space-y-3 mb-8">
          {division.capabilities.map((cap) => (
            <div key={cap} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-primary-brand" strokeWidth={3} />
              </div>
              <span className="text-sm text-ink-muted">{cap}</span>
            </div>
          ))}
        </div>

        {/* Stat + CTA button */}
        <div className="mt-auto flex items-center justify-between pt-6 border-t border-light-gray">
          <div>
            <div className="font-display text-3xl font-bold text-primary-brand leading-none">
              {division.stat.value}
            </div>
            <div className="text-[11px] uppercase tracking-widest text-ink-faint font-medium mt-1">
              {division.stat.label}
            </div>
          </div>
          <Link
            href={division.href}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg group"
            style={{
              background: "linear-gradient(135deg,#6D28D9,#8B5CF6)",
              boxShadow: "0 8px 20px -6px rgba(109,40,217,0.5)",
            }}
          >
            Explore Division
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────
export function DivisionsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startCycle = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % DIVISIONS.length);
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

  const handleSelect = useCallback(
    (index: number) => {
      setActiveIndex(index);
      if (!isPaused) startCycle();
    },
    [isPaused, startCycle]
  );

  return (
    <section
      className="py-section-lg relative overflow-hidden"
      style={{ background: "linear-gradient(180deg,#F5F3FF 0%,#FAFAFA 100%)" }}
    >
      {/* Ambient radial glow */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(ellipse,rgba(109,40,217,0.06),transparent 65%)" }}
        />
      </div>

      <div
        className="container-xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Section heading */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="chip mb-5 inline-flex">Our Divisions</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy tracking-tight leading-[1.1] mb-4">
              Five Divisions.{" "}
              <span className="gradient-text">One Infrastructure.</span>
            </h2>
            <p className="text-slate max-w-lg mx-auto">
              Each division is independently powerful. Together, they create
              capabilities no single-service firm can offer.
            </p>
          </motion.div>
        </div>

        {/* Mobile: horizontal scrollable pills */}
        <div className="flex lg:hidden overflow-x-auto gap-2 pb-3 -mx-4 px-4 scrollbar-hide mb-6">
          {DIVISIONS.map((d, i) => {
            const Icon = d.icon;
            const isActive = activeIndex === i;
            return (
              <button
                key={d.number}
                onClick={() => handleSelect(i)}
                className={cn(
                  "flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  isActive
                    ? "text-white shadow-sm"
                    : "bg-white border border-light-gray text-slate hover:border-primary-brand/30"
                )}
                style={isActive ? { background: "linear-gradient(135deg,#6D28D9,#A78BFA)" } : undefined}
              >
                <Icon className="w-3.5 h-3.5" />
                {d.name}
              </button>
            );
          })}
        </div>

        {/* Desktop: two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-6">

          {/* ── Left: vertical tab list — floating segmented card ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex flex-col gap-2 self-start p-2 rounded-3xl bg-white/60 border border-white/80 backdrop-blur-sm"
            style={{ boxShadow: "0 4px 24px -8px rgba(109,40,217,0.08)" }}
          >
            {DIVISIONS.map((d, i) => {
              const Icon = d.icon;
              const isActive = activeIndex === i;
              return (
                <button
                  key={d.number}
                  onClick={() => handleSelect(i)}
                  className={cn(
                    "relative flex items-center gap-4 px-5 py-4 rounded-2xl text-left transition-all duration-300 group w-full overflow-hidden",
                    isActive ? "bg-white" : "hover:bg-white/70"
                  )}
                  style={isActive ? { boxShadow: "0 8px 24px -8px rgba(109,40,217,0.25)" } : undefined}
                >
                  {/* Auto-rotate progress underline — only on the active row */}
                  {isActive && (
                    <div
                      className="absolute bottom-0 left-0 h-[2px] bg-primary-brand rounded-full"
                      style={{
                        animation: `divisionProgress ${CYCLE_SECS}s linear`,
                        animationPlayState: isPaused ? "paused" : "running",
                        animationFillMode: "forwards",
                      }}
                    />
                  )}

                  {/* Step number */}
                  <span
                    className={cn(
                      "text-sm font-bold w-5 shrink-0 transition-colors duration-300",
                      isActive ? "text-primary-brand" : "text-ink-faint"
                    )}
                  >
                    {d.number}
                  </span>

                  {/* Icon circle */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                    style={
                      isActive
                        ? {
                            background: "linear-gradient(135deg,#6D28D9,#A78BFA)",
                            boxShadow: "0 4px 14px rgba(109,40,217,0.4)",
                          }
                        : { background: "#EDE9FE", border: "1px solid rgba(109,40,217,0.12)" }
                    }
                  >
                    <Icon
                      className={cn(
                        "w-4 h-4 transition-colors duration-300",
                        isActive ? "text-white" : "text-primary-brand"
                      )}
                    />
                  </div>

                  {/* Name + tagline */}
                  <div className="flex-1 min-w-0">
                    <div
                      className={cn(
                        "font-display text-base font-bold leading-tight transition-colors duration-300",
                        isActive ? "text-primary-brand" : "text-ink"
                      )}
                    >
                      {d.name}
                    </div>
                    <div className="text-sm text-ink-muted font-medium mt-0.5 truncate leading-snug">
                      {d.tagline}
                    </div>
                  </div>

                  {/* Arrow */}
                  <ArrowUpRight
                    className={cn(
                      "w-4 h-4 shrink-0 transition-all duration-300",
                      isActive
                        ? "text-primary-brand opacity-100"
                        : "text-ink-faint opacity-0 group-hover:opacity-40"
                    )}
                  />
                </button>
              );
            })}
          </motion.div>

          {/* ── Right: fixed-height panel — no layout shift on content change ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/*
              minHeight is fixed so the panel never resizes when content changes.
              AnimatePresence children use absolute inset-0 to fill this container,
              meaning enter/exit animations are pure opacity+translate with zero
              layout impact.
            */}
            <div
              className="relative rounded-3xl overflow-hidden lg:min-h-[420px]"
              style={{
                background: "#FFFFFF",
                boxShadow: "0 20px 60px -12px rgba(109,40,217,0.18)",
                border: "1px solid rgba(109,40,217,0.10)",
              }}
            >
              {/* Top gradient accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1 pointer-events-none"
                style={{ background: "linear-gradient(90deg,#6D28D9,#A78BFA,#6D28D9)" }}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="relative lg:absolute lg:inset-0 p-8 md:p-10"
                >
                  <DetailPanel division={DIVISIONS[activeIndex]} />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
