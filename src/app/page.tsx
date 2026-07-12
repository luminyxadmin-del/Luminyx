"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Globe,
  BrainCircuit,
  Users,
  Shield,
  Database,
  BarChart3,
  Plug,
  GraduationCap,
  Plane,
  Cpu,
  X,
  Check,
  ChevronRight,
} from "lucide-react";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { EngagementTimeline } from "@/components/EngagementTimeline";
import { DivisionsShowcase } from "@/components/DivisionsShowcase";

const STATS = [
  { value: "18", label: "Govt engagements" },
  { value: "$2B+", label: "Workforce investment" },
  { value: "1,000+", label: "Partner institutions" },
  { value: "35+", label: "Enterprise clients" },
];

const MARQUEE_ITEMS = [
  { dot: "#A78BFA", label: "AI Advisory", meta: "Strategy & institutional intelligence" },
  { dot: "#60A5FA", label: "Education Advisory", meta: "Connecting institutions to outcomes" },
  { dot: "#34D399", label: "Talent", meta: "3M+ profiles · 28 countries" },
  { dot: "#F59E0B", label: "Travel", meta: "UAE · GCC · Africa corridors" },
  { dot: "#F472B6", label: "Technology", meta: "AI platform powering all divisions" },
];

const PARTNERS: { name: string; logo: string; bg: string; imgClass?: string; zoom?: number; url?: string }[] = [
  {
    name: "Tech Byte Bridges",
    logo: "https://res.cloudinary.com/dtg3lepr4/image/upload/v1783487223/PHOTO-2026-07-06-12-05-23_rqfmcz.jpg",
    bg: "#ffffff",
    zoom: 1.6,
    url: "https://www.techbytebridges.com/",
  },
  {
    name: "Emilestones",
    logo: "https://res.cloudinary.com/dtg3lepr4/image/upload/v1783361344/emilestones_logo_p29vbm.png",
    bg: "#ffffff",
    url: "https://emilestones.net/",
  },
  {
    name: "Regenesys SAI",
    logo: "https://res.cloudinary.com/dtg3lepr4/image/upload/v1783362138/regenesys-sai_logo_fifyk7.png",
    bg: "#15131f",
    url: "https://www.regenesys.net/school-of-ai",
  },
  {
    name: "Aurix Works",
    logo: "https://res.cloudinary.com/dtg3lepr4/image/upload/v1783362009/aurix_works_logo_hires_msmdvy.png",
    bg: "#ffffff",
    url: "https://www.aurix.works/",
  },
  {
    name: "Success Tours",
    logo: "https://res.cloudinary.com/dtg3lepr4/image/upload/v1783362106/success-tours_logo_orjpob.png",
    bg: "#ffffff",
    url: "https://www.success-tours.com/",
  },
];





