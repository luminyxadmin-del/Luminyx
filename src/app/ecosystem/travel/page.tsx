"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Shield,
  Briefcase,
  Users,
  Plane,
  Calendar,
  Globe,
  Building,
  HeartPulse,
} from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";

const STATS = [
  { value: "14", label: "Active Corridors" },
  { value: "2,400+", label: "Relocations Managed" },
  { value: "98.2%", label: "Visa Success Rate" },
  { value: "24 hr", label: "Documentation SLA" },
];

const INFRASTRUCTURE = [
  {
    icon: Calendar,
    title: "Itinerary Design",
    description:
      "Every itinerary is built from the ground up by people who know the terrain, the camps, and the seasons. Thirty templates and twelve Signature Collection experiences across Kenya, Tanzania, and Uganda.",
  },
  {
    icon: Shield,
    title: "Conservancy Access",
    description:
      "We work directly with conservancies, not through third-party aggregators. That means access to private land, lower tourist density, and experiences that generic DMCs simply cannot offer.",
  },
  {
    icon: Briefcase,
    title: "Ground Operations",
    description:
      "Our Kenya-based team manages logistics end to end. Transfers, accommodation coordination, park fees, permits, and on-ground support throughout the trip.",
  },
  {
    icon: Building,
    title: "B2B Trade Partnerships",
    description:
      "We work with travel agents, tour operators, and trade buyers who need a reliable East Africa DMC behind them. White-label ready, with pricing structured for trade margins.",
  },
  {
    icon: Globe,
    title: "Multi-Country Programming",
    description:
      "Kenya, Tanzania, and Uganda under one operator. Cross-border itineraries that move between countries without switching DMCs or losing continuity on the ground.",
  },
  {
    icon: Users,
    title: "Group & Corporate Travel",
    description:
      "Tailored programmes for corporate retreats, incentive travel, and large groups. Custom-built around your schedule, group size, and objectives rather than pulled from a catalogue.",
  },
];

const ROUTES = [
  {
    name: "East Africa → UAE",
    status: "Active" as const,
    note: "High-volume professional corridor, all visa types supported",
  },
  {
    name: "India → GCC",
    status: "Active" as const,
    note: "Engineering, finance and healthcare dominant flow",
  },
  {
    name: "UK → East Africa",
    status: "Active" as const,
    note: "Senior management and development sector placements",
  },
  {
    name: "North Africa → Europe",
    status: "Active" as const,
    note: "Skilled trades, engineering and IT professionals",
  },
  {
    name: "West Africa → UAE",
    status: "Launching" as const,
    note: "Growing corridor, select visa categories supported",
  },
  {
    name: "India → UK",
    status: "Launching" as const,
    note: "Pending bilateral agreement, pre-registration open",
  },
];

const COMPLIANCE_TILES = [
  {
    icon: Shield,
    title: "Park & Conservancy Permits",
    note: "All national park fees, conservancy access permits, and reserve bookings handled before arrival. No surprises on the ground.",
  },
  {
    icon: Calendar,
    title: "Booking & Voucher Management",
    note: "End-to-end confirmation of accommodation, transfers, and activities. Every booking documented and shared with your team ahead of departure.",
  },
  {
    icon: HeartPulse,
    title: "Health & Entry Guidance",
    note: "We advise trade partners and travellers on vaccination requirements, travel insurance expectations, and country-specific entry documentation for Kenya, Tanzania, and Uganda. We guide, we don't process.",
  },
  {
    icon: Users,
    title: "Group Documentation",
    note: "For corporate and large-group bookings, we manage the full manifest: rooming lists, dietary requirements, transfer schedules, and emergency contacts in one place.",
  },
  {
    icon: Globe,
    title: "Customs & Cross-Border Briefing",
    note: "For multi-country itineraries crossing Kenya-Tanzania or Kenya-Uganda borders, we brief travellers on what to expect at each crossing, what documents to carry, and what fees apply.",
  },
  {
    icon: Briefcase,
    title: "Supplier Contracts & SLAs",
    note: "Every lodge, camp, and transport provider we work with operates under a documented agreement. Your clients are covered by our supplier relationships, not left to hope things work out.",
  },
];

