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
    tagline: "Strategic intelligence for institutions and enterprises",
    description:
      "We advise governments, development finance institutions, and large enterprises on workforce strategy, policy frameworks, and AI-led transformation across emerging markets.",
    capabilities: [
      "Government & institutional strategy",
      "Workforce policy frameworks",
      "Leadership & organisational development",
    ],
    stat: { value: "18+", label: "Government engagements" },
    href: "/ecosystem/advisory",
  },
  {
    number: "02",
    icon: GraduationCap,
    name: "Education",
    tagline: "Connecting academic supply to real employer demand",
    description:
      "Luminyx Education maps the full journey from institutional programme design to graduate employment — using AI to align curricula with live market requirements across Africa and India.",
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
    name: "Mobility",
    tagline: "End-to-end infrastructure for cross-border talent movement",
    description:
      "From visa processing and credential verification to relocation support and employer facilitation — Luminyx Mobility makes international talent movement predictable, compliant, and fast.",
    capabilities: [
      "Visa & compliance management",
      "Credential verification",
      "Relocation & integration support",
    ],
    stat: { value: "40+", label: "Destination countries" },
    href: "/ecosystem/mobility",
  },
  {
    number: "05",
    icon: Cpu,
    name: "Technology",
    tagline: "The intelligence layer powering every Luminyx decision",
    description:
      "A unified AI platform that aggregates data across all five divisions — surfacing insights, automating workflows, and ensuring every engagement benefits from the full weight of cross-divisional intelligence.",
    capabilities: [
      "AI-driven matching & routing",
      "Workforce analytics & forecasting",
      "Education-to-employment mapping",
    ],
    stat: { value: "54", label: "African markets covered" },
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
        style={{ background: "radial-gradient(circle,rgba(109,40,217,0.08),transparent 70%)" }}
      />

      <div className="relative">
        {/* Division chip */}
        <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] text-primary-brand bg-primary-light border border-primary-brand/10 mb-6">
          Division {division.number}
        </div>

        {/* Icon + title */}
        <div className="flex items-start gap-5 mb-5">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
            style={{
              background: "linear-gradient(135deg,#6D28D9,#A78BFA)",
              boxShadow: "0 4px 20px rgba(109,40,217,0.35)",
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

        {/* Capabilities */}
        <div className="space-y-2.5 mb-8">
          {division.capabilities.map((cap) => (
            <div key={cap} className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-brand shrink-0" />
              <span className="text-sm text-ink-muted">{cap}</span>
            </div>
          ))}
        </div>

        {/* Stat + link */}
        <div className="flex items-center justify-between pt-6 border-t border-light-gray">
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
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-brand hover:text-primary-dark transition-colors group"
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
            return (
              <button
                key={d.number}
                onClick={() => handleSelect(i)}
                className={cn(
                  "flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeIndex === i
                    ? "bg-primary-brand text-white shadow-sm"
                    : "bg-white border border-light-gray text-slate hover:border-primary-brand/30"
                )}
              >
                <Icon className="w-3.5 h-3.5" />
                {d.name}
              </button>
            );
          })}
        </div>

        {/* Desktop: two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-5">

          {/* ── Left: vertical tab list ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex flex-col gap-1 self-start"
          >
            {DIVISIONS.map((d, i) => {
              const Icon = d.icon;
              const isActive = activeIndex === i;
              return (
                <button
                  key={d.number}
                  onClick={() => handleSelect(i)}
                  className={cn(
                    "relative flex items-center gap-4 px-5 py-4 rounded-xl text-left transition-all duration-300 group w-full",
                    isActive ? "bg-primary-light/70" : "hover:bg-primary-light/25"
                  )}
                >
                  {/* Active border — absolute so it never shifts the row's height */}
                  {isActive && (
                    <motion.div
                      layoutId="division-tab-border"
                      className="absolute left-0 inset-y-2 w-[3px] bg-primary-brand rounded-full"
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}

                  {/* Step number — bolder */}
                  <span className="text-sm font-semibold text-ink-faint w-5 shrink-0">
                    {d.number}
                  </span>

                  {/* Icon circle */}
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300"
                    style={
                      isActive
                        ? {
                            background: "linear-gradient(135deg,#6D28D9,#A78BFA)",
                            boxShadow: "0 2px 12px rgba(109,40,217,0.32)",
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

                  {/* Name + tagline — bolder and more visible */}
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
              className="relative rounded-2xl overflow-hidden border border-primary-brand/10"
              style={{
                minHeight: "480px",
                background: "#FFFFFF",
                boxShadow: "0 8px 40px -8px rgba(109,40,217,0.12)",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 p-8 md:p-10"
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