export default function HomePage() {
  return (
    <div className="bg-white">
      {/* ─── HERO ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-20">
        <video
          autoPlay
          loop
          playsInline
          preload="auto"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(10,5,30,0.55) 0%, rgba(10,5,30,0.35) 50%, rgba(10,5,30,0.2) 100%)',
          zIndex: 1,
        }} />

        <div className="relative container-xl" style={{ zIndex: 2 }}>
          <div className="max-w-2xl">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="chip mb-6 inline-flex">
                Intelligence Infrastructure · Dubai HQ
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Operating System for{" "}
                <span className="text-accent-purple">Cross-Border</span>{" "}
                Enterprise
              </h1>

              <p className="mt-5 text-white/75 text-lg leading-relaxed max-w-lg mb-10">
                Luminyx Group unifies advisory, education, talent, travel, and
                technology into a single intelligence infrastructure —
                purpose-built for Africa, India, and the GCC corridor.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-14">
                <Link href="/ecosystem" className="btn-primary group">
                  Explore the Ecosystem
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {STATS.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center sm:text-left"
                  >
                    <div className="font-display text-3xl font-bold text-white">{s.value}</div>
                    <div className="text-xs uppercase tracking-wider text-white/55 mt-1">{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FIVE VERTICALS MARQUEE ──────────────────────────────────────────── */}
      <section className="py-4 border-y border-light-gray bg-bg-subtle overflow-hidden">
        <div className="flex w-max" style={{ animation: "marqueeScroll 32s linear infinite" }}>
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <div key={i} className="flex items-center gap-2.5 px-8 shrink-0">
              <div className="w-2 h-2 rounded-full shrink-0" style={{ background: item.dot }} />
              <span className="text-sm font-semibold text-navy whitespace-nowrap">{item.label}</span>
              <span className="text-xs text-ink-faint whitespace-nowrap">{item.meta}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TRUSTED PARTNERS & ECOSYSTEM ───────────────────────────────────── */}
      <section
        className="py-14"
        style={{ background: "linear-gradient(180deg, #0B0A18, #120E24)" }}
      >
        <div className="container-xl">
          <p className="text-center text-xs font-bold uppercase tracking-widest mb-8" style={{ color: "#A5B4FC" }}>
            Trusted Partners &amp; Ecosystem
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {PARTNERS.map((p, i) => {
              const cardStyle: React.CSSProperties = {
                background: p.bg,
                border: p.bg === "#ffffff" ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(255,255,255,0.1)",
                minWidth: "160px",
                height: "80px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px 24px",
                borderRadius: "16px",
                boxShadow: p.bg === "#ffffff" ? "0 8px 24px -8px rgba(0,0,0,0.35)" : "none",
                overflow: "hidden",
              };
              const logoImg = (
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={140}
                  height={56}
                  className={`h-12 w-auto object-contain ${p.imgClass ?? ""}`}
                  style={{ maxWidth: "130px", display: "block", transform: p.zoom ? `scale(${p.zoom})` : undefined }}
                />
              );
              return p.url ? (
                <a
                  key={`${p.name}-${i}`}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={p.name}
                  style={{ ...cardStyle, transition: "transform 0.3s ease, opacity 0.3s ease" }}
                  className="hover:opacity-90 hover:scale-105"
                >
                  {logoImg}
                </a>
              ) : (
                <div key={`${p.name}-${i}`} style={cardStyle}>
                  {logoImg}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── THE PROBLEM ─────────────────────────────────────────────────────── */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-light/20 to-white pointer-events-none" style={{ zIndex: 0 }} />
        <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* LEFT SIDE */}
            <div className="lg:col-span-4">
              <div className="chip mb-4">The Challenge</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight" style={{ color: "#111827" }}>
                Fragmented Platforms <br />Create{" "}
                <span style={{ color: "#6D28D9" }}>Execution Gaps</span>
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: "#4B5563" }}>
                Across Advisory, Education, Talent, Travel, and Technology, organizations face fragmented
                systems and disconnected partners. This leads to inefficiencies,
                inconsistent experiences, and missed opportunities across borders.
              </p>
              <blockquote className="mt-6 pl-4 border-l-2 border-primary-brand/30">
                <p className="text-sm italic" style={{ color: "#6B7280" }}>
                  "The biggest risk in transformation isn't strategy — it's fragmented
                  execution across platforms."
                </p>
              </blockquote>
            </div>

            {/* RIGHT SIDE — grouped comparison */}
            <div className="lg:col-span-8">

              {/* Column headers */}
              <div className="grid grid-cols-[1fr_auto_1fr] mb-4 ml-28">
                <span className="text-xs font-bold uppercase tracking-widest text-red-500">WITHOUT LUMINYX</span>
                <span className="w-24" />
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">WITH LUMINYX</span>
              </div>

              {/* Division groups */}
              {[
                {
                  icon: Users,
                  label: "Talent",
                  rows: [
                    { problem: "Siloed vendors with no cross-division visibility", solution: "Unified intelligence across all talent management layers" },
                  ],
                },
                {
                  icon: GraduationCap,
                  label: "Education",
                  rows: [
                    { problem: "Fragmented education-to-employment pathways", solution: "End-to-end institutional mapping with live outcome tracking" },
                  ],
                },
                {
                  icon: Plane,
                  label: "Travel",
                  rows: [
                    { problem: "Disconnected mobility providers and service layers", solution: "Unified mobility ecosystem across regions" },
                  ],
                },
                {
                  icon: BrainCircuit,
                  label: "AI Advisory",
                  rows: [
                    { problem: "Fragmented policy advice with no data backing", solution: "Evidence-based strategy informed by real-time intelligence" },
                  ],
                },
                {
                  icon: Cpu,
                  label: "Technology",
                  rows: [
                    { problem: "Disconnected data systems with no cross-division visibility", solution: "Unified AI platform aggregating intelligence across all five divisions" },
                  ],
                },
              ].map((group, gi) => (
                <div key={group.label} className={`flex gap-3 items-start ${gi > 0 ? 'mt-6' : ''}`}>

                  {/* Division icon + label — left column */}
                  <div className="flex flex-col items-center gap-2 w-24 shrink-0 pt-2">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ background: "#F5F3FF", border: "1px solid #DDD6FE" }}
                    >
                      <group.icon className="w-5 h-5" style={{ color: "#6D28D9" }} />
                    </div>
                    <span className="text-center whitespace-nowrap" style={{ color: "#6D28D9", fontWeight: 600, fontSize: "12px" }}>{group.label}</span>
                  </div>

                  {/* Comparison rows */}
                  <div className="flex-1">
                    {group.rows.map((row, ri) => (
                      <div
                        key={ri}
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr auto 1fr",
                          alignItems: "center",
                          gap: "8px",
                          marginBottom: "8px",
                        }}
                      >
                        {/* Problem card */}
                        <div style={{
                          border: "2px solid #f87171",
                          borderRadius: "14px",
                          background: "#ffffff",
                          padding: "12px 16px",
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          opacity: 1,
                          visibility: "visible",
                        }}>
                          <div style={{
                            width: "20px", height: "20px", borderRadius: "50%",
                            background: "#fff1f2", border: "1px solid #fca5a5",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            flexShrink: 0,
                          }}>
                            <X style={{ width: "12px", height: "12px", color: "#ef4444" }} strokeWidth={2.5} />
                          </div>
                          <span style={{ fontSize: "13px", color: "#374151", lineHeight: "1.4" }}>
                            {row.problem}
                          </span>
                        </div>

                        {/* Animated cascading arrows */}
                        <div style={{ display: "flex", alignItems: "center", gap: "3px", padding: "0 8px" }}>
                          {[
                            { opacity: 0.15, anim: "arrowPulse1" },
                            { opacity: 0.35, anim: "arrowPulse2" },
                            { opacity: 0.60, anim: "arrowPulse3" },
                            { opacity: 0.85, anim: "arrowPulse4" },
                          ].map((arrow, i) => (
                            <ChevronRight
                              key={i}
                              style={{
                                width: "18px",
                                height: "18px",
                                color: "#6D28D9",
                                opacity: arrow.opacity,
                                animation: `${arrow.anim} 1.5s ease-in-out ${i * 0.15}s infinite`,
                                flexShrink: 0,
                              }}
                              strokeWidth={2.5}
                            />
                          ))}
                        </div>

                        {/* Solution card */}
                        <div style={{
                          border: "2px solid #34d399",
                          borderRadius: "14px",
                          background: "#ffffff",
                          padding: "12px 16px",
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          opacity: 1,
                          visibility: "visible",
                        }}>
                          <div style={{
                            width: "20px", height: "20px", borderRadius: "50%",
                            background: "#ecfdf5", border: "1px solid #6ee7b7",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            flexShrink: 0,
                          }}>
                            <Check style={{ width: "12px", height: "12px", color: "#10b981" }} strokeWidth={2.5} />
                          </div>
                          <span style={{ fontSize: "13px", color: "#111827", fontWeight: 500, lineHeight: "1.4" }}>
                            {row.solution}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* ─── THE SOLUTION ─────────────────────────────────────────────────────── */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light/50 via-white to-white pointer-events-none" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary-brand/5 blur-[80px] rounded-full pointer-events-none" />
        <div className="container-xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — dark platform card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-3xl overflow-hidden p-8"
              style={{ background: "linear-gradient(135deg, #1E1B4B, #3B0764, #6D28D9)" }}
            >
              {/* Animated background orbs */}
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-accent-purple/20 blur-3xl animate-pulse pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-primary-brand/30 blur-3xl pointer-events-none" />

              <div className="text-xs font-mono text-white/40 uppercase tracking-widest mb-4">
                THE LUMINYX PLATFORM
              </div>

              <h3 className="font-display text-2xl font-bold text-white mb-8">
                Five divisions.<br />
                <span className="text-accent-purple">One operating intelligence.</span>
              </h3>

              <div className="relative grid grid-cols-2 gap-3">
                {[
                  { icon: BrainCircuit, label: "Ecosystem AI" },
                  { icon: Users, label: "Talent Orchestrator" },
                  { icon: Shield, label: "Compliance Navigator" },
                  { icon: Database, label: "Data Mesh Engine" },
                  { icon: BarChart3, label: "Impact Analytics" },
                  { icon: Plug, label: "Integration Gateway" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white/[0.08] border border-white/10 hover:bg-white/[0.15] hover:border-white/20 transition-all cursor-default"
                  >
                    <item.icon className="w-4 h-4 text-accent-purple shrink-0" />
                    <span className="text-sm text-white/80 font-medium">{item.label}</span>
                  </motion.div>
                ))}
              </div>

              <div className="relative mt-8 pt-5 border-t border-white/10 flex items-center gap-6">
                {[
                  { value: "99.97%", label: "uptime" },
                  { value: "47", label: "integrations" },
                  { value: "14", label: "compliance layers" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-sm font-bold text-white">{s.value}</div>
                    <div className="text-xs text-white/40">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Live indicator */}
              <div className="absolute top-6 right-6 flex items-center gap-1.5">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </div>
                <span className="text-xs text-white/50">Live</span>
              </div>
            </motion.div>

            {/* Right — typography + feature tags */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-center"
            >
              <div className="chip mb-5 inline-flex">The Luminyx Platform</div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-ink leading-tight">
                One Platform.{" "}
                <span className="text-primary-brand">Five Divisions.</span>{" "}
                Zero Gaps.
              </h2>

              <p className="mt-6 text-ink-muted leading-relaxed text-lg">
                The Luminyx Platform is the connective tissue between our five divisions.
                It aggregates data, surfaces insights, automates workflows, and ensures
                every engagement benefits from the full weight of our cross-divisional intelligence.
              </p>

              <p className="mt-4 text-ink-muted leading-relaxed">
                Unlike point solutions, the platform grows more powerful with each engagement.
                Advisory intelligence shapes education design. Talent data informs travel
                logistics. Technology keeps every engagement grounded in real market movement.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "AI-native from day one",
                  "Cross-division data sharing",
                  "Real-time intelligence",
                ].map((tag) => (
                  <div key={tag} className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light border border-primary-brand/15">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-brand" />
                    <span className="text-sm text-primary-brand font-medium">{tag}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link href="/ecosystem" className="btn-primary inline-flex group">
                  Explore the Platform
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── HOW ENGAGEMENTS UNFOLD ────────────────────────────────────────── */}
      <EngagementTimeline />

      {/* ─── FIVE DIVISIONS ─────────────────────────────────────────────────── */}
      <DivisionsShowcase />

      {/* ─── AFRICA FOCUS ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-3xl mx-4 md:mx-8 my-8">
        {/* Full background image */}
        <Image
          src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&auto=format&fit=crop&q=80"
          alt="Africa — Masai Mara"
          fill
          className="object-cover"
        />
        {/* Dark gradient overlay — left darker for text, right lighter to show image */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/75 to-primary-dark/30" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-dark/60 to-transparent" />

        {/* Content */}
        <div className="relative container-xl py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left: text content */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-white/80 font-medium uppercase tracking-wider">Africa Focus</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Africa Is Not<br />a Market.
                <br />
                <span className="text-accent-purple">It&apos;s a Mandate.</span>
              </h2>

              <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-lg">
                Africa is not a strategic afterthought for Luminyx — it is the
                foundational context around which our entire firm was built. We
                are not a global firm with an Africa practice; we are an
                African-native intelligence infrastructure with global reach.
              </p>

              <p className="mt-4 text-white/60 leading-relaxed max-w-lg">
                With active operations across 12 countries and partnerships with
                leading government ministries, development institutions, and
                private sector anchors, we offer a depth of market intelligence
                that no external firm can replicate.
              </p>

              <div className="mt-10">
                <Link
                  href="/africa"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-primary-dark font-semibold hover:scale-105 transition-transform shadow-elevated"
                >
                  Explore Our Africa Strategy
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Right: floating stat cards */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "12", label: "Active Countries" },
                  { value: "$4.2T", label: "Projected GDP by 2030" },
                  { value: "62M", label: "Formal Sector Jobs by 2035" },
                  { value: "240+", label: "Government Engagements" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="rounded-2xl p-6 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-colors"
                  >
                    <div className="font-display text-3xl md:text-4xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs uppercase tracking-wider text-white/60">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom wide stat */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-4 rounded-2xl p-6 bg-primary-brand/40 backdrop-blur-md border border-primary-brand/50 flex items-center justify-between"
              >
                <div>
                  <div className="font-display text-4xl font-bold text-white">1.4B+</div>
                  <div className="text-xs uppercase tracking-wider text-white/60 mt-1">People. One Opportunity.</div>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── WHY US ──────────────────────────────────────────────────────── */}
      <WhyChooseSection />

      {/* ─── FINAL CTA ───────────────────────────────────────────────────── */}
      <section className="py-section-lg">
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center"
          >
            {/* Background image */}
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&auto=format&fit=crop&q=80"
              alt="Enterprise infrastructure"
              fill
              sizes="100vw"
              className="object-cover"
            />
            {/* Purple gradient overlay — keeps text readable */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary-brand/80 to-accent-purple/70" />

            <div className="relative">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-5">
                Ready to Build Your{" "}
                <span className="text-accent-purple">Cross-Border Infrastructure?</span>
              </h2>
              <p className="text-white/70 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Start with a complimentary 90-minute diagnostic call. No
                commitment required. We will map your current state and identify
                the highest-leverage opportunities across all five divisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary-dark font-semibold hover:scale-105 transition-transform shadow-elevated">
                  Schedule a Discovery Call
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
                >
                  Download Partnership Deck
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