export default function TravelPage() {
  return (
    <div>
      {/* DARK HERO */}
      <section className="relative overflow-hidden bg-primary-dark pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark to-primary-brand/20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-brand/20 blur-[80px] rounded-full pointer-events-none" />

        <div className="relative container-xl">
          <div className="text-xs text-white/30 mb-6">
            Luminyx Ventures / <span className="text-white/50">Ecosystem</span> / <span className="text-accent-purple">Travel</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/10 mb-6">
            <Plane className="w-3.5 h-3.5 text-accent-purple" />
            <span className="text-xs font-medium text-white/70 uppercase tracking-wider">TRAVEL</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Moving Talent Across Borders{" "}
                <span className="text-accent-purple">Intelligently</span>
              </h1>
              <p className="mt-5 text-white/60 text-lg leading-relaxed max-w-xl">
                We build the infrastructure that makes cross-border talent movement seamless — from opportunity identification to relocation, settlement, and integration.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="https://www.luminyxtravel.net/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Explore Travel <ArrowUpRight className="w-4 h-4" />
                </a>
                <Link href="/ecosystem" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/[0.08] transition-colors text-sm font-medium">
                  View All Divisions
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {[
                { value: "40+", label: "Destination Countries" },
                { value: "24/7", label: "Concierge Support" },
                { value: "Multi-City", label: "Itinerary Planning" },
                { value: "6", label: "Active Corridors" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl p-5 bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="font-display text-3xl font-bold text-white mb-1">{s.value}</div>
                  <div className="text-xs uppercase tracking-wider text-white/40">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE CAPABILITIES */}
      <section className="py-section-lg">
        <div className="container-xl">
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="chip mb-4 inline-flex">Infrastructure</div>
              <h2 className="font-display text-4xl md:text-[44px] font-bold text-navy tracking-tight leading-[1.1] mb-4">
                Six Infrastructure Capabilities
              </h2>
              <p className="text-ink-muted max-w-xl text-lg leading-relaxed">
                We handle every component of the movement lifecycle — nothing falls
                through the cracks between service providers.
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {INFRASTRUCTURE.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6 }}
                  className="group relative rounded-[26px] bg-white shadow-card-soft hover:shadow-elevated transition-shadow duration-300"
                >
                  {/* Static border — visible at rest */}
                  <div className="absolute inset-0 rounded-[26px] border border-light-gray group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />

                  {/* Animated gradient border — fades in on hover */}
                  <div className="animated-gradient-border absolute inset-0 rounded-[26px] p-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="w-full h-full rounded-[24.5px] bg-white" />
                  </div>

                  <div className="relative p-8 rounded-[26px] overflow-hidden">
                    {/* Ambient glow on hover */}
                    <div className="absolute -top-20 -left-20 w-48 h-48 rounded-full bg-primary-brand/0 group-hover:bg-primary-brand/10 blur-3xl transition-all duration-500 pointer-events-none" />

                    <div className="relative">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm"
                        style={{ background: "linear-gradient(135deg, #6D28D9, #A78BFA)" }}
                      >
                        <Icon className="w-6 h-6" style={{ color: "#FFFFFF" }} />
                      </div>
                      <h3 className="font-display text-lg font-semibold mb-2.5" style={{ color: "#111827" }}>
                        {cap.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#4B5563" }}>
                        {cap.description}
                      </p>
                    </div>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent-purple/0 to-transparent group-hover:via-accent-purple/60 transition-all duration-500" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── ACTIVE CORRIDORS ────────────────────────────────────────────────── */}
      <section className="py-section-lg bg-bg-subtle">
        <div className="container-xl">
          <div className="mb-12">
            <div className="chip mb-4 inline-flex">Corridors</div>
            <h2 className="font-display text-4xl md:text-[44px] font-bold tracking-tight leading-[1.1]" style={{ color: "#111827" }}>
              Active Corridors
            </h2>
          </div>
          <div className="rounded-2xl bg-white border border-light-gray overflow-hidden">
            {ROUTES.map((route, i) => (
              <motion.div
                key={route.name}
                whileHover={{ backgroundColor: "#FAFAFC" }}
                style={{
                  opacity: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "20px 24px",
                  borderBottom: i < ROUTES.length - 1 ? "1px solid #E5E7EB" : "none",
                }}
              >
                <div>
                  <div className="font-display text-sm font-semibold mb-1" style={{ color: "#111827" }}>{route.name}</div>
                  <div className="text-xs" style={{ color: "#6B7280" }}>{route.note}</div>
                </div>
                <StatusBadge status={route.status} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPLIANCE & DOCUMENTATION COVERAGE ─────────────────────────────── */}
      <section className="py-section-lg">
        <div className="container-xl">
          <div className="text-center mb-12">
            <div className="chip mb-4 inline-flex">Coverage</div>
            <h2 className="font-display text-4xl md:text-[44px] font-bold tracking-tight leading-[1.1] mb-4" style={{ color: "#111827" }}>
              Travel Documentation & Support
            </h2>
            <p className="max-w-xl mx-auto text-lg leading-relaxed" style={{ color: "#4B5563" }}>
              We handle the paperwork so your clients can focus on the experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {COMPLIANCE_TILES.map((tile, i) => {
              const Icon = tile.icon;
              return (
                <motion.div
                  key={tile.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6 }}
                  className="group relative rounded-[26px] bg-white shadow-card-soft hover:shadow-elevated transition-shadow duration-300"
                >
                  {/* Static border — visible at rest */}
                  <div className="absolute inset-0 rounded-[26px] border border-light-gray group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />

                  {/* Animated gradient border — fades in on hover */}
                  <div className="animated-gradient-border absolute inset-0 rounded-[26px] p-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="w-full h-full rounded-[24.5px] bg-white" />
                  </div>

                  <div className="relative p-7 rounded-[26px] overflow-hidden h-full">
                    {/* Ambient glow on hover */}
                    <div className="absolute -top-20 -left-20 w-48 h-48 rounded-full bg-primary-brand/0 group-hover:bg-primary-brand/10 blur-3xl transition-all duration-500 pointer-events-none" />

                    <div className="relative">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shadow-sm"
                        style={{ background: "linear-gradient(135deg, #6D28D9, #A78BFA)" }}
                      >
                        <Icon className="w-5 h-5" style={{ color: "#FFFFFF" }} />
                      </div>
                      <h3 className="font-display text-base font-semibold mb-2" style={{ color: "#111827" }}>
                        {tile.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#4B5563" }}>
                        {tile.note}
                      </p>
                    </div>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-accent-purple/0 to-transparent group-hover:via-accent-purple/60 transition-all duration-500" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DARK CTA */}
      <section className="py-16 px-4 md:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary-dark">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark to-primary-brand/30 pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-brand/20 blur-[60px] rounded-full pointer-events-none" />
          <div className="absolute inset-0 grid-pattern-bg opacity-[0.03] pointer-events-none" />

          <div className="relative container-xl py-20 text-center">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight">
              Ready to Move Talent{" "}
              <span className="text-accent-purple">Across Borders?</span>
            </h2>
            <p className="mt-5 text-white/60 max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re planning a single executive relocation or a multi-cohort corridor programme, we have the infrastructure to deliver it at any scale.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a href="https://www.luminyxtravel.net/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary-dark font-semibold hover:scale-105 transition-transform shadow-elevated">
                Get Started <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link href="/ecosystem" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/[0.08] transition-colors">
                Explore Other Divisions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

